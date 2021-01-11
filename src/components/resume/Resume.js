import React, { Component } from 'react';

export default class Resume extends Component {
   render() {
      return (
         <React.Fragment>
            <section id="resume">
               
               <div className="row work">

                  <div className="three columns header-col">
                     <h1><span>Experience</span></h1>
                  </div>

                  <div className="nine columns main-col">

                     <div className="row item">

                        <div className="twelve columns">

                           <h3>Detroit Labs</h3>
                           <p className="info"> Developer <span>&bull;</span> <em className="date">2019 - Present</em></p>

                           <p>
                              <ul>
                                 <li>• iOS Mobile Application Development</li>
                                 <li>• iOS SDK & CocoaPod Development</li>
                                 <li>• Development of public APIs to support mobile applications</li>
                                 <li>• Training in SwiftUI an UIKit</li>
                              </ul>
                           </p>

                        </div>

                     </div>
                     <div className="row item">

                        <div className="twelve columns">

                           <h3>Sparx Technology</h3>
                           <p className="info">Engineer <span>&bull;</span> <em className="date">2014 - 2019</em></p>

                           <ul>
                              <li>• Implemented features in web applications at scale</li>
                              <li>• Supported server side solutions for clients nationwide</li>
                              <li>• Coordinated with stakeholders and clients to define requirements</li>
                              <li>• Customized hardware solutions for major broadcast partners globally</li>
                           </ul>
                        </div>
                     </div>
                     <div className="row item">

                        <div className="twelve columns">

                           <h3>Daniels Health</h3>
                           <p className="info">Project Manager <span>&bull;</span> <em className="date">2012 - 2014</em></p>

                           <ul>
                              <li>• Managed worldwide rollout of B2B mobile application product</li>
                              <li>• Development of new features on behalf of stakeholders and clients</li>
                              <li>• Defined, implemented and tested software solutions to assist clients with FDA compliance</li>
                              <li>• Worked directly major healthcare systems in US, UK & AU</li>
                           </ul>
                        </div>
                     </div>
                     <br></br>
                     
                     <div className="row item">

                        <div className="twelve columns">
                           <h3>Google Product Expert Program</h3>
                           <p className="info">Contract Video Producer <span>&bull;</span> <em className="date">2018, 2019, 2020</em></p>
                           <h3>Mayor Mark Kruzan</h3>
                           <p className="info">Communications <span>&bull;</span> <em className="date">2010-2012</em></p>
                           <h3>NBC Universal</h3>
                           <p className="info">Digital Media Producer<span>&bull;</span> <em className="date">2011</em></p>

                           {/* <ul>
                        <li>• Managed worldwide rollout of B2B mobile application product</li>
                        <li>• Development of new features on behalf of stakeholders and clients</li>
                        <li>• Defined, implemented and tested software solutions to assist clients with FDA compliance</li>
                        <li>• Worked directly major healthcare systems in US, UK & AU</li>
                     </ul> */}
                        </div>
                     </div>
                  </div>
               </div>



               {/* <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
            </p>

				<div className="bars">

				   <ul className="skills">
					   <li><span className="bar-expand photoshop"></span><em>Photoshop</em></li>
                  <li><span className="bar-expand illustrator"></span><em>Illustrator</em></li>
						<li><span className="bar-expand wordpress"></span><em>Wordpress</em></li>
						<li><span className="bar-expand css"></span><em>CSS</em></li>
						<li><span className="bar-expand html5"></span><em>HTML5</em></li>
                  <li><span className="bar-expand jquery"></span><em>jQuery</em></li>
					</ul>

				</div>

			</div> 

      </div> */}

            </section>

         </React.Fragment>
      );
   }
}