$(function(){
    'use strict';
    $(".athome").click(function(){
        $(".sign").toggle();
    })
});
$(document).ready(function(){
    $(".dropdowncont").hide();
    });
$(document).ready(function(){
    $("span").hover(function(){
        $(".dropdowncont").show();
        });
    });
