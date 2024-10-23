"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["40565"],{5666:function(e,t,a){a.d(t,{CS:()=>p,wj:()=>s,nO:()=>u,iZ:()=>b,n4:()=>c,Ne:()=>_,ci:()=>Z,cH:()=>k});var n=a("24246"),r=a("27378"),l=a("50923"),i=a("3564");function s(){let e=(0,i.Z)(),t=e?.data?.blogMetadata;if(!t)throw Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}let o=r.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:l=!1}=e,i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,r.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}),[t,a])}({content:a,isBlogPostPage:l});return(0,n.jsx)(o.Provider,{value:i,children:t})}function u(){let e=(0,r.useContext)(o);if(null===e)throw new l.i6("BlogPostProvider");return e}var m=a("83631"),d=a("8156");let g=e=>new Date(e).toISOString();function h(e){let t=e.map(j);return{author:1===t.length?t[0]:t}}function f(e,t,a){return e?{image:function(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function p(e){let{siteConfig:t}=(0,d.Z)(),{withBaseUrl:a}=(0,m.Cg)(),{metadata:{blogDescription:n,blogTitle:r,permalink:l}}=e,i=`${t.url}${l}`;return{"@context":"https://schema.org","@type":"Blog","@id":i,mainEntityOfPage:i,headline:r,description:n,blogPost:e.items.map(e=>(function(e,t,a){let{assets:n,frontMatter:r,metadata:l}=e,{date:i,title:s,description:o,lastUpdatedAt:c}=l,u=n.image??r.image,m=r.keywords??[],d=`${t.url}${l.permalink}`,p=c?g(c):void 0;return{"@type":"BlogPosting","@id":d,mainEntityOfPage:d,url:d,headline:s,name:s,description:o,datePublished:i,...p?{dateModified:p}:{},...h(l.authors),...f(u,a,s),...m?{keywords:m}:{}}})(e.content,t,a))}}function b(){let e=s(),{assets:t,metadata:a}=u(),{siteConfig:n}=(0,d.Z)(),{withBaseUrl:r}=(0,m.Cg)(),{date:l,title:i,description:o,frontMatter:c,lastUpdatedAt:p}=a,b=t.image??c.image,j=c.keywords??[],x=p?g(p):void 0,v=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:i,name:i,description:o,datePublished:l,...x?{dateModified:x}:{},...h(a.authors),...f(b,r,i),...j?{keywords:j}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function j(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}var x=a("3620"),v=a("35363"),N=a("32263"),C=a("71208");function k(e){let{pathname:t}=(0,x.TH)();return(0,r.useMemo)(()=>e.filter(e=>{var a,n;return a=e,n=t,(!a.unlisted||!!(0,C.Mg)(a.permalink,n))&&!0}),[e,t])}function Z(e){let t=Object.entries((0,N.vM)(e,e=>`${new Date(e.date).getFullYear()}`));return t.reverse(),t}function _(e){let{items:t,ulClassName:a,liClassName:r,linkClassName:l,linkActiveClassName:i}=e;return(0,n.jsx)("ul",{className:a,children:t.map(e=>(0,n.jsx)("li",{className:r,children:(0,n.jsx)(v.Z,{isNavLink:!0,to:e.permalink,className:l,activeClassName:i,children:e.title})},e.permalink))})}},9942:function(e,t,a){a.d(t,{Z:()=>L});var n=a("24246"),r=a("27378"),l=a("90496"),i=a("98143"),s=a("28115"),o=a("77827"),c=a("5666"),u=a("26378"),m=a("57922");function d(e){let{year:t,yearGroupHeadingClassName:a,children:r}=e;return(0,n.jsxs)("div",{role:"group",children:[(0,n.jsx)(m.Z,{as:"h3",className:a,children:t}),r]})}let g=(0,r.memo)(function(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:r}=e;if(!(0,u.L)().blog.sidebar.groupByYear)return(0,n.jsx)(r,{items:t});{let e=(0,c.ci)(t);return(0,n.jsx)(n.Fragment,{children:e.map(e=>{let[t,l]=e;return(0,n.jsx)(d,{year:t,yearGroupHeadingClassName:a,children:(0,n.jsx)(r,{items:l})},t)})})}}),h="sidebar_P3nc",f="sidebarItemTitle_VrjY",p="sidebarItemList_OSkG",b="sidebarItem_WJ0y",j="sidebarItemLink_Qrfg",x="sidebarItemLinkActive_nUeK",v="yearGroupHeading_lECJ",N=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:(0,l.Z)(p,"clean-list"),liClassName:b,linkClassName:j,linkActiveClassName:x})},C=(0,r.memo)(function(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)("aside",{className:"col col--3",children:(0,n.jsxs)("nav",{className:(0,l.Z)(h,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,n.jsx)("div",{className:(0,l.Z)(f,"margin-bottom--md"),children:t.title}),(0,n.jsx)(g,{items:a,ListComponent:N,yearGroupHeadingClassName:v})]})})});var k=a("44160");let Z="yearGroupHeading_Ruz9",_=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function y(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)(g,{items:a,ListComponent:_,yearGroupHeadingClassName:Z})}let P=(0,r.memo)(function(e){return(0,n.jsx)(k.Zo,{component:y,props:e})});function w(e){let{sidebar:t}=e,a=(0,s.i)();return t?.items.length?"mobile"===a?(0,n.jsx)(P,{sidebar:t}):(0,n.jsx)(C,{sidebar:t}):null}function L(e){let{sidebar:t,toc:a,children:r,...s}=e,o=t&&t.items.length>0;return(0,n.jsx)(i.Z,{...s,children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(w,{sidebar:t}),(0,n.jsx)("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:r}),a&&(0,n.jsx)("div",{className:"col col--2",children:a})]})})})}},91981:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(24246);a(27378);var r=a(90496),l=a(88715),i=a(57335),s=a(55951),o=a(9942),c=a(69086),u=a(69879),m=a(57922);function d(e){let{tags:t,sidebar:a}=e,d=(0,l.M)();return(0,n.jsxs)(i.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogTagsListPage),children:[(0,n.jsx)(i.d,{title:d}),(0,n.jsx)(u.Z,{tag:"blog_tags_list"}),(0,n.jsxs)(o.Z,{sidebar:a,children:[(0,n.jsx)(m.Z,{as:"h1",children:d}),(0,n.jsx)(c.Z,{tags:t})]})]})}},63479:function(e,t,a){a.d(t,{Z:()=>s});var n=a("24246");a("27378");var r=a("90496"),l=a("35363");let i={tag:"tag_Nd8t",tagRegular:"tagRegular_TiLs",tagWithCount:"tagWithCount_AQg7"};function s(e){let{permalink:t,label:a,count:s,description:o}=e;return(0,n.jsxs)(l.Z,{href:t,title:o,className:(0,r.Z)(i.tag,s?i.tagWithCount:i.tagRegular),children:[a,s&&(0,n.jsx)("span",{children:s})]})}},69086:function(e,t,a){a.d(t,{Z:()=>c});var n=a("24246");a("27378");var r=a("88715"),l=a("63479"),i=a("57922");let s="tag_SyQ5";function o(e){let{letterEntry:t}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(i.Z,{as:"h2",id:t.letter,children:t.letter}),(0,n.jsx)("ul",{className:"padding--none",children:t.tags.map(e=>(0,n.jsx)("li",{className:s,children:(0,n.jsx)(l.Z,{...e})},e.permalink))}),(0,n.jsx)("hr",{})]})}function c(e){let{tags:t}=e,a=(0,r.P)(t);return(0,n.jsx)("section",{className:"margin-vert--lg",children:a.map(e=>(0,n.jsx)(o,{letterEntry:e},e.letter))})}},88715:function(e,t,a){a.d(t,{M:function(){return r},P:function(){return l}});var n=a(77827);let r=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(e){let t={};return Object.values(e).forEach(e=>{let a=e.label[0].toUpperCase();t[a]??=[],t[a].push(e)}),Object.entries(t).sort((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)}).map(e=>{let[t,a]=e;return{letter:t,tags:a.sort((e,t)=>e.label.localeCompare(t.label))}})}}}]);