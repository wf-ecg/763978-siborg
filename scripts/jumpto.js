/*jslint es5:true, white:false */
/*globals $, _, console, debug, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var Jump;

(function (W) {
    //IIFE
    var name = 'Jump',
        self, G;

    console.quebug('load ' + name + ' (scroller)');

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    G = {
        lastAnc: [],
        lastPos: [],
        force: false,
        normal: 333,
        speed: NaN,
    };

    self = function (anc, style) {
        var $anc = $(anc);

        // ensure type
        anc = '#' + ($anc.attr('id') || '');

        G.lastAnc.push(anc);
        G.lastPos.push($('body').scrollTop());
        G.force = (style === 'force');
        G.speed = G.normal / (!isNaN(style) ? style : 1);

        if (debug) {
            console.debug(name + ':', anc);
        }
        if (self.init !== true) {
            self.init();
        } else if (!$anc.length) {
            return;
        }
        // slow the scroll
        self.scroll($anc);
    };

    // clear hash
    self.reset = function () {
        if (G.force) {
            W.location.hash = '';
        }
        W.location.hash = G.lastAnc.pop();
    };

    // delay scroll
    self.soon = function (anc) {
        W.setTimeout(function () {
            self(anc);
        }, G.speed);
    };

    // animate
    self.scroll = function (ele) {
        var $me = $(ele);

        if (G.force) {
            W.location.hash = '';
            $me.addClass('target');
        }
        // look before leap
        if ($me.length) {
            $('body').stop().animate({
                scrollTop: $me.offset().top,
            }, G.speed, function () {
                if (G.force) {
                    $me.removeClass('target');
                }
                self.reset();
            });
        }
    };
    // cache elements
    self.init = function () {
        var top, end;

        top = $('#top');
        end = $('#bottom');

        if (!top.length || !end.length) {
            throw new Error(name + ': requires #top and #bottom anchors');
        }
        this.init = true;
    };

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    W[name] = self;
    self._ = G;

}(window));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*



*/
