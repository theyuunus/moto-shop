import React from 'react'
import './Button.scss'

export default function Button({ link, text }) {
    return (
        <main className='main'>
            <a className='main-a' href={link} target='_blank' rel="noopener noreferrer">
                <button className='main-a-button'>
                    {text}
                </button>
            </a>
        </main>
    )
}
