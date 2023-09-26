"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[p,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=y(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},3126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={sidebar_position:5,sidebar_label:"Python"},s="Python 3",u={unversionedId:"set-up-environment/macos/python",id:"set-up-environment/macos/python",title:"Python 3",description:"Python is an experiment in how much freedom programmers need. Too much freedom and nobody can read another's code;",source:"@site/docs/set-up-environment/macos/python.mdx",sourceDirName:"set-up-environment/macos",slug:"/set-up-environment/macos/python",permalink:"/docs/set-up-environment/macos/python",draft:!1,editUrl:"https://github.com/uclcshub/uclcshub.github.io/blob/main/docs/set-up-environment/macos/python.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Python"},sidebar:"defaultSidebar",previous:{title:"Java",permalink:"/docs/set-up-environment/macos/java"},next:{title:"\ud83d\udc27 Linux",permalink:"/docs/set-up-environment/linux"}},c={},p=[{value:"Install Python",id:"install-python",level:2},{value:"Set up your IDE",id:"set-up-your-ide",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-3"},"Python 3"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Python is an experiment in how much freedom programmers need. Too much freedom and nobody can read another's code;\ntoo little and expressiveness is endangered. -- ",(0,r.kt)("em",{parentName:"p"},"Guido van Rossum"))),(0,r.kt)("p",null,"We only use Python 3 at UCL because it\u2019s 2023 and Python 2 is long lost in the past, thank goodness."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Unlike Java JDK versions, ",(0,r.kt)("strong",{parentName:"p"},"Python 2 and Python 3 are separate languages"),"! They differ in syntax and much more!")),(0,r.kt)("h2",{id:"install-python"},"Install Python"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"homebrew",label:"Homebrew",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The simplest way to install Python 3 is to use Homebrew! Open Terminal and run the following command to install Python:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python\n")),(0,r.kt)("p",null,"Once it's completed (which may take some time!), let's test that Python has been installed correctly."),(0,r.kt)("p",null,"Type ",(0,r.kt)("inlineCode",{parentName:"p"},"python3")," in Terminal. This should open interactive shell, where you can type..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print("Hello World!")\n')),(0,r.kt)("p",null,"...and expect a kind greeting from your very own Python! Congratulations! \ud83d\udc0d \ud83c\udf89"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can close Python's interactive shell by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"D")," or typing ",(0,r.kt)("inlineCode",{parentName:"p"},"exit()"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"python test git",src:n(6732).Z,width:"776",height:"350"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Although not necessary for using Python,\nyou may find it helpful to install the standard GUI library - ",(0,r.kt)("inlineCode",{parentName:"p"},"tkinter"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python-tk\n")))),(0,r.kt)(l.Z,{value:"pythonorg",label:"Python.org",mdxType:"TabItem"},(0,r.kt)("p",null,"If you prefer to download Python from the official Python website,\nvisit ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"the Downloads page"),"!"))),(0,r.kt)("h2",{id:"set-up-your-ide"},"Set up your IDE"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"vs-code",label:"VS Code",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"VS Code is a highly customizable code editor, which has fantastic extensions! Install the official support for Python, which provides you with great code completion, code formatter, framework for testing, debugging, and more!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Python extensions picture",src:n(7726).Z,width:"966",height:"242"}))),(0,r.kt)(l.Z,{value:"jetbrains-pycharm",label:"JetBrains PyCharm",mdxType:"TabItem"},(0,r.kt)("p",null,"PyCharm is a powerful IDE, with lots of useful built-in tools! Assuming you've already got your JetBrains Toolbox (if not, ",(0,r.kt)("a",{parentName:"p",href:"/docs/set-up-environment/macos#jetbrains-toolbox"},"check this out!"),"):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the JetBrains Toolbox and install PyCharm Professional, once opened it should automatically find your Python environment.")))),(0,r.kt)("admonition",{title:"Well done!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You're all set to deal with snakes! \ud83d\udc0d")))}h.isMDXComponent=!0},6732:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/python_test-9e04447d17e3c00e4058ed5c6a8c04e9.gif"},7726:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/python_extension-55384fa8ab01e829bb534ffe1e356d67.png"}}]);