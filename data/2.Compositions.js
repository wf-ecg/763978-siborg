/*jslint es5:true, white:false */
/*globals $, DATA, _, console, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//
// these "page names" are really just categories for configuration
//
// rename? CATEGORIZED ... collections! and pertaining to a category
// a layout is now possible .. we just need to have an object with all properties ready for template insertion
// example Home[1] (has no key)
//
// named sections represent a catagory                  (fat pages)
// arrays enumerate max possible articles per section   (thin pages)
// include from Support (raw) and Components            (assemblies)
//
DATA.Compositions = {
    Home: [{
        top: '%_Components_Comps_header::full',
        content: '<div id="Feature">'
    +     '<h2>Welcome</h2><table><tr>'
    +     '<td colspan="2"> %_Components_Articles_home:Welcome </td>'
    +     '<td>&nbsp;</td></tr><tr>'
    +     '<td class="blocks" rowspan="2" width="32%"> %_Components_Articles_home:Events </td>'
    +     '<td class="blocks">%_Components_Articles_home:Booth </td>'
    +     '<td class="blocks" rowspan="2" width="33%"> %_Components_Articles_home:Highlights </td>'
    +     '</tr><tr><td class="blocks" width="35%"> %_Components_Articles_home:Giving </td>'
    +     '</tr></table></div>',
        foot: '%_Components_Comps_footer::full',
    }],
    Visit: [{
        top: '%_Components_Comps_header::full',
        content: '<div id="Feature">'
    +     '<h2>Visit our booth</h2><table><tr>'
    +     '<td colspan="3"> %_Components_Articles_visit:intro </td></tr><tr>'
    +     '<td class="blocks" rowspan="2" width="32%"> <h3>Events</h3> %_Components_Articles_visit:events </td>'
    +     '<td class="blocks" colspan="2"> <h3>Speakers</h3> %_Components_Articles_visit:speaker1 </td>'
    +     '</tr><tr><td class="blocks" colspan="2">  %_Components_Articles_visit:speaker2 </td>'
    +     '</tr></table></div>',
        foot: '%_Components_Comps_footer::full',
    }],
    About: [{
        top: '%_Components_Comps_header::full',
        content: '<div id="Feature">'
    +       '<h2>About Wells Fargo</h2> <table> <tr> <td colspan="2">'
    +       '%_Components_Articles_about:intro</td> <td width="32%" class="blocks" colspan="1">'
    +       '<h3>Resources</h3> %_Components_Articles_about:resources </td> </tr> <tr> '
    +       '<td colspan="3"> <h4>Our global presence includes:</h4>'
    +       '<ul> %_Components_Articles_about:list </ul> '
    +       '</td> </tr></table></div>',
        foot: '%_Components_Comps_footer::full',
    }],
    Explore: [{
        top: '%_Components_Comps_header::full',
        content: '<div id="Feature">'
    +     '<h2>Explore Osaka</h2><table><tr>'
    +     '<td colspan="3"> %_Components_Articles_explore:article </td>'
    +     '</tr><tr><td colspan="2">'
    +     '<h4>While in Osaka, you may want to visit:</h4>'
    +     '<ul> %_Components_Articles_explore:list </ul> </td>'
    +     '<td width="33%">&nbsp;</td></tr></table></div>',
        foot: '%_Components_Comps_footer::full',
    }],
    Pubs: [{
        top: '%_Components_Comps_header::full',
        content: '<div id="Feature">'
    +     '<h2>Publications</h2><table><tr>'
    +     '<td colspan="3"> %_Components_Articles_publications:article </td>'
    +     '</tr></table></div>',
        foot: '%_Components_Comps_footer::full',
    }],
    Giving: [{
        top: '%_Components_Comps_header::full',
        heading: '<h1>Charitable giving</h1>',
        content: '(Together, we can make a difference)\n'
    +       '\nAt Wells Fargo, we understand that investing in our communities is a way for us to help create future economic growth and prosperity in the communities where we live and work. If they prosper, so do we. '
    +       'Working together, we provide support to education, human services, community development, the arts, the environment, and much more.\n'
    +       '\nIn 2011, Wells Fargo contributed $213.5 million to 25,000 nonprofits, and provided $3.4 billion in community development investments. '
    +       'Team members donated $63.9 million and volunteered 1.5 million hours to 28,000 nonprofits and schools.\n'
    +       '\nAnd now, by working together with you, we can make a difference in our international communities. '
    +       'For the second year in a row, when you attend our Wells Fargo Sibos reception, you can vote on which of the four featured nonprofits that make a difference around the world will receive a donation. '
    +       'On your behalf, Wells Fargo will donate a total of USD $10,000 to these four charities based on your votes.',
    }, {
        heading: '<h2>Program Results</h2>',
        content: 'See the results from your recommendations:\n'
    +       '\n/Giving/...',
        foot: '%_Components_Comps_footer::full',
    }],
    Photos: [{
        top: '%_Components_Comps_header::full',
        heading: '<h1>Photo Gallery</h1>',
        content: 'Photographs from Sibos 2012 Sunday reception.\n'
    +       '\n["IMG_6201", "IMG_6120", "IMG_6122", "IMG_6133", "IMG_6134", "IMG_6136", "IMG_6138", "IMG_6139", "IMG_6140", "IMG_6142", "IMG_6143", "IMG_6146", "IMG_6148", "IMG_6154", '
    +       '"IMG_6156", "IMG_6159", "IMG_6168", "IMG_6172", "IMG_6174", "IMG_6175", "IMG_6177", "IMG_6179", "IMG_6180", "IMG_6183", "IMG_6184", "IMG_6187", "IMG_6188", "IMG_6189", '
    +       '"IMG_6191", "IMG_6196", "IMG_6200", "IMG_6202", "IMG_6203", "IMG_6204", "IMG_6205", "IMG_6206", "IMG_6207", "IMG_6209", "IMG_6210", "IMG_6211", "IMG_6213", "IMG_6214", '
    +       '"IMG_6215", "IMG_6216", "IMG_6218", "IMG_6220", "IMG_6221", "IMG_6222", "IMG_6223", "IMG_6224", "IMG_6225", "IMG_6226", "IMG_6229", "IMG_6230", "IMG_6231", "IMG_6233", '
    +       '"IMG_6234", "IMG_6235", "IMG_6236", "IMG_6238", "IMG_6239", "IMG_6241",'
    +       ' "DSC_0200", "DSC_0210", "DSC_0211", "DSC_0219", "DSC_0220", "DSC_0222", "DSC_0223", "DSC_0224", "DSC_0226", "DSC_0229", "DSC_0230", "DSC_0231", "DSC_0234", "DSC_0235", '
    +       '"DSC_0236", "DSC_0237", "DSC_0238", "DSC_0239", "DSC_0240", "DSC_0241", "DSC_0242", "DSC_0244", "DSC_0245", "DSC_0246", "DSC_0247", "DSC_0248", "DSC_0249", "DSC_0250", '
    +       '"DSC_0251", "DSC_0252", "DSC_0253", "DSC_0254", "DSC_0255", "DSC_0256", "DSC_0258", "DSC_0259", "DSC_0260", "DSC_0261", "DSC_0262", "DSC_0263", "DSC_0264", "DSC_0265", '
    +       '"DSC_0266", "DSC_0267", "DSC_0268", "DSC_0269", "DSC_0270", "DSC_0271", "DSC_0273", "DSC_0274", "DSC_0275", "DSC_0277", "DSC_0280", "DSC_0281", "DSC_0292",]',
        foot: '%_Components_Comps_footer::full',
    }],
    Index: [{
        page: 'home',
        index: '1',
    }, {
        page: 'visit',
        index: '2',
    }, {
        page: 'about',
        index: '3',
    }, {
        page: 'explore',
        index: '4',
    }, {
        page: 'pubs',
        index:   '5',
    }, {
        page: 'giving',
        index: '6',
    }, {
        page: 'photos',
        index: '7',
    }],
};
