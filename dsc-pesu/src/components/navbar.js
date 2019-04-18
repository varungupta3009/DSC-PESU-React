import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img
                src={require("../assets/DSC PESU.png")}
                alt="Developer Student Clubs"
                height={48}
              />
            </a>
            <a
              role="button"
              className="navbar-burger"
              data-target="navbarMenu"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-start" />
            <div className="navbar-end has-text-centered">
              <a className="navbar-item" href="https://pesuacademy.com/Academy">
                PESU Academy
              </a>
              <div className="navbar-item">
                <button
                  className="mdc-button mdc-button--outlined"
                  onclick="location.href='http://bit.ly/dsc-ml';"
                >
                  <span className="mdc-button__label">Register Now!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
