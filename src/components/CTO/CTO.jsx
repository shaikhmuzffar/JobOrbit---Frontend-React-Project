import React from 'react'

// css
import './CTO.css'

// images
import testimonial1 from '../../images/testimoni1.jpg'
import testimonial2 from '../../images/testimoni2.jpg'
import testimonial3 from '../../images/testimoni3.jpg'
import testimonial4 from '../../images/testimoni4.jpg'
export default function CTO({flexStyle,...props}) {
    return (
        <div class="CTOSection">
            <div class="CTO container" >
                <div class="CTOLeftBox">
                    <img className='jobHoldersImg' src={props.CtoImg} alt="" />
                </div>
                <div class="CTORightBox">
                    <div class="CTORighBoxHeaders">
                        <h1>{props.Ctotitle1}<span>{props.CtoGreenText}</span></h1>
                        <h1>{props.Ctotitle2}</h1>
                        <h1>{props.Ctotitle3}</h1>
                    </div>
                    <p class="CTORighBoxDescription">
                        {props.CtoDesc}
                    </p>
                    <a href="" class="CTOBTN btn">{props.CtoBtn}</a>
                </div>
            </div>
        </div>
    )
}
