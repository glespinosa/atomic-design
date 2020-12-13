import React from 'react'
import { RouteList } from '../../01-molecules'
import './index.scss'
function Navigation({ children, linkList }) {
    return (
        <div className='navigation'>
            <RouteList linkList={linkList} />
            {children !== undefined && (
                <div className='navigation-children'>{children}</div>
            )}
        </div>
    )
}

export default Navigation
