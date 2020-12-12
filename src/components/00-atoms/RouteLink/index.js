import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function RouteLink({ children, destination }) {
    return (
        <NavLink
            exact
            to={destination}
            className='link'
            activeClassName='active-link'
        >
            {children}
        </NavLink>
    )
}

RouteLink.propTypes = {
    destination: PropTypes.string.isRequired,
}

export default RouteLink
