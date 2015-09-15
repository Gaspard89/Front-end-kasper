$(document).ready(function(){
 $('.browser-hover').hide();   
    
    $('.portfolio-window').mouseover(function() {
        
        var hidden = $(this)[0].children[2];
        $(hidden).fadeIn(300);
        
        })
    
      $('.portfolio-window').mouseleave(function() {
        var hidden = $(this)[0].children[2];
        $(hidden).fadeOut(300);
    })
      

});

