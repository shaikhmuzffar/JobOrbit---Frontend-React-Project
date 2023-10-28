import React from 'react'
import './newsLetter.css'
import { IoIosSend } from 'react-icons/io'

export default function NewsLetter() {
    return (
        <div className='newsLetterSection'>
            <div className="newsLetter container">
                <div className="newsLetterInfo">
                    <h1>Subscribe Our <span>Newsletter</span> & get</h1>
                    <h1>all job releated <span>updates!</span></h1>
                </div>
                <div className="newsLetterSearchBox">
                    <input type="text" placeholder='muzffarShaikh82@gmail.com' />
                    <a href="" className="btn"><IoIosSend /> Subscribe</a>
                </div>
            </div>
        </div>
    )
}
