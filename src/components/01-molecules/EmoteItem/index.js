import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Description, Icon } from '../../00-atoms'
import './index.scss'

function EmoteItem({ name, desc, icon }) {
    return (
        <div className='emote-item'>
            <div className='emote-column'>
                <Icon>{icon}</Icon>
            </div>
            <div className='emote-column'>
                <Heading>{name}</Heading>
                <Description>{desc}</Description>
            </div>
        </div>
    )
}

EmoteItem.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default EmoteItem
