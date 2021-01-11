import React, { Component } from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from  './components/testimonials/Testimonials';
import ContactUs from './components/contactus/Contactus';
import Footer from './components/footer/Footer';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About />
        {/* <Resume />
        <Portfolio />
        <Testimonials /> */}
        {/* <ContactUs /> */}
        <Footer />
      </div>
    );
  }
}
export default App;
