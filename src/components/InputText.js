import React from 'react'


function InputText(props) {
    return (
        <div>
          <input type="text" value={props.value} placeholder={props.placeholder} 
          onChange={e => props.handleChange(e.target.value)} />
        </div>
    )
}

export default InputText;