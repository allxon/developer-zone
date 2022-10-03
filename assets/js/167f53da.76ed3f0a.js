"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[1527],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),c=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(m.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(t),u=o,f=s["".concat(m,".").concat(u)]||s[u]||d[u]||r;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=s;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1251:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const r={},l=void 0,i={unversionedId:"Overview/Commands",id:"Overview/Commands",title:"Commands",description:"command-sequence",source:"@site/docs/Overview/Commands.md",sourceDirName:"Overview",slug:"/Overview/Commands",permalink:"/developer-zone/Overview/Commands",draft:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/docs/Overview/Commands.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"States",permalink:"/developer-zone/Overview/States"},next:{title:"Alerts",permalink:"/developer-zone/Overview/Alerts"}},m={},c=[],p={toc:c};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"command-sequence",src:t(749).Z,width:"434",height:"309"})),(0,o.kt)("p",null,"Command Cards provide a custom GUI to send command through Allxon protal. Send ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," to initialize. When you execute the Command from Allxon Portal, Plugin will receive ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommand"),", then send ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommandAck")," back to confirm the receive, finally, send  ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommandAck")," to bring execution result back to Allxon Portal."),(0,o.kt)("p",null,"Here is a example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{17-35}","{17-35}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginUpdate",\n    "params": {\n        "sdk": "${OCTO_SDK_VERSION}",\n        "appGUID": "${PLUGIN_APP_GUID}",\n        "appName": "${PLUGIN_NAME}",\n        "epoch": "",\n        "displayName": "plugIN Hello",\n        "type": "ib",\n        "version": "${PLUGIN_VERSION}",\n        "modules": [\n            {\n                "moduleName": "${PLUGIN_NAME}",\n                "displayName": "plugIN Hello",\n                "properties": [],\n                "commands": [\n                    {\n                        "name": "say_hello",\n                        "type": "asynchronous",\n                        "displayCategory": "Action",\n                        "displayName": "Say Hello",\n                        "description": "Say hello to a person",\n                        "params": [\n                            {\n                                "name": "person",\n                                "displayName": "Person Name",\n                                "description": "Person who you wanna to say hello",\n                                "displayType": "string",\n                                "required": true,\n                                "defaultValue": "Buzz"\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"command-card",src:t(3799).Z,width:"587",height:"631"})),(0,o.kt)("p",null,'After click "Execute" button, Allxon Portal will send ',(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommand")," to Plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginCommand?authorization=$argon2id$v=19$m=64,t=16,p=8$YnFaWiIoX1ckSmE9Tkp5YQ$XLS6riVCcBj/EUr5lYnJ8Q",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "moduleName": "plugin-hello",\n        "commandSource": "remote",\n        "commands": [\n            {\n                "name": "say_hello",\n                "params": [\n                    {\n                        "name": "person",\n                        "value": "Buzz"\n                    }\n                ]\n            }\n        ],\n        "commandId": "d0a0af987c17da435b2bc44dfbee8ffe90104f4f",\n        "epoch": "1664185099"\n    }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You may curious what's texts follow ",(0,o.kt)("inlineCode",{parentName:"p"},"?")," at highlight line. Octo SDK will verify this JSON is safe through these texts When you call Octo SDK ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonValidator::Verify()"),". ")),(0,o.kt)("p",null,"Once we received ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommand"),", send back ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommandAck")," with ",(0,o.kt)("inlineCode",{parentName:"p"},'"commandState": "ACCEPTED"')," to comfirm received with Allxon Portal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{10}","{10}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginCommandAck",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "epoch": "1664250407",\n        "commandId": "c96a50867715c200fbea63b5898945512afd9409",\n        "commandSource": "remote",\n        "moduleName": "plugin-hello",\n        "commandState": "ACCEPTED",\n        "commandAcks": [\n            {\n                "name": "say_hello",\n                "result": {\n                    "response": "Hello Buzz"\n                }\n            }\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"After finished your command task, send ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommandAck")," with ",(0,o.kt)("inlineCode",{parentName:"p"},'"commandState": "ACKED"')," and contain execution result back to Allxon Portal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{10}","{10}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginCommandAck",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "epoch": "1664250407",\n        "commandId": "c96a50867715c200fbea63b5898945512afd9409",\n        "commandSource": "remote",\n        "moduleName": "plugin-hello",\n        "commandState": "ACKED",\n        "commandAcks": [\n            {\n                "name": "say_hello",\n                "result": {\n                    "response": "Hello Buzz"\n                }\n            }\n        ]\n    }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There're other ",(0,o.kt)("inlineCode",{parentName:"p"},'"commandState"')," can use: ",(0,o.kt)("inlineCode",{parentName:"p"},'"REJECTED"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"ERRORED"'))),(0,o.kt)("p",null,"If everything going well, command execute dialog on Allxon Portal will show up like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"command-result",src:t(2198).Z,width:"561",height:"665"})))}d.isMDXComponent=!0},3799:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/command-card-3645fb5701aea1c328af9f9ce2f38630.png"},2198:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/command-result-588c45b65c5fd5000a802b899d867e0b.png"},749:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/command-sequence-8084c4966e0b8778ec0f42297c41c821.png"}}]);