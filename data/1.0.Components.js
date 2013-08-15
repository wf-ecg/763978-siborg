/*jslint es5:true, white:false */
/*globals $, DATA, _, console, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//
// key assemblages of tiny data bits
// property names are merely semantic clusters / convenience
// staging area
// could be used in a couple places
//
DATA.Components = {
    Comps: [{
        key: 'footer',
        content: '<br><footer> %_Support_BLURBS_copyright::full %_Support_BLURBS_share::full </footer>',
    },{
        key: 'header',
        content: '<header class=full>'
    +       '%_Support_BLURBS_masthead::full' // ::full is alias for :content
    +       '%_Support_BLURBS_navbar::full' // ::template/filtered:unfiltered/subtemplate
    +       '%_Support_BLURBS_banner::full'
    +       '</header>',
        content2: '<header class=mini>'
    +       '%_Support_BLURBS_masthead::mini'
    +       '%_Support_BLURBS_navbar::mini'
    +       '</header>',
    },{
        key: 'booth',
        content: '<a class="popup pic" href="./images/misc/booth_map.gif" title="booth_map"><img alt="Booth 4B06" height="74" src="./images/text/4B06.png" width="239"></a>',
    },{
        key: 'bird',
        content: '<img alt="bird" style="bottom: -11px; float: right; right: -11px;" height=90 src="images/photos/bird.png" width=93>',
    },{
        key: 'storify',
        img: '<img class=pushbutton src="./images/text/blogButton.png" width=116 height=22 alt="View Highlights">',
        lnk: '<a href="http://storify.com/Lou_david/sibos-2012-pre-conference-highlights-2" target=_blank>',
        content: '%_:lnk %_:img </a>',
    }],
    Peeps: [{
        key: 'george',
        speaker: 'George Doolittle',
        title: 'Head of Wells Fargo Global Payment Services',
        src_pic: '%_Support_FILES_george::image:pic',
        src_vid: '%_Support_FILES_george-vid::link:vid',
        src_bio: '%_Support_FILES_george-bio::link:doc',
        blurbio: '%_Components_Peeps_george::blurb',
    }, {
        key: 'steve',
        speaker: 'Steve Ellis',
        title: 'Head of Wells Fargo Wholesale Services',
        src_pic: '%_Support_FILES_steve::image:pic',
        src_vid: '%_Support_FILES_steve-vid::link:vid', // creates a link that has vid built in
        src_bio: '%_Support_FILES_steve-bio::link:doc',
        blurbio: '%_Components_Peeps_steve::blurb', // self creates a value for composition
    }],
    Events: [{
        key: 'celebrate',
        order: '1',
        day: 'Sunday, October 28',
        title: 'Annual Sibos Celebration',
        place: 'Taiko-en',
        start: '5:00 p.m.',
        end: '8:00 p.m.',
        url: '%_Support_LINKS_727872:url',
        text: '%_:title',
        rsvp: '%_::link:rsvp',
        link: '%_::link:text',
    }, {
        key: 'brave',
        order: '2',
        day: 'Monday, October 29',
        title: 'Brave new leaders in IT',
        speaker: 'Steve Ellis',
        start: '4:00 p.m.',
        end: '5:00 p.m.',
        place: '',
        url: '%_Support_LINKS_id-124:url',
        details: '%_::link:detail',
    }, {
        key: 'trans',
        order: '3',
        day: 'Tuesday, October 30',
        title: 'Transparency: The new paradigm impacting Global Transaction Banking',
        speaker: 'NA',
        start: '3:00 p.m.',
        end: '4:00 p.m.',
        place: 'Katsura Room L5; Hyatt Regency Hotel',
        addendum: '<br><em>Please speak with your relationship manager about availability.</em>',
        url: '%_Support_LINKS_734818:url',
        rsvp: '%_::link:rsvp',
        details: '%_::link:detail',
        link: '<em>%_:title</em>',
    }, {
        key: 'booth',
        order: '4',
        day: 'Tuesday, October 30',
        title: 'Booth reception invite',
        speaker: 'NA',
        start: '4:00 p.m.',
        end: '5:30 p.m.',
        place: 'Wells Fargo booth No. 4B06, Hall 4',
        url: '%_Support_LINKS_727874:url',
        details: '%_::link:detail',
        text: '%_:title',
        link: '%_::link:text',
    }, {
        key: 'pmpg',
        order: '5',
        day: 'Wednesday, October 31',
        title: 'PMPG – What’s up in the payments market place',
        speaker: 'George Doolittle',
        start: '9:30 a.m.',
        end: '10:30 a.m.',
        place: 'Community room 3',
        url: '%_Support_LINKS_id-286:url',
        details: '%_::link:detail',
    }, {
        key: 'payments',
        order: '6',
        day: 'Wednesday, October 31',
        title: 'Consumer payments and increasing regulatory requirements. <em>The need for more transparency</em>',
        speaker: 'George Doolittle',
        start: '4:00 p.m.',
        end: '5:00 p.m.',
        place: 'Community room 2',
        url: '%_Support_LINKS_id-279:url',
        details: '%_::link:detail',
    }, {
        key: 'global',
        order: '7',
        day: 'Thursday, November 1',
        title: 'Global transaction banking: <em>In need of business insights?</em>',
        speaker: 'George Doolittle',
        start: '11:00 a.m.',
        end: '12:00 p.m.',
        place: 'Conference room 2',
        url: '%_Support_LINKS_id-104:url',
        details: '%_::link:detail',
    }],
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    Articles: [{
        key: 'home',
        top: '%_Components_Comps_header::full',
        Welcome:
            '\nThank you for visiting the Wells Fargo Sibos webpage. Our Global Financial Institutions team has an exciting program lined up for you during the week of the conference, and we look forward to seeing you in Osaka.\n' //
        +   '\nFor more information about Sibos 2012, please visit the official Sibos website at sibos.com.',
        Events:
            '<h3><a class=learn href="visit.html">learn more</a>Sibos events</h3>' //
        +   '%_Components_Events_celebrate::event:v1 %_Components_Events_trans::event:v1 %_Components_Events_booth::event:v1',
        Booth:
            '<h3>Visit our booth</h3>%_Support_FILES_4B06::image',
        Giving:
            '<h3>Get involved</h3>%_Components_Comps_bird::full Wells Fargo is proud to partner with <a href="http://www.globalgiving.org">GlobalGiving.org</a> again to offer you a wonderful program that gives back to our communities.',
        Highlights:
            '<h3>Highlights from Sibos</h3><p class="follow">Follow news from the Wells Fargo booth and daily Sibos conference highlights, including photos and videos.\n' //
        +   '%_Components_Comps_storify::full </p>' //
        +   '<p class=shrink style=font-style:italic>*The content in this section is provided for general informational purposes only and represents the individuals’ opinions on what they deemed relevant Sibos content. ' //
        +   'Wells Fargo does not endorse and is not responsible for the content, links, privacy policy, or security policy of the website.</p>',
    },{
        key: 'visit',
        intro:
            'As a repeat Sibos exhibitor, we’re proud to give our customers an opportunity to visit and interact with our business leaders and relationship managers at our booth, No. 4B06.\n'
    +       ' <div class="tiny"> %_Support_FILES_map::image </div>  |  <div class="tiny"> %_Support_FILES_booth::image </div>'
    +       '\nStop by to take your picture in front of the Buffalo Bill stagecoach and learn more about our history. And “check in” with your smart phone or PDA device to receive a free gift.',
        events:
            'We’re hosting a variety of events during the Sibos conference, including our annual Sibos Celebration reception at the elegant Taiko-en, and a booth welcome reception.\n'
    +       '%_Components_Events_celebrate::event:v2'
    +       '%_Components_Events_trans::event:v2'
    +       '%_Components_Events_booth::event:v2',
        speaker1:
            '%_Components_Peeps_george::blurb\n'
    +       '\n%_Components_Events_pmpg::event:bio'
    +       '%_Components_Events_payments::event:bio'
    +       '%_Components_Events_global::event:bio\n',
        speaker2:
            '\n%_Components_Peeps_steve::blurb\n'
    +       '\n%_Components_Events_brave::event:bio',
    },{
        key: 'about',
        intro:
            'As one of the largest banks in the United States, Wells Fargo is among the top five globally in terms of market capitalization. '
    +       'Founded in 1852 and headquartered in San Francisco, we provide banking, insurance, investments, mortgage, and consumer and commercial finance through various distribution channels. '
    +       'We also have offices in more than 35 countries to support our customers who conduct business in the global economy.\n'
    +       '\nWells Fargo serves one third of all U.S. businesses. For decades we’ve adhered to the same vision: We want to satisfy all our customers’ financial needs and help them succeed financially. '
    +       'The Global Financial Institutions team carries out that vision by serving the increasing financial needs of financial institutions, central banks, multi-laterals, sovereign wealth funds, and non-bank financial institutions in the markets where we conduct business.',
        list:
            '<li>Worldwide reach with over 35 overseas offices and branch locations in Hong Kong, London, Seoul, Shanghai, Singapore, Taipei, Tokyo, and the Cayman Islands</li>'
    +       '<li>More than 3,000 team members covering the global needs of our clients Relationships with over 3,000 financial institutions overseas and in the U.S.</li>'
    +       '<li>Supporting customers in over 130 countries</li>'
    +       '<li>To learn more, just click on the links in the ‘Resources’ section, or visit wellsfargo.com/international.</li>',
        resources:
            'Learn more about Wells Fargo\n <ul>'
    +       '<li> WF Today piece %_Support_LINKS_today::link:doc </li>'
    +       '<li> 2011 social responsibility report %_Support_LINKS_social::link:doc </li></ul>',
    },{
        key: 'explore',
        article:
            'For travelers and traders, Osaka has long served as the gateway to Japan. Situated in the Kansai region of Japan’s main island of Honshu, Osaka is Japan’s third-largest city by population. '
    +       'It’s also recognized as the country’s commercial center, thanks in large part to the vast network of river and sea routes that meet at its shores.',
        list:
            '<li> %_Support_LINKS_osaka1::link\n'
    +       'The city’s most recognizable symbol played a major role in unifying Japan during the sixteenth century</li>'
    +       '<li> %_Support_LINKS_osaka2::link\n'
    +       'Osaka’s most famous shrine is home to three locally revered gods</li>'
    +       '<li> %_Support_LINKS_osaka3::link\n'
    +       'The first Buddhist and Japan’s oldest officially administered temple is believed to have been constructed in the late fifth century</li>'
    +       '<li> %_Support_LINKS_osaka4::link\n'
    +       'Located on a bridge connecting the twin towers of the Umeda Sky Building, it provides breathtaking views of Osaka and beyond</li>'
    +       '<li> %_Support_LINKS_osaka5::link\n'
    +       'A full service amusement park complete with theme rides, shows, restaurants, and shopping</li>'
    +       '<li> %_Support_LINKS_osaka6::link\n'
    +       'One of the world’s largest aquariums, it’s home to 30,000 marine animals representing 580 species</li>',
    },{
        key: 'publications',
        article:
            'Once again, we are proud to offer you the special Momentum – Sibos edition* magazine. In this edition, we offer thoughts and perspectives on Dodd Frank and Basel III and its impact, '
    +       'the changing landscape of trade and payments, advances in FX technology, and updates on our products and services. '
    +       'We hope you enjoy this edition. We also have our brand new Wells Fargo Global Insights newsletter launching very soon. '
    +       'Each quarter, you can read the latest news on financial institutions and get economic and product updates. You can also watch a video message from GFI business head, Chuck Silverman.  '
    +       'Just sign up for the new Wells Fargo Global Insights newsletter by emailing GFI@wellsfargo.com.\n'
    +       '\nFinally, we have also launched a new GFI podcast where you can hear commentary from our business leaders and economists about trends and issues facing the financial institutions industry. '
    +       'Sign up by visiting wellsfargo.com/com/international/podcasts or by subscribing via iTunes.',
    }],
};
