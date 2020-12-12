import React from 'react'
import './index.scss'
import { Description } from '../../00-atoms'

function Footer() {
    return (
        <footer>
            <div className='footer-content'>
                <Description>
                    Created with the use of React JS and Atomic Design System.
                </Description>
                <Description>Gian Espinosa</Description>
            </div>
        </footer>
    )
}

export default Footer
