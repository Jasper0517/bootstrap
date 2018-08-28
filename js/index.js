$(window).scroll(function(evt){
  if($(window).scrollTop() > 0){
    $('.navbar').removeClass('navbar-top');
  }else{
    $('.navbar').addClass('navbar-top');
  }
});


$(document).on('click','a',function(e){
  e.preventDefault();
  let target = $(this).attr('href');
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500)
});

var s = skrollr.init();