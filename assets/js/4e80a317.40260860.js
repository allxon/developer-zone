"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[9986],{3077:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(4848),l=t(8453);const o={},s=void 0,r={id:"Overview/Alerts",title:"Alerts",description:"alert-sequence",source:"@site/versioned_docs/version-1.1.0/Overview/Alerts.md",sourceDirName:"Overview",slug:"/Overview/Alerts",permalink:"/1.1.0/Overview/Alerts",draft:!1,unlisted:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/versioned_docs/version-1.1.0/Overview/Alerts.md",tags:[],version:"1.1.0",frontMatter:{}},i={},d=[];function c(e){const n={code:"code",img:"img",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alert-sequence",src:t(7703).A+"",width:"445",height:"282"})}),"\n",(0,a.jsxs)(n.p,{children:["Alert can bring your alert message up to Allxon Portal, then Allxon Portal can tranfer message to your email, webhook, LINE ..., depend on your setting on Allxon Portal. Just like other Cards, send ",(0,a.jsx)(n.code,{children:"v2/notifyPluginUpdate"})," to initialize Alert Card. If you have Alert setting on Allxon Portal, you will get ",(0,a.jsx)(n.code,{children:"v2/notifyPluginAlarmUpdate"})," after sending ",(0,a.jsx)(n.code,{children:"v2/notifPluginUpdate"}),". After that, you can send ",(0,a.jsx)(n.code,{children:"v2/notifyPluginAlert"})," whenever you wanna trigger Alert."]}),"\n",(0,a.jsx)(n.p,{children:"Let's take a look at the example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:"{17-25}",children:'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginUpdate",\n    "params": {\n        "sdk": "2.0.2",\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "appName": "plugin-hello",\n        "epoch": "1664259325",\n        "displayName": "plugIN Hello",\n        "type": "ib",\n        "version": "1.0.1",\n        "modules": [\n            {\n                "moduleName": "plugin-hello",\n                "displayName": "plugIN Hello",\n                "properties": [],\n                "alarms": [\n                    {\n                        "name": "hello_alarm",\n                        "displayCategory": "Message",\n                        "displayName": "Hello alarm",\n                        "description": "Trigger when someone say hello",\n                        "params": []\n                    }\n                ]\n            }\n        ]\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["After sending ",(0,a.jsx)(n.code,{children:"v2/notifyPluginUpdate"}),", Alert Card will look like the image below."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alert-card",src:t(3602).A+"",width:"586",height:"313"})}),"\n",(0,a.jsxs)(n.p,{children:["You may receive ",(0,a.jsx)(n.code,{children:"v2/notifyPluginAlarmUpate"})," depend on your setting on Allxon Portal like the image below."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlarmUpdate?authorization=$argon2id$v=19$m=64,t=16,p=8$Y1JmLkNDUjRkeFJ7UDBlOQ$qZPxG/iWuZTKQzbsvr86wg",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "epoch": "1664259814"\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:'Let\'s setting Alert Card on Allxon Portal to connect a webhook. Click "Edit" -> "webhook icon" -> choose a webhook preset -> "Next" -> "Save".'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alert-edit",src:t(1388).A+"",width:"583",height:"316"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alert-preset",src:t(4021).A+"",width:"628",height:"443"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alert-finished",src:t(5382).A+"",width:"587",height:"314"})}),"\n",(0,a.jsxs)(n.p,{children:["After setting, Plugin should received new ",(0,a.jsx)(n.code,{children:"v2/notifyPluginAlarmUpdate"})," below to notify Plugin that Alarm setting updated."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:"{12-17}",children:'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlarmUpdate?authorization=$argon2id$v=19$m=64,t=16,p=8$J2chRypQWmxLLGl4O04zXg$KUvzIkRhS8Ao+FYTysdSWA",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "epoch": "1664268028",\n        "version": "1.0.1",\n        "modules": [\n            {\n                "moduleName": "plugin-hello",\n                "epoch": "1664268022",\n                "alarms": [\n                    {\n                        "enabled": true,\n                        "name": "hello_alarm"\n                    }\n                ]\n            }\n        ]\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This can tell Plugin which alert should be enabled. Finally, try to send a ",(0,a.jsx)(n.code,{children:"v2/notifyPluginAlert"})," below to test Alert function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlert",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "moduleName": "plugin-hello",\n        "epoch": "1664268861",\n        "alarms": [\n            {\n                "name": "hello_alarm",\n                "action": "trigger",\n                "time": "1664268861",\n                "message": "Hello Buzz ~"\n            }\n        ]\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"And you should received message on your connected webhook service. At the same time, Allxon Portal add a new record on Alert page."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alert-trigger",src:t(3926).A+"",width:"1001",height:"944"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},3602:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/alert-card-95859e209dc0ba855284e6f1d28bf089.png"},1388:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/alert-edit-b4302cfc45e808223fbbecf6948d9eea.png"},5382:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/alert-finished-6e7660d9a0e239652599a6a4d8c984e6.png"},4021:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/alert-preset-9d50f199949cd9f16c24ca2541843fb0.png"},7703:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/alert-sequence-706070dca9d8414659188e8ef2bae51d.png"},3926:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/alert-trigger-0ae0430a04ec87f2404378fdf2ea7a3a.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(6540);const l={},o=a.createContext(l);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);