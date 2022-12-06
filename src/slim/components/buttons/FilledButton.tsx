import React from 'react';

type FilledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "small" | "medium" | "large"
}

function FilledButton(props: FilledButtonProps) {
    const {size, children} = props
    return (
        <button className={`button-filled button-${size || "small"}`} {...props}>
            {children}
        </button>
    );
}

export default FilledButton;