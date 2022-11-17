"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[5977],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=l,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),l=t(6010);const r="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),l=t(7294),r=t(6010),o=t(2389),i=t(7392),u=t(7094),s=t(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var n,t;const{lazy:o,block:c,defaultValue:m,values:g,groupId:_,className:h}=e,y=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:y.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,i.l)(k,((e,n)=>e.value===n.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===m?m:null!=(n=null!=m?m:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:v}=(0,u.U)(),[P,C]=(0,l.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=_){const e=N[_];null!=e&&e!==P&&k.some((n=>n.value===e))&&C(e)}const j=e=>{const n=e.currentTarget,t=w.indexOf(n),a=k[t].value;a!==P&&(O(n),C(a),null!=_&&v(_,String(a)))},S=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=w.indexOf(e.currentTarget)+1;t=null!=(a=w[n])?a:w[0];break}case"ArrowLeft":{var l;const n=w.indexOf(e.currentTarget)-1;t=null!=(l=w[n])?l:w[w.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},h)},k.map((e=>{let{value:n,label:t,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:e=>w.push(e),onKeyDown:S,onFocus:j,onClick:j},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":P===n})}),null!=t?t:n)}))),o?(0,l.cloneElement)(y.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==P})))))}function m(e){const n=(0,o.Z)();return l.createElement(c,(0,a.Z)({key:String(n)},e))}},6892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(7462),l=(t(7294),t(3905)),r=t(5488),o=t(5162);const i={},u=void 0,s={unversionedId:"Create a Plugin",id:"Create a Plugin",title:"Create a Plugin",description:"For simple, we don't make a Plugin from scratch. Let's modify and build a Plugin from Hello Plugin.",source:"@site/docs/Create a Plugin.md",sourceDirName:".",slug:"/Create a Plugin",permalink:"/Create a Plugin",draft:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/docs/Create a Plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configs",permalink:"/Overview/Configs"},next:{title:"Plugin Package",permalink:"/Plugin Package"}},p={},d=[{value:"Apply a Plugin Credential",id:"apply-a-plugin-credential",level:2},{value:"How to get Plugin online",id:"how-to-get-plugin-online",level:2},{value:"Build the Plugin",id:"build-the-plugin",level:2},{value:"Run the Plugin",id:"run-the-plugin",level:2},{value:"Take a Look in <code>v2/notifyPluginUpdate</code> API",id:"take-a-look-in-v2notifypluginupdate-api",level:2}],c={toc:d};function m(e){let{components:n,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"For simple, we don't make a Plugin from scratch. Let's modify and build a Plugin from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/allxon/plugIN-hello"},"Hello Plugin"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone --recurse-submodules https://github.com/allxon/plugIN-hello.git\n")),(0,l.kt)("h2",{id:"apply-a-plugin-credential"},"Apply a Plugin Credential"),(0,l.kt)("p",null,"First, ",(0,l.kt)("a",{parentName:"p",href:"https://www.allxon.com/"},"Contact us")," to apply a ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin_credential.json")," file. With the key, Allxon portal can recognize your Plugin, and make sure your data is signed and safed. "),(0,l.kt)("p",null,"Here is a example of ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin_credential.json"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "app_guid":"a5nf65b-1cf7-46e6-af56-d41eac4nbcC1",\n    "access_key":"91IXqwIQkWItqmRJfNyZUTOwAc43smQP",\n    "platform":"linux",\n    "architecture":"x86_64"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"app_guid")," repesent your Plugin's ID, ",(0,l.kt)("inlineCode",{parentName:"p"},"access_key")," is your key to sign your data."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Please keep your ",(0,l.kt)("inlineCode",{parentName:"p"},"access_key")," safety, don't reveal on public.")),(0,l.kt)("h2",{id:"how-to-get-plugin-online"},"How to get Plugin online"),(0,l.kt)("p",null,"Let's take a look at source code, first connect to Allxon Agent Websocket server ",(0,l.kt)("inlineCode",{parentName:"p"},'"wss://127.0.0.1:55688"'),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'{19} title="src/main.cpp"',"{19}":!0,title:'"src/main.cpp"'},'// ...\nint main(int argc, char **argv)\n{\n    if (argc == 1)\n    {\n        std::cout << "Please provide a plugin install directory." << std::endl;\n        return 1;\n    }\n    else if (argc > 2)\n    {\n        std::cout << "Wrong arguments. Usage: device_plugin [plugin install directory]" << std::endl;\n        return 1;\n    }\n    Util::plugin_install_dir = std::string(argv[1]);\n    auto np_update_json = Util::getJsonFromFile(Util::plugin_install_dir + "/plugin_update_template.json");\n    auto json_validator = std::make_shared<JsonValidator>(PLUGIN_NAME, PLUGIN_APP_GUID,\n                                                          PLUGIN_ACCESS_KEY, PLUGIN_VERSION,\n                                                          np_update_json);\n    WebSocketClient web_client(json_validator, "wss://127.0.0.1:55688");\n    web_client.RunSendingLoop();\n    return 0;\n}\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Octo SDK only provide JSON encrypt and decrypt functionality. You can use whatever websocket library you like.")),(0,l.kt)("p",null,"Next, Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," Octo JSON-RPC API to initailize every Cards on Allxon Portal."),(0,l.kt)("p",null,"Check line 5, we load a ",(0,l.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," API payload from ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin_update_template.json"),", which locate at ",(0,l.kt)("inlineCode",{parentName:"p"},"resource_dir_linux/plugin_update_template.json"),". Next sign the JSON (line 18) and send to Allxon Agent (line 23)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'{5,18,23} title="src/websocket_client.cpp" showLineNumbers',"{5,18,23}":!0,title:'"src/websocket_client.cpp"',showLineNumbers:!0},'// ...\nvoid WebSocketClient::SendNotifyPluginUpdate()\n{\n    std::cout << "SendNotifyPluginUpdate" << std::endl;\n    std::string notify_plugin_update = Util::getJsonFromFile(Util::plugin_install_dir + "/plugin_update_template.json");\n    auto np_update_cjson = cJSON_Parse(notify_plugin_update.c_str());\n    auto params_cjson = cJSON_GetObjectItemCaseSensitive(np_update_cjson, "params");\n    auto modules_cjson = cJSON_GetObjectItemCaseSensitive(params_cjson, "modules");\n    auto module_cjson = cJSON_GetArrayItem(modules_cjson, 0);\n    auto properties_cjson = cJSON_GetObjectItemCaseSensitive(module_cjson, "properties");\n    auto property_cjson = cJSON_GetArrayItem(properties_cjson, 0);\n    auto property_value_cjson = cJSON_GetObjectItemCaseSensitive(property_cjson, "value");\n    cJSON_SetValuestring(property_value_cjson, Util::plugin_install_dir.c_str());\n    auto output_char = cJSON_Print(np_update_cjson);\n    std::string output_string(output_char);\n    delete output_char;\n    cJSON_Delete(np_update_cjson);\n    if (!m_json_validator->Sign(output_string))\n    {\n        std::cout << m_json_validator->error_message().c_str() << std::endl;\n        return;\n    }\n    m_endpoint.send(m_hdl, output_string.c_str(), websocketpp::frame::opcode::TEXT);\n    std::cout << "Send:" << output_string << std::endl;\n}\n\n// ...\n')),(0,l.kt)("h2",{id:"build-the-plugin"},"Build the Plugin"),(0,l.kt)("p",null,"Put your Plugin Credential under your Plugin working directory, and make user filename is ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin_credential.json"),"."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Configuration Stage\ncmake -S . -B build -DCMAKE_BUILD_TYPE=<Debug|Release> -DPLUGIN_KEY=plugin_credential.json\n\n# Build Stage\ncmake --build build\n\n# Run after build\n# You can run plugin-hello directly under the build/ folder, and pass resource_dir_linux through argument\nbuild/plugin-hello resource_dir_linux\n"))),(0,l.kt)(o.Z,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-batch"},'@REM Configuration Stage\ncmake -G "Visual Studio 16 2019" -A Win32 -S . -B "build" -DPLUGIN_KEY=plugin_credential.json\n\n@REM Build Stage\ncmake --build build --config <Debug|Release>\n\n@REM Run after build\n@REM You can run plugin-hello directly under the build\\ folder, and pass resource_dir_windows through argument\nbuild\\<Debug|Release>\\plugin-hello.exe resource_dir_windows\n')))),(0,l.kt)("h2",{id:"run-the-plugin"},"Run the Plugin"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,l.kt)("p",null,"You can run plugin-hello directly under the ",(0,l.kt)("inlineCode",{parentName:"p"},"build/folder"),", and pass resource_dir_linux through argument"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"build/plugin-hello resource_dir_linux\n"))),(0,l.kt)(o.Z,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,l.kt)("p",null,"You can run plugin-hello directly under the ",(0,l.kt)("inlineCode",{parentName:"p"},"build\\folder"),", and pass resource_dir_windows through argument"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-batch"},"build\\<Debug|Release>\\plugin-hello.exe resource_dir_windows\n")))),(0,l.kt)("p",null,"Then, you should find your Plugin page on Allxon portal. You can see there are Commands, States, Properties, Alerts Cards."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hello_screenshot",src:t(3448).Z,width:"1920",height:"946"})),(0,l.kt)("h2",{id:"take-a-look-in-v2notifypluginupdate-api"},"Take a Look in ",(0,l.kt)("inlineCode",{parentName:"h2"},"v2/notifyPluginUpdate")," API"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'"method"')," repesent API's type, ",(0,l.kt)("inlineCode",{parentName:"p"},'"params"')," -> ",(0,l.kt)("inlineCode",{parentName:"p"},'"sdk"')," repesent Octo SDK version.\nEach JSON object under ",(0,l.kt)("inlineCode",{parentName:"p"},'"params"')," -> ",(0,l.kt)("inlineCode",{parentName:"p"},'"modules"')," repesent different kinds of Card on Allxon Portal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'{16-24} title="resource_dir_linux/plugin_update_template.json" showLineNumbers',"{16-24}":!0,title:'"resource_dir_linux/plugin_update_template.json"',showLineNumbers:!0},'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginUpdate",\n  "params": {\n    "sdk": "${OCTO_SDK_VERSION}",\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "appName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "displayName": "plugIN Hello",\n    "type": "ib",\n    "version": "${PLUGIN_VERSION}",\n    "modules": [\n      {\n        "moduleName": "${PLUGIN_NAME}",\n        "displayName": "plugIN Hello",\n        "properties": [\n          {\n            "name": "current_dir",\n            "displayName": "Current Working Directory",\n            "description": "Print the current working directory",\n            "displayType": "string",\n            "value": ""\n          }\n        ],\n        "states": [\n          {\n            "name": "receive_hello",\n            "displayName": "Last Received Message",\n            "description": "Last received message from a stranger",\n            "displayType": "string"\n          }\n        ],\n        "commands": [\n          {\n            "name": "say_hello",\n            "type": "asynchronous",\n            "displayCategory": "Action",\n            "displayName": "Say Hello",\n            "description": "Say hello to a person",\n            "params": [\n              {\n                "name": "person",\n                "displayName": "Person Name",\n                "description": "Person who you wanna to say hello",\n                "displayType": "string",\n                "required": true,\n                "defaultValue": "Buzz"\n              }\n            ]\n          }\n        ],\n        "metrics": [],\n        "events": [],\n        "alarms": [\n          {\n            "name": "hello_alarm",\n            "displayCategory": "Message",\n            "displayName": "Hello alarm",\n            "description": "Trigger when someone say hello",\n            "params": []\n          }\n        ],\n        "configs": []\n      }\n    ]\n  }\n}\n')),(0,l.kt)("p",null,"For example, the highlight part of above JSON repesent Property Card on Allxon Portal:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"property",src:t(5572).Z,width:"585",height:"314"})),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can use builtin macro syntax ",(0,l.kt)("inlineCode",{parentName:"p"},"${}")," to get project level informations, current avaliable syntax: ",(0,l.kt)("inlineCode",{parentName:"p"},"PLUGIN_NAME"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"PLUGIN_APP_GUID"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"PLUGIN_VERSION"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"OCTO_SDK_VERSION"),".")))}m.isMDXComponent=!0},3448:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/screenshot_hello_plugin_finished-b93882d5f7f8b0546b67f67f6364fbe2.png"},5572:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/screenshot_property-08f4d45aa5ecf04f4e53581b059a3815.png"}}]);