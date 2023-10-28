import React from 'react'
import './sectionHeading.css'

export default function SectionHeading(props) {
    return (
        <div className='sectionHeadingText' style={{alignItems:props.pattern}}>
            <h1 class="sectionHeadingTextTitle ">{props.title1} <span>{props.titleGreen}</span></h1>
            <p class="sectionHeadingTextPara">{props.para}
            </p>
        </div>
    )
}