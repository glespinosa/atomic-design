import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function Link({ children, dest, title }) {
    return (
        <a className='anchor-link' title={title} href={dest} target='blank'>
            {children}
        </a>
    )
}

Link.propTypes = {
    dest: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Link
