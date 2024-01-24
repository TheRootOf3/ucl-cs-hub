"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),i=n(6010),o=n(3438),a=n(9960),s=n(3919),c=n(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},n)}function p(e){let{href:t,icon:n,title:o,description:a}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:o},n," ",o),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:a},a))}function m(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const a=(0,o.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},5310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),i=(n(7294),n(3905)),o=n(2991);const a={sidebar_position:1},s="\ud83d\udee0\ufe0f Set Up Your Environment",c={unversionedId:"set-up-environment/index",id:"set-up-environment/index",title:"\ud83d\udee0\ufe0f Set Up Your Environment",description:"Getting Started",source:"@site/docs/set-up-environment/index.mdx",sourceDirName:"set-up-environment",slug:"/set-up-environment/",permalink:"/docs/set-up-environment/",draft:!1,editUrl:"https://github.com/uclcshub/uclcshub.github.io/blob/main/docs/set-up-environment/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"MPEB 4.06",permalink:"/docs/labs-availability/MPEB406"},next:{title:"\ud83c\udf81 Free Stuff",permalink:"/docs/set-up-environment/free-stuff"}},l={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Next Steps...",id:"next-steps",level:2},{value:"Credits",id:"credits",level:2}],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-set-up-your-environment"},"\ud83d\udee0\ufe0f Set Up Your Environment"),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Welcome! To make your life easier (at least in the beginning!) we aim to provide minimal but comprehensive set up your environment guide!"),(0,i.kt)("p",null,"We recommend you start by getting some ",(0,i.kt)("a",{parentName:"p",href:"/docs/set-up-environment/free-stuff"},"\ud83c\udf81 Free Stuff"),", and then configuring your platform:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/set-up-environment/windows"},"\ud83e\ude9f Windows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/set-up-environment/macos"},"\ud83c\udf4e MacOS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/set-up-environment/linux"},"\ud83d\udc27 Linux"))),(0,i.kt)("p",null,"Now, let's get your environment set up! \ud83c\udf89"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you spot any typos, please either:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/TheRootOf3/ucl-cs-hub/issues/new"},"Open an issue on GitHub")," explaining what should be modified, or"),(0,i.kt)("li",{parentName:"ul"},'fork this repo, create a pull request and assign one of the Senior Programming Tutors to review your change! To make it easier, we put the "',(0,i.kt)("strong",{parentName:"li"},"Edit this page"),'" option at the bottom of every page - ',(0,i.kt)("strong",{parentName:"li"},"it's very intuitive"),"!")),(0,i.kt)("p",{parentName:"admonition"},"Thank you!")),(0,i.kt)("h2",{id:"next-steps"},"Next Steps..."),(0,i.kt)(o.Z,{mdxType:"DocCardList"}),(0,i.kt)("h2",{id:"credits"},"Credits"),(0,i.kt)("p",null,"We proudly reuse and improve materials created throughout the Programming Tutoring scheme\nby other Senior Programming Tutors, including the contributors of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/greenfrogs/ucl_cs_setup_your_environment/tree/master"},"this GitHub repo"),"."))}d.isMDXComponent=!0}}]);