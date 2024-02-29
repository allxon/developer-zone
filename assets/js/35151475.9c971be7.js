"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[3966],{9847:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var t=l(4848),r=l(8453),i=l(1470),a=l(9365);const s={},o=void 0,c={id:"Getting Started",title:"Getting Started",description:"Allxon Octo SDK is implemented in C++ and available for 3rd party developers to build your plugin to connect your device to Allxon Portal.",source:"@site/versioned_docs/version-1.1.0/Getting Started.md",sourceDirName:".",slug:"/Getting Started",permalink:"/1.1.0/Getting Started",draft:!1,unlisted:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/versioned_docs/version-1.1.0/Getting Started.md",tags:[],version:"1.1.0",frontMatter:{}},d={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Try to Run Hello Plugin",id:"try-to-run-hello-plugin",level:2},{value:"Download Plugin Package",id:"download-plugin-package",level:3},{value:"Excute Plugin",id:"excute-plugin",level:3},{value:"Install Plugin",id:"install-plugin",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Allxon Octo"})," SDK is implemented in C++ and available for 3rd party developers to build your plugin to connect your device to ",(0,t.jsx)(n.strong,{children:"Allxon Portal"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:['You can build your application to power your device on Allxon Portal through Allxon Octo SDK, we call the application "',(0,t.jsx)(n.strong,{children:"plugin"}),'".']}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.p,{children:["Your device must get online on ",(0,t.jsx)(n.a,{href:"https://dms.allxon.com/next/signin",children:"Allxon Portal"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"Following few step to get your device online on Allxon Portal:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.a,{href:"https://www.allxon.com/knowledge/install-allxon-agent-via-command-prompt",children:["Install ",(0,t.jsx)(n.strong,{children:"Allxon Agent"})]})," in your device."]}),"\n",(0,t.jsxs)(n.li,{children:["Get pairing code on your device add your device on ",(0,t.jsx)(n.a,{href:"https://dms.allxon.com/next/signin",children:"Allxon Portal"}),"."]}),"\n"]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u4e00\u4e9b\u5305\u542b ",(0,t.jsx)(n.em,{children:"Markdown"})," ",(0,t.jsx)(n.code,{children:"\u8bed\u6cd5"})," \u7684 ",(0,t.jsx)(n.strong,{children:"\u5185\u5bb9"}),"\u3002 \u770b\u770b",(0,t.jsxs)(n.a,{href:"#",children:["\u8fd9\u4e2a ",(0,t.jsx)(n.code,{children:"api"})]}),"\u3002"]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u4e00\u4e9b\u5305\u542b ",(0,t.jsx)(n.em,{children:"Markdown"})," ",(0,t.jsx)(n.code,{children:"\u8bed\u6cd5"})," \u7684 ",(0,t.jsx)(n.strong,{children:"\u5185\u5bb9"}),"\u3002 \u770b\u770b",(0,t.jsxs)(n.a,{href:"#",children:["\u8fd9\u4e2a ",(0,t.jsx)(n.code,{children:"api"})]}),"\u3002"]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u4e00\u4e9b\u5305\u542b ",(0,t.jsx)(n.em,{children:"Markdown"})," ",(0,t.jsx)(n.code,{children:"\u8bed\u6cd5"})," \u7684 ",(0,t.jsx)(n.strong,{children:"\u5185\u5bb9"}),"\u3002 \u770b\u770b",(0,t.jsxs)(n.a,{href:"#",children:["\u8fd9\u4e2a ",(0,t.jsx)(n.code,{children:"api"})]}),"\u3002"]})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["\u4e00\u4e9b\u5305\u542b ",(0,t.jsx)(n.em,{children:"Markdown"})," ",(0,t.jsx)(n.code,{children:"\u8bed\u6cd5"})," \u7684 ",(0,t.jsx)(n.strong,{children:"\u5185\u5bb9"}),"\u3002 \u770b\u770b",(0,t.jsxs)(n.a,{href:"#",children:["\u8fd9\u4e2a ",(0,t.jsx)(n.code,{children:"api"})]}),"\u3002"]})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["\u4e00\u4e9b\u5305\u542b ",(0,t.jsx)(n.em,{children:"Markdown"})," ",(0,t.jsx)(n.code,{children:"\u8bed\u6cd5"})," \u7684 ",(0,t.jsx)(n.strong,{children:"\u5185\u5bb9"}),"\u3002 \u770b\u770b",(0,t.jsxs)(n.a,{href:"#",children:["\u8fd9\u4e2a ",(0,t.jsx)(n.code,{children:"api"})]}),"\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"try-to-run-hello-plugin",children:"Try to Run Hello Plugin"}),"\n",(0,t.jsx)(n.h3,{id:"download-plugin-package",children:"Download Plugin Package"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/allxon/plugIN-hello/releases",children:"Download hello plugin"}),' and extract it, we call this archive "',(0,t.jsx)(n.strong,{children:"plugin package"}),'".']}),"\n","\n","\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"bash",label:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir extracted_folder\ntar -xf plugin-hello-X.X.X-linux-x86_64.tar.gz -C extracted_folder\n"})})}),(0,t.jsx)(a.A,{value:"cmd",label:"Windows",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Right click ",(0,t.jsx)(n.code,{children:"plugin-hello-X.X.X-win-x86_64.zip"})," file"]}),"\n",(0,t.jsxs)(n.li,{children:['Click "Extract All..." to ',(0,t.jsx)(n.code,{children:"extracted_folder"})]}),"\n"]})})]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Please check your platform and cpu architecture, For Linux, we only tested on Ubuntu ( > 18.04) and NVIDIA Jetson ( > l4t r32.6.1 )"})}),"\n",(0,t.jsx)(n.p,{children:"And you will see extracted folder hierarchy like this."}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(a.A,{value:"bash",label:"Linux",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:".\n\u251c\u2500\u2500 [APP_GUID]\n\u2502   \u251c\u2500\u2500 plugin-hello\n\u2502   \u251c\u2500\u2500 plugin_alert.json\n\u2502   \u251c\u2500\u2500 plugin_command_ack.json\n\u2502   \u251c\u2500\u2500 plugin_state.json\n\u2502   \u251c\u2500\u2500 plugin_update_template.json\n\u2502   \u2514\u2500\u2500 uninstall_plugIN.sh\n\u2514\u2500\u2500 install_plugIN.sh\n\n1 directory, 7 files\n"})}),(0,t.jsxs)(n.p,{children:["As you can see, ",(0,t.jsx)(n.em,{children:"App GUID"})," repesent this plugin's id, ",(0,t.jsx)(n.code,{children:"uninstall_plugIN.sh"})," and ",(0,t.jsx)(n.code,{children:"install_plugIN.sh"})," use to install and uninstall your plugin."]})]}),(0,t.jsxs)(a.A,{value:"cmd",label:"Windows",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:".\n\u251c\u2500\u2500 [APP_GUID]\n\u2502   \u251c\u2500\u2500 libcrypto-1_1-x64.dll\n\u2502   \u251c\u2500\u2500 libssl-1_1-x64.dll\n\u2502   \u251c\u2500\u2500 plugin_alert.json\n\u2502   \u251c\u2500\u2500 plugin_command_ack.json\n\u2502   \u251c\u2500\u2500 plugin-hello.exe\n\u2502   \u251c\u2500\u2500 plugin_state.json\n\u2502   \u251c\u2500\u2500 plugin_update_template.json\n\u2502   \u2514\u2500\u2500 uninstall_plugIN.bat\n\u2514\u2500\u2500 install_plugIN.bat\n\n1 directory, 9 files\n"})}),(0,t.jsxs)(n.p,{children:["As you can see, ",(0,t.jsx)(n.em,{children:"App GUID"})," repesent this plugin's id, ",(0,t.jsx)(n.code,{children:"uninstall_plugIN.bat"})," and ",(0,t.jsx)(n.code,{children:"install_plugIN.bat"})," use to install and uninstall your plugin."]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"App GUID repesent a plugin in particular platform, that means, if you've a plugin deploy on three different platform, you've three different App GUID."})}),"\n",(0,t.jsx)(n.h3,{id:"excute-plugin",children:"Excute Plugin"}),"\n",(0,t.jsx)(n.p,{children:"Next, you can directly execute the plugin manually."}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"bash",label:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd extracted_folder/[APP_GUID]\n./plugin-hello $(pwd)\n"})})}),(0,t.jsx)(a.A,{value:"cmd",label:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-batch",children:"cd extracted_folder\\[APP_GUID]\nplugin-hello.exe %cd%\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"install-plugin",children:"Install Plugin"}),"\n",(0,t.jsxs)(n.p,{children:["Or install in your device through ",(0,t.jsx)(n.strong,{children:"Plugin Installer Script"}),", after that, it will start plugin automatically."]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"bash",label:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo wget -qO - https://get.allxon.net/plugIN/linux | sudo bash -s -- --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE]\n\n# For Example\nsudo wget -qO - https://get.allxon.net/plugIN/linux | sudo bash -s -- --app-guid a8e873a1-e5df-43a2-928a-745ff9c94dfb --from-path plugin-hello-X.X.X-linux-x86_64.tar.gz\n"})})}),(0,t.jsx)(a.A,{value:"cmd",label:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-batch",children:'powershell -command "Invoke-WebRequest -OutFile %temp%\\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\\plugin-installer.bat --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE]\n\n@REM For Example\npowershell -command "Invoke-WebRequest -OutFile %temp%\\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\\plugin-installer.bat --app-guid 15dee3c8-adb9-4f7f-83d9-8000eff23f1f --from-path plugin-hello-X.X.X-win-x86_64.zip\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Ya~ \ud83e\udd73 ,you should see hello plugin online in your device page."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"screenshot_hello_plugin_finished",src:l(4711).A+"",width:"1920",height:"946"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,l)=>{l.d(n,{A:()=>a});l(6540);var t=l(4164);const r={tabItem:"tabItem_Ymn6"};var i=l(4848);function a(e){let{children:n,hidden:l,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,a),hidden:l,children:n})}},1470:(e,n,l)=>{l.d(n,{A:()=>w});var t=l(6540),r=l(4164),i=l(3104),a=l(6347),s=l(205),o=l(7485),c=l(1682),d=l(9466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:t,default:r}}=e;return{value:n,label:l,attributes:t,default:r}}))}(l);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function p(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:l}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,o.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,i=h(e),[a,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=l.find((e=>e.default))??l[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=x({queryString:l,groupId:r}),[g,m]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(l);return[r,(0,t.useCallback)((e=>{l&&i.set(e)}),[l,i])]}({groupId:r}),j=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{j&&o(j)}),[j]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=l(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=l(4848);function b(e){let{className:n,block:l,selectedValue:t,selectValue:a,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,l=o.indexOf(n),r=s[l].value;r!==t&&(c(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;n=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;n=o[l]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":l},n),children:s.map((e=>{let{value:n,label:l,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":t===n}),children:l??n},n)}))})}function v(e){let{lazy:n,children:l,selectedValue:r}=e;const i=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function w(e){const n=(0,m.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},4711:(e,n,l)=>{l.d(n,{A:()=>t});const t=l.p+"assets/images/screenshot_hello_plugin_finished-b93882d5f7f8b0546b67f67f6364fbe2.png"},8453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>s});var t=l(6540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);