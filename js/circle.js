$(document).ready(function(){
 $('.circle-hide').hide();   
    
    $('.circles').mouseover(function() {
        
        var child = $(this)[0].children[0];
        var word = $(this)[0].children[1];
        var hidden = $(this)[0].children[2];
        //$(child).fadeOut(300);
        $(word).fadeOut(300);
        $(hidden).fadeIn(300);
        })
    
      $('.circles').mouseleave(function() {
        var child = $(this)[0].children[0];
        var word = $(this)[0].children[1];
        var hidden = $(this)[0].children[2];
        //$(child).fadeIn(300);
        $(word).fadeIn(300);
        $(hidden).fadeOut(300);
    })
      

});
circle-hide