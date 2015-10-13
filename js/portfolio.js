$(document).ready(function(){
 $('.browser-hover').hide();   
    
    $('.browser-image').mouseover(function() {
        
        var hidden = $(this)[0].children[1];
        $(hidden).fadeIn(300);
        
        })
    
      $('.browser-image').mouseleave(function() {
        var hidden = $(this)[0].children[1];
        $(hidden).fadeOut(300);
    })
   
      
      $('.browser-hover').click(function()  {
        var page = $(this).attr('id');
		window.location = page + '.html';
      })

});

