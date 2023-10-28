import React from 'react'

export default function Step({icon,title,subTitle}) {
  return (
    <div className="step">
    <div className="stepIcon">
        <div className="polygon"></div>
        <i className={icon}></i>
    </div>
    <div className="stepTitle">{title}</div>
    <div className="stepSubTitle">{subTitle}</div>
</div>
  )
}
