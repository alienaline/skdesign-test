import React from 'react';

interface IHeaderProp {
    value: string
}

function Header(props: IHeaderProp): JSX.Element {
    return (
        <p className='header'>{props.value}</p>
    );
}

export default Header;