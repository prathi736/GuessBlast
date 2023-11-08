import React from 'react'
import Row from './Row'

export default function Grid({ currGuess, guess, turn }) {
    return (
        <div>
            {guess.map((g,i) => {
                return <Row key={i} guess={g} />
            })}
        </div>
    )
}

