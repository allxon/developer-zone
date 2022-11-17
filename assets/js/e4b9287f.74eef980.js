"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[2797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return n?l.createElement(g,o(o({ref:t},s),{},{components:n})):l.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(7294),a=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var l=n(7462),a=n(7294),r=n(6010),o=n(2389),i=n(7392),u=n(7094),p=n(2466);const s="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n;const{lazy:o,block:c,defaultValue:m,values:g,groupId:h,className:b}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:f.map((e=>{let{props:{value:t,label:n,attributes:l}}=e;return{value:t,label:n,attributes:l}})),v=(0,i.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:N}=(0,u.U)(),[w,_]=(0,a.useState)(y),I=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=h){const e=x[h];null!=e&&e!==w&&k.some((t=>t.value===e))&&_(e)}const T=e=>{const t=e.currentTarget,n=I.indexOf(t),l=k[n].value;l!==w&&(P(t),_(l),null!=h&&N(h,String(l)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var l;const t=I.indexOf(e.currentTarget)+1;n=null!=(l=I[t])?l:I[0];break}case"ArrowLeft":{var a;const t=I.indexOf(e.currentTarget)-1;n=null!=(a=I[t])?a:I[I.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},b)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>I.push(e),onKeyDown:O,onFocus:T,onClick:T},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return a.createElement(c,(0,l.Z)({key:String(t)},e))}},1875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var l=n(7462),a=(n(7294),n(3905)),r=n(5488),o=n(5162);const i={slug:"/",sidebar_position:1},u=void 0,p={unversionedId:"Getting Started",id:"Getting Started",title:"Getting Started",description:"Allxon Octo SDK is implemented in C++ and available for 3rd party developers to build your plugin to connect your device to Allxon Portal.",source:"@site/docs/Getting Started.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/docs/Getting Started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/Overview/Introduction"}},s={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Try to Run Hello Plugin",id:"try-to-run-hello-plugin",level:2},{value:"Download Plugin Package",id:"download-plugin-package",level:3},{value:"Excute Plugin",id:"excute-plugin",level:3},{value:"Install Plugin",id:"install-plugin",level:3}],c={toc:d};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Allxon Octo")," SDK is implemented in C++ and available for 3rd party developers to build your plugin to connect your device to ",(0,a.kt)("strong",{parentName:"p"},"Allxon Portal"),"."),(0,a.kt)("p",null,'You can build your application to power your device on Allxon Portal through Allxon Octo SDK, we call the application "',(0,a.kt)("strong",{parentName:"p"},"plugin"),'".'),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Your device must get online on ",(0,a.kt)("a",{parentName:"p",href:"https://dms.allxon.com/next/signin"},"Allxon Portal"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Following few step to get your device online on Allxon Portal:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.allxon.com/knowledge/install-allxon-agent-via-command-prompt"},"Install ",(0,a.kt)("strong",{parentName:"a"},"Allxon Agent"))," in your device."),(0,a.kt)("li",{parentName:"ol"},"Get pairing code on your device add your device on ",(0,a.kt)("a",{parentName:"li",href:"https://dms.allxon.com/next/signin"},"Allxon Portal"),"."))),(0,a.kt)("h2",{id:"try-to-run-hello-plugin"},"Try to Run Hello Plugin"),(0,a.kt)("h3",{id:"download-plugin-package"},"Download Plugin Package"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/allxon/plugIN-hello/releases"},"Download hello plugin"),' and extract it, we call this archive "',(0,a.kt)("strong",{parentName:"p"},"plugin package"),'".'),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir extracted_folder\ntar -xf plugin-hello-X.X.X-linux-x86_64.tar.gz -C extracted_folder\n"))),(0,a.kt)(o.Z,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Right click ",(0,a.kt)("inlineCode",{parentName:"li"},"plugin-hello-X.X.X-win-x86_64.zip")," file "),(0,a.kt)("li",{parentName:"ol"},'Click "Extract All..." to ',(0,a.kt)("inlineCode",{parentName:"li"},"extracted_folder"))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please check your platform and cpu architecture, For Linux, we only tested on Ubuntu ( > 18.04) and NVIDIA Jetson ( > l4t r32.6.1 )")),(0,a.kt)("p",null,"And you will see extracted folder hierarchy like this."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 [APP_GUID]\n\u2502   \u251c\u2500\u2500 plugin-hello\n\u2502   \u251c\u2500\u2500 plugin_alert.json\n\u2502   \u251c\u2500\u2500 plugin_command_ack.json\n\u2502   \u251c\u2500\u2500 plugin_state.json\n\u2502   \u251c\u2500\u2500 plugin_update_template.json\n\u2502   \u2514\u2500\u2500 uninstall_plugIN.sh\n\u2514\u2500\u2500 install_plugIN.sh\n\n1 directory, 7 files\n")),(0,a.kt)("p",null,"As you can see, ",(0,a.kt)("em",{parentName:"p"},"App GUID")," repesent this plugin's id, ",(0,a.kt)("inlineCode",{parentName:"p"},"uninstall_plugIN.sh")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"install_plugIN.sh")," use to install and uninstall your plugin.")),(0,a.kt)(o.Z,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 [APP_GUID]\n\u2502   \u251c\u2500\u2500 libcrypto-1_1-x64.dll\n\u2502   \u251c\u2500\u2500 libssl-1_1-x64.dll\n\u2502   \u251c\u2500\u2500 plugin_alert.json\n\u2502   \u251c\u2500\u2500 plugin_command_ack.json\n\u2502   \u251c\u2500\u2500 plugin-hello.exe\n\u2502   \u251c\u2500\u2500 plugin_state.json\n\u2502   \u251c\u2500\u2500 plugin_update_template.json\n\u2502   \u2514\u2500\u2500 uninstall_plugIN.bat\n\u2514\u2500\u2500 install_plugIN.bat\n\n1 directory, 9 files\n")),(0,a.kt)("p",null,"As you can see, ",(0,a.kt)("em",{parentName:"p"},"App GUID")," repesent this plugin's id, ",(0,a.kt)("inlineCode",{parentName:"p"},"uninstall_plugIN.bat")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"install_plugIN.bat")," use to install and uninstall your plugin."))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"App GUID repesent a plugin in particular platform, that means, if you've a plugin deploy on three different platform, you've three different App GUID.")),(0,a.kt)("h3",{id:"excute-plugin"},"Excute Plugin"),(0,a.kt)("p",null,"Next, you can directly execute the plugin manually."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd extracted_folder/[APP_GUID]\n./plugin-hello $(pwd)\n"))),(0,a.kt)(o.Z,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},"cd extracted_folder\\[APP_GUID]\nplugin-hello.exe %cd%\n")))),(0,a.kt)("h3",{id:"install-plugin"},"Install Plugin"),(0,a.kt)("p",null,"Or install in your device through ",(0,a.kt)("strong",{parentName:"p"},"Plugin Installer Script"),", after that, it will start plugin automatically."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget -qO - https://get.allxon.net/plugIN/linux | sudo bash -s -- --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE]\n\n# For Example\nsudo wget -qO - https://get.allxon.net/plugIN/linux | sudo bash -s -- --app-guid a8e873a1-e5df-43a2-928a-745ff9c94dfb --from-path plugin-hello-X.X.X-linux-x86_64.tar.gz\n"))),(0,a.kt)(o.Z,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},'powershell -command "Invoke-WebRequest -OutFile %temp%\\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\\plugin-installer.bat --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE] \n\n@REM For Example\npowershell -command "Invoke-WebRequest -OutFile %temp%\\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\\plugin-installer.bat --app-guid 15dee3c8-adb9-4f7f-83d9-8000eff23f1f --from-path plugin-hello-X.X.X-win-x86_64.zip \n')))),(0,a.kt)("p",null,"Ya~ \ud83e\udd73 ,you should see hello plugin online in your device page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot_hello_plugin_finished",src:n(3448).Z,width:"1920",height:"946"})))}m.isMDXComponent=!0},3448:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/screenshot_hello_plugin_finished-b93882d5f7f8b0546b67f67f6364fbe2.png"}}]);