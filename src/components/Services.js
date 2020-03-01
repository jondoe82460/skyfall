import React from 'react';
import Icon from "./Icomoon";

export default function About() {
  return (
    <div id="services" className="services-section text-center has-overlay">
      <div className="container py-10 py-lg-22">
        <h2 className="text-white mb-15">Our Services</h2>
        <div className="row mx-n6">
          <div className="col-6 col-md-4 mb-8 mb-lg-12 px-lg-6">
            <span className="icon"><Icon icon="web" /></span>
            <h4 className="text-white">Web Development</h4>
          </div>
          <div className="col-6 col-md-4 mb-8 mb-lg-12 px-lg-6">
            <span className="icon"><Icon icon="app" /></span>
            <h4 className="text-white">App Development</h4>
          </div>
          <div className="col-6 col-md-4 mb-8 mb-lg-12 px-lg-6">
            <span className="icon"><Icon icon="cyber" /></span>
            <h4 className="text-white">Cyber Security</h4>
          </div>
          <div className="col-6 col-md-4 mb-8 mb-lg-12 px-lg-6">
            <span className="icon"><Icon icon="it" /></span>
            <h4 className="text-white">IT Management and Support</h4>
          </div>
          <div className="col-6 col-md-4 mb-8 mb-lg-12 px-lg-6">
            <span className="icon"><Icon icon="network" /></span>
            <h4 className="text-white">Network Management and Support</h4>
          </div>
          <div className="col-6 col-md-4 mb-8 mb-lg-12 px-lg-6">
            <span className="icon"><Icon icon="hardware" /></span>
            <h4 className="text-white">Hardware Management and Support</h4>
          </div>
        </div>
      </div>
    </div>
  );
}