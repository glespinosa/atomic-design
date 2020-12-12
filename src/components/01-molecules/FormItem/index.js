import React from 'react'
import PropTypes from 'prop-types'
import { Label, TextInput } from '../../00-atoms'
import './index.scss'

function FormItem({ label, onChange, value, name }) {
    return (
        <div className='form-item'>
            <Label>{label}</Label>
            <TextInput name={name} onChange={onChange} value={value} />
        </div>
    )
}

FormItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default FormItem
