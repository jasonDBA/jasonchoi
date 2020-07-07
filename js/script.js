'use strict';

$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
})

// gnb menu
$(function() {
  $('header .menuOpen').on('click', function(){
    $('.gnb').addClass('on');
  });
  $('.gnb .close, section').on('click', function(){
    $('.gnb').removeClass('on');
  })
})

// fix header
var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();

// an event when resizing a window
$(window).on('scroll resize', function() {
  scrollTop = $(document).scrollTop();
  fixHeader();
});

// fixHeader function()
function fixHeader() {
  if(scrollTop > 150){
    $('header').addClass('on');
  } else {
    $('header').removeClass('on');
  }
}

// Scrolla - Scroll Animation
$(function() {
  $('.animate').scrolla({
    mobile: false,
    once: false
  })
})

// Go to the top smoothly
$(function() {
  $('.goTop').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 800);
  })
})

// .top-visual image slides
// Referece: https://kenwheeler.github.io/slick/
$(function() {
  $('.visual .slide').slick({
    arrows: true,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocuse: false
  })
})

// Menu Navigation
$(function() {
  $('#home').on('click', function() {
    $('html, body').animate({scrollTop: $('.visual').offset().top}, 1000);
  });
  $('#about').on('click', function() {
    $('html, body').animate({scrollTop: $('.contents').offset().top}, 1000);
  });
  $('#projects').on('click', function() {
    $('html, body').animate({scrollTop: $('.project').offset().top - 120}, 1000);
  });
  $('#skills').on('click', function() {
    $('html, body').animate({scrollTop: $('.skills').offset().top - 120}, 1000);
  });
  $('#experience').on('click', function() {
    $('html, body').animate({scrollTop: $('.experience').offset().top - 120}, 1000);
  });
  $('#contact').on('click', function() {
    $('html, body').animate({scrollTop: $('footer').offset().top}, 1000);
  });
})
