import React from 'react'
import './index.scss'
function RadioButtonGroup({ options, name, selected, onChange }) {
    return (
        <div className='radio-button-group'>
            {options.map((option, idx) => {
                return (
                    <React.Fragment key={idx}>
                        <input
                            type='radio'
                            name={name}
                            value={option}
                            checked={option === selected}
                            onChange={onChange}
                        />
                        {option}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default RadioButtonGroup
