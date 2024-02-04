//for smooth scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//selections
var icon = document.querySelector("#icon");
var cursor = document.querySelector("#circle");
var projectPage = document.querySelector("#project-page");
var project1 = document.querySelector(".project-1");
var project2 = document.querySelectorAll(".project-2");
var project1Image = document.querySelector(".project-1 img");
var project2Image = document.querySelectorAll(".project-2 img");
var projectWIndow = document.querySelector("#project-window");
var menu = document.querySelector("#menu-page");
var footerbtn = document.querySelector("#footer-button");
var footervid = document.querySelector("#footer video");

//functions
function mousefollower() {
  window.addEventListener("mousemove", function (dets) {
    gsap.to("#circle", {
      opacity: 1,
      left: dets.clientX,
      top: dets.clientY,
    });
  });
  icon.addEventListener("mouseenter", function () {
    cursor.style.height = "50px";
    cursor.style.width = "50px";
    cursor.innerHTML = '<i id="icon" class="ri-menu-fill"></i>';
  });
  icon.addEventListener("mouseleave", function () {
    cursor.style.height = "10px";
    cursor.style.width = "10px";
    cursor.innerHTML = "";
  });
  projectPage.addEventListener("mouseenter", function () {
    cursor.style.backgroundColor = "white";
  });
  projectPage.addEventListener("mouseleave", function () {
    cursor.style.backgroundColor = "black";
  });
  project1.addEventListener("mouseenter", function () {
    cursor.style.height = "80px";
    cursor.style.width = "80px";
    cursor.innerHTML = "<h4>Explore</h4>";
    project1Image.style.scale = "1.1";
  });
  project1.addEventListener("mouseleave", function () {
    cursor.style.height = "10px";
    cursor.style.width = "10px";
    cursor.innerHTML = "";
    project1Image.style.scale = "1";
  });

  project2.forEach(function (projects) {
    projects.addEventListener("mouseenter", function () {
      project2Image.forEach((dets) => {
        dets.style.scale = "1.1";
      });
      cursor.style.height = "80px";
      cursor.style.width = "80px";
      cursor.innerHTML = "<h4>Explore</h4>";
    });
    projects.addEventListener("mouseleave", function () {
      cursor.style.height = "10px";
      cursor.style.width = "10px";
      cursor.innerHTML = "";
      project2Image.forEach((dets) => {
        dets.style.scale = "1";
      });
    });
    projectWIndow.addEventListener("mouseenter", function () {
      cursor.style.height = "80px";
      cursor.style.width = "80px";
      cursor.innerHTML = "<h4>Scroll ></h4>";
      cursor.style.backgroundColor = "white";
    });
    projectWIndow.addEventListener("mouseleave", function () {
      cursor.style.height = "10px";
      cursor.style.width = "10px";
      cursor.innerHTML = "";
      cursor.style.backgroundColor = "black";
    });
  });
}

function menuBar() {
  var count = 0;
  icon.addEventListener("click", () => {
    if (count === 0) {
      menu.style.right = "0";
      icon.style.position = "absolute";
      icon.style.right = "4vw"
      icon.style.color = "white";
      count = 1;
    } else if (count === 1) {
      menu.style.right = "-100%";
      icon.style.position = "";
      count = 0;
      icon.style.color = "black";
    }
  });
}

function page1Animation() {
  var timeline = gsap.timeline();

  timeline.from("#nav", {
    delay: 1,
    opacity: 0,
    duration: 0.6,
  });
  timeline.from("#heading h1", {
    y: 100,
    duration: 0.8,
    opacity: 0,
    ease: "power3",
    stagger: 0.2,
  });
}

function footerEffect() {
  document.querySelector("#footer").addEventListener("mouseenter", () => {
    cursor.style.backgroundColor = "white";
  });
  document.querySelector("#footer").addEventListener("mouseleave", () => {
    cursor.style.backgroundColor = "black";
  });
  footerbtn.addEventListener("mouseenter", () => {
    footervid.style.scale = "1.5";
  });
  footerbtn.addEventListener("mouseleave", () => {
    footervid.style.scale = "1";
  });
}

//functions calling
mousefollower();
menuBar();
page1Animation();
footerEffect();
