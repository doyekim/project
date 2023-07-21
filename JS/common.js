//헤더 버거메뉴 클릭시 움직임


$('.head-area nav').on('click',function(){
  $('.head-toggle').toggleClass('active')
  if($('.head-toggle').hasClass('active')){
    $('body').css('overflow','hidden');
  }else{
    $('body').css('overflow','block');

  }
})

// $('.head-area')