// for toogle button
function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
sidebar.style.display = "none"
}
// for nav
const elements = document.querySelectorAll(".java");

elements.forEach(element => {
    element.style.backgroundColor = "lightblue";
    element.style.color = "white";
    element.style.width = "200%"
    element.style.height = "10px"
    element.style.margintop = "6px"
    // Add more style changes as needed
});

// animations
// Function to check if an element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
  
  // Function to animate slide-up
  function animateSlideUp() {
    var elements = document.querySelectorAll('.top-content');
    elements.forEach(function(element) {
      if (isInViewport(element)) {
        element.classList.add('slide-up');
      }
    });
  }
  
  // Check if elements are in viewport on page load
  document.addEventListener('DOMContentLoaded', function(event) {
    animateSlideUp();
  });
  
  // Check if elements are in viewport on scroll
  window.addEventListener('scroll', function(event) {
    animateSlideUp();
  });

// for works
// Function to check if an element is in viewport for works
function isInViewportForWork(element) {
    var rect = element.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.top > viewHeight || rect.bottom <= 0);
  }
  
  // Function to handle pop-up animation for staff content
  function handlePopupForWork() {
    var elements = document.querySelectorAll('.items');
    elements.forEach(function(element) {
      if (isInViewportForWork(element)) {
        element.classList.add('show');
      }
    });
  }
  
  // Check if elements are in viewport on page load for staff content
  document.addEventListener('DOMContentLoaded', function() {
    handlePopupForWork();
  });
  
  // Check if elements are in viewport on scroll for staff content
  window.addEventListener('scroll', function() {
    handlePopupForWork();
  });
  

    // for marketing strategy

// Function to check if an element is in viewport for marketing strategy
function isInViewportForFifth(element) {
    var rect = element.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.top > viewHeight || rect.bottom <= 0);
  }
  
  // Function to handle pop-up animation for marketing strategy
  function handlePopupForFifth() {
    var elements = document.querySelectorAll('.fifth-content2');
    elements.forEach(function(element) {
      if (isInViewportForFifth(element)) {
        element.classList.add('show');
      }
    });
  }
  
  // Check if elements are in viewport on page load for marketing strategy
  document.addEventListener('DOMContentLoaded', function() {
    handlePopupForFifth();
  });
  
  // Check if elements are in viewport on scroll for marketing strategy
  window.addEventListener('scroll', function() {
    handlePopupForFifth();
});


  // Function to handle slide-down animation
  function handleSlideDown() {
    var elements = document.querySelectorAll('.h1-s');
    elements.forEach(function(element) {
      if (isInViewport(element)) {
        element.classList.add('show-down');
      }
    });
  }
  
  // Check if elements are in viewport on page load
  document.addEventListener('DOMContentLoaded', function() {
    handleSlideDown();
  });
  
  // Check if elements are in viewport on scroll
  window.addEventListener('scroll', function() {
    handleSlideDown();
});

