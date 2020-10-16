(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(131)),i={id:"infrastructure_code",title:"Infrastructure",sidebar_label:"Infrastructure"},c={unversionedId:"infrastructure/azure/infrastructure_code",id:"infrastructure/azure/infrastructure_code",isDocsHomePage:!1,title:"Infrastructure",description:"\x3c!--",source:"@site/docs/infrastructure/azure/infrastructure_code.md",slug:"/infrastructure/azure/infrastructure_code",permalink:"/stacks/docs/infrastructure/azure/infrastructure_code",editUrl:"https://github.com/amido/stacks/docs/infrastructure/azure/infrastructure_code.md",version:"current",sidebar_label:"Infrastructure",sidebar:"docs",previous:{title:"End to end automation testing with Serenity BDD and Java",permalink:"/stacks/docs/workloads/java/end_to_end_testing_java"},next:{title:"Pipeline Templates",permalink:"/stacks/docs/infrastructure/azure/pipeline_templates"}},s=[{value:"Terraform",id:"terraform",children:[{value:"Recommended Usage",id:"recommended-usage",children:[]}]},{value:"Bootstrap the Azure tenant",id:"bootstrap-the-azure-tenant",children:[{value:"Security best practice recommendations",id:"security-best-practice-recommendations",children:[]},{value:"Resolving lock state",id:"resolving-lock-state",children:[]}]},{value:"Azure Devops Pipelines",id:"azure-devops-pipelines",children:[{value:"Contributing",id:"contributing",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All infrastructure tooling is done with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.terraform.io/"}),"Terraform"),", as a method for implementing our infrastructure as code. Terraform uses workspaces as the main mechanism of segregating states."),Object(o.b)("h2",{id:"terraform"},"Terraform"),Object(o.b)("p",null,"All the modules used by stacks are documented and maintained ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amido/stacks-terraform"}),"here")),Object(o.b)("h3",{id:"recommended-usage"},"Recommended Usage"),Object(o.b)("p",null,"workspaces... "),Object(o.b)("p",null,"Optionally create feature based environments by passing..."),Object(o.b)("h2",{id:"bootstrap-the-azure-tenant"},"Bootstrap the Azure tenant"),Object(o.b)("p",null,"The first step is to create the Azure tenant and subscription by creating a SPN service account and a storage account for terraform state. This process only needs to be run once run once on an administrators workstation."),Object(o.b)("p",null,"The administrator will need the following permissions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Azure AD "Global Administrator" role for the Azure AD Tenant'),Object(o.b)("li",{parentName:"ul"},"IAM subscription owner")),Object(o.b)("p",null,"With owner privileges:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://azure.microsoft.com/en-gb/services/storage/blobs/"}),"Blob Storage instance")),Object(o.b)("li",{parentName:"ol"},"Take note of:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"storage account name"),Object(o.b)("li",{parentName:"ol"},"blob name"),Object(o.b)("li",{parentName:"ol"},"ClientID"),Object(o.b)("li",{parentName:"ol"},"TenantID"),Object(o.b)("li",{parentName:"ol"},"SubscriptionId"),Object(o.b)("li",{parentName:"ol"},"ClientSecret")))),Object(o.b)("h3",{id:"security-best-practice-recommendations"},"Security best practice recommendations"),Object(o.b)("h4",{id:"azure"},"Azure"),Object(o.b)("p",null,"Terraform state - blob storage can be in a different subscription to your solution subscription - which is where your applications and their infra will live\nThe terraform state subscription should be locked to normal users (developers)."),Object(o.b)("p",null,"Users (AAD users) should have only a read-only access to the solution subscription dashboard."),Object(o.b)("p",null,"When initialising terraform's backend you will use the tf state subscription credentials and for the provider you will use the solution credentials - this will be an SPN account's (`client/tenant/subscription_id and client_secret)"),Object(o.b)("h3",{id:"resolving-lock-state"},"Resolving lock state"),Object(o.b)("p",null,"Either locally, or in the pipeline, if an error occurs like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-log"}),"Error: Error loading state: failed to lock azure state: storage: service returned error: StatusCode=409, ErrorCode=LeaseAlreadyPresent, ErrorMessage=There is already a lease present.\nRequestId:REQUEST_ID\nTime:0000-00-00T00:00:00.0000000Z, RequestInitiated=Weekday, Day Month YYYY 00:00:00 GMT, RequestId=0000000-0000-0000-0000-000000000000, API Version=YYYY-MM-DD, QueryParameterName=, QueryParameterValue=\nLock Info:\n  ID:        0000000-0000-0000-0000-000000000000\n  Path:      tfstate/amido-stacks-menuenv:amido-stacks-menu-test\n  Operation: OperationTypeApply\n  Who:       vsts@fv-az692\n  Version:   0.00.00\n  Created:   0000-00-00T00:00:00.0000000 +0000 UTC\n  Info:      \n")),Object(o.b)("p",null,"We recommend resolving this through the CLI rather than the Portal interface."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"az storage blob lease break -b $KEY_NAME -c $BLOB_NAME \\\n --account-name $STORAGE_ACC_NAME --account-key $STORAGE_ACC_KEY\n")),Object(o.b)("p",null,"On success, exit code 0 to be returned."),Object(o.b)("h2",{id:"azure-devops-pipelines"},"Azure Devops Pipelines"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/stacks/docs/infrastructure/azure/pipeline_templates"}),"Pipeline Templates")," for more information about our open sourced steps."),Object(o.b)("h3",{id:"contributing"},"Contributing"),Object(o.b)("h4",{id:"running-locally"},"Running Locally"),Object(o.b)("p",null,"To test the deploy folder has been correctly provisioned prior to checking\nyou need to at this point in time copy over a sample backend-config and\nterraform vars. Currently vars.tf and provider configuration is not\nautomatically updated. Future iterations will include this."),Object(o.b)("p",null,"The safest way to run and maintain this going forward is to rely on environment\nvariables for credentials as that is the way the pipeline will trigger the\nexecutions of terraform."),Object(o.b)("p",null,"Sample export script with correct environment vars:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'#WINDOWS: comment out the lines below\n$ export ARM_CLIENT_ID= \\\nARM_CLIENT_SECRET= \\\nARM_SUBSCRIPTION_ID= \\\nARM_TENANT_ID=\n##########################################################\n\n#WINDOWS: uncomment the following lines and fill in values\n# Set-Variable -Name "ARM_CLIENT_ID" -Value ""\n# Set-Variable -Name "ARM_CLIENT_SECRET" -Value ""\n# Set-Variable -Name "ARM_SUBSCRIPTION_ID" -Value ""\n# Set-Variable -Name "ARM_TENANT_ID" -Value ""\n##########################################################\n\n$ echo "\nvnet_id                 = \\"amido-stacks-vnet-uks-dev\\"\nrg_name                 = \\"amido-stacks-rg-uks-dev\\"\nresource_group_location = \\"uksouth\\"\nname_company            = \\"amido\\"\nname_project            = \\"stacks\\"\nname_component          = \\"spa\\"\nname_environment        = \\"dev\\"\n" > ${YOUR_GIT_STACKS_WEB_APP_PATH}/stacks-webapp-template/deploy/terraform/azure/backend.local.tfvars\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd ${YOUR_GIT_STACKS_WEB_APP_PATH}/deploy/terraform/azure\nterraform init -backend-config=./backend.local.tfvars\nterraform plan\n")))}u.isMDXComponent=!0},131:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);