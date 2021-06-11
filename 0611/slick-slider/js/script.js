'use strict';

// $(document).ready(function(){}) - jQuery
$(document).ready(function(){
    // basic slider
    $('.main__banner').slick({
        //   setting-name: setting-value
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    // custom slider
    $('.custom__slider').slick({
        //   setting-name: setting-value
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});