import React from 'react'
import './App.css'
import { Row } from 'react-bootstrap'
import times from './Components/times.png'
import clone from './Components/clone.png'
import calc1 from './Components/calc1.png'
import calc2 from './Components/calc2.png'

function Projects() {
  return (
    <>

    <section id={'projects'}>
      <hr />
      <div className="container text-center my-5 text-dark">
      <h2 className='head' style={{ color: "#4b2f0f" }}>
           
      <i class="fa-brands fa-codepen"></i>PROJECTS
         </h2>

         <div className="projects my-4 text-center">
         Welcome to my frontend projects showcase! As a passionate front-end developer, I've poured my creativity and skills into crafting engaging and user-friendly web experiences. Each project in this showcase is a testament to my commitment to clean code, responsive design, and seamless functionality. From dynamic single-page applications to interactive website components, I strive to blend aesthetics with functionality to deliver an exceptional user experience. Explore my projects below to see how I bring ideas to life through code and design.
         </div>

         <div className="projects-item my-4">
          <h6>Here are some of my Projects</h6>
          <br />
          <Row>
            <div className="col-md-3">
              <a href="https://jyothi-suresh17.github.io/WEB-PAGE01-Timex/" target='_main'>
               <img className='img-fluid' src="src\Components\times.png" height={'150px'} alt="" />
                </a>
              <br />
              <br />
              <p>It's time for you...a responsive website built with Bootstrap, HTML, and CSS </p>
              <p>Website - <a href="https://jyothi-suresh17.github.io/WEB-PAGE01-Timex/" > https://jyothi-suresh17.github.io/WEB-PAGE01-Timex/</a></p>
              
            </div>

            <div className="col-md-3">
            <a href="https://jyothi-suresh17.github.io/MYNTRA-CLONE/" target='_main' >
              <img src="src\Components\clone.png" className='img-fluid' height={'150px'} alt="" />
              </a>
            <br />
            <br />
            <p>I attempted using HTML, CSS, and Bootstrap to replicate the official Myntra website.</p>
            <p>Myntra Clone -  <a href="https://jyothi-suresh17.github.io/MYNTRA-CLONE/"> https://jyothi-suresh17.github.io/MYNTRA-CLONE/</a></p>
           
            </div>

            <div className="col-md-3">
            <a href="https://jyothi-bmitask-shortbread-ee3162.netlify.app/" target='_main' > 
            <img src="src\Components\calc1.png" className='img-fluid' height={'150px'} alt="" />
            </a>
            <br />
            <br />
              <p>I created a BMI calculator with JavaScript, HTML, CSS, and Bootstrap.To make it responsive, the Bootstrap grid framework was used.</p>
              <p>BMI Calculator - <a href="https://jyothi-bmitask-shortbread-ee3162.netlify.app/">https://jyothi-bmitask-shortbread-ee3162.netlify.app/</a></p>
              
            </div>

            <div className="col-md-3">
            <a href="https://budgetcalculator-jyothi-suresh.netlify.app/" target='_main'>
              <img src="src\Components\calc2.png" className='img-fluid' height={'120px'} alt="" />
              </a>
            <br />
            <br />
              <p>I created a budget calculator with JavaScript, HTML, CSS, and Bootstrap.To make it responsive, the Bootstrap grid framework was used.</p>
              <p>Budget Calculator - <a href="https://budgetcalculator-jyothi-suresh.netlify.app/">https://budgetcalculator-jyothi-suresh.netlify.app/</a></p>
              
            </div>
          </Row>
         </div>
      </div>
    </section>
    
    </>
  )
}

export default Projects