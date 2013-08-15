/*jslint es5:true, white:false */
/*globals $, console, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var Exref;

(function (W) { //IIFE
    var name = 'exref',
        self = new Global(name, '(extract refs)'),
        C = W.console,
        Df;

    Df = { // DEFAULTS
        dat: {},
    };
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// INTERNAL

    function heuro(str) {
        return [str.split(/::|:/), str.split(/::/).length + str.split(/:/).length];
    }

    function expandRef(str) {
        var rez = heuro(str),
            num = rez[1],
            seg = rez[0],
            tmp, con;

        switch (num) {
        case 6:
            //'x::x:x'
            tmp = seg[1];
            con = seg[2];
            break;
        case 5:
            //'x::x'
            tmp = seg[1];
            break;
        case 3:
            //'x:x'
            con = seg[1];
            tmp = 'echo';
            break;
        case 2:
            //'x'
            break;
        case 8:
            //'x::x::x'
        case 4:
            //'x:x:x'
        default:
            throw new Error('expandRef huh?');
        }
        seg = seg[0].slice(2);
        return {
            address: seg,
            context: con || 'normal',
            template: tmp || 'debug',
            segments: seg.split('_'),
            source: str,
        };
    }
    W.xer = expandRef; // expose

    function filterRefs(str) {
        // search for x-refs
        var reg = /\%_[\w\:\_\-]+/g;

        if (str.match) {
            return [str.match(reg), str.split(reg)]; // [refs, rest]
        } else {
            throw new Error('filterRefs requires string');
        }
    }
    W.xef = filterRefs; // expose
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    self = function (str) {
        var out, refs;
        // split out refs
        out = filterRefs(str);
        refs = out[0];
        if (out[0]) {
            // objectify each ref
            out[0] = $.map(refs, expandRef);
            console.debug(name + '-ing found', out[0].length, 'ref(s)', out[0]);
        }
        return out; // [refs, rest]
    };

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    W[name] = self;

}(window));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*



*/
