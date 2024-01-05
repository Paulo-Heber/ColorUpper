import React, { useState } from 'react'
import { Button } from '../button/button.jsx';

const placeholder = ['Insira o texto', 'Insira a cor']

export function Card() {
    const [colorInputValue, setColorInputValue] = useState('');
    const [textInputValue, setTextInputValue] = useState('');
    const [resetCard, setResetCard] = useState('');

    const resetUpdade = (state) =>{
        setResetCard(state)
    }

    return (
        <>
            {
                placeholder.map((placeholder, index) => {
                    return (
                        <input
                            type="text"
                            placeholder={placeholder}
                            key={index}
                            value={index === 0 ? textInputValue : colorInputValue}
                            onChange={(event) => {
                                if (index === 0) {
                                    setTextInputValue(event.target.value);
                                    setResetCard(false)
                                } else {
                                    setColorInputValue(event.target.value);
                                    setResetCard(false)
                                }
                        }}/>
                    )
                })

            }

            <Button label='Estilizar texto'
                textInputValue={textInputValue}
                colorInputValue={colorInputValue}
                resetCard={resetCard}
                resetUpdade={resetUpdade}
            />
        </>
    )
}


