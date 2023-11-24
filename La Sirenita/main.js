document.addEventListener("DOMContentLoaded", function () {
    var currentIndex = 0;
    var sliderItems = document.querySelectorAll('.slider-item');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
  
    showSliderItem(currentIndex);
  
    prevBtn.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
      showSliderItem(currentIndex);
    });
  
    nextBtn.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % sliderItems.length;
      showSliderItem(currentIndex);
    });
  
    
    function showSliderItem(index) {
      sliderItems.forEach(function (item, i) {
        item.style.display = i === index ? 'block' : 'none';
      });
    }
  });
  
  function abrir(){
    document.getElementById('d-bnd4').style.display = 'block';
    //document.getElementById('d-bnd2-h5').style.display = 'none';
    //document.getElementById('d-bnd3').style.display = 'none';
    document.getElementById('a-d-bnd2').style.display = 'none'
  }

  function cerrar(){
    document.getElementById('d-bnd4').style.display = 'none'
    document.getElementById('a-d-bnd2').style.display = 'grid'
  }

  document.getElementById('img-insta').onclick = function(){
    location.href = 'https://www.instagram.com/parquelasirenita/'
  } 
  document.getElementById('img-insta2').onclick = function(){
    location.href = 'https://www.instagram.com/parquelasirenita/'
  } 
  document.getElementById('img-facebook').onclick = function(){
    location.href = 'https://www.facebook.com/parquelasirenita/?locale=es_ES'
  } 
  document.getElementById('img-facebook2').onclick = function(){
    location.href = 'https://www.facebook.com/parquelasirenita/?locale=es_ES'
  } 
