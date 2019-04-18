import React, { Component } from 'react';

import LoaderWrapper from './components/loader_wrapper';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Projects from './components/projects';
import Team from './components/team';
import Footer from './components/footer';

import 'bulma';
import $ from 'jquery';

import './css/home.css';
import './bundle.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoaderWrapper />
        <Navbar />
        <Intro />
        <Projects />
        <Team />
        <Footer />
      </div>
    );
  }
}

$(document).ready(function () {
  //Preloader
  $(window).on("load", function () {
      var preloaderFadeOutTime = 500;

      function hidePreloader() {
          var preloader = $('.loader-wrapper');
          preloader.fadeOut(preloaderFadeOutTime);
      }
      hidePreloader();
  });
});

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {

              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');

          });
      });
  }

});

// let menu = document.querySelector(".navbar")
// window.addEventListener("scroll", function (event) {
//   let scroll = this.scrollY;
//   if (scroll) {
//       menu.className = "navbar is-fixed-top has-shadow"
//   } else {
//       menu.className = "navbar is-fixed-top"
//   }
// });

$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
      $(".navbar").addClass("has-shadow");
  }
  else {
      $(".navbar").removeClass("has-shadow");
  }
});

export default App;
