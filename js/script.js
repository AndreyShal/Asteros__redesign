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