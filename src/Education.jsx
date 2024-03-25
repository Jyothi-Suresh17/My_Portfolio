import React from "react";
import "./App.css";

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Education() {
  return (
    <>
      <section id={"education"}>
        <hr />
        <div className="container text-center my-5 text-dark">
          <h2 className='head' style={{ color: "#4b2f0f" }}>
           
            <i className="fa-solid fa-user-graduate"></i> EDUCATION AND
            EXPERIENCE
          </h2>

        

<div className="table-responsive text-start"> 
      <MDBTable>
        <MDBTableHead>
          <tr className="text-center">
            <th className="col-md-6"><h3 style={{ color: "#741d93" }}>EDUCATION</h3></th>
            <th className="col-md-6"><h3  style={{ color: "#741d93" }}>EXPERIENCE</h3></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td className="col-md-6">
              <h4 className="text-success">Graduation</h4>
              <br />
              <p className="edu">Bachelors in Physics</p>
              <p className="edu">Christian College, Chengannur</p>
              <h6>CGPA - 7.2</h6>
      
              <p className="edu">Year: 2017-2021</p>
            </td>
            <td className="col-md-6">
              <h5 className="text-success">INTERNSHIP</h5>
              <br />
              <p className="edu">Luminar Technolab, Kochi</p>
              <p className="edu">Year: 2023-present</p>
            </td>
          </tr>
          <tr>
            <td  className="col-md-6">
              <h4 className='text'>Schooling</h4>
              <br />
              <p className='edu'><b>Sree Vijayananda Gurukula Vidyalaya Higher Secondary School, Nalkalikkal</b></p>
              <h6>DHSE-Kerela State Board</h6>
              <h6>Percentage - 92%</h6>
              <p className='edu'>Year: 2016-2017</p>
              <p className='edu'><b>Mar Thoma Senior Secondary School, Kozhencherry</b></p>
              <h6>Secondary School Examination - CBSE</h6>
              <h6>Percentage - 93.1%</h6>
              <p className='edu'>Year: 2004-2016</p>
            </td>
            <td  className="col-md-6"> 
              
            </td>
          </tr>
         
        </MDBTableBody>
      </MDBTable>
    </div>
        </div>
      </section>
    </>
  );
}

export default Education;
