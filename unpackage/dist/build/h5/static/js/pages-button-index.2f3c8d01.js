(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-button-index"],{"07bc":function(t,n,r){var a=r("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* button */\n/* switch */\n/* list */\n/* title */\n/* panel */\n/* tab */\n/* checkbox */\n/* radio */\n/* input */\n/* badge */\n/* actionsheet */\n/* noticebar */\n/* alert */\n/* toast */\n/* form */\n/* picker */\n/* calenar */.hc-button[data-v-5796180c]{display:-webkit-box;display:-webkit-flex;display:flex;background:none;border:none;border-radius:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?88?%;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#333;font-size:%?32?%;-webkit-transition:.3s;transition:.3s;position:relative;overflow:hidden}.hc-button[data-v-5796180c]:after{content:"";display:block;border:%?1?% solid #e6e6e6;width:200%;height:200%;box-sizing:border-box;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(.5);transform:scale(.5);position:absolute;left:0;top:0;z-index:1;-webkit-transition:.3s;transition:.3s;border-radius:0}.hc-button.ripple[data-v-5796180c]:after{display:none}.hc-button[data-v-5796180c]:active:after{background-color:rgba(0,0,0,.05)}.hc-button.conner[data-v-5796180c]{border-radius:%?8?%}.hc-button.conner[data-v-5796180c]:after{border-radius:%?16?%}.hc-button.rounder[data-v-5796180c]{border-radius:%?44?%}.hc-button.rounder[data-v-5796180c]:after{border-radius:%?88?%}.hc-button.mini[data-v-5796180c]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;height:%?57.2?%;padding:0 %?13.2?%;font-size:%?30.4?%}.hc-button.small[data-v-5796180c]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;height:%?70.4?%;padding:0 %?26.4?%;font-size:%?32?%}.hc-button.medium[data-v-5796180c]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;height:%?79.2?%;padding:0 %?35.2?%;font-size:%?32?%}.hc-button__label[data-v-5796180c]{font-size:inherit;position:relative;z-index:10}.hc-button__icon[data-v-5796180c]{margin-right:%?19.2?%}.hc-button__ripple[data-v-5796180c]{position:absolute;z-index:0;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);opacity:0}.hc-button__ripple.active[data-v-5796180c]{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;opacity:1}.hc-button.primary[data-v-5796180c]{background-color:#007aff;color:#fff}.hc-button.primary[data-v-5796180c]:active:after{background-color:#006ee6}.hc-button.primary[data-v-5796180c]:after{border-color:rgba(0,122,255,.2)}.hc-button.primary.plain[data-v-5796180c]{background-color:rgba(0,122,255,.1);color:rgba(0,122,255,.8)}.hc-button.primary.plain[data-v-5796180c]:active:after{background-color:rgba(0,110,230,.1)}.hc-button.primary.plain[data-v-5796180c]:after{border-color:rgba(0,122,255,.2)}.hc-button.primary.light[data-v-5796180c]{background-color:rgba(0,122,255,.1);color:rgba(0,122,255,.8)}.hc-button.primary.light[data-v-5796180c]:active:after{background-color:rgba(0,110,230,.1)}.hc-button.primary.light[data-v-5796180c]:after{border-color:transparent}.hc-button.primary.outline[data-v-5796180c]{background-color:rgba(0,122,255,0);color:rgba(0,122,255,.8)}.hc-button.primary.outline[data-v-5796180c]:active:after{background-color:rgba(0,110,230,.1)}.hc-button.primary.outline[data-v-5796180c]:after{border-color:rgba(0,122,255,.2)}.hc-button.warning[data-v-5796180c]{background-color:#f0ad4e;color:#fff}.hc-button.warning[data-v-5796180c]:active:after{background-color:#eea236}.hc-button.warning[data-v-5796180c]:after{border-color:rgba(240,173,78,.2)}.hc-button.warning.plain[data-v-5796180c]{background-color:rgba(240,173,78,.1);color:rgba(240,173,78,.8)}.hc-button.warning.plain[data-v-5796180c]:active:after{background-color:rgba(238,162,54,.1)}.hc-button.warning.plain[data-v-5796180c]:after{border-color:rgba(240,173,78,.2)}.hc-button.warning.light[data-v-5796180c]{background-color:rgba(240,173,78,.1);color:rgba(240,173,78,.8)}.hc-button.warning.light[data-v-5796180c]:active:after{background-color:rgba(238,162,54,.1)}.hc-button.warning.light[data-v-5796180c]:after{border-color:transparent}.hc-button.warning.outline[data-v-5796180c]{background-color:rgba(240,173,78,0);color:rgba(240,173,78,.8)}.hc-button.warning.outline[data-v-5796180c]:active:after{background-color:rgba(238,162,54,.1)}.hc-button.warning.outline[data-v-5796180c]:after{border-color:rgba(240,173,78,.2)}.hc-button.success[data-v-5796180c]{background-color:#4cd964;color:#fff}.hc-button.success[data-v-5796180c]:active:after{background-color:#37d552}.hc-button.success[data-v-5796180c]:after{border-color:rgba(76,217,100,.2)}.hc-button.success.plain[data-v-5796180c]{background-color:rgba(76,217,100,.1);color:rgba(76,217,100,.8)}.hc-button.success.plain[data-v-5796180c]:active:after{background-color:rgba(55,213,82,.1)}.hc-button.success.plain[data-v-5796180c]:after{border-color:rgba(76,217,100,.2)}.hc-button.success.light[data-v-5796180c]{background-color:rgba(76,217,100,.1);color:rgba(76,217,100,.8)}.hc-button.success.light[data-v-5796180c]:active:after{background-color:rgba(55,213,82,.1)}.hc-button.success.light[data-v-5796180c]:after{border-color:transparent}.hc-button.success.outline[data-v-5796180c]{background-color:rgba(76,217,100,0);color:rgba(76,217,100,.8)}.hc-button.success.outline[data-v-5796180c]:active:after{background-color:rgba(55,213,82,.1)}.hc-button.success.outline[data-v-5796180c]:after{border-color:rgba(76,217,100,.2)}.hc-button.danger[data-v-5796180c]{background-color:#dd524d;color:#fff}.hc-button.danger[data-v-5796180c]:active:after{background-color:#d93d38}.hc-button.danger[data-v-5796180c]:after{border-color:rgba(221,82,77,.2)}.hc-button.danger.plain[data-v-5796180c]{background-color:rgba(221,82,77,.1);color:rgba(221,82,77,.8)}.hc-button.danger.plain[data-v-5796180c]:active:after{background-color:rgba(217,61,56,.1)}.hc-button.danger.plain[data-v-5796180c]:after{border-color:rgba(221,82,77,.2)}.hc-button.danger.light[data-v-5796180c]{background-color:rgba(221,82,77,.1);color:rgba(221,82,77,.8)}.hc-button.danger.light[data-v-5796180c]:active:after{background-color:rgba(217,61,56,.1)}.hc-button.danger.light[data-v-5796180c]:after{border-color:transparent}.hc-button.danger.outline[data-v-5796180c]{background-color:rgba(221,82,77,0);color:rgba(221,82,77,.8)}.hc-button.danger.outline[data-v-5796180c]:active:after{background-color:rgba(217,61,56,.1)}.hc-button.danger.outline[data-v-5796180c]:after{border-color:rgba(221,82,77,.2)}',""]),t.exports=n},"0a62":function(t,n,r){var a=r("07bc");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=r("4f06").default;e("e75970f8",a,!0,{sourceMap:!1,shadowMode:!1})},"208a":function(t,n,r){"use strict";r.r(n);var a=r("9b00"),e=r("c4c9");for(var o in e)"default"!==o&&function(t){r.d(n,t,(function(){return e[t]}))}(o);var i,c=r("f0c5"),l=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=l.exports},5390:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{check1:!1,check2:!0,style:{marginBottom:"20rpx"}}},onLoad:function(){},methods:{}};n.default=a},"9b00":function(t,n,r){"use strict";var a={hcPage:r("464e").default,hcPanel:r("1442").default,hcTitle:r("ff1f").default,hcButton:r("a1f5").default},e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("hc-page",[r("hc-panel",[r("hc-title",[t._v("普通按钮")]),r("hc-button",{attrs:{margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{type:"primary",margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{type:"warning",margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{type:"success",margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{type:"danger",margin:"0 0 20rpx 0"}},[t._v("按钮")])],1),r("hc-panel",[r("hc-title",[t._v("水波纹")]),r("hc-button",{attrs:{type:"primary",ripple:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")])],1),r("hc-panel",[r("hc-title",[t._v("开放功能")]),r("hc-button",{attrs:{type:"primary",outline:!0,margin:"0 0 20rpx 0","open-type":"getPhoneNumber"}},[t._v("获取手机号码")]),r("hc-button",{attrs:{type:"primary",outline:!0,margin:"0 0 20rpx 0","open-type":"getUserInfo"}},[t._v("获取用户信息")]),r("hc-button",{attrs:{type:"primary",outline:!0,margin:"0 0 20rpx 0","open-type":"launchApp"}},[t._v("打开app")]),r("hc-button",{attrs:{type:"primary",outline:!0,margin:"0 0 20rpx 0","open-type":"openSetting"}},[t._v("打开设置")])],1),r("hc-panel",[r("hc-title",[t._v("加载中")]),r("hc-button",{attrs:{loading:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{loading:!0,type:"primary",margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{loading:!0,type:"primary",plain:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{loading:!0,type:"primary",light:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{loading:!0,type:"primary",outline:!0,size:"small",margin:"0 0 20rpx 0"}},[t._v("按钮")])],1),r("hc-panel",[r("hc-title",[t._v("不同弧度")]),r("hc-button",{attrs:{conner:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{rounder:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{conner:!0,icon:"shuaxin",type:"primary",margin:"0 0 20rpx 0"}},[t._v("按钮")])],1),r("hc-panel",[r("hc-title",[t._v("带图标")]),r("hc-button",{attrs:{conner:!0,icon:"aixin",margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{rounder:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{conner:!0,icon:"shuaxin",type:"primary",margin:"0 0 20rpx 0"}},[t._v("按钮")])],1),r("hc-panel",[r("hc-title",[t._v("朴素按钮")]),r("hc-button",{attrs:{type:"primary",plain:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{type:"warning",plain:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{type:"success",plain:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{type:"danger",plain:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")])],1),r("hc-panel",[r("hc-title",[t._v("简洁按钮")]),r("hc-button",{attrs:{type:"primary",light:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{type:"warning",light:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{type:"success",light:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{type:"danger",light:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")])],1),r("hc-panel",[r("hc-title",[t._v("线条按钮")]),r("hc-button",{attrs:{type:"primary",outline:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{type:"warning",outline:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{type:"success",outline:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")]),r("hc-button",{attrs:{type:"danger",outline:!0,margin:"0 0 20rpx 0"}},[t._v("按钮")])],1),r("hc-panel",[r("hc-title",[t._v("不同尺寸")]),r("hc-button",{attrs:{size:"mini"}},[t._v("mini按钮")]),r("hc-button",{attrs:{size:"small",conner:!0,type:"danger",plain:!0}},[t._v("mini按钮")]),r("hc-button",{attrs:{size:"medium"}},[t._v("mini按钮")])],1)],1)},o=[];r.d(n,"b",(function(){return e})),r.d(n,"c",(function(){return o})),r.d(n,"a",(function(){return a}))},a1f5:function(t,n,r){"use strict";r.r(n);var a=r("ba8b"),e=r("da5c");for(var o in e)"default"!==o&&function(t){r.d(n,t,(function(){return e[t]}))}(o);r("af44");var i,c=r("f0c5"),l=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,"5796180c",null,!1,a["a"],i);n["default"]=l.exports},af44:function(t,n,r){"use strict";var a=r("0a62"),e=r.n(a);e.a},ba8b:function(t,n,r){"use strict";var a={hcIcon:r("626d").default},e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-uni-button",{class:["hc-button",t.type,t.size,{conner:t.conner,rounder:t.rounder,plain:t.plain,light:t.light,outline:t.outline,ripple:t.ripple}],style:{margin:t.margin},attrs:{"open-type":t.openType,"form-type":t.formType,"app-parameter":t.appParameter},on:{getphonenumber:function(n){arguments[0]=n=t.$handleEvent(n),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(n){arguments[0]=n=t.$handleEvent(n),t.getuserinfo.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.error.apply(void 0,arguments)},opensetting:function(n){arguments[0]=n=t.$handleEvent(n),t.opensetting.apply(void 0,arguments)},launchapp:function(n){arguments[0]=n=t.$handleEvent(n),t.launchapp.apply(void 0,arguments)},click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.onClick(n)}}},[t.icon||t.loading?r("v-uni-view",{staticClass:"hc-button__icon"},[t._t("icon",[r("hc-icon",{attrs:{name:t.icons,spin:t.loading}})])],2):t._e(),r("v-uni-text",{staticClass:"hc-button__label"},[t._t("default")],2),t.ripple?r("v-uni-view",{class:["hc-button__ripple",{active:t.active}],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.rippleSize+"px",height:t.rippleSize+"px",backgroundColor:t.rippleColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],1)},o=[];r.d(n,"b",(function(){return e})),r.d(n,"c",(function(){return o})),r.d(n,"a",(function(){return a}))},bf59:function(t,n,r){"use strict";var a=r("ee27");r("a9e3"),r("d3b7"),r("ac1f"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a(r("626d")),o={name:"hc-button",components:{HCIcon:e.default},computed:{icons:function(){return this.loading?this.loadingIcon:this.icon}},props:{margin:{type:String},icon:{type:String},type:{type:String},conner:{type:Boolean},rounder:{type:Boolean},plain:{type:Boolean},light:{type:Boolean},outline:{type:Boolean},size:{type:String},styles:{type:Object},loading:{type:Boolean},loadingIcon:{type:String,default:"shuaxin"},ripple:{type:Boolean},rippleColor:{type:String},rippleSize:{type:Number,default:120},openType:{type:String},formType:{type:String},appParameter:{type:Boolean}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},active:!1}},methods:{onClick:function(t){this.ripple&&(this.active=!1,this.$nextTick((function(){this.getWaveQuery(t)}))),this.$emit("click",t)},getWaveQuery:function(t){var n=this;this.getElQuery().then((function(r){var a=r[0];if(a.width&&a.width&&(a.targetWidth=a.height>a.width?a.height:a.width,a.targetWidth)){n.fields=a;var e="",o="";e=t.touches[0].clientX,o=t.touches[0].clientY,console.log(e,o,a.top,a.left,a.targetWidth),n.rippleTop=o-a.top,n.rippleLeft=e-a.left,n.$nextTick((function(){n.active=!0,setTimeout((function(){n.active=!1}),300)}))}}))},getElQuery:function(){var t=this;return new Promise((function(n){var r="";r=uni.createSelectorQuery().in(t),r.select(".hc-button").boundingClientRect(),r.exec((function(t){n(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};n.default=o},c4c9:function(t,n,r){"use strict";r.r(n);var a=r("5390"),e=r.n(a);for(var o in a)"default"!==o&&function(t){r.d(n,t,(function(){return a[t]}))}(o);n["default"]=e.a},da5c:function(t,n,r){"use strict";r.r(n);var a=r("bf59"),e=r.n(a);for(var o in a)"default"!==o&&function(t){r.d(n,t,(function(){return a[t]}))}(o);n["default"]=e.a}}]);