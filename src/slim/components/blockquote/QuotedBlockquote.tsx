import React from 'react';

type QuotedBlockquoteProps = {
    children: any,
    by: string
}


function QuotedBlockquote({children, by}: QuotedBlockquoteProps) {
    return (
        <blockquote className={`blockquote-quoted`}>
            {children}
            <cite>{by}</cite>
        </blockquote>
    );
}

export default QuotedBlockquote;