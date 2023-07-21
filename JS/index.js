//메인페이지 글자 애니매이션
const text = ['제27회 신한그림엽서공모전 수상자 발표','TOUCH™ 오펙 마카','신한 전문가 오일컬러','신한 전문가 아크릴컬러','최고급 전문가 수채화 SWC','신한 전문가 과슈','신한 전문가 포스터컬러'];
const fadeOut = document.querySelectorAll('.fade-out-text');


fadeOut.forEach(function(value,key){
    console.log(value)
    fadeOut[key].innerText = text[key];
})

/* 
text.forEach(function(v,k){    
    let sliceText = text[k].split('');
    let a =  
    
    console.log(a)
    // sliceText.style.animationDelay = `${k * 60}ms`; // 50ms(0.05초) 간격으로 각 글자에 애니메이션 딜레이 적용
}) */


/*     if(pos.status){head-area.classList.add('move')}
            else{head-area.classList.remove('move')}
    //스크롤시 헤더가 움찔하는거 css에 추가하기
 */   

window.onload = function(){
//메인페이지 스크롤링
let pos = {y:0, y2:0, status:true};
let num = 0,timeOut; 
    
const elArticle = document.querySelectorAll('.scroll'),
        allContents = document.querySelector('.swipe');
        // footer = document.querySelector('footer');

let artArr = [];
elArticle.forEach(function(ele){
    if(ele.tagName != 'FOOTER'){
        artArr.push(ele.getBoundingClientRect().y);
    }else{
        artArr.push(ele.getBoundingClientRect().y - (window.innerHeight - ele.offsetHeight));
    }
})

    document.body.style = `height:${allContents.offsetHeight*2}px`;
/*     footer.style= `
    position:relative;
    margin-top:${allContents.offsetHeight}px`
 */    
    window.addEventListener('scroll', function(){
            pos.y = window.pageYOffset;
            pos.status = (pos.y > pos.y2) ? true : false;
            pos.y2 = pos.y;
            
            clearTimeout(timeOut);
            timeOut = setTimeout(function(){
                pos.status ? num++ : num--;
                if(num > artArr.length-1 ) num = artArr.length-1 
                if(num < 0) num = 0;

                allContents.style = `transform:translateY(-${artArr[num]}px)`;
            },100)
        })


// 슬라이드 스와이퍼 굴러가게 하는 코드 
const el_slide3_wrapper = document.querySelector('.slide3 .swiper-wrapper');
    el_slide3_wrapper.innerHTML += el_slide3_wrapper.innerHTML;
    

    var swiper1 = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        // debugger: false,
        touchRatio: 0,//드래그 금지
        loop:true,
        breakpoints: {

            800: {
                slidesPerView: 1,  //브라우저가 768보다 클 때
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 1,  //브라우저가 1024보다 클 때
                spaceBetween: 0,
            },
        },

        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper2 = new Swiper(".mySwiper-1", {
        spaceBetween: 0,
        centeredSlides: true,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper3 = new Swiper(".mySwiper2", {
        spaceBetween: 0,
        centeredSlides: true,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper4 = new Swiper(".mySwiper3", {
        slidesPerView: 4,
        spaceBetween: 0,
        loop:true,
        loopSlides:8,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}