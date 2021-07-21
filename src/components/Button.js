import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Button(props) {
    return (
        <div>
            <button className="btn btn-primary" onClick={props.handleClick}>{props.label}</button>
        </div>
    )
}

export default Button;