import React from 'react'
import './index.scss'
import { Button, Label } from '../../00-atoms'

function Form({ children, onSubmit, errorMsg }) {
    return (
        <form className='form' onSubmit={onSubmit}>
            {children}
            <Button size='large'>Submit</Button>
            <div className='form-error'>
                <Label>{errorMsg}</Label>
            </div>
        </form>
    )
}

export default Form
