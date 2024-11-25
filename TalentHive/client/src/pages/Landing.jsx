import React, { useEffect } from 'react'
import '../styles/landing.css'
import {PiStudent} from 'react-icons/pi'
import {FaHandHoldingWater} from 'react-icons/fa'
import {MdHealthAndSafety} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'


const Landing = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("usertype") === 'freelancer'){
      navigate("/freelancer")
    } else if (localStorage.getItem("usertype") === 'client'){
      navigate("/client")
    } else if (localStorage.getItem("usertype") === 'admin'){
      navigate("/admin")
    }
  })

  const scrollToAboutUs = () => {
    document.getElementById("about-us").scrollIntoView({
      behavior: "smooth",
    });
  };


  return (
    <div className="landing-page">

        <div className="landing-hero">

            <div className='landing-nav'>
              <h3>Workify</h3>
              <button onClick={()=> navigate('/authenticate')} >Sign In</button>
            </div>

            <div className="landing-hero-text">

                <h1>Elevate your Journey, Build your Success : Dynamic and Supportive Freelancing Ecosystem.</h1>
                <br/>
                <p>Workify is where the right talent meets the right projects. Connect, collaborate, and create meaningful work with ease and trust. </p>
                <br />
                <button onClick={()=> navigate('/authenticate')} id='one-button'>Get Started</button>
                <br />
                
                <button className="scroll-down" onClick={scrollToAboutUs}>﹀</button>
                
                <section className="about-us" id="about-us">
                  <center>
                  <h3>About Us</h3>
                  <p>Welcome to Workify, the ultimate platform where talent and opportunity come together! Workify connects clients with skilled freelancers, creating a thriving community for seamless project collaboration. Clients can post their project needs, while freelancers from various fields bid to bring their expertise to the table. With an efficient process that promotes quality and timely completion, Workify is dedicated to helping both clients and freelancers reach their full potential through successful partnerships.</p>
                  </center>
                  <br />
                  <h2>Role of Clients</h2>
                  <br />
                  <p> At Workify, clients play a crucial role by posting project details and requirements, enabling them to attract competitive bids. Clients review proposals, select the best freelancer for the job, and approve the project upon successful completion.</p>
                  <br />
                  <h2>Role of Freelancers</h2>
                  <br />
                  <p>Freelancers on Workify have the opportunity to bid on projects that align with their skills, presenting proposals that showcase their abilities. Once selected, they work diligently to complete the project to the client’s satisfaction, growing their portfolio and reputation on the platform.</p>
                </section>

            </div>

        </div>

    </div>
  )
}

export default Landing