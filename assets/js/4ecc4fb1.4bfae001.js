"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[928],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=p(n),s=r,g=m["".concat(u,".").concat(s)]||m[s]||d[s]||l;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6655:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={slug:"dirty-data-management",title:"\u4efb\u52a1\u810f\u6570\u636e\u63d2\u4ef6\u5316\u7ba1\u7406",authors:"tiezhu",tags:["Principle"]},u="\u80cc\u666f",p={permalink:"/chunjun-web/blog/dirty-data-management",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-01-13-dirty-data-management/FXIP-8 \u4efb\u52a1\u810f\u6570\u636e\u63d2\u4ef6\u5316\u7ba1\u7406.md",source:"@site/blog/2022-01-13-dirty-data-management/FXIP-8 \u4efb\u52a1\u810f\u6570\u636e\u63d2\u4ef6\u5316\u7ba1\u7406.md",title:"\u4efb\u52a1\u810f\u6570\u636e\u63d2\u4ef6\u5316\u7ba1\u7406",description:"\u76ee\u524d\u4efb\u52a1\u5bf9\u810f\u6570\u636e\u7684\u5904\u7406\u4ec5\u4ec5\u662f\u65e5\u5fd7\u6253\u5370\uff0c\u8fd9\u6837\u663e\u7136\u662f\u65e0\u6cd5\u5e94\u5bf9\u5ba2\u6237\u591a\u53d8\u7684\u4f7f\u7528\u573a\u666f\u3002",date:"2022-01-13T00:00:00.000Z",formattedDate:"January 13, 2022",tags:[{label:"Principle",permalink:"/chunjun-web/blog/tags/principle"}],readingTime:4.395,truncated:!1,authors:[{name:"TieZhu",title:"ChunJun maintainer",url:"https://github.com/WTZ468071157",imageURL:"https://github.com/WTZ468071157.png",key:"tiezhu"}],frontMatter:{slug:"dirty-data-management",title:"\u4efb\u52a1\u810f\u6570\u636e\u63d2\u4ef6\u5316\u7ba1\u7406",authors:"tiezhu",tags:["Principle"]},nextItem:{title:"\u5206\u5272SQL\u8bed\u53e5",permalink:"/chunjun-web/blog/spilt-sql-statement"}},c={authorsImageUrls:[void 0]},d=[{value:"\u6d41\u7a0b\u56fe",id:"\u6d41\u7a0b\u56fe",level:2},{value:"\u8be6\u7ec6\u63cf\u8ff0",id:"\u8be6\u7ec6\u63cf\u8ff0",level:2},{value:"\u4efb\u52a1\u914d\u7f6e\u53c2\u6570",id:"\u4efb\u52a1\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u810f\u6570\u636e\u63d2\u4ef6\u7ba1\u7406\u8005",id:"\u810f\u6570\u636e\u63d2\u4ef6\u7ba1\u7406\u8005",level:3},{value:"\u810f\u6570\u636e\u63d2\u4ef6\u6d88\u8d39\u8005",id:"\u810f\u6570\u636e\u63d2\u4ef6\u6d88\u8d39\u8005",level:3},{value:"Metircs",id:"metircs",level:4},{value:"\u98ce\u9669",id:"\u98ce\u9669",level:4},{value:"\u9879\u76ee\u76ee\u5f55\u7ed3\u6784",id:"\u9879\u76ee\u76ee\u5f55\u7ed3\u6784",level:4},{value:"\u6253\u5305\u76ee\u5f55",id:"\u6253\u5305\u76ee\u5f55",level:4}],m={toc:d};function s(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u76ee\u524d\u4efb\u52a1\u5bf9\u810f\u6570\u636e\u7684\u5904\u7406\u4ec5\u4ec5\u662f\u65e5\u5fd7\u6253\u5370\uff0c\u8fd9\u6837\u663e\u7136\u662f\u65e0\u6cd5\u5e94\u5bf9\u5ba2\u6237\u591a\u53d8\u7684\u4f7f\u7528\u573a\u666f\u3002"),(0,l.kt)("h1",{id:"\u65b9\u6848"},"\u65b9\u6848"),(0,l.kt)("p",null,"\u6574\u4f53\u67b6\u6784\u91c7\u7528",(0,l.kt)("strong",{parentName:"p"},"\u751f\u4ea7\u8005-\u6d88\u8d39\u8005"),"\u6a21\u5f0f\uff0c\u4efb\u52a1\u542f\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u540c\u65f6\u5c06Manager\u521d\u59cb\u5316\u5e76\u542f\u52a8Consumer\u5f02\u6b65\u7ebf\u7a0b\u6c60\uff0c\u4ec5\u9700\u5728BaseRichInputFormat \u548c BaseRichOutputFormat \u8c03\u7528 Manager\u7684collect() \u65b9\u6cd5\u6536\u96c6\u810f\u6570\u636e\u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"\u6d41\u7a0b\u56fe"},"\u6d41\u7a0b\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"image.png",src:n(8619).Z,width:"1406",height:"2560"}),"\n",(0,l.kt)("img",{loading:"lazy",alt:"image.png",src:n(8893).Z,width:"1440",height:"2031"})),(0,l.kt)("h2",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h3",{id:"\u4efb\u52a1\u914d\u7f6e\u53c2\u6570"},"\u4efb\u52a1\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("p",null,"\u5bf9\u5e94Java \u5b9e\u4f53\u7c7b - DirtyConf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},' "dirty": {\n        "type": "log",\n        "printRate": 500,\n        "errorLimit": 1000,\n        "totalLimit": 1000,\n        "properties": {\n          "store": true,\n          "fileName": "dirty.csv",\n          "filePath": "~/dirty"\n        }\n      }\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type")),(0,l.kt)("p",null,"\u63d2\u4ef6\u7c7b\u578b\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5fc5\u586b\u9879"),"\uff0c\u6839\u636etype\u52a8\u6001\u52a0\u8f7d\u5bf9\u5e94\u7684\u63d2\u4ef6\uff1b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"printRate")),(0,l.kt)("p",null,"\u810f\u6570\u636e\u5728\u65e5\u5fd7\u4e2d\u7684\u6253\u5370\u9891\u7387\uff0c\u9ed8\u8ba4\u503c\u662f",(0,l.kt)("strong",{parentName:"p"},"Long.MAX_VALUE"),"\uff0c\u5373\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u6253\u5370"),"\u810f\u6570\u636e\u4fe1\u606f\u5728\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff08\u56e0\u4e3a\u5ba2\u6237\u7684\u6570\u636e\u4e0d\u5b9c\u66b4\u9732\uff09\uff1b\n",(0,l.kt)("strong",{parentName:"p"},"\u6539\uff082022-01-13 by tiezhu"),"\uff09\uff1a\u9ed8\u8ba4\u503c\u4fee\u6539\u4e3a1\uff0c\u8868\u793a\u9ed8\u8ba4\u810f\u6570\u636e\u4fe1\u606f\u90fd\u4f1a\u6253\u5370\u5230\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff0c\u540c\u65f6\uff0c\u5982\u679cprintRate <= 0\uff0c\u8868\u793a\u4e0d\u6253\u5370\u4efb\u4f55\u810f\u6570\u636e\u4fe1\u606f\uff1b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"errorLimit")),(0,l.kt)("p",null,"\u810f\u6570\u636e\u5728\u63d2\u4ef6\u4e2d\uff0c\u5904\u7406\u5931\u8d25\u7684\u6761\u6570\u9650\u5236\uff0c\u5f53\u5904\u7406\u5931\u8d25\u7684\u810f\u6570\u636e\u6761\u6570\u8d85\u8fc7\u8fd9\u4e2a\u9650\u5236\u65f6\uff0c\u4efb\u52a1\u629b\u51faNoRestartException\uff0c\u5373\u4efb\u52a1\u5931\u8d25\u4e14\u4e0d\u91cd\u8bd5\uff1b\u9ed8\u8ba4\u503c\u662f",(0,l.kt)("strong",{parentName:"p"},"Long.MAX_VALUE"),"\uff1b\n",(0,l.kt)("strong",{parentName:"p"},"\u6539\uff082022-01-13 by tiezhu\uff09"),"\uff1a\u9ed8\u8ba4\u503c\u4fee\u6539\u4e3a1\uff0c\u5982\u679cerrorLimit < 0\uff0c\u8868\u793a\u4efb\u52a1\u5bb9\u5fcd\u6240\u6709\u7684\u5f02\u5e38\uff0c\u4e0d\u5931\u8d25\uff1b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"totalLimit")),(0,l.kt)("p",null,"\u810f\u6570\u636e\u603b\u6761\u6570\u9650\u5236\uff0c\u5373\u6536\u96c6\u5230\u7684\u810f\u6570\u636e\u8d85\u8fc7\u8fd9\u4e2a\u9650\u5236\u65f6\uff0c\u4efb\u52a1\u629b\u51faNoRestartException\uff0c\u5373\u4efb\u52a1\u5931\u8d25\u4e14\u4e0d\u91cd\u8bd5\uff1b",(0,l.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c\u662fLong.MAX_VALUE"),"\uff1b\n",(0,l.kt)("strong",{parentName:"p"},"\u6539\uff082022-01-13 by tiezhu\uff09"),"\uff1a\u9ed8\u8ba4\u503c\u4fee\u6539\u4e3a1\uff0c\u5982\u679ctotalLimit < 0\uff0c\u8868\u793a\u4efb\u52a1\u5bb9\u5fcd\u6240\u6709\u7684\u5f02\u5e38\uff0c\u4e0d\u5931\u8d25\uff1b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"properties")),(0,l.kt)("p",null,"\u5404\u81ea\u63d2\u4ef6\u7684\u53c2\u6570\u914d\u7f6e"),(0,l.kt)("h3",{id:"\u810f\u6570\u636e\u63d2\u4ef6\u7ba1\u7406\u8005"},"\u810f\u6570\u636e\u63d2\u4ef6\u7ba1\u7406\u8005"),(0,l.kt)("p",null,"\u5bf9\u5e94Java \u5b9e\u4f53\u7c7b - DirtyManager\nManager\u4e3b\u8981\u7ef4\u62a4\u7740\u810f\u6570\u636e\u6d88\u8d39\u8005Consumer \u548c \u4e00\u4e2a\u5f02\u6b65\u7ebf\u7a0b\u6c60\uff1b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u4f5c\u7528\u662f",(0,l.kt)("strong",{parentName:"li"},"\u6536\u96c6\u810f\u6570\u636e"),"\uff0c\u5e76\u4e0b\u53d1\u5230Consumer\u961f\u5217\u4e2d")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"image.png",src:n(7692).Z,width:"782",height:"350"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528 collect() \u65b9\u6cd5")),(0,l.kt)("p",null,"BaseRichInputFormat\n",(0,l.kt)("img",{loading:"lazy",alt:"image.png",src:n(6477).Z,width:"800",height:"633"})),(0,l.kt)("h3",{id:"\u810f\u6570\u636e\u63d2\u4ef6\u6d88\u8d39\u8005"},"\u810f\u6570\u636e\u63d2\u4ef6\u6d88\u8d39\u8005"),(0,l.kt)("p",null,"\u5bf9\u5e94Java \u5b9e\u4f53\u7c7b - AbstractDirtyConsumer\nConsumer\u4e3b\u8981\u7ef4\u62a4\u7740\u4e00\u4e2a\u6d88\u606f\u961f\u5217\uff0c\u4e2d\u95f4\u7f13\u5b58\u7740\u810f\u6570\u636e\u4fe1\u606f\uff1b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"run() \u65b9\u6cd5")),(0,l.kt)("p",null,"\u4e3b\u8981\u903b\u8f91\u662f\u6d88\u8d39\u961f\u5217\u4e2d\u7684\u810f\u6570\u636e\uff0cconsume() \u65b9\u6cd5\u4ea4\u7ed9\u5b50\u7c7b\u53bb\u5b9e\u73b0\uff1b\u5982\u679c\u5728consume\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e86\u5f02\u5e38\uff0c\u90a3\u4e48errorCounter \u8ba1\u6570\u52a0\u4e00\u3002\n",(0,l.kt)("img",{loading:"lazy",alt:"image.png",src:n(5383).Z,width:"595",height:"411"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"consume() \u65b9\u6cd5")),(0,l.kt)("p",null,"\u5904\u7406\u810f\u6570\u636e\u7684\u5177\u4f53\u903b\u8f91\uff0c\u4ea4\u7531\u5b50\u7c7b\u5b9e\u73b0\uff0c\u6839\u636e\u63d2\u4ef6\u7684\u4e0d\u540c\uff0c\u5bf9\u810f\u6570\u636e\u5904\u7406\u903b\u8f91\u4e5f\u4f1a\u6709\u6240\u4e0d\u540c\u3002\n\0"),(0,l.kt)("h1",{id:"\u63a5\u53e3\u89c4\u8303"},"\u63a5\u53e3\u89c4\u8303"),(0,l.kt)("p",null,"\u542f\u52a8\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},' "dirty": {\n        "type": "log",\n        "printRate": 500,\n        "errorLimit": 1000,\n        "totalLimit": 1000,\n        "properties": {\n          "store": true,\n          "fileName": "dirty.csv",\n          "filePath": "~/dirty"\n        }\n      }\n\n# \u4ee5\u4e0b\u53c2\u6570\u5728FlinkX \u542f\u52a8\u53c2\u6570-confProp\u4e2d\nflinkx.dirty-data.output-type = log/jdbc\nflinkx.dirty-data.max-rows = 1000 // total limit\nflinkx.dirty-data.max-collect-failed-rows = 1000 // error limit\n\nflinkx.dirty-data.jdbc.url= \nflinkx.dirty-data.jdbc.username= \nflinkx.dirty-data.jdbc.password=\nflinkx.dirty-data.jdbc.database=   // database \u53ef\u4ee5\u5199\u5728 url\nflinkx.dirty-data.jdbc.table=\n\nflinkx.dirty-data.log.print-interval= 500\n')),(0,l.kt)("p",null,"JDBC \u5efa\u8868\u8bed\u53e5\uff08MySQL\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"job_id\njob_name \n\u8868\u540d operator_name\n\u6570\u636e data\n\u9519\u8bef\u539f\u56e0 error_msg\n\u5b57\u6bb5\u540d field_name\n\nCREATE TABLE IF NOT EXISTS flinkx_dirty_data\n(\n    job_id        VARCHAR(32)                               NOT NULL COMMENT 'Flink Job Id',\n    job_name      VARCHAR(255)                              NOT NULL COMMENT 'Flink Job Name',\n    operator_name VARCHAR(255)                              NOT NULL COMMENT '\u51fa\u73b0\u5f02\u5e38\u6570\u636e\u7684\u7b97\u5b50\u540d\uff0c\u5305\u542b\u8868\u540d',\n    dirty_data    TEXT                                      NOT NULL COMMENT '\u810f\u6570\u636e\u7684\u5f02\u5e38\u6570\u636e',\n    error_message TEXT COMMENT '\u810f\u6570\u636e\u4e2d\u5f02\u5e38\u539f\u56e0',\n    field_name    VARCHAR(255) COMMENT '\u810f\u6570\u636e\u4e2d\u5f02\u5e38\u5b57\u6bb5\u540d',\n    create_time    TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6) NOT NULL ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '\u810f\u6570\u636e\u51fa\u73b0\u7684\u65f6\u95f4\u70b9'\n)\n    COMMENT '\u5b58\u50a8\u810f\u6570\u636e';\n\nCREATE INDEX idx_job_id ON flinkx_dirty_data (job_id);\nCREATE INDEX idx_operator_name ON flinkx_dirty_data(operator_name);\nCREATE INDEX idx_create_time ON flinkx_dirty_data(create_time);\n")),(0,l.kt)("h4",{id:"metircs"},"Metircs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"flinkx_DirtyData_count\nflinkx_DirtyData_collectFailedCount\n")),(0,l.kt)("h4",{id:"\u98ce\u9669"},"\u98ce\u9669"),(0,l.kt)("p",null,"\u6570\u636e\u540c\u6b65JSON\u810f\u6570\u636e\u914d\u7f6e"),(0,l.kt)("h4",{id:"\u9879\u76ee\u76ee\u5f55\u7ed3\u6784"},"\u9879\u76ee\u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("p",null,"\u7236\u6a21\u5757\nflinkx-dirtydata-collectors"),(0,l.kt)("p",null,"\u5b50\u6a21\u5757\nflinkx-dirtydata-collector-jdbc\nflinkx-dirtydata-collector-log"),(0,l.kt)("h4",{id:"\u6253\u5305\u76ee\u5f55"},"\u6253\u5305\u76ee\u5f55"),(0,l.kt)("p",null,"flinkx-dist\ndirtydata-collector\njdbc\nlog"))}s.isMDXComponent=!0},8619:function(t,e,n){e.Z=n.p+"assets/images/image-1-f8258fc022ba9f91dd76b76db7b80973.png"},8893:function(t,e,n){e.Z=n.p+"assets/images/image-2-49f561ca5fe6d482da08d9ad795a59d4.png"},7692:function(t,e,n){e.Z=n.p+"assets/images/image-3-670e84483a8c2af3179af0c82a22fc7e.png"},6477:function(t,e,n){e.Z=n.p+"assets/images/image-4-360f9be1292773aedd838fee51ef0b51.png"},5383:function(t,e,n){e.Z=n.p+"assets/images/image-5-a8570f49c5bfa10fc7c8a34be713d8a4.png"}}]);