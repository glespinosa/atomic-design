import React from 'react'
import { RouteList } from '../../01-molecules'
import './index.scss'
function Navigation({ linkList }) {
    return (
        <div className='navigation'>
            <RouteList linkList={linkList} />
        </div>
    )
}

export default Navigation
