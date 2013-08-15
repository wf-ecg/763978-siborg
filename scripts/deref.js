/*jslint es5:true, white:false */
/*globals $, GLOB, _, console, debug, exref, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var Deref;

(function (W) {
    //IIFE
    var name = 'Deref',
        self, DB, Build;

    console.quebug('load ' + name + ' (translator)');

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    // cleanup line endings

    function replaceNewlines(str) {
        str = str.replace(/\n\n/g, '<hr>');
        str = str.replace(/\n/g, '<br>');

        return str;
    }

    function fetch(ref) {
        // embed the data obj
        var res, arr = ref.segments,
            posi;

        if (arr) {
            // resolve ref up to 3 tiers
            try {
                res = DB[arr[0]][arr[1]];
                // try reading expando (dot prefix)
                posi = {
                    a: res[arr[2]],
                    b: '.' + arr[2],
                    c: arr[2].replace(/\D/g, ''),
                    d: res,
                };
                res = res[posi.a] || res[posi.b] || res[posi.c] || posi.d;
            } catch (err) {
                console.error('Deref.fetch', err, ref);
                res = ref.source;
            }
        }
        ref.data = res;
        return ref;
    }
    W.xdf = fetch; // expose
    // feed source to builder

    function rebuild(ref) {
        try {
            return Build(fetch(ref));
        } catch (err) {
            console.error('rebuild', err, ref);
        }
    }
    W.xdb = rebuild; // expose
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    self = function (branch, leaf, segs) {
        var out, refs, rest, msg, str, notes = '';

        if (!leaf) {
            // mock branch request with a dummy leaf name
            leaf = 'key';
            branch = {
                'key': branch,
            };
        } else if (!branch) {
            throw new Error(name + ' which branch of source');
        } else if (!DB) {
            throw new Error(name + ' database not initialized');
        }
        segs = segs ? segs : [leaf];
        msg = segs.join('/');

        str = branch[leaf]; // take a piece of obj
        out = exref(str); // [refs, rest] parse refs from string
        refs = out[0];
        rest = out[1];

        // Deref and build string for each token match
        if (refs) {
            out = ['<div class="res">'];

            if (debug) {
                console.log(name + '-ing', [msg, _.pluck(refs, 'source')]);
            }

            $.each(refs, function (i, ref) {
                // no address ? use self
                if (!ref.address) {
                    ref.segments = segs;
                }
                rebuild(ref);
                if (GLOB.dev) {
                    // we add to the notes for this what was derefed...
                    notes += ('<span class="ref">' + ref.derefd + '</span>');
                }
                out.push(rest.shift(), ref.result);
            });

            // add last slice of bread
            out.push(rest.shift(), '</div>');

            // CACHE:   store the results over the old refs
            branch[leaf] = out.slice(1, - 1).join('');
            branch['_' + leaf] = notes;
            // META:    this portion of Deref is brought to you by...
        } else {
            out = ['<span class="res">', str, '</span>'];
        }
        out = out.join('') + notes;
        return replaceNewlines(out);
    };

    // set data source and builder tools

    function inits(dataObj, genFn) {
        DB = dataObj;
        Build = genFn;
        self.DB = DB;
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    W[name] = self;
    self.init = inits;

}(window));
