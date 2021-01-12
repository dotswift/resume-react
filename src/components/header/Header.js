import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      <header id="home">
      <div className="row banner">
      <div className="banner-text">
         <h1 className="responsive-headline">{resumeData.name}</h1>
         <h3>{resumeData.role}  {resumeData.roleDescription}</h3>
         <hr/>
      </div>
      </div>
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
    <ul id="nav" className="nav">
      {/* <li className="current"><a className="smoothscroll" href="#home">Home</a></li> */}
      <li><a className="smoothscroll" href="#about">Bio</a></li>
      <li><a className="smoothscroll" href="#resume">Experience</a></li>
      {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li>
      <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
      {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
    </ul> {/* end #nav */}
  </nav> {/* end #nav-wrap */}

</header> {/* Header End */}
      </React.Fragment>
    );
  }
}