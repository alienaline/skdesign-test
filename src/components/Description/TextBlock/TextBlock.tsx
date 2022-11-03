import React from 'react';

interface ITextBlockProps {
    children: string | React.ReactNode
}

function TextBlock(props: ITextBlockProps): JSX.Element {
    return (
        <p className='textBlock'>{props.children}</p>
    );
}

export default TextBlock;