/*jslint es5:true, white:false */
/*globals $, DATA, _, console, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//
// no d-refs
// should not be broken down more
// raw data
//
DATA.Support = {
    BLURBS: [{
        key: 'adobe',
        content: '<p class=shrink>*You may need Adobe Reader to read PDF files. '
    +       '<a href="http://get.adobe.com/reader">Download</a> Adobe Reader for free.</p>',
    },{
        key: 'masthead',
        content: '<div class=mast>'
    +       '<a target=_blank href="http://www.wellsfargomedia.com/sibos2012/pages/home.html"><img src="images/header/wf-sibos.png" alt="Sibos 2012" width=222 height=64 align=left></a>'
    +       '<img src="images/header/stagecoach.png" alt="Together we’ll go far" width=227 height=64 align=right>'
    +       '</div>',
        content2: '<div class=mast>'
    +       '<button class="share holdon">+</button>'
    +       '<img class=rube src="./mobile/rube.png" alt=Sibos_2013 width=32 align=left> <h1>Sibos 2013</h1>'
    +       '<img src="./mobile/bani.png" alt=Visit width=300 align=left>'
    +       '</div>',
    },{
        key: 'banner',
        content: '<img class=banner src="./images/banner/bannerB.jpg" width=898 height=241 alt=foo>',
    }, {
        key: 'navbar',
        content: '<nav>'
    +       '<a href=#Compositions_Home class=active>Home</a>'
    +       '<a href=#Compositions_Visit>Visit our booth</a>'
    +       '<a href=#Compositions_About>About Wells Fargo</a>'
    +       '<a href=#Compositions_Explore>Explore Osaka</a>'
    +       '<a href=#Compositions_Pubs>Publications</a>'
    +       '<a href=#Compositions_Giving>Charitable giving</a>'
    +       '<a href=#Compositions_Photos>Gallery</a>'
    +       '</nav>',
        content2: '<nav>'
    +       '<h1 class=chevar><a href=#Support class=active>Support</a></h1>'
    +       '<h1 class=chevar><a href=#Components class=active>Components</a></h1>'
    +       '<h2 class=chevar><a href=#Compositions_Home>Home</a></h2>'
    +       '<h2 class=chevar><a href=#Compositions_Visit>Visit our booth</a></h2>'
    +       '<h2 class=chevar><a href=#Compositions_About>About Wells Fargo</a></h2>'
    +       '<h2 class=chevar><a href=#Compositions_Explore>Explore Osaka</a></h2>'
    +       '<h2 class=chevar><a href=#Compositions_Pubs>Publications</a></h2>'
    +       '<h2 class=chevar><a href=#Compositions_Giving>Charitable giving</a></h2>'
    +       '<h2 class=chevar><a href=#Compositions_Photos>Gallery</a></h2>'
    +       '</nav>'
    +       '<div class=buttonys>'
    +       ' <a class="details" href="index.html"></a><wbr>'
    +       ' <button class="home">&lt; <a href="#Components_Comps_header_content2">Mobile</a></button><wbr>'
    +       "</div>",
    }, {
        key: 'copyright',
        content: '<p class=pool>© 2012 Wells Fargo Bank, N.A. All rights reserved. ECG-727744</p>',
    }, {
        key: 'share',
        content: '<div id="sharebar"><p class="cap">Share this page'
//    +       '<s cript src="http://w.sharethis.com/button/buttons.js">< /script>'
    +       '<span id="st_twitter"   ><img src="images/share/twitter_16.png"></span>'
    +       '<span id="st_linkedin"  ><img src="images/share/linkedin_16.png"></span>'
    +       '<span id="st_email"     ><img src="images/share/email_16.png"></span>'
    +       '<span id="st_facebook"  ><img src="images/share/facebook_16.png"></span>'
    +       '<span id="st_googleplus"><img src="images/share/googleplus_16.png"></span>'
    +       '<span id="st_pinterest" ><img src="images/share/pinterest_16.png"></span>'
    +       '</p></div>'
//    +       '<s cript "src=../script/share.js">< /script>',
    }],
    FILES: [{
        key: 'map',
        group: 'images',
        subgroup: 'misc',
        name: 'booth_map',
        format: 'GIF',
        desc: 'View exhibition floor map',
        path: 'images/misc/booth_map.gif',
    }, {
        key: 'booth',
        group: 'images',
        subgroup: 'misc',
        name: 'rendered_booth',
        format: 'JPG',
        desc: 'View Wells Fargo booth rendering',
        path: 'images/misc/rendered_booth.jpg',
    }, {
        key: '4B06',
        group: 'images',
        subgroup: 'text',
        name: '4B06',
        format: 'PNG',
        desc: 'Visit booth 4B06',
        path: 'images/text/4B06.png',
    }, {
        key: 'george',
        group: 'images',
        subgroup: 'photo',
        name: 'George_thumb1',
        format: 'JPG',
        desc: 'Play George video',
        path: 'images/photos/George_thumb1.jpg',
    }, {
        key: 'george-vid',
        group: 'media',
        subgroup: '',
        name: 'George_Doolittle-SIBOS_promo',
        format: 'MP4',
        text: 'Watch intro video',
        path: 'media/George_Doolittle-SIBOS_promo.mp4',
    }, {
        key: 'george-bio',
        group: 'media',
        subgroup: '',
        name: 'George_Doolittle-bio',
        format: 'PDF',
        text: 'View bio',
        path: 'media/George_Doolittle-bio.pdf',
    }, {
        key: 'steve',
        group: 'images',
        subgroup: 'photo',
        name: 'Steve_thumb1',
        format: 'JPG',
        desc: 'Play Steve video',
        path: 'images/photos/Steve_thumb1.jpg',
    }, {
        key: 'steve-vid',
        group: 'media',
        subgroup: '',
        name: 'Steve_Ellis-SIBOS_promo',
        format: 'MP4',
        text: 'Watch intro video',
        path: 'media/Steve_Ellis-SIBOS_promo.mp4',
    }, {
        key: 'steve-bio',
        group: 'media',
        subgroup: '',
        name: 'Steve_Ellis-bio',
        format: 'PDF',
        text: 'View bio',
        path: 'media/Steve_Ellis-bio.pdf',
    }],
    LINKS: [{
        key: '727872',
        url: 'http://www.wellsfargomedia.com/sibos2012/email/727872/index.html',
    }, {
        key: '727874',
        url: 'http://www.wellsfargomedia.com/sibos2012/email/727874/index.html',
    }, {
        key: '734818',
        url: 'http://www.wellsfargomedia.com/sibos2012/email/734818/index.html',
    }, {
        key: 'cem',
        url: 'http://www.cemina.org.br/english/',
    }, {
        key: 'h4hi',
        url: 'http://www.habitat.org/',
    }, {
        key: 'jen',
        url: 'http://www.jen-npo.org/en/index.php',
    }, {
        key: 'stc',
        url: 'http://www.savethechildren.org/',
    }, {
        key: 'id-104',
        url: 'http://www.sibos.com/conferencedata/pages/session_details_all.page?sessionID=104',
    }, {
        key: 'id-124',
        url: 'http://www.sibos.com/conferencedata/pages/session_details_all.page?sessionID=124',
    }, {
        key: 'id-279',
        url: 'http://www.sibos.com/conferencedata/pages/session_details_all.page?sessionID=279',
    }, {
        key: 'id-286',
        url: 'http://www.sibos.com/conferencedata/pages/session_details_all.page?sessionID=286',
    }, {
        key: 'social',
        text: '2011 social responsibility report',
        url: 'https://www.wellsfargo.com/downloads/pdf/about/csr/reports/wf2011social_responsibility_summary.pdf',
        format: 'opens new window',
    }, {
        key: 'today',
        text: 'WF Today piece',
        url: 'https://www.wellsfargo.com/downloads/pdf/about/wellsfargotoday.pdf',
        format: 'opens new window',
    }, {
        key: 'osaka1',
        text: 'Osaka Castle',
        url: 'www.osaka-info.jp/en/search/detail/sightseeing_1933.html',
    }, {
        key: 'osaka2',
        text: 'Sumiyoshi-taisha Shrine',
        url: 'www.osaka-info.jp/en/search/detail/sightseeing_1158.html',
    }, {
        key: 'osaka3',
        text: 'Shitennoji Temple',
        url: 'www.osaka-info.jp/en/search/detail/sightseeing_2177.html',
    }, {
        key: 'osaka4',
        text: 'Floating Garden Observatory',
        url: 'www.osaka-info.jp/en/search/detail/sightseeing_3147.html',
    }, {
        key: 'osaka5',
        text: 'Universal Studios Japan',
        url: 'www.osaka-info.jp/en/search/detail/sightseeing_765.html',
    }, {
        key: 'osaka6',
        text: 'Osaka Aquarium Kaiyukan',
        url: 'www.osaka-info.jp/en/search/detail/sightseeing_549.html',
    }],
    TEXT: [{
        welcome: 'Thank you for visiting the Wells Fargo Sibos webpage. Our Global Financial Institutions team has an exciting program lined up for you during the week of the conference, and we look forward to seeing you in Osaka.\n\nFor more information about Sibos 2012, please visit the official Sibos website at sibos.com.',
    }],
};
