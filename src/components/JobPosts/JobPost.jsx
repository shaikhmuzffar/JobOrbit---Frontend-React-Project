import React from 'react'
// testimonials

import testimonial1 from '../../images/testimoni1.jpg'
import testimonial2 from '../../images/testimoni2.jpg'
import testimonial3 from '../../images/testimoni3.jpg'
import testimonial4 from '../../images/testimoni4.jpg'


export default function JobPost({icon,compony,post,date,alertInfo,postDesc}) {
    return (
        <div class="jobPost">
            <div class="postDetails">
                <div class="componeyLogo">
                    <img src={icon} alt="" />
                </div>
                <div class="componeyInfo">
                    <p class="componeyName">{compony}</p>
                    <span class="positionName">{post}</span>
                    <small class="postDate">{date}</small>
                </div>
                <small class="postTag">
                    <i class="ri-notification-3-fill"></i>
                    <span>{alertInfo}</span>
                </small>
            </div>
            <div class="postMessage">
                <p>{postDesc}</p>
            </div>
            <div class="postUserActions">
                <a href="" class="applyNow">Apply Now</a>
                <div class="appliedPeoples">
                    <div class="appliedPeople">
                        <img src={testimonial1} />
                    </div>
                    <div class="appliedPeople">
                        <img src={testimonial2} />
                    </div>
                    <div class="appliedPeople">
                        <img src={testimonial3} />
                    </div>
                    <div class="appliedPeople">
                        <img src={testimonial4} />
                        <i class="ri-add-line more"></i>
                    </div>
                </div>
            </div>
            <div class="savePost">
                <i class="ri-bookmark-fill"></i>
            </div>
        </div>
    )
}
