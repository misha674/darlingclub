$(document).ready(function () {

  $(".slider-block").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let number = $('.slider-number'),
      count = $('.slider-count'),
      i = (currentSlide ? currentSlide : 0) + 1;
    l = slick.slideCount;
    number.text(i);
    count.text(l);
    if (i < 10) {
      number.prepend("0");
    }
    if (l < 10) {
      count.prepend("0");
    }
  });

  $(".slider-block").slick({
    dots: true,
    infinite: true,
    arrows: true,
    appendArrows: $('.arrow-wrapper'),
    speed: 1000,
    // speed: 6000,
    slidesToShow: 1,
    variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 100
  });

  $('.slick-next').addClass('active');
  var slickBtn = $('.slick-arrow');

  slickBtn.click(function () {
    if ($(this).hasClass('active')) {} else {
      slickBtn.removeClass('active');
      $(this).addClass('active');
    }
  });

  $(window).scroll(function () {

    var headHeight = '100',
      windowPos = window.scrollY,
      menu = $('.header-menu');

    if (windowPos > headHeight) {
      menu.addClass('active-bg');
      menu.removeClass('noActive-bg');
    } else {
      menu.addClass('noActive-bg');
      menu.removeClass('active-bg');
    }
  });

  var headHeight = '200',
    windowPos = window.scrollY,
    menu = $('.header-menu');


  if (windowPos > headHeight) {
    menu.addClass('active-bg');
    menu.removeClass('noActive-bg');
  } else {
    menu.addClass('noActive-bg');
    menu.removeClass('active-bg');
  }

  // var menuLink = $('.link-menu_button'),
  //   menu = $('.main-menu');

  // menuLink.on('click', function () {
  //   $(this).toggleClass('active');
  //   menu.toggleClass('active');
  // });

  // menu.on('click', function () {
  //   $(this).toggleClass('active');
  //   menuLink.toggleClass('active');
  // });



  const anchors = document.querySelectorAll('a[href*="#"');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };


  // var handleMatchMedia = function (mediaQuery) {
  //     if (mediaQuery.matches) {
  //       console.log("9999999999999999999");
  //     } else {
  //       console.log('11111111111111111111111111111111111111111111');
  //     }
  //   },
  //   mql = window.matchMedia('all and (max-width: 480px)');
  // handleMatchMedia(mql);
  // mql.addListener(handleMatchMedia);

});