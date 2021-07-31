(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[36],{169:function(e,t,a){"use strict";t.a=a.p+"static/media/logo-dark.241a4efc.svg"},294:function(e){e.exports=JSON.parse('{"name":"@uiw/react-native","version":"2.0.2","description":"UIW for React Native","main":"lib/index.js","scripts":{},"keywords":["uiw","react-native","Avatar","Badge","Button","ButtonGroup","CheckBox","Divider","Drawer","Ellipsis","Empty","Flex","Grid","Icon","Input","List","Loader","MaskLayer","MenuDropdown","Modal","Radio","Result","SegmentedControl","SelectCascader","SearchBar","Slider","Spacing","SwipeAction","Switch","Toast","Typography","WingBlank"],"license":"MIT","repository":{"type":"git","url":"https://github.com/uiwjs/react-native-uiw"},"files":["lib","src","README.md"],"dependencies":{"@babel/runtime":"7.13.10","@react-native-picker/picker":"1.16.1","@types/color":"3.0.1","@types/react-native":"0.64.0","@uiw/icons":"2.5.1","color":"4.0.0","prop-types":"15.7.2","react-native-root-siblings":"4.1.1","react-native-svg":"12.1.1","react-native-swipeout":"2.3.6"},"peerDependencies":{"react":">=16.9.0","react-native":">=0.60.0","react-native-svg":">=9.9.3"},"devDependencies":{"@babel/core":"7.14.8","@babel/preset-typescript":"7.14.5"}}')},295:function(e,t,a){e.exports={warpper:"index_warpper__2TK4-",inner:"index_inner__29ZIU",menus:"index_menus__2Ed2S",logo:"index_logo__2xmv7",title:"index_title__24_rR"}},296:function(e,t,a){e.exports={warpper:"index_warpper__2XaDC",divider:"index_divider__1crWV",inner:"index_inner__1Cw4r"}},297:function(e,t,a){e.exports={warpper:"index_warpper__1CN8i"}},781:function(e,t,a){"use strict";a.r(t);var n=a(15),i=a(6),r=a(0),c=a(27),o=a(294),s=a(295),p=a.n(s),d=a(169),m=a(12);function h(e){var t=e.showBorder,a=void 0===t||t,i=o.version||"2.0.0";return Object(m.jsx)("header",{className:p.a.warpper,style:Object(n.a)({},a?{}:{borderBottom:0,boxShadow:"initial"}),children:Object(m.jsxs)("div",{className:p.a.inner,children:[Object(m.jsxs)(c.b,{to:"/",className:p.a.logo,children:[Object(m.jsx)("img",{src:d.a,alt:"uiw logo"}),Object(m.jsxs)("span",{className:p.a.title,style:{display:"flex"},children:[Object(m.jsx)("span",{children:"React Native UIW"}),Object(m.jsxs)("span",{children:["v",i]})]})]}),Object(m.jsxs)("div",{className:p.a.menus,children:[Object(m.jsx)(c.c,{to:"/home",children:"\u9996\u9875"}),Object(m.jsx)(c.c,{to:"/docs/getting-started",children:"\u6587\u6863"}),Object(m.jsx)(c.c,{to:"/components/",children:"RN\u7ec4\u4ef6"}),Object(m.jsx)("a",{target:"__blank",href:"https://github.com/uiwjs/react-native-uiw/issues",children:"\u95ee\u9898\u53cd\u9988"}),Object(m.jsx)("a",{target:"__blank",href:"https://uiwjs.github.io",children:"Web \u7ec4\u4ef6"}),Object(m.jsx)(c.c,{to:"/team",children:"\u56e2\u961f"}),Object(m.jsx)("a",{target:"__blank",href:"https://github.com/uiwjs/react-native-uiw",children:"GitHub"})]})]})})}var l=a(296),j=a.n(l);function b(e){var t=e.data,a=void 0===t?[]:t;return Object(m.jsx)("div",{className:j.a.warpper,children:Object(m.jsx)("div",{className:j.a.inner,style:{},children:a.map((function(e,t){return e.divider?Object(m.jsx)("div",{className:j.a.divider,children:e.name},t):e.href?Object(m.jsx)("a",Object(n.a)(Object(n.a)({href:e.href},e),{},{children:e.name}),t):e.path?Object(m.jsx)(c.c,Object(n.a)(Object(n.a)({to:e.path},e),{},{children:e.name}),t):Object(m.jsx)("div",{children:"data"},t)}))})})}var u=a(297),v=a.n(u);function x(e){var t=e.data,a=e.children,n=e.path;return console.log(e,n,"/home"===n),Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(h,{showBorder:"/home"!==n}),Object(m.jsxs)("div",{className:v.a.warpper,children:[t&&t.length>0&&Object(m.jsx)(b,{data:t}),Object(m.jsx)("div",{className:v.a.content,style:{flex:1,overflow:"hidden"},children:a})]})]})}var w=[{path:"/components/about",name:"\u5173\u4e8e UIW"},{divider:!0,name:"\u901a\u7528"},{path:"/components/button",name:"Button \u6309\u94ae"},{path:"/components/icon",name:"Icon \u56fe\u6807"},{path:"/components/typography",name:"Typography \u6392\u7248"},{divider:!0,name:"Layout"},{path:"/components/divider",name:"Divider \u5206\u5272\u7ebf"},{path:"/components/flex",name:"Flex \u5e03\u5c40"},{path:"/components/spacing",name:"Spacing \u95f4\u8ddd"},{path:"/components/winblank",name:"WingBlank \u4e24\u7ffc\u7559\u767d"},{divider:!0,name:"Navigation"},{path:"/components/drawer",name:"Drawer \u62bd\u5c49"},{path:"/components/menudropdown",name:"MenuDropdown \u83dc\u5355\u4e0b\u62c9\u6309\u94ae"},{path:"/components/swipeaction",name:"SwipeAction \u6ed1\u52a8\u64cd\u4f5c\u7ec4\u4ef6"},{divider:!0,name:"Data Entry"},{path:"/components/buttongroup",name:"ButtonGroup \u6309\u94ae\u7ec4"},{path:"/components/checkbox",name:"CheckBox \u590d\u9009\u6846"},{path:"/components/input",name:"Input \u6587\u672c\u8f93\u5165"},{path:"/components/radio",name:"Radio \u5355\u9009\u6846"},{path:"/components/segmentedcontrol",name:"SegmentedControl \u5206\u6bb5\u5668"},{path:"/components/slider",name:"Slider \u6ed1\u5757\u8f93\u5165\u6761"},{path:"/components/switch",name:"Switch \u5f00\u5173"},{path:"/components/searchbar",name:"SearchBar \u6a21\u7cca\u641c\u7d20\u7ec4\u4ef6"},{path:"/components/selectcascader",name:"SelectCascader \u7ea7\u8054\u9009\u62e9"},{divider:!0,name:"Data Display"},{path:"/components/avatar",name:"Avatar \u5934\u50cf"},{path:"/components/badge",name:"Badge \u6807\u8bb0"},{path:"/components/ellipsis",name:"Ellipsis \u8d85\u51fa\u7701\u7565"},{path:"/components/empty",name:"Empty \u7a7a\u72b6\u6001"},{path:"/components/grid",name:"Grid \u5bab\u683c"},{path:"/components/list",name:"List \u5217\u8868"},{divider:!0,name:"Feedback"},{path:"/components/loader",name:"Loader \u52a0\u8f7d"},{path:"/components/modal",name:"Modal \u6a21\u6001\u6846"},{path:"/components/masklayer",name:"MaskLayer \u906e\u7f69\u5c42"},{path:"/components/result",name:"Result \u7ed3\u679c\u9875"},{path:"/components/toast",name:"Toast \u8f7b\u63d0\u793a"}],g=[{path:"/docs/getting-started",name:"\u5feb\u901f\u4e0a\u624b"},{href:"https://github.com/uiwjs/react-native-uiw/releases",target:"_blank",name:"\u66f4\u65b0\u65e5\u5fd7"}];t.default=function(e){var t=e||{},a=t.routerData,r=t.location,c=[],o=void 0;return/^(\/components)/.test(r.pathname)&&(o=w),/^(\/docs)/.test(r.pathname)&&(o=g),Object.keys(a).forEach((function(e,t){"/"===e?c.push(Object(m.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(i.a,{to:"/home"})}},t+1)):c.push(Object(m.jsx)(i.b,{exact:!0,path:e,render:function(t){var i=a[e].component;return Object(m.jsx)(i,Object(n.a)(Object(n.a)({},t),{},{isNavShow:!0}))}},t+1))})),Object(m.jsx)(x,{data:o,path:r.pathname,children:Object(m.jsx)(i.d,{children:c})})}}}]);
//# sourceMappingURL=36.45981689.chunk.js.map