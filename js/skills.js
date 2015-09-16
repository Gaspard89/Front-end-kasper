$(document).ready(function(){
    $(this).scrollTop(0);
});


var toScrollOrNotToScroll = true;

$(document).scroll(function(){
    if($(document).scrollTo('.skills-content') && toScrollOrNotToScroll)
    {
setTimeout(function(){

        $('.progressbar-title .progressbar-percent').each(function() {
            var me = $(this);
            var perc = me.attr("data-percentage");

            //TODO: left and right text handling

            var current_perc = 0;

            var progress = setInterval(function() {
                if (current_perc>=perc) {
                    clearInterval(progress);
                } else {
                    current_perc +=1;
                }

                me.text((current_perc)+'%');

            }, 20);

        });

    },0);

setTimeout(function(){
        $('.bars').each(function() {
            var me = $(this);
            var perc = me.attr("data-percentage");

            var current_perc = 0;

            var progress = setInterval(function() {
                if (current_perc>=perc) {
                    clearInterval(progress);
                } else {
                    current_perc +=1;
                    me.css('width', (current_perc)+'%');
                }

            }, 20);

        });

    },0);
    }
    toScrollOrNotToScroll = false;
});


$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}