'use client';
import React, {useEffect} from 'react';

function PagePaddingManager({isPadded, padSize}: {
    isPadded: boolean,
    padSize: "large" | "medium" | "small",
}) {
    useEffect(() => {
        document.body.classList.remove("padded-large", "padded-medium", "padded-small");
        if (isPadded) {
            document.body.classList.add(`padded-${padSize}`);
        }
    }, [isPadded, padSize]);
    return (
        <></>
    );
}

export default PagePaddingManager;