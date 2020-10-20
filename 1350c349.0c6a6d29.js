(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||s;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<s;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),s=(n(0),n(142)),i={id:"pipeline_templates",title:"Pipeline Templates",sidebar_label:"Pipeline Templates"},c={unversionedId:"infrastructure/azure/pipeline_templates",id:"infrastructure/azure/pipeline_templates",isDocsHomePage:!1,title:"Pipeline Templates",description:"Where possible, we are creating reusable steps that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more.",source:"@site/docs/infrastructure/azure/pipeline_templates.md",slug:"/infrastructure/azure/pipeline_templates",permalink:"/stacks/docs/infrastructure/azure/pipeline_templates",version:"current",sidebar_label:"Pipeline Templates",sidebar:"docs",previous:{title:"Infrastructure",permalink:"/stacks/docs/infrastructure/azure/infrastructure_code"},next:{title:"Testing and Quality",permalink:"/stacks/docs/testing/testing"}},o=[{value:"Azure DevOps: Pipelines",id:"azure-devops-pipelines",children:[{value:"Service connections",id:"service-connections",children:[]},{value:"Example usage",id:"example-usage",children:[]}]}],p={rightToc:o};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Where possible, we are creating reusable steps that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more."),Object(s.b)("h2",{id:"azure-devops-pipelines"},"Azure DevOps: Pipelines"),Object(s.b)("p",null,"The ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/amido/stacks-pipeline-templates"}),"stacks-pipeline-templates")," are provided as a base standard process for deploying stacks infrastructure, see ",Object(s.b)("inlineCode",{parentName:"p"},"stacks-infrastructure")," and ",Object(s.b)("inlineCode",{parentName:"p"},"stacks-dotnet")," pipeline files under the ",Object(s.b)("inlineCode",{parentName:"p"},"./build/AzDevOps/")," folders for their specific usage."),Object(s.b)("h3",{id:"service-connections"},"Service connections"),Object(s.b)("p",null,"Assuming that you will be consuming the templates from the public ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/amido/stacks-pipeline-templates"}),"repo"),", a service connection will need to be configured to ensure we can pull in the source code. The service connection will need a ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/settings/tokens"}),"Github Personal Access Token")," (or credentials) to pull in the code. At a minimum, the access token will need to include:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"read:repo"),Object(s.b)("p",{parentName:"li"},"Once a token is generated, the service connection can be configured for the project. Instructions can be found at ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/library/service-endpoints?view=azure-devops&tabs=yaml#create-a-service-connection"}),"Manage Service Connections"),"."),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/service_connection_adding.gif",alt:"service_connections"}))))),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"resources:\n  repositories:\n  - repository: templates\n    type: github\n    name: amido/stacks-pipeline-templates\n    ref: refs/tags/v1.1.0 # Ensure the correct tag is referenced here to ensure version control\n    endpoint: amidostacks # Name of the service account created for the connection to GitHub from Azure DevOps\n")),Object(s.b)("h3",{id:"example-usage"},"Example usage"),Object(s.b)("p",null,"The below shows an example of how to reference the resource, and pull in the step template."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"pool:\n  vmImage: windows-2019\n\nresources:\n  repositories:\n    - repository: templates\n      type: github\n      name: amido/stacks-pipeline-templates\n      ref: refs/tags/v1.1.0\n      endpoint: 'GitHub Service Connection'\n\nsteps:\n  # Functional tests running on deployed webapp\n  - template: azDevOps/azure/templates/v2/steps/test-functional-testcafe.yml@templates\n    parameters:\n      env_vars:\n        APP_BASE_URL: \"https://www.google.com\"\n      workingDirectory: './src/'\n      testcafe_browser_list: \"chrome,firefox,ie,edge\"\n")),Object(s.b)("p",null,"This is an example of a step template being used, but with parameters passed in:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"  # Functional tests running on locally built and hosted (undeployed)\n  - ${{ if eq(parameters.cypress_e2e_test, true) }}:\n      - template: azDevOps/azure/templates/v2/steps/test-functional-cypress.yml@templates\n        parameters:\n          env_vars: ${{ parameters.cypress_e2e_env_vars}}\n          workingDirectory: ${{ parameters.project_root_dir }}\n")))}l.isMDXComponent=!0}}]);