"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["80934"],{35474:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>s,assets:()=>h,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"swizzling","title":"Swizzling","description":"Customize your site\'s appearance through creating your own theme components","source":"@site/docs/swizzling.mdx","sourceDirName":".","slug":"/swizzling","permalink":"/docs/swizzling","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/swizzling.mdx","tags":[],"version":"current","lastUpdatedBy":"Tatsunori Uchino","lastUpdatedAt":1738584140000,"frontMatter":{"description":"Customize your site\'s appearance through creating your own theme components"},"sidebar":"docs","previous":{"title":"Styling and Layout","permalink":"/docs/styling-layout"},"next":{"title":"Static Assets","permalink":"/docs/static-assets"}}'),o=t(85893),r=t(80980),i=t(15398),a=t(58636);let l={description:"Customize your site's appearance through creating your own theme components"},c="Swizzling",h={},d=[{value:"Swizzling Process",id:"swizzling-process",level:2},{value:"Overview",id:"overview",level:3},{value:"Ejecting",id:"ejecting",level:3},{value:"Wrapping",id:"wrapping",level:3},{value:"What is safe to swizzle?",id:"what-is-safe-to-swizzle",level:2},{value:"Which component should I swizzle?",id:"which-component-should-i-swizzle",level:2},{value:"Do I need to swizzle?",id:"do-i-need-to-swizzle",level:2},{value:"Wrapping your site with <code>&lt;Root&gt;</code>",id:"wrapper-your-site-with-root",level:2}];function u(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"swizzling",children:"Swizzling"})}),"\n",(0,o.jsx)(n.p,{children:"In this section, we will introduce how customization of layout is done in Docusaurus."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"D\xe9j\xe0 vu...?"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This section is similar to ",(0,o.jsx)(n.a,{href:"/docs/styling-layout",children:"Styling and Layout"}),", but this time, we will customize React components themselves, rather than what they look like. We will talk about a central concept in Docusaurus: ",(0,o.jsx)(n.strong,{children:"swizzling"}),", which allows ",(0,o.jsx)(n.strong,{children:"deeper site customizations"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In practice, swizzling permits to ",(0,o.jsx)(n.strong,{children:"swap a theme component with your own implementation"}),", and it comes in 2 patterns:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#ejecting",children:(0,o.jsx)(n.strong,{children:"Ejecting"})}),": creates a ",(0,o.jsx)(n.strong,{children:"copy"})," of the original theme component, which you can fully ",(0,o.jsx)(n.strong,{children:"customize"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#wrapping",children:(0,o.jsx)(n.strong,{children:"Wrapping"})}),": creates a ",(0,o.jsx)(n.strong,{children:"wrapper"})," around the original theme component, which you can ",(0,o.jsx)(n.strong,{children:"enhance"})]}),"\n"]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Why is it called swizzling?"}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"The name comes from Objective-C and Swift-UI"}),": ",(0,o.jsx)(n.a,{href:"https://pspdfkit.com/blog/2019/swizzling-in-swift/",children:"method swizzling"})," is the process of changing the implementation of an existing selector (method)."]}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"For Docusaurus, component swizzling means providing an alternative component that takes precedence over the component provided by the theme."})}),(0,o.jsxs)(n.p,{children:["You can think of it as ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Monkey_patch",children:"Monkey Patching"})," for React components, enabling you to override the default implementation. Gatsby has a similar concept called ",(0,o.jsx)(n.a,{href:"https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/",children:"theme shadowing"}),"."]}),(0,o.jsxs)(n.p,{children:["To gain a deeper understanding of this, you have to understand ",(0,o.jsx)(n.a,{href:"/docs/advanced/client#theme-aliases",children:"how theme components are resolved"}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"swizzling-process",children:"Swizzling Process"}),"\n",(0,o.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(n.p,{children:["Docusaurus provides a convenient ",(0,o.jsx)(n.strong,{children:"interactive CLI"})," to swizzle components. You generally only need to remember the following command:"]}),"\n",(0,o.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,o.jsx)(a.Z,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run swizzle\n"})})}),(0,o.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn swizzle\n"})})}),(0,o.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm run swizzle\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["It will generate a new component in your ",(0,o.jsx)(n.code,{children:"src/theme"})," directory, which should look like this example:"]}),"\n",(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(a.Z,{value:"Ejecting",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="src/theme/SomeComponent.js"',children:"import React from 'react';\n\nexport default function SomeComponent(props) {\n  // You can fully customize this implementation\n  // including changing the JSX, CSS and React hooks\n  return (\n    <div className=\"some-class\">\n      <h1>Some Component</h1>\n      <p>Some component implementation details</p>\n    </div>\n  );\n}\n"})})}),(0,o.jsx)(a.Z,{value:"Wrapping",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="src/theme/SomeComponent.js"',children:"import React from 'react';\nimport SomeComponent from '@theme-original/SomeComponent';\n\nexport default function SomeComponentWrapper(props) {\n  // You can enhance the original component,\n  // including adding extra props or JSX elements around it\n  return (\n    <>\n      <SomeComponent {...props} />\n    </>\n  );\n}\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"To get an overview of all the themes and components available to swizzle, run:"}),"\n",(0,o.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,o.jsx)(a.Z,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run swizzle -- --list\n"})})}),(0,o.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn swizzle --list\n"})})}),(0,o.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm run swizzle --list\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"--help"})," to see all available CLI options, or refer to the reference ",(0,o.jsx)(n.a,{href:"/docs/cli#docusaurus-swizzle",children:"swizzle CLI documentation"}),"."]}),"\n",(0,o.jsx)(n.admonition,{title:"Removing Unneeded Swizzled Components",type:"tip",children:(0,o.jsxs)(n.p,{children:["If you decide that a previously swizzled component is no longer necessary, you can simply remove its file(s) from the ",(0,o.jsx)(n.code,{children:"src/theme"})," directory. After removing the component, make sure to restart your development server to ensure the changes are properly reflected."]})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["After swizzling a component, ",(0,o.jsx)(n.strong,{children:"restart your dev server"})," in order for Docusaurus to know about the new component."]})}),"\n",(0,o.jsx)(n.admonition,{title:"Prefer staying on the safe side",type:"warning",children:(0,o.jsxs)(n.p,{children:["Be sure to understand ",(0,o.jsxs)(n.a,{href:"#what-is-safe-to-swizzle",children:["which components are ",(0,o.jsx)(n.strong,{children:"safe to swizzle"})]}),". Some components are ",(0,o.jsx)(n.strong,{children:"internal implementation details"})," of a theme."]})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"docusaurus swizzle"})," is only an automated way to help you swizzle the component. You can also create the ",(0,o.jsx)(n.code,{children:"src/theme/SomeComponent.js"})," file manually, and Docusaurus will ",(0,o.jsx)(n.a,{href:"/docs/advanced/client#theme-aliases",children:"resolve it"}),". There's no internal magic behind this command!"]})}),"\n",(0,o.jsx)(n.h3,{id:"ejecting",children:"Ejecting"}),"\n",(0,o.jsxs)(n.p,{children:["Ejecting a theme component is the process of ",(0,o.jsx)(n.strong,{children:"creating a copy"})," of the original theme component, which you can ",(0,o.jsx)(n.strong,{children:"fully customize and override"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To eject a theme component, use the swizzle CLI interactively, or with the ",(0,o.jsx)(n.code,{children:"--eject"})," option:"]}),"\n",(0,o.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,o.jsx)(a.Z,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run swizzle [theme name] [component name] -- --eject\n"})})}),(0,o.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn swizzle [theme name] [component name] --eject\n"})})}),(0,o.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm run swizzle [theme name] [component name] --eject\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"An example:"}),"\n",(0,o.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,o.jsx)(a.Z,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run swizzle @docusaurus/theme-classic Footer -- --eject\n"})})}),(0,o.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn swizzle @docusaurus/theme-classic Footer --eject\n"})})}),(0,o.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm run swizzle @docusaurus/theme-classic Footer --eject\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["This will copy the current ",(0,o.jsx)(n.code,{children:"<Footer />"})," component's implementation to your site's ",(0,o.jsx)(n.code,{children:"src/theme"})," directory. Docusaurus will now use this ",(0,o.jsx)(n.code,{children:"<Footer>"})," component copy instead of the original one. You are now free to completely re-implement the ",(0,o.jsx)(n.code,{children:"<Footer>"})," component."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="src/theme/Footer/index.js"',children:"import React from 'react';\n\nexport default function Footer(props) {\n  return (\n    <footer>\n      <h1>This is my custom site footer</h1>\n      <p>And it is very different from the original</p>\n    </footer>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsxs)(n.p,{children:["Ejecting an ",(0,o.jsx)(n.a,{href:"#what-is-safe-to-swizzle",children:(0,o.jsx)(n.strong,{children:"unsafe"})})," component can sometimes lead to copying a large amount of internal code, which you now have to maintain yourself. It can make Docusaurus upgrades more difficult, as you will need to migrate your customizations if the props received or internal theme APIs used have changed."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsxs)(n.strong,{children:["Prefer ",(0,o.jsx)(n.a,{href:"#wrapping",children:"wrapping"})," whenever possible"]}),": the amount of code to maintain is smaller."]})]}),"\n",(0,o.jsx)(n.admonition,{title:"Re-swizzling",type:"tip",children:(0,o.jsxs)(n.p,{children:["To keep ejected components up-to-date after a Docusaurus upgrade, re-run the eject command and compare the changes with ",(0,o.jsx)(n.code,{children:"git diff"}),". You are also recommended to write a brief comment at the top of the file explaining what changes you have made, so that you could more easily re-apply your changes after re-ejection."]})}),"\n",(0,o.jsx)(n.h3,{id:"wrapping",children:"Wrapping"}),"\n",(0,o.jsxs)(n.p,{children:["Wrapping a theme component is the process of ",(0,o.jsx)(n.strong,{children:"creating a wrapper"})," around the original theme component, which you can ",(0,o.jsx)(n.strong,{children:"enhance"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To wrap a theme component, use the swizzle CLI interactively, or with the ",(0,o.jsx)(n.code,{children:"--wrap"})," option:"]}),"\n",(0,o.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,o.jsx)(a.Z,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run swizzle [theme name] [component name] -- --wrap\n"})})}),(0,o.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn swizzle [theme name] [component name] --wrap\n"})})}),(0,o.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm run swizzle [theme name] [component name] --wrap\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"An example:"}),"\n",(0,o.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,o.jsx)(a.Z,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run swizzle @docusaurus/theme-classic Footer -- --wrap\n"})})}),(0,o.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn swizzle @docusaurus/theme-classic Footer --wrap\n"})})}),(0,o.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm run swizzle @docusaurus/theme-classic Footer --wrap\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["This will create a wrapper in your site's ",(0,o.jsx)(n.code,{children:"src/theme"})," directory. Docusaurus will now use the ",(0,o.jsx)(n.code,{children:"<FooterWrapper>"})," component instead of the original one. You can now add customizations around the original component."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="src/theme/Footer/index.js"',children:"import React from 'react';\nimport Footer from '@theme-original/Footer';\n\nexport default function FooterWrapper(props) {\n  return (\n    <>\n      <section>\n        <h2>Extra section</h2>\n        <p>This is an extra section that appears above the original footer</p>\n      </section>\n      <Footer {...props} />\n    </>\n  );\n}\n"})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)("summary",{children:["What is this ",(0,o.jsx)("code",{children:"@theme-original"})," thing?"]}),(0,o.jsxs)(n.p,{children:["Docusaurus uses ",(0,o.jsx)(n.a,{href:"/docs/advanced/client#theme-aliases",children:"theme aliases"})," to resolve the theme components to use. The newly created wrapper takes the ",(0,o.jsx)(n.code,{children:"@theme/SomeComponent"})," alias. ",(0,o.jsx)(n.code,{children:"@theme-original/SomeComponent"})," permits to import original component that the wrapper shadows without creating an infinite import loop where the wrapper imports itself."]})]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["Wrapping a theme is a great way to ",(0,o.jsx)(n.strong,{children:"add extra components around existing one"})," without ",(0,o.jsx)(n.a,{href:"#ejecting",children:"ejecting"})," it. For example, you can easily add a custom comment system under each blog post:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="src/theme/BlogPostItem.js"',children:"import React from 'react';\nimport BlogPostItem from '@theme-original/BlogPostItem';\nimport MyCustomCommentSystem from '@site/src/MyCustomCommentSystem';\n\nexport default function BlogPostItemWrapper(props) {\n  return (\n    <>\n      <BlogPostItem {...props} />\n      <MyCustomCommentSystem />\n    </>\n  );\n}\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"what-is-safe-to-swizzle",children:"What is safe to swizzle?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"With great power comes great responsibility"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Some theme components are ",(0,o.jsx)(n.strong,{children:"internal implementation details"})," of a theme. Docusaurus allows you to swizzle them, but it ",(0,o.jsx)(n.strong,{children:"might be risky"}),"."]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Why is it risky?"}),(0,o.jsxs)(n.p,{children:["Theme authors (including us) might have to update their theme over time: changing the component props, name, file system location, types... For example, consider a component that receives two props ",(0,o.jsx)(n.code,{children:"name"})," and ",(0,o.jsx)(n.code,{children:"age"}),", but after a refactor, it now receives a ",(0,o.jsx)(n.code,{children:"person"})," prop with the above two properties. Your component, which still expects these two props, will render ",(0,o.jsx)(n.code,{children:"undefined"})," instead."]}),(0,o.jsxs)(n.p,{children:["Moreover, internal components may simply disappear. If a component is called ",(0,o.jsx)(n.code,{children:"Sidebar"})," and it's later renamed to ",(0,o.jsx)(n.code,{children:"DocSidebar"}),", your swizzled component will be completely ignored."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Theme components marked as unsafe may change in a backward-incompatible way between theme minor versions."})," When upgrading a theme (or Docusaurus), your customizations might ",(0,o.jsx)(n.strong,{children:"behave unexpectedly"}),", and can even ",(0,o.jsx)(n.strong,{children:"break your site"}),"."]})]}),"\n",(0,o.jsxs)(n.p,{children:["For each theme component, the swizzle CLI will indicate ",(0,o.jsx)(n.strong,{children:"3 different levels of safety"})," declared by theme authors:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Safe"}),": this component is safe to be swizzled, its public API is considered stable, and no breaking changes should happen within a theme ",(0,o.jsx)(n.strong,{children:"major version"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Unsafe"}),": this component is a theme implementation detail, not safe to be swizzled, and breaking changes might happen within a theme ",(0,o.jsx)(n.strong,{children:"minor version"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Forbidden"}),": the swizzle CLI will prevent you from swizzling this component, because it is not designed to be swizzled at all"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Some components might be safe to wrap, but not safe to eject."})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Don't be too ",(0,o.jsx)(n.strong,{children:"afraid to swizzle unsafe components"}),": just keep in mind that ",(0,o.jsx)(n.strong,{children:"breaking changes"})," might happen, and you might need to upgrade your customizations manually on minor version upgrades."]})}),"\n",(0,o.jsx)(n.admonition,{title:"Report your use-case",type:"note",children:(0,o.jsxs)(n.p,{children:["If you have a ",(0,o.jsx)(n.strong,{children:"strong use-case for swizzling an unsafe component"}),", please ",(0,o.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/discussions/5468",children:(0,o.jsx)(n.strong,{children:"report it here"})})," and we will work together to find a solution to make it safe."]})}),"\n",(0,o.jsx)(n.h2,{id:"which-component-should-i-swizzle",children:"Which component should I swizzle?"}),"\n",(0,o.jsxs)(n.p,{children:["It is not always clear which component you should swizzle exactly to achieve the desired result. ",(0,o.jsx)(n.code,{children:"@docusaurus/theme-classic"}),", which provides most of the theme components, has about ",(0,o.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme",children:"100 components"}),"!"]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["To print an overview of all the ",(0,o.jsx)(n.code,{children:"@docusaurus/theme-classic"})," components:"]}),(0,o.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,o.jsx)(a.Z,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run swizzle @docusaurus/theme-classic -- --list\n"})})}),(0,o.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn swizzle @docusaurus/theme-classic --list\n"})})}),(0,o.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm run swizzle @docusaurus/theme-classic --list\n"})})})]})]}),"\n",(0,o.jsx)(n.p,{children:"You can follow these steps to locate the appropriate component to swizzle:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Component description."})," Some components provide a short description, which is a good way to find the right one."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Component name."})," Official theme components are semantically named, so you should be able to infer its function from the name. The swizzle CLI allows you to enter part of a component name to narrow down the available choices. For example, if you run ",(0,o.jsx)(n.code,{children:"yarn swizzle @docusaurus/theme-classic"}),", and enter ",(0,o.jsx)(n.code,{children:"Doc"}),", only the docs-related components will be listed."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Start with a higher-level component."})," Components form a tree with some components importing others. Every route will be associated with one top-level component that the route will render (most of them listed in ",(0,o.jsx)(n.a,{href:"/docs/advanced/routing#routing-in-content-plugins",children:"Routing in content plugins"}),"). For example, all blog post pages have ",(0,o.jsx)(n.code,{children:"@theme/BlogPostPage"})," as the topmost component. You can start with swizzling this component, and then go down the component tree to locate the component that renders just what you are targeting. Don't forget to unswizzle the rest by deleting the files after you've found the correct one, so you don't maintain too many components."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsxs)(n.strong,{children:["Read the ",(0,o.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme",children:"theme source code"})]})," and use search wisely."]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{title:"Just ask!",type:"tip",children:[(0,o.jsxs)(n.p,{children:["If you still have no idea which component to swizzle to achieve the desired effect, you can reach out for help in one of our ",(0,o.jsx)(n.a,{href:"/community/support",children:"support channels"}),"."]}),(0,o.jsxs)(n.p,{children:["We also want to understand better your fanciest customization use-cases, so please ",(0,o.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/discussions/5468",children:(0,o.jsx)(n.strong,{children:"report them"})}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"do-i-need-to-swizzle",children:"Do I need to swizzle?"}),"\n",(0,o.jsx)(n.p,{children:"Swizzling ultimately means you have to maintain some additional React code that interact with Docusaurus internal APIs. If you can, think about the following alternatives when customizing your site:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Use CSS."})," CSS rules and selectors can often help you achieve a decent degree of customization. Refer to ",(0,o.jsx)(n.a,{href:"/docs/styling-layout",children:"styling and layout"})," for more details."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Use translations."})," It may sound surprising, but translations are ultimately just a way to customize the text labels. For example, if your site's default language is ",(0,o.jsx)(n.code,{children:"en"}),", you can still run ",(0,o.jsx)(n.code,{children:"yarn write-translations -l en"})," and edit the ",(0,o.jsx)(n.code,{children:"code.json"})," emitted. Refer to the ",(0,o.jsx)(n.a,{href:"/docs/i18n/tutorial",children:"i18n tutorial"})," for more details."]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"The smaller, the better."})," If swizzling is inevitable, prefer to swizzle only the relevant part and maintain as little code on your own as possible. Swizzling a small component often means less risk of ",(0,o.jsx)(n.strong,{children:"breaking changes"})," during upgrade."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"#wrapping",children:"Wrapping"})," is also a far safer alternative to ",(0,o.jsx)(n.a,{href:"#ejecting",children:"ejecting"}),"."]})]}),"\n",(0,o.jsxs)(n.h2,{id:"wrapper-your-site-with-root",children:["Wrapping your site with ",(0,o.jsx)(n.code,{children:"<Root>"})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"<Root>"})," component is rendered at the ",(0,o.jsx)(n.strong,{children:"very top"})," of the React tree, above the theme ",(0,o.jsx)(n.code,{children:"<Layout>"}),", and ",(0,o.jsx)(n.strong,{children:"never unmounts"}),". It is the perfect place to add stateful logic that should not be re-initialized across navigations (user authentication status, shopping cart state...)."]}),"\n",(0,o.jsxs)(n.p,{children:["Swizzle it ",(0,o.jsx)(n.strong,{children:"manually"})," by creating a file at ",(0,o.jsx)(n.code,{children:"src/theme/Root.js"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="src/theme/Root.js"',children:"import React from 'react';\n\n// Default implementation, that you can customize\nexport default function Root({children}) {\n  return <>{children}</>;\n}\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Use this component to render React Context providers."})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},58636:function(e,n,t){t.d(n,{Z:()=>r});var s=t(85893);t(67294);var o=t(90496);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)("tabItem_pnkT",r),hidden:t,children:n})}},15398:function(e,n,t){t.d(n,{Z:()=>f});var s=t(85893),o=t(67294),r=t(90496),i=t(54947),a=t(3620),l=t(844),c=t(97486),h=t(32263),d=t(16971);function u(e){return o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||o.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var m=t(71607);function j(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.o5)(),d=e=>{let n=e.currentTarget,t=l[c.indexOf(n)].value;t!==o&&(h(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...i,className:(0,r.Z)("tabs__item","tabItem_AQgk",i?.className,{"tabs__item--active":o===n}),children:t??n},n)})})}function x(e){let{lazy:n,children:t,selectedValue:i}=e,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=a.find(e=>e.props.value===i);return e?(0,o.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:s}=e,r=function(e){let{values:n,children:t}=e;return(0,o.useMemo)(()=>{let e=n??u(t).map(e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}});return!function(e){let n=(0,h.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,m]=(0,o.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=t.find(e=>e.default)??t[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:r})),[j,x]=function(e){let{queryString:n=!1,groupId:t}=e,s=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,o.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})},[r,s])]}({queryString:t,groupId:s}),[g,f]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[s,r]=(0,d.Nk)(t);return[s,(0,o.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:s}),w=(()=>{let e=j??g;return p({value:e,tabValues:r})?e:null})();return(0,l.Z)(()=>{w&&m(w)},[w]),{selectedValue:i,selectValue:(0,o.useCallback)(e=>{if(!p({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),f(e)},[x,f,r]),tabValues:r}}(e);return(0,s.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList_Qoir"),children:[(0,s.jsx)(j,{...n,...e}),(0,s.jsx)(x,{...n,...e})]})}function f(e){let n=(0,m.Z)();return(0,s.jsx)(g,{...e,children:u(e.children)},String(n))}},80980:function(e,n,t){t.d(n,{Z:()=>a,a:()=>i});var s=t(67294);let o={},r=s.createContext(o);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);