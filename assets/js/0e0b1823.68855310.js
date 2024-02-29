"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[8338],{4423:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=i(4848),l=i(8453);const o={},r="API Overview",s={id:"Main Concept/API Overview",title:"API Overview",description:"Allxon Octo API adopts JSON-RPC 2.0 specification over WebSocket. To communicate with Allxon Agent, you need to create a WebSocket connection wss55688 from the plugin. Then send/receive requests in the JSON format via the API.",source:"@site/versioned_docs/version-1.1.0/Main Concept/API Overview.md",sourceDirName:"Main Concept",slug:"/Main Concept/API Overview",permalink:"/1.1.0/Main Concept/API Overview",draft:!1,unlisted:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/versioned_docs/version-1.1.0/Main Concept/API Overview.md",tags:[],version:"1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/1.1.0/Main Concept/Features"},next:{title:"Create a Plugin",permalink:"/1.1.0/Create a Plugin"}},d={},c=[{value:"About <code>v2/notifyPluginUpdate</code> API",id:"about-v2notifypluginupdate-api",level:2},{value:"Allxon Octo JSON RPC API",id:"allxon-octo-json-rpc-api",level:2},{value:"<code>v2/notifyPluginUpdate</code>",id:"v2notifypluginupdate",level:3},{value:"<code>v2/notifyPluginCommand</code>",id:"v2notifyplugincommand",level:3},{value:"<code>v2/notifyPluginCommandAck</code>",id:"v2notifyplugincommandack",level:3},{value:"<code>v2/notifyPluginState</code>",id:"v2notifypluginstate",level:3},{value:"<code>v2/notifyPluginEvent</code>",id:"v2notifypluginevent",level:3},{value:"<code>v2/notifyPluginMetric</code>",id:"v2notifypluginmetric",level:3},{value:"<code>v2/notifyPluginAlert</code>",id:"v2notifypluginalert",level:3},{value:"<code>v2/notifyPluginAlarmUpdate</code>",id:"v2notifypluginalarmupdate",level:3},{value:"<code>v2/notifyPluginConfigUpdate</code>",id:"v2notifypluginconfigupdate",level:3},{value:"Typical API Sequence Flow",id:"typical-api-sequence-flow",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"api-overview",children:"API Overview"}),"\n",(0,t.jsxs)(n.p,{children:["Allxon Octo API adopts ",(0,t.jsx)(n.a,{href:"https://www.jsonrpc.org/specification",children:"JSON-RPC 2.0"})," specification over WebSocket. To communicate with Allxon Agent, you need to create a WebSocket connection ",(0,t.jsx)(n.strong,{children:"wss://localhost:55688"})," from the plugin. Then send/receive requests in the JSON format via the API."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Each API maximum payload size is 128 KB."})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Not support ",(0,t.jsx)(n.em,{children:"JSON-RPC batch"}),"."]})}),"\n",(0,t.jsxs)(n.h2,{id:"about-v2notifypluginupdate-api",children:["About ",(0,t.jsx)(n.code,{children:"v2/notifyPluginUpdate"})," API"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"method"'})," indicates the API's type and ",(0,t.jsx)(n.code,{children:'"params"'})," -> ",(0,t.jsx)(n.code,{children:'"sdk"'})," indicates the Allxon Octo SDK version. Each JSON object under ",(0,t.jsx)(n.code,{children:'"params"'})," -> ",(0,t.jsx)(n.code,{children:'"modules"'})," corresponds to different cards on Allxon Portal."]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of JSON:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'{16-24} title="resource_dir_linux/plugin_update_template.json" showLineNumbers',children:'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginUpdate",\n  "params": {\n    "sdk": "${OCTO_SDK_VERSION}",\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "appName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "displayName": "plugIN Hello",\n    "type": "ib",\n    "version": "${PLUGIN_VERSION}",\n    "modules": [\n      {\n        "moduleName": "${PLUGIN_NAME}",\n        "displayName": "plugIN Hello",\n        "properties": [\n          {\n            "name": "current_dir",\n            "displayName": "Current Working Directory",\n            "description": "Print the current working directory",\n            "displayType": "string",\n            "value": ""\n          }\n        ],\n        "states": [\n          {\n            "name": "receive_hello",\n            "displayName": "Last Received Message",\n            "description": "Last received message from a stranger",\n            "displayType": "string"\n          }\n        ],\n        "commands": [\n          {\n            "name": "say_hello",\n            "type": "asynchronous",\n            "displayCategory": "Action",\n            "displayName": "Say Hello",\n            "description": "Say hello to a person",\n            "params": [\n              {\n                "name": "person",\n                "displayName": "Person Name",\n                "description": "Person who you wanna to say hello",\n                "displayType": "string",\n                "required": true,\n                "defaultValue": "Buzz"\n              }\n            ]\n          }\n        ],\n        "metrics": [],\n        "events": [],\n        "alarms": [\n          {\n            "name": "hello_alarm",\n            "displayCategory": "Message",\n            "displayName": "Hello alarm",\n            "description": "Trigger when someone say hello",\n            "params": []\n          }\n        ],\n        "configs": []\n      }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"For example, the highlight part of above JSON repesent Property Card on Allxon Portal:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"property",src:i(585).A+"",width:"585",height:"314"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can use the built-in macro syntax ",(0,t.jsx)(n.code,{children:"${}"})," to obtain project level information. The current available syntax is as follows: ",(0,t.jsx)(n.code,{children:"PLUGIN_NAME"}),", ",(0,t.jsx)(n.code,{children:"PLUGIN_APP_GUID"}),", ",(0,t.jsx)(n.code,{children:"PLUGIN_VERSION"}),", ",(0,t.jsx)(n.code,{children:"OCTO_SDK_VERSION"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"allxon-octo-json-rpc-api",children:"Allxon Octo JSON RPC API"}),"\n",(0,t.jsx)(n.p,{children:"After getting online to Allxon Portal, your edge device is ready to be managed on the cloud.\nHere is a brief introduction to the API functionalities:"}),"\n",(0,t.jsx)(n.h3,{id:"v2notifypluginupdate",children:(0,t.jsx)(n.code,{children:"v2/notifyPluginUpdate"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Direction"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Plugin \u2192 Allxon Agent"}),(0,t.jsxs)(n.td,{children:["The plugin initializes every card on Allxon Portal. You must call ",(0,t.jsx)(n.code,{children:"v2/notifyPluginUpdate"})," API after the WebSocket connection is established."]})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"v2notifyplugincommand",children:(0,t.jsx)(n.code,{children:"v2/notifyPluginCommand"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Direction"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Allxon Agent \u2192 Plugin"}),(0,t.jsx)(n.td,{children:"The plugin gets notified once the user triggers the command on Allxon Portal."})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"v2notifyplugincommandack",children:(0,t.jsx)(n.code,{children:"v2/notifyPluginCommandAck"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Direction"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Plugin \u2192 Allxon Agent"}),(0,t.jsxs)(n.td,{children:["After receiving ",(0,t.jsx)(n.code,{children:"v2/notifyPluginCommand"}),", the plugin sends acknowledgement of the command back to Allxon portal."]})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"v2notifypluginstate",children:(0,t.jsx)(n.code,{children:"v2/notifyPluginState"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Direction"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Plugin \u2192 Allxon Agent"}),(0,t.jsx)(n.td,{children:"The plugin updates the data on the Allxon Portal States card. This functionality is typically designed for real-time update on the current device states, e.g. network condition and power status. Allxon Portal only shows the latest data it receives and doesn\u2019t reserve such data."})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"v2notifypluginevent",children:(0,t.jsx)(n.code,{children:"v2/notifyPluginEvent"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Direction"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Plugin \u2192 Allxon Agent"}),(0,t.jsx)(n.td,{children:"The plugin updates the data on the Allxon Portal Events cCard. This functionality is typically designed for non- real-time update on device events, e.g. IO trigger event and user login event. Such data is reserved on Allxon Cloud for 90 days."})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"v2notifypluginmetric",children:(0,t.jsx)(n.code,{children:"v2/notifyPluginMetric"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Direction"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Plugin \u2192 Allxon Agent"}),(0,t.jsx)(n.td,{children:"The plugin updates data on the Allxon Portal Charts card. This functionality is typically designed for time-series data presented in a trend chart, e.g. device temperature. Such data is reserved on Allxon Cloud for 90 days."})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"v2notifypluginalert",children:(0,t.jsx)(n.code,{children:"v2/notifyPluginAlert"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Direction"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Plugin \u2192 Allxon Agent"}),(0,t.jsx)(n.td,{children:"The plugin triggers Alerts to the Allxon Portal. This functionality is typically designed for emergency data. Depending on your Allxon Portal settings, you can be notified by email, webhook, etc."})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"v2notifypluginalarmupdate",children:(0,t.jsx)(n.code,{children:"v2/notifyPluginAlarmUpdate"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Direction"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Allxon Agent \u2192 Plugin"}),(0,t.jsxs)(n.td,{children:["Plugin will be notified once the Plugin is online if there are alert settings on Allxon Portal. When you setup your alert setting on Allxon Portal, Plugin will get ",(0,t.jsx)(n.code,{children:"v2/notifyPluginAlarmUpdate"})," to synchronize alert related setting."]})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"v2notifypluginconfigupdate",children:(0,t.jsx)(n.code,{children:"v2/notifyPluginConfigUpdate"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Direction"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Allxon Agent \u2192 Plugin"}),(0,t.jsx)(n.td,{children:"If Configs is set up on Allxon Portal, the plugin gets notified once it comes online. This functionality is typically designed for configuring your device through Allxon Portal."})]})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For more details, please refer to the ",(0,t.jsx)(n.a,{href:"https://wayneliu0512.github.io/octo-developer-zone_docusaurus/API%20Reference",children:"API documentation"})]})}),"\n",(0,t.jsx)(n.h2,{id:"typical-api-sequence-flow",children:"Typical API Sequence Flow"}),"\n",(0,t.jsxs)(n.p,{children:["Here is a typical API sequence flow:\n",(0,t.jsx)(n.img,{alt:"sequence-diagram",src:i(8674).A+"",width:"449",height:"305"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Connect to Allxon Agent by Websocket."}),"\n",(0,t.jsx)(n.li,{children:"Send 'v2/notifyPluginUpdate' to initialize Allxon Portal cards."}),"\n",(0,t.jsx)(n.li,{children:"If you have set up Alert Setting on Allxon Portal, you will receive 'v2/notifyPluginAlarmUpdate'."}),"\n",(0,t.jsx)(n.li,{children:"If you have set up Configs on Allxon Portal, you will receive 'v2/notifyPluginConfigUpdate'."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8674:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/sequence-diagram-ecdbcb33b3075547e38922e43c6fb79b.png"},585:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/screenshot_property-08f4d45aa5ecf04f4e53581b059a3815.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(6540);const l={},o=t.createContext(l);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);