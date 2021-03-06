/*jslint es5:true, white:false */
/*globals $, _, debug, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// inject selectors and styles into a style sheet
(function (W) {
    //IIFE
    var name = 'styler',
        inited, $S,
        self = new Global(name, '(rulemaker)'),
        C = W.console,
        Df;

    Df = { // DEFAULTS
        dat: {},
    };
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// INTERNAL
    // make and retain global connection to a sheet (blank, screen only)
    $S = $('<style>');

    function get() {
        return $S.text();
    }

    function set(str) {
        this.init();
        $S.text(str);
        return $S;
    }

    function add(str) {
        return set(get() + str);
    }

    function replace(str) {
        return set(str);
    }

    function clear() {
        set('');
    }

    // allow for bag of named tricks...  (KISS, Molasses, Shadoze) //

    function KISS() {
        var str = '@font-face{font-family:x;src:' + //
        'url(http://10.89.101.100/lib/fonts/CCDestroyerSolid.woff)format(woff);}' + //
        '*{font-family:x!important;}';

        add(str);
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    function init(auto) {
        if (!inited) {
            (auto || C.debug(name + ': auto initing'));
            // append to the end of head
            $S.appendTo('head');
            inited = true;
        }
    }

    self = {
        init: function () {
            init(true);
        },
        clear: clear,
        KISS: KISS,
    };

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    W[name] = self;

}(window));

/*

 */
