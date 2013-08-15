/*jslint es5:true, white:false */
/*globals $, Blobo, Build, DATA, Deref, Embody, GLOB, Handle, Jump, Reidx, TMPL, console, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

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
