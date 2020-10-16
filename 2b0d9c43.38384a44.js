(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{131:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=r,f=d["".concat(a,".").concat(g)]||d[g]||u[g]||i;return t?o.a.createElement(f,c(c({ref:n},p),{},{components:t})):o.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(6),i=(t(0),t(131)),a={id:"logging_node_js",title:"Logging and Instrumentation",sidebar_label:"Logging and Instrumentation"},c={unversionedId:"workloads/frontend/logging_node_js",id:"workloads/frontend/logging_node_js",isDocsHomePage:!1,title:"Logging and Instrumentation",description:"Application insights",source:"@site/docs/workloads/frontend/Logging.md",slug:"/workloads/frontend/logging_node_js",permalink:"/stacks/docs/workloads/frontend/logging_node_js",editUrl:"https://github.com/amido/stacks/docs/workloads/frontend/Logging.md",version:"current",sidebar_label:"Logging and Instrumentation",sidebar:"docs",previous:{title:"Api Definition",permalink:"/stacks/docs/workloads/frontend/api_definition"},next:{title:"State Management",permalink:"/stacks/docs/workloads/frontend/state-management"}},s=[],p={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"}),"Application insights"),"\nis used to monitor both the node(express) instance and the NextJS client code\nrunning on the browser. "),Object(i.b)("p",null,"AppInsights is configured with the ",Object(i.b)("inlineCode",{parentName:"p"},"instrumentationKey"),"\n(or ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.APPINSIGHTS_INSTRUMENTATIONKEY"),") provided from the environment\nvariables. "),Object(i.b)("p",null,"AppInsights collects the console logs provided by the Winston.\nAppInsights on Client side is implemented using a React HOC(Higher order\ncomponent) to the Next's ",Object(i.b)("inlineCode",{parentName:"p"},"_app.ts"),".\n"))}l.isMDXComponent=!0}}]);