carousel1 = document.getElementById("carousel1");
carousel2 = document.getElementById("carousel2");
carousel3 = document.getElementById("carousel3");
var counter = 1;

function next(v) {
  counter += v;
  if (counter == 4){
    counter = 1;
  }
  if (counter == 1){
    carousel1.style.display = 'block';
    carousel2.style.display = 'none';
    carousel3.style.display = 'none';
  }if (counter == 2){
    carousel1.style.display = 'none';
    carousel2.style.display = 'block';
    carousel3.style.display = 'none';
  }if (counter == 3){
    carousel1.style.display = 'none';
    carousel2.style.display = 'none';
    carousel3.style.display = 'block';
  }
};

function prev(v) {
  counter -= v;
  if (counter == 0){
    counter = 3;
  }
  if (counter == 1){
    carousel1.style.display = 'block';
    carousel2.style.display = 'none';
    carousel3.style.display = 'none';
  }if (counter == 2){
    carousel1.style.display = 'none';
    carousel2.style.display = 'block';
    carousel3.style.display = 'none';
  }if (counter == 3){
    carousel1.style.display = 'none';
    carousel2.style.display = 'none';
    carousel3.style.display = 'block';
  }
};

