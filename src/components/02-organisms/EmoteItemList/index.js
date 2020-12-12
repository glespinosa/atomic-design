import React from 'react'
import EmoteItem from '../../01-molecules/EmoteItem'
import PropTypes from 'prop-types'
import './index.scss'

function EmoteItemList({ data }) {
    if (data.length === 0) return null
    return (
        <div className='emote-item-list'>
            {data.map((d, index) => (
                <EmoteItem {...d} key={index} />
            ))}
        </div>
    )
}

EmoteItemList.propTypes = {
    data: PropTypes.array.isRequired,
}

EmoteItemList.defaultProps = {
    data: [],
}

export default EmoteItemList
