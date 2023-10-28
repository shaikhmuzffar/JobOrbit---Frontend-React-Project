import React from 'react'

// css
import './JobCategary.css'

// components
import Category from './Category'
import SectionHeading from '../SectionHeading/SectionHeading'

// categary data
import jobCategory from './categoryInfo'

export default function JobCategary() {

  return (
    <div class="JobCategarySection">
      <SectionHeading title1="Browse Jobs" titleGreen="Category" para="Lorem ipsum dolor sit amet consectetur adipisicing." pattern="center"/>
      <div class="JobCategary container">
        {
          jobCategory.map((job,index) => <Category key={index} icon={job.icon} title={job.category} desc={job.description} />)
        }
      </div>
    </div>
  )
}
