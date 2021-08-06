$(function () {
    $('.gallery').owlCarousel({
        margin: 10,
        loop: false,
        autoWidth: true,
        items: 2,
        nav: true,
        dots: false,
        navText: ['<img src="./img/arrow-left.svg">', '<img src="./img/arrow-right.svg">'],
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {

        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.testimonials-carousel').owlCarousel({
        loop: false,
        items: 1,
        nav: true,
        dots: false,
        navText: ['<img src="./img/arrow-left.svg">', '<img src="./img/arrow-right.svg">'],
    });

});