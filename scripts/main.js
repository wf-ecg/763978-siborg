/*jslint es5:true, white:false */
/*globals $, Blobo, Build, Deref, Embody, Global, Handle, Jump, Main, Modernizr, Reidx, TMPL, debug, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var DATA = {}, GLOB = {};

GLOB = {
    dev: false,
    toc: false,
};
var Data, CDN, W = (W || window);

W.debug = 1;

if ($.now() > 137800e7) {
    W.debug--;
}

CDN = {
    self: '/',
    disk: 'file:///',
    bithon: '../../../',
    webdev: 'http://10.89.101.100/',
    mython: 'http://10.89.101.81:8000/',
    python: 'http://localhost:8000/',
}.bithon;

Modernizr.load([
{
    // BASELINE
    test: W.isIE,
    yep: [
        //  '/lib/ie/native.history.js', /* state polyfill */
        CDN + 'lib/ie/split.js', /* string.regexp polyfill */
        CDN + 'lib/ie/html5shiv.js',
        CDN + 'lib/ie/nwmatcher.min.js', /* css3 selector help */
        CDN + 'lib/ie/selectivizr-min.js', /* css3 polyfill */
        './styles/ie.css',
        './scripts/fixie.js', /* homebrew bondo */
    ],
    both: [
        CDN + 'lib/underscore/js-1.4.4/underscore.js',
        CDN + 'lib/underscore/string-2.3.0/underscore.string.js',
        './styles/dev.css',
        './styles/screen.css',
    ],
    complete: function () {
        Data = new Global('Data', '(catchall data fixture)');
    },
},{
    // POST BASE
    test: W.isIE,
    yep: [
        CDN + 'lib/ie/rem.min.js', /* css rem polyfill ++ load-late ++ */
    ],
    both: [
        'data/Templates.js',
        'data/0.Support.js',
        'data/1.0.Components.js',
        'data/1.1.Giving.js',
        'data/2.Compositions.js',
        //  'data/3.Configuration.js',
        'lib/blobo.js',
        //  'lib/mixin.js',
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
    ],
    complete: function () {
        Main(W).init();
    },
},{
    // ANALYTICS
    test: !W.debug,
    yep: [
        CDN + 'lib/js/ecg-ga.js',
    ],
},
]);

var Main;

function Main(W) {
    var name = 'Main',
        datB, expB, htmB, DB, expect, length,
        self = new Global(name, '(kicker and binder)'),
        C = W.console,
        Df;

        Df = { // DEFAULTS
            dat: {},
        };
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// INTERNAL

    function _main() {

        self.body = $('#Body');
        self.focus = function focusOn(me) {
            C.error(me);
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

        C.debug(DB, 'expected length', expect, //
        '... found', length, length === expect || '...recreated now');
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    function _init() {
        debug > 0 && C.error('init @ ' + Date() + ' debug:', debug);
        if (self.inited(true)) {
            return null;
        }
        _main();
        Handle.init(DB);
        // main.focus('#Compositions_Home');
    }

    W[name] = $.extend(true, self, {
        _: function () {
            return Df;
        },
        init: _init,
    });
    return self;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*




 */
