$(document).ready(function(){
  new TypeIt(".shadow_text", {
    speed: 70,
    loop: false,
    waitUntilVisible: true,
    })
    .break({delay:0})
    .break({delay:0})
    .break({delay:0})
    .type("Hi ! My name is Im Jong Won",{delay:500})
    .move(-11)
    .delete(11,{speed:300})
    .move(1)
    .type("'")
    .move(null,{to:"END"})
    .break({delay:100})
    .break({delay:100})
    .break({delay:100})
    .break({delay:100})
    .type("Let me introduce myself :>")
    .go();
  function shadow_fade(){
    $('.shadow_box').fadeOut(300,function(){
      $('#bullet').fadeIn(300);
      $('.intro_box').fadeIn(300);
  });
  }
  window.setTimeout(shadow_fade,9500);
  // 13500
  new TypeIt(".intro_title", {
    speed: 70,
    loop: false,
    waitUntilVisible: true,
    })
    .type("기본에 충실한 UI와",{delay:300})
    .break()
    .type("기억에 남는 UX를 추구하는",{delay:300})
    .break()
    .type("웹 퍼블리셔 임종원 입니다.")
    .go();
  window.setTimeout(function(){$('.contact').animate({'marginLeft':0},1500)},13800);
  window.setTimeout(function(){$('.photo').animate({'opacity':1},1500)},13800);
  window.setTimeout(function(){$('.license_wrap').animate({'marginLeft':0},1500)},13800);
  window.setTimeout(function(){$('.skills').animate({'left':'780px'},1500)},13800);
  window.setTimeout(function(){$('.p1_button').fadeIn(500)},17200);
  // 19800
  var photo_timer = 0;
  function photoani(){
    $('.photo').animate({'marginLeft':'-5px'},500).animate({'marginLeft':0},500);
  }
  function run_photo(){
    photo_timer = setInterval(photoani,2000);
  }
  run_photo();
  $('.photo').on(
    'mouseenter',function(){
      $(this).find('img').stop(true).fadeIn(1000);
      $(this).css({marginLeft:0})
      window.clearInterval(photo_timer);
    }).on(
      'mouseleave',function(){
        $(this).find('img').eq(1).fadeOut(300);
        $(this).find('img').eq(2).fadeOut(300);
        $(this).find('img').eq(3).fadeOut(300);
        run_photo();
      });
  $('.photo').find('img').on(
    'mouseenter',function(){
      $(this).stop(true).animate({'width':'270px','height':'270px','margin':'0 15px'},300)
    }).on(
      'mouseleave',function(){
        $('.photo').find('img').stop(true).animate({'width':'240px','height':'240px','margin':'0 30px'},300);
      });
});