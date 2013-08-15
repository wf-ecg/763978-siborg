/*jslint es5:true, white:false */
/*globals $, Deref, GLOB, console, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var Embody;

(function (W) { //IIFE
    var name = 'Embody',
        DB, $nav, toc,
        self = new Global(name, '(demonstrator)'),
        C = W.console,
        Df;

    Df = { // DEFAULTS
        dat: {},
    };
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// INTERNAL

    function groupTOC() {
        var x = $();
        toc = GLOB.toc;

        if (!toc) {
            return;
        }

        // take all buttons
        $('dev.nav button').each(function (i, e) {
            var last = !($(e).next().is('button'));

            // cache one by one
            x.push(e);
            if (last) {
                // wrap cached adjacent buttons
                x.wrapAll('<aside>');
                x = $();
            }
        });
    }

    // look inside object from array for a key to use instead of index

    function tryKey(num, arr) {
        var key = arr[num].key;
        return key || (num ? 'x' + num : 'intro'); // no leading dot
    }

    // create links and destinations for TOC navigation

    function addEntry(str, pre, wrap) {
        var lnk = $('<a>').text(str);
        lnk.attr('href', '#' + pre + str);
        lnk.appendTo($nav).wrap(wrap || '<button class="red">');
    }

    function genAnc(str, ele, wrap) {
        var pre = '';

        if (typeof str === 'object') { //       array?
            pre = str.slice(0, - 1);
            pre = pre.join('_') + '_'; //       prefix
            str = str.pop(); //                 normalize
        }
        // add target anchor id
        ele.attr('id', pre + str);

        if (toc) {
            // generate TOC entry --- link to target
            addEntry(str, pre, wrap);
        }
    }

    // 3 tiers of wrapper

    function loopPool() {
        var pool = $('<div class=pool>').appendTo('#Body');

        // TIER #1 ... data docs / divs
        $.each(DB, function (i1, DIV) {
            var Div;

            Div = $('<div>').appendTo(pool);
            $('<h1 class=dev>').text(i1).appendTo(Div);
            genAnc(i1, Div, '<h1 class=dev>');

            // TIER #2 ... sections within doc
            $.each(DIV, function (i2, SEC) {
                var Sec;
                // + closure var "Div"
                Sec = $('<section>').appendTo(Div);
                $('<h2 class=dev>').text(i2).appendTo(Sec);
                if (i1 !== 'Support') {
                    genAnc([i1, i2], Sec, '<h2 class=chevar>');
                }

                // TIER #3 ... sub-sections / articles
                $.each(SEC, function (i3, ART) {
                    var Art;
                    // + closure var "Sec"
                    i3 = tryKey(i3, SEC); // objectify array
                    Art = $('<article>').appendTo(Sec);
                    $('<h3 class=dev>').text(i3).appendTo(Art);
                    genAnc([i1, i2, i3], Art);

                    // TIER #4 ... merge props and values / paragraphs
                    $.each(ART, function (i4, str) {
                        var Par, txt, btn;
                        // + closure var "Art"
                        btn = $('<button class="tiny blue">');
                        txt = '<strong class=ref>' + i4 + ': </strong>';
                        txt += Deref(ART, i4, [i1, i2, i3, i4]);

                        Par = $('<div class=deref>').html(txt).appendTo(Art);
                        genAnc([i1, i2, i3, i4], Par, btn);
                    });
                });
            });
        });
    }

    self = {
        init: function (obj, nav) {
            DB = obj;
            $nav = $(nav || 'nav.dev');

            console.groupCollapsed(name, 'exref/deref');
            loopPool(); // spill all data to body
            groupTOC(); // clean up TOC article buttons
            console.groupEnd();
        },
    };

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    W[name] = self.init;

}(window));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*



*/
