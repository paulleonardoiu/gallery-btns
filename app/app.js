import { changePageContent } from "./model.js";

function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    changePageContent(pageID);
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

var winWidth = $(window).width();

$(document).ready(function(){
    initURLListener();
    var maxWidth = 960;
    $(".bars").on("click",(function(e){
        if(winWidth <= maxWidth){
            $(".bars").toggleClass("active");
            $(".links").toggleClass("active");
        }
    }));
    $(".links a").on("click",(function(e){
        if(winWidth <= maxWidth){    
            $(".bars").toggleClass("active");
            $(".links").toggleClass("active");
        }
    }));
})


$(window).resize(function(){
    winWidth = $(window).width();
})


// Display Button Ids
var buttons = ".btn";

$(document).on("click", buttons, function(e){
    let btnId = e.currentTarget.id;
    // if(btnId.includes("View")){$('#'+btnId).html("View");}
    // if(btnId.includes("Edit")){$('#'+btnId).html("Edit");}
    // if(btnId.includes("Delete")){$('#'+btnId).html("Delete");}
    // $('#'+btnId).html("Test");
    console.log(btnId);
});


