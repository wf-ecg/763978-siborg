/*jslint es5:true, white:false */
/*globals $, debug, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

$(function () {
    var C = W.console;

    $('body').on('click', 'button', function () {
        var me = $(this);
        C.warn(me.find('a').first().attr('href'));
    });
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
