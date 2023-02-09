import * as React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Footer </h4>
            <h1 className="list-unstyled">
              <li>Footer info</li>
              <li>Footer info</li>
              <li>Footer info</li>
            </h1>
          </div>
          {/* Kolom 2 */}
          <div className="col">
            <h4>Footer </h4>
            <ui className="list-unstyled">
              <li>Footer info</li>
              <li>Footer info</li>
              <li>Footer info</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Footer </h4>
            <ui className="list-unstyled">
              <li>Footer info</li>
              <li>Footer info</li>
              <li>Footer info</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">&copy;{new Date().getFullYear()} Demodam | Footer info | Terms Of Service | Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
