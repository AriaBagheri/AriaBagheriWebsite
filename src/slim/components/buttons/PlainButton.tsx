import React from 'react';

type PlainButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { size: "small" | "medium" | "large" }

function PlainButton(p: PlainButtonProps) {
    const {size, children} = p;

    return (
        <button className={`button-plain button-${size}`} {...p}>
            {children}
        </button>
    );
}

export default PlainButton;