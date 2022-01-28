document.addEventListener('DOMContentLoaded', () => { // DOM готов к взаимодейтсвию
    const onScrollHeader = () => { // объявляем основную функцию onScrollHeader
        const header = document.querySelector('.header__desctop') // находим header и записываем в константу
        let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
        let currentScroll // на сколько прокручена страница сейчас (пока нет значения)
        window.addEventListener('scroll', () => { // при прокрутке страницы
            currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу
            const headerHidden = () => header.classList.contains('header_hidden') // узнаем скрыт header или нет
            if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
                header.classList.add('header_hidden'); // то скрываем header
                header.classList.remove('header__background-color');
                header.classList.remove('header__margin-top');
            }
            if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
                header.classList.remove('header_hidden'); // то отображаем header
                header.classList.add('header__background-color');
                header.classList.remove('header__margin-top');
            }
            if (window.pageYOffset == 0) {
                header.classList.remove('header_hidden');
                header.classList.remove('header__background-color');
                header.classList.add('header__margin-top');
            }
            prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
        })
    }
    onScrollHeader() // вызываем основную функцию onScrollHeader
});


document.getElementById("sweeties1").addEventListener('click', () => toggleMe3(document.querySelector(".menu__wrapper")));
document.getElementById("sweeties11").addEventListener('click', () => toggleMe3(document.querySelector(".menu__wrapper")));
document.getElementById("sweeties2").addEventListener('click', () => toggleMe3(document.querySelector(".menu__wrapper")));

function toggleMe3(x) {
    if (!x) return true;
    if (x.style.display === "none" || x.style.display === "") {
        document.querySelector('.menu__wrapper').classList.toggle('menu_hidden');
    }
    return true;
}


//toggle dropdown menu ul li
var show;
function openMenu(node) {
    var subMenu = node.parentNode.getElementsByTagName("ul")[0];
    subMenu.classList.toggle('menu-li__hidden');
    if (show) show.classList.add('menu-li__hidden')
    else subMenu.classList.remove('menu-li__hidden');
    show = subMenu;
}

//toggle dropdown menu ul li
var showFooter;
function openMenuFooter(node) {
    var subMenu = node.parentNode.getElementsByTagName("ul")[0];
    subMenu.classList.toggle('menu-li-footer__hidden');
    if (showFooter) show.classList.add('menu-li-footer__hidden')
    else subMenu.classList.remove('menu-li-footer__hidden');
    showFooter = subMenu;
}

document.getElementById("main-down-button").addEventListener('click', () => {
    document.querySelector(".awardsVideoAboutUs__wrapper").classList.toggle('awardsVideoAboutUs__wrapper-hidden')
})
document.querySelector(".munu-top__socialNetworks-imgPhone").addEventListener('click', () => {
    document.querySelector(".number-phone-absolute").classList.toggle('number-phone-hidden')
})

var swiper1 = new Swiper('.swiper1', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Default parameters
    slidesPerView: 0,
    spaceBetween: 10,


    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    // Responsive breakpoints1
    breakpoints: {
        // when window width is >= 360px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 0,
        },
        // when window width is >= 768px
        1200: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 1378px
        1399.98: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
})


var swiper1 = new Swiper('.swiper2', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Default parameters
    slidesPerView: 0,
    spaceBetween: 10,


    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    // Responsive breakpoints1
    breakpoints: {
        // when window width is >= 360px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 0,
        },
        // when window width is >= 768px
        567.98: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        767.98: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        // when window width is >= 1378px
        1399.98: {
            slidesPerView: 7,
            spaceBetween: 30
        },
    }
})

var swiper1 = new Swiper('.swiper3', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Default parameters
    slidesPerView: 0,
    spaceBetween: 10,


    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    // Responsive breakpoints1
    breakpoints: {
        // when window width is >= 360px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 0,
        },
        // when window width is >= 768px
        567.98: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        767.98: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        // when window width is >= 1378px
        1399.98: {
            slidesPerView: 7,
            spaceBetween: 30
        },
    }
})