$(function(){
  var set = 10;//ウインドウ上部からどれぐらいの位置で変化させるか
  var boxTop = new Array;
  var current = -1;
  //各要素の位置
  $('.space').each(function(i) {
    boxTop[i] = $(this).offset().top; //class="space"を持つそれぞれのdivの上面位置を取得する
  });
  //最初の要素にclass="on"をつける
  changeBox(0);
  //スクロールした時の処理
  $(window).scroll(function(){
    scrollPosition = $(window).scrollTop();
    for (var i = boxTop.length - 1 ; i >= 0; i--) {
      if ($(window).scrollTop() > boxTop[i] - set) { //navのcurrent要素が変更
        changeBox(i); //変更用のメソッド呼び出し
        break;
      }
    };
  });

  //ナビの処理
  function changeBox(secNum) {
    if (secNum != current) {
      current = secNum;
      $('nav a').removeClass('current');
      $('nav ul li a').eq(secNum).addClass('current');
    }
  };
});
