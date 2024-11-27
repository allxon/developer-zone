"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[1958],{900:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=i(4848),t=i(8453);const r={},l="Overview",o={id:"APIOverview",title:"Overview",description:"Requests to Allxon API",source:"@site/allxonApi/APIOverview.md",sourceDirName:".",slug:"/APIOverview",permalink:"/allxon-api/APIOverview",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"allxonApiSidebar",previous:{title:"Make Your First Allxon API Request",permalink:"/allxon-api/GettingStarted"},next:{title:"Authorization",permalink:"/allxon-api/APIAuthorization"}},d={},h=[{value:"Requests to Allxon API",id:"requests-to-allxon-api",level:2},{value:"API Regional Domains",id:"api-regional-domains",level:3},{value:"HTTP Method",id:"http-method",level:3},{value:"Requests Headers",id:"requests-headers",level:3},{value:"Accept",id:"accept",level:4},{value:"Accept-Encoding",id:"accept-encoding",level:4},{value:"Content-Type",id:"content-type",level:4},{value:"Authorization",id:"authorization",level:4},{value:"X-Allxon-Epoch",id:"x-allxon-epoch",level:4},{value:"Allxon API response",id:"allxon-api-response",level:2},{value:"Response Headers",id:"response-headers",level:3},{value:"Content-Encoding",id:"content-encoding",level:4},{value:"Content-Type",id:"content-type-1",level:4},{value:"X-Request-ID",id:"x-request-id",level:5},{value:"X-Ratelimit-Limit",id:"x-ratelimit-limit",level:5},{value:"X-Ratelimit-Remaining",id:"x-ratelimit-remaining",level:5},{value:"X-Ratelimit-Reset",id:"x-ratelimit-reset",level:5},{value:"Response HTTP Status Codes",id:"response-http-status-codes",level:3}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.h2,{id:"requests-to-allxon-api",children:"Requests to Allxon API"}),"\n",(0,s.jsx)(n.p,{children:"This section describes the elements that make up an API request:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#api-regional-domains",children:"API Regional Domains"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#http-method",children:"HTTP method"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#requests-headers",children:"Requests Headers"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"api-regional-domains",children:"API Regional Domains"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["US Region",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://us.api.allxon.com",children:"https://us.api.allxon.com"})]}),"\n",(0,s.jsxs)(n.li,{children:["EU Region",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://eu.api.allxon.com",children:"https://eu.api.allxon.com"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"http-method",children:"HTTP Method"}),"\n",(0,s.jsx)(n.p,{children:"Currently, Allxon API supports the following methods"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GET"}),"\n",(0,s.jsx)(n.li,{children:"POST"}),"\n",(0,s.jsx)(n.li,{children:"PUT"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you request an unsuppoted method, you will see an error response with status code ",(0,s.jsx)(n.code,{children:"405"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"requests-headers",children:"Requests Headers"}),"\n",(0,s.jsxs)(n.p,{children:["The headers here are ",(0,s.jsx)(n.strong,{children:"required"})," in every request with Allxon API.\nIf the headers are incomplete, you will see an error response with status code ",(0,s.jsx)(n.code,{children:"401"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"accept",children:"Accept"}),"\n",(0,s.jsxs)(n.p,{children:["Allxon API only supports ",(0,s.jsx)(n.code,{children:"application/json"}),". When making a request, you should pass an ",(0,s.jsx)(n.code,{children:"Accept"})," header with a value of ",(0,s.jsx)(n.code,{children:"application/json"}),", for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Accept: application/json\n"})}),"\n",(0,s.jsx)(n.h4,{id:"accept-encoding",children:"Accept-Encoding"}),"\n",(0,s.jsxs)(n.p,{children:["Allxon API only supports ",(0,s.jsx)(n.code,{children:"gzip"}),". When making a request, you must pass the ",(0,s.jsx)(n.code,{children:"Accept-Encoding"})," header with a value of ",(0,s.jsx)(n.code,{children:"gzip"}),", for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Accept-Encoding: gzip\n"})}),"\n",(0,s.jsx)(n.h4,{id:"content-type",children:"Content-Type"}),"\n",(0,s.jsxs)(n.p,{children:["Allxon API only supports ",(0,s.jsx)(n.code,{children:"application/json"}),". When making a request, you must pass the ",(0,s.jsx)(n.code,{children:"Content-Type"})," header with a value of ",(0,s.jsx)(n.code,{children:"application/json"}),", for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Content-Type: application/json\n"})}),"\n",(0,s.jsx)(n.h4,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(n.p,{children:["Allxon API only supports Allxon Signature Version 1(",(0,s.jsx)(n.code,{children:"ALLXON-SIG1"}),") for authentication. When making a request, you must pass the ",(0,s.jsx)(n.code,{children:"Authorization"})," header in the format below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Authorization: ALLXON-SIG1 Credential="ApiKeyID",Signature="Signature"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/allxon-api/APIAuthorization",children:"API Authorization"})," for more detail."]}),"\n",(0,s.jsx)(n.h4,{id:"x-allxon-epoch",children:"X-Allxon-Epoch"}),"\n",(0,s.jsxs)(n.p,{children:["The UTC timestamp in number of milliseconds. It's needed for calculating the signature in the ",(0,s.jsx)(n.code,{children:"Authorization"})," header. Upon receiving a request, the server will validate the value of ",(0,s.jsx)(n.code,{children:"X-Allxon-Epoch"})," within a ",(0,s.jsx)(n.strong,{children:"10 minute"})," window. When making a request, you must pass the ",(0,s.jsx)(n.code,{children:"X-Allxon-Epoch"})," header with the format below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"X-Allxon-Epoch: 1708954065872\n"})}),"\n",(0,s.jsx)(n.h2,{id:"allxon-api-response",children:"Allxon API response"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#response-headers",children:"Response Headers"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#response-http-status-code",children:"Response HTTP status code"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"response-headers",children:"Response Headers"}),"\n",(0,s.jsx)(n.p,{children:"These headers are included the header in every response from Allxon API."}),"\n",(0,s.jsx)(n.h4,{id:"content-encoding",children:"Content-Encoding"}),"\n",(0,s.jsxs)(n.p,{children:["Allxon API always uses the value ",(0,s.jsx)(n.code,{children:"gzip"})," in response, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Content-Encoding: gzip\n"})}),"\n",(0,s.jsx)(n.h4,{id:"content-type-1",children:"Content-Type"}),"\n",(0,s.jsxs)(n.p,{children:["Allxon API always uses the value ",(0,s.jsx)(n.code,{children:"application/json"})," in response, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Content-Type: application/json\n"})}),"\n",(0,s.jsx)(n.h5,{id:"x-request-id",children:"X-Request-ID"}),"\n",(0,s.jsxs)(n.p,{children:["The value for the ",(0,s.jsx)(n.code,{children:"X-Request-ID"})," is a random token which is unique per HTTP request. A UUID 4 string is used as the identifier, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"X-Request-ID: 0535ae17-3bb1-4b07-aa07-a25b831e5979\n"})}),"\n",(0,s.jsx)(n.h5,{id:"x-ratelimit-limit",children:"X-Ratelimit-Limit"}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of requests that you can make per hour, for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"X-Ratelimit-Limit: 1000\n"})}),"\n",(0,s.jsx)(n.h5,{id:"x-ratelimit-remaining",children:"X-Ratelimit-Remaining"}),"\n",(0,s.jsx)(n.p,{children:"The number of requests remaining in the current rate-limit window, for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"X-Ratelimit-Remaining: 900\n"})}),"\n",(0,s.jsx)(n.h5,{id:"x-ratelimit-reset",children:"X-Ratelimit-Reset"}),"\n",(0,s.jsx)(n.p,{children:"The epoch time, in seconds, at which the current rate-limit window resets. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"X-Ratelimit-Reset: 1714726743\n"})}),"\n",(0,s.jsx)(n.h3,{id:"response-http-status-codes",children:"Response HTTP Status Codes"}),"\n",(0,s.jsx)(n.p,{children:"Allxon API uses HTTP response codes to indicate the success or failure of an API request.\nIn general:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"2xx: Indicate success, different per API endpoint"}),"\n",(0,s.jsx)(n.li,{children:"4xx: Indicate a client errors that occur due to invalid or incomplete information in the request"}),"\n",(0,s.jsx)(n.li,{children:"5xx: Indicate an error with the server"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The response body for ",(0,s.jsx)(n.code,{children:"4xx"})," error codes will be formatted as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "code": "E403-1",\n    "message": "The failed reason"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"HTTP Status Code Summary"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"200"}),(0,s.jsx)(n.td,{children:"The request has completed successfully"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"202"}),(0,s.jsx)(n.td,{children:"The request has been submitted and will be processed in the background"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"The request contains invalid or incomplete information"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"The request does not contain a valid API key"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"The API key does not have permissions to perform the request"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"The requested resource does not exist"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"405"}),(0,s.jsx)(n.td,{children:"The requested method is not supported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"409"}),(0,s.jsx)(n.td,{children:"The requested resource already exists"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"429"}),(0,s.jsx)(n.td,{children:"The number of requests have exceeded the rate limits"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Something went wrong on server"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);