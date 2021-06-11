'use strict';

// 기본세팅
// $(document).ready(function(){

// })
// 기본세팅2
$(function(){
    // header scroll event
    var $header = $('#header');
    var $arrowUp = $('#arrowUp')
    $(window).scroll(function(){
        console.log('>>>> ');
        // number가 반환된다 = $를 붙이지 않는다 (개인스타일 따라 다름) - 명시적,추상화개념
        var scrollTop = $(window).scrollTop();
        // outerHeight값은 border까지 높이 포함 - 자기자신의 전체크기
        var headerHeight = $('#header').outerHeight();
        var aboutHeight = $('#about').outerHeight();
        console.log(scrollTop);
        console.log(headerHeight);
        // header가 감춰졌을때 fixed를 해서 따라오게 한다
        // 스크롤도니 값이 헤더의 높이보다 커지면 (if 조건문)
        if( scrollTop > headerHeight ){
            $header.addClass('fixed')
        }else{
            $header.removeClass('fixed');
        }
        
        // aboutSection을 지나치면 보여라
        // scrollTop 값이 about section 높이보다 커지면 
        if( scrollTop > aboutHeight ){
            $arrowUp.addClass('visible');
        }else {
            $arrowUp.removeClass('visible');
        }
    })
    // toggle ele
    
    // gnb ele
    var $toggle = $('.toggle'),
    $gnb = $('.gnb'),
    $dimmed = $('#dimmed');
    $($toggle).click(function(){
        $dimmed.toggleClass('visible');
        $(this).toggleClass('active');
        $($gnb).toggleClass('visible');
    })
    
    // gnb visible
    
    // dimmed effect
    $dimmed.click(function(){
        // remove toggle 명확히 사용
        $(this).removeClass('visible');
        $($gnb).removeClass('visible');
        $toggle.removeClass('active');
    })
    // gnb__item window scroll
    var $gnbMenu = $('.gnb__menu');
    $gnbMenu.click(function(){
        var target = $(this).attr('data-target');
        // target은 클릭한 메뉴의 엘리먼트다
        var $target = $(target);
        // offset.top 개념 - 상단에서 자신의 위치까지의 스크롤 값
        var distance = $target.offset().top;
        $('html, body').animate({scrollTop: distance})
    })

    // arrow up window scroll
    // @keyframe arrowUp 
    // animate가 있다는건 기억 .. 외우기
    $arrowUp.click(function(){
        /* 호환성이 좋음 */
        $('html, body').animate({scrollTop: 0})
    })
})