let swiper = new Swiper(".product-items-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
        rows: 2,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var similiarSwiper = new Swiper(".similiar-products-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const btnNav = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.btn-close');
const mobileNav = document.querySelector('.bottom-nav');

btnNav.addEventListener('click', () => {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    document.body.style.overflow = 'auto';
});