import React from 'react'

// css
import './hero.css'

// images
import heroImg from '../../assets/Images/hero.png'
import microsoft from '../../images/microsoft-store.png'
import google from '../../images/google.png'
import behance from '../../images/behance.png'
import instagram from '../../images/instagram.png'

// icon
import {FiSearch} from 'react-icons/fi'

export default function Hero() {
    return (
        <div className='heroSection '>
            <div className="heroBox container">
                {/* <!-- leftBox | hero Image --> */}

                <div className="leftbox">
                    <div className="infoBox">
                        <p className="greeLine"><span>new</span> Stay connected to Get upcoming job with #Getjob</p>
                        <div>
                            <h1 className="Title1">Find your job & </h1>
                            <h1 className="Title2">make sure goal.</h1>
                        </div>
                        <span className="subTitle">Your dream job is waiting for you</span>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="text" placeholder="job title or keyword" />
                            <input type="text" placeholder="city or zipcode" />
                        </div>
                        <a className="btn searchBtn" href=""><FiSearch/> <span>Search</span> </a>
                    </div>
                    <div className="herosocailMedia">
                        <small>we are trusted by:</small>
                        <div className="socialMedias">
                            <div className="smedia"><img src={google} alt="" /></div>
                            <div className="smedia"><img src={instagram} alt="" /></div>
                            <div className="smedia"><img src={behance} alt="" /></div>
                            <div className="smedia"><img src={microsoft} alt="" /></div>
                        </div>
                    </div>
                </div>
                {/* <!-- rightBox | hero Image --> */}
                <div className="rightBox">
                    <img src={heroImg} alt="" />
                    {/* <img src={heroImg} alt="" />
                    <!-- message -->
                    <div className="messageBox">
                        <div className="userImg">
                            <img src={profileImg} width="10px" alt="" />
                        </div>
                        <div className="message">
                            <span>Hi,</span>
                            <span>i am looking for, could you explain more details?</span>
                        </div>
                        <span className="time">3:52 PM</span>
                    </div>
                    <!-- notfication -->
                    <div className="notifications">
                        <div className="email">
                            <img src={email} alt="" />
                        </div>
                        <div className="emailMessage">
                            <span>Congrats!</span>
                            <span>You have got an Email</span>
                        </div>
                        <div className="emailtick">
                            <i className="ri-check-fill"></i>
                        </div>
                    </div>
                    <!-- Pdf -->
                    <div className="upload">
                        <div className="pdfImg">
                            <img src={pdf} alt="" />
                        </div>
                        <span className="upCV">upload CV</span>
                    </div>
                    <div className="jobHolder">
                        <span>10k+ jobholder Get job</span>
                        <div className="jobholderImgBox">
                            <div className="jobholderImg">
                                <img src={testimonial1} width="20px" alt="" />
                            </div>
                            <div className="jobholderImg">
                                <img src={testimonial2} width="20px" alt="" />
                            </div>
                            <div className="jobholderImg">
                                <img src={testimonial3} width="20px" alt="" />
                            </div>
                            <div className="jobholderImg">
                                <img src={testimonial4} width="20px" alt="" />
                            </div>
                            <div className="jobholderImg">
                                <img src={add} width="20px" alt="" />
                            </div>
                        </div>
                        <span className="heart"><img src={heart} alt="" /></span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
