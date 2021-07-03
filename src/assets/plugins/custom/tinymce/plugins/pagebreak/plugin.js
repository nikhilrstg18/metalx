!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=tinymce.util.Tools.resolve("tinymce.Env"),a=function(e){return e.getParam("pagebreak_split_block",!1)},t="mce-pagebreak",r=function(e){var a='<img src="'+n.transparentSrc+'" class="'+'mce-pagebreak" data-mce-resize="false" data-mce-placeholder />';return e?"<p>"+a+"</p>":a};e.add("pagebreak",(function(e){!function(e){e.addCommand("mcePageBreak",(function(){e.insertContent(r(a(e)))}))}(e),function(e){e.ui.registry.addButton("pagebreak",{icon:"page-break",tooltip:"Page break",onAction:function(){return e.execCommand("mcePageBreak")}}),e.ui.registry.addMenuItem("pagebreak",{text:"Page break",icon:"page-break",onAction:function(){return e.execCommand("mcePageBreak")}})}(e),function(e){var n=function(e){return e.getParam("pagebreak_separator","\x3c!-- pagebreak --\x3e")}(e),o=function(){return a(e)},c=new RegExp(n.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g,(function(e){return"\\"+e})),"gi");e.on("BeforeSetContent",(function(e){e.content=e.content.replace(c,r(o()))})),e.on("PreInit",(function(){e.serializer.addNodeFilter("img",(function(a){for(var r,c,i=a.length;i--;)if((c=(r=a[i]).attr("class"))&&-1!==c.indexOf(t)){var u=r.parent;if(e.schema.getBlockElements()[u.name]&&o()){u.type=3,u.value=n,u.raw=!0,r.remove();continue}r.type=3,r.value=n,r.raw=!0}}))}))}(e),function(e){e.on("ResolveName",(function(n){"IMG"===n.target.nodeName&&e.dom.hasClass(n.target,t)&&(n.name="pagebreak")}))}(e)}))}();
//# sourceMappingURL=plugin.js.map
