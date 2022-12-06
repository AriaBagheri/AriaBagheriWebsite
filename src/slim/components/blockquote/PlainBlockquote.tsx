import React from 'react';

type PlainBlockquoteProps = {
    children: any
}


function PlainBlockquote({children}: PlainBlockquoteProps) {
    return (
        <blockquote className={`blockquote-plain`}>
            {children}
        </blockquote>
    );
}

export default PlainBlockquote;