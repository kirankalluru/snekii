document.addEventListener('DOMContentLoaded', function () {
  let menu = document.querySelector('.sidebar');
  
  function myOpen() {
      if (menu.style.display === '' || menu.style.display === 'none') {
          menu.style.display = 'block';
          document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'; 
      } else {
          menu.style.display = 'none';
      }
  }
  
  function myClose() {
      menu.style.display = 'none';
      document.body.style.backgroundColor = 'white';
  }

  // Attach click event listeners
  document.querySelector('.hamburger').addEventListener('click', myOpen);
  document.querySelector('.close').addEventListener('click', myClose);
  document.querySelector('.slideshow-container').addEventListener('click', myClose);
});


/*curosal code*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*end of curosal code*/
