/* search start */
let search = document.querySelector(".search-form");
document.getElementById("search-btn").onclick = () => {
  search.classList.toggle("active");
};
window.onscroll = () => {
  search.classList.remove("active");
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};
window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};
/* search end */
/* login form start */
let loginForm = document.querySelector(".login-form-container");
document.querySelector("#login-btn").addEventListener("click", () => {
  loginForm.classList.toggle("active");
});
document.querySelector("#close-login-btn").addEventListener("click", () => {
  loginForm.classList.remove("active");
});
/* login form end */

var swiper = new Swiper(".books-slider", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    676: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".reviews-slider", {
  grabCursor: true,
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    676: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".blogs-slider", {
  grabCursor: true,
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    676: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
