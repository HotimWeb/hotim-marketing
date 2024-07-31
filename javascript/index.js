// for toogle button
function showSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "flex"
}
function hideSidebar(){
  const sidebar = document.querySelector(".sidebar")
sidebar.style.display = "none"
}

// for slider div
function slideUp() {
    var box = document.getElementByClass('.top-content');
    var height = box.offsetHeight; // Get current height of the box
    box.style.height = height + 'px'; // Set the height explicitly before changing it

    // Force a reflow to apply the height immediately
    box.offsetHeight; 

    box.style.height = '0px'; // Set the height to 0 to trigger the slide up effect
}
// for slider and media query
// Define a media query for phone screens
const mediaQuery = window.matchMedia("(max-width: 1024px)");

// Function to handle media query changes
function handleMediaQueryChange(event) {
  if (event.matches) {
    var counter = 1;
    setInterval(function(){
    document.getElementById('radio' + counter).checked =  true;
    counter++;
    if(counter > 8){
        counter=1;
    }
   }, 5000);
  } else {
    var counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked =  true;
        counter++;
        if(counter > 4){
            counter=1;
        }
    }, 5000);
  }
}
// Initial check
handleMediaQueryChange(mediaQuery);

// Listen for changes in the media query
mediaQuery.addEventListener('change', handleMediaQueryChange);

// for nav
const elements = document.querySelectorAll(".java");

elements.forEach(element => {
    element.style.backgroundColor = "lightblue";
    element.style.color = "white";
    element.style.width = "200%"
    element.style.height = "20px"
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


// secon container

// Function to check if an element is in viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
  return !(rect.left > viewWidth || rect.right <= 0);
}

// Function to animate slide-in from right
function animateSlideInRight() {
  var elements = document.querySelectorAll('.sect-img');
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('slide-in');
    }
  });
}

// Check if elements are in viewport on page load
document.addEventListener('DOMContentLoaded', function(event) {
  animateSlideInRight();
});

// Check if elements are in viewport on scroll
window.addEventListener('scroll', function(event) {
  animateSlideInRight();
});


// pop up for services we offer
// Function to check if an element is in viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.top > viewHeight || rect.bottom <= 0);
}

// Function to handle pop-up animation for third content
function handlePopup() {
  var elements = document.querySelectorAll('.thrid-content-2-1');
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('show');
    }
  });
}

// Check if elements are in viewport on page load for third content
document.addEventListener('DOMContentLoaded', function() {
  handlePopup();
});

// Check if elements are in viewport on scroll for third content
window.addEventListener('scroll', function() {
  handlePopup();
});


// for products
// Function to check if an element is in viewport
function isInViewportForProducts(element) {
  var rect = element.getBoundingClientRect();
  var viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
  return !(rect.left > viewWidth || rect.right <= 0);
}

// Function to animate slide-in from right
function animateSlideInRightForProducts() {
  var elements = document.querySelectorAll('.product1');
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('slide-in');
    }
  });
}

// Check if elements are in viewport on page load
document.addEventListener('DOMContentLoaded', function(event) {
  animateSlideInRightForProducts();
});

// Check if elements are in viewport on scroll
window.addEventListener('scroll', function(event) {
  animateSlideInRightForProducts();
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


// for subscribe
// Function to check if an element is in viewport
function isInViewportForSubscribe(element) {
  var rect = element.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.top > viewHeight || rect.bottom <= 0);
}

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
















