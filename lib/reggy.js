/*jslint es5:true, white:false */
/*globals $, _, debug, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

(function (W) {
    //IIFE
    var name = 'reggy',
        $par, $reg, $str, inited,
        self = new Global(name, '(searcher)'),
        C = W.console,
        Df;

    Df = { // DEFAULTS
        dat: {},
    };
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// INTERNAL

    function pull() {
        return {
            reg: $reg.val(),
            str: $str.val(),
        };
    }

    function push(reg, str) {
        $reg.val(reg);
        $str.val(str);
    }

    function output(o) {
        var res, reg = new RegExp(o.reg, 'g');

        C.debug(reg);
        while ( !! (res = reg.exec(o.str))) {
            C.debug(res);
        }
    }

    function addFields() {
        $reg = $('<input id="REG">');
        $str = $('<input id="STR">');

        $reg.add($str).on('change', function () {
            output(pull());
        }).appendTo($par);

        $reg.wrap('<label>').after(' « pattern <br>');
        $str.wrap('<label>').after(' « string <br>');
    }

    function init(sel) {
        $par = $(sel);

        if ($par.length && !inited) {
            addFields(sel);
            push('\\{\\{\\w', '{{{a}}} a{{{bb}}} {{c}}');
            inited = true;
        }
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    self = function (sel) {
        C.debug(name + ' upon', sel);
        init(sel || '#Showbox');
    };
    self.toString = function () {
        return '[closure only]';
    };

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    W[name] = self;

}(window));

/*



*/
