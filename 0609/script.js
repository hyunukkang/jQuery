// jQuery를 사용하려면 아래 초기 구문이 있어야 한다
/* 

1번방식

2번 방식 - 추천
$(function(){

})
*/
// /* 2번 */$(function(){
/* 1번 */$(document).ready(function(){
    var obj = document.querySelector('button');
    var $title = $('h1');
    var $button = $('button');
    // console.log($title); /* 유사 배열이다 */
    
    console.log(button);
    console.log($button)
    $title.click(function(){
        console.log('>>>>> click !! >>>')
    })
})
// })