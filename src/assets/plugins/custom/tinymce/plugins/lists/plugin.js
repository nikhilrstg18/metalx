!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e;var n,r}},n=function(e){return function(t){return typeof t===e}},r=t("string"),o=t("object"),i=t("array"),u=n("boolean"),a=n("function"),s=n("number"),c=function(){},f=function(e){return function(){return e}},l=function(e){return function(t){return!e(t)}},d=f(!1),m=f(!0),p=function(){return v},v=function(){var e=function(e){return e.isNone()},t=function(e){return e()},n=function(e){return e};return{fold:function(e,t){return e()},is:d,isSome:d,isNone:m,getOr:n,getOrThunk:t,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:f(null),getOrUndefined:f(void 0),or:n,orThunk:t,map:p,each:c,bind:p,exists:d,forall:m,filter:p,equals:e,equals_:e,toArray:function(){return[]},toString:f("none()")}}(),g=function(e){var t=f(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:m,isNone:d,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return g(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:v},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(d,(function(t){return n(e,t)}))}};return o},h={some:g,none:p,from:function(e){return null==e?v:g(e)}},y=Array.prototype.slice,S=Array.prototype.push,C=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o];r[o]=t(i,o)}return r},b=function(e,t){for(var n=0,r=e.length;n<r;n++){t(e[n],n)}},N=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r];t(i,r)&&n.push(i)}return n},O=function(e,t,n){return b(e,(function(e){n=t(n,e)})),n},L=function(e,t,n){for(var r=0,o=e.length;r<o;r++){var i=e[r];if(t(i,r))return h.some(i);if(n(i,r))break}return h.none()},T=function(e,t){return L(e,t,d)},w=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!i(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);S.apply(t,e[n])}return t}(C(e,t))},D=function(e){var t=y.call(e,0);return t.reverse(),t},k=function(e,t){return t>=0&&t<e.length?h.some(e[t]):h.none()},x=function(e){return k(e,0)},A=function(e){return k(e,e.length-1)},E=function(){return(E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var P,B,I=function(){return R(0,0)},R=function(e,t){return{major:e,minor:t}},M={nu:R,detect:function(e,t){var n=String(t).toLowerCase();return 0===e.length?I():function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.test(t))return r}}(e,t);if(!n)return{major:0,minor:0};var r=function(e){return Number(t.replace(n,"$"+e))};return R(r(1),r(2))}(e,n)},unknown:I},U=function(e,t){var n=String(t).toLowerCase();return T(e,(function(e){return e.search(n)}))},_=function(e,t){return U(e,t).map((function(e){var n=M.detect(e.versionRegexes,t);return{current:e.name,version:n}}))},$=function(e,t){return U(e,t).map((function(e){var n=M.detect(e.versionRegexes,t);return{current:e.name,version:n}}))},F=function(e,t){return-1!==e.indexOf(t)},H=(P=/^\s+|\s+$/g,function(e){return e.replace(P,"")}),j=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,q=function(e){return function(t){return F(t,e)}},K=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return F(e,"edge/")&&F(e,"chrome")&&F(e,"safari")&&F(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,j],search:function(e){return F(e,"chrome")&&!F(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return F(e,"msie")||F(e,"trident")}},{name:"Opera",versionRegexes:[j,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:q("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:q("firefox")},{name:"Safari",versionRegexes:[j,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(F(e,"safari")||F(e,"mobile/"))&&F(e,"applewebkit")}}],V=[{name:"Windows",search:q("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return F(e,"iphone")||F(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:q("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:q("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:q("linux"),versionRegexes:[]},{name:"Solaris",search:q("sunos"),versionRegexes:[]},{name:"FreeBSD",search:q("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:q("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],W={browsers:f(K),oses:f(V)},Q="Edge",X="Chrome",z="Opera",Y="Firefox",Z="Safari",G=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}};return{current:t,version:n,isEdge:r(Q),isChrome:r(X),isIE:r("IE"),isOpera:r(z),isFirefox:r(Y),isSafari:r(Z)}},J={unknown:function(){return G({current:void 0,version:M.unknown()})},nu:G,edge:f(Q),chrome:f(X),ie:f("IE"),opera:f(z),firefox:f(Y),safari:f(Z)},ee="Windows",te="Android",ne="Linux",re="Solaris",oe="FreeBSD",ie="ChromeOS",ue=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}};return{current:t,version:n,isWindows:r(ee),isiOS:r("iOS"),isAndroid:r(te),isOSX:r("OSX"),isLinux:r(ne),isSolaris:r(re),isFreeBSD:r(oe),isChromeOS:r(ie)}},ae={unknown:function(){return ue({current:void 0,version:M.unknown()})},nu:ue,windows:f(ee),ios:f("iOS"),android:f(te),linux:f(ne),osx:f("OSX"),solaris:f(re),freebsd:f(oe),chromeos:f(ie)},se=function(e,t){var n=W.browsers(),r=W.oses(),o=_(n,e).fold(J.unknown,J.nu),i=$(r,e).fold(ae.unknown,ae.nu),u=function(e,t,n,r){var o=e.isiOS()&&!0===/ipad/i.test(n),i=e.isiOS()&&!o,u=e.isiOS()||e.isAndroid(),a=u||r("(pointer:coarse)"),s=o||!i&&u&&r("(min-device-width:768px)"),c=i||u&&!s,l=t.isSafari()&&e.isiOS()&&!1===/safari/i.test(n),d=!c&&!s&&!l;return{isiPad:f(o),isiPhone:f(i),isTablet:f(s),isPhone:f(c),isTouch:f(a),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:f(l),isDesktop:f(d)}}(i,o,e,t);return{browser:o,os:i,deviceType:u}},ce=function(e){return window.matchMedia(e).matches},fe=function(e){var t,n=!1;return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return n||(n=!0,t=e.apply(null,r)),t}}((function(){return se(navigator.userAgent,ce)})),le=function(e){if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}},de={fromHtml:function(e,t){var n=(t||document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||n.childNodes.length>1)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return le(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e);return le(n)},fromText:function(e,t){var n=(t||document).createTextNode(e);return le(n)},fromDom:le,fromPoint:function(e,t,n){return h.from(e.dom.elementFromPoint(t,n)).map(le)}},me=function(e,t){return e.dom===t.dom},pe=function(e,t){return n=e.dom,r=t.dom,function(e,t,n){return 0!=(e.compareDocumentPosition(t)&n)}(n,r,Node.DOCUMENT_POSITION_CONTAINED_BY);var n,r},ve=function(e,t){return fe().browser.isIE()?pe(e,t):function(e,t){var n=e.dom,r=t.dom;return n!==r&&n.contains(r)}(e,t)},ge=function(e,t){var n=e.dom;if(1!==n.nodeType)return!1;var r=n;if(void 0!==r.matches)return r.matches(t);if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t);if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t);if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")},he=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),ye=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),Se=tinymce.util.Tools.resolve("tinymce.util.VK"),Ce=Object.keys,be=function(e,t){for(var n=Ce(e),r=0,o=n.length;r<o;r++){var i=n[r];t(e[i],i)}},Ne=function(e,t){var n={};return function(e,t,n,r){be(e,(function(e,o){(t(e,o)?n:r)(e,o)}))}(e,t,function(e){return function(t,n){e[n]=t}}(n),c),n},Oe=("undefined"!=typeof window?window:Function("return this;")(),function(e){return e.dom.nodeName.toLowerCase()}),Le=(B=1,function(e){return function(e){return e.dom.nodeType}(e)===B}),Te=function(e,t){var n=e.dom;be(t,(function(e,t){!function(e,t,n){if(!(r(n)||u(n)||s(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")}(n,t,e)}))},we=function(e){return O(e.dom.attributes,(function(e,t){return e[t.name]=t.value,e}),{})},De=function(e){return h.from(e.dom.parentNode).map(de.fromDom)},ke=function(e){return C(e.dom.childNodes,de.fromDom)},xe=function(e,t){var n=e.dom.childNodes;return h.from(n[t]).map(de.fromDom)},Ae=function(e){return xe(e,0)},Ee=function(e){return xe(e,e.dom.childNodes.length-1)},Pe=function(e,t){De(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))},Be=function(e,t){e.dom.appendChild(t.dom)},Ie=function(e,t){b(t,(function(t){Be(e,t)}))},Re=function(e){var t=e.dom;null!==t.parentNode&&t.parentNode.removeChild(t)},Me=function(e){return function(e,t){return de.fromDom(e.dom.cloneNode(t))}(e,!0)},Ue=function(e,t){var n=function(e,t){var n=de.fromTag(t),r=we(e);return Te(n,r),n}(e,t);Pe(e,n);var r=ke(e);return Ie(n,r),Re(e),n},_e=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),$e=tinymce.util.Tools.resolve("tinymce.util.Tools"),Fe=function(e){return function(t){return t&&t.nodeName.toLowerCase()===e}},He=function(e){return function(t){return t&&e.test(t.nodeName)}},je=function(e){return e&&3===e.nodeType},qe=He(/^(OL|UL|DL)$/),Ke=He(/^(OL|UL)$/),Ve=Fe("ol"),We=He(/^(LI|DT|DD)$/),Qe=He(/^(DT|DD)$/),Xe=He(/^(TH|TD)$/),ze=Fe("br"),Ye=function(e,t){return t&&!!e.schema.getTextBlockElements()[t.nodeName]},Ze=function(e,t){return e&&e.nodeName in t},Ge=function(e,t,n){var r=e.isEmpty(t);return!(n&&e.select("span[data-mce-type=bookmark]",t).length>0)&&r},Je=function(e,t){return e.isChildOf(t,e.getRoot())},et=function(e,t){var n,r,o,i=e.dom,u=e.schema.getBlockElements(),a=i.createFragment(),s=function(e){var t=e.getParam("forced_root_block","p");return!1===t?"":!0===t?"p":t}(e);if(s&&((r=i.create(s)).tagName===s.toUpperCase()&&i.setAttribs(r,function(e){return e.getParam("forced_root_block_attrs",{})}(e)),Ze(t.firstChild,u)||a.appendChild(r)),t)for(;n=t.firstChild;){var c=n.nodeName;o||"SPAN"===c&&"bookmark"===n.getAttribute("data-mce-type")||(o=!0),Ze(n,u)?(a.appendChild(n),r=null):s?(r||(r=i.create(s),a.appendChild(r)),r.appendChild(n)):a.appendChild(n)}return s?o||r.appendChild(i.create("br",{"data-mce-bogus":"1"})):a.appendChild(i.create("br")),a},tt=_e.DOM,nt=function(e,t){ge(t,"dd")?Ue(t,"dt"):ge(t,"dt")&&De(t).each((function(n){return function(e,t,n){var r=tt.select('span[data-mce-type="bookmark"]',t),o=et(e,n),i=tt.createRng();i.setStartAfter(n),i.setEndAfter(t);for(var u,a=i.extractContents(),s=a.firstChild;s;s=s.firstChild)if("LI"===s.nodeName&&e.dom.isEmpty(s)){tt.remove(s);break}e.dom.isEmpty(a)||tt.insertAfter(a,t),tt.insertAfter(o,t),Ge(e.dom,n.parentNode)&&(u=n.parentNode,$e.each(r,(function(e){u.parentNode.insertBefore(e,n.parentNode)})),tt.remove(u)),tt.remove(n),Ge(e.dom,t)&&tt.remove(t)}(e,n.dom,t.dom)}))},rt=function(e){ge(e,"dt")&&Ue(e,"dd")},ot=function(e,t){if(je(e))return{container:e,offset:t};var n=he.getNode(e,t);return je(n)?{container:n,offset:t>=e.childNodes.length?n.data.length:0}:n.previousSibling&&je(n.previousSibling)?{container:n.previousSibling,offset:n.previousSibling.data.length}:n.nextSibling&&je(n.nextSibling)?{container:n.nextSibling,offset:0}:{container:e,offset:t}},it=function(e){var t=e.cloneRange(),n=ot(e.startContainer,e.startOffset);t.setStart(n.container,n.offset);var r=ot(e.endContainer,e.endOffset);return t.setEnd(r.container,r.offset),t},ut=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),at=function(e,t){var n=t||e.selection.getStart(!0);return e.dom.getParent(n,"OL,UL,DL",ft(e,n))},st=function(e){var t=at(e),n=e.selection.getSelectedBlocks();return function(e,t){return e&&1===t.length&&t[0]===e}(t,n)?function(e){return $e.grep(e.querySelectorAll("ol,ul,dl"),(function(e){return qe(e)}))}(t):$e.grep(n,(function(e){return qe(e)&&t!==e}))},ct=function(e){var t=e.selection.getSelectedBlocks();return $e.grep(function(e,t){var n=$e.map(t,(function(t){return e.dom.getParent(t,"li,dd,dt",ft(e,t))||t}));return ut.unique(n)}(e,t),(function(e){return We(e)}))},ft=function(e,t){var n=e.dom.getParents(t,"TD,TH");return n.length>0?n[0]:e.getBody()},lt=function(e,t){var n=e.dom.getParents(t,"ol,ul",ft(e,t));return A(n)},dt=function(e){var t=function(e){var t=lt(e,e.selection.getStart()),n=N(e.selection.getSelectedBlocks(),Ke);return t.toArray().concat(n)}(e);return mt(e,t)},mt=function(e,t){var n=C(t,(function(t){return lt(e,t).getOr(t)}));return ut.unique(n)},pt=function(e,t,n){return e.isSome()&&t.isSome()?h.some(n(e.getOrDie(),t.getOrDie())):h.none()},vt=function(e,t,n){return e.fire("ListMutation",{action:t,element:n})},gt=function(e,t,n){if(!r(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n);(function(e){return void 0!==e.style&&a(e.style.getPropertyValue)})(e)&&e.style.setProperty(t,n)},ht=function(e,t){Be(e.item,t.list)},yt=function(e,t){var n={list:de.fromTag(t,e),item:de.fromTag("li",e)};return Be(n.list,n.item),n},St=function(e,t,n){var r=t.slice(0,n.depth);return A(r).each((function(t){!function(e,t){Be(e.list,t),e.item=t}(t,function(e,t,n){var r=de.fromTag("li",e);return Te(r,t),Ie(r,n),r}(e,n.itemAttributes,n.content)),function(e,t){Oe(e.list)!==t.listType&&(e.list=Ue(e.list,t.listType)),Te(e.list,t.listAttributes)}(t,n)})),r},Ct=function(e,t,n){var r,o=function(e,t,n){for(var r=[],o=0;o<n;o++)r.push(yt(e,t.listType));return r}(e,n,n.depth-t.length);return function(e){for(var t=1;t<e.length;t++)ht(e[t-1],e[t])}(o),function(e,t){for(var n=0;n<e.length-1;n++)r=e[n].item,o="list-style-type",i="none",u=void 0,u=r.dom,gt(u,o,i);var r,o,i,u;A(e).each((function(e){Te(e.list,t.listAttributes),Te(e.item,t.itemAttributes),Ie(e.item,t.content)}))}(o,n),r=o,pt(A(t),x(r),ht),t.concat(o)},bt=function(e){return ge(e,"OL,UL")},Nt=function(e){return Ae(e).map(bt).getOr(!1)},Ot=function(e){return e.depth>0},Lt=function(e){return e.isSelected},Tt=function(e){var t=ke(e),n=Ee(e).map(bt).getOr(!1)?t.slice(0,-1):t;return C(n,Me)},wt=function(e){return b(e,(function(t,n){(function(e,t){var n=e[t].depth,r=function(e){return e.depth===n&&!e.dirty},o=function(e){return e.depth<n};return L(D(e.slice(0,t)),r,o).orThunk((function(){return L(e.slice(t+1),r,o)}))})(e,n).fold((function(){t.dirty&&function(e){e.listAttributes=Ne(e.listAttributes,(function(e,t){return"start"!==t}))}(t)}),(function(e){return r=e,(n=t).listType=r.listType,void(n.listAttributes=E({},r.listAttributes));var n,r}))})),e},Dt=function(e,t,n,r){return Ae(r).filter(bt).fold((function(){t.each((function(e){me(e.start,r)&&n.set(!0)}));var o=function(e,t,n){return De(e).filter(Le).map((function(r){return{depth:t,dirty:!1,isSelected:n,content:Tt(e),itemAttributes:we(e),listAttributes:we(r),listType:Oe(r)}}))}(r,e,n.get());t.each((function(e){me(e.end,r)&&n.set(!1)}));var i=Ee(r).filter(bt).map((function(r){return kt(e,t,n,r)})).getOr([]);return o.toArray().concat(i)}),(function(r){return kt(e,t,n,r)}))},kt=function(e,t,n,r){return w(ke(r),(function(r){return(bt(r)?kt:Dt)(e+1,t,n,r)}))},xt=function(e,t){var n=wt(t);return C(n,(function(t){var n,r,o,i=(n=t.content,o=(r||document).createDocumentFragment(),b(n,(function(e){o.appendChild(e.dom)})),de.fromDom(o));return de.fromDom(et(e,i.dom))}))},At=function(e,t){var n=wt(t);return function(e,t){var n=O(t,(function(t,n){return n.depth>t.length?Ct(e,t,n):St(e,t,n)}),[]);return x(n).map((function(e){return e.list}))}(e.contentDocument,n).toArray()},Et=function(e,t,n){var r=function(e,t){var n,r=(n=!1,{get:function(){return n},set:function(e){n=e}});return C(e,(function(e){return{sourceList:e,entries:kt(0,t,r,e)}}))}(t,function(e){var t=C(ct(e),de.fromDom);return pt(T(t,l(Nt)),T(D(t),l(Nt)),(function(e,t){return{start:e,end:t}}))}(e));b(r,(function(t){!function(e,t){b(N(e,Lt),(function(e){return function(e,t){switch(e){case"Indent":t.depth++;break;case"Outdent":t.depth--;break;case"Flatten":t.depth=0}t.dirty=!0}(t,e)}))}(t.entries,n);var r,o=function(e,t){return w(function(e,t){if(0===e.length)return[];for(var n=t(e[0]),r=[],o=[],i=0,u=e.length;i<u;i++){var a=e[i],s=t(a);s!==n&&(r.push(o),o=[]),n=s,o.push(a)}return 0!==o.length&&r.push(o),r}(t,Ot),(function(t){return x(t).map(Ot).getOr(!1)?At(e,t):xt(e,t)}))}(e,t.entries);b(o,(function(t){vt(e,"Indent"===n?"IndentList":"OutdentList",t.dom)})),r=t.sourceList,b(o,(function(e){Pe(r,e)})),Re(t.sourceList)}))},Pt=function(e,t){var n=C(dt(e),de.fromDom),r=C(function(e){return N(ct(e),Qe)}(e),de.fromDom),o=!1;if(n.length||r.length){var i=e.selection.getBookmark();Et(e,n,t),function(e,t,n){b(n,"Indent"===t?rt:function(t){return nt(e,t)})}(e,t,r),e.selection.moveToBookmark(i),e.selection.setRng(it(e.selection.getRng())),e.nodeChanged(),o=!0}return o},Bt=function(e){return Pt(e,"Indent")},It=function(e){return Pt(e,"Outdent")},Rt=function(e){return Pt(e,"Flatten")},Mt=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),Ut=_e.DOM,_t=function(e){var t={},n=function(n){var r,o,i;o=e[n?"startContainer":"endContainer"],i=e[n?"startOffset":"endOffset"],1===o.nodeType&&(r=Ut.create("span",{"data-mce-type":"bookmark"}),o.hasChildNodes()?(i=Math.min(i,o.childNodes.length-1),n?o.insertBefore(r,o.childNodes[i]):Ut.insertAfter(r,o.childNodes[i])):o.appendChild(r),o=r,i=0),t[n?"startContainer":"endContainer"]=o,t[n?"startOffset":"endOffset"]=i};return n(!0),e.collapsed||n(),t},$t=function(e){var t=function(t){var n,r,o;n=o=e[t?"startContainer":"endContainer"],r=e[t?"startOffset":"endOffset"],n&&(1===n.nodeType&&(r=function(e){for(var t=e.parentNode.firstChild,n=0;t;){if(t===e)return n;1===t.nodeType&&"bookmark"===t.getAttribute("data-mce-type")||n++,t=t.nextSibling}return-1}(n),n=n.parentNode,Ut.remove(o),!n.hasChildNodes()&&Ut.isBlock(n)&&n.appendChild(Ut.create("br"))),e[t?"startContainer":"endContainer"]=n,e[t?"startOffset":"endOffset"]=r)};t(!0),t();var n=Ut.createRng();return n.setStart(e.startContainer,e.startOffset),e.endContainer&&n.setEnd(e.endContainer,e.endOffset),it(n)},Ft=function(e){switch(e){case"UL":return"ToggleUlList";case"OL":return"ToggleOlList";case"DL":return"ToggleDLList"}},Ht=function(e){return/\btox\-/.test(e.className)},jt=function(e,t,n){var r=function(e){var r=L(e.parents,qe,Xe).filter((function(e){return e.nodeName===t&&!Ht(e)})).isSome();n(r)},o=e.dom.getParents(e.selection.getNode());return r({parents:o}),e.on("NodeChange",r),function(){return e.off("NodeChange",r)}},qt=function(e,t){$e.each(t,(function(t,n){e.setAttribute(n,t)}))},Kt=function(e,t,n){!function(e,t,n){var r=n["list-style-type"]?n["list-style-type"]:null;e.setStyle(t,"list-style-type",r)}(e,t,n),function(e,t,n){qt(t,n["list-attributes"]),$e.each(e.select("li",t),(function(e){qt(e,n["list-item-attributes"])}))}(e,t,n)},Vt=function(e,t,n,r){var o=t[n?"startContainer":"endContainer"],i=t[n?"startOffset":"endOffset"];for(1===o.nodeType&&(o=o.childNodes[Math.min(i,o.childNodes.length-1)]||o),!n&&ze(o.nextSibling)&&(o=o.nextSibling);o.parentNode!==r;){if(Ye(e,o))return o;if(/^(TD|TH)$/.test(o.parentNode.nodeName))return o;o=o.parentNode}return o},Wt=function(e,t,n){var r=e.selection.getRng(),o="LI",i=ft(e,e.selection.getStart(!0)),u=e.dom;if("false"!==u.getContentEditable(e.selection.getNode())){"DL"===(t=t.toUpperCase())&&(o="DT");var a=_t(r),s=function(e,t,n){for(var r,o=[],i=e.dom,u=Vt(e,t,!0,n),a=Vt(e,t,!1,n),s=[],c=u;c&&(s.push(c),c!==a);c=c.nextSibling);return $e.each(s,(function(t){if(Ye(e,t))return o.push(t),void(r=null);if(i.isBlock(t)||ze(t))return ze(t)&&i.remove(t),void(r=null);var u=t.nextSibling;Mt.isBookmarkNode(t)&&(qe(u)||Ye(e,u)||!u&&t.parentNode===n)?r=null:(r||(r=i.create("p"),t.parentNode.insertBefore(r,t),o.push(r)),r.appendChild(t))})),o}(e,r,i);$e.each(s,(function(r){var i,a=r.previousSibling,s=r.parentNode;We(s)||(a&&qe(a)&&a.nodeName===t&&function(e,t,n){var r=e.getStyle(t,"list-style-type"),o=n?n["list-style-type"]:"";return r===(null===o?"":o)}(u,a,n)?(i=a,r=u.rename(r,o),a.appendChild(r)):(i=u.create(t),r.parentNode.insertBefore(i,r),i.appendChild(r),r=u.rename(r,o)),function(e,t,n){$e.each(n,(function(n){var r;return e.setStyle(t,((r={})[n]="",r))}))}(u,r,["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"]),Kt(u,i,n),Xt(e.dom,i))})),e.selection.setRng($t(a))}},Qt=function(e,t,n){return function(e,t){return e&&t&&qe(e)&&e.nodeName===t.nodeName}(t,n)&&function(e,t,n){return e.getStyle(t,"list-style-type",!0)===e.getStyle(n,"list-style-type",!0)}(e,t,n)&&(r=n,t.className===r.className);var r},Xt=function(e,t){var n,r;if(n=t.nextSibling,Qt(e,t,n)){for(;r=n.firstChild;)t.appendChild(r);e.remove(n)}if(n=t.previousSibling,Qt(e,t,n)){for(;r=n.lastChild;)t.insertBefore(r,t.firstChild);e.remove(n)}},zt=function(e,t,n,r,o){var i=qe(t);if(i&&t.nodeName===r&&!Yt(o))Rt(e);else{Wt(e,r,o);var u=_t(e.selection.getRng(!0)),a=i?function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],u=0,a=i.length;u<a;u++,o++)r[o]=i[u];return r}([t],n):n;$e.each(a,(function(t){!function(e,t,n,r){if(t.nodeName!==n){var o=e.dom.rename(t,n);Kt(e.dom,o,r),vt(e,Ft(n),o)}else Kt(e.dom,t,r),vt(e,Ft(n),t)}(e,t,r,o)})),e.selection.setRng($t(u))}},Yt=function(e){return"list-style-type"in e},Zt=function(e,t,n){var r=at(e),i=st(e),u=o(n)?n:{};i.length>0?zt(e,r,i,t,u):function(e,t,n,r){if(t!==e.getBody())if(t)if(t.nodeName!==n||Yt(r)||Ht(t)){var o=_t(e.selection.getRng(!0));Kt(e.dom,t,r);var i=e.dom.rename(t,n);Xt(e.dom,i),e.selection.setRng($t(o)),Wt(e,n,r),vt(e,Ft(n),i)}else Rt(e);else Wt(e,n,r),vt(e,Ft(n),t)}(e,r,t,u)},Gt=_e.DOM,Jt=function(e,t){$e.each($e.grep(e.select("ol,ul",t)),(function(t){!function(e,t){var n,r=t.parentNode;"LI"===r.nodeName&&r.firstChild===t&&((n=r.previousSibling)&&"LI"===n.nodeName?(n.appendChild(t),Ge(e,r)&&Gt.remove(r)):Gt.setStyle(r,"listStyleType","none")),qe(r)&&(n=r.previousSibling)&&"LI"===n.nodeName&&n.appendChild(t)}(e,t)}))},en=function(e,t,n,r){var o=t.startContainer,i=t.startOffset;if(je(o)&&(n?i<o.data.length:i>0))return o;var u=e.schema.getNonEmptyElements();1===o.nodeType&&(o=he.getNode(o,i));var a=new ye(o,r);for(n&&function(e,t){return!!ze(t)&&e.isBlock(t.nextSibling)&&!ze(t.previousSibling)}(e.dom,o)&&a.next();o=a[n?"next":"prev2"]();){if("LI"===o.nodeName&&!o.hasChildNodes())return o;if(u[o.nodeName])return o;if(je(o)&&o.data.length>0)return o}},tn=function(e,t){var n=t.childNodes;return 1===n.length&&!qe(n[0])&&e.isBlock(n[0])},nn=function(e,t,n){var r,o=tn(e,n)?n.firstChild:n;if(function(e,t){tn(e,t)&&e.remove(t.firstChild,!0)}(e,t),!Ge(e,t,!0))for(;r=t.firstChild;)o.appendChild(r)},rn=function(e,t,n){var r,o=t.parentNode;if(Je(e,t)&&Je(e,n)){qe(n.lastChild)&&(r=n.lastChild),o===n.lastChild&&ze(o.previousSibling)&&e.remove(o.previousSibling);var i=n.lastChild;i&&ze(i)&&t.hasChildNodes()&&e.remove(i),Ge(e,n,!0)&&e.$(n).empty(),nn(e,t,n),r&&n.appendChild(r);var u=ve(de.fromDom(n),de.fromDom(t))?e.getParents(t,qe,n):[];e.remove(t),b(u,(function(t){Ge(e,t)&&t!==e.getRoot()&&e.remove(t)}))}},on=function(e,t,n,r){var o=e.dom;if(o.isEmpty(r))!function(e,t,n){e.dom.$(n).empty(),rn(e.dom,t,n),e.selection.setCursorLocation(n,0)}(e,n,r);else{var i=_t(t);rn(o,n,r),e.selection.setRng($t(i))}},un=function(e,t){var n=e.dom,r=e.selection,o=r.getStart(),i=ft(e,o),u=n.getParent(r.getStart(),"LI",i);if(u){var a=u.parentNode;if(a===e.getBody()&&Ge(n,a))return!0;var s=it(r.getRng()),c=n.getParent(en(e,s,t,i),"LI",i);if(c&&c!==u)return e.undoManager.transact((function(){var n;t?on(e,s,c,u):(n=u).parentNode.firstChild===n?It(e):function(e,t,n,r){var o=_t(t);rn(e.dom,n,r);var i=$t(o);e.selection.setRng(i)}(e,s,u,c)})),!0;if(!c&&!t&&0===s.startOffset&&0===s.endOffset)return e.undoManager.transact((function(){Rt(e)})),!0}return!1},an=function(e,t){return un(e,t)||function(e,t){var n=e.dom,r=e.selection.getStart(),o=ft(e,r),i=n.getParent(r,n.isBlock,o);if(i&&n.isEmpty(i)){var u=it(e.selection.getRng()),a=n.getParent(en(e,u,t,o),"LI",o);if(a)return e.undoManager.transact((function(){!function(e,t,n){var r=e.getParent(t.parentNode,e.isBlock,n);e.remove(t),r&&e.isEmpty(r)&&e.remove(r)}(n,i,o),Xt(n,a.parentNode),e.selection.select(a,!0),e.selection.collapse(t)})),!0}return!1}(e,t)},sn=function(e,t){return e.selection.isCollapsed()?an(e,t):function(e){var t=e.selection.getStart(),n=ft(e,t);return!!(e.dom.getParent(t,"LI,DT,DD",n)||ct(e).length>0)&&(e.undoManager.transact((function(){e.execCommand("Delete"),Jt(e.dom,e.getBody())})),!0)}(e)},cn=function(e){var t=D(H(e).split("")),n=C(t,(function(e,t){var n=e.toUpperCase().charCodeAt(0)-"A".charCodeAt(0)+1;return Math.pow(26,t)*n}));return O(n,(function(e,t){return e+t}),0)},fn=function(e){if(--e<0)return"";var t=e%26,n=Math.floor(e/26);return fn(n)+String.fromCharCode("A".charCodeAt(0)+t)},ln=function(e){var t,n,r=at(e);Ve(r)&&e.windowManager.open({title:"List Properties",body:{type:"panel",items:[{type:"input",name:"start",label:"Start list at number",inputMode:"numeric"}]},initialData:{start:(t={start:e.dom.getAttrib(r,"start","1"),listStyleType:h.some(e.dom.getStyle(r,"list-style-type"))},n=parseInt(t.start,10),t.listStyleType.is("upper-alpha")?fn(n):t.listStyleType.is("lower-alpha")?fn(n).toLowerCase():t.start)},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(t){(function(e){switch(function(e){return/^[0-9]+$/.test(e)?2:/^[A-Z]+$/.test(e)?0:function(e){return/^[a-z]+$/.test(e)}(e)?1:e.length>0?4:3}(e)){case 2:return h.some({listStyleType:h.none(),start:e});case 0:return h.some({listStyleType:h.some("upper-alpha"),start:cn(e).toString()});case 1:return h.some({listStyleType:h.some("lower-alpha"),start:cn(e).toString()});case 3:return h.some({listStyleType:h.none(),start:""});case 4:return h.none()}})(t.getData().start).each((function(t){e.execCommand("mceListUpdate",!1,{attrs:{start:"1"===t.start?"":t.start},styles:{"list-style-type":t.listStyleType.getOr("")}})})),t.close()}})},dn=function(e,t){return function(){var n=at(e);return n&&n.nodeName===t}},mn=function(e){e.addCommand("mceListProps",(function(){ln(e)}))},pn=function(e){e.on("BeforeExecCommand",(function(t){var n=t.command.toLowerCase();"indent"===n?Bt(e):"outdent"===n&&It(e)})),e.addCommand("InsertUnorderedList",(function(t,n){Zt(e,"UL",n)})),e.addCommand("InsertOrderedList",(function(t,n){Zt(e,"OL",n)})),e.addCommand("InsertDefinitionList",(function(t,n){Zt(e,"DL",n)})),e.addCommand("RemoveList",(function(){Rt(e)})),mn(e),e.addCommand("mceListUpdate",(function(t,n){o(n)&&function(e,t){var n=at(e);e.undoManager.transact((function(){o(t.styles)&&e.dom.setStyles(n,t.styles),o(t.attrs)&&be(t.attrs,(function(t,r){return e.dom.setAttrib(n,r,t)}))}))}(e,n)})),e.addQueryStateHandler("InsertUnorderedList",dn(e,"UL")),e.addQueryStateHandler("InsertOrderedList",dn(e,"OL")),e.addQueryStateHandler("InsertDefinitionList",dn(e,"DL"))},vn=function(e){(function(e){return e.getParam("lists_indent_on_tab",!0)})(e)&&function(e){e.on("keydown",(function(t){t.keyCode!==Se.TAB||Se.metaKeyPressed(t)||e.undoManager.transact((function(){(t.shiftKey?It(e):Bt(e))&&t.preventDefault()}))}))}(e),function(e){e.on("keydown",(function(t){t.keyCode===Se.BACKSPACE?sn(e,!1)&&t.preventDefault():t.keyCode===Se.DELETE&&sn(e,!0)&&t.preventDefault()}))}(e)};e.add("lists",(function(e){return!1===e.hasPlugin("rtc",!0)?(vn(e),pn(e)):mn(e),function(e){var t=function(t){return function(){return e.execCommand(t)}};e.hasPlugin("advlist")||(e.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:t("InsertOrderedList"),onSetup:function(t){return jt(e,"OL",t.setActive)}}),e.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:t("InsertUnorderedList"),onSetup:function(t){return jt(e,"UL",t.setActive)}}))}(e),function(e){var t={text:"List properties...",icon:"ordered-list",onAction:function(){return e.execCommand("mceListProps")},onSetup:function(t){return jt(e,"OL",(function(e){return t.setDisabled(!e)}))}};e.ui.registry.addMenuItem("listprops",t),e.ui.registry.addContextMenu("lists",{update:function(t){var n=at(e,t);return Ve(n)?["listprops"]:[]}})}(e),function(e){return{backspaceDelete:function(t){sn(e,t)}}}(e)}))}();
//# sourceMappingURL=plugin.js.map
