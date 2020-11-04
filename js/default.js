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
  $('.main_nav>li>a').removeClass('active');
  $('.main_nav>li>a').next().css('display','none');
  $(this).addClass('active');
  $(this).next().css('display','block');

})

