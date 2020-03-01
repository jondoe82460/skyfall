import React from 'react';
import aboutPost from '../images/post-images/about-post.jpg';

export default function About() {
  return (
    <div id="about" className="about-section">
      <div className="container py-10 py-lg-22">
        <div className="row mx-lg-n10">
          <div className="col-md-6 px-lg-10">
            <h2>WHO WE ARE & <br></br>WHAT WE DO</h2>
            <p>The Skyfall Technologies provides various IT-related services to private and government organizations. We also offer support services like IT Trainings and an industry-leading Support Team ready to help clients develop their system, softwares, apps and websites. </p>
          </div>
          <div className="col-md-6 px-lg-10">
            <img src={aboutPost} alt="About Post" />
          </div>
        </div>
      </div>
    </div>
  );
}