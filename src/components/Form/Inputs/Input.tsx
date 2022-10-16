import React, { useRef, useEffect, useState } from 'react';

type InputProps = {
    children: string,
    placeholder: string
}

function Input(props: InputProps) {
    const [focused, setFocused] = useState(false);
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setFocused(false);
            }
        };
        document.addEventListener('click', handleOutsideClick, true);
        return () => {
            document.removeEventListener('click', handleOutsideClick, true);
        };
    }, []);

    return (
        <fieldset className={`fieldset ${focused ? 'focuseFieldset' : ''}`}>
            <legend className={`legend ${focused ? 'focuseLegend' : ''}`}>{props.children}</legend>
            <input 
                type='text' 
                placeholder={props.placeholder}
                className='input'
                ref={inputRef}
                onClick={() => setFocused(true)}>
            </input>
        </fieldset>
    );
}

export default Input;