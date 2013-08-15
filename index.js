/*jslint es5:true, white:false */
/*globals $, Blobo, Build, DATA, Deref, Embody, GLOB, Handle, Jump, Reidx, TMPL, console, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function foo() {
            var DATA = {}, GLOB = {}, debug = 1, W = window;

            GLOB = {
                dev: false,
                toc: false,
            };

            function Init() {
                console.debug('init @ ' + Date());
                main();
            };
            Modernizr.load([
                {
                    both: [
                        '/lib/jquery/jquery-1.8.2.js',
                        '/lib/underscore/js-1.4.4/underscore.js',
                        '/lib/underscore/string-2.3.0/underscore.string.js',
                        '/lib/js/jq-con.js', // console polyfill
                        'styles/dev.css',
                        'styles/screen.css'
                    ],
                },{
                    test: window.isIE,
                    yep: [
                        'styles/ie.css',
                        'scripts/fixie.js', // homebrew bondo
                        '/lib/ie/nwmatcher.min.js', // css3 selector help
                        '/lib/ie/selectivizr-min.js', // css3 polyfill
                        //'/lib/ie/native.history.js', // state polyfill
                        './lib/split.js', // string.regexp polyfill
                    ],
                },{
                    test: window.isIE,
                    both: [
                        'data/Templates.js',
                        'data/0.Support.js',
                        'data/1.0.Components.js',
                        'data/1.1.Giving.js',
                        'data/2.Compositions.js',
//                        'data/3.Configuration.js',
                        'lib/blobo.js',
//                        'lib/mixin.js',
                        'lib/reggy.js',
                        'lib/string.js',
                        'lib/styler.js',
                        'scripts/deref.js',
                        'scripts/exref.js',
                        'scripts/embody.js',
                        'scripts/handle.js',
                        'scripts/jumpto.js',
                        'scripts/reidx.js',
                        'scripts/build.js',
                        'index.js',
                    ],
                    yep: [
                        '/lib/ie/rem.min.js', // css rem polyfill
                    ],
                    complete: Init
                },
            ]);
}
function main() {
    console.quebug('load main (initializer)');

    var datB, expB, htmB, DB, expect, length, self = main;

    self.body = $('#Body');
    self.focus = function focusOn(me) {
        console.error(me);
        var $me = $(me).closest('section');

        if (!$('body').is('.DEV___')) {
            $('.pool').find('section').not($me).hide();
            $me.show();
        }
        Jump(me);
    };

    // TODO: hotspot on showbox for button with active beacon
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    datB = Blobo.neo('dat'); //     store data
    expB = Blobo.neo('exp'); //     store expected length
    htmB = Blobo.neo('htm'); //     store embodied data

    DB = Reidx(DATA); //            prepare the expandos for array key control
    expect = expB() + 1; //         keep expecting wrong to force recreation TODO: remove
    length = expB(htmB().length);

    Build.init(TMPL); //            build (gen html from TMPL)
    Deref.init(DB, Build); //       instruction to merge DB and TMPL

    if (length !== expect) {
        Embody(datB(DB)); //        loops thru DB to Deref and append TOC and BODY
        htmB(self.body.html()); //  store
    } else {
        self.body.html(htmB()); //  restore
    }

    console.debug(DB, 'expected length', expect, //
    '... found', length, length === expect || '...recreated now');

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    Handle.init(DB);
    // main.focus('#Compositions_Home');
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
