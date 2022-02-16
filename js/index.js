/*===== MODAL WINDOW =====*/
const modal = $.modal(),
  usr = document.querySelector(".user");

usr.addEventListener("click", () => {
  modal.open();
});

/*===== HEADER ACTIVE AND SCROLL UP =====*/
window.onscroll = () => {
  if (window.scrollY > 1) {
    document.querySelector(".header").classList.add("header-active");
  } else {
    document.querySelector(".header").classList.remove("header-active");
  }
  if (window.scrollY > 600) {
    document.querySelector("#arrow-up").classList.remove("scroll-up-hide");
  } else {
    document.querySelector("#arrow-up").classList.add("scroll-up-hide");
  }
};

/*===== ACTIVE MENU ITEM =====*/
const itemActive = document.querySelectorAll(".nav__link");

for (const a of itemActive) {
  a.addEventListener("click", () => {
    clearActiveClasses();
    a.classList.add("active");
  });
}

function clearActiveClasses() {
  itemActive.forEach((a) => {
    a.classList.remove("active");
  });
}

/*===== ACTIVE BURGER BUTTON =====*/
document.querySelector(".nav__toggle").addEventListener("click", function () {
  document.querySelector(".nav__toggle span").classList.toggle("toggle-active");
});

/*===== MENU SHOW =====*/
const menu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

menu("nav-toggle", "nav-menu");

/*===== DISABLE MENU =====*/
const navLink = document.querySelectorAll(".nav__link"),
  navMenu = document.getElementById("nav-menu");

function linkAction() {
  navMenu.classList.remove("show");
  document.querySelector(".nav__toggle span").classList.remove("toggle-active");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== OPEN FILTER PRICE =====*/
function btnOpenFilter() {
  const filterOpen = document.querySelector("#filter-help").classList,
    filterArrow = document.querySelector(".filter-price__arrow");

    if (filterOpen.toggle("filter-price__hide")) {
      filterArrow.style.transform = "rotate(0deg)";
    } else {
      filterOpen.toggle("filter-price__show");
      filterArrow.style.transform = "rotate(180deg)";
    }
}

/*===== SCROLL DIV =====*/
$(document).ready(function () {
  $('[data-href^="#"]').on("click", function (e) {
    e.preventDefault();
    var t = 50;
    var d = $(this).attr("data-href")
      ? $(this).attr("data-href")
      : $(this).attr("href");
    $("html,body")
      .stop()
      .animate({ scrollTop: $(d).offset().top - 250 }, t);
  });
});

/*===== SLICK SLIDER =====*/
$(".cards-list").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  prevArrow: "<img src='https://inspiq.github.io/sampler-landing/../img/arrows/prev.png' class='slick-prev'>",
  nextArrow: "<img src='https://inspiq.github.io/sampler-landing/../img/arrows/next.png' class='slick-next'>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
});
