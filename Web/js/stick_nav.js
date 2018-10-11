$(function() {
  var $win = $(window),
      $header = $('header'),
      $nav = $('nav'),
      $main = $('main'),
      headerHeight = $header.outerHeight(),
      navHeight = $nav.outerHeight(),
      headerPos = $header.offset().top,
      navPos = $nav.offset().top,
      headerfixedClass = 'header-is-fixed';
      navfixedClass = 'nav-is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value >= headerPos ) {
      $header.addClass(headerfixedClass);
      $nav.addClass(navfixedClass);
      $nav.css('top', headerHeight);
      $main.css('margin-top', navHeight+headerHeight);
    } else {
      $header.removeClass(headerfixedClass);
      $nav.removeClass(navfixedClass);
      $main.css('margin-top', '0');
    }

    $header.fadeIn('fast');
    $nav.fadeIn('fast');
    setTimeout(function(){
    if (value === $(this).scrollTop() && $(this).scrollTop() > navPos+headerPos){
        $nav.fadeOut('normal');
        $header.fadeOut('normal');
        }
    },3000);
  });
});
