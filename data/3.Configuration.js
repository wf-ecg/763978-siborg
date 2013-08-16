/*jslint es5:true, white:false */
/*globals $, _, debug, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
making 'pages' / views
useing current infrsctucure
lets try makign a nicely marked up VIEW configuration
*/

DATA.Configuration = {
    Home: [{
        top: '%_Components_Comps_header::full',
        heading: '<h1>Welcome</h1>',
        content: ' '
    +       '\nThank you for visiting the Wells Fargo Sibos webpage. Our Global Financial Institutions team has an exciting program lined up for you during the week of the conference, and we look forward to seeing you in Osaka.\n'
    +       '\nFor more information about Sibos 2012, please visit the official Sibos website at sibos.com.',
    }, {
        heading: '<h2><a class=learn href="visit.html">learn more</a>Sibos events</h2>',
        content: '%_Components_Events_celebrate::event:v1'
    +       '\n%_Components_Events_trans::event:v1'
    +       '\n%_Components_Events_booth::event:v1',
    }, {
        heading: '<h2>Visit our booth</h2>',
        content: '%_Support_FILES_4B06::image',
    }, {
        heading: '<h2>Get involved</h2>',
        content: '%_Components_Comps_bird::full\ Wells Fargo is proud to partner with <a href="http://www.globalgiving.org">GlobalGiving.org</a> again to offer you a wonderful program that gives back to our communities.',
    }, {
        heading: '<h2>Highlights from Sibos</h2>',
        content: '<p style="font-family: Archer, Georgia, serif; font-size: 16px; font-weight: normal; line-height: 20px; margin-bottom: 9px;">Follow news from the Wells Fargo booth and daily Sibos conference highlights, including photos and videos.\n'
    +       '%_Components_Comps_storify::full </p>'
    +       '<p class=shrink style=font-style:italic>*The content in this section is provided for general informational purposes only and represents the individuals’ opinions on what they deemed relevant Sibos content. '
    +       'Wells Fargo does not endorse and is not responsible for the content, links, privacy policy, or security policy of the website.</p>',
    }],
};

/*

<div id="all">
    <section id="head">
        {{masthead}}
        {{navbar}}
        {{banner}}
    </section>
    <section id="feature">
        <table>
            <tbody><tr>
                <td>
                    <h2>{{heading}}</h2>
                    {{content}}
                </td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td rowspan="2" class="blocks">
                    <h3>Events</h3>
                    {{celebrate::event}}
                    {{trans::event}}
                    {{booth::event}}
                </td>
                <td class="blocks">
                    <h3>Speakers</h3>
                    {{george:vid}}
                    {{george:bio}}
                </td>
            </tr>
            <tr>
                <td class="blocks">
                    {{steve:vid}}
                    {{steve:bio}}
                </td>
            </tr>
        </tbody>
        </table>
        {{adobe}}
    </section>
    <div id="footer">
        {{share}}
        {{copyright}}
    </div>
</div>

   "george:vid": '<a name="george" class="popup vid" title="george_vid" type="video/mp4"><img src="../images/photos/George_thumb1.jpg" class="portait" alt="george_vid" width="130" height="78" align="left"></a>'
   "george:bio": '<p>
    {{%_Components_Peeps_george::blurb}}<br>
    {{%_Support_FILES_george-vid::link:vid}}
    |
    {{%_Support_FILES_george-bio::link:doc}}
 - - - - - - - - - - - - - - - - - - - - - - - - - -

    using css nudge <section> articles into place
    items will need to have ids or class for this to happen
    makes sense that they would derive that from their data keys

    layouts are like templates
    "templates"  now are customizers and contextualizers
    "layouts" should be a way to arrange regions

    currently the data is all there in a list
    some needs to be structured (h1,etc) and classified ("fancy")
    when we composite the segments and construct it as html we need to
    concentrate it within a bounded area and position it

    Compositions is the place to describe that ....
        we have an index of pages giving us an order...
        and
        it couuld be more suggestive of level of
        (order)
        platform
            hierarchy
            detail

            placement into a "region"

 */

