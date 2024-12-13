"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["94774"],{10393:function(e,s,t){t.r(s),t.d(s,{metadata:()=>n,contentTitle:()=>l,default:()=>d,assets:()=>u,toc:()=>c,frontMatter:()=>r});var n=JSON.parse('{"id":"api/misc/eslint-plugin/string-literal-i18n-messages","title":"string-literal-i18n-messages","description":"Enforce translate APIs to be called on plain text labels.","source":"@site/docs/api/misc/eslint-plugin/string-literal-i18n-messages.mdx","sourceDirName":"api/misc/eslint-plugin","slug":"/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/string-literal-i18n-messages.mdx","tags":[],"version":"current","lastUpdatedBy":"Zen","lastUpdatedAt":1734100023000,"frontMatter":{"slug":"/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"},"sidebar":"api","previous":{"title":"prefer-docusaurus-heading","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/prefer-docusaurus-heading"},"next":{"title":"\uD83D\uDCE6 logger","permalink":"/docs/api/misc/@docusaurus/logger"}}'),a=t("24246"),i=t("80980");let r={slug:"/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"},l="string-literal-i18n-messages",u={},c=[{value:"Rule Details",id:"details",level:2},{value:"When Not To Use It",id:"when-not-to-use",level:2},{value:"Further Reading",id:"further-reading",level:2}];function o(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"string-literal-i18n-messages",children:"string-literal-i18n-messages"})}),"\n",(0,a.jsx)(s.p,{children:"Enforce translate APIs to be called on plain text labels."}),"\n",(0,a.jsxs)(s.p,{children:["Docusaurus offers the ",(0,a.jsx)(s.a,{href:"/docs/cli#docusaurus-write-translations-sitedir",children:(0,a.jsx)(s.code,{children:"docusaurus write-translations"})})," API, which statically extracts the text labels marked as translatable. Dynamic values used in ",(0,a.jsx)(s.code,{children:"<Translate>"})," or ",(0,a.jsx)(s.code,{children:"translate()"})," calls will fail to be extracted. This rule will ensure that all translate calls are statically extractable."]}),"\n",(0,a.jsx)(s.h2,{id:"details",children:"Rule Details"}),"\n",(0,a.jsxs)(s.p,{children:["Examples of ",(0,a.jsx)(s.strong,{children:"incorrect"})," code for this rule:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"const text = 'Some text to be translated'\n\n// Invalid <Translate> child\n<Translate>{text}</Translate>\n\n// Invalid message attribute\ntranslate({message: text})\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Examples of ",(0,a.jsx)(s.strong,{children:"correct"})," code for this rule:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"// Valid <Translate> child\n<Translate>Some text to be translated</Translate>\n\n// Valid message attribute\ntranslate({message: 'Some text to be translated'})\n\n// Valid <Translate> child using values object as prop\n<Translate values={{firstName: 'S\xe9bastien'}}>\n  {'Welcome, {firstName}! How are you?'}\n</Translate>\n\n// Valid message attribute using values object as second argument\ntranslate({message: 'The logo of site {siteName}'}, {siteName: 'Docusaurus'})\n"})}),"\n",(0,a.jsx)(s.h2,{id:"when-not-to-use",children:"When Not To Use It"}),"\n",(0,a.jsxs)(s.p,{children:["If you're not using the ",(0,a.jsx)(s.a,{href:"/docs/i18n/introduction",children:"i18n feature"}),", you can disable this rule."]}),"\n",(0,a.jsx)(s.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate",children:"https://docusaurus.io/docs/docusaurus-core#translate"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate-imperative",children:"https://docusaurus.io/docs/docusaurus-core#translate-imperative"})}),"\n"]})]})}function d(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},80980:function(e,s,t){t.d(s,{Z:function(){return l},a:function(){return r}});var n=t(27378);let a={},i=n.createContext(a);function r(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);