"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[690],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),s=r,d=c["".concat(u,".").concat(s)]||c[s]||k[s]||l;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7241:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:6,title:"MongoDB Sink"},u=void 0,p={unversionedId:"chunjunDocs/connectors/mongodb/mongodb-sink",id:"chunjunDocs/connectors/mongodb/mongodb-sink",title:"MongoDB Sink",description:"1. Introduce",source:"@site/docs/chunjunDocs/connectors/mongodb/mongodb-sink.md",sourceDirName:"chunjunDocs/connectors/mongodb",slug:"/chunjunDocs/connectors/mongodb/mongodb-sink",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/mongodb/mongodb-sink",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/mongodb/mongodb-sink.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"MongoDB Sink"},sidebar:"tutorialSidebar",previous:{title:"QuickStart",permalink:"/chunjun-web/en/docs/chunjunDocs/quickstart"},next:{title:"MongoDB Lookup",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/mongodb/mongodb-lookup"}},m={},k=[{value:"1. Introduce",id:"1-introduce",level:2},{value:"2. Version Support",id:"2-version-support",level:2},{value:"3. Connector Name",id:"3-connector-name",level:2},{value:"4. Parameter description",id:"4-parameter-description",level:2},{value:"4.1 Sync",id:"41-sync",level:4},{value:"2\u3001SQL",id:"2sql",level:3},{value:"5. Type",id:"5-type",level:2},{value:"6. Example",id:"6-example",level:2}],c={toc:k};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-introduce"},"1. Introduce"),(0,l.kt)("p",null,"MongoDB Sink"),(0,l.kt)("h2",{id:"2-version-support"},"2. Version Support"),(0,l.kt)("p",null,"MongoDB 3.4 and above"),(0,l.kt)("h2",{id:"3-connector-name"},"3. Connector Name"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sync"),(0,l.kt)("th",{parentName:"tr",align:null},"mongodbsink, mongodbwriter"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL"),(0,l.kt)("td",{parentName:"tr",align:null},"mongodb-x")))),(0,l.kt)("h2",{id:"4-parameter-description"},"4. Parameter description"),(0,l.kt)("h4",{id:"41-sync"},"4.1 Sync"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"url"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1aURL of MongoDB connection\uff0csearch ",(0,l.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"MongoDB Documents")," for detail information."),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hostPorts"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1ahost and port of database, formatted like IP1:port. if using Multiple addresses, separated it by comma."),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"username"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1auser of database"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"password"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1apassword of database "),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"database"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1aname of database"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"collectionName"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1acollection name of database"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"replaceKey"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1areplaceKey specifies the primary key of each row of records, it's useful in replace and update mode."),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"writeMode"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1awrite data mode, do not support replace and update mode when batchSize > 1."),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Option\uff1ainsert/replace/update"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1ainsert")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"batchSize"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1athe size of rows in every single batch, it will decrease network communication with MongoDB, but a large number will cause system out of memory."),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aint"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a1"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"flushIntervalMills"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1atime interval between each batch, Unit: ms."),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aint"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a10000")))),(0,l.kt)("h3",{id:"2sql"},"2\u3001SQL"),(0,l.kt)("p",null,"SQL only support INSERT mode. in the future, we will support upsert mode if you configure the primary key."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"url"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1aURL of MongoDB connection\uff0csearch ",(0,l.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"MongoDB Documents")," for detail information."),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"database"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1aname of database"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"collection"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1acollection name"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"username"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1auser of database"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"password"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1apassword of database "),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sink.parallelism"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1aparallelism of sink"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sink.buffer-flush.max-rows"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1athe size of rows in every single batch"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sink.buffer-flush.interval"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1atime interval between each batch, Unit: ms."),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a(none)")))),(0,l.kt)("h2",{id:"5-type"},"5. Type"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"support"),(0,l.kt)("th",{parentName:"tr",align:null},"int"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"long")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"double")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"decimal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"objectId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bindata")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no support"),(0,l.kt)("td",{parentName:"tr",align:null},"array")))),(0,l.kt)("h2",{id:"6-example"},"6. Example"),(0,l.kt)("p",null,"The details are in flinkx-examples dir."))}s.isMDXComponent=!0}}]);