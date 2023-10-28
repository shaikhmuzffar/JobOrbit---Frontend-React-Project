import React from 'react'

// css
import './steps.css'

// components
import Step from './Step'

// data
import steps from './stepsInfo'

export default function Steps() {
    return (
        <div className="stepsSection">
            <div className="steps container">
                {steps.map((step,index)=><Step key={index} icon={step.icon} title={step.title} subTitle={step.subTitle} />)}
            </div>
        </div>
    )
}
