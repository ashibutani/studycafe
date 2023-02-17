$(function(){
    $(".hm_menu").on("click",function(){
        $(".sp_nav").slideToggle(300);
        $(".hm_menu span").toggleClass("active");       

    });
});


$(function(){
    $(window).resize(function(){/*画面サイズが変更された時*/
        $(".sp_nav").css("display","none");/*sp-nav-areaを消す*/
        $(".hm_menu span").removeClass("active");/*クラスactiveをつけるとボタンがななめになるので、クラスactiveを消す*/
    });
});
/***ーーーーーー*********/
/***ふわっと現れる*********/
/***ーーーーーーー*********/
/***TOPページ中央文章*********/
$(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.center_text').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });

/***detailページ*********/
/*以下はスクロールしたらスライドインしてくるやつだが、スクロールせずに最初の要素は入ってきてほしいから、不採用*/
/*ーーーーーーーーーーーCSS
.detail_text_box {
     最初は非表示 
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
    transition: opacity 1s, visibility 1s, transform 1s;
  }
   フェードイン時に入るクラス 
.is-fadein {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }-----------------------ここまでCSS*/
  /*$(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.detail_text_box').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });*/
  
/*要素が画面内に入ったらスライドインしてくる*/
$(function () {
  const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 100; // どのぐらい要素を動かすか(px)
  const fade_time = 800; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".detail_text_box").css({
    opacity: 0,
    transform: "translateY(" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".detail_text_box").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateY(0)",
        });
      }
    });
  });
});
 /***menuページ*********/


 /***drink*********/
/*要素が画面内に入ったらスライドインしてくる*/
$(function () {
  const fade_bottom = 150; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 100; // どのぐらい要素を動かすか(px)
  const fade_time = 1500; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".drink_text_box, .drink_pic").css({
    opacity: 0,
    transform: "translateY(" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".drink_text_box, .drink_pic").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateY(0)",
        });
      }
    });
  });
});

 /***food*********/
/*要素が画面内に入ったらスライドインしてくる*/
$(function () {
  const fade_bottom = 150; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 100; // どのぐらい要素を動かすか(px)
  const fade_time = 1500; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".food_smallbox").css({
    opacity: 0,
    transform: "translateY(" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".food_smallbox").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateY(0)",
        });
      }
    });
  });
});