import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <section className="hero is-white has-text-centered is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <img
                  className="avatar is-vcentered"
                  src={require("../assets/DSC-Badge.svg")}
                  width={256}
                />
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                  Welcome to The Developer Student Clubs
                </h1>
                <h2 className="subtitle is-size-2-desktop">PES University</h2>
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
        <div className="hero-foot" />
      </section>
    );
  }
}

export default Intro;
