import React from 'react'
import './testimonial.css'
import SectionHeading from '../SectionHeading/SectionHeading'

// images
import testimony1 from '../../assets/Images/testimony1.png'
import testimony2 from '../../assets/Images/testimony2.png'
import testimony3 from '../../assets/Images/testimony3.png'
export default function Testimonials() {
    const tesimonialData = [{
        img:testimony1,
        name: "Michael Smith",
        jobTitle: "Software Engineer",
        company: "XYZ Solutions",
        testimonial: "I landed my dream job as a Software Engineer at XYZ Solutions, all thanks to this amazing job finding website."
    },
    {
        img:testimony2,
        name: "Sarah Williams",
        jobTitle: "Financial Analyst",
        company: "Global Finance Group",
        testimonial: "Grateful for this job finding website! It led me to the perfect role as a Financial Analyst at Global Finance Group. "
    },
    {
        img:testimony3,
        name: "David Martinez",
        jobTitle: "Sales Representative",
        company: "Innovative Sales Co.",
        testimonial: "Highly recommend this job finding website. Secured my position as a Sales Representative at Innovative Sales Co."
    }
    ]
    return (
        <div className='TestimonialsSection'>
            <div className="tesimonialsHeading conttainer">
                <SectionHeading title1="our" titleGreen="Testimonials" para="Lorem ipsum dolor sit amet consectetur adipisicing." pattern="center" />
            </div>
            <div className="testimonials container">
                {
                    tesimonialData.map((testimoni,index) =>
                        <div className="testimonial" key={index}>
                            <div className="testimonialImg">
                                <img src={testimoni.img} alt="" />
                            </div>
                            <p className="testimonialMsg">
                               {testimoni.testimonial}
                            </p>
                            <div className="testimonialInfo">
                                <span className="testimonialName">
                                    {testimoni.name}
                                </span>
                                <span className="postion">
                                    {testimoni.jobTitle} at {testimoni.company}
                                </span>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}
