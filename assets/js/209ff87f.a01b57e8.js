"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["49016"],{38060:function(e,a,n){n.r(a),n.d(a,{metadata:()=>s,contentTitle:()=>b,default:()=>g,assets:()=>p,toc:()=>m,frontMatter:()=>h});var s=JSON.parse('{"id":"guides/markdown-features/tabs","title":"Tabs","description":"Using tabs inside Docusaurus Markdown","source":"@site/docs/guides/markdown-features/markdown-features-tabs.mdx","sourceDirName":"guides/markdown-features","slug":"/markdown-features/tabs","permalink":"/docs/markdown-features/tabs","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-tabs.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1729687634000,"frontMatter":{"id":"tabs","description":"Using tabs inside Docusaurus Markdown","slug":"/markdown-features/tabs"},"sidebar":"docs","previous":{"title":"MDX and React","permalink":"/docs/markdown-features/react"},"next":{"title":"Code blocks","permalink":"/docs/markdown-features/code-blocks"}}'),l=n("24246"),t=n("80980"),r=n("14522"),i=n("15398"),o=n("58636");let d="red_FE5X",c="orange_kp8w",u="yellow_uGry",h={id:"tabs",description:"Using tabs inside Docusaurus Markdown",slug:"/markdown-features/tabs"},b="Tabs",p={},m=[{value:"Displaying a default tab",id:"displaying-a-default-tab",level:2},{value:"Syncing tab choices",id:"syncing-tab-choices",level:2},{value:"Customizing tabs",id:"customizing-tabs",level:2},{value:"Customizing tab headings",id:"customizing-tab-headings",level:3},{value:"Query string",id:"query-string",level:2}];function x(e){let a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Details:n}=a;return!n&&function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.header,{children:(0,l.jsx)(a.h1,{id:"tabs",children:"Tabs"})}),"\n","\n",(0,l.jsxs)(a.p,{children:["Docusaurus provides the ",(0,l.jsx)(a.code,{children:"<Tabs>"})," component that you can use in Markdown thanks to ",(0,l.jsx)(a.a,{href:"/docs/markdown-features/react",children:"MDX"}),":"]}),"\n","\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-jsx",children:'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \uD83C\uDF4E\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \uD83C\uDF4A\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \uD83C\uDF4C\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,l.jsx)(r.Z,{children:(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(o.Z,{value:"apple",label:"Apple",children:"This is an apple \uD83C\uDF4E"}),(0,l.jsx)(o.Z,{value:"orange",label:"Orange",children:"This is an orange \uD83C\uDF4A"}),(0,l.jsx)(o.Z,{value:"banana",label:"Banana",children:"This is a banana \uD83C\uDF4C"})]})}),"\n",(0,l.jsx)(a.hr,{}),"\n",(0,l.jsxs)(a.p,{children:["It is also possible to provide ",(0,l.jsx)(a.code,{children:"values"})," and ",(0,l.jsx)(a.code,{children:"defaultValue"})," props to ",(0,l.jsx)(a.code,{children:"Tabs"}),":"]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-jsx",children:"<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \uD83C\uDF4E</TabItem>\n  <TabItem value=\"orange\">This is an orange \uD83C\uDF4A</TabItem>\n  <TabItem value=\"banana\">This is a banana \uD83C\uDF4C</TabItem>\n</Tabs>\n"})}),"\n",(0,l.jsx)(r.Z,{children:(0,l.jsxs)(i.Z,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],children:[(0,l.jsx)(o.Z,{value:"apple",children:"This is an apple \uD83C\uDF4E"}),(0,l.jsx)(o.Z,{value:"orange",children:"This is an orange \uD83C\uDF4A"}),(0,l.jsx)(o.Z,{value:"banana",children:"This is a banana \uD83C\uDF4C"})]})}),"\n",(0,l.jsxs)(n,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("code",{children:"Tabs"})," props take precedence over the ",(0,l.jsx)("code",{children:"TabItem"})," props:"]}),(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-jsx",children:'<Tabs\n  defaultValue="apple"\n  values={[\n    {label: \'Apple 1\', value: \'apple\'},\n    {label: \'Orange 1\', value: \'orange\'},\n    {label: \'Banana 1\', value: \'banana\'},\n  ]}>\n  <TabItem value="apple" label="Apple 2">\n    This is an apple \uD83C\uDF4E\n  </TabItem>\n  <TabItem value="orange" label="Orange 2">\n    This is an orange \uD83C\uDF4A\n  </TabItem>\n  <TabItem value="banana" label="Banana 2" default>\n    This is a banana \uD83C\uDF4C\n  </TabItem>\n</Tabs>\n'})}),(0,l.jsx)(r.Z,{children:(0,l.jsxs)(i.Z,{defaultValue:"apple",values:[{label:"Apple 1",value:"apple"},{label:"Orange 1",value:"orange"},{label:"Banana 1",value:"banana"}],children:[(0,l.jsx)(o.Z,{value:"apple",label:"Apple 2",children:"This is an apple \uD83C\uDF4E"}),(0,l.jsx)(o.Z,{value:"orange",label:"Orange 2",children:"This is an orange \uD83C\uDF4A"}),(0,l.jsx)(o.Z,{value:"banana",label:"Banana 2",default:!0,children:"This is a banana \uD83C\uDF4C"})]})})]}),"\n",(0,l.jsxs)(a.admonition,{type:"tip",children:[(0,l.jsx)(a.p,{children:"By default, all tabs are rendered eagerly during the build process, and search engines can index hidden tabs."}),(0,l.jsxs)(a.p,{children:["It is possible to only render the default tab with ",(0,l.jsx)(a.code,{children:"<Tabs lazy />"}),"."]})]}),"\n",(0,l.jsx)(a.h2,{id:"displaying-a-default-tab",children:"Displaying a default tab"}),"\n",(0,l.jsxs)(a.p,{children:["The first tab is displayed by default, and to override this behavior, you can specify a default tab by adding ",(0,l.jsx)(a.code,{children:"default"})," to one of the tab items. You can also set the ",(0,l.jsx)(a.code,{children:"defaultValue"})," prop of the ",(0,l.jsx)(a.code,{children:"Tabs"})," component to the label value of your choice. For example, in the example above, either setting ",(0,l.jsx)(a.code,{children:"default"})," for the ",(0,l.jsx)(a.code,{children:'value="apple"'})," tab or setting ",(0,l.jsx)(a.code,{children:'defaultValue="apple"'}),' for the tabs forces the "Apple" tab to be open by default.']}),"\n",(0,l.jsxs)(a.p,{children:["Docusaurus will throw an error if a ",(0,l.jsx)(a.code,{children:"defaultValue"})," is provided for the ",(0,l.jsx)(a.code,{children:"Tabs"})," but it refers to a non-existing value. If you want none of the tabs to be shown by default, use ",(0,l.jsx)(a.code,{children:"defaultValue={null}"}),"."]}),"\n",(0,l.jsx)(a.h2,{id:"syncing-tab-choices",children:"Syncing tab choices"}),"\n",(0,l.jsxs)(a.p,{children:["You may want choices of the same kind of tabs to sync with each other. For example, you might want to provide different instructions for users on Windows vs users on macOS, and you want to change all OS-specific instructions tabs in one click. To achieve that, you can give all related tabs the same ",(0,l.jsx)(a.code,{children:"groupId"})," prop. Note that doing this will persist the choice in ",(0,l.jsx)(a.code,{children:"localStorage"})," and all ",(0,l.jsx)(a.code,{children:"<Tab>"})," instances with the same ",(0,l.jsx)(a.code,{children:"groupId"})," will update automatically when the value of one of them is changed. Note that group IDs are globally namespaced."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-jsx",children:'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>\n</Tabs>\n'})}),"\n",(0,l.jsxs)(r.Z,{children:[(0,l.jsxs)(i.Z,{groupId:"operating-systems",children:[(0,l.jsx)(o.Z,{value:"win",label:"Windows",children:"Use Ctrl + C to copy."}),(0,l.jsx)(o.Z,{value:"mac",label:"macOS",children:"Use Command + C to copy."})]}),(0,l.jsxs)(i.Z,{groupId:"operating-systems",children:[(0,l.jsx)(o.Z,{value:"win",label:"Windows",children:"Use Ctrl + V to paste."}),(0,l.jsx)(o.Z,{value:"mac",label:"macOS",children:"Use Command + V to paste."})]})]}),"\n",(0,l.jsxs)(a.p,{children:["For all tab groups that have the same ",(0,l.jsx)(a.code,{children:"groupId"}),", the possible values do not need to be the same. If one tab group is chosen a value that does not exist in another tab group with the same ",(0,l.jsx)(a.code,{children:"groupId"}),", the tab group with the missing value won't change its tab. You can see that from the following example. Try to select Linux, and the above tab groups don't change."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-jsx",children:'<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">\n    I am Windows.\n  </TabItem>\n  <TabItem value="mac" label="macOS">\n    I am macOS.\n  </TabItem>\n  <TabItem value="linux" label="Linux">\n    I am Linux.\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,l.jsx)(r.Z,{children:(0,l.jsxs)(i.Z,{groupId:"operating-systems",children:[(0,l.jsx)(o.Z,{value:"win",label:"Windows",children:"I am Windows."}),(0,l.jsx)(o.Z,{value:"mac",label:"macOS",children:"I am macOS."}),(0,l.jsx)(o.Z,{value:"linux",label:"Linux",children:"I am Linux."})]})}),"\n",(0,l.jsx)(a.hr,{}),"\n",(0,l.jsx)(a.p,{children:"Tab choices with different group IDs will not interfere with each other:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-jsx",children:'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Windows in windows.</TabItem>\n  <TabItem value="mac" label="macOS">macOS is macOS.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="non-mac-operating-systems">\n  <TabItem value="win" label="Windows">Windows is windows.</TabItem>\n  <TabItem value="unix" label="Unix">Unix is unix.</TabItem>\n</Tabs>\n'})}),"\n",(0,l.jsxs)(r.Z,{children:[(0,l.jsxs)(i.Z,{groupId:"operating-systems",children:[(0,l.jsx)(o.Z,{value:"win",label:"Windows",children:"Windows in windows."}),(0,l.jsx)(o.Z,{value:"mac",label:"macOS",children:"macOS is macOS."})]}),(0,l.jsxs)(i.Z,{groupId:"non-mac-operating-systems",children:[(0,l.jsx)(o.Z,{value:"win",label:"Windows",children:"Windows is windows."}),(0,l.jsx)(o.Z,{value:"unix",label:"Unix",children:"Unix is unix."})]})]}),"\n",(0,l.jsx)(a.h2,{id:"customizing-tabs",children:"Customizing tabs"}),"\n",(0,l.jsxs)(a.p,{children:["You might want to customize the appearance of a certain set of tabs. You can pass the string in ",(0,l.jsx)(a.code,{children:"className"})," prop, and the specified CSS class will be added to the ",(0,l.jsx)(a.code,{children:"Tabs"})," component:"]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-jsx",children:'// highlight-next-line\n<Tabs className="unique-tabs">\n  <TabItem value="Apple">This is an apple \uD83C\uDF4E</TabItem>\n  <TabItem value="Orange">This is an orange \uD83C\uDF4A</TabItem>\n  <TabItem value="Banana">This is a banana \uD83C\uDF4C</TabItem>\n</Tabs>\n'})}),"\n",(0,l.jsx)(r.Z,{children:(0,l.jsxs)(i.Z,{className:"unique-tabs",children:[(0,l.jsx)(o.Z,{value:"Apple",children:"This is an apple \uD83C\uDF4E"}),(0,l.jsx)(o.Z,{value:"Orange",children:"This is an orange \uD83C\uDF4A"}),(0,l.jsx)(o.Z,{value:"Banana",children:"This is a banana \uD83C\uDF4C"})]})}),"\n",(0,l.jsx)(a.h3,{id:"customizing-tab-headings",children:"Customizing tab headings"}),"\n",(0,l.jsxs)(a.p,{children:["You can also customize each tab heading independently by using the ",(0,l.jsx)(a.code,{children:"attributes"})," field. The extra props can be passed to the headings either through the ",(0,l.jsx)(a.code,{children:"values"})," prop in ",(0,l.jsx)(a.code,{children:"Tabs"}),", or props of each ",(0,l.jsx)(a.code,{children:"TabItem"}),"\u2014in the same way as you declare ",(0,l.jsx)(a.code,{children:"label"}),"."]}),"\n","\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-jsx",metastring:'title="some-doc.mdx"',children:'import styles from \'./styles.module.css\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" attributes={{className: styles.red}}>\n    This is an apple \uD83C\uDF4E\n  </TabItem>\n  <TabItem value="orange" label="Orange" attributes={{className: styles.orange}}>\n    This is an orange \uD83C\uDF4A\n  </TabItem>\n  <TabItem value="banana" label="Banana" attributes={{className: styles.yellow}}>\n    This is a banana \uD83C\uDF4C\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-css",metastring:'title="styles.module.css"',children:".red {\n  color: red;\n}\n.red[aria-selected='true'] {\n  border-bottom-color: red;\n}\n\n.orange {\n  color: orange;\n}\n.orange[aria-selected='true'] {\n  border-bottom-color: orange;\n}\n\n.yellow {\n  color: yellow;\n}\n.yellow[aria-selected='true'] {\n  border-bottom-color: yellow;\n}\n"})}),"\n",(0,l.jsx)(r.Z,{children:(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(o.Z,{value:"apple",label:"Apple",attributes:{className:d},children:(0,l.jsx)(a.p,{children:"This is an apple \uD83C\uDF4E"})}),(0,l.jsx)(o.Z,{value:"orange",label:"Orange",attributes:{className:c},children:(0,l.jsx)(a.p,{children:"This is an orange \uD83C\uDF4A"})}),(0,l.jsx)(o.Z,{value:"banana",label:"Banana",attributes:{className:u},children:(0,l.jsx)(a.p,{children:"This is a banana \uD83C\uDF4C"})})]})}),"\n",(0,l.jsxs)(a.admonition,{type:"tip",children:[(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.code,{children:"className"})," would be merged with other default class names. You may also use a custom ",(0,l.jsx)(a.code,{children:"data-value"})," field (",(0,l.jsx)(a.code,{children:"{'data-value': 'apple'}"}),") paired with CSS attribute selectors:"]}),(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-css",metastring:'title="styles.module.css"',children:"li[role='tab'][data-value='apple'] {\n  color: red;\n}\n"})})]}),"\n",(0,l.jsx)(a.h2,{id:"query-string",children:"Query string"}),"\n",(0,l.jsx)(a.p,{children:"It is possible to persist the selected tab into the url search parameters. This enables you to share a link to a page which pre-selects the tab - linking from your Android app to documentation with the Android tabs pre-selected. This feature does not provide an anchor link - the browser will not scroll to the tab."}),"\n",(0,l.jsxs)(a.p,{children:["Use the ",(0,l.jsx)(a.code,{children:"queryString"})," prop to enable this feature and define the search param name to use."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-tsx",children:'// highlight-next-line\n<Tabs queryString="current-os">\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,l.jsx)(r.Z,{children:(0,l.jsxs)(i.Z,{queryString:"current-os",children:[(0,l.jsx)(o.Z,{value:"android",label:"Android",children:"Android"}),(0,l.jsx)(o.Z,{value:"ios",label:"iOS",children:"iOS"})]})}),"\n",(0,l.jsxs)(a.p,{children:["As soon as a tab is clicked, a search parameter is added at the end of the url: ",(0,l.jsx)(a.code,{children:"?current-os=android"})," or ",(0,l.jsx)(a.code,{children:"?current-os=ios"}),"."]}),"\n",(0,l.jsxs)(a.admonition,{type:"tip",children:[(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.code,{children:"queryString"})," can be used together with ",(0,l.jsx)(a.code,{children:"groupId"}),"."]}),(0,l.jsxs)(a.p,{children:["For convenience, when the ",(0,l.jsx)(a.code,{children:"queryString"})," prop is ",(0,l.jsx)(a.code,{children:"true"}),", the ",(0,l.jsx)(a.code,{children:"groupId"})," value will be used as a fallback."]}),(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-tsx",children:'// highlight-next-line\n<Tabs groupId="current-os" queryString>\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n'})}),(0,l.jsx)(r.Z,{children:(0,l.jsxs)(i.Z,{queryString:!0,groupId:"current-os",children:[(0,l.jsx)(o.Z,{value:"android",label:"Android",children:"Android"}),(0,l.jsx)(o.Z,{value:"ios",label:"iOS",children:"iOS"})]})}),(0,l.jsxs)(a.p,{children:["When the page loads, the tab query string choice will be restored in priority over the ",(0,l.jsx)(a.code,{children:"groupId"})," choice (using ",(0,l.jsx)(a.code,{children:"localStorage"}),")."]})]})]})}function g(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},58636:function(e,a,n){n.d(a,{Z:()=>r});var s=n("24246");n("27378");var l=n("90496");let t="tabItem_pnkT";function r(e){let{children:a,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.Z)(t,r),hidden:n,children:a})}},15398:function(e,a,n){n.d(a,{Z:()=>f});var s=n("24246"),l=n("27378"),t=n("90496"),r=n("54947"),i=n("3620"),o=n("844"),d=n("97486"),c=n("32263"),u=n("16971");function h(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function b(e){let{value:a,tabValues:n}=e;return n.some(e=>e.value===a)}var p=n("71607");let m="tabList_Qoir",x="tabItem_AQgk";function g(e){let{className:a,block:n,selectedValue:l,selectValue:i,tabValues:o}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{let a=e.currentTarget,n=o[d.indexOf(a)].value;n!==l&&(c(a),i(n))},h=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=d.indexOf(e.currentTarget)+1;a=d[n]??d[0];break}case"ArrowLeft":{let n=d.indexOf(e.currentTarget)-1;a=d[n]??d[d.length-1]}}a?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},a),children:o.map(e=>{let{value:a,label:n,attributes:r}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,ref:e=>d.push(e),onKeyDown:h,onClick:u,...r,className:(0,t.Z)("tabs__item",x,r?.className,{"tabs__item--active":l===a}),children:n??a},a)})})}function j(e){let{lazy:a,children:n,selectedValue:r}=e,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){let e=i.find(e=>e.props.value===r);return e?(0,l.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==r}))})}function v(e){let a=function(e){let{defaultValue:a,queryString:n=!1,groupId:s}=e,t=function(e){let{values:a,children:n}=e;return(0,l.useMemo)(()=>{let e=a??h(n).map(e=>{let{props:{value:a,label:n,attributes:s,default:l}}=e;return{value:a,label:n,attributes:s,default:l}});return!function(e){let a=(0,c.lx)(e,(e,a)=>e.value===a.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[a,n])}(e),[r,p]=(0,l.useState)(()=>(function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!b({value:a,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:a,tabValues:t})),[m,x]=function(e){let{queryString:a=!1,groupId:n}=e,s=(0,i.k6)(),t=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n}),r=(0,d._X)(t);return[r,(0,l.useCallback)(e=>{if(!t)return;let a=new URLSearchParams(s.location.search);a.set(t,e),s.replace({...s.location,search:a.toString()})},[t,s])]}({queryString:n,groupId:s}),[g,j]=function(e){var a;let{groupId:n}=e;let s=(a=n)?`docusaurus.tab.${a}`:null,[t,r]=(0,u.Nk)(s);return[t,(0,l.useCallback)(e=>{if(!!s)r.set(e)},[s,r])]}({groupId:s}),v=(()=>{let e=m??g;return b({value:e,tabValues:t})?e:null})();return(0,o.Z)(()=>{v&&p(v)},[v]),{selectedValue:r,selectValue:(0,l.useCallback)(e=>{if(!b({value:e,tabValues:t}))throw Error(`Can't select invalid tab value=${e}`);p(e),x(e),j(e)},[x,j,t]),tabValues:t}}(e);return(0,s.jsxs)("div",{className:(0,t.Z)("tabs-container",m),children:[(0,s.jsx)(g,{...a,...e}),(0,s.jsx)(j,{...a,...e})]})}function f(e){let a=(0,p.Z)();return(0,s.jsx)(v,{...e,children:h(e.children)},String(a))}},14522:function(e,a,n){n.d(a,{Z:()=>b});var s=n("24246");n("27378");var l=n("90496");let t="browserWindow_my1Q",r="browserWindowHeader_jXSR",i="buttons_uHc7",o="browserWindowAddressBar_Pd8y",d="dot_giz1",c="browserWindowMenuIcon_Vhuh",u="bar_rrRL",h="browserWindowBody_Idgs";function b(e){let{children:a,minHeight:n,url:b="http://localhost:3000",style:p,bodyStyle:m}=e;return(0,s.jsxs)("div",{className:t,style:{...p,minHeight:n},children:[(0,s.jsxs)("div",{className:r,children:[(0,s.jsxs)("div",{className:i,children:[(0,s.jsx)("span",{className:d,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:d,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:d,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:(0,l.Z)(o,"text--truncate"),children:b}),(0,s.jsx)("div",{className:c,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:u}),(0,s.jsx)("span",{className:u}),(0,s.jsx)("span",{className:u})]})})]}),(0,s.jsx)("div",{className:h,style:m,children:a})]})}},80980:function(e,a,n){n.d(a,{Z:function(){return i},a:function(){return r}});var s=n(27378);let l={},t=s.createContext(l);function r(e){let a=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);