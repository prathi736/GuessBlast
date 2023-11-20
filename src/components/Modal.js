import React, { useState } from 'react'

export default function Modal({ isCorrect, turn, sol}) {

    const[modal, setModal] = useState(true);

    const closeModal = () => {
        setModal(false);
        // reloads the current document
        window.location.reload();
    };

    return (
        <>
            {modal && (
                <div className='modal'>
                    {isCorrect ? (
                        <div>
                            <h1>You Won!!</h1>
                            <p className='solution'>Answer: {sol}</p>
                            <p>You found the solution in {turn} guesses 😃</p>
                            <button onClick={closeModal}>Close</button>
                        </div>
                    ) : (
                        <div>
                            <h1>Never Give Up!!</h1>
                            <p className='solution'>Answer: {sol}</p>
                            <p>Keep Trying</p>
                            <button onClick={closeModal}>Close</button>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}
