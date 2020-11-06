// 스킵메뉴 호출
var skipMenu = $('.skip_menu');
var skipNav = $('.skip_menu>a');
skipNav.focus(function(){
  skipMenu.addClass('active');
});
skipNav.blur(function(){
  skipMenu.removeClass('active');
});

// 토글메뉴
$('.tgl_btn').on('click',function(){
  $(this).toggleClass('active');
  if($(this).hasClass('active')){
    $('.nav').css('right',0);
  }else{
    $('.nav').css('right','-100%');
  }
});

// 랭귀지오버
$('.lang>a').on('click',function(){
  $('.lang>a').removeClass('active');
  $(this).addClass('active');
});

// 메인네비 클릭
$('.main_nav>li>a').on('click',function(){
  var winWidth = $(window).width();
  if(winWidth<1280){
    if($(this).hasClass('active')){
      var winWidth = $(window).width();
      $(this).removeClass('active');
      $(this).next().slideUp(300);
    }else{
      closeSub();
      $(this).addClass('active');
      $(this).next().slideDown(300);
    };
  };
})

//윈도우 리사이즈 이벤트
$(window).on('resize',function(){
  var winWidth = $(window).width();
  if(winWidth>=768){
    closeSub();
  }
});

// 서브메뉴 닫기
function closeSub(){
  $('.main_nav>li>a').removeClass('active');
  $('.main_nav>li>a').next().slideUp();
};
//모바일 서브메뉴 호출/닫기
// function moSub(self){
//   if($(self).hasClass('active')){
//     $(self).removeClass('active');
//     $(self).next().slideUp(300);
//   }else{
//     $(self).addClass('active');
//     $(self).next().slideDown(300);
//   };
// }

//문서 해드 스크롤
$(document).on('scroll',function(){
  var docTop = $(window).scrollTop();
  var hrd = $('.header');
  if(docTop>0){
    hrd.addClass('active');
  }else{
    hrd.removeClass('active');
  }
});

//내비 가로 좌표
$('.main_nav>li').hover(function(){
  var navOffset = $(this).offset().left;
  $(this).children('.sub_nav').css('left',navOffset);
});

//swiper slider
var masterSlider = new Swiper('.main_slider',{
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard:true,
  loop:true
});

var mainPag = $('.main_slider .swiper-pagination-bullets .swiper-pagination-bullet');
mainPag[0].innerText='INSTER';
mainPag[1].innerText='인쇄용지';
mainPag[2].innerText='산업용지';
mainPag[3].innerText='특수지';
mainPag[4].innerText='감열지';

var slaveSlider = new Swiper('.papers_slider',{
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard:true,
  loop:true
});





