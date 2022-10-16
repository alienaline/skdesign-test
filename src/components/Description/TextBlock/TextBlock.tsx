import React from 'react';

type TextBlockProps = {
    children: string | React.ReactNode
}

function TextBlock(props: TextBlockProps) {
    return (
        <p className='textBlock'>{props.children}</p>
    );
}

export default TextBlock;