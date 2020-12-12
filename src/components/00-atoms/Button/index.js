import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'

export const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

export const ButtonTheme = {
    DEFAULT: 'default',
    ROUNDED: 'rounded',
}

function Button(props) {
    const { children, onClick, theme, size, disabled } = props
    let classNames = `button ${theme} ${size} `
    if (disabled) classNames += 'disabled'
    return (
        <>
            <button
                className={classNames}
                disabled={disabled}
                onClick={(e) => onClick(e)}
            >
                {children}
            </button>
        </>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    size: PropTypes.string,
}

Button.defaultProps = {
    theme: ButtonTheme.DEFAULT,
    size: ButtonSize.MEDIUM,
    disabled: false,
    onClick: () => {},
}

export default Button
