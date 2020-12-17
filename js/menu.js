// jQuery(function($){
//   // DOM Readyになったら処理する
//   $(function() {
//     // CSSのnavbar-wrapperクラス内を固定メニューにする
//     $(".nav").stickUp();
//   });
// });

// jQuery(function($){
//   $(function() {
//     $(".nav").stickUp();
//   });
// });

jQuery(function($){
  $(function() {
  var w = jQuery(window).width();
  var x = 481;
  if (w >= x) {
    $(".nav-wrapper").stickUp();
  }
  });
});