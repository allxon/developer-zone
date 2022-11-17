"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[1928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?l.createElement(g,r(r({ref:t},s),{},{components:n})):l.createElement(g,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const o={},r=void 0,i={unversionedId:"Getting Started/Try out Hello Plugin",id:"version-1.1.0/Getting Started/Try out Hello Plugin",title:"Try out Hello Plugin",description:'Allxon Octo SDK is implemented in C++ and is available for 3^rd^ party developers to build plugins to connect devices to Allxon Portal. Through Allxon Octo SDK, you can build your own application to power your device on Allxon Portal. We call the application "plugin".',source:"@site/versioned_docs/version-1.1.0/Getting Started/Try out Hello Plugin.md",sourceDirName:"Getting Started",slug:"/Getting Started/Try out Hello Plugin",permalink:"/1.1.0/Getting Started/Try out Hello Plugin",draft:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/versioned_docs/version-1.1.0/Getting Started/Try out Hello Plugin.md",tags:[],version:"1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/1.1.0/"},next:{title:"Architecture",permalink:"/1.1.0/Main Concept/Architecture"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Run Hello Plugin",id:"run-hello-plugin",level:2},{value:"Download Plugin Package",id:"download-plugin-package",level:3},{value:"Execute Plugin",id:"execute-plugin",level:3},{value:"Install Plugin",id:"install-plugin",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=s("Tabs"),c=s("TabItem"),m={toc:u};function g(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Allxon Octo SDK")," is implemented in C++ and is available for 3^rd^ party developers to build plugins to connect devices to ",(0,a.kt)("strong",{parentName:"p"},"Allxon Portal"),'. Through Allxon Octo SDK, you can build your own application to power your device on Allxon Portal. We call the application "',(0,a.kt)("strong",{parentName:"p"},"plugin"),'".'),(0,a.kt)("p",null,"Let\u2019s explore Hello Plugin built by Allxon Octo SDK. You can quickly know what a plugin looks like."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Your device must get online on ",(0,a.kt)("a",{parentName:"p",href:"https://dms.allxon.com/next/signin"},"Allxon Portal"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Following the steps below to get your device online on Allxon Portal:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.allxon.com/knowledge/install-allxon-agent-via-command-prompt"},"Install ",(0,a.kt)("strong",{parentName:"a"},"Allxon Agent"))," on your device."),(0,a.kt)("li",{parentName:"ol"},"Get a pairing code on your device. Then add your device on ",(0,a.kt)("a",{parentName:"li",href:"https://dms.allxon.com/next/signin"},"Allxon Portal"),"."))),(0,a.kt)("h2",{id:"run-hello-plugin"},"Run Hello Plugin"),(0,a.kt)("h3",{id:"download-plugin-package"},"Download Plugin Package"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/allxon/plugIN-hello/releases"},"Download hello plugin"),' archive and extract it. This archive is called a "',(0,a.kt)("strong",{parentName:"p"},"plugin package"),'".'),(0,a.kt)("p",null,"Import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';"),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(c,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir extracted_folder\ntar -xf plugin-hello-X.X.X-linux-x86_64.tar.gz -C extracted_folder\n"))),(0,a.kt)(c,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Right click ",(0,a.kt)("inlineCode",{parentName:"li"},"plugin-hello-X.X.X-win-x86_64.zip")," file "),(0,a.kt)("li",{parentName:"ol"},'Click "Extract All..." to ',(0,a.kt)("inlineCode",{parentName:"li"},"extracted_folder"))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Check your platform and CPU architecture. For Linux, we only tested on Ubuntu ( > 18.04) and NVIDIA Jetson ( > l4t r32.6.1 )")),(0,a.kt)("p",null,"And you will see an extracted folder hierarchy like this."),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(c,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 [APP_GUID]\n\u2502   \u251c\u2500\u2500 plugin-hello\n\u2502   \u251c\u2500\u2500 plugin_alert.json\n\u2502   \u251c\u2500\u2500 plugin_command_ack.json\n\u2502   \u251c\u2500\u2500 plugin_state.json\n\u2502   \u251c\u2500\u2500 plugin_update_template.json\n\u2502   \u2514\u2500\u2500 uninstall_plugIN.sh\n\u2514\u2500\u2500 install_plugIN.sh\n\n1 directory, 7 files\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"App GUID")," repesents this plugin's ID, ",(0,a.kt)("inlineCode",{parentName:"p"},"uninstall_plugIN.sh")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"install_plugIN.sh")," are used to install and uninstall your plugin.")),(0,a.kt)(c,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 [APP_GUID]\n\u2502   \u251c\u2500\u2500 libcrypto-1_1-x64.dll\n\u2502   \u251c\u2500\u2500 libssl-1_1-x64.dll\n\u2502   \u251c\u2500\u2500 plugin_alert.json\n\u2502   \u251c\u2500\u2500 plugin_command_ack.json\n\u2502   \u251c\u2500\u2500 plugin-hello.exe\n\u2502   \u251c\u2500\u2500 plugin_state.json\n\u2502   \u251c\u2500\u2500 plugin_update_template.json\n\u2502   \u2514\u2500\u2500 uninstall_plugIN.bat\n\u2514\u2500\u2500 install_plugIN.bat\n\n1 directory, 9 files\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"App GUID")," repesents this plugin's ID, ",(0,a.kt)("inlineCode",{parentName:"p"},"uninstall_plugIN.bat")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"install_plugIN.bat")," are used to install and uninstall your plugin."))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"App GUID indicates a plugin in particular platform. If you deploye a plugin on three different platforms, you get three different App GUIDs.")),(0,a.kt)("h3",{id:"execute-plugin"},"Execute Plugin"),(0,a.kt)("p",null,"Next, you can manually execute the plugin."),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(c,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd extracted_folder/[APP_GUID]\n./plugin-hello $(pwd)\n"))),(0,a.kt)(c,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},"cd extracted_folder\\[APP_GUID]\nplugin-hello.exe %cd%\n")))),(0,a.kt)("h3",{id:"install-plugin"},"Install Plugin"),(0,a.kt)("p",null,"Alternatively, you can install the plugin on your device through ",(0,a.kt)("strong",{parentName:"p"},"Plugin Installer Script"),". Once installed,the plugin starts automatically."),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(c,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget -qO - https://get.allxon.net/plugIN/linux | sudo bash -s -- --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE]\n\n# For Example\nsudo wget -qO - https://get.allxon.net/plugIN/linux | sudo bash -s -- --app-guid a8e873a1-e5df-43a2-928a-745ff9c94dfb --from-path plugin-hello-X.X.X-linux-x86_64.tar.gz\n"))),(0,a.kt)(c,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},'powershell -command "Invoke-WebRequest -OutFile %temp%\\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\\plugin-installer.bat --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE] \n\n@REM For Example\npowershell -command "Invoke-WebRequest -OutFile %temp%\\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\\plugin-installer.bat --app-guid 15dee3c8-adb9-4f7f-83d9-8000eff23f1f --from-path plugin-hello-X.X.X-win-x86_64.zip \n')))),(0,a.kt)("p",null,"Yay~ \ud83e\udd73 Now, you should see Hello Plugin online on your device page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot_hello_plugin_finished",src:n(5737).Z,width:"1920",height:"946"})))}g.isMDXComponent=!0},5737:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/screenshot_hello_plugin_finished-b93882d5f7f8b0546b67f67f6364fbe2.png"}}]);