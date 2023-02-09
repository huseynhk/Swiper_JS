let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');//menu buttona click olanda fi-times iconu olsun
  navbar.classList.toggle('active');//menu buttona click olanda .navbar classi active clasina kecsin
}

let toggleBtn = document.querySelector('.toggle-btn');
let themeToggler = document.querySelector('.theme-toggler');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');//toggleBtn-a click edende themeToggler active classina kecsin
}



window.onscroll = () =>{
  menu.classList.remove('fa-times');//scroll edende fi-times remove olsun
  navbar.classList.remove('active');//scroll edende navBarin active classi remove olsun
  themeToggler.classList.remove('active');
}


let root =document.querySelector(':root');
let themeDivs = document.querySelectorAll('.theme-btn');// .theme-toggler

themeDivs.forEach(button => {
  button.onclick = () => {
    let setColor = button.style.background;//theme-btn  -nun icindeki divlere click olanda setColor deyeri yaranir
                                          // ve style.background deyerini qebul edir
                                   //yani click olan vaxti divlerin background deyerini gotursun ve setColora atsin
    root.style.setProperty('--main-color', setColor);//sonrada rootda main-colora 
                                                    // divlerden aldigimiz setColor yani diger rengleri set edirik
  }
});


var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 180,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  }
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 8,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay: 3000,
      disableOnInteraction:false,
  }
});


