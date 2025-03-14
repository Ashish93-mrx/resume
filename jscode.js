
// script.js
document.addEventListener("DOMContentLoaded", function() {
  var loading = document.getElementById('loading');
  var content = document.getElementById('content');

  // Show the loading animation
  loading.style.display = 'flex';


  // Wait for the window to load completely
  window.addEventListener('load', function() {
      // Hide the loading animation
      loading.style.display = 'none';
      // Show the main content
      content.style.display = 'block';
  });
});

document.querySelector('.coverx').addEventListener('animationend', function() {
  this.style.zIndex = '-99999';
  // Alternatively, you can set the height to 0
  // this.style.height = '0%';
});

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("reveal-text");
  const text = textElement.textContent;
  textElement.innerHTML = '';

  setTimeout(()=>{
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      textElement.appendChild(span);

      setTimeout(() => {
          span.style.opacity = 1;
          span.style.filter = 'blur(0)';
      }, index * 100); // Adjust the delay for each letter
  });
},1000);
});

$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Fullstack Developer",
        "Software Developer",
        "Python Developer",
        "Founder",
        "Author"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Fullstack Developer",
        "Software Developer",
        "Python Developer",
        "Founder",
        "Author"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
  