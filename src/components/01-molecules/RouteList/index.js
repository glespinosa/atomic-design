import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import { RouteLink } from '../../00-atoms'

function RouteList({ linkList }) {
    return (
        <ul className='nav-list'>
            {linkList.map((link, index) => {
                return (
                    <li key={index}>
                        <RouteLink destination={link.destination}>
                            {link.name}
                        </RouteLink>
                    </li>
                )
            })}
        </ul>
    )
}

RouteList.propTypes = {
    linkList: PropTypes.array,
}

export default RouteList
