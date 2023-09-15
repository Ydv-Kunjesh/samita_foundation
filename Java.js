// JavaScript code using jQuery
$(document).ready(function() {
    // Set the first slide as active
    $('.slide:first').addClass('active');
  
    // Automatically move to the next slide every 5 seconds
    setInterval(function() {
      var activeSlide = $('.slide.active');
      var nextSlide = activeSlide.next('.slide');
  
      // If there is no next slide, go back to the first slide
      if (!nextSlide.length) {
        nextSlide = $('.slide:first');
      }
  
      // Remove active class from current slide and add it to the next slide
      activeSlide.removeClass('active');
      nextSlide.addClass('active');
    }, 5000); // Change slide every 5 seconds
  });
  

