import React from 'react';
import './button.css';

const Button = ({ children, styling, search }) => {
    return (
        <>
            <button className={` ${search ? '' : 'button'}  ${styling}`}>
                {children}
            </button>
        </>
    )
}

export default Button;
