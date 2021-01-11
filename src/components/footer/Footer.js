import React, { Component } from 'react';
import About from '../about/About';


export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <li><a href="https://www.twitter.com/derekquinn"><i className="fa fa-twitter" /></a></li>
            <li><a href="https://www.linkedin.com/in/derekq/"><i className="fa fa-linkedin" /></a></li>
            <li><a href="https://github.com/derekquinn"><i className="fa fa-github" /></a></li>
          </ul>
          <ul className="copyright">
            <li>© Copyright 2021 | Derek Quinn</li>

          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    
      </React.Fragment>
    );
  }
}
