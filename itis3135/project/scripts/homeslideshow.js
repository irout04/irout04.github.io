document.addEventListener('DOMContentLoaded', function () {
    var slideIndex = 1;
    var slides = document.getElementsByClassName('mySlides');
  
    function show(n) {
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1)            { slideIndex = slides.length; }
  
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[slideIndex - 1].style.display = 'block';
    }
  
    window.plusSlides = function (n) {
      slideIndex += n;
      show(slideIndex);
    };
  
    show(slideIndex);        
  });