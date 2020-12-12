import React from 'react'
import './index.scss'
import { Button, Image, Label } from '../../00-atoms'

function ImagePanel({ picName, image, size, buttonName, onClick }) {
    return (
        <div className='image-panel'>
            <Label>{picName}</Label>
            <Image size={size} image={image} />
            <Button onClick={onClick} size='large'>
                {buttonName}
            </Button>
        </div>
    )
}

ImagePanel.defaultProps = {
    size: 'thumbnail',
    buttonName: 'Reverse Direction',
}

export default ImagePanel
