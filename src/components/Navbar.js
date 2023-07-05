import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            DarkMode
          </label>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};

// props -- it's just like property -- used for puting manual values to different places -- for reusability
// this is a prop of the component and we can pass any string only
// ${props.mode === 'light' ? 'dark' : 'light'} -- A ternary operator.
