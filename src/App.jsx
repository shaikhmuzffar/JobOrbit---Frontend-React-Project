
// components
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Steps from "./components/Steps/Steps"
import JobPosts from "./components/JobPosts/JobPosts"
import CTO from "./components/CTO/CTO"
import JobCategary from "./components/JobCategary/JobCategary"
import Footer from "./components/footer/Footer"
import Testimonials from "./components/Testimonials/Testimonials"
import OurApp from "./components/Our App/OurApp"
import NewsLetter from "./components/newsLetter/NewsLetter"
// images 
import jobHoldersImg from './assets/Images/jobholders.png'
import features from './assets/Images/features.png'

// css
import './App.css'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Steps/>
    <JobPosts/>
    <CTO CtoImg={jobHoldersImg} Ctotitle1="Get World" Ctotitle2="talented people in" Ctotitle3="one place" CtoGreenText=" 20,000+" CtoDesc="Unleash opportunity with our job finding website - your hub for 20,000+ talented individuals. Explore diverse listings, connect, and propel your career in one dynamic platform. Join us today!" CtoBtn="Explore More" />
    <JobCategary/>
    <CTO  CtoImg={features} Ctotitle1="1000+ world" Ctotitle2="post there job in here." CtoGreenText=" top componies" CtoDesc="Discover your dream job among 1000+ world-renowned companies posting their latest openings on our premier job finding website. Your path to a thriving career begins here." CtoBtn="Create free Account" />
    <NewsLetter/>
    <Testimonials/>
    <OurApp/>
    <Footer/>
    </>
  )
}

export default App
