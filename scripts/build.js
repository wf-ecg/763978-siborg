/*jslint es5:true, white:false */
/*globals $, _, console, debug, window,
    Deref */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var Build;

(function (W) { //IIFE
    var name = 'Build',
        TMPL, logger, methods, blank = '';

    console.quebug('load ' + name + ' (templatise)');

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    function flat(x) {
        x = _.isArray(x) ? x : [x]; // already primitive?
        return x.join(blank);
    }

    function wrap(str, cls) {
        cls = cls || 'deres';
        str = flat(str); // in case of array
        return '<span class="' + cls + '">' + str + '</span>';
    }

    // divide string along token boundaries (str, key, str, key, str)

    function parseTemplate(tmp) {
        var str, arr;
        str = (tmp.charAt(0) === '{' ? ' ' : blank) + tmp;
        arr = str.split(/\{\{|\}\}/g);
        // if starts with { prefix with empty so odds indexes are tokens
        return arr;
    }

    // replace {{tokens}} with matching obj properties

    function applyKeys(keyobj, tplstr, partial) {
        var arr, out;

        if (!keyobj || !tplstr) {
            return 'whoops';
        }
        // parseTemplate template string
        arr = parseTemplate(tplstr);
        // replace keys with object values
        arr = $.map(arr, function (e, i) {
            // odds only
            if (i % 2) {
                if (keyobj[e]) {
                    return keyobj[e];
                } else if (partial) {
                    return '{{' + e + '}}'; // reconstruct token
                } else {
                    return blank;
                }
            } else {
                return e;
            }
        });
        out = $.trim(flat(arr));
        if (debug) {
            logger = (logger || ['RESULT:']);
            logger.push(keyobj, [('TPL:' + tplstr), ('OUT:' + out)]);
        }
        if (debug && !partial) {
            console.log(logger);
            logger = blank;
        }
        return out;
    }

    // optional template reconstruction preprocessing

    function modTemplate(name, prep) {
        var con, tpl = blank;
        try {
            tpl = TMPL[name]._def; // obtain default template
            con = TMPL[name][prep]; // obtain any sub-template
            if (con) {
                // pre-replace
                tpl = applyKeys(con, tpl, 'PARTIAL');
            } else {
                // micro template
                if (prep !== 'normal') {
                    tpl = '{{' + prep + '}}';
                }
            }
        } catch (err) {
            throw new Error('bad template?' + err);
        }
        return tpl;
    }

    // look for prefixed props and concat as string

    function extractMeta(dot) {
        var str = blank;

        $.each(dot, function (i, e) {
            if (i.charAt && i.charAt(0) === '_') {
                str += e;
            }
        });
        return str;
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    function self(obj) {
        var datobj, modnom, tplnom, tpltxt;
        // Build O.result FROM O.data * O.template
        datobj = obj.data;
        tplnom = obj.template;
        modnom = obj.context;

        if (modnom && modnom !== 'normal') {
            tpltxt = modTemplate(tplnom, modnom);
        } else {
            tpltxt = TMPL[tplnom]._def;
        }
        if (debug) {
            // insert into output stream the ref used (and ancestors)
            obj.derefd = blank + '<a href="#' + obj.address + '">' //
            + obj.address + ' tpl:' + (tplnom + ' / ' + modnom) + '</a>' //
            + extractMeta(obj.data);

        }
        obj.result = applyKeys(datobj, tpltxt);
        return obj;
    }

    methods = {
        box: function () {
            return $('#Showbox');
        },
        debug: function (str) {
            str = $.stringify(str).replace(/","/g, '",<br class=comma"');
            return wrap(str, 'dev');
        },
        sample: function (str) {
            this.box().prepend(Deref(str));
        },
        activate: function (okay) {
            if (!okay) {
                this.box().find('.beacon').remove();
                throw new Error(name + ': bad source?');
            }
            $('<img>').attr({
                'src': 'junk/redled.png',
                'class': 'beacon',
            }).appendTo(this.box());
        },
        init: function (dat) {
            TMPL = dat;
            this.activate(_.isObject(TMPL));
        },
    };
    $.extend(self, methods);

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    // I LOVE THIS EMERGING STRUCTURE!
    self[undefined] = self.debug;
    W[name] = self;

}(window));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*



*/
