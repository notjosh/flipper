"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6190,6033],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>u});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){return function(t){var n=c(t.components);return i.createElement(e,r({},t,{components:n}))}},c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(a,".").concat(d)]||u[d]||m[d]||r;return n?i.createElement(h,p(p({ref:t},s),{},{components:n})):i.createElement(h,p({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},37118:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>u,metadata:()=>c,toc:()=>d,default:()=>h});var i=n(22122),o=n(19756),r=(n(67294),n(3905)),a=n(55064),p=n(58215),l=["components"],s={},u=void 0,c={type:"mdx",permalink:"/docs/plugins/inspector/setup",source:"@site/src/embedded-pages/docs/plugins/inspector/setup.mdx"},d=[{value:"Android",id:"android",children:[{value:"Standard Android View Only",id:"standard-android-view-only",children:[]},{value:"With Litho Support",id:"with-litho-support",children:[]},{value:"Blocking fullscreen views (Android only)",id:"blocking-fullscreen-views-android-only",children:[]},{value:"Blocking empty view groups (Android only)",id:"blocking-empty-view-groups-android-only",children:[]}]},{value:"iOS",id:"ios",children:[{value:"Standard UIView Only",id:"standard-uiview-only",children:[]},{value:"With ComponentKit Support",id:"with-componentkit-support",children:[]}]}],m={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.mdx)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"To use the layout inspector plugin, you need to add the plugin to your Flipper client instance."),(0,r.mdx)("h2",{id:"android"},"Android"),(0,r.mdx)("h3",{id:"standard-android-view-only"},"Standard Android View Only"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.inspector.DescriptorMapping;\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;\n\nfinal DescriptorMapping descriptorMapping = DescriptorMapping.withDefaults();\nclient.addPlugin(new InspectorFlipperPlugin(mApplicationContext, descriptorMapping));\n")),(0,r.mdx)("h3",{id:"with-litho-support"},"With Litho Support"),(0,r.mdx)("p",null,"Litho support is provided via an optional plugin."),(0,r.mdx)("p",null,"You also need to compile in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"litho-annotations")," package, as Flipper reflects\non them at runtime. So ensure to not just include them as ",(0,r.mdx)("inlineCode",{parentName:"p"},"compileOnly")," in your\ngradle configuration:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-litho-plugin:0.100.0'\n  debugImplementation 'com.facebook.litho:litho-annotations:0.19.0'\n  // ...\n}\n")),(0,r.mdx)("p",null,"If you want to enable Litho support in the layout inspector, you need to augment\nthe descriptor with Litho-specific settings and add some addition dependencies."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.litho.config.ComponentsConfiguration;\nimport com.facebook.flipper.plugins.inspector.DescriptorMapping;\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;\nimport com.facebook.flipper.plugins.litho.LithoFlipperDescriptors;\n\n// Instead of hard-coding this setting, it's a good practice to tie\n// this to a BuildConfig flag, that you only enable for debug builds\n// of your application.\nComponentsConfiguration.isDebugModeEnabled = true;\n\nfinal DescriptorMapping descriptorMapping = DescriptorMapping.withDefaults();\n// This adds Litho capabilities to the layout inspector.\nLithoFlipperDescriptors.add(descriptorMapping);\n\nclient.addPlugin(new InspectorFlipperPlugin(mApplicationContext, descriptorMapping));\n")),(0,r.mdx)("h3",{id:"blocking-fullscreen-views-android-only"},"Blocking fullscreen views (Android only)"),(0,r.mdx)("p",null,"The issue is that if you have some view that occupies big part of the screen but draws nothing and its Z-position is higher than your main content, then selecting view/component through Layout Inspector doesn't work as you intended, as it will always hit that transparent view and you need to manually navigate to the view you need which is time-consuming and should not be necessary."),(0,r.mdx)("p",null,"Add the following tag to your view to skip it from Flipper's view picker. The view will still be shown in the layout hierarchy, but it will not be selected while using the view picker."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"view.setTag(R.id.flipper_skip_view_traversal, true);\n")),(0,r.mdx)("h3",{id:"blocking-empty-view-groups-android-only"},"Blocking empty view groups (Android only)"),(0,r.mdx)("p",null,"If you have a ViewGroup that only occasionally has visible children, you may find it helpful to block its traversal when it is empty or has no visible children. For example, you might have a FragmentContainerView that currently has no visible fragment."),(0,r.mdx)("p",null,"Add the following tag to your view group to skip it from Flipper's view picker only when it has zero children, or none of its children are currently visible. The views will still be shown in the layout hierarchy, but they will not be selected while using the view picker."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"viewGroup.setTag(R.id.flipper_skip_empty_view_group_traversal, true);\n")),(0,r.mdx)("h2",{id:"ios"},"iOS"),(0,r.mdx)("h3",{id:"standard-uiview-only"},"Standard UIView Only"),(0,r.mdx)("p",null,"To debug layout using Flipper, add the following pod:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/FlipperKitLayoutPlugin', '~>' + flipperkit_version\n")),(0,r.mdx)("p",null,"Once you have added the pod, initialise the plugin and add it to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"FlipperClient")," as follows."),(0,r.mdx)(a.Z,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,r.mdx)(p.Z,{value:"ios",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n\nSKDescriptorMapper *mapper = [[SKDescriptorMapper alloc] initWithDefaults];\n[client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:context.application withDescriptorMapper:mapper]];\n"))),(0,r.mdx)(p.Z,{value:"swift",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nlet layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\nclient?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n")))),(0,r.mdx)("h3",{id:"with-componentkit-support"},"With ComponentKit Support"),(0,r.mdx)("p",null,"If you want to enable ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/componentkit"},"ComponentKit support")," in the layout inspector, you need to add ",(0,r.mdx)("inlineCode",{parentName:"p"},"FlipperKit/FlipperKitLayoutComponentKitSupport")," to your Podfile."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/FlipperKitLayoutComponentKitSupport', '~>' + flipperkit_version\n")),(0,r.mdx)("p",null,"Once you have added the pod you will then need to augment the descriptor with Componentkit-specific settings as shown below."),(0,r.mdx)(a.Z,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,r.mdx)(p.Z,{value:"ios",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n#import <FlipperKitLayoutComponentKitSupport/FlipperKitLayoutComponentKitSupport.h>\n\nSKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];\n[FlipperKitLayoutComponentKitSupport setUpWithDescriptorMapper: layoutDescriptorMapper];\n[client addPlugin: [[FlipperKitLayoutPlugin alloc] initWithRootNode: application\n                                           withDescriptorMapper: layoutDescriptorMapper]];\n"))),(0,r.mdx)(p.Z,{value:"swift",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nlet layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\nFlipperKitLayoutComponentKitSupport.setUpWith(layoutDescriptorMapper)\n\nclient?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n")))))}h.isMDXComponent=!0},58215:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294);const o=function(e){var t=e.children,n=e.hidden,o=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(67294),o=n(79443);const r=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var a=n(86010);const p="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;const c=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,c=e.values,d=e.groupId,m=e.className,h=r(),g=h.tabGroupChoices,f=h.setTabGroupChoices,y=(0,i.useState)(o),v=y[0],b=y[1],w=i.Children.toArray(e.children),x=[];if(null!=d){var k=g[d];null!=k&&k!==v&&c.some((function(e){return e.value===k}))&&b(k)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),i=c[n].value;b(i),null!=d&&(f(d,i),setTimeout((function(){var e,n,i,o,r,a,p,s;(e=t.getBoundingClientRect(),n=e.top,i=e.left,o=e.bottom,r=e.right,a=window,p=a.innerHeight,s=a.innerWidth,n>=0&&r<=s&&o<=p&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var i=x.indexOf(e.target)+1;n=x[i]||x[0];break;case s:var o=x.indexOf(e.target)-1;n=x[o]||x[x.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":n},m)},c.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,a.default)("tabs__item",p,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:D,onClick:D},n)}))),t?(0,i.cloneElement)(w.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>i});const i=(0,n(67294).createContext)(void 0)},84421:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>c,default:()=>m});var i=n(22122),o=n(19756),r=(n(67294),n(3905)),a=n(37118),p=["components"],l={id:"inspector",title:"Layout Plugin Setup",sidebar_label:"Layout",custom_edit_url:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/layout/docs/setup.mdx"},s=void 0,u={unversionedId:"setup/plugins/inspector",id:"setup/plugins/inspector",isDocsHomePage:!1,title:"Layout Plugin Setup",description:"",source:"@site/../docs/setup/plugins/inspector.mdx",sourceDirName:"setup/plugins",slug:"/setup/plugins/inspector",permalink:"/docs/setup/plugins/inspector",editUrl:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/layout/docs/setup.mdx",version:"current",frontMatter:{id:"inspector",title:"Layout Plugin Setup",sidebar_label:"Layout",custom_edit_url:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/layout/docs/setup.mdx"},sidebar:"setup",previous:{title:"Images",permalink:"/docs/setup/plugins/fresco"},next:{title:"LeakCanary",permalink:"/docs/setup/plugins/leak-canary"}},c=[],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,p);return(0,r.mdx)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(a.default,{mdxType:"Article"}))}m.isMDXComponent=!0},86010:(e,t,n)=>{function i(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(o&&(o+=" "),o+=t);return o}n.r(t),n.d(t,{default:()=>o})}}]);