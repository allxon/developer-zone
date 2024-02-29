"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[5311],{7718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(4848),l=t(8453);const o={},r="Introduction",s={id:"Overview/Introduction",title:"Introduction",description:"allxoninfrasturcture",source:"@site/versioned_docs/version-1.1.0/Overview/Introduction.md",sourceDirName:"Overview",slug:"/Overview/Introduction",permalink:"/1.1.0/Overview/Introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/versioned_docs/version-1.1.0/Overview/Introduction.md",tags:[],version:"1.1.0",frontMatter:{}},d={},c=[{value:"Secure Data",id:"secure-data",level:2},{value:"How to get Plugin online",id:"how-to-get-plugin-online",level:2},{value:"Take a Look in <code>v2/notifyPluginUpdate</code> API",id:"take-a-look-in-v2notifypluginupdate-api",level:2},{value:"Octo JSON RPC API",id:"octo-json-rpc-api",level:2},{value:"<code>v2/notifyPluginUpdate</code>",id:"v2notifypluginupdate",level:3},{value:"<code>v2/notifyPluginCommand</code>",id:"v2notifyplugincommand",level:3},{value:"<code>v2/notifyPluginCommandAck</code>",id:"v2notifyplugincommandack",level:3},{value:"<code>v2/notifyPluginState</code>",id:"v2notifypluginstate",level:3},{value:"<code>v2/notifyPluginEvent</code>",id:"v2notifypluginevent",level:3},{value:"<code>v2/notifyPluginMetric</code>",id:"v2notifypluginmetric",level:3},{value:"<code>v2/notifyPluginAlert</code>",id:"v2notifypluginalert",level:3},{value:"<code>v2/notifyPluginAlarmUpdate</code>",id:"v2notifypluginalarmupdate",level:3},{value:"<code>v2/notifyPluginConfigUpdate</code>",id:"v2notifypluginconfigupdate",level:3},{value:"Typical API Sequence Flow",id:"typical-api-sequence-flow",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"allxon_infrasturcture",src:t(5432).A+""})}),"\n",(0,i.jsxs)(n.p,{children:["This picture show the Allxon infrastructure a overview. Each Plugin communicate with Allxon Agent through ",(0,i.jsx)(n.a,{href:"https://www.jsonrpc.org/specification",children:"JSON-RPC"})," Websocket, and Allxon Agent like a bridge to bring JSON between Allxon cloud and Plugin."]}),"\n",(0,i.jsx)(n.h2,{id:"secure-data",children:"Secure Data"}),"\n",(0,i.jsx)(n.p,{children:"Octo SDK use Plugin Credential help you to verify JSON from Allxon Agent, and help you to sign JSON to Allxon Agent."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"security",src:t(9114).A+""})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <string>\n#include "json_validator.h"\n\nint main(int argc, char **argv)\n{\n    // notifyPluginUpdate json template\n    std::string json_content = "{\\"jsonrpc\\": \\"2.0\\", \\"method\\": \\"v2/notifyPluginUpdate\\"...}";\n    std::string PLUGIN_NAME = "my_plugin_name";\n    std::string PLUGIN_APP_GUID = "my_plugin_app_guid";\n    std::string PLUGIN_ACCESS_KEY = "my_plugin_access_key";\n    std::string PLUGIN_VERSION = "my_plugin_version";\n\n    auto json_validator = JsonValidator(PLUGIN_NAME, PLUGIN_APP_GUID,\n                                        PLUGIN_ACCESS_KEY, PLUGIN_VERSION,\n                                        json_content);\n\n    std::string other_plugin_api_json_content;\n    if (json_validator.Sign(other_plugin_api_json_content))\n    {\n        // if sign success, you can send it through websocket\n        // e.g.\n        // enpoint.send(other_plugin_api_json_content);\n    }\n\n    if (json_validator.Verify(other_plugin_api_json_content))\n    {\n        // if verify success, means json content is safe, you can read it\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"how-to-get-plugin-online",children:"How to get Plugin online"}),"\n",(0,i.jsxs)(n.p,{children:["Let's take a look at ",(0,i.jsx)(n.a,{href:"https://github.com/allxon/plugIN-hello",children:"Plugin hello"})," source code, first connect to Allxon Agent Websocket server ",(0,i.jsx)(n.code,{children:'"wss://127.0.0.1:55688"'}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'{19} title="src/main.cpp"',children:'// ...\nint main(int argc, char **argv)\n{\n    if (argc == 1)\n    {\n        std::cout << "Please provide a plugin install directory." << std::endl;\n        return 1;\n    }\n    else if (argc > 2)\n    {\n        std::cout << "Wrong arguments. Usage: device_plugin [plugin install directory]" << std::endl;\n        return 1;\n    }\n    Util::plugin_install_dir = std::string(argv[1]);\n    auto np_update_json = Util::getJsonFromFile(Util::plugin_install_dir + "/plugin_update_template.json");\n    auto json_validator = std::make_shared<JsonValidator>(PLUGIN_NAME, PLUGIN_APP_GUID,\n                                                          PLUGIN_ACCESS_KEY, PLUGIN_VERSION,\n                                                          np_update_json);\n    WebSocketClient web_client(json_validator, "wss://127.0.0.1:55688");\n    web_client.RunSendingLoop();\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Octo SDK only provide JSON encrypt and decrypt functionality. You can use whatever websocket library you like."})}),"\n",(0,i.jsxs)(n.p,{children:["Next, Send a ",(0,i.jsx)(n.code,{children:"v2/notifyPluginUpdate"})," Octo JSON-RPC API to initailize every Cards on Allxon Portal."]}),"\n",(0,i.jsxs)(n.p,{children:["Check line 5, we load a ",(0,i.jsx)(n.code,{children:"v2/notifyPluginUpdate"})," API payload from ",(0,i.jsx)(n.code,{children:"plugin_update_template.json"}),", which locate at ",(0,i.jsx)(n.code,{children:"resource_dir_linux/plugin_update_template.json"}),". Next sign the JSON (line 18) and send to Allxon Agent (line 23)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'{5,18,23} title="src/websocket_client.cpp" showLineNumbers',children:'// ...\nvoid WebSocketClient::SendNotifyPluginUpdate()\n{\n    std::cout << "SendNotifyPluginUpdate" << std::endl;\n    std::string notify_plugin_update = Util::getJsonFromFile(Util::plugin_install_dir + "/plugin_update_template.json");\n    auto np_update_cjson = cJSON_Parse(notify_plugin_update.c_str());\n    auto params_cjson = cJSON_GetObjectItemCaseSensitive(np_update_cjson, "params");\n    auto modules_cjson = cJSON_GetObjectItemCaseSensitive(params_cjson, "modules");\n    auto module_cjson = cJSON_GetArrayItem(modules_cjson, 0);\n    auto properties_cjson = cJSON_GetObjectItemCaseSensitive(module_cjson, "properties");\n    auto property_cjson = cJSON_GetArrayItem(properties_cjson, 0);\n    auto property_value_cjson = cJSON_GetObjectItemCaseSensitive(property_cjson, "value");\n    cJSON_SetValuestring(property_value_cjson, Util::plugin_install_dir.c_str());\n    auto output_char = cJSON_Print(np_update_cjson);\n    std::string output_string(output_char);\n    delete output_char;\n    cJSON_Delete(np_update_cjson);\n    if (!m_json_validator->Sign(output_string))\n    {\n        std::cout << m_json_validator->error_message().c_str() << std::endl;\n        return;\n    }\n    m_endpoint.send(m_hdl, output_string.c_str(), websocketpp::frame::opcode::TEXT);\n    std::cout << "Send:" << output_string << std::endl;\n}\n\n// ...\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then, you should find your Plugin page on Allxon portal. You can see there are Commands, States, Properties, Alerts Cards."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"hello_screenshot",src:t(4711).A+"",width:"1920",height:"946"})}),"\n",(0,i.jsxs)(n.h2,{id:"take-a-look-in-v2notifypluginupdate-api",children:["Take a Look in ",(0,i.jsx)(n.code,{children:"v2/notifyPluginUpdate"})," API"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"method"'})," repesent API's type, ",(0,i.jsx)(n.code,{children:'"params"'})," -> ",(0,i.jsx)(n.code,{children:'"sdk"'})," repesent Octo SDK version.\nEach JSON object under ",(0,i.jsx)(n.code,{children:'"params"'})," -> ",(0,i.jsx)(n.code,{children:'"modules"'})," repesent different kinds of Card on Allxon Portal."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'{16-24} title="resource_dir_linux/plugin_update_template.json" showLineNumbers',children:'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginUpdate",\n  "params": {\n    "sdk": "${OCTO_SDK_VERSION}",\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "appName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "displayName": "plugIN Hello",\n    "type": "ib",\n    "version": "${PLUGIN_VERSION}",\n    "modules": [\n      {\n        "moduleName": "${PLUGIN_NAME}",\n        "displayName": "plugIN Hello",\n        "properties": [\n          {\n            "name": "current_dir",\n            "displayName": "Current Working Directory",\n            "description": "Print the current working directory",\n            "displayType": "string",\n            "value": ""\n          }\n        ],\n        "states": [\n          {\n            "name": "receive_hello",\n            "displayName": "Last Received Message",\n            "description": "Last received message from a stranger",\n            "displayType": "string"\n          }\n        ],\n        "commands": [\n          {\n            "name": "say_hello",\n            "type": "asynchronous",\n            "displayCategory": "Action",\n            "displayName": "Say Hello",\n            "description": "Say hello to a person",\n            "params": [\n              {\n                "name": "person",\n                "displayName": "Person Name",\n                "description": "Person who you wanna to say hello",\n                "displayType": "string",\n                "required": true,\n                "defaultValue": "Buzz"\n              }\n            ]\n          }\n        ],\n        "metrics": [],\n        "events": [],\n        "alarms": [\n          {\n            "name": "hello_alarm",\n            "displayCategory": "Message",\n            "displayName": "Hello alarm",\n            "description": "Trigger when someone say hello",\n            "params": []\n          }\n        ],\n        "configs": []\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"For example, the highlight part of above JSON repesent Property Card on Allxon Portal:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"property",src:t(503).A+"",width:"585",height:"314"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can use builtin macro syntax ",(0,i.jsx)(n.code,{children:"${}"})," to get project level informations, current avaliable syntax: ",(0,i.jsx)(n.code,{children:"PLUGIN_NAME"}),", ",(0,i.jsx)(n.code,{children:"PLUGIN_APP_GUID"}),", ",(0,i.jsx)(n.code,{children:"PLUGIN_VERSION"}),", ",(0,i.jsx)(n.code,{children:"OCTO_SDK_VERSION"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"octo-json-rpc-api",children:"Octo JSON RPC API"}),"\n",(0,i.jsx)(n.p,{children:"After get online to Allxon Portal, means your edge device is ready on cloud. Let's briefly introduce every API functionality to power your device on."}),"\n",(0,i.jsx)(n.h3,{id:"v2notifypluginupdate",children:(0,i.jsx)(n.code,{children:"v2/notifyPluginUpdate"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Direction"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Plugin \u2192 Allxon Agent"}),(0,i.jsxs)(n.td,{children:["Plugin initialize every Card on Allxon Portal, must call ",(0,i.jsx)(n.code,{children:"v2/notifyPluginUpdate"})," API after the WebSocket connection is established."]})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"v2notifyplugincommand",children:(0,i.jsx)(n.code,{children:"v2/notifyPluginCommand"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Direction"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Allxon Agent \u2192 Plugin"}),(0,i.jsx)(n.td,{children:"Plugin will be notified once user trigger Command Card on Allxon Portal."})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"v2notifyplugincommandack",children:(0,i.jsx)(n.code,{children:"v2/notifyPluginCommandAck"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Direction"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Plugin \u2192 Allxon Agent"}),(0,i.jsxs)(n.td,{children:["After receive ",(0,i.jsx)(n.code,{children:"v2/notifyPluginCommand"}),", Plugin acknowledge the Command back to Allxon portal."]})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"v2notifypluginstate",children:(0,i.jsx)(n.code,{children:"v2/notifyPluginState"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Direction"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Plugin \u2192 Allxon Agent"}),(0,i.jsx)(n.td,{children:"Plugin updates data to the Allxon Portal State Card. Tyically is designed for realtime data and repesent current device states information, these data won't be reserve on Allxon Portal, only keeps latest data. Ex: network condition, power status.."})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"v2notifypluginevent",children:(0,i.jsx)(n.code,{children:"v2/notifyPluginEvent"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Direction"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Plugin \u2192 Allxon Agent"}),(0,i.jsx)(n.td,{children:"Plugin updates data to the Allxon Portal Event Card. Tyically is designed for non realtime data and repesent device events information, would be reserve on Allxon Portal. Ex: IO trigger event, user login event.."})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"v2notifypluginmetric",children:(0,i.jsx)(n.code,{children:"v2/notifyPluginMetric"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Direction"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Plugin \u2192 Allxon Agent"}),(0,i.jsx)(n.td,{children:"Plugin updates data to the Allxon Portal Metric Card. Tyically is designed for non realtime data and prefered repesent to chart style, would be reserve on Allxon Portal. Ex: device temperature.."})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"v2notifypluginalert",children:(0,i.jsx)(n.code,{children:"v2/notifyPluginAlert"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Direction"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Plugin \u2192 Allxon Agent"}),(0,i.jsx)(n.td,{children:"Plugin trigger Alert to the Allxon Portal. Typically is designed for emergency data ,Allxon Portal will notify user through email, webhook... depend on your setting on Allxon Portal."})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"v2notifypluginalarmupdate",children:(0,i.jsx)(n.code,{children:"v2/notifyPluginAlarmUpdate"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Direction"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Allxon Agent \u2192 Plugin"}),(0,i.jsxs)(n.td,{children:["Plugin will be notified once the Plugin is online if there are alert settings on Allxon Portal. When you setup your alert setting on Allxon Portal, Plugin will get ",(0,i.jsx)(n.code,{children:"v2/notifyPluginAlarmUpdate"})," to synchronize alert related setting."]})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"v2notifypluginconfigupdate",children:(0,i.jsx)(n.code,{children:"v2/notifyPluginConfigUpdate"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Direction"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Allxon Agent \u2192 Plugin"}),(0,i.jsx)(n.td,{children:"Plugin will be notified once the Plugin is online if there are config settings on Allxon Portal. Typically is designed for configuring your device from Allxon Portal."})]})})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For more details ",(0,i.jsx)(n.a,{href:"https://wayneliu0512.github.io/octo-developer-zone_docusaurus/API%20Reference",children:"API documentation"})]})}),"\n",(0,i.jsx)(n.h2,{id:"typical-api-sequence-flow",children:"Typical API Sequence Flow"}),"\n",(0,i.jsx)(n.p,{children:"The image below shows what typical API sequence flow."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Connect to Allxon Agent by Websocket."}),"\n",(0,i.jsxs)(n.li,{children:["Send ",(0,i.jsx)(n.code,{children:"v2/notifyPluginUpdate"})," to initialize Allxon Portal Cards."]}),"\n",(0,i.jsxs)(n.li,{children:["You probably will get ",(0,i.jsx)(n.code,{children:"v2/notifyPluginAlarmUpdate"})," if you've Alert setting on Allxon Portal."]}),"\n",(0,i.jsxs)(n.li,{children:["Just like previous step, You probably will get ",(0,i.jsx)(n.code,{children:"v2/notifyPluginConfigUpdate"})," if you've Config setting on Allxon Portal."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"sequence-diagram",src:t(4132).A+"",width:"449",height:"305"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},9114:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Security.drawio-70123cf2e48a67349d5f06c78cf5889b.svg"},503:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/screenshot_property-08f4d45aa5ecf04f4e53581b059a3815.png"},4132:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sequence-diagram-ecdbcb33b3075547e38922e43c6fb79b.png"},5432:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/allxon_infrastructure-52cd7a7c5bb1efbff1a37ee64d4e685c.svg"},4711:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/screenshot_hello_plugin_finished-b93882d5f7f8b0546b67f67f6364fbe2.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(6540);const l={},o=i.createContext(l);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);