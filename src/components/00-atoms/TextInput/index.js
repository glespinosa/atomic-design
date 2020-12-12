import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'

function TextInput(props) {
    const { onChange, placeholder, value, name } = props

    return (
        <input
            className='text-input'
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            type='text'
            autoComplete='off'
        />
    )
}

TextInput.propTypes = {
    placeholder: PropTypes.string,
}

TextInput.defaultProps = {
    placeholder: '',
}

export default TextInput
