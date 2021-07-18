/// <reference path="jquery-3.6.0.js" />
"use strict";
(function (){
  
    $(".volunteer").on("mouseover",makeBig )
    $(".opportunities").on("mouseover",makeBig)
    $(".volunteer").on("mouseout",makeSmall )
    $(".opportunities").on("mouseout",makeSmall)
   
    function makeBig(){
        $(this).css('opacity', '1').height(450).width(450);
    }
    function makeSmall() {
        $(this).css('opacity',0.5).height(400).width(400);
    }












})();
