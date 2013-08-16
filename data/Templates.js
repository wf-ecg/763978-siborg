/*jslint es5:true, white:false */
/*globals $, _, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var TMPL = {};

TMPL.image = {
    _def: '<img src="./{{path}}" {{class}} {{alt}} title="{{desc}}" {{size}} align="left">',
    pic: {
        'alt': 'alt="{{desc}}"',
        'class': 'class="portrait"',
        'size': 'width="130" height="78"',
    },
    vid: {
        'alt': 'alt="{{key}}_vid"',
    },
};

TMPL.full = {
    _def: '{{content}}',
};
TMPL.mini = {
    _def: '{{content2}}',
};

TMPL.event = {
    _def: '<p>{{line1}}{{line2}}{{line3}}{{line4}}{{line5}}</p>',
    bio: {
        line1: '<strong>{{title}}</strong> {{details}}<br>',
        line2: '{{day}}<br>',
        line3: '<time>{{start}} – {{end}}<br></time>',
        line4: '{{place}}',
        line5: '',
    },
    v1: { // for peeps
        line1: '<strong>{{day}}</strong><br>',
        line2: '<em>{{title}}</em><br>',
        line3: '<time>{{start}} – {{end}}</time><br>',
        line4: '{{place}}<br>',
        line5: '{{rsvp}}',
    },
    v2: { // speaker NA
        line1: '<strong>{{day}}</strong><br>',
        line2: '<time>{{start}} – {{end}}</time><br>',
        line3: '{{link}}<br>',
        line4: '{{place}}<br>',
        line5: '{{rsvp}}{{addendum}}',
    },
    hrs: {
        hours: '<time>{{start}} – {{end}}</time><br>',
    },
};

TMPL.blurb = {
    _def: '<h4>{{src_pic}}{{speaker}},</h4>{{title}}<br>{{src_vid}} | {{src_bio}}',
};

TMPL.link = {
    _def: '{{_pre}}<a href="{{url}}" title="{{url}}" {{etc}} {{blank}}>{{text}}</a>{{_pst}}',
    doc: {
        blank: 'target="_blank"',
        etc: 'type="document/{{format}}" title="{{name}}"',
        _pst: ' ({{format}}*)',
    },
    vid: {
        url: '{{path}}',
        blank: 'target="_blank"',
        etc: 'type="video/{{format}}" class="popup vid" title="{{name}}"',
    },
    text: {
        text: '{{text}}',
    },
    learn: {
        _pre: '<em>To learn more, visit ',
        text: '{{linktext}}',
        _pst: '.</em>',
    },
    rsvp: {
        _pre: 'Space is limited, ',
        text: 'RSVP here',
        blank: 'target="_blank"',
        _pst: '.',
    },
    detail: {
        _pre: ' [',
        text: 'Session details',
        blank: 'target="_blank"',
        _pst: ']',
    },
};

TMPL.anc = {
    _def: '<a class="part" href="#{{key}}">{{anctext}}</a>',
};

TMPL.href = {
    _def: 'href="{{href}}"',
    url: {
        href: 'href="{{url}}"',
    },
    vid: {
        href: 'href="{{path}}"',
    },
    site: {
        href: 'href="{{url}}"',
    },
    doc: {
        href: 'href="{{path}}"',
    },
};

TMPL.site = {
    _def: '{{href}}',
};

TMPL.echo = {
    _def: 'echo key {key} {{key}}',
};

TMPL.debug = {
    _def: 'debug for {all} {{key}}',
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
