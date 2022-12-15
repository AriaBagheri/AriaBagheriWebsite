export default function interpolate(x: number, x_array: number[], y_array: number[]) {
    if (x < x_array[0]) {
        return y_array[0]
    } else if (x > x_array[x_array.length - 1]) {
        return y_array[y_array.length - 1]
    }
    let interpolate_end = 1;
    let interpolate_start = 0;
    let interpolate_x_end = 1;
    let interpolate_x_start = 0;

    for (let i = 0; i < x_array.length; i++) {
        if (x >= x_array[i]) {
            interpolate_end = y_array[i + 1];
            interpolate_start = y_array[i];
            interpolate_x_end = x_array[i + 1];
            interpolate_x_start = x_array[i];
        } else if (x == x_array[i]){
            return y_array[i]
        }
    }
    const interpolated_value = interpolate_start + (interpolate_end - interpolate_start) / (interpolate_x_end - interpolate_x_start) * (x - interpolate_x_start)
    const max_v = Math.max(interpolate_start, interpolate_end);
    const min_v = Math.min(interpolate_start, interpolate_end);
    return Math.min(max_v, Math.max(min_v, interpolated_value))
}
