"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[642],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),g=l,c=u["".concat(p,".").concat(g)]||u[g]||d[g]||r;return t?a.createElement(c,i(i({ref:n},m),{},{components:t})):a.createElement(c,i({ref:n},m))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1363:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(7462),l=(t(7294),t(3905));const r={},i=void 0,o={unversionedId:"Implement Features/Alerts",id:"Implement Features/Alerts",title:"Alerts",description:"alert-sequence",source:"@site/docs/Implement Features/Alerts.md",sourceDirName:"Implement Features",slug:"/Implement Features/Alerts",permalink:"/Implement Features/Alerts",draft:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/docs/Implement Features/Alerts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/Implement Features/Commands"},next:{title:"Metrics",permalink:"/Implement Features/Metrics"}},p={},s=[{value:"Tutorials",id:"tutorials",level:2},{value:"Display Type",id:"display-type",level:2},{value:"String",id:"string",level:3},{value:"Datetime",id:"datetime",level:3},{value:"Switch",id:"switch",level:3},{value:"Checkbox",id:"checkbox",level:3},{value:"List",id:"list",level:3},{value:"Temperature",id:"temperature",level:3}],m={toc:s};function d(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alert-sequence",src:t(4975).Z,width:"3196",height:"1366"})),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Alerts")," feature enables you to configure alert thresholds for the plugin to trigger alert messages to Allxon Portal. Then the Portal can send the alert message to you via email, Webhook, LINE, etc., depending on the notification channel setting on the Portal. "),(0,l.kt)("p",null,"Similar to creating other cards, you need to send ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," to initialize the ",(0,l.kt)("strong",{parentName:"p"},"Alert Settings")," card. When ",(0,l.kt)("strong",{parentName:"p"},"Alert Setting")," is changed on Allxon Portal, the plugin would receives ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlarmUpdate"),". With such configuration, whenever the alert threshold is reached, the plugin triggers ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlert")," to the Portal."),(0,l.kt)("h2",{id:"tutorials"},"Tutorials"),(0,l.kt)("p",null,"Let's look at an example of creating Alerts:"),(0,l.kt)("p",null,"First, send ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," to initialize the ",(0,l.kt)("strong",{parentName:"p"},"Alert Settings")," card. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"{17-25}","{17-25}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginUpdate",\n    "params": {\n        "sdk": "2.0.2",\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "appName": "plugin-hello",\n        "epoch": "1664259325",\n        "displayName": "plugIN Hello",\n        "type": "ib",\n        "version": "1.0.1",\n        "modules": [\n            {\n                "moduleName": "plugin-hello",\n                "displayName": "plugIN Hello",\n                "properties": [],\n                "alarms": [\n                    {\n                        "name": "hello_alarm",\n                        "displayCategory": "Message",\n                        "displayName": "Hello alarm",\n                        "description": "Trigger when someone say hello",\n                        "params": []\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,l.kt)("p",null,"Upon completion, you can see the ",(0,l.kt)("strong",{parentName:"p"},"Alert Settings")," card, as shown below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alert-card",src:t(5801).Z,width:"3364",height:"1127"})),(0,l.kt)("p",null,"At this time, the Alert is not yet set up. The Portal sends the following ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlarmUpate")," to the plugin for resting alert configuration."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Going to deprecated format")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlarmUpdate?authorization=$argon2id$v=19$m=64,t=16,p=8$Y1JmLkNDUjRkeFJ7UDBlOQ$qZPxG/iWuZTKQzbsvr86wg",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "epoch": "1664259814"\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Up coming format")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlarmUpdate?authorization=$argon2id$v=19$m=64,t=16,p=8$Y1JmLkNDUjRkeFJ7UDBlOQ$qZPxG/iWuZTKQzbsvr86wg",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "epoch": "1664259814",\n        "version": "1.0.1",\n        "modules": [\n            {\n                "moduleName": "plugin-hello",\n                "epoch": "1664259814",\n                "alarms": []\n            }\n        ]\n    }\n}\n')),(0,l.kt)("p",null,"Now you can set up the ",(0,l.kt)("strong",{parentName:"p"},"Alert Settings")," card on Allxon Portal. In this example, let\u2019s try setting up an alert and connecting it to Webhook, so the alert message is sent via Webhook. "),(0,l.kt)("p",null,"Follow the steps below:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Edit")," on the upper right corner of the card."),(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"Webhook")," icon")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alert-edit",src:t(2727).Z,width:"583",height:"316"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Choose a Webhook preset, and click ",(0,l.kt)("strong",{parentName:"li"},"Next"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alert-preset",src:t(8414).Z,width:"582",height:"411"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Save")," to complete the setting.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alert-finished",src:t(6763).Z,width:"587",height:"314"})),(0,l.kt)("p",null,"Once done, the plugin receives a new ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlarmUpdate")," as below to notify the plugin that the ",(0,l.kt)("strong",{parentName:"p"},"Alerts Settings")," has been updated."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"{12-17}","{12-17}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlarmUpdate?authorization=$argon2id$v=19$m=64,t=16,p=8$J2chRypQWmxLLGl4O04zXg$KUvzIkRhS8Ao+FYTysdSWA",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "epoch": "1664268028",\n        "version": "1.0.1",\n        "modules": [\n            {\n                "moduleName": "plugin-hello",\n                "epoch": "1664268022",\n                "alarms": [\n                    {\n                        "enabled": true,\n                        "name": "hello_alarm"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,l.kt)("p",null,"Accordingly, the plugin enables the designated alert. "),(0,l.kt)("p",null,"To test the Alert, send a ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlert"),", as shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlert",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "moduleName": "plugin-hello",\n        "epoch": "1664268861",\n        "alarms": [\n            {\n                "name": "hello_alarm",\n                "action": "trigger",\n                "time": "1664268861",\n                "message": "Hello Buzz ~"\n            }\n        ]\n    }\n}\n')),(0,l.kt)("p",null,"You should receive a message on your connected Webhook service. At the same time, Allxon Portal adds a new record to the ",(0,l.kt)("strong",{parentName:"p"},"Alert")," page of the device; all alert records are aggregated on this page."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alert-trigger",src:t(9094).Z,width:"1001",height:"944"})),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The settings of Alerts and Configs belong to the ",(0,l.kt)("strong",{parentName:"p"},"group-level"),". When the user changes the Alerts/Configs settings on the Portal, the Portal deploys the changes to all the plugins in the same device group. Then Allxon Portal displays the ",(0,l.kt)("strong",{parentName:"p"},"Alerts/Configs")," card based on the latest plugin version in the device group and stores the latest settings. "),(0,l.kt)("p",{parentName:"admonition"},"When the plugin receives the Alerts/Configs settings, it MUST check whether the settings are supported by the current plugin version. If not supported, the plugin MUST ignore the message. ")),(0,l.kt)("h2",{id:"display-type"},"Display Type"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Alert Settings")," card supports several parameter input types (i.e. displayType): ",(0,l.kt)("a",{parentName:"p",href:"#string"},"string"),", ",(0,l.kt)("a",{parentName:"p",href:"#datetime"},"datetime"),", ",(0,l.kt)("a",{parentName:"p",href:"#switch"},"switch"),", ",(0,l.kt)("a",{parentName:"p",href:"#checkbox"},"checkbox"),", ",(0,l.kt)("a",{parentName:"p",href:"#list"},"list"),", and ",(0,l.kt)("a",{parentName:"p",href:"#temperature"},"temperature"),". For how to set up these input types, see the following sections."),(0,l.kt)("h3",{id:"string"},"String"),(0,l.kt)("p",null,"The following example shows the code in ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate.json")," for displaying a text box for parameter input."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',title:'"v2/notifyPluginUpdate.json"'},'{\n    ...\n    "alarms": [ \n        {\n            "name": "alarm1",\n            "params": [\n                {\n                    "name": "stringParam",\n                    "displayType": "string",                \n                    "required": false,\n                    ...\n                },\n                ...\n            ],\n            ...\n        }\n    ],\n}\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Alert Settings")," card displays as follows:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alarm-display-type-string",src:t(8168).Z,width:"580",height:"312"})),(0,l.kt)("p",null,"When an alert is enabled, ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlarmUpdate")," carries a ",(0,l.kt)("inlineCode",{parentName:"p"},'"name"')," and a ",(0,l.kt)("inlineCode",{parentName:"p"},'"value"')," from the parameter input."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="v2/notifyPluginAlarmUpdate.json"',title:'"v2/notifyPluginAlarmUpdate.json"'},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlarmUpdate",\n    ...\n        ...\n            ...\n                "alarms": [\n                    {\n                        "name": "alarm1",\n                        "params": [\n                            {\n                                "name": "stringParam",\n                                "value": "foo"\n                            }\n                            ...\n                        ]\n                        ...\n                    }\n                    ...\n                ]\n}\n\n')),(0,l.kt)("h3",{id:"datetime"},"Datetime"),(0,l.kt)("p",null,"The following example shows the code in ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate.json")," for displaying a date/time picker for parameter input. You must define ",(0,l.kt)("inlineCode",{parentName:"p"},'"displayFormat"')," by using one of the following formats:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"YYYY-MM-DD"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"HH:MM"')," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"YYYY-MM-DD HH:MM"'))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',title:'"v2/notifyPluginUpdate.json"'},'{\n    ...\n    "alarms": [ \n        {\n            "name": "alarm1",\n            "params": [\n                {\n                    "name": "datetimeParam",\n                    "displayType": "datetime",                \n                    "displayFormat": "HH:MM",\n                    "required": false,\n                    ...\n                },\n                ...\n            ],\n            ...\n        }\n    ],\n}\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The time parameter to be sent is not a timestamp and does not contain any time zone information. The plugin executes the command of datetime parameter according to the device's time zone.")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Alert Settings")," card displays as follows:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alarm-display-type-datetime-exec",src:t(8803).Z,width:"583",height:"313"})),(0,l.kt)("p",null,"When an alarm is enabled, ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlarmUpdate")," carries a ",(0,l.kt)("inlineCode",{parentName:"p"},'"name"')," and a ",(0,l.kt)("inlineCode",{parentName:"p"},'"value"')," that follows the ",(0,l.kt)("inlineCode",{parentName:"p"},'"displayFormat"')," defined in the ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="v2/notifyPluginAlarmUpdate.json"',title:'"v2/notifyPluginAlarmUpdate.json"'},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlarmUpdate",\n    ...\n        ...\n            ...\n                "alarms": [\n                    {\n                        "name": "alarm1",\n                        "params": [\n                            {\n                                "name": "datetimeParam",\n                                "value": "06:00"\n                            }\n                            ...\n                        ]\n                        ...\n                    }\n                    ...\n                ]\n}\n')),(0,l.kt)("h3",{id:"switch"},"Switch"),(0,l.kt)("p",null,"The following example shows the code in ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate.json")," for displaying a switch toggle for parameter input.  The switch toggle is used to switch between two parameters. You must define ",(0,l.kt)("inlineCode",{parentName:"p"},'"displayValues"')," as a size 2 Array, with index 0 representing false and index 1 representing true. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',title:'"v2/notifyPluginUpdate.json"'},'{\n    ...\n    "alarms": [ \n        {\n            "name": "alarm1",\n            "params": [\n                {\n                    "name": "switchParam",\n                    "displayType": "switch",                \n                    "displayValues": [\n                        "offValue",\n                        "onValue"\n                    ],\n                    "defaultValue": "offValue",\n                    "required": false,\n                    ...\n                }\n            ],\n            ...\n        }\n    ],\n}\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Alert Settings")," card displays as follows:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alarm-display-type-switch",src:t(7790).Z,width:"588",height:"316"})),(0,l.kt)("p",null,"When an alert is enabled, ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlarmUpdate")," carries a ",(0,l.kt)("inlineCode",{parentName:"p"},'"name"')," and a ",(0,l.kt)("inlineCode",{parentName:"p"},'"value"')," that follows the ",(0,l.kt)("inlineCode",{parentName:"p"},'"displayValues"')," defined in the ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="v2/notifyPluginAlarmUpdate.json"',title:'"v2/notifyPluginAlarmUpdate.json"'},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlarmUpdate",\n    ...\n        ...\n            ...\n                "alarms": [\n                    {\n                        "name": "alarm1",\n                        "params": [\n                            {\n                                "name": "switchParam",\n                                "value": "offValue"\n                            }\n                            ...\n                        ]\n                        ...\n                    }\n                    ...\n                ]\n}\n')),(0,l.kt)("h3",{id:"checkbox"},"Checkbox"),(0,l.kt)("p",null,"The following example shows the code in ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate.json")," for displaying a checkbox for parameter input. The checkbox is used to enable or disable the parameter. You must define ",(0,l.kt)("inlineCode",{parentName:"p"},'"displayValues"')," as a size 2 Array, with index 0 representing false and index 1 representing true. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',title:'"v2/notifyPluginUpdate.json"'},'{\n    ...\n    "alarms": [ \n        {\n            "name": "alarm1",\n            "params": [\n                {\n                    "name": "checkboxParam",\n                    "displayType": "checkbox",                \n                    "displayValues": [\n                        "offValue",\n                        "onValue"\n                    ],\n                    "defaultValue": "offValue",\n                    "required": false,\n                    ...\n                }\n            ],\n            ...\n        }\n    ],\n}\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Alert Settings")," card displays as follows:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alarm-display-type-checkbox",src:t(5898).Z,width:"582",height:"308"})),(0,l.kt)("p",null,"When an alert is enabled, ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlarmUpdate")," carries a ",(0,l.kt)("inlineCode",{parentName:"p"},'"name"')," and a ",(0,l.kt)("inlineCode",{parentName:"p"},'"value"')," that follows the ",(0,l.kt)("inlineCode",{parentName:"p"},'"displayValues"')," defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="v2/notifyPluginAlarmUpdate.json"',title:'"v2/notifyPluginAlarmUpdate.json"'},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlarmUpdate",\n    ...\n        ...\n            ...\n                "alarms": [\n                    {\n                        "name": "alarm1",\n                        "params": [\n                            {\n                                "name": "checkboxParam",\n                                "value": "offValue"\n                            }\n                            ...\n                        ]\n                        ...\n                    }\n                    ...\n                ]\n}\n')),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("p",null,"The following example shows the code in ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate.json")," for displaying a dropdown list for parameter input. You must define ",(0,l.kt)("inlineCode",{parentName:"p"},'"displayValues"')," as the ",(0,l.kt)("strong",{parentName:"p"},"Array")," type."),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Alert Settings")," card displays as follows:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alarm-display-type-list",src:t(5408).Z,width:"583",height:"312"})),(0,l.kt)("p",null,"When an alert is enabled, ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlarmUpdate")," carries a ",(0,l.kt)("inlineCode",{parentName:"p"},'"name"')," and a ",(0,l.kt)("inlineCode",{parentName:"p"},'"value"')," that follows the ",(0,l.kt)("inlineCode",{parentName:"p"},'"displayValues"')," defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',title:'"v2/notifyPluginUpdate.json"'},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlarmUpdate",\n    ...\n        ...\n            ...\n                "alarms": [\n                    {\n                        "name": "alarm1",\n                        "params": [\n                            {\n                                "name": "listParam",\n                                "value": "list1"\n                            }\n                            ...\n                        ]\n                        ...\n                    }\n                    ...\n                ]\n}\n')),(0,l.kt)("h3",{id:"temperature"},"Temperature"),(0,l.kt)("p",null,"The following example shows the code in ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate.json")," for displaying a predefined temperature scale for parameter input. Users can enter temperature parameters in Fahrenheit or Celsius."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',title:'"v2/notifyPluginUpdate.json"'},'{\n    ...\n    "alarms": [ \n        {\n            "name": "alarm1",\n            "params": [\n                {\n                    "name": "temperatureParam",\n                    "displayType": "temperature",                \n                    "required": false,\n                    ...\n                }\n            ],\n            ...\n        }\n    ],\n}\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Alert Settings")," card displays as follows:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alarm-display-type-temperature",src:t(2313).Z,width:"584",height:"314"})),(0,l.kt)("p",null,"When an alarm is enabled, ",(0,l.kt)("inlineCode",{parentName:"p"},'"v2/notifyPluginAlarmUpdate"')," carries a ",(0,l.kt)("inlineCode",{parentName:"p"},'"name"')," and a ",(0,l.kt)("inlineCode",{parentName:"p"},'"value"')," from the temperature parameter input. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="v2/notifyPluginAlarmUpdate.json"',title:'"v2/notifyPluginAlarmUpdate.json"'},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlarmUpdate",\n    ...\n        ...\n            ...\n                "alarms": [\n                    {\n                        "name": "alarm1",\n                        "params": [\n                            {\n                                "name": "temperatureParam",\n                                "value": "301.15"\n                            }\n                            ...\n                        ]\n                        ...\n                    }\n                    ...\n                ]\n}\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"While the Fahrenheit and Celsius scales are used on the Portal, the temperature data sent to the plugin needs to be in ",(0,l.kt)("strong",{parentName:"p"},"Kelvin"),".")))}d.isMDXComponent=!0},5898:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/alarm-display-type-checkbox-3a2b53e3cde50070702e7abd1855d46a.png"},8803:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/alarm-display-type-datetime-exec-0d7d943fd7411acd8030f2f562a2aef4.png"},5408:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/alarm-display-type-list-95137cba464173e078c74f7f7323b3b6.png"},8168:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/alarm-display-type-string-5e9dd8dbf121de7eb5def2dfd6729468.png"},7790:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/alarm-display-type-switch-76f8ada2e55d1a154c86c0886282b5e9.png"},2313:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/alarm-display-type-temperature-03920b74170b0aa46d9fd6740dc9991c.png"},5801:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/alert-card-88e66a199df422f07d62ad2856788611.svg"},2727:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/alert-edit-b4302cfc45e808223fbbecf6948d9eea.png"},6763:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/alert-finished-6e7660d9a0e239652599a6a4d8c984e6.png"},8414:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/alert-preset-427bedac4a50f38cc918a2f973f3fe6e.png"},4975:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/alert-sequence-3fd89bbf3c39693b3b7766ae9d4a8fde.svg"},9094:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/alert-trigger-0ae0430a04ec87f2404378fdf2ea7a3a.png"}}]);