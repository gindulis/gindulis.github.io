(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(t,e,n){var content=n(161);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("2632789e",content,!0,{sourceMap:!1})},153:function(t,e,n){var content=n(163);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("6759f5ab",content,!0,{sourceMap:!1})},160:function(t,e,n){"use strict";var r=n(152);n.n(r).a},161:function(t,e,n){(t.exports=n(51)(!1)).push([t.i,"#myCanvas{position:absolute;top:0;left:0;z-index:1}",""])},162:function(t,e,n){"use strict";var r=n(153);n.n(r).a},163:function(t,e,n){(t.exports=n(51)(!1)).push([t.i,"#banner{position:relative;z-index:0;background-image:linear-gradient(-180deg,#0b0c0d,#535b93)}.fontWeight{font-weight:700}#banner-text,#main{position:relative;z-index:2}",""])},164:function(t,e,n){"use strict";n.r(e);var r={mounted:function(){var t,canvas=window.document.getElementById("myCanvas");canvas.width=document.getElementById("banner").offsetWidth,canvas.height=document.getElementById("banner").offsetHeight;var e,n,r,o,l,c,m,v=canvas.getContext("2d"),d={x:0,y:0,vx:0,vy:0,direction:1,threshold:100,type:"mouse"},h=30;function main(){canvas.width=document.getElementById("banner").offsetWidth,canvas.height=document.getElementById("banner").offsetHeight,canvas.width>1200&&(n=1,r=50,o=150),canvas.width<1200&&(n=1,r=50,o=75),canvas.width<600&&(n=1,r=25,o=30),e=[];for(var i=0;i<r;i++){l=_(.3),c=_(.3),canvas.width<1200&&(l=_(.1),c=_(.1)),canvas.width<600&&(l=_(.03),c=_(.03));var t={x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:l,vy:c,direction:Math.random()>.5?1:-1};e.push(t)}v.fillStyle="white"}function animate(){v.clearRect(0,0,canvas.width,canvas.height);for(var i=0;i<r;i++){var l=e[i];v.fillRect(l.x-n/2,l.y-n/2,n,n);for(var c=0;c<r;c++)if(i!=c){var m=e[c],_=Math.abs(l.x-m.x),y=Math.abs(l.y-m.y);if(_<o&&y<o){v.lineWidth=.02;var w=400-Math.floor(_+y);v.strokeStyle="rgb("+w+","+w+","+w+")",line(l,m)}}f(l.x,l.y,d.x,d.y,d.threshold)&&(l.x=l.x+(l.x-d.x)/100,l.y=l.y+(l.y-d.y)/100),l.x=l.x+l.direction*l.vx,l.y=l.y+l.direction*l.vy,(l.x>canvas.width-n||l.x<n)&&(l.vx=-l.vx),(l.y>canvas.height-n||l.y<n)&&(l.vy=-l.vy)}setTimeout((function(){t=window.requestAnimationFrame(animate)}),1e3/h)}function line(t,e){v.beginPath(),v.moveTo(t.x,t.y),v.lineTo(e.x,e.y),v.stroke()}function f(a,b,t,e,n){return(a-t)*(a-t)+(b-e)*(b-e)<(n*=n)}function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.3;return Math.random()*(t-.001)+.001}main(),animate(),window.addEventListener("resize",(function(){clearTimeout(m),m=setTimeout((function(){cancelAnimationFrame(t),main(),animate()}),100)}),!0),window.addEventListener("mousemove",(function(t){t=t||window.event;d.x=t.pageX,d.y=t.pageY}))}},o=(n(160),n(17)),l={components:{BannerAnimation:Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:"myCanvas"}})}),[],!1,null,null,null).exports},asyncData:function(t){return{baseUrl:t.env.baseUrl}},fetch:function(){},head:function(){return{bodyAttrs:{class:"landing is-preload"}}}},c=(n(162),Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{attrs:{id:"banner"}},[n("banner-animation"),t._v(" "),n("div",{attrs:{id:"banner-text"}},[t._m(0),t._v(" "),n("p",[t._v("Where your project becomes reality")]),t._v(" "),n("ul",{staticClass:"actions special"},[n("li",[n("a",{staticClass:"button primary",attrs:{href:t.baseUrl+"/generic"}},[t._v("About Us")])]),t._v(" "),n("li",[n("a",{staticClass:"button",attrs:{href:t.baseUrl+"/contact"}},[t._v("Contact us")])])])])],1),t._v(" "),n("section",{staticClass:"container",attrs:{id:"main"}},[n("section",{staticClass:"box special"},[t._m(1),t._v(" "),n("span",{staticClass:"image featured"},[n("img",{attrs:{src:t.baseUrl+"/images/business-and-consulting3-banner.jpg",alt:""}})])]),t._v(" "),n("section",{staticClass:"box special features"},[n("div",{staticClass:"features-row"},[n("section",[n("img",{attrs:{width:"80",src:t.baseUrl+"/icons/application_development.svg"}}),t._v(" "),n("h3",[t._v("Application development")]),t._v(" "),n("p",[t._v("Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.")])]),t._v(" "),n("section",[n("img",{attrs:{width:"80",src:t.baseUrl+"/icons/consulting_services.svg"}}),t._v(" "),n("h3",[t._v("Consulting services")]),t._v(" "),n("p",[t._v("Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.")])])]),t._v(" "),n("div",{staticClass:"features-row"},[n("section",[n("img",{attrs:{width:"80",src:t.baseUrl+"/icons/our_services.svg"}}),t._v(" "),n("h3",[t._v("Our Services")]),t._v(" "),n("p",[t._v("Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.")])]),t._v(" "),n("section",[n("img",{attrs:{width:"80",src:t.baseUrl+"/icons/training.svg"}}),t._v(" "),n("h3",[t._v("Training")]),t._v(" "),n("p",[t._v("Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.")])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 col-12-narrower"},[n("section",{staticClass:"box special"},[n("span",{staticClass:"image featured"},[n("img",{attrs:{src:t.baseUrl+"/images/business-and-consulting1-mini.jpg",alt:""}})]),t._v(" "),n("h3",[t._v("Sed lorem adipiscing")]),t._v(" "),n("p",[t._v("Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.")]),t._v(" "),t._m(2)])]),t._v(" "),n("div",{staticClass:"col-6 col-12-narrower"},[n("section",{staticClass:"box special"},[n("span",{staticClass:"image featured"},[n("img",{attrs:{src:t.baseUrl+"/images/business-and-consulting4-mini.jpg",alt:""}})]),t._v(" "),n("h3",[t._v("Accumsan integer")]),t._v(" "),n("p",[t._v("Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.")]),t._v(" "),t._m(3)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[e("span",{staticClass:"fontWeight"},[this._v("Paro")]),this._v("Digital")])},function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"major"},[e("h2",[this._v("\n          Develop and deliver your digital vision with us\n        ")]),this._v(" "),e("p",[this._v("\n          We are a digital consulting and software development boutique\n          "),e("br"),this._v("house developing custom solutions backed by cutting edge technology.\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"actions special"},[e("li",[e("a",{staticClass:"button alt",attrs:{href:"#"}},[this._v("Learn More")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"actions special"},[e("li",[e("a",{staticClass:"button alt",attrs:{href:"#"}},[this._v("Learn More")])])])}],!1,null,null,null));e.default=c.exports}}]);