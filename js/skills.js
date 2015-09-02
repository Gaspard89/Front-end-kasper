$(document).ready(function(){
    $(this).scrollTop(0);
});


var toScrollOrNotToScroll = true;

$(document).scroll(function(){
    if($(document).scrollTop() <=20 && toScrollOrNotToScroll)
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
        $('.gowno').each(function() {
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


