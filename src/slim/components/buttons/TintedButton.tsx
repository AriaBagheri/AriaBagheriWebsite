import React from 'react';

type TintedButtonProps = {
    children: any,
    size: "small" | "medium" | "large"
}


function TintedButton({size, children}: TintedButtonProps) {
    return (
        <button className={`button-tinted button-${size}`}>
            {children}
        </button>
    );
}

export default TintedButton;