(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1C3/":function(e,t,l){"use strict";l.r(t);l("0btu"),l("teZv"),l("iIct"),l("NVJq"),l("oJnB");var n=l("v6s4"),i=l.n(n),r=l("kvu0"),a=(l("MDTO"),l("4Tg6"),function(e){var t=e.children,l=t.filter((function(e){return e.props&&e.props.src}));return t=t.filter((function(e){return!l.includes(e)})),i.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"45% 45%",gridColumnGap:"10%"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},t),i.a.createElement("div",null,l))}),b=l("SZJQ"),o=l.n(b);l.d(t,"theme",(function(){return c})),l.d(t,"default",(function(){return s}));var c={fonts:{body:"Roboto, sans-serif",monospace:'"Roboto Mono", monospace'},colors:{text:"white",background:"black",primary:"blue"},styles:{Slide:{padding:"0 5rem"},li:{marginBottom:"1.7rem"},img:{height:"auto",width:"auto"}}},d={theme:c};function s(e){var t=e.components,l=function(e,t){if(null==e)return{};var l,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,["components"]);return Object(r.b)("wrapper",Object.assign({},d,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"CSS Grid"),Object(r.b)("p",null,"March 17, 2020"),Object(r.b)("hr",null),Object(r.b)("h1",null,"Why Use CSS Grid?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We already have Flexbox to layout, align, and distribute dynamic content in user interfaces"),Object(r.b)("li",{parentName:"ul"},"Flexbox is much better than floats, tables and other old-school layout techniques")),Object(r.b)("hr",null),Object(r.b)("h1",null,"2D in Nature"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Lets us layout interfaces in terms of columns and rows"),Object(r.b)("li",{parentName:"ul"},"Better at handling complex layouts"),Object(r.b)("li",{parentName:"ul"},"First CSS module created specifically to address layout problems we've been struggling with for years!")),Object(r.b)("hr",null),Object(r.b)("h1",null,"Browser Support"),Object(r.b)(a,{mdxType:"SplitLayoutLeft"},"CSS grid is now supported in Chrome, Edge, Safari, and Firefox",Object(r.b)("p",null,"  Internet Explorer 11 has partial support and uses an older version of the syntax"),Object(r.b)("img",{src:o.a,alt:"Browser Support Chart from caniuse.com"})),Object(r.b)("hr",null),Object(r.b)("h1",null,"Vocabulary"),Object(r.b)("h2",null,"Grid Track"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The rows and columns of the grid"),Object(r.b)("li",{parentName:"ul"},"The space between two grid lines")),Object(r.b)("hr",null),Object(r.b)("h1",null,"Vocabulary"),Object(r.b)("h2",null,"Grid Lines"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Dividing lines that make up the structure of the grid"),Object(r.b)("li",{parentName:"ul"},"Are vertical and horizontal"),Object(r.b)("li",{parentName:"ul"},"Are numbered by default but can also be named")),Object(r.b)("hr",null),Object(r.b)("h1",null,"Grid Lines"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You define grid tracks; grid lines are automatically defined by the grid"),Object(r.b)("li",{parentName:"ul"},"Allow us to position items in the grid"),Object(r.b)("li",{parentName:"ul"},"Numbered direction is based on the writing mode of the page"),Object(r.b)("li",{parentName:"ul"},"Can name lines to make positioning easier")),Object(r.b)("hr",null),Object(r.b)("h1",null,"Vocabulary"),Object(r.b)("h2",null,"Grid Cell"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'A single "unit" of the grid'),Object(r.b)("li",{parentName:"ul"},"Similar to table cells")),Object(r.b)("hr",null),Object(r.b)("h1",null,"Vocabulary"),Object(r.b)("h2",null,"Grid Area"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The total space surrounded by four grid lines"),Object(r.b)("li",{parentName:"ul"},"Can be made up of any number of grid cells"),Object(r.b)("li",{parentName:"ul"},"Doesn't have to represent all cells in a grid, but can")),Object(r.b)("hr",null),Object(r.b)("h1",null,"Firefox Grid Inspector"),Object(r.b)("p",null,"Talk a little about the tools offered and how we'll use them in examples"),Object(r.b)("hr",null),Object(r.b)("h1",null,"Creating a Grid"),Object(r.b)("p",null,"Every grid starts with a parent container with the property ",Object(r.b)("inlineCode",{parentName:"p"},"display: grid")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".grid {\n    display: grid;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<div class="grid">\n    I\'m a grid!\n</div>\n')),Object(r.b)("div",{style:"display: grid;border: 1px dotted red;"},"I'm a grid!"),Object(r.b)("hr",null),Object(r.b)("p",null,"Easy, right? A one column grid isn't very interesting though, so let's add grid tracks!"),Object(r.b)("hr",null),Object(r.b)("h1",null,"Specifying Grid Tracks"),Object(r.b)("p",null,"Remember, grid tracks are what hold your grid items."),Object(r.b)("p",null,"We create these by setting ",Object(r.b)("inlineCode",{parentName:"p"},"grid-template-rows")," and ",Object(r.b)("inlineCode",{parentName:"p"},"grid-template-columns")," on the parent container."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".grid {\n    display: grid;\n    grid-template-rows: 50px 2fr;\n    grid-template-columns: 25% 1fr 100px;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<div class="grid">\n    <div class="grid-item">Item 1</div>\n    <div class="grid-item">Item 2</div>\n    <div class="grid-item">Item 3</div>\n    <div class="grid-item">Item 4</div>\n</div>\n')),Object(r.b)("div",{style:"display: grid;grid-template-rows:50px 2fr;grid-template-columns:25% 1fr 100px;border: 1px dotted red;"},Object(r.b)("div",{class:"grid-item",style:"border: 1px dotted red;"},"Item 1"),Object(r.b)("div",{class:"grid-item",style:"border: 1px dotted red;"},"Item 2"),Object(r.b)("div",{class:"grid-item",style:"border: 1px dotted red;"},"Item 3"),Object(r.b)("div",{class:"grid-item",style:"border: 1px dotted red;"},"Item 4")),Object(r.b)("hr",null),Object(r.b)("h1",null,"Creating Grid Items"),Object(r.b)("hr",null),Object(r.b)("h1",null,"Implicit vs. Explicit Grid"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Explicit")," grid is based on the ",Object(r.b)("inlineCode",{parentName:"li"},"grid-template-columns")," and ",Object(r.b)("inlineCode",{parentName:"li"},"grid-template-rows")," you define"),Object(r.b)("li",{parentName:"ul"},"If there's more content than there are defined rows and columns, then the grid creates rows and columns in the ",Object(r.b)("em",{parentName:"li"},"implicit")," grid")),Object(r.b)("hr",null),Object(r.b)("h1",null,"Implicit Grid"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The grid tracks in rows and columns in the ",Object(r.b)("em",{parentName:"li"},"implicit")," grid are auto-sized by default based on their content"),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"grid-auto-rows")," and ",Object(r.b)("inlineCode",{parentName:"li"},"grid-auto-columns")," properties define size of implicit grid tracks")),Object(r.b)("hr",null),Object(r.b)("h1",null,"Track Size and ",Object(r.b)("inlineCode",{parentName:"h1"},"minmax()")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"minmax()")," specifies minimum grid track size for automatically created rows and columns",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Still ensures that they expand to fit any content that's added"))),Object(r.b)("li",{parentName:"ul"},"Can use this when setting ",Object(r.b)("inlineCode",{parentName:"li"},"grid-auto-rows")," and ",Object(r.b)("inlineCode",{parentName:"li"},"grid-auto-columns")," properties")),Object(r.b)("hr",null),Object(r.b)("h1",null,"Positioning Items Against Lines"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You target a ",Object(r.b)("strong",{parentName:"li"},"line")," when placing items, not a ",Object(r.b)("strong",{parentName:"li"},"track")),Object(r.b)("li",{parentName:"ul"},"Items are placed using the following properties:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"grid-column-start")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"grid-column-end")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"grid-row-start")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"grid-row-end")))),Object(r.b)("li",{parentName:"ul"},"Don't need to specify ",Object(r.b)("inlineCode",{parentName:"li"},"grid-row-end")," if you want a grid item to span a whole row")),Object(r.b)("hr",null),Object(r.b)("h1",null,"Grid Item Placement Algorithm"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Determines the order used for placing grid items in the grid"),Object(r.b)("li",{parentName:"ul"},"Placement flow behavior is set with the ",Object(r.b)("inlineCode",{parentName:"li"},"grid-auto-flow")," property"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Any grid item positioned to start or end on a line that goes in the same direction as the grid will be given priority placement. Everything else will flow around it."))),Object(r.b)("hr",null),Object(r.b)("h1",null,"Placement priorities:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Same-direction positioning (i.e., ",Object(r.b)("inlineCode",{parentName:"li"},"grid-auto-flow: row | column"),")"),Object(r.b)("li",{parentName:"ol"},"Order property (i.e., ",Object(r.b)("inlineCode",{parentName:"li"},"order: 2"),")"),Object(r.b)("li",{parentName:"ol"},"Document order")),Object(r.b)("hr",null),Object(r.b)("h1",null,Object(r.b)("inlineCode",{parentName:"h1"},"grid-auto-flow: row")," (default placement)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Items fill all of the slots in the current ",Object(r.b)("em",{parentName:"li"},"row")," before starting to fill the next row"),Object(r.b)("li",{parentName:"ul"},"Algorithm prioritizes any item whose ",Object(r.b)("strong",{parentName:"li"},"row start")," or ",Object(r.b)("strong",{parentName:"li"},"row end")," property is defined",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Positions these items first. All of the other items are then flowed in around it using the normal flow"))),Object(r.b)("li",{parentName:"ul"},"Column positioning doesn't get priority with this flow setting",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If an item has a column position, the browser will skip to the specified column. This can leave empty cells in the grid.")))),Object(r.b)("hr",null),Object(r.b)("h1",null,Object(r.b)("inlineCode",{parentName:"h1"},"grid-auto-flow: column")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Items fill up the current ",Object(r.b)("em",{parentName:"li"},"column")," from top to bottom before starting to fill the next column"),Object(r.b)("li",{parentName:"ul"},"Algorithm prioritizes any item whose ",Object(r.b)("strong",{parentName:"li"},"column start")," or ",Object(r.b)("strong",{parentName:"li"},"column end")," property is defined"),Object(r.b)("li",{parentName:"ul"},"Row positioning doesn't get priority with this flow setting")),Object(r.b)("hr",null),Object(r.b)("h1",null,"The ",Object(r.b)("inlineCode",{parentName:"h1"},"span")," keyword"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"span")," keyword will make grid items span multiple rows or columns, but doesn't increase their placement priority"),Object(r.b)("hr",null),Object(r.b)("h1",null,"Order"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Can use ",Object(r.b)("inlineCode",{parentName:"li"},"order")," property to change the order of grid items, overriding the default document order placement"),Object(r.b)("li",{parentName:"ul"},"Works just like Flexbox order, with items set to ",Object(r.b)("inlineCode",{parentName:"li"},"order: 0")," by default"),Object(r.b)("li",{parentName:"ul"},"Giving a grid item ",Object(r.b)("inlineCode",{parentName:"li"},"order: 1")," makes it show up at the end"),Object(r.b)("li",{parentName:"ul"},"Can move grid items to beginning with negative order (",Object(r.b)("inlineCode",{parentName:"li"},"order: -1"),"), also like Flexbox")),Object(r.b)("hr",null),Object(r.b)("h1",null,"Order happens:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"AFTER")," row start/end positioning (in ",Object(r.b)("inlineCode",{parentName:"li"},"grid-auto-flow: row"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"AFTER")," column start/end positioning (in ",Object(r.b)("inlineCode",{parentName:"li"},"grid-auto-flow: column"),")")),Object(r.b)("hr",null),Object(r.b)("h1",null,"Additional Reading"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Rachel Andrew's ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://abookapart.com/products/get-ready-for-css-grid-layout"}),Object(r.b)("em",{parentName:"a"},"Get Ready for CSS Grid Layout"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://gedd.ski/post/grid-item-placement/"}),Object(r.b)("em",{parentName:"a"},"How Items Flow Into a CSS Grid")))))}s.isMDXComponent=!0},SZJQ:function(e,t,l){e.exports=l.p+"static/browser-support-0bf400d3454512b7cb779258056bd443.jpg"}}]);
//# sourceMappingURL=component---deck-mdx-cb1e4917acaa7d3995ed.js.map