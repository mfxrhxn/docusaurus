"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["7809"],{68480:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>u,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"api/misc/eslint-plugin/README","title":"\uD83D\uDCE6 eslint-plugin","description":"ESLint is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices.","source":"@site/docs/api/misc/eslint-plugin/README.mdx","sourceDirName":"api/misc/eslint-plugin","slug":"/api/misc/@docusaurus/eslint-plugin","permalink":"/docs/api/misc/@docusaurus/eslint-plugin","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/README.mdx","tags":[],"version":"current","lastUpdatedBy":"Milica","lastUpdatedAt":1739445675000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"slug":"/api/misc/@docusaurus/eslint-plugin"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 create-docusaurus","permalink":"/docs/api/misc/create-docusaurus"},"next":{"title":"no-html-links","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/no-html-links"}}'),t=s(85893),l=s(80980),i=s(15398),a=s(58636);let u={sidebar_position:1,slug:"/api/misc/@docusaurus/eslint-plugin"},o="\uD83D\uDCE6 eslint-plugin",c={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Recommended config",id:"recommended-config",level:3},{value:"Manual config",id:"manual-config",level:3},{value:"Supported configs",id:"supported-configs",level:2},{value:"Supported rules",id:"supported-rules",level:2},{value:"Example configuration",id:"example-configuration",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-eslint-plugin",children:"\uD83D\uDCE6 eslint-plugin"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"})," is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @docusaurus/eslint-plugin\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @docusaurus/eslint-plugin\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @docusaurus/eslint-plugin\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"recommended-config",children:"Recommended config"}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"plugin:@docusaurus/recommended"})," to the ",(0,t.jsx)(n.code,{children:"extends"})," section of your ",(0,t.jsx)(n.code,{children:".eslintrc"})," configuration file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title=".eslintrc"',children:'{\n  "extends": ["plugin:@docusaurus/recommended"]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This will enable the ",(0,t.jsx)(n.code,{children:"@docusaurus"})," eslint plugin and use the ",(0,t.jsx)(n.code,{children:"recommended"})," config. See ",(0,t.jsx)(n.a,{href:"#supported-rules",children:"Supported rules"})," below for a list of rules that this will enable."]}),"\n",(0,t.jsx)(n.h3,{id:"manual-config",children:"Manual config"}),"\n",(0,t.jsx)(n.p,{children:"For more fine-grained control, you can also enable the plugin manually and configure the rules you want to use directly:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title=".eslintrc"',children:'{\n  "plugins": ["@docusaurus"],\n  "rules": {\n    "@docusaurus/string-literal-i18n-messages": "error",\n    "@docusaurus/no-untranslated-text": "warn"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"supported-configs",children:"Supported configs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Recommended: recommended rule set for most Docusaurus sites that should be extended from."}),"\n",(0,t.jsxs)(n.li,{children:["All: ",(0,t.jsx)(n.strong,{children:"all"})," rules enabled. This will change between minor versions, so you should not use this if you want to avoid unexpected breaking changes."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"supported-rules",children:"Supported rules"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text",children:(0,t.jsx)(n.code,{children:"@docusaurus/no-untranslated-text"})})}),(0,t.jsx)(n.td,{children:"Enforce text labels in JSX to be wrapped by translate calls"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages",children:(0,t.jsx)(n.code,{children:"@docusaurus/string-literal-i18n-messages"})})}),(0,t.jsx)(n.td,{children:"Enforce translate APIs to be called on plain text labels"}),(0,t.jsx)(n.td,{children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/misc/@docusaurus/eslint-plugin/no-html-links",children:(0,t.jsx)(n.code,{children:"@docusaurus/no-html-links"})})}),(0,t.jsxs)(n.td,{children:["Ensures @docusaurus/Link is used instead of ",(0,t.jsx)(n.code,{children:"<a>"})," tags"]}),(0,t.jsx)(n.td,{children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/misc/@docusaurus/eslint-plugin/prefer-docusaurus-heading",children:(0,t.jsx)(n.code,{children:"@docusaurus/prefer-docusaurus-heading"})})}),(0,t.jsxs)(n.td,{children:["Ensures @theme/Heading is used instead of ",(0,t.jsx)(n.code,{children:"<hn>"})," tags for headings"]}),(0,t.jsx)(n.td,{children:"\u2705"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"\u2705 = recommended"}),"\n",(0,t.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,t.jsx)(n.p,{children:"Here's an example configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title=".eslintrc.js"',children:"module.exports = {\n  extends: ['plugin:@docusaurus/recommended'],\n  rules: {\n    '@docusaurus/no-untranslated-text': [\n      'warn',\n      {ignoredStrings: ['\xb7', '\u2014', '\xd7']},\n    ],\n  },\n};\n"})})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},58636:function(e,n,s){s.d(n,{Z:()=>l});var r=s(85893);s(67294);var t=s(90496);function l(e){let{children:n,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_pnkT",l),hidden:s,children:n})}},15398:function(e,n,s){s.d(n,{Z:()=>j});var r=s(85893),t=s(67294),l=s(90496),i=s(54947),a=s(3620),u=s(844),o=s(97486),c=s(32263),d=s(16971);function h(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:s}=e;return s.some(e=>e.value===n)}var m=s(71607);function g(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let n=e.currentTarget,s=u[o.indexOf(n)].value;s!==t&&(c(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{let s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},n),children:u.map(e=>{let{value:n,label:s,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...i,className:(0,l.Z)("tabs__item","tabItem_AQgk",i?.className,{"tabs__item--active":t===n}),children:s??n},n)})})}function f(e){let{lazy:n,children:s,selectedValue:i}=e,a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){let e=a.find(e=>e.props.value===i);return e?(0,t.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:r}=e,l=function(e){let{values:n,children:s}=e;return(0,t.useMemo)(()=>{let e=n??h(s).map(e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[i,m]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=s.find(e=>e.default)??s[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:l})),[g,f]=function(e){let{queryString:n=!1,groupId:s}=e,r=(0,a.k6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(l),(0,t.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})},[l,r])]}({queryString:s,groupId:r}),[x,j]=function(e){let{groupId:n}=e,s=n?`docusaurus.tab.${n}`:null,[r,l]=(0,d.Nk)(s);return[r,(0,t.useCallback)(e=>{s&&l.set(e)},[s,l])]}({groupId:r}),b=(()=>{let e=g??x;return p({value:e,tabValues:l})?e:null})();return(0,u.Z)(()=>{b&&m(b)},[b]),{selectedValue:i,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),j(e)},[f,j,l]),tabValues:l}}(e);return(0,r.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(g,{...n,...e}),(0,r.jsx)(f,{...n,...e})]})}function j(e){let n=(0,m.Z)();return(0,r.jsx)(x,{...e,children:h(e.children)},String(n))}},80980:function(e,n,s){s.d(n,{Z:()=>a,a:()=>i});var r=s(67294);let t={},l=r.createContext(t);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);