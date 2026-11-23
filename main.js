const nav = document.querySelector("#nav");
const abrir= document.querySelector("#abrir");
const cerrar= document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const swiper= new Swiper(".mySwiper",{
    effect: "slide",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView:"auto",
    loop:"true",
    speed: 800,
    autoplay:{
        delay: 25000,
        disableOnInteraction: false,
    },
    slideEffect:{
        stretch:0,
        depth:180,
        modifier:1,
        slideShadows:true
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        type:'bullets',
    }
});