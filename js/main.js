 $('.slider__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.slider__nav'
 });
 $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
 });

 $('.header__menu-btn').on('click', function () {
    $('.header__menu ul').slideToggle();
 });





