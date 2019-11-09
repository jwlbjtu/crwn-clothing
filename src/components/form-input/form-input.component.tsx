import React from 'react';

import { FormInputProps } from 'form-input-component-types';

import './form-input.styles.scss';

const FormInput: React.FC<FormInputProps> = ({handleChange, label, ...otherInputProps}) => (
    <div className='group'>
        <input 
            className='form-input'
            {...otherInputProps}
            onChange={handleChange}
        />
        {
            label ? 
            (<label className={`${
                otherInputProps.value.length ? 'shrink' : ''
                } form-input-label`}
            >
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;