import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

function Icon({ children }) {
    return <span className='icon'>{children}</span>
}

Icon.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Icon
