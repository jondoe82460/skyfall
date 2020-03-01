import React from 'react';
import logo from '../images/logo/logo.svg';

export default function Banner() {
  return (
    <footer id="footer" className="footer py-3">
      <div className="container text-center">
        <div className="img-logo mb-4"><img src={logo} width="80" height="80" alt="Skyfall Technologies" /></div>
        <div className="copyright text-uppercase">© 2020 Skyfall Technologies</div>
      </div>
    </footer>
  );
}