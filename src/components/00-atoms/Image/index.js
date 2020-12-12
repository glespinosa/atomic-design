import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export const IMAGE_SIZE = {
    THUMBNAIL: 'thumbnail',
}

function Image({ image, size }) {
    return <img className={size} src={image} alt={image} />
}

Image.propTypes = {
    image: PropTypes.string,
    size: PropTypes.string,
}

Image.defaultProps = {
    size: IMAGE_SIZE.THUMBNAIL,
}

export default Image
