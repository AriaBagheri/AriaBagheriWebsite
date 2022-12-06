import React from 'react';

type SectionProps = {
    isPadded?: boolean,
    padSize?: "large" | "medium" | "small",
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLElement>

function Section(props: SectionProps) {
    const {isPadded = false, padSize = "small", ...p} = props;
    return <section {...p} className={`${(isPadded) ? `padded-${padSize}` : ''} ${p.className}`}/>
}

export default Section;
