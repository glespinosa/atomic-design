import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function Heading({ children }) {
    return <h1 className='title'>{children}</h1>
}

Heading.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Heading
