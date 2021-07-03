!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(){},n=function(e){return function(){return e}};var r,a,o,u=n(!1),c=n(!0),i=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=tinymce.util.Tools.resolve("tinymce.util.XHR"),s=function(e){return e.getParam("template_mdate_classes","mdate")},f=function(e){return e.getParam("template_replace_values")},m=function(e){return e.getParam("template_mdate_format",e.translate("%Y-%m-%d"))},p=function(e,t){if((e=""+e).length<t)for(var n=0;n<t-e.length;n++)e="0"+e;return e},d=function(e,t,n){var r="Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),a="Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),o="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),u="January February March April May June July August September October November December".split(" ");return n=n||new Date,t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace("%D","%m/%d/%Y")).replace("%r","%I:%M:%S %p")).replace("%Y",""+n.getFullYear())).replace("%y",""+n.getYear())).replace("%m",p(n.getMonth()+1,2))).replace("%d",p(n.getDate(),2))).replace("%H",""+p(n.getHours(),2))).replace("%M",""+p(n.getMinutes(),2))).replace("%S",""+p(n.getSeconds(),2))).replace("%I",""+((n.getHours()+11)%12+1))).replace("%p",n.getHours()<12?"AM":"PM")).replace("%B",""+e.translate(u[n.getMonth()]))).replace("%b",""+e.translate(o[n.getMonth()]))).replace("%A",""+e.translate(a[n.getDay()]))).replace("%a",""+e.translate(r[n.getDay()]))).replace("%%","%")},g=function(e,t){return function(){var n=function(e){return e.getParam("templates")}(e);"function"!=typeof n?"string"==typeof n?l.send({url:n,success:function(e){t(JSON.parse(e))}}):t(n):n(t)}},v=function(e,t){return i.each(t,(function(t,n){"function"==typeof t&&(t=t(n)),e=e.replace(new RegExp("\\{\\$"+n+"\\}","g"),t)})),e},y=function(e,t){var n=e.dom,r=f(e);i.each(n.select("*",t),(function(e){i.each(r,(function(t,a){n.hasClass(e,a)&&"function"==typeof r[a]&&r[a](e)}))}))},h=function(e,t){return new RegExp("\\b"+t+"\\b","g").test(e.className)},b=function(e,t,n){var r,a=e.dom,o=e.selection.getContent();n=v(n,f(e)),r=a.create("div",null,n);var u=a.select(".mceTmpl",r);u&&u.length>0&&(r=a.create("div",null)).appendChild(u[0].cloneNode(!0)),i.each(a.select("*",r),(function(t){h(t,function(e){return e.getParam("template_cdate_classes","cdate")}(e).replace(/\s+/g,"|"))&&(t.innerHTML=d(e,function(e){return e.getParam("template_cdate_format",e.translate("%Y-%m-%d"))}(e))),h(t,s(e).replace(/\s+/g,"|"))&&(t.innerHTML=d(e,m(e))),h(t,function(e){return e.getParam("template_selected_content_classes","selcontent")}(e).replace(/\s+/g,"|"))&&(t.innerHTML=o)})),y(e,r),e.execCommand("mceInsertContent",!1,r.innerHTML),e.addVisual()},T=function(){return M},M=(r=function(e){return e.isNone()},{fold:function(e,t){return e()},is:u,isSome:u,isNone:c,getOr:o=function(e){return e},getOrThunk:a=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:n(null),getOrUndefined:n(void 0),or:o,orThunk:a,map:T,each:t,bind:T,exists:u,forall:c,filter:T,equals:r,equals_:r,toArray:function(){return[]},toString:n("none()")}),_=function(e){var t=n(e),r=function(){return o},a=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:c,isNone:u,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:r,orThunk:r,map:function(t){return _(t(e))},each:function(t){t(e)},bind:a,exists:a,forall:a,filter:function(t){return t(e)?o:M},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(u,(function(t){return n(e,t)}))}};return o},x={some:_,none:T,from:function(e){return null==e?M:_(e)}},O=function(e,t){return function(e,t,n){for(var r=0,a=e.length;r<a;r++){var o=e[r];if(t(o,r))return x.some(o);if(n(o,r))break}return x.none()}(e,t,u)},P=tinymce.util.Tools.resolve("tinymce.Env"),S=tinymce.util.Tools.resolve("tinymce.util.Promise"),w=Object.hasOwnProperty,D=function(e,t){return w.call(e,t)},A={'"':"&quot;","<":"&lt;",">":"&gt;","&":"&amp;","'":"&#039;"},C=function(e){return e.replace(/["'<>&]/g,(function(e){return(t=A,n=e,D(t,n)?x.from(t[n]):x.none()).getOr(e);var t,n}))},N=function(e,t){var n=function(e){return function(e,t){for(var n=e.length,r=new Array(n),a=0;a<n;a++){var o=e[a];r[a]=t(o,a)}return r}(e,(function(e){return{text:e.text,value:e.text}}))},r=function(e,t){return O(e,(function(e){return e.text===t}))},a=function(t){e.windowManager.alert("Could not load the specified template.",(function(){return t.focus("template")}))},o=function(e){return new S((function(t,n){e.value.url.fold((function(){return t(e.value.content.getOr(""))}),(function(e){return l.send({url:e,success:function(e){t(e)},error:function(e){n(e)}})}))}))},u=function(e,t){return function(n,u){if("template"===u.name){var c=n.getData().template;r(e,c).each((function(e){n.block("Loading..."),o(e).then((function(r){t(n,e,r)})).catch((function(){t(n,e,""),n.disable("save"),a(n)}))}))}}},c=function(t){return function(n){var u=n.getData();r(t,u.template).each((function(t){o(t).then((function(t){b(e,0,t),n.close()})).catch((function(){n.disable("save"),a(n)}))}))}};(function(){if(!t||0===t.length){var n=e.translate("No templates defined.");return e.notificationManager.open({text:n,type:"info"}),x.none()}return x.from(i.map(t,(function(e,t){var n=function(e){return void 0!==e.url};return{selected:0===t,text:e.title,value:{url:n(e)?x.from(e.url):x.none(),content:n(e)?x.none():x.from(e.content),description:e.description}}})))})().each((function(t){var r=n(t),l=function(e,n){return{title:"Insert Template",size:"large",body:{type:"panel",items:e},initialData:n,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:c(t),onChange:u(t,s)}},s=function(t,n,a){var o=function(e,t){if(-1===t.indexOf("<html>")){var n="",r=function(e){return e.getParam("content_style","","string")}(e),a=function(e){return e.getParam("content_css_cors",!1,"boolean")}(e)?' crossorigin="anonymous"':"";i.each(e.contentCSS,(function(t){n+='<link type="text/css" rel="stylesheet" href="'+e.documentBaseURI.toAbsolute(t)+'"'+a+">"})),r&&(n+='<style type="text/css">'+r+"</style>");var o=function(e){var t=e.getParam("body_class","","string");return-1===t.indexOf("=")?t:function(e){return e.getParam("body_class","","hash")[e.id]||""}(e)}(e),u=e.dom.encode,c='<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A" && !('+(P.mac?"e.metaKey":"e.ctrlKey && !e.altKey")+")) {e.preventDefault();}}}, false);<\/script> ",l=e.getBody().dir,s=l?' dir="'+u(l)+'"':"";t='<!DOCTYPE html><html><head><base href="'+u(e.documentBaseURI.getURI())+'">'+n+c+'</head><body class="'+u(o)+'"'+s+">"+t+"</body></html>"}return v(t,function(e){return e.getParam("template_preview_replace_values")}(e))}(e,a),u=[{type:"selectbox",name:"template",label:"Templates",items:r},{type:"htmlpanel",html:'<p aria-live="polite">'+C(n.value.description)+"</p>"},{label:"Preview",type:"iframe",name:"preview",sandboxed:!1}],c={template:n.text,preview:o};t.unblock(),t.redial(l(u,c)),t.focus("template")},f=e.windowManager.open(l([],{template:"",preview:""}));f.block("Loading..."),o(t[0]).then((function(e){s(f,t[0],e)})).catch((function(){s(f,t[0],""),f.disable("save"),a(f)}))}))},I=function(e){return function(t){N(e,t)}};e.add("template",(function(e){!function(e){e.ui.registry.addButton("template",{icon:"template",tooltip:"Insert template",onAction:g(e,I(e))}),e.ui.registry.addMenuItem("template",{icon:"template",text:"Insert template...",onAction:g(e,I(e))})}(e),function(e){e.addCommand("mceInsertTemplate",function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var a=t.concat(n);return e.apply(null,a)}}(b,e))}(e),function(e){e.on("PreProcess",(function(t){var n=e.dom,r=m(e);i.each(n.select("div",t.node),(function(t){n.hasClass(t,"mceTmpl")&&(i.each(n.select("*",t),(function(t){n.hasClass(t,s(e).replace(/\s+/g,"|"))&&(t.innerHTML=d(e,r))})),y(e,t))}))}))}(e)}))}();
//# sourceMappingURL=plugin.js.map
