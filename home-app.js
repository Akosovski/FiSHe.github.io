var counter = 1;
showImages(counter);

function addImages(n) {
  showImages(counter += n);
}

function currentSlide(n) {
  showImages(counter = n);
}

function showImages(n) {
  var slides = document.getElementsByClassName("carousel");
  
  if (n > slides.length) {counter = 1}    
  if (n < 1) {counter = slides.length}
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[counter - 1].style.display = "block";  
}