import React from 'react';

type HeaderProp = {
    value: string
}

function Header(props: HeaderProp) {
    return (
        <p className='header'>{props.value}</p>
    );
}

export default Header;