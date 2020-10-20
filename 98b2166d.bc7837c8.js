(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return c}));var i=t(2),r=t(6),o=(t(0),t(169)),a={id:"logging_netcore",title:"Logging with Serilog and Application Insights",sidebar_label:"Logging",hide_title:!0,hide_table_of_contents:!1},l={unversionedId:"workloads/azure/backend/netcore/logging_netcore",id:"workloads/azure/backend/netcore/logging_netcore",isDocsHomePage:!1,title:"Logging with Serilog and Application Insights",description:"Logging with Serilog and Application Insights",source:"@site/docs/workloads/azure/backend/netcore/logging_netcore.md",slug:"/workloads/azure/backend/netcore/logging_netcore",permalink:"/stacks/docs/workloads/azure/backend/netcore/logging_netcore",version:"current",sidebar_label:"Logging",sidebar:"docs",previous:{title:".NET Core infrastructure pipeline",permalink:"/stacks/docs/workloads/azure/backend/netcore/infrastructure/pipeline_netcore"},next:{title:"Application Security",permalink:"/stacks/docs/workloads/azure/backend/netcore/security_netcore"}},s=[{value:"Logging with Serilog and Application Insights",id:"logging-with-serilog-and-application-insights",children:[{value:"Sinks",id:"sinks",children:[]},{value:"Serilog Configuration",id:"serilog-configuration",children:[]}]}],g={rightToc:s};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"logging-with-serilog-and-application-insights"},"Logging with Serilog and Application Insights"),Object(o.b)("br",null),Object(o.b)("p",null,"Dot Net Core provides a simple logging abstraction with most of required logging features used by an application. Everywhere in the application, when logging is required, the Classes generating logs should receive via dependency injection an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"ILogger<>")," to use as the logger object. The ",Object(o.b)("inlineCode",{parentName:"p"},"ILogger<>")," instances are created by Logging Factory registered by each application and will abstract the logging library from the application logging."),Object(o.b)("p",null,"The standard library has limited capabilities on log forwarding and requires additional packages to add proper filtering, enrichment and forwarding. For this reason the use of Serilog is required to extend the default logging features."),Object(o.b)("p",null,"Serilog integrates with the logger abstraction provided by DotNet Core. It provides additional Sink(outputs), Filter capabilities and Log Enrichment features to complete the limited set of features in .NET Core default loggers. Every services implemented using .NET Core should make use of Serilog library to standardize the logging approach."),Object(o.b)("br",null),Object(o.b)("h3",{id:"sinks"},"Sinks"),Object(o.b)("p",null,"By default, the ",Object(o.b)("strong",{parentName:"p"},"Console")," and ",Object(o.b)("strong",{parentName:"p"},"ApplicationInsights")," sinks should be used."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"console sink")," will output all logging generated by the service to the runtime console, and will make the logs available via command line tools like kubectl (kubectl get logs) providing a quick and straight forward way of getting the logs for a particular instance."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Application Insights")," sink will make sure all logs generated(and filtered) are forwarded for the logging platform for correlation and future investigations."),Object(o.b)("p",null,"Application Insights is the chosen logging platform and will aggregated all logs generated by all services. Console sink is an useful secondary output in order to facilitate investigation of issues with particular service that are failing. Having both setup, will make very straightforward to identify issues in real time or delayed investigation."),Object(o.b)("br",null),Object(o.b)("h3",{id:"serilog-configuration"},"Serilog Configuration"),Object(o.b)("p",null,"The following is a sample ",Object(o.b)("inlineCode",{parentName:"p"},"appsettings.json")," file with annotations about logging configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Serilog": {    // Logging configuration for Serilog\n    "Using": [\n      "Serilog.Sinks.Console",              // Import console sink package\n      "Serilog.Sinks.ApplicationInsights"   // Import ai sink package\n    ],\n    "MinimumLevel": {\n      "Default": "Information", // minimal log level for everything\n      "Override": {}            // Override for indivisual log sources\n    },\n    "WriteTo": [\n      { "Name": "Console" },    // Write Logs to console\n      {\n        "Name": "ApplicationInsights",  // Write Logs to App Insights\n        "Args": {\n          "telemetryConverter": "Serilog.Sinks.ApplicationInsights.Sinks.ApplicationInsights.TelemetryConverters.TraceTelemetryConverter, Serilog.Sinks.ApplicationInsights"\n        }\n      }\n    ],\n    "Enrich": [ "FromLogContext", "WithMachineName", "WithThreadId" ], // Add custom attributes to the logs, Hostname and the ThreadId\n    "Destructure": [],\n    "Properties": {             // fixed attributes added to every log for filtering purposes\n      "Domain": "identity",     // domain name added to every log\n      "Service": "identityapi", // service generating the logs\n      "Environment": "dev",     // environment this instance belongs to\n    },\n    "Filter": [                 // Ignore logs that macthes the following filters\n      {\n        "Name": "ByExcluding",\n        "Args": {\n          "expression": "EndsWith(RequestPath, \'/health\')" // Filter out health requests to reduce useless log information. Not required for non api services.\n        }\n      }\n    ]\n  }\n}\n')))}c.isMDXComponent=!0},169:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var i=t(0),r=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=r.a.createContext({}),c=function(e){var n=r.a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.a.createElement(g.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=i,b=p["".concat(a,".").concat(u)]||p[u]||d[u]||o;return t?r.a.createElement(b,l(l({ref:n},g),{},{components:t})):r.a.createElement(b,l({ref:n},g))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var g=2;g<o;g++)a[g]=t[g];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);