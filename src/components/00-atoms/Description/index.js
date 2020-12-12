import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function Description({ children }) {
    return <span className='desc'>{children}</span>
}

Description.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Description
