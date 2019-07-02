$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 800) { //higher the number, the sooner the animation happens
      $(this).addClass("rise");
    }
  });
});