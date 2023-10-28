import React from 'react'

export default function Category({icon,title,desc}) {
  return (
    <div class="category">
      <div class="categoryIcon">
        <img src={icon} alt="" />
      </div>
      <span class="categoryTitle">{title}</span>
      <span class="categoryDesc">{desc}</span>
    </div>
  )
}
