import React from 'react';

type ButtonProps = {
    children: string
}

function Button(props: ButtonProps) {
    return (
        <button 
            type='submit'
            className='buttonSubmit'>
            {props.children}
        </button>
    );
}

export default Button;