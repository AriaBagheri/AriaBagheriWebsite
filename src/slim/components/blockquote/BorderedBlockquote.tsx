import React from 'react';

type BorderedBlockquoteProps = {
    children: any
}


function BorderedBlockquote({children}: BorderedBlockquoteProps) {
    return (
        <blockquote className={`blockquote-bordered`}>
            {children}
        </blockquote>
    );
}

export default BorderedBlockquote;