/*jslint es5:true, white:false */
/*globals $, _, debug, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

//  force array to share indexed values thru key property expandos
var Reidx;

(function (W) { //IIFE
    var name = 'Reidx',
        DB,
        self = new Global(name, '(expandro)'),
        C = W.console,
        Df;

    Df = { // DEFAULTS
        dat: {},
    };
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// INTERNAL
    // look inside object from array for a key to use instead of index

    function reindexKey(val, idx, all) {
        // underscorejs standardize iterator
        if (!val.key) {
            return;
        }
        if (debug > 1) {
            C.debug(name + 'Key', idx, 'as', [val.key, val]);
        }

        // double ref from name as well as index (leading "dot")
        all['.' + val.key] = val;
    }

    function reindexAll(prop, obj) { // jquery iterator order
        // handle initial run
        if (!obj) {
            obj = prop;
        }
        // arrays get enhanced
        if (_.isArray(obj)) {
            _.each(obj, reindexKey);
        }
        // objects need to be recursed
        else if (_.isObject(obj)) {
            if (debug) {
                C.debug(name + '-ing', obj);
            }
            $.each(obj, reindexAll);
        }
        // everything else
        else {
            C.error(name + ' string? ya must be jokin');
        }
    }

    self = function (obj) {
        // make copy of DATA
        DB = $.extend(true, {}, obj);

        C.groupCollapsed(name, '...');
        reindexAll(DB); // treat all arrays
        C.groupEnd();

        return DB;
    };

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    W[name] = self;

}(window));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*



*/
