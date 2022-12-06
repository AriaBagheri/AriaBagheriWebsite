import React from 'react';

type GrayButtonProps = {
    children: any,
    size: "small" | "medium" | "large"
}


function GrayButton({size, children}: GrayButtonProps) {
    return (
        <button className={`button-gray button-${size}`}>
            {children}
        </button>
    );
}

export default GrayButton;