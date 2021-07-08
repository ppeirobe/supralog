$(function(){
    
    $(".movie-body").mouseenter(function(){
        $(this).children().find('img').css({
            "opacity":"0.1"
        });
        $(this).find(".movie-title").show();
    });
    
    $(".movie-body").mouseleave(function(){
        $(this).children().find('img').css({
            "opacity":"1"
        });
        $(this).find(".movie-title").hide();
    });
    
 
    
});
