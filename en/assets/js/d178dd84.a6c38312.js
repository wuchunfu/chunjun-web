"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[893],{3905:function(n,e,t){t.d(e,{Zo:function(){return k},kt:function(){return c}});var a=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var o=a.createContext({}),p=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},k=function(n){var e=p(n.components);return a.createElement(o.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,o=n.parentName,k=s(n,["components","mdxType","originalType","parentName"]),d=p(t),c=l,m=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return t?a.createElement(m,i(i({ref:e},k),{},{components:t})):a.createElement(m,i({ref:e},k))}));function c(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s.mdxType="string"==typeof n?n:l,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2893:function(n,e,t){t.r(e),t.d(e,{assets:function(){return k},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),i=["components"],s={title:"QuickStart",sidebar_position:2},o=void 0,p={unversionedId:"chunjunDocs/quickstart",id:"chunjunDocs/quickstart",title:"QuickStart",description:"\u4e0b\u8f7d\u4ee3\u7801",source:"@site/docs/chunjunDocs/quickstart.md",sourceDirName:"chunjunDocs",slug:"/chunjunDocs/quickstart",permalink:"/chunjun-web/en/docs/chunjunDocs/quickstart",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"QuickStart",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/chunjun-web/en/docs/chunjunDocs/intro"},next:{title:"MongoDB Sink",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/mongodb/mongodb-sink"}},k={},u=[{value:"\u4e0b\u8f7d\u4ee3\u7801",id:"\u4e0b\u8f7d\u4ee3\u7801",level:2},{value:"\u7f16\u8bd1\u63d2\u4ef6",id:"\u7f16\u8bd1\u63d2\u4ef6",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"1.\u7f16\u8bd1\u627e\u4e0d\u5230DB2\u3001\u8fbe\u68a6\u3001gbase\u3001ojdbc8\u7b49\u9a71\u52a8\u5305",id:"1\u7f16\u8bd1\u627e\u4e0d\u5230db2\u8fbe\u68a6gbaseojdbc8\u7b49\u9a71\u52a8\u5305",level:3},{value:"\u8fd0\u884c\u4efb\u52a1",id:"\u8fd0\u884c\u4efb\u52a1",level:2},{value:"\u6570\u636e\u540c\u6b65\u4efb\u52a1",id:"\u6570\u636e\u540c\u6b65\u4efb\u52a1",level:4},{value:"flinksql\u4efb\u52a1",id:"flinksql\u4efb\u52a1",level:4},{value:"Local\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1",id:"local\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1",level:3},{value:"Standalone\u6a21\u5f0f\u8fd0\u884c",id:"standalone\u6a21\u5f0f\u8fd0\u884c",level:3},{value:"\u4ee5Yarn Session\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1",id:"\u4ee5yarn-session\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1",level:3},{value:"\u4ee5Yarn Perjob\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1",id:"\u4ee5yarn-perjob\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1",level:3},{value:"Kubernetes Session\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1",id:"kubernetes-session\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1",level:3},{value:"Kubernetes Application\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1",id:"kubernetes-application\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2}],d={toc:u};function c(n){var e=n.components,s=(0,l.Z)(n,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e0b\u8f7d\u4ee3\u7801"},"\u4e0b\u8f7d\u4ee3\u7801"),(0,r.kt)("p",null,"1.\u4f7f\u7528git\u5de5\u5177\u628a\u9879\u76eeclone\u5230\u672c\u5730"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/DTStack/flinkx.git\ncd flinkx\n")),(0,r.kt)("h2",{id:"\u7f16\u8bd1\u63d2\u4ef6"},"\u7f16\u8bd1\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5728flinkx home\u76ee\u5f55\u4e0b\u6267\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean package -DskipTests \n")),(0,r.kt)("p",null,"\u6216\u8005\u6267\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh build/build.sh\n")),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h3",{id:"1\u7f16\u8bd1\u627e\u4e0d\u5230db2\u8fbe\u68a6gbaseojdbc8\u7b49\u9a71\u52a8\u5305"},"1.\u7f16\u8bd1\u627e\u4e0d\u5230DB2\u3001\u8fbe\u68a6\u3001gbase\u3001ojdbc8\u7b49\u9a71\u52a8\u5305"),(0,r.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\uff1a\u5728$FLINKX_HOME/jars\u76ee\u5f55\u4e0b\u6709\u8fd9\u4e9b\u9a71\u52a8\u5305\uff0c\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u63d2\u4ef6\u63d0\u4f9b\u7684\u811a\u672c\u5b89\u88c5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## windows\u5e73\u53f0\n./$FLINKX_HOME/bin/install_jars.bat\n\n## unix\u5e73\u53f0\n./$FLINKX_HOME/bin/install_jars.sh\n")),(0,r.kt)("h2",{id:"\u8fd0\u884c\u4efb\u52a1"},"\u8fd0\u884c\u4efb\u52a1"),(0,r.kt)("p",null,"NOTE:\u9879\u76ee\u4e2d\u7684flinkx-examples\u6a21\u5757\u4e0b\u63d0\u4f9b\u4e86\u5927\u91cf "),(0,r.kt)("h4",{id:"\u6570\u636e\u540c\u6b65\u4efb\u52a1"},"\u6570\u636e\u540c\u6b65\u4efb\u52a1"),(0,r.kt)("p",null,"\u9996\u5148\u51c6\u5907\u8981\u8fd0\u884c\u7684\u4efb\u52a1json\uff0c\u8fd9\u91cc\u4ee5stream\u63d2\u4ef6\u4e3a\u4f8b(",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"flinkx-examples"),"\u6587\u4ef6\u5939\u4e0b\u6709\u5927\u91cf\u6848\u4f8b"),")\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "job": {\n    "content": [\n      {\n        "reader": {\n          "parameter": {\n            "column": [\n              {\n                "name": "id",\n                "type": "id"\n              },\n              {\n                "name": "name",\n                "type": "string"\n              },\n              {\n                "name": "content",\n                "type": "string"\n              }\n            ],\n            "sliceRecordCount": ["30"],\n            "permitsPerSecond": 1\n          },\n          "table": {\n            "tableName": "sourceTable"\n          },\n          "name": "streamreader"\n        },\n        "writer": {\n          "parameter": {\n            "column": [\n              {\n                "name": "id",\n                "type": "id"\n              },\n              {\n                "name": "name",\n                "type": "string"\n              },\n              {\n                "name": "content",\n                "type": "timestamp"\n              }\n            ],\n            "print": true\n          },\n          "table": {\n            "tableName": "sinkTable"\n          },\n          "name": "streamwriter"\n        },\n        "transformer": {\n          "transformSql": "select id,name, NOW() from sourceTable where CHAR_LENGTH(name) < 50 and CHAR_LENGTH(content) < 50"\n        }\n      }\n    ],\n    "setting": {\n      "errorLimit": {\n        "record": 100\n      },\n      "speed": {\n        "bytes": 0,\n        "channel": 1,\n        "readerChannel": 1,\n        "writerChannel": 1\n      }\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"flinksql\u4efb\u52a1"},"flinksql\u4efb\u52a1"),(0,r.kt)("p",null,"\u6216\u8005\u51c6\u5907\u8981\u8fd0\u884c\u7684flinksql\u4efb\u52a1\uff0c\u8fd9\u91cc\u4ee5stream\u63d2\u4ef6\u4e3a\u4f8b(",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"flinkx-examples"),"\u6587\u4ef6\u5939\u4e0b\u6709\u5927\u91cf\u6848\u4f8b"),")\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE source\n(\n    id        INT,\n    name      STRING,\n    money     DECIMAL(32, 2),\n    dateone   timestamp,\n    age       bigint,\n    datethree timestamp,\n    datesix   timestamp(6),\n    datenigth timestamp(9),\n    dtdate    date,\n    dttime    time\n) WITH (\n      'connector' = 'stream-x',\n      'number-of-rows' = '10', -- \u8f93\u5165\u6761\u6570\uff0c\u9ed8\u8ba4\u65e0\u9650\n      'rows-per-second' = '1' -- \u6bcf\u79d2\u8f93\u5165\u6761\u6570\uff0c\u9ed8\u8ba4\u4e0d\u9650\u5236\n      );\n\nCREATE TABLE sink\n(\n    id        INT,\n    name      STRING,\n    money     DECIMAL(32, 2),\n    dateone   timestamp,\n    age       bigint,\n    datethree timestamp,\n    datesix   timestamp(6),\n    datenigth timestamp(9),\n    dtdate    date,\n    dttime    time\n) WITH (\n      'connector' = 'stream-x',\n      'print' = 'true'\n      );\n\ninsert into sink\nselect *\nfrom source;\n")),(0,r.kt)("h3",{id:"local\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1"},"Local\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1"),(0,r.kt)("p",null,"\u547d\u4ee4\u6a21\u677f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/flinkx \\\n    -mode local \\\n    -jobType sync \\\n    -job flinkx-examples/json/stream/stream.json \\\n    -flinkxDistDir flinkx-dist\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728flink-conf.yaml\u914d\u7f6e\u6587\u4ef6\u91cc\u914d\u7f6e\u7aef\u53e3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## web\u670d\u52a1\u7aef\u53e3\uff0c\u4e0d\u6307\u5b9a\u7684\u8bdd\u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a\nrest.bind-port: 8888\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u8fd0\u884c\u4efb\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/flinkx \\\n    -mode local \\\n    -jobType sync \\\n    -job flinkx-examples/json/stream/stream.json \\\n    -flinkxDistDir flinkx-dist\n")),(0,r.kt)("p",null,"\u4efb\u52a1\u8fd0\u884c\u540e\u53ef\u4ee5\u901a\u8fc78888\u7aef\u53e3\u8bbf\u95eeflink\u754c\u9762\u67e5\u770b\u4efb\u52a1\u8fd0\u884c\u60c5\u51b5\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"q1",src:t(4568).Z,width:"2878",height:"1410"})),(0,r.kt)("h3",{id:"standalone\u6a21\u5f0f\u8fd0\u884c"},"Standalone\u6a21\u5f0f\u8fd0\u884c"),(0,r.kt)("p",null,"NOTE:\u5c06flinkx-dist\u76ee\u5f55\u62f7\u8d1d\u5230$FLINK_HOME/lib\u4e0b\uff0c\u5e76\u4fee\u6539$FLINK_HOME/conf/flink-conf.yml\u4e2d\u7684classloader\u4e3aclassloader.resolve-order: parent-first"),(0,r.kt)("p",null,"\u547d\u4ee4\u6a21\u677f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'bin/flinkx \\\n    -mode standalone \\\n    -jobType sync \\\n    -job flinkx-examples/json/stream/stream.json \\\n    -flinkxDistDir flinkx-dist \\\n    -flinkConfDir $FLINK_HOME/conf \\\n    -confProp "{\\"flink.checkpoint.interval\\":60000}"\n')),(0,r.kt)("p",null,"\u9996\u5148\u542f\u52a8flink\u96c6\u7fa4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# flink\u96c6\u7fa4\u9ed8\u8ba4\u7aef\u53e3\u662f8081\n$FLINK_HOME/bin/start-cluster.sh\n")),(0,r.kt)("p",null,"\u901a\u8fc78081\u7aef\u53e3\u68c0\u67e5\u96c6\u7fa4\u662f\u5426\u542f\u52a8\u6210\u529f"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"q2",src:t(25).Z,width:"2878",height:"1390"})),(0,r.kt)("p",null,"\u628a\u4efb\u52a1\u63d0\u4ea4\u5230\u96c6\u7fa4\u4e0a\u8fd0\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/flinkx \\\n    -mode standalone \\\n    -jobType sync \\\n    -flinkxDistDir flinkx-dist \\\n    -job flinkx-examples/json/stream/stream.json \\\n    -flinkConfDir $FLINK_HOME/conf\n")),(0,r.kt)("p",null,"\u5728\u96c6\u7fa4\u4e0a\u67e5\u770b\u4efb\u52a1\u8fd0\u884c\u60c5\u51b5"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"q1",src:t(4568).Z,width:"2878",height:"1410"})),(0,r.kt)("h3",{id:"\u4ee5yarn-session\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1"},"\u4ee5Yarn Session\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1"),(0,r.kt)("p",null,"NOTE:\u53ef\u4ee5\u5148\u5728\u73b0\u5728flinkx-clients\u6a21\u5757YarnSessionClientUtil\u7c7b\u4e2d\u542f\u52a8\u4e00\u4e2asession\uff0c\u7136\u540e\u4fee\u6539$FLINK_HOME/conf/flink-conf.yml\u4e2d\u7684classloader\u4e3aclassloader.resolve-order: parent-first"),(0,r.kt)("p",null,"\u547d\u4ee4\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'bin/flinkx \\\n    -mode yarn-session \\\n    -jobType sync \\\n    -job flinkx-examples/json/stream/stream.json \\\n    -flinkxDistDir flinkx-dist \\\n    -flinkConfDir $FLINK_HOME/conf \\\n    -hadoopConfDir $HADOOP_HOME/etc/hadoop \\\n    -confProp "{\\"flink.checkpoint.interval\\":60000}"\n')),(0,r.kt)("p",null,"\u9996\u5148\u786e\u4fddyarn\u96c6\u7fa4\u662f\u53ef\u7528\u7684\uff0c\u7136\u540e\u624b\u52a8\u542f\u52a8\u4e00\u4e2ayarn session\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$FLINK_HOME/bin/yarn-session.sh -n 1 -s 1 -jm 1024 -tm 1024\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"q4",src:t(1076).Z,width:"1492",height:"778"}),"\n",(0,r.kt)("img",{loading:"lazy",alt:"q2",src:t(25).Z,width:"2878",height:"1390"})),(0,r.kt)("p",null,"\u628a\u4efb\u52a1\u63d0\u4ea4\u5230\u8fd9\u4e2ayarn session\u4e0a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/flinkx \\\n    -mode yarn-session \\\n    -jobType sync \\\n    -job flinkx-examples/json/stream/stream.json \\\n    -flinkConfDir $FLINK_HOME/conf \\\n    -flinkxDistDir flinkx-dist \\\n    -hadoopConfDir $HADOOP_HOME/etc/hadoop\n")),(0,r.kt)("p",null,"\u7136\u540e\u5728flink\u754c\u9762\u67e5\u770b\u4efb\u52a1\u8fd0\u884c\u60c5\u51b5\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"q1",src:t(4568).Z,width:"2878",height:"1410"})),(0,r.kt)("h3",{id:"\u4ee5yarn-perjob\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1"},"\u4ee5Yarn Perjob\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1"),(0,r.kt)("p",null,"\u547d\u4ee4\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'bin/flinkx \\\n    -mode yarn-per-job \\\n    -jobType sync \\\n    -job flinkx-examples/json/stream/stream.json \\\n    -flinkxDistDir flinkx-dist \\\n    -flinkConfDir $FLINK_HOME/conf \\\n    -hadoopConfDir $HADOOP_HOME/etc/hadoop \\\n    -flinkLibDir $FLINK_HOME/lib \\\n    -confProp "{\\"flink.checkpoint.interval\\":60000,\\"yarn.application.queue\\":\\"default\\"}" \\ \n')),(0,r.kt)("p",null,"\u9996\u5148\u786e\u4fddyarn\u96c6\u7fa4\u662f\u53ef\u7528\u7684\uff0c\u542f\u52a8\u4e00\u4e2aYarn Application\u8fd0\u884c\u4efb\u52a1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/flinkx \\\n    -mode yarn-per-job \\\n    -jobType sync \\\n    -job flinkx-examples/json/stream/stream.json \\\n    -flinkxDistDir flinkx-dist \\\n    -hadoopConfDir $HADOOP_HOME/etc/hadoop \\\n    -flinkLibDir $FLINK_HOME/lib \\\n")),(0,r.kt)("p",null,"\u7136\u540e\u5728\u96c6\u7fa4\u4e0a\u67e5\u770b\u4efb\u52a1\u8fd0\u884c\u60c5\u51b5"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"q7",src:t(2595).Z,width:"2852",height:"1094"}),"\n",(0,r.kt)("img",{loading:"lazy",alt:"q1",src:t(4568).Z,width:"2878",height:"1410"})),(0,r.kt)("h3",{id:"kubernetes-session\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1"},"Kubernetes Session\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1"),(0,r.kt)("p",null,"\u547d\u4ee4\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'bin/flinkx \\\n    -mode kubernetes-session \\\n    -jobType sync \\\n    -job flinkx-examples/json/stream/stream.json \\\n    -jobName kubernetes-job \\\n    -jobType sync \\\n    -flinkxDistDir flinkx-dist \\\n    -flinkLibDir $FLINK_HOME/lib \\\n    -flinkConfDir $FLINK_HOME/conf \\\n    -confProp "{\\"kubernetes.config.file\\":\\"${kubernetes_config_path}\\",\\"kubernetes.cluster-id\\":\\"${cluster_id}\\",\\"kubernetes.namespace\\":\\"${namespace}\\"}"\n')),(0,r.kt)("p",null,"\u9700\u8981\u63d0\u524d\u624b\u52a8\u5728kubernetes\u4e0a\u542f\u52a8kubernetes session"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$FLINK_HOME/bin/kubernetes-session.sh -Dkubernetes.cluster-id=flink-session-test -Dclassloader.resolve-order=parent-first -Dkubernetes.container.image=${image_name}\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u9700\u8981\u63d0\u524d\u6784\u5efaflinkx\u955c\u50cf\n",(0,r.kt)("a",{parentName:"p",href:"/chunjun-web/en/docs/chunjunDocs/docker"},"flinkx\u955c\u50cf\u6784\u5efa\u8bf4\u660e")),(0,r.kt)("h3",{id:"kubernetes-application\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1"},"Kubernetes Application\u6a21\u5f0f\u8fd0\u884c\u4efb\u52a1"),(0,r.kt)("p",null,"\u547d\u4ee4\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'bin/flinkx \\\n    -mode kubernetes-application \\\n    -jobType sync \\\n    -job flinkx-examples/json/stream/stream.json \\\n    -jobName kubernetes-job \\\n    -jobType sync \\\n    -flinkxDistDir flinkx-dist \\\n    -remotePluginPath /opt/flinkx-dist \\\n    -pluginLoadMode classpath \\\n    -flinkLibDir $FLINK_HOME/lib \\\n    -flinkConfDir $FLINK_HOME/conf \\\n    -confProp "{\\"kubernetes.config.file\\":\\"${kubernetes_config_path}\\",\\"kubernetes.container.image\\":\\"${image_name}\\",\\"kubernetes.namespace\\":\\"${namespace}\\"}"\n')),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u9700\u8981\u63d0\u524d\u6784\u5efaflinkx\u955c\u50cf\n",(0,r.kt)("a",{parentName:"p",href:"/chunjun-web/en/docs/chunjunDocs/docker"},"flinkx\u955c\u50cf\u6784\u5efa\u8bf4\u660e")),(0,r.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u6a21\u5f0f\uff0c\u4e5f\u5c31\u662fflink\u96c6\u7fa4\u7684\u5de5\u4f5c\u6a21\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("strong",{parentName:"td"},"local"),": \u672c\u5730\u6a21\u5f0f",(0,r.kt)("br",null),"2.",(0,r.kt)("strong",{parentName:"td"},"standalone"),": \u72ec\u7acb\u90e8\u7f72\u6a21\u5f0f\u7684flink\u96c6\u7fa4",(0,r.kt)("br",null),"3.",(0,r.kt)("strong",{parentName:"td"},"yarn-session"),': yarn-session\u6a21\u5f0f\u7684flink\u96c6\u7fa4\uff0c\u9700\u8981\u63d0\u524d\u5728yarn\u4e0a\u542f\u52a8\u4e00\u4e2aflink session\uff0c\u4f7f\u7528\u9ed8\u8ba4\u540d\u79f0"Flink session cluster"',(0,r.kt)("br",null),"4.",(0,r.kt)("strong",{parentName:"td"},"yarn-per-job"),': yarn\u6a21\u5f0f\u7684flink\u96c6\u7fa4\uff0c\u5355\u72ec\u4e3a\u5f53\u524d\u4efb\u52a1\u542f\u52a8\u4e00\u4e2aflink session\uff0c\u4f7f\u7528\u9ed8\u8ba4\u540d\u79f0"Flink per-job cluster"',(0,r.kt)("br",null),"5.",(0,r.kt)("strong",{parentName:"td"},"kubernetes-session"),": kubernetes session\u6a21\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u9700\u8981\u63d0\u524d\u5728kubernetes\u4e0a\u542f\u52a8flink session ",(0,r.kt)("br",null),"6.",(0,r.kt)("strong",{parentName:"td"},"kubernetes-application"),": kubernetes run application\u6a21\u5f0f\u63d0\u4ea4\u4efb\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"local")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"jobType")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("strong",{parentName:"td"},"sync"),":\u6570\u636e\u540c\u6b65\u4efb\u52a1",(0,r.kt)("br",null),"    2.",(0,r.kt)("strong",{parentName:"td"},"sql"),":flinksql\u4efb\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"job")),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u6b65\u3001flinksql\u4efb\u52a1\u63cf\u8ff0\u6587\u4ef6\u7684\u5b58\u653e\u8def\u5f84\uff1b\u8be5\u63cf\u8ff0\u6587\u4ef6\u4e2d\u4f7f\u7528json\u3001sql\u5b58\u653e\u4efb\u52a1\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"jobName")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink Job")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"flinkxDistDir")),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u6839\u76ee\u5f55\u5730\u5740\uff0c\u4e5f\u5c31\u662f\u6253\u5305\u540e\u4ea7\u751f\u7684flinkx-dist\u76ee\u5f55\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"$FLINKX_HOME/flinkx-dist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"flinkConfDir")),(0,r.kt)("td",{parentName:"tr",align:null},"flink\u914d\u7f6e\u6587\u4ef6\u6240\u5728\u7684\u76ee\u5f55\uff08\u5355\u673a\u6a21\u5f0f\u4e0b\u4e0d\u9700\u8981\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"$FLINK_HOME/conf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"$FLINK_HOME/conf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"flinkLibDir")),(0,r.kt)("td",{parentName:"tr",align:null},"flink lib\u6240\u5728\u7684\u76ee\u5f55\uff08\u5355\u673a\u6a21\u5f0f\u4e0b\u4e0d\u9700\u8981\uff09\uff0c\u5982/opt/dtstack/flink-1.10.1/lib"),(0,r.kt)("td",{parentName:"tr",align:null},"$FLINK_HOME/lib"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"$FLINK_HOME/lib")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"hadoopConfDir")),(0,r.kt)("td",{parentName:"tr",align:null},"Hadoop\u914d\u7f6e\u6587\u4ef6\uff08\u5305\u62echdfs\u548cyarn\uff09\u6240\u5728\u7684\u76ee\u5f55"),(0,r.kt)("td",{parentName:"tr",align:null},"$HADOOP_HOME/etc/hadoop"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"$HADOOP_HOME/etc/hadoop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"pluginLoadMode")),(0,r.kt)("td",{parentName:"tr",align:null},"yarn session\u6a21\u5f0f\u63d2\u4ef6\u52a0\u8f7d\u65b9\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"1.",(0,r.kt)("strong",{parentName:"td"},"classpath"),"\uff1a\u63d0\u4ea4\u4efb\u52a1\u65f6\u4e0d\u4e0a\u4f20\u63d2\u4ef6\u5305\uff0c\u9700\u8981\u5728yarn-node\u8282\u70b9flinkx-dist\u76ee\u5f55\u4e0b\u90e8\u7f72\u63d2\u4ef6\u5305\uff0c\u4f46\u4efb\u52a1\u542f\u52a8\u901f\u5ea6\u8f83\u5feb\uff0csession\u6a21\u5f0f\u5efa\u8bae\u4f7f\u7528",(0,r.kt)("br",null),"2.",(0,r.kt)("strong",{parentName:"td"},"shipfile"),"\uff1a\u63d0\u4ea4\u4efb\u52a1\u65f6\u4e0a\u4f20flinkx-dist\u76ee\u5f55\u4e0b\u90e8\u7f72\u63d2\u4ef6\u5305\u7684\u63d2\u4ef6\u5305\uff0cyarn-node\u8282\u70b9\u4e0d\u9700\u8981\u90e8\u7f72\u63d2\u4ef6\u5305\uff0c\u4efb\u52a1\u542f\u52a8\u901f\u5ea6\u53d6\u51b3\u4e8e\u63d2\u4ef6\u5305\u7684\u5927\u5c0f\u53ca\u7f51\u7edc\u73af\u5883\uff0cyarnPer\u6a21\u5f0f\u5efa\u8bae\u4f7f\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"shipfile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"confProp")),(0,r.kt)("td",{parentName:"tr",align:null},"flink\u5b98\u65b9\u6240\u6709\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"p")),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u5165\u53c2\uff0c\u7528\u4e8e\u66ff\u6362\u811a\u672c\u4e2d\u7684\u5360\u4f4d\u7b26\uff0c\u5982\u811a\u672c\u4e2d\u5b58\u5728\u5360\u4f4d\u7b26${pt1},${pt2}\uff0c\u5219\u8be5\u53c2\u6570\u53ef\u914d\u7f6e\u4e3apt1=20200101,pt2=20200102"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0")))))}c.isMDXComponent=!0},4568:function(n,e,t){e.Z=t.p+"assets/images/quick_1-8aecd27236d456e6a2870319a4d759e7.png"},25:function(n,e,t){e.Z=t.p+"assets/images/quick_2-a9e894724de4ad251a6142aaa2046cfd.png"},1076:function(n,e,t){e.Z=t.p+"assets/images/quick_4-f6a2a6a920c4181d3b631cc5db198b53.png"},2595:function(n,e,t){e.Z=t.p+"assets/images/quick_7-622e7f285c0c2fcd31c259c0f073c216.png"}}]);