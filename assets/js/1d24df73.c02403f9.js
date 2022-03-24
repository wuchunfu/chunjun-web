"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[819],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(h,c(c({ref:t},s),{},{components:n})):r.createElement(h,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={title:"Introduction",sidebar_position:1},u=void 0,p={unversionedId:"chunjunDocs/intro",id:"chunjunDocs/intro",title:"Introduction",description:"License",source:"@site/docs/chunjunDocs/intro.md",sourceDirName:"chunjunDocs",slug:"/chunjunDocs/intro",permalink:"/chunjun-web/docs/chunjunDocs/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"QuickStart",permalink:"/chunjun-web/docs/chunjunDocs/quickstart"}},s={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0.html"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/license-Apache%202-4EB1BA.svg",alt:"License"}))),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"/chunjun-web/docs/chunjunDocs/change-log"},"ChunJun 1.12 New Features"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Most plugins support concurrent reading and writing of data, which can greatly improve the speed of reading and writing;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Limit the reading speed of source plugins and reduce the impact on business databases;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Save the dirty data when writing data;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Limit the maximum number of dirty data;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Multiple running modes: Local,Standalone,Yarn Session,Yarn Per;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Synchronization tasks support transformer operations that execute flinksql syntax;")))),(0,o.kt)("p",null,"The following databases are currently supported:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"},"Database Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Source"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Sink"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Lookup"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"MongoDB"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/chunjun-web/docs/chunjunDocs/connectors/mongodb/mongodb-source"},"doc")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/chunjun-web/docs/chunjunDocs/connectors/mongodb/mongodb-sink"},"doc")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/chunjun-web/docs/chunjunDocs/connectors/mongodb/mongodb-lookup"},"doc"))))),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"Please click ",(0,o.kt)("a",{parentName:"p",href:"/chunjun-web/docs/chunjunDocs/quickstart"},"Quick Start")),(0,o.kt)("h1",{id:"how-to-contribute-chunjun"},"How to contribute ChunJun"),(0,o.kt)("p",null,"Please click ",(0,o.kt)("a",{parentName:"p",href:"/chunjun-web/docs/chunjunDocs/contributing"},"Contribution")),(0,o.kt)("h1",{id:"license"},"License"),(0,o.kt)("p",null,"ChunJun is under the Apache 2.0 license. See the ",(0,o.kt)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0"},"LICENSE")," file for details."))}m.isMDXComponent=!0}}]);