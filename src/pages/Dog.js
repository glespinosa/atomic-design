import React, { useState } from 'react'
import { Heading, Label } from '../components/00-atoms'
import { FormItem, ImagePanel } from '../components/01-molecules'
import RadioButtonGroup from '../components/01-molecules/RadioButtonGroup'
import { Form, LinearList } from '../components/02-organisms'
import { Layout } from '../components/03-templates'

import leftDog from '../assets/images/leftDog.jpg'
import rightDog from '../assets/images/rightDog.jpg'

function Dog() {
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [selected, setSelected] = useState('left')
    const [imgPanel, setImgPanel] = useState([])

    const handleChange = (e) => {
        setSelected(e.target.value)
    }

    const handleClick = (image, id) => {
        let setImage = image.toLowerCase().includes('rightdog')
            ? leftDog
            : rightDog

        const editPanel = imgPanel.map((d) => {
            if (d.id === id) return { ...d, image: setImage }
            else return { ...d }
        })
        setImgPanel(editPanel)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const d = new Date()
        if (name.trim() === '') {
            setError("Please enter dog's name")
            return
        } else setError('')

        setName('')
        const data = {
            id: d.toString(),
            picName: name,
            image: selected === 'left' ? leftDog : rightDog,
        }

        setImgPanel((prevState) => {
            let a = [...prevState]
            a.splice(0, 0, data)
            return a
        })
    }

    return (
        <Layout>
            <Form onSubmit={handleSubmit} errorMsg={error}>
                <Heading>Please add your Dog's name</Heading>
                <FormItem
                    label={'Dog Name:'}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name='name'
                />
                <Label>Dog's direction</Label>

                <RadioButtonGroup
                    options={['left', 'right']}
                    name='direction'
                    selected={selected}
                    onChange={handleChange}
                />
            </Form>

            <LinearList>
                {imgPanel.map((data, idx) => {
                    return (
                        <ImagePanel
                            key={idx}
                            picName={data.picName}
                            image={data.image}
                            onClick={() => handleClick(data.image, data.id)}
                        />
                    )
                })}
            </LinearList>
        </Layout>
    )
}

export default Dog
