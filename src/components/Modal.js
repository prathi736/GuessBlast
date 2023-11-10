import React from 'react'

export default function Modal({ isCorrect, turn, sol, onClose }) {
    return (
        <div className='modal'>
            {isCorrect && (
                <div>
                    <h1>You Won!!</h1>
                    <p className='solution'>Answer: {sol}</p>
                    <p>You found the solution in {turn} guesses 😃</p>
                    {/* <button onClick={() => {  onClose(); }}>Close</button> */}
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>Never Give Up!!</h1>
                    <p className='solution'>Answer: {sol}</p>
                    <p>Keep Trying</p>
                    {/* <button onClick={onClose}>Close</button> */}
                </div>
            )}
        </div>
    )
}
