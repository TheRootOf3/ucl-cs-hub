"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),s=n(6550),i=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=i??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var b=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},1262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const s={sidebar_position:3,sidebar_label:"Haskell"},i="Haskell",u={unversionedId:"set-up-environment/macos/haskell",id:"set-up-environment/macos/haskell",title:"Haskell",description:"Code written in Haskell is guaranteed to have no side effects ... because no one will ever run it?",source:"@site/docs/set-up-environment/macos/haskell.mdx",sourceDirName:"set-up-environment/macos",slug:"/set-up-environment/macos/haskell",permalink:"/docs/set-up-environment/macos/haskell",draft:!1,editUrl:"https://github.com/uclcshub/uclcshub.github.io/blob/main/docs/set-up-environment/macos/haskell.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Haskell"},sidebar:"defaultSidebar",previous:{title:"C",permalink:"/docs/set-up-environment/macos/c"},next:{title:"Java",permalink:"/docs/set-up-environment/macos/java"}},c={},p=[{value:"Install Haskell",id:"install-haskell",level:2},{value:"Get VS Code extension",id:"get-vs-code-extension",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"haskell"},"Haskell"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Code written in Haskell is guaranteed to have no side effects ... because no one will ever run it?\n-- ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://www.xkcd.com/1312"},"XKCD 1312")))),(0,r.kt)("h2",{id:"install-haskell"},"Install Haskell"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"homebrew",label:"Homebrew",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Paste the following command to your Terminal window:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install ghc cabal-install haskell-stack haskell-language-server\n")),(0,r.kt)("p",null,"This make take a while to install all necessary Haskell components. Once finished, let's test your installation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"ghci")," in terminal. This will open Prelude - Haskell's interactive shell."),(0,r.kt)("li",{parentName:"ol"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"2022 + 1")," and hit ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter"),"."),(0,r.kt)("li",{parentName:"ol"},"Enjoy Haskell telling you the current year! ",(0,r.kt)("em",{parentName:"li"},"Woooah!")," \ud83e\udd73")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To close Prelude, simply hit ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"D"),". Just like in Python!"))),(0,r.kt)(o.Z,{value:"ghcup",label:"GHCup (officially supported)",mdxType:"TabItem"},(0,r.kt)("p",null,"We need to install GHCup, which includes all necessary components to execute Haskell code.\nRun the following command in a Terminal window:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh\n")),(0,r.kt)("p",null,'Once you see the message "Welcome to Haskell!", you\'ll be prompted about updating your ',(0,r.kt)("inlineCode",{parentName:"p"},"$PATH")," variable, installing HLS and better integration with GHCup. Please choose all the default values:\n",(0,r.kt)("img",{alt:"haskell start installation",src:n(7193).Z,width:"804",height:"558"})),(0,r.kt)("p",null,"The download and installation may take a couple of minutes. Once all components are installed, test your Haskell by launching its interactive shell with ",(0,r.kt)("inlineCode",{parentName:"p"},"ghci")," and typing ",(0,r.kt)("inlineCode",{parentName:"p"},"1 + 1"),":\n",(0,r.kt)("img",{alt:"haskell test",src:n(3648).Z,width:"804",height:"558"})))),(0,r.kt)("h2",{id:"get-vs-code-extension"},"Get VS Code extension"),(0,r.kt)("p",null,"JetBrains do not have an IDE for Haskell,\nbut VS Code works very well with the ",(0,r.kt)("strong",{parentName:"p"},"official Haskell extension"),"!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"haskell extensions",src:n(3089).Z,width:"739",height:"220"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Cool! You're all set to start your journey with functional programming.\nPsst... There is a pretty good online guide to Haskell: ",(0,r.kt)("a",{parentName:"p",href:"http://learnyouahaskell.com/"},"Learn You A Haskell for Great Good!")," \ud83d\udcda")))}h.isMDXComponent=!0},3648:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/haskell_end-f62c41e42c2fe551618224a70fb3beb8.gif"},7193:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/haskell_start-373aedd62180842c9fe06e7ccff80a5c.gif"},3089:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/haskell_extension-0e0c5258336c97a4600f3b39522b74e3.png"}}]);