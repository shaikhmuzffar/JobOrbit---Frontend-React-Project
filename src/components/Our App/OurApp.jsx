import React from 'react'
import appImg from '../../assets/Images/ourApp.png'
import AppStore from '../../assets/Images/AppStore.png'
import playStore from '../../assets/Images/playStore.png'
import './ourApp.css'

export default function OurApp() {
    return (
        <div className='OurAppSection'>
            <div className="ourApp container">
                <div className="AppleftBox">
                    <div className="appImg">
                        <img src={appImg} alt="" />
                    </div>
                </div>
                <div className="AppRightBox">
                    <div className='AppRighttitle'>
                    <span>Download & Enjoy</span>
                    <h1>Download the <span>App</span> </h1>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam cupiditate accusamus labore repellat nisi qui reiciendis quibusdam? Cum, maxime?</p>
                    <div className='stores'>
                        <img src={AppStore} className="AppStore" />
                        <img src={playStore} className="PlayStore" />
                    </div>
                </div>
            </div>
        </div>
    )
}
