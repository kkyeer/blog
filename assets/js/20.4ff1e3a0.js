(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{526:function(e,t,n){"use strict";n.r(t);var o=n(5),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"css-deep"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-deep"}},[e._v("#")]),e._v(" CSS Deep")]),e._v(" "),n("p",[e._v("http://stackoverflow.com/a/25609679")]),e._v(" "),n("p",[e._v("HTML5 Web Components offer full encapsulation of CSS styles.")]),e._v(" "),n("p",[e._v("This means that:")]),e._v(" "),n("p",[e._v("styles defined within a component cannot leak out and effect the rest of the page\nstyles defined at the page level do not modify the component's own styles\nHowever sometimes you want to have page-level rules to manipulate the presentation of component elements defined within their shadow DOM. In order to do this, you add /deep/ to the CSS selector.")]),e._v(" "),n("p",[e._v("So in the example shown, html /deep/ [self-end] is selecting all elements under the html (top level) element that have the self-end attribute, including those buried inside web components' shadow DOMs roots.")]),e._v(" "),n("p",[e._v("If you require a selected element to live within a shadow root, then you can use the ::shadow pseudo selector on it's parent element.")]),e._v(" "),n("p",[e._v("Consider:")]),e._v(" "),n("div",[n("span",[e._v("Outer")]),e._v("\n  #shadow-root\n  "),n("my-component",[n("span",[e._v("Inner")])])],1),e._v("\nThe selector html /deep/ span will select both "),n("span",[e._v(" elements.\n"),n("p",[e._v("The selector ::shadow span will select only the inner "),n("span",[e._v(" element.")])]),e._v(" "),n("p",[e._v("Read more about this in the W3C's CSS Scoping Module specification.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);