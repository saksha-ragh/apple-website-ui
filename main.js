//JavaScript
const selectElement=(element)=> document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click',()=>{
    selectElement('header').classList.toggle('active');
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
  });