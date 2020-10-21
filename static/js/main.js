$(document).ready(function () {


  //  SCRIPT FOR SLIDER 

  $(".slider-block").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var number = $('.slider-number'),
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

  //  END SCRIPT FOR SLIDER 


  //  SCRIPT FOR BTN SLIDER 

  $('.slick-next').addClass('active');
  var slickBtn = $('.slick-arrow');

  slickBtn.click(function () {
    if ($(this).hasClass('active')) {} else {
      slickBtn.removeClass('active');
      $(this).addClass('active');
    }
  });

  //  END SCRIPT FOR BTN SLIDER 


  //  SCRIPT FOR SHOW/HIDE BG HEAD MENU

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

  //  END SCRIPT FOR SHOW/HID BGE HEAD MENU


  //  SCRIPT FOR SCROLL ON ANCHOR

  const anchors = document.querySelectorAll('a[href*="#"');

  for (var anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  //  END SCRIPT FOR SCROLL ON ANCHOR


  //  SCRIPT FOR SHOW/HIDE HEAD MENU

  var menuOpenLink = document.querySelector('.open-menu'),
    menuOpenLinkText = menuOpenLink.querySelector('.text'),
    headerMenu = document.getElementById('head-menu'),
    menuLinks = headerMenu.querySelectorAll('.menu-links a'),
    menuStyles = getComputedStyle(headerMenu.querySelector('.menu-links')),
    menuPos = menuStyles.left;


  menuOpenLink.addEventListener('click', function () {
    if (headerMenu.classList.contains("active")) {
      headerMenu.classList.add('noActive');
      headerMenu.classList.remove('active');
      menuOpenLinkText.innerHTML = 'меню';
    } else if (headerMenu.classList.contains("noActive") || parseInt(menuPos) < 0) {
      menuOpenLinkText.innerHTML = 'назад';
      headerMenu.classList.add('active');
      headerMenu.classList.remove('noActive');
    }
  });

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  [].concat(_toConsumableArray(menuLinks)).forEach(function (link) {
    link.addEventListener('click', function () {
      headerMenu.classList.add('noActive');
      headerMenu.classList.remove('active');
      menuOpenLinkText.innerHTML = 'меню';
    });
  });

  //  SCRIPT FOR SHOW/HIDE HEAD MENU


});