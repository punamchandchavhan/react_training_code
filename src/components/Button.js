import React from 'react';



function Button(props) {
    return (
        <div>
            <button onClick={props.handleClick}>{props.label}</button>
        </div>
    )
}

export default Button;