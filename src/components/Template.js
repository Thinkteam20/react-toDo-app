import React from 'react';
import App from '../App';
import './Template.css';

const Template = ({children, todoLength}) => {
    return(
    <div className="Template">
        <div className="title">Today Todos({todoLength})</div>
        <div>{children}</div>
    </div>
    );
}

export default Template;