import React, { Component } from 'react';


export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic-02.jpg" alt="" />
        </div>
        <div className="nine columns main-col">
          <h2>derek quinn</h2>
          <p>
          Software engineer with a focus in iOS application and SDK development. Currently (loving) residing in Detroit. 
          Specializing in development of iOS Applications & SDKs. Over 15 years experience in video production, broadcasting and content creation. 
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Derek Quinn</span><br />
                {/* <span>1600 Amphitheatre Parkway<br />
                  Mountain View, CA 94043 US
                </span><br /> */}
                <span>+1.330.232.3028</span><br />
                <span>d.quinn@mac.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                {/* <a href="#" className="button"><i className="fa fa-download" />Download Resume</a> */}
              </p>
            </div>
          </div> {/* end row */}
        </div> {/* end .main-col */}
      </div>
    </section>
    
      </React.Fragment>
    );
  }
}