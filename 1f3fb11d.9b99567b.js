(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(118)),i={id:"cli_webapp_frameworks",title:"Getting Started",sidebar_label:"Getting Started"},l={unversionedId:"workloads/frontend/cli_webapp_frameworks",id:"workloads/frontend/cli_webapp_frameworks",isDocsHomePage:!1,title:"Getting Started",description:"Web applications require a lot of boilerplate. It's also hard to know how to get started without examples. We offer both server side rendered (SSR) and client side rendered (CSR) solutions that can be bootstrapped and tailored to your current project with just one command.",source:"@site/docs/workloads/frontend/cli_webapp_frameworks.md",slug:"/workloads/frontend/cli_webapp_frameworks",permalink:"/stacks/docs/workloads/frontend/cli_webapp_frameworks",editUrl:"https://github.com/amido/stacks/docs/workloads/frontend/cli_webapp_frameworks.md",version:"current",sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Enviroment Variables",permalink:"/stacks/docs/workloads/frontend/environment_variables_nodejs"},next:{title:"Stacks Monorepo",permalink:"/stacks/docs/workloads/frontend/monorepo"}},c=[{value:"Bootstrap your framework",id:"bootstrap-your-framework",children:[{value:"Get developing in just a few questions",id:"get-developing-in-just-a-few-questions",children:[]}]},{value:"Get developing",id:"get-developing",children:[{value:"Development",id:"development",children:[]},{value:"Production",id:"production",children:[]}]},{value:"Customising",id:"customising",children:[]},{value:"Feedback",id:"feedback",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Web applications require a lot of boilerplate. It's also hard to know how to get started without examples. We offer both server side rendered (SSR) and client side rendered (CSR) solutions that can be bootstrapped and tailored to your current project with just one command."),Object(a.b)("p",null,"Oh, and they come complete with infrastructure as code so you can deploy on your cloud of choice."),Object(a.b)("p",null,"Brilliant."),Object(a.b)("h2",{id:"bootstrap-your-framework"},"Bootstrap your framework"),Object(a.b)("p",null,"The best way to get started, is bootstrap the framework using the scaffolding-cli from Amido Stacks. By using it in interactive mode, you can simply answered 5 questions to get a bespoke framework, ready to go with an example test."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"npx @amidostacks/scaffolding-cli run -i")),Object(a.b)("h3",{id:"get-developing-in-just-a-few-questions"},"Get developing in just a few questions"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS.svg",alt:"asciicast"})))),Object(a.b)("h2",{id:"get-developing"},"Get developing"),Object(a.b)("p",null,"At the end of bootstrapping your example framework, you will have an output that will contain all the:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"dependencies"),Object(a.b)("li",{parentName:"ul"},"scripts"),Object(a.b)("li",{parentName:"ul"},"example tests"),Object(a.b)("li",{parentName:"ul"},"pipelines"),Object(a.b)("li",{parentName:"ul"},"environment variables"),Object(a.b)("li",{parentName:"ul"},"and information to start testing immediately")),Object(a.b)("h3",{id:"development"},"Development"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install\nnpm  run dev\n")),Object(a.b)("p",null,"This offers live reload of both server side  - ",Object(a.b)("em",{parentName:"p"},"when using ssr")," - and client side code."),Object(a.b)("h3",{id:"production"},"Production"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install\nnpm run build\nnpm run start\n")),Object(a.b)("p",null,"This will start the app in production mode, so you can see how it would behave deployed!"),Object(a.b)("h2",{id:"customising"},"Customising"),Object(a.b)("p",null,"Since the frameworks provide real examples on deployed applications, we recommend using these as examples and then replacing them with your own applications under test."),Object(a.b)("h2",{id:"feedback"},"Feedback"),Object(a.b)("p",null,"As always, we only improve from the incredible feedback and contributions from people like you. To help us improve, see our contribution guide for more information."))}p.isMDXComponent=!0}}]);