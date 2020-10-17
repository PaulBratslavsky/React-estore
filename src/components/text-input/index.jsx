import React from 'react'
import './text-input.scss'

export default function TextInput({
    onChange, 
    value, 
    label, 
    ...rest
    }) {
    return <div className={'text-input-group'}>
        { label && <label 
            className={`text-input-label ${value.length > 0 ? 'shrink' : ''}`}>
                {label}</label> }
        <input className={'text-input-field'} 
            value={value}
            onChange={onChange}   
            {...rest}
        />  
    </div>
}
