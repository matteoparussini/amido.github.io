(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{131:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),b=u(t),p=r,f=b["".concat(c,".").concat(p)]||b[p]||s[p]||o;return t?a.a.createElement(f,i(i({ref:n},l),{},{components:t})):a.a.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(131)),c={},i={unversionedId:"workloads/frontend/index",id:"workloads/frontend/index",isDocsHomePage:!1,title:"index",description:"csr",source:"@site/docs/workloads/frontend/index.md",slug:"/workloads/frontend/index",permalink:"/stacks/docs/workloads/frontend/index",editUrl:"https://github.com/amido/stacks/docs/workloads/frontend/index.md",version:"current"},d=[{value:"Domain Code",id:"domain-code",children:[]},{value:"Deployment Code",id:"deployment-code",children:[]},{value:"Infrastructure Code",id:"infrastructure-code",children:[]},{value:"State management",id:"state-management",children:[]}],l={rightToc:d};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"csr"},"csr"),Object(o.b)("p",null,"This project contains the following components:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"##Domain%5C%20%5CCode"}),"Domain Code")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"##Deployment%5C%20%5CCode"}),"Deployment Code")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"##Infrastructure%5C%20%5CCode"}),"Infrastructure Code"))),Object(o.b)("p",null,"Further details can be found below with links to relevant"),Object(o.b)("h2",{id:"domain-code"},"Domain Code"),Object(o.b)("hr",null),Object(o.b)("p",null,"The base domain code explanations and usage guides for extending can be found\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./domain.md"}),"here")),Object(o.b)("h2",{id:"deployment-code"},"Deployment Code"),Object(o.b)("hr",null),Object(o.b)("p",null,"The base deployment code explanations and usage guides for extending can be\nfound ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/stacks/docs/workloads/frontend/deployment_node_js"}),"here")),Object(o.b)("h2",{id:"infrastructure-code"},"Infrastructure Code"),Object(o.b)("hr",null),Object(o.b)("p",null,"The base infrastracture layout and usage guides for extending can be found\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./infrastructure.md"}),"here")),Object(o.b)("h2",{id:"state-management"},"State management"),Object(o.b)("hr",null),Object(o.b)("p",null,"The usage guides for state management and middlewares can be found\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/stacks/docs/workloads/frontend/state-management"}),"here")))}u.isMDXComponent=!0}}]);