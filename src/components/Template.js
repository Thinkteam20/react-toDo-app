import React from 'react';
import App from '../App';

const Template = ({children}) => {
    return(
    <div>
        <div>Today Todos(0)</div>
        <div>{children}</div>
    </div>
    );
}

export default Template;