//Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 40,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView:1
        },
      
        620: {
            slidesPerView:2
        },
       
        120: {
            slidesPerView:3
        },
    } 
  });

// Slider //
// dostawcze
function changeImage1()
{
    var img = document.getElementById('image1');
    img.src = 'image1.jpg';  
}

function changeImage2()
{
    var img = document.getElementById('image2');
    img.src = 'image2.jpg';  
}

function changeImage3()
{
    var img = document.getElementById('image3');
    img.src = 'image3.jpg';  
}

//osobowe
function changeImage4()
{
    var img = document.getElementById('image1');
    img.src = '1.jpg';  
}
function changeImage5()
{
    var img = document.getElementById('image2');
    img.src = '2.jpg';  
}
function changeImage6()
{
    var img = document.getElementById('image3');
    img.src = '3.jpg';  
}



// Rozwiń tekst 
function toggleText() {
    const text = document.getElementById("hiddenText");
    text.classList.toggle("show");
}

function toggleText2() {
    const text = document.getElementById("hiddenText2");
    text.classList.toggle("show2");
}


  