let slideIndex = 1;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let thumbnail = document.getElementsByClassName("thumbnail-demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbnail.length; i++) {
    thumbnail[i].className = thumbnail[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumbnail[slideIndex - 1].className += " active";
  captionText.innerHTML = thumbnail[slideIndex - 1].alt;

  thumbnail[slideIndex - 1].scrollIntoView({
    behavior: "smooth",
    inline: "center", 
    block: "nearest" 
  });
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}