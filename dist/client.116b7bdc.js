webpackJsonp([0],[function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),r=n(5),s=n.n(r);new i.a({el:"#app",render:function(t){return t(s.a)}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default={name:"app",data:function(){return{url:"",input:""}},methods:{play:function(){var t=this.input.trim();t&&(this.url=i.a.baseUrl+t)},handleReset:function(){this.input=this.url="",this.$refs.input.focus()}}}},function(t,e,n){"use strict";e.a={baseUrl:"http://www.jiexi.cx/5qiyi/5qiyi2.php?url="}},function(t,e){},,function(t,e,n){n(4),n(3);var i=n(6)(n(1),n(7),null,null);t.exports=i.exports},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("h1",[t._v("Nuxt video")]),t._v(" "),n("form",{staticClass:"pure-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"input",staticClass:"pure-input-1-2",attrs:{type:"text",placeholder:"Put video url here"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),t._v(" "),n("button",{staticClass:"pure-button button-success",attrs:{type:"button"},on:{click:t.play}},[t._v("Play")]),t._v(" "),n("button",{staticClass:"pure-button button-warning",attrs:{type:"button"},on:{click:t.handleReset}},[t._v("Reset")])]),t._v(" "),n("div",{staticClass:"iframe"},[n("iframe",{staticStyle:{width:"100%",height:"100%!important",position:"relative!important"},attrs:{src:t.url,frameborder:"0",scrolling:"no"}})],1)])},staticRenderFns:[]}},,,function(t,e,n){t.exports=n(0)}],[10]);
//# sourceMappingURL=client.116b7bdc.js.map