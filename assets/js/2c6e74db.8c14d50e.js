"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[9680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=d(n),g=l,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const i={},o="Introduction",r={unversionedId:"Overview/Introduction",id:"Overview/Introduction",title:"Introduction",description:"allxoninfrasturcture",source:"@site/docs/Overview/Introduction.md",sourceDirName:"Overview",slug:"/Overview/Introduction",permalink:"/developer-zone/Overview/Introduction",draft:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/docs/Overview/Introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/developer-zone/"},next:{title:"Properties",permalink:"/developer-zone/Overview/Properties"}},p={},d=[{value:"Secure Data",id:"secure-data",level:2},{value:"How to get Plugin online",id:"how-to-get-plugin-online",level:2},{value:"Take a Look in <code>v2/notifyPluginUpdate</code> API",id:"take-a-look-in-v2notifypluginupdate-api",level:2},{value:"Octo JSON RPC API",id:"octo-json-rpc-api",level:2},{value:"<code>v2/notifyPluginUpdate</code>",id:"v2notifypluginupdate",level:3},{value:"<code>v2/notifyPluginCommand</code>",id:"v2notifyplugincommand",level:3},{value:"<code>v2/notifyPluginCommandAck</code>",id:"v2notifyplugincommandack",level:3},{value:"<code>v2/notifyPluginState</code>",id:"v2notifypluginstate",level:3},{value:"<code>v2/notifyPluginEvent</code>",id:"v2notifypluginevent",level:3},{value:"<code>v2/notifyPluginMetric</code>",id:"v2notifypluginmetric",level:3},{value:"<code>v2/notifyPluginAlert</code>",id:"v2notifypluginalert",level:3},{value:"<code>v2/notifyPluginAlarmUpdate</code>",id:"v2notifypluginalarmupdate",level:3},{value:"<code>v2/notifyPluginConfigUpdate</code>",id:"v2notifypluginconfigupdate",level:3},{value:"Typical API Sequence Flow",id:"typical-api-sequence-flow",level:2}],s={toc:d};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"allxon_infrasturcture",src:n(6504).Z,width:"853",height:"552"})),(0,l.kt)("p",null,"This picture show the Allxon infrastructure a overview. Each Plugin communicate with Allxon Agent through ",(0,l.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC")," Websocket, and Allxon Agent like a bridge to bring JSON between Allxon cloud and Plugin."),(0,l.kt)("h2",{id:"secure-data"},"Secure Data"),(0,l.kt)("p",null,"Octo SDK use Plugin key help you to verify JSON from Allxon Agent, and help you to sign JSON to Allxon Agent. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"security",src:n(6730).Z,width:"602",height:"559"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <string>\n#include "json_validator.h"\n\nint main(int argc, char **argv)\n{\n    // notifyPluginUpdate json template\n    std::string json_content = "{\\"jsonrpc\\": \\"2.0\\", \\"method\\": \\"v2/notifyPluginUpdate\\"...}"; \n    std::string PLUGIN_NAME = "my_plugin_name";\n    std::string PLUGIN_APP_GUID = "my_plugin_app_guid";\n    std::string PLUGIN_ACCESS_KEY = "my_plugin_access_key";\n    std::string PLUGIN_VERSION = "my_plugin_version";\n    \n    auto json_validator = JsonValidator(PLUGIN_NAME, PLUGIN_APP_GUID,\n                                        PLUGIN_ACCESS_KEY, PLUGIN_VERSION,\n                                        json_content); \n    \n    std::string other_plugin_api_json_content;\n    if (json_validator.Sign(other_plugin_api_json_content))\n    {\n        // if sign success, you can send it through websocket\n        // e.g. \n        // enpoint.send(other_plugin_api_json_content);\n    }\n\n    if (json_validator.Verify(other_plugin_api_json_content))\n    {\n        // if verify success, means json content is safe, you can read it\n    }\n    return 0;\n}\n')),(0,l.kt)("h2",{id:"how-to-get-plugin-online"},"How to get Plugin online"),(0,l.kt)("p",null,"Let's take a look at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/allxon/plugIN-hello"},"Plugin hello")," source code, first connect to Allxon Agent Websocket server ",(0,l.kt)("inlineCode",{parentName:"p"},'"wss://127.0.0.1:55688"'),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'{19} title="src/main.cpp"',"{19}":!0,title:'"src/main.cpp"'},'// ...\nint main(int argc, char **argv)\n{\n    if (argc == 1)\n    {\n        std::cout << "Please provide a plugin install directory." << std::endl;\n        return 1;\n    }\n    else if (argc > 2)\n    {\n        std::cout << "Wrong arguments. Usage: device_plugin [plugin install directory]" << std::endl;\n        return 1;\n    }\n    Util::plugin_install_dir = std::string(argv[1]);\n    auto np_update_json = Util::getJsonFromFile(Util::plugin_install_dir + "/plugin_update_template.json");\n    auto json_validator = std::make_shared<JsonValidator>(PLUGIN_NAME, PLUGIN_APP_GUID,\n                                                          PLUGIN_ACCESS_KEY, PLUGIN_VERSION,\n                                                          np_update_json);\n    WebSocketClient web_client(json_validator, "wss://127.0.0.1:55688");\n    web_client.RunSendingLoop();\n    return 0;\n}\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Octo SDK only provide JSON encrypt and decrypt functionality. You can use whatever websocket library you like.")),(0,l.kt)("p",null,"Next, Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," Octo JSON-RPC API to initailize every Cards on Allxon Portal."),(0,l.kt)("p",null,"Check line 5, we load a ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," API payload from ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin_update_template.json"),", which locate at ",(0,l.kt)("inlineCode",{parentName:"p"},"resource_dir_linux/plugin_update_template.json"),". Next sign the JSON (line 18) and send to Allxon Agent (line 23)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'{5,18,23} title="src/websocket_client.cpp" showLineNumbers',"{5,18,23}":!0,title:'"src/websocket_client.cpp"',showLineNumbers:!0},'// ...\nvoid WebSocketClient::SendNotifyPluginUpdate()\n{\n    std::cout << "SendNotifyPluginUpdate" << std::endl;\n    std::string notify_plugin_update = Util::getJsonFromFile(Util::plugin_install_dir + "/plugin_update_template.json");\n    auto np_update_cjson = cJSON_Parse(notify_plugin_update.c_str());\n    auto params_cjson = cJSON_GetObjectItemCaseSensitive(np_update_cjson, "params");\n    auto modules_cjson = cJSON_GetObjectItemCaseSensitive(params_cjson, "modules");\n    auto module_cjson = cJSON_GetArrayItem(modules_cjson, 0);\n    auto properties_cjson = cJSON_GetObjectItemCaseSensitive(module_cjson, "properties");\n    auto property_cjson = cJSON_GetArrayItem(properties_cjson, 0);\n    auto property_value_cjson = cJSON_GetObjectItemCaseSensitive(property_cjson, "value");\n    cJSON_SetValuestring(property_value_cjson, Util::plugin_install_dir.c_str());\n    auto output_char = cJSON_Print(np_update_cjson);\n    std::string output_string(output_char);\n    delete output_char;\n    cJSON_Delete(np_update_cjson);\n    if (!m_json_validator->Sign(output_string))\n    {\n        std::cout << m_json_validator->error_message().c_str() << std::endl;\n        return;\n    }\n    m_endpoint.send(m_hdl, output_string.c_str(), websocketpp::frame::opcode::TEXT);\n    std::cout << "Send:" << output_string << std::endl;\n}\n\n// ...\n')),(0,l.kt)("p",null,"Then, you should find your Plugin page on Allxon portal. You can see there are Commands, States, Properties, Alerts Cards."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hello_screenshot",src:n(3448).Z,width:"1920",height:"946"})),(0,l.kt)("h2",{id:"take-a-look-in-v2notifypluginupdate-api"},"Take a Look in ",(0,l.kt)("inlineCode",{parentName:"h2"},"v2/notifyPluginUpdate")," API"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'"method"')," repesent API's type, ",(0,l.kt)("inlineCode",{parentName:"p"},'"params"')," -> ",(0,l.kt)("inlineCode",{parentName:"p"},'"sdk"')," repesent Octo SDK version.\nEach JSON object under ",(0,l.kt)("inlineCode",{parentName:"p"},'"params"')," -> ",(0,l.kt)("inlineCode",{parentName:"p"},'"modules"')," repesent different kinds of Card on Allxon Portal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'{16-24} title="resource_dir_linux/plugin_update_template.json" showLineNumbers',"{16-24}":!0,title:'"resource_dir_linux/plugin_update_template.json"',showLineNumbers:!0},'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginUpdate",\n  "params": {\n    "sdk": "${OCTO_SDK_VERSION}",\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "appName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "displayName": "plugIN Hello",\n    "type": "ib",\n    "version": "${PLUGIN_VERSION}",\n    "modules": [\n      {\n        "moduleName": "${PLUGIN_NAME}",\n        "displayName": "plugIN Hello",\n        "properties": [\n          {\n            "name": "current_dir",\n            "displayName": "Current Working Directory",\n            "description": "Print the current working directory",\n            "displayType": "string",\n            "value": ""\n          }\n        ],\n        "states": [\n          {\n            "name": "receive_hello",\n            "displayName": "Last Received Message",\n            "description": "Last received message from a stranger",\n            "displayType": "string"\n          }\n        ],\n        "commands": [\n          {\n            "name": "say_hello",\n            "type": "asynchronous",\n            "displayCategory": "Action",\n            "displayName": "Say Hello",\n            "description": "Say hello to a person",\n            "params": [\n              {\n                "name": "person",\n                "displayName": "Person Name",\n                "description": "Person who you wanna to say hello",\n                "displayType": "string",\n                "required": true,\n                "defaultValue": "Buzz"\n              }\n            ]\n          }\n        ],\n        "metrics": [],\n        "events": [],\n        "alarms": [\n          {\n            "name": "hello_alarm",\n            "displayCategory": "Message",\n            "displayName": "Hello alarm",\n            "description": "Trigger when someone say hello",\n            "params": []\n          }\n        ],\n        "configs": []\n      }\n    ]\n  }\n}\n')),(0,l.kt)("p",null,"For example, the highlight part of above JSON repesent Property Card on Allxon Portal:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"property",src:n(3474).Z,width:"585",height:"314"})),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can use builtin macro syntax ",(0,l.kt)("inlineCode",{parentName:"p"},"${}")," to get project level informations, current avaliable syntax: ",(0,l.kt)("inlineCode",{parentName:"p"},"PLUGIN_NAME"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"PLUGIN_APP_GUID"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"PLUGIN_VERSION"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"OCTO_SDK_VERSION"),".")),(0,l.kt)("h2",{id:"octo-json-rpc-api"},"Octo JSON RPC API"),(0,l.kt)("p",null,"After get online to Allxon Portal, means your edge device is ready on cloud. Let's briefly introduce every API functionality to power your device on. "),(0,l.kt)("h3",{id:"v2notifypluginupdate"},(0,l.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginUpdate")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plugin \u2192 Allxon Agent"),(0,l.kt)("td",{parentName:"tr",align:null},"Plugin initialize every Card on Allxon Portal, must call ",(0,l.kt)("inlineCode",{parentName:"td"},"v2/notifyPluginUpdate")," API after the WebSocket connection is established.")))),(0,l.kt)("h3",{id:"v2notifyplugincommand"},(0,l.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginCommand")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Allxon Agent \u2192 Plugin"),(0,l.kt)("td",{parentName:"tr",align:null},"Plugin will be notified once user trigger Command Card on Allxon Portal.")))),(0,l.kt)("h3",{id:"v2notifyplugincommandack"},(0,l.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginCommandAck")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plugin \u2192 Allxon Agent"),(0,l.kt)("td",{parentName:"tr",align:null},"After receive ",(0,l.kt)("inlineCode",{parentName:"td"},"v2/notifyPluginCommand"),", Plugin acknowledge the Command back to Allxon portal.")))),(0,l.kt)("h3",{id:"v2notifypluginstate"},(0,l.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginState")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plugin \u2192 Allxon Agent"),(0,l.kt)("td",{parentName:"tr",align:null},"Plugin updates data to the Allxon Portal State Card. Tyically is designed for realtime data and repesent current device states information, these data won't be reserve on Allxon Portal, only keeps latest data. Ex: network condition, power status..")))),(0,l.kt)("h3",{id:"v2notifypluginevent"},(0,l.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginEvent")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plugin \u2192 Allxon Agent"),(0,l.kt)("td",{parentName:"tr",align:null},"Plugin updates data to the Allxon Portal Event Card. Tyically is designed for non realtime data and repesent device events information, would be reserve on Allxon Portal. Ex: IO trigger event, user login event..")))),(0,l.kt)("h3",{id:"v2notifypluginmetric"},(0,l.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginMetric")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plugin \u2192 Allxon Agent"),(0,l.kt)("td",{parentName:"tr",align:null},"Plugin updates data to the Allxon Portal Metric Card. Tyically is designed for non realtime data and prefered repesent to chart style, would be reserve on Allxon Portal. Ex: device temperature..")))),(0,l.kt)("h3",{id:"v2notifypluginalert"},(0,l.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginAlert")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plugin \u2192 Allxon Agent"),(0,l.kt)("td",{parentName:"tr",align:null},"Plugin trigger Alert to the Allxon Portal. Typically is designed for emergency data ,Allxon Portal will notify user through email, webhook... depend on your setting on Allxon Portal.")))),(0,l.kt)("h3",{id:"v2notifypluginalarmupdate"},(0,l.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginAlarmUpdate")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Allxon Agent \u2192 Plugin"),(0,l.kt)("td",{parentName:"tr",align:null},"Plugin will be notified once the Plugin is online if there are alert settings on Allxon Portal. When you setup your alert setting on Allxon Portal, Plugin will get ",(0,l.kt)("inlineCode",{parentName:"td"},"v2/notifyPluginAlarmUpdate")," to synchronize alert related setting.")))),(0,l.kt)("h3",{id:"v2notifypluginconfigupdate"},(0,l.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginConfigUpdate")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Allxon Agent \u2192 Plugin"),(0,l.kt)("td",{parentName:"tr",align:null},"Plugin will be notified once the Plugin is online if there are config settings on Allxon Portal. Typically is designed for configuring your device from Allxon Portal.")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"For more details ",(0,l.kt)("a",{parentName:"p",href:"https://wayneliu0512.github.io/octo-developer-zone_docusaurus/API%20Reference"},"API documentation"))),(0,l.kt)("h2",{id:"typical-api-sequence-flow"},"Typical API Sequence Flow"),(0,l.kt)("p",null,"The image below shows what typical API sequence flow. "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Connect to Allxon Agent by Websocket."),(0,l.kt)("li",{parentName:"ol"},"Send ",(0,l.kt)("inlineCode",{parentName:"li"},"v2/notifyPluginUpdate")," to initialize Allxon Portal Cards."),(0,l.kt)("li",{parentName:"ol"},"You probably will get ",(0,l.kt)("inlineCode",{parentName:"li"},"v2/notifyPluginAlarmUpdate")," if you've Alert setting on Allxon Portal."),(0,l.kt)("li",{parentName:"ol"},"Just like previous step, You probably will get ",(0,l.kt)("inlineCode",{parentName:"li"},"v2/notifyPluginConfigUpdate")," if you've Config setting on Allxon Portal.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"sequence-diagram",src:n(274).Z,width:"449",height:"305"})))}u.isMDXComponent=!0},6730:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Security.drawio-7217a20c5369f81acfd5d32a0db314fa.svg"},3474:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot_property-08f4d45aa5ecf04f4e53581b059a3815.png"},274:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sequence-diagram-ecdbcb33b3075547e38922e43c6fb79b.png"},6504:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/allxon_infrastructure-52cd7a7c5bb1efbff1a37ee64d4e685c.svg"},3448:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot_hello_plugin_finished-b93882d5f7f8b0546b67f67f6364fbe2.png"}}]);