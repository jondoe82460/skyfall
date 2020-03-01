import React from 'react';

export default function Banner() {
  return (
    <div className="banner-section">
      <section id="home" className="banner has-overlay">
        <div className="container text-center">
          <h1>Build Your <span>Software</span> Today</h1>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h4>The software house that can help you to build, on advanced technological platforms and enterprise-level systems.</h4>
              <p className="mb-8 text-white">We help to simplify and automate your business !</p>
              <a href="tel:9849082460" className="btn btn-info">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}