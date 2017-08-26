var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 80 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

$(window).scroll(function(){
  
  var wintop = $(this).scrollTop(); 
  
  $('.section').each(function(){
    if(wintop > $(this).offset().top - ($(window).height() / 1.9)){
      $(this).addClass('animate');
      $(this).find('p').addClass('animate');
    }
  });

});