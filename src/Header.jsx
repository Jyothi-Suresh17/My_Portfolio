import "./App.css";
// import CVImage from './Cv/CV_.png';


import React, { useState } from "react";
import { MDBNavbar, MDBContainer, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBCollapse, MDBIcon } from 'mdb-react-ui-kit';
function Header() {
  const [showBasic, setShowBasic] = useState(false);
  const cvUrl = './Cv/CV_.pdf'; // Adjust the path as per your file structure


  return (
    <>
      {/* navbar */}

      <header>

      <MDBNavbar expand="lg" light bgColor="white">
      <MDBContainer fluid>
        <MDBNavbarToggler
          onClick={() => setShowBasic(!showBasic)}
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MDBIcon fas icon="bars" />
        </MDBNavbarToggler>
        <MDBCollapse style={{height:'50px',fontSize:'24px'}} navbar show={showBasic}>
          <MDBNavbarNav right className="mb-1 mb-lg-0">
            <MDBNavbarItem active>
              <MDBNavbarLink aria-current="page" style={{ color: '#0f254b' }} href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink style={{ color: '#0f254b' }} href="#About">About Me</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink style={{ color: '#0f254b' }} href="#education">Education</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink style={{ color: '#0f254b' }} href="#projects">Projects</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink style={{ color: '#0f254b' }} href="#contacts">Contact Me</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJvbnRlbmQlMjBkZXZlbG9wZXIlMjBncmFwaGljfGVufDB8fDB8fHww')",
            height: "500px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h4>Hi,I'm Jyothi Suresh...</h4>
                <span><h4>I'm a </h4><h1 className="mb-3">Front-End Developer</h1></span>
                
                <h6 className="mb-3">Click here to download my Resume</h6>
 <div>
      <h1>Your CV</h1>
      <a href='src\Cv\CV_.pdf' target="_main"  >
      <button className="btn btn-warning">MY CV</button>
      </a>
    </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
