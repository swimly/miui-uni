
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/calendar/index","pages/index/index","pages/actionsheet/index","pages/notify/index","pages/noticebar/index","pages/popup/index","pages/mask/index","pages/button/index","pages/img/index","pages/checkbox/index","pages/tab/index","pages/radio/index","pages/cell/index","pages/switch/index","pages/list/index","pages/icon/index","pages/title/index","pages/input/index","pages/grid/index","pages/badge/index","pages/alert/index","pages/toast/index","pages/number/index","pages/form/index","pages/picker/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#fff","backgroundColor":"#F8F8F8"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"miui","compilerVersion":"2.8.3","entryPagePath":"pages/calendar/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/calendar/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"日历"}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":"组件"}},{"path":"/pages/actionsheet/index","meta":{},"window":{"navigationBarTitleText":"actionsheet"}},{"path":"/pages/notify/index","meta":{},"window":{"navigationBarTitleText":"notify"}},{"path":"/pages/noticebar/index","meta":{},"window":{"navigationBarTitleText":"noticebar"}},{"path":"/pages/popup/index","meta":{},"window":{"navigationBarTitleText":"popup"}},{"path":"/pages/mask/index","meta":{},"window":{"navigationBarTitleText":"mask"}},{"path":"/pages/button/index","meta":{},"window":{"navigationBarTitleText":"button"}},{"path":"/pages/img/index","meta":{},"window":{"navigationBarTitleText":"img"}},{"path":"/pages/checkbox/index","meta":{},"window":{"navigationBarTitleText":"checkbox"}},{"path":"/pages/tab/index","meta":{},"window":{"navigationBarTitleText":"tab"}},{"path":"/pages/radio/index","meta":{},"window":{"navigationBarTitleText":"radio"}},{"path":"/pages/cell/index","meta":{},"window":{"navigationBarTitleText":"cell"}},{"path":"/pages/switch/index","meta":{},"window":{"navigationBarTitleText":"switch"}},{"path":"/pages/list/index","meta":{},"window":{"navigationBarTitleText":"list"}},{"path":"/pages/icon/index","meta":{},"window":{"navigationBarTitleText":"icon"}},{"path":"/pages/title/index","meta":{},"window":{"navigationBarTitleText":"title"}},{"path":"/pages/input/index","meta":{},"window":{"navigationBarTitleText":"input"}},{"path":"/pages/grid/index","meta":{},"window":{"navigationBarTitleText":"grid"}},{"path":"/pages/badge/index","meta":{},"window":{"navigationBarTitleText":"badge"}},{"path":"/pages/alert/index","meta":{},"window":{"navigationBarTitleText":"alert"}},{"path":"/pages/toast/index","meta":{},"window":{"navigationBarTitleText":"toast"}},{"path":"/pages/number/index","meta":{},"window":{"navigationBarTitleText":"number"}},{"path":"/pages/form/index","meta":{},"window":{"navigationBarTitleText":"form"}},{"path":"/pages/picker/index","meta":{},"window":{"navigationBarTitleText":"picker"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
