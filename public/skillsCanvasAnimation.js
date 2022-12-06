const PERLIN_YWRAPB = 4
const PERLIN_YWRAP = 1 << PERLIN_YWRAPB
const PERLIN_ZWRAPB = 8
const PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB
const PERLIN_SIZE = 4095

let perlin_octaves = 4 // default to medium smooth
let perlin_amp_falloff = 0.5 // 50% reduction/octave

const scaled_cosine = (i) => 0.5 * (1.0 - Math.cos(i * Math.PI))

let perlin // will be initialized lazily by noise() or noiseSeed()

let clientX = 0;
let clientY = 0;

const noise = function (x, y = 0, z = 0) {
    if (perlin == null) {
        perlin = new Array(PERLIN_SIZE + 1)
        for (let i = 0; i < PERLIN_SIZE + 1; i++) {
            perlin[i] = Math.random()
        }
    }

    if (x < 0) {
        x = -x
    }
    if (y < 0) {
        y = -y
    }
    if (z < 0) {
        z = -z
    }

    let xi = Math.floor(x),
        yi = Math.floor(y),
        zi = Math.floor(z)
    let xf = x - xi
    let yf = y - yi
    let zf = z - zi
    let rxf, ryf

    let r = 0
    let ampl = 0.5

    let n1, n2, n3

    for (let o = 0; o < perlin_octaves; o++) {
        let of = xi + (yi << PERLIN_YWRAPB) + (zi << PERLIN_ZWRAPB)

        rxf = scaled_cosine(xf)
        ryf = scaled_cosine(yf)

        n1 = perlin[of & PERLIN_SIZE]
        n1 += rxf * (perlin[(of + 1) & PERLIN_SIZE] - n1)
        n2 = perlin[(of + PERLIN_YWRAP) & PERLIN_SIZE]
        n2 += rxf * (perlin[(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n2)
        n1 += ryf * (n2 - n1)

        of += PERLIN_ZWRAP
        n2 = perlin[of & PERLIN_SIZE]
        n2 += rxf * (perlin[(of + 1) & PERLIN_SIZE] - n2)
        n3 = perlin[(of + PERLIN_YWRAP) & PERLIN_SIZE]
        n3 += rxf * (perlin[(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n3)
        n2 += ryf * (n3 - n2)

        n1 += scaled_cosine(zf) * (n2 - n1)

        r += n1 * ampl
        ampl *= perlin_amp_falloff
        xi <<= 1
        xf *= 2
        yi <<= 1
        yf *= 2
        zi <<= 1
        zf *= 2

        if (xf >= 1.0) {
            xi++
            xf--
        }
        if (yf >= 1.0) {
            yi++
            yf--
        }
        if (zf >= 1.0) {
            zi++
            zf--
        }
    }
    return r
}

let canvas = document.getElementById("skillsCanvas");
let ctx = canvas.getContext("2d");
let cw = (canvas.width = window.innerWidth);
let ch = (canvas.height = window.innerHeight);
let rid = null; // request animation id
let color1 = "#00000000";
let color2 = "#5E5CE6";
let time = 0;

class Particle {
    constructor() {
        this.pos = {x: Math.random() * cw, y: Math.random() * ch};
        this.vel = {x: 0, y: 0};
        this.base = (1 + Math.random()) * 4;
        this.life = randomIntFromInterval(5, 200);
        this.isColor1 = Math.random() < .3;
        this.history = [];
    }

    update() {
        this.history.push({x: this.pos.x, y: this.pos.y});
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }

    show() {
        this.life--;
        ctx.beginPath();
        let last = this.history.length - 1;
        ctx.moveTo(this.history[last].x, this.history[last].y);
        for (let i = last; i > 0; i--) {
            ctx.lineTo(this.history[i].x, this.history[i].y);
        }
        ctx.strokeStyle = this.color;
        ctx.stroke();

        if (this.history.length > this.life) {
            this.history.splice(0, 1);
        }
    }

    edges() {
        if (
            this.pos.x > cw ||
            this.pos.x < 0 ||
            this.pos.y > ch ||
            this.pos.y < 0
        ) {
            this.pos.y = Math.random() * ch;
            this.pos.x = Math.random() * cw;
            this.history.length = 0;
        }
        if (this.life <= 0) {
            this.pos.y = Math.random() * ch;
            this.pos.x = Math.random() * cw;
            this.life = randomIntFromInterval(5, 200);
            this.history.length = 0;
        }
    }

    follow() {
        let x = ~~(this.pos.x / size);
        let y = ~~(this.pos.y / size);

        let angle = flowField[y][x];

        this.vel.x = noise(x, clientX, time) * this.base * Math.cos(angle);
        this.vel.y = noise(x, clientX, time) * this.base * Math.sin(angle);

        // this.vel.x = ((cw / clientX - x) / Math.abs(cw / clientX - x)) *  this.base * Math.cos(angle + (clientX / 20, clientY / 20) * Math.PI * 2);
        // this.vel.y = ((y - ch / clientY) / Math.abs(y - ch / clientY)) * this.base * Math.sin(angle + (clientX / 20, clientY / 20) * Math.PI * 2);
    }
    updateColor(){
        this.color = this.isColor1 ? color1 : color2
    }
}

let particles = [];

let size = 15; //flow field cell size
let rows = ~~(ch / size) + 2;
let cols = ~~(cw / size) + 2;

let flowField = [[]];

function getFlowField(rows, cols) {
    for (y = 0; y <= rows; y++) {
        flowField[y] = new Array(cols);
        for (x = 0; x < cols; x++) {
            flowField[y][x] = (noise(x / 20 + time, y / 20 + time) + (clientX / 20, clientY / 20)) * Math.PI * 2;
        }
    }
}

getFlowField(rows, cols);

for (let i = 0; i < 1000; i++) {
    particles.push(new Particle());
}

function frame() {
    rid = requestAnimationFrame(frame);
    const c1 = getComputedStyle(canvas).getPropertyValue('--background-color-shadow');
    const c2 = getComputedStyle(canvas).getPropertyValue('--tint-main');
    if (c1 !== color1 || c2 !== color2){
        color1 = c1;
        color2 = c2;
        ctx.fillRect(0, 0, cw, ch);
    }

    particles.map(p => {
        p.updateColor()
        p.follow();
        p.update();
        p.show();
        p.edges();
    });
}

function Init() {
    cw = canvas.width = window.innerWidth;
    ch = canvas.height = window.innerHeight;

    rows = ~~(ch / size) + 2;
    cols = ~~(cw / size) + 2;

    flowField = new Array(rows);
    getFlowField(rows, cols);

    if (rid) {
        window.cancelAnimationFrame(rid);
        rid = null;
    }
    frame();
    time = time + 10;
}

function mouseUpdate(e) {
    clientX = e.clientX;
    clientY = e.clientY;
}

window.setTimeout(function () {
    Init();

    window.addEventListener("resize", Init, false);
    window.addEventListener("load", mouseUpdate, false);
    window.addEventListener("mouseover", mouseUpdate, false);
}, 15);


function randomIntFromInterval(mn, mx) {
    return Math.floor(Math.random() * (mx - mn + 1) + mn);
}
