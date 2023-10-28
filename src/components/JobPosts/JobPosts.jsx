import React, { useState } from 'react'

// css
import './jobpost.css'

// components
import JobPost from './JobPost'

// jobpostInfo
import jobPost from './jobpostInfo';




export default function JobPosts() {
    const [page,setPage]=useState(0)
    return (
        <div class="jobPostsSection">
            <h1 class="sectionHeading container">Latests <span>Job</span> Here </h1>
            <div class="jobPosts container">
{
    jobPost[page].map((jobPost,index)=> <JobPost key={index} icon={jobPost.icon} compony={jobPost.company} post={jobPost.post} date={jobPost.date} alertInfo={jobPost.alertInfo} postDesc={jobPost.postDesc} /> )
}
            </div>
            <div class="pagination container">
                <div className={page===0?"page active":"page"} onClick={()=>setPage(0)} >
                    1
                </div>
                <div className={page===1?"page active":"page"} onClick={()=>setPage(1)} >
                    2
                </div>
                <div className={page===2?"page active":"page"} onClick={()=>setPage(2)} >
                    3
                </div>
                <div className={page===3?"page active":"page"} onClick={()=>setPage(3)}>
                    4
                </div>
                <div className={page===4?"page active":"page"} onClick={()=>setPage(4)} >
                    5
                </div>
            </div>
        </div>
    )
}
