"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[695],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},u=Object.keys(n);for(r=0;r<u.length;r++)t=u[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(r=0;r<u.length;r++)t=u[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var a=r.createContext({}),s=function(n){var e=r.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},l=function(n){var e=s(n.components);return r.createElement(a.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,u=n.originalType,a=n.parentName,l=i(n,["components","mdxType","originalType","parentName"]),f=s(t),m=o,b=f["".concat(a,".").concat(m)]||f[m]||p[m]||u;return t?r.createElement(b,c(c({ref:e},l),{},{components:t})):r.createElement(b,c({ref:e},l))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var u=t.length,c=new Array(u);c[0]=f;var i={};for(var a in e)hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.originalType=n,i.mdxType="string"==typeof n?n:o,c[1]=i;for(var s=2;s<u;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9867:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(7462),o=t(3366),u=(t(7294),t(3905)),c=["components"],i={title:"Contributing to ChunJun",sidebar_position:10},a=void 0,s={unversionedId:"chunjunDocs/contributing",id:"chunjunDocs/contributing",title:"Contributing to ChunJun",description:"\u5982\u4f55\u63d0\u95ee\u9898\u548c\u9700\u6c42\uff1f",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/chunjunDocs/contributing.md",sourceDirName:"chunjunDocs",slug:"/chunjunDocs/contributing",permalink:"/chunjun-web/zh-cn/docs/chunjunDocs/contributing",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/contributing.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Contributing to ChunJun",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"MySQL Source",permalink:"/chunjun-web/zh-cn/docs/chunjunDocs/connectors/mysql/mysql-source"},next:{title:"FlinkX 1.12 \u65b0\u7279\u6027",permalink:"/chunjun-web/zh-cn/docs/chunjunDocs/change-log"}},l={},p=[],f={toc:p};function m(n){var e=n.components,t=(0,o.Z)(n,c);return(0,u.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u5982\u4f55\u63d0\u95ee\u9898\u548c\u9700\u6c42\uff1f\n\u5f53\u524d\u63d0\u4f9b\u4e864\u4e2a\u7c7b\u578b\u7684\u95ee\u9898\u5206\u7c7b\uff1a\nFeature request\nAsk a Question\nBug report\nDevelopment Task"),(0,u.kt)("p",null,"\u5982\u4f55\u63d0\u4ea4pr?\n1\uff09\u65b0\u5efaissuse .\u63cf\u8ff0\u95ee\u9898\u4fe1\u606f\u3002\n2\uff09\u57fa\u4e8e\u5bf9\u5e94\u7684release\u5206\u652f\u62c9\u53d6\u5f00\u53d1\u5206\u652f,\u5206\u652f\u547d\u540d\u53c2\u8003 \u3010\u5206\u652f\u547d\u540d\u89c4\u8303\u3011\n3) commit \u4fe1\u606f\uff1a","[type-redmine][module]"," msg\uff0ctype \u5b9a\u4e49\u53c2\u8003\uff1a\u3010Commit type \u7c7b\u522b\u3011\neg:\n","[hotfix-31280][core]"," \u4fee\u590dbigdecimal\u8f6cdecimal\u8fd0\u884c\u5931\u8d25\u95ee\u9898\n","[feat-31372][rdb]"," RDB\u7ed3\u679c\u8868Upsert\u6a21\u5f0f\u652f\u6301\u9009\u62e9\u66f4\u65b0\u7b56\u7565\n4\uff09\u591a\u6b21\u63d0\u4ea4\u4f7f\u7528rebase \u5408\u5e76\u6210\u4e00\u4e2a\u3002\n5\uff09pr \u540d\u79f0\uff1a","[chunjun-issuseid][module\u540d\u79f0]"," \u6807\u9898\n6\uff09\u5bf9\u5e94\u6a21\u5757\u7684test \u6d4b\u8bd5\u901a\u8fc7\uff0c\u5e76\u901a\u8fc7\u4ee3\u7801\u68c0\u67e5"),(0,u.kt)("p",null,"\u4ee3\u7801\u68c0\u67e5\u63d2\u4ef6\nchunjun  \u5f53\u524d\u4f7f\u7528google-java-format \uff0c\u4e25\u683c\u8981\u6c42\u5fc5\u987b\u901a\u8fc7google-java-format \u7684\u683c\u5f0f\u8f6c\u6362\uff0c\u5728maven \u91cc\u9762\u901a\u8fc7\u8bbe\u7f6e\uff0c\n\u5982\u679c\u4e0d\u6ee1\u8db3google-java-format \u683c\u5f0f\u8981\u6c42\uff0c\u7f16\u8bd1\u9636\u6bb5\u5c06\u4f1a\u51fa\u73b0\u5f02\u5e38\uff1b"),(0,u.kt)("p",null,"Commit type \u7c7b\u522b\nfeat\uff1a\u8868\u793a\u662f\u4e00\u4e2a\u65b0\u529f\u80fd\uff08feature)\nhotfix\uff1ahotfix\uff0c\u4fee\u8865bug\ndocs\uff1a\u6539\u52a8\u3001\u589e\u52a0\u6587\u6863\nopt\uff1a\u4fee\u6539\u4ee3\u7801\u98ce\u683c\u53caopt imports\u8fd9\u4e9b\uff0c\u4e0d\u6539\u52a8\u539f\u6709\u6267\u884c\u7684\u4ee3\u7801\ntest\uff1a\u589e\u52a0\u6d4b\u8bd5"),(0,u.kt)("p",null,"\u5206\u652f\u547d\u540d\u89c4\u8303\n\u65b0\u529f\u80fd\uff1afeat: feat_flink\u7248\u672c_issuseid\neg: feat_1.12_11111\nbug\u4fee\u590d\uff1a hotfix: hotfix_flink\u7248\u672c_issuseid\neg: hotfix_1.12_11112\n\u6ce8\u610f\u5f53\u524dchunjun\u7248\u672c\u4f9d\u8d56flink \u7248\u672c\u4e0a\u8fdb\u884c\u5f00\u53d1,\u6bd4\u59821.12_release \u5c31\u662f\u5bf9\u5e94\u7684flink 1.12 \u7248\u672c\uff1b\n\u6240\u4ee5\u5728\u63d0\u4ea4\u5206\u652f\u7684\u65f6\u5019\u8bf7\u6dfb\u52a0\u4e0a\u5bf9\u5e94\u7684\u7248\u672c"))}m.isMDXComponent=!0}}]);