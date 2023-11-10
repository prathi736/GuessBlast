import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Keypad({ usedKeys }) {

    const [letter, setLetter] = useState(null)

    useEffect(() => {

        axios.get('http://localhost:5000/letters')
        .then((response) => {
            setLetter(response.data)
        })
        .catch(error => {
            console.error('Error in fetching data', error);
        })

    }, [])

    return (
        <div className='keypad'>
            { letter && letter.map((l) => {
                const color = usedKeys[l.key]
                return (
                    <div key={l.key} className={color}>{l.key}</div>
                )
            })}
        </div>
    )
}
