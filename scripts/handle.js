/*jslint es5:true, white:false */
/*globals $, Build, GLOB, Global, Jump, Main, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var Handle;

(function (W) { //IIFE
    var name = 'Handle',
        self = new Global(name, '(event handlers)'),
        C = W.console,
        Df;

    Df = { // DEFAULTS
        dat: {},
    };
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// INTERNAL
    // allow the css for these groups

    function enableCssDomains() {
        $('body').addClass('BASE___ ANI___ LAY___ NAV___ REF___ TXT___ DEV___');
    }

    // manage location query

    function search(arg) {
        if (!arg) {
            return W.location.search;
        }
        W.location.search = arg;
    }

    // manage the DEV button toggle

    function DEV(bool) {
        var now = search() || '?dev';

        if (now === '?norm') {
            if (bool) { // toggle
                search('dev');
            }
            $('body').removeClass('DEV___');
        } else {
            if (bool) {
                search('norm');
            }
            $('body').addClass('DEV___');
            $('#Body').width($('#Body').width());
        }
        GLOB.dev = $('body').is('.DEV___');
        Jump.soon(W.location.hash);
    }

    // finished adding handlers

    function doneLoading() {
        $('button').on('mouseup', function () {
            $(this).find('a').trigger('click'); // help links to be hit
        });

        enableCssDomains('BASE DEV');
        $('html').removeClass('debug');

        Build.sample('<div class=iphone>%_Components_Comps_header::mini</div>');
        //        Build.sample('<div class=iphone>%_Components_Articles_foo:Welcome</div>');
        DEV();
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    function addHandlers() {
        var chevlvls = $('nav h2 + *');

        // on any hover add class hover
        Main.body.on('mouseover', '*', function (evt) {
            evt.stopPropagation();
            $(this).addClass('hover');
        }).on('mouseout', '*', function (evt) {
            evt.stopPropagation();
            $(this).removeClass('hover');
        }).on('dblclick', '.iphone', function () {
            $('#Showbox').toggleClass('hover');
        }).on('click', '.holdon', function () {
            W.alert('hold on there, bro');
        }).on('click', 'a[href^=#]', function (e) {
            // reassert control over anchor links
            e.preventDefault();
            // History.pushState({}, '', this.href);
            Main.focus(this.hash);
        });

        // Show all tier 2 (hover) details
        $('#togTOC').toggle(function () {
            chevlvls.addClass('hover');
        }, function () {
            chevlvls.removeClass('hover');
        });

        // Show tier 3 (click) details here
        $('nav').on('mouseup', 'h2', function () {
            $(this).next().toggleClass('detail');
        });

        $('#DEV').on('click', function () {
            DEV(1);
        });

        $(doneLoading);
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    self.init = addHandlers;
    W[name] = self;

}(window));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*



*/
