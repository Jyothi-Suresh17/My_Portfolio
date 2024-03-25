import React from 'react'
import { Row } from 'react-bootstrap'
import user from './Components/user.jpg'
import './App.css'

function About() {
  return (
    <>
      <section id={'About'}>
        <div className="container text-center my-5 text-dark">
          <h2 className='head' style={{color:'#4b2f0f'}}>  <i className="fa-solid fa-user"></i>  ABOUT</h2>
          <Row className='mt-5'>
<div className="col-12 col-md-6">
 <div className="myImage ">
 <img className='immm' src="src\Components\user.jpg" width={'250px'} alt="" />
 </div>
  </div>
<div className="col-12 col-md-6 text-sm md:text-lg lg:text-xl ">
  <div  className="about ">
  Greetings! As a front-end developer with a strong enthusiasm for creating engaging and user-friendly online experiences, my name is Jyothi Suresh. I bring React and Bootstrap to the table along with a strong foundation in HTML, CSS, and JavaScript. I have a talent for turning abstract concepts into well-written code and a sharp eye for design nuances. Making intuitive, responsive user interfaces that excite people is my aim. Let's work together to realize creative ideas!
  </div>
</div>
          </Row>
        </div>
      </section>
     
      
      </>
  )
}

export default About