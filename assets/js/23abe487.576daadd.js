"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["16580"],{95141:function(e,a,t){t.r(a),t.d(a,{default:function(){return s}});var n=t(85893);t(67294);var l=t(30056),r=t(93470),o=t(7443);function s(){let{siteConfig:e}=(0,l.Z)();return(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("h2",{children:"Site config"}),(0,n.jsx)(o.Z,{src:e,collapseDepth:3})]})}},7443:function(e,a,t){t.d(a,{Z:()=>E});var n=t("85893"),l=t("67294");let r=e=>"boolean"==typeof e||e instanceof Boolean,o=e=>"number"==typeof e||e instanceof Number,s=e=>"bigint"==typeof e||e instanceof BigInt,c=e=>!!e&&e instanceof Date,i=e=>"string"==typeof e||e instanceof String,u=e=>Array.isArray(e),d=e=>e instanceof Object&&null!==e;function m(e,a){return void 0===a&&(a=!1),!e||a?`"${e}"`:e}function b(e){let{field:a,value:t,data:n,lastElement:r,openBracket:o,closeBracket:s,level:c,style:i,shouldExpandNode:u,clickToExpandNode:d,outerRef:b}=e,p=(0,l.useRef)(!1),[f,_,h]=function(e){let[a,t]=(0,l.useState)(e());return[a,()=>t(e=>!e),t]}(()=>u(c,t,a)),x=(0,l.useRef)(null);(0,l.useEffect)(()=>{p.current?h(u(c,t,a)):p.current=!0},[u]);let k=f?i.collapseIcon:i.expandIcon,N=f?"collapse JSON":"expand JSON",v=(0,l.useId)(),E=c+1,y=n.length-1,V=e=>{if("ArrowRight"===e.key||"ArrowLeft"===e.key)e.preventDefault(),h("ArrowRight"===e.key);else if("ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let a="ArrowUp"===e.key?-1:1;if(!b.current)return;let t=b.current.querySelectorAll("[role=button]"),n=-1;for(let e=0;e<t.length;e++)if(0===t[e].tabIndex){n=e;break}if(n<0)return;let l=(n+a+t.length)%t.length;t[n].tabIndex=-1,t[l].tabIndex=0,t[l].focus()}},j=()=>{var e;_();let a=x.current;if(!a)return;let t=null===(e=b.current)||void 0===e?void 0:e.querySelector('[role=button][tabindex="0"]');t&&(t.tabIndex=-1),a.tabIndex=0,a.focus()};return(0,l.createElement)("div",{className:i.basicChildStyle,role:"treeitem","aria-expanded":f,"aria-selected":void 0},(0,l.createElement)("span",{className:k,onClick:j,onKeyDown:V,role:"button","aria-label":N,"aria-expanded":f,"aria-controls":f?v:void 0,ref:x,tabIndex:0===c?0:-1}),(a||""===a)&&(d?(0,l.createElement)("span",{className:i.clickableLabel,onClick:j,onKeyDown:V},m(a,i.quotesForFieldNames),":"):(0,l.createElement)("span",{className:i.label},m(a,i.quotesForFieldNames),":")),(0,l.createElement)("span",{className:i.punctuation},o),f?(0,l.createElement)("ul",{id:v,role:"group",className:i.childFieldsContainer},n.map((e,a)=>(0,l.createElement)(g,{key:e[0]||a,field:e[0],value:e[1],style:i,lastElement:a===y,level:E,shouldExpandNode:u,clickToExpandNode:d,outerRef:b}))):(0,l.createElement)("span",{className:i.collapsedContent,onClick:j,onKeyDown:V}),(0,l.createElement)("span",{className:i.punctuation},s),!r&&(0,l.createElement)("span",{className:i.punctuation},","))}function p(e){let{field:a,openBracket:t,closeBracket:n,lastElement:r,style:o}=e;return(0,l.createElement)("div",{className:o.basicChildStyle,role:"treeitem","aria-selected":void 0},(a||""===a)&&(0,l.createElement)("span",{className:o.label},m(a,o.quotesForFieldNames),":"),(0,l.createElement)("span",{className:o.punctuation},t),(0,l.createElement)("span",{className:o.punctuation},n),!r&&(0,l.createElement)("span",{className:o.punctuation},","))}function f(e){let{field:a,value:t,style:n,lastElement:l,shouldExpandNode:r,clickToExpandNode:o,level:s,outerRef:c}=e;return 0===Object.keys(t).length?p({field:a,openBracket:"{",closeBracket:"}",lastElement:l,style:n}):b({field:a,value:t,lastElement:l||!1,level:s,openBracket:"{",closeBracket:"}",style:n,shouldExpandNode:r,clickToExpandNode:o,data:Object.keys(t).map(e=>[e,t[e]]),outerRef:c})}function _(e){let{field:a,value:t,style:n,lastElement:l,level:r,shouldExpandNode:o,clickToExpandNode:s,outerRef:c}=e;return 0===t.length?p({field:a,openBracket:"[",closeBracket:"]",lastElement:l,style:n}):b({field:a,value:t,lastElement:l||!1,level:r,openBracket:"[",closeBracket:"]",style:n,shouldExpandNode:o,clickToExpandNode:s,data:t.map(e=>[void 0,e]),outerRef:c})}function h(e){let a,{field:t,value:n,style:u,lastElement:d}=e,b=u.otherValue;return null===n?(a="null",b=u.nullValue):void 0===n?(a="undefined",b=u.undefinedValue):i(n)?(a=m(n,!u.noQuotesForStringValues),b=u.stringValue):r(n)?(a=n?"true":"false",b=u.booleanValue):o(n)?(a=n.toString(),b=u.numberValue):s(n)?(a=`${n.toString()}n`,b=u.numberValue):a=c(n)?n.toISOString():n.toString(),(0,l.createElement)("div",{className:u.basicChildStyle,role:"treeitem","aria-selected":void 0},(t||""===t)&&(0,l.createElement)("span",{className:u.label},m(t,u.quotesForFieldNames),":"),(0,l.createElement)("span",{className:b},a),!d&&(0,l.createElement)("span",{className:u.punctuation},","))}function g(e){let a=e.value;return u(a)?(0,l.createElement)(_,Object.assign({},e)):d(a)&&!c(a)?(0,l.createElement)(f,Object.assign({},e)):(0,l.createElement)(h,Object.assign({},e))}let x={container:"_2IvMF _GzYRV",basicChildStyle:"_2bkNM",childFieldsContainer:"_1BXBN",label:"_1MGIk",clickableLabel:"_2YKJg _1MGIk _1MFti",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti",noQuotesForStringValues:!1,quotesForFieldNames:!1},k=()=>!0,N=e=>{let{data:a,style:t=x,shouldExpandNode:n=k,clickToExpandNode:r=!1,...o}=e,s=(0,l.useRef)(null);return(0,l.createElement)("div",Object.assign({"aria-label":"JSON view"},o,{className:t.container,ref:s,role:"tree"}),(0,l.createElement)(g,{value:a,style:{...x,...t},lastElement:!0,level:0,shouldExpandNode:n,clickToExpandNode:r,outerRef:s}))},v={clickableLabel:x.clickableLabel,noQuotesForStringValues:!1,container:"containerParaiso_TYa3",basicChildStyle:"basicElementParaiso_DqvR",label:"labelParaiso_l3ql",nullValue:"nullValueParaiso_Ey4X",undefinedValue:"undefinedValueParaiso__T3e",stringValue:"stringValueParaiso_T6i7",booleanValue:"booleanValueParaiso__TSh",numberValue:"numberValueParaiso_JGW0",otherValue:"otherValueParaiso_nnwW",punctuation:"punctuationParaiso_knwc",collapseIcon:"collapseIconParaiso_MWEp",expandIcon:"expandIconParaiso_fAkX",collapsedContent:"collapseContentParaiso_KH36",childFieldsContainer:"childFieldsContainerParaiso_HB7R"};function E(e){let{src:a,collapseDepth:t}=e;return(0,n.jsx)(N,{data:a,shouldExpandNode:(e,a)=>Array.isArray(a)?a.length<5:void 0!==t&&e<t,style:v})}},93470:function(e,a,t){t.d(a,{Z:()=>s});var n=t("85893");t("67294");var l=t("28289"),r=t("64152");function o(e){let{to:a,children:t}=e;return(0,n.jsx)(r.Z,{className:"navlink__gTJ",isNavLink:!0,to:a,exact:!0,activeStyle:{backgroundColor:"#363739"},children:t})}function s(e){let{children:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("html",{lang:"en"}),(0,n.jsx)("title",{children:"Docusaurus debug panel"}),(0,n.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("nav",{className:"nav_sWk6",children:[(0,n.jsx)(o,{to:"/__docusaurus/debug",children:"Config"}),(0,n.jsx)(o,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,n.jsx)(o,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,n.jsx)(o,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,n.jsx)(o,{to:"/__docusaurus/debug/content",children:"Content"}),(0,n.jsx)(o,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,n.jsx)("main",{className:"container_tECh",children:a})]})]})}}}]);