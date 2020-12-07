$(function(){
    $('.header__wrap').slick({

        dots:false,
        arrows:false,
        autoplay: true,
        speed: 3000,


    });

    var $videoContainer = $('#video'),
    $videoControls = $('.video-control'),
    $video = $('#myVideo')[0];

  $videoControls.click(function () {
    if ($video.paused) {
      $video.play();
      $videoContainer.addClass('video-is-playing');
    } else {
      $video.pause();
      $videoContainer.removeClass('video-is-playing');
      
      $video.load();
    }
  });

  new WOW().init();





    
});