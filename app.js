var main = function() {


  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });

  var themeText = $.cookie("letters");
  var themeImg = $.cookie("theme-img");

  if (themeText) {
    //remove default "red" class and add cookie class
    $('.top h1, .bottom p, .bottom a').addClass(themeText);
    $('.yellowtron, .goldtron, .whitetron').removeClass.addClass(themeImg);
  }

      if (themeText === "white") {
      $('.yellowtron').toggleClass('whitetron');
      $('.goldtron').toggleClass('whitetron');
      $('.jumbotron').addClass('whitetron');
      $('.top h1, .bottom p, .bottom a').addClass('white');
      $.cookie("letters", "white");
      $.cookie("theme-img", "whitetron")
      alert($.cookie('letters') + " is set");
    } else if (themeText === "yellow") {
      $('.jumbotron').removeClass('whitetron');
      $('.jumbotron').removeClass('goldtron');
      $('.jumbotron').addClass('yellowtron');
      $('.top h1, .bottom p, .bottom a').css("color", "#fcc312")
      $.cookie("selected_class", "yellowtron");
    } else if (themeText === "gold") {
      $('.jumbotron').removeClass('yellowtron');
      $('.jumbotron').removeClass('whitetron');
      $('.jumbotron').addClass('goldtron');
      $('.top h1, .bottom p, .bottom a').css("color", "#d4bf86")
      $.cookie("selected_class", "goldtron");
    };

  $('.dropdown-menu li').click(function() {
    var theme = $(this).attr('class');
    $('.dropdown-menu li').removeClass('active');
    $(this).addClass('active');
    //$('.dropdown-menu li').removeClass('active');//
    //$(this).addClass('active');//
/*
    if (theme === "white") {
      $('.top, .bottom').removeClass('yellow');
      $('.top, .bottom').removeClass('gold');
      $('.jumbotron').removeClass('yellowtron');
      $('.jumbotron').removeClass('goldtron');
      $('.top, .bottom').addClass('white');
      $('.jumbotron').addClass('whitetron');
    } else if (theme === "yellow") {
      $('.top h1, .bottom p, .bottom a').removeClass('white');
      $('.top h1, .bottom p, .bottom a').removeClass('gold');
      $('.jumbotron').removeClass('whitetron');
      $('.jumbotron').removeClass('goldtron');
      $('.top h1, .bottom p, .bottom a').addClass('yellow');
      $('.jumbotron').addClass('yellowtron');
    } else if (theme === "gold") {
      $('.top h1, .bottom p, .bottom a').removeClass('yellow');
      $('.top h1, .bottom p, .bottom a').removeClass('white');
      $('.jumbotron').removeClass('yellowtron');
      $('.jumbotron').removeClass('whitetron');
      $('.top h1, .bottom p, .bottom a').addClass('gold');
      $('.jumbotron').addClass('goldtron');
    }; */


    if (theme === "white") {
      $('.jumbotron').removeClass('yellowtron');
      $('.jumbotron').removeClass('goldtron');
      $('.jumbotron').addClass('whitetron');
      $('.top h1, .bottom p, .bottom a').css("color", "#ffffff")
      $.cookie("selected_class", "whitetron");
    } else if (theme === "yellow") {
      $('.jumbotron').removeClass('whitetron');
      $('.jumbotron').removeClass('goldtron');
      $('.jumbotron').addClass('yellowtron');
      $('.top h1, .bottom p, .bottom a').css("color", "#fcc312")
      $.cookie("selected_class", "yellowtron");
    } else if (theme === "gold") {
      $('.jumbotron').removeClass('yellowtron');
      $('.jumbotron').removeClass('whitetron');
      $('.jumbotron').addClass('goldtron');
      $('.top h1, .bottom p, .bottom a').css("color", "#d4bf86")
      $.cookie("selected_class", "goldtron");
    };
    

  });

//  alert($.cookie('theme') );

  
  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

}

$(document).ready(main);