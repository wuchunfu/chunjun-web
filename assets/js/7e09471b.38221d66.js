"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[784],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return N}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),k=o(a),N=l,c=k["".concat(p,".").concat(N)]||k[N]||s[N]||r;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8749:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return s}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],u={},p="MySQL Sink",o={unversionedId:"chunjunDocs/connectors/mysql/mysql-sink",id:"chunjunDocs/connectors/mysql/mysql-sink",title:"MySQL Sink",description:"1. Introduce",source:"@site/docs/chunjunDocs/connectors/mysql/mysql-sink.md",sourceDirName:"chunjunDocs/connectors/mysql",slug:"/chunjunDocs/connectors/mysql/mysql-sink",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mysql/mysql-sink",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/mysql/mysql-sink.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MySQL Lookup",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mysql/mysql-lookup"},next:{title:"MySQL Source",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mysql/mysql-source"}},m={},s=[{value:"1. Introduce",id:"1-introduce",level:2},{value:"2. Version Support",id:"2-version-support",level:2},{value:"3. Connector Name",id:"3-connector-name",level:2},{value:"4. Parameter description",id:"4-parameter-description",level:2},{value:"4.1 Sync",id:"41-sync",level:4},{value:"2\u3001SQL",id:"2sql",level:3},{value:"5. Type",id:"5-type",level:2},{value:"6. Example",id:"6-example",level:2}],k={toc:s};function N(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql-sink"},"MySQL Sink"),(0,r.kt)("h2",{id:"1-introduce"},"1. Introduce"),(0,r.kt)("p",null,"MySQL Sink"),(0,r.kt)("h2",{id:"2-version-support"},"2. Version Support"),(0,r.kt)("p",null,"MySQL 5.x"),(0,r.kt)("h2",{id:"3-connector-name"},"3. Connector Name"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sync"),(0,r.kt)("th",{parentName:"tr",align:null},"mysqlsink, mysqlwriter"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql-x")))),(0,r.kt)("h2",{id:"4-parameter-description"},"4. Parameter description"),(0,r.kt)("h4",{id:"41-sync"},"4.1 Sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"connection"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description:Database connection parameters, including JDBC URL, schema, table and other parameters\nconnection\uff0csearch ",(0,r.kt)("a",{parentName:"li",href:"https://docs.mysql.com/manual/reference/connection-string/"},"mysql Documents")," for detail\ninformation."),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: List"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)"),(0,r.kt)("li",{parentName:"ul"},"Example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    "connection": [{\n    "jdbcUrl": ["jdbc:mysql://0.0.0.1:3306/database?useSSL=false"],\n    "table": ["table"],\n    "schema":"public"\n    }]\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"jdbcUrl"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: JDBC connection string for relational database. Search document for detail information of\njdbcUrl: ",(0,r.kt)("a",{parentName:"li",href:"http://dev.mysql.com/doc/connector-j/en/connector-j-reference-configuration-properties.html"},"MySQL Document")),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"schema"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: database schema name"),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"table"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: the table name of the destination table. Currently, only supports the configuration of a single\ntable, and will support multiple tables in the future."),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: List"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"username"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: the username of the data source"),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: The password for the specified username of the data source"),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"column")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: The fields in the destination table that need to write data are separated by commas."),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)"),(0,r.kt)("li",{parentName:"ul"},"Example:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"column": ["id","name","age"]\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"fullColumn")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: All fields in the destination table are separated by commas\uff0cif not configured, it will be obtained in\nthe system table"),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: List"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)"),(0,r.kt)("li",{parentName:"ul"},"Example:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"column": ["id","name","age"]\n')))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"preSql"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: Before writing data to the destination table, a set of standard statements here will be executed\nfirst."),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: List"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"postSql"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: After writing data to the destination table, a set of standard statements here will be executed."),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: List"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"writeMode"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: Use insert into or replace into or ON DUPLICATE KEY UPDATE statement to control writing data to the\ntarget table."),(0,r.kt)("li",{parentName:"ul"},"Required: Required"),(0,r.kt)("li",{parentName:"ul"},"options: insert/replace/update"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: insert")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"batchSize"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: The size of the number of records submitted in batches at one time. This value can greatly reduce the\nnumber of network interactions between FlinkX and the database and improve the overall throughput. However,\nsetting this value too large may cause the OOM situation of FlinkX running process."),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: int"),(0,r.kt)("li",{parentName:"ul"},"Default: 1024")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"updateKey"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: When the write mode is update and replace, you need to specify the value of this parameter as a unique\nindex field"),(0,r.kt)("li",{parentName:"ul"},"Attention:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If this parameter is empty and the write mode is update and replace, the application will automatically obtain\nthe unique index in the database;"),(0,r.kt)("li",{parentName:"ul"},"If the data table does not have a unique index, but the write mode is configured as update and replace, the\napplication will write the data in insert;"))),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: Map<String, List>",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'eg."updateKey": {"key": ','["id"]',"}"))),(0,r.kt)("li",{parentName:"ul"},"Default: (none)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"semantic"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: Whether to enable two-phase commit on the sink side"),(0,r.kt)("li",{parentName:"ul"},"Attention:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If this parameter is empty, two-phase commit is not enabled by Default, that is, the sink side does not\nsupport exactly_once semantics;"),(0,r.kt)("li",{parentName:"ul"},"Currently, only supports exactly-once and at-least-once"))),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: at-least-once"),(0,r.kt)("li",{parentName:"ul"},"Example:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"semantic": "exactly-once"\n')))))),(0,r.kt)("h3",{id:"2sql"},"2\u3001SQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"connector"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: mysql-x"),(0,r.kt)("li",{parentName:"ul"},"Required: Required"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"url"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: jdbc:mysql://localhost:3306/test"),(0,r.kt)("li",{parentName:"ul"},"Required: Required"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"table-name"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: the name of table"),(0,r.kt)("li",{parentName:"ul"},"Required: Required"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: (none):")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"username"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: username"),(0,r.kt)("li",{parentName:"ul"},"Required: Required"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: password"),(0,r.kt)("li",{parentName:"ul"},"Required: Required"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sink.buffer-flush.max-rows"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: Number of batch write data\uff0cUnit: Piece"),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: 1024")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sink.buffer-flush.interval"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: Batch write interval\uff0cUnit: milliseconds"),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: 10000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sink.all-replace"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: Whether to replace all the data in the database (if the original value in the database is not null,\nthe new value is null, if it is Required, it will be replaced with null)"),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: Optional")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sink.parallelism"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: Parallelism of writing results"),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Default: (none)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sink.semantic"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Definition: Whether to enable two-phase commit on the sink side"),(0,r.kt)("li",{parentName:"ul"},"Attention:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If this parameter is empty, two-phase commit is not enabled by Default, that is, the sink side does not\nsupport exactly_once semantics\uff1b"),(0,r.kt)("li",{parentName:"ul"},"Currently, only supports exactly-once and at-least-once"))),(0,r.kt)("li",{parentName:"ul"},"Required: Optional"),(0,r.kt)("li",{parentName:"ul"},"Type: String",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'eg."semantic": "exactly-once"'))),(0,r.kt)("li",{parentName:"ul"},"Default: at-least-once")))),(0,r.kt)("h2",{id:"5-type"},"5. Type"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"support or unsupported"),(0,r.kt)("th",{parentName:"tr",align:null},"type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"CHAR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"support"),(0,r.kt)("td",{parentName:"tr",align:null},"BINARY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unsupported"),(0,r.kt)("td",{parentName:"tr",align:null},"ARRAY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unsupported"),(0,r.kt)("td",{parentName:"tr",align:null},"MAP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unsupported"),(0,r.kt)("td",{parentName:"tr",align:null},"STRUCT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unsupported"),(0,r.kt)("td",{parentName:"tr",align:null},"UNION")))),(0,r.kt)("h2",{id:"6-example"},"6. Example"),(0,r.kt)("p",null,"The details are in flinkx-examples dir."))}N.isMDXComponent=!0}}]);