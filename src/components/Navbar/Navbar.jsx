import React from 'react'
import './navbar.css'
import { BiUser } from 'react-icons/bi'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { HiMenuAlt3 } from 'react-icons/hi'
import { GrFormClose } from 'react-icons/gr'
import { useState } from 'react'
export default function Navbar() {
    const [showMobileMenu,setShowMobileMenu]=useState(false)
    return (
        <div className='navbarSection '>
            <nav className="navigation container">
                <div className="logo">
                    <span>Job<i className="ri-search-line"></i>rbit</span>
                </div>
                <ul className={showMobileMenu? "navbar mobile":"navbar"}>
                    <li className="navItem" onClick={()=>setShowMobileMenu(false)}><a className="navItemlink">home</a></li>
                    <li className="navItem" onClick={()=>setShowMobileMenu(false)}><a className="navItemlink">categories</a></li>
                    <li className="navItem" onClick={()=>setShowMobileMenu(false)}><a className="navItemlink">about us</a></li>
                    <li className="navItem" onClick={()=>setShowMobileMenu(false)}><a className="navItemlink">our app</a></li>
                    <li className="navItem" onClick={()=>setShowMobileMenu(false)}><a className="navItemlink">contact</a></li>
                </ul>
                <div className="userActions">
                    <a href=""><AiOutlineCloudUpload /><span>upload resume</span></a>
                    <a href=""><BiUser /><span>my Account</span></a>
                    <a className="btn createAccount">create Account</a>
                    {
                        !showMobileMenu?<span className='mobileMenuIcon' onClick={()=>setShowMobileMenu(true)} ><HiMenuAlt3 /></span>
                        : <span className='close' onClick={()=>setShowMobileMenu(false)} ><GrFormClose /></span>
                    }
                </div>
            </nav>
        </div>
    )
}
