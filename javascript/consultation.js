// for toogle button
function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
sidebar.style.display = "none"
}
// forr slider
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
},4000);

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

// second container
// Function to check if an element is in viewport for second container
function isInViewportSecond(element) {
    var rect = element.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.top > viewHeight || rect.bottom <= 0);
  }
  
  // Function to handle slide-up animation for second container
  function handleSlideUpSecond() {
    var elements = document.querySelectorAll('.second-container');
    elements.forEach(function(element) {
      if (isInViewportSecond(element)) {
        element.classList.add('slide-up');
      }
    });
  }
  
  // Check if elements are in viewport on page load for second container
  document.addEventListener('DOMContentLoaded', function() {
    handleSlideUpSecond();
  });
  
  // Check if elements are in viewport on scroll for second container
  window.addEventListener('scroll', function() {
    handleSlideUpSecond();
  });



//   for form page
// Function to check if an element is in viewport for form page
function isInViewportForm(element) {
    var rect = element.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.top > viewHeight || rect.bottom <= 0);
  }
  
  // Function to handle slide-down animation for form page
  function handleSlideDownForm() {
    var elements = document.querySelectorAll('.form-page');
    elements.forEach(function(element) {
      if (isInViewportForm(element)) {
        element.classList.add('show-down');
      }
    });
  }
  
  // Check if elements are in viewport on page load for form page
  document.addEventListener('DOMContentLoaded', function() {
    handleSlideDownForm();
  });
  
  // Check if elements are in viewport on scroll for form page
  window.addEventListener('scroll', function() {
    handleSlideDownForm();
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


// Function to check if an element is in viewport for subscribe section
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.top > viewHeight || rect.bottom <= 0);
  }
  
  // Function to handle subscribe slide-down animation
  function handleSlideDownSubscribe() {
    var elements = document.querySelectorAll('.h1-s');
    elements.forEach(function(element) {
      if (isInViewport(element)) {
        element.classList.add('show-down');
      }
    });
  }
  
  // Check if elements are in viewport on page load for subscribe section
  document.addEventListener('DOMContentLoaded', function() {
    handleSlideDownSubscribe();
  });
  
  // Check if elements are in viewport on scroll for subscribe section
  window.addEventListener('scroll', function() {
    handleSlideDownSubscribe();
});
  