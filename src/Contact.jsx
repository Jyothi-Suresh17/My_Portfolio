import React from 'react'
import './App.css'
import { Row } from 'react-bootstrap'
import { MDBInput } from 'mdb-react-ui-kit';

function Contact() {
  return (
    <>
    <hr />
    <section id={'contacts'}>
      <div className="container text-center my-5 text-dark">
      <h2 className='head' style={{ color: "#4b2f0f" }}>
           
      <i class="fa-solid fa-address-book"></i> 
      Contact Me
         </h2>
        <Row>
          <div className="col-md-6">
            <form className='text-start my-3' action="">
             <label htmlFor="name">Your Name</label>
             <input className='form-control' type="text" placeholder='Enter your Name here' />

             <label htmlFor="email">Your Email</label>
             <input className='form-control' type="text" placeholder='Enter your Email here' />

             <label htmlFor="message">Your Message</label>
            <textarea className='form-control' name="" id="message" cols="30" rows="10"></textarea>
            </form>
          </div>

          <div className="col-md-6 my-5">
            <div  className="cont">
            <div className="imgg">
            <img className='img-fluid' src="https://plus.unsplash.com/premium_photo-1682309526815-efe5d6225117?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="imgTxt">
              <p>My Email Id - jyothisuresh0614@gmail.com</p>
              <p>
                <ul className='d-flex justify-content-around me-3' style={{type:'none'}}>
                  <li><a style={{textDecoration:'none'}} href="https://www.instagram.com/kue_kuatsu?igsh=em5pc2g5emoxYjQz" target='_main'><i class="fa-brands fa-2x fa-instagram text-dark"></i></a></li>
                  
                  <li><a  style={{textDecoration:'none'}}  href="https://www.linkedin.com/in/jyothi-suresh-0033aa280/" target='_main'><i class="fa-brands fa-2x fa-linkedin text-dark" ></i></a></li>
                  <li><a href="https://github.com/Jyothi-Suresh17" target='_main' style={{textDecoration:'none'}} ><i class="fa-brands fa-2x fa-github text-dark"></i></a></li>
                </ul>
              </p>
            </div>
            <br />
            
            </div>
          </div>
        </Row>
      </div>
      <hr />
    </section>
    </>
  )
}

export default Contact