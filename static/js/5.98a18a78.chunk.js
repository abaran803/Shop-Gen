(this["webpackJsonpshop-gen"]=this["webpackJsonpshop-gen"]||[]).push([[5],{241:function(e,t,a){"use strict";a(1);var o=a(14),n=a(237),r=a(250),i=a(249),c=a(247),s=a(88),l=a(248),d=a(0);t.a=function(e){var t=e.cardImage,a=e.cardTitle,b=e.cardDesc,u=(e.cardType,e.cardPrice),p=(e.itemLink,e.baseURL);return Object(d.jsxs)(n.a,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[Object(d.jsx)(l.a,{component:"img",height:"140",image:t,alt:"green iguana",sx:{borderBottom:"1px solid grey",minHeight:"280px",transform:"scale(0.9)"}}),Object(d.jsxs)(i.a,{sx:{height:"100%"},children:[Object(d.jsx)(s.a,{gutterBottom:!0,component:"div",sx:{fontWeight:"600",fontSize:"1.5rem",lineHeight:"1.2"},children:a.substring(0,28)+(a.length>15?"...":"")}),b&&Object(d.jsx)(s.a,{variant:"body2",color:"text.secondary",children:b})]}),u&&Object(d.jsxs)(r.a,{children:[Object(d.jsx)(o.b,{to:"/".concat(p),children:Object(d.jsx)(c.a,{size:"small",children:"Visit"})}),Object(d.jsxs)(c.a,{size:"small",sx:{color:"black"},children:["Price: ",u,"$"]})]})]})}},247:function(e,t,a){"use strict";var o=a(3),n=a(5),r=a(2),i=a(1),c=a(6),s=a(211),l=a(86),d=a(67),b=a(4),u=a(9),p=a(170),v=a(12),m=a(68),j=a(87);function h(e){return Object(m.a)("MuiButton",e)}var g=Object(j.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var O=i.createContext({}),x=a(0),f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=["root"],y=function(e){return Object(r.a)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},z=Object(b.a)(p.a,{shouldForwardProp:function(e){return Object(b.b)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["".concat(a.variant).concat(Object(v.a)(a.color))],t["size".concat(Object(v.a)(a.size))],t["".concat(a.variant,"Size").concat(Object(v.a)(a.size))],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((function(e){var t,a,n,i=e.theme,c=e.ownerState;return Object(r.a)({},i.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":Object(r.a)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):Object(d.a)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):Object(d.a)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((i.vars||i).palette[c.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):Object(d.a)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:(i.vars||i).palette.grey.A100,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(i.vars||i).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[c.color].main}}),"&:active":Object(r.a)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[8]})},Object(o.a)(t,"&.".concat(g.focusVisible),Object(r.a)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[6]})),Object(o.a)(t,"&.".concat(g.disabled),Object(r.a)({color:(i.vars||i).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"outlined"===c.variant&&"secondary"===c.color&&{border:"1px solid ".concat((i.vars||i).palette.action.disabled)},"contained"===c.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),t),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat(Object(d.a)(i.palette[c.color].main,.5))},"contained"===c.variant&&{color:i.vars?i.vars.palette.text.primary:null==(a=(n=i.palette).getContrastText)?void 0:a.call(n,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],boxShadow:(i.vars||i).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].contrastText,backgroundColor:(i.vars||i).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},Object(o.a)(t,"&.".concat(g.focusVisible),{boxShadow:"none"}),Object(o.a)(t,"&:active",{boxShadow:"none"}),Object(o.a)(t,"&.".concat(g.disabled),{boxShadow:"none"}),t)})),C=Object(b.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var a=e.ownerState;return[t.startIcon,t["iconSize".concat(Object(v.a)(a.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},y(t))})),w=Object(b.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var a=e.ownerState;return[t.endIcon,t["iconSize".concat(Object(v.a)(a.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},y(t))})),I=i.forwardRef((function(e,t){var a=i.useContext(O),o=Object(s.a)(a,e),d=Object(u.a)({props:o,name:"MuiButton"}),b=d.children,p=d.color,m=void 0===p?"primary":p,j=d.component,g=void 0===j?"button":j,y=d.className,I=d.disabled,R=void 0!==I&&I,M=d.disableElevation,k=void 0!==M&&M,N=d.disableFocusRipple,E=void 0!==N&&N,W=d.endIcon,L=d.focusVisibleClassName,T=d.fullWidth,B=void 0!==T&&T,V=d.size,P=void 0===V?"medium":V,A=d.startIcon,F=d.type,D=d.variant,H=void 0===D?"text":D,J=Object(n.a)(d,f),U=Object(r.a)({},d,{color:m,component:g,disabled:R,disableElevation:k,disableFocusRipple:E,fullWidth:B,size:P,type:F,variant:H}),$=function(e){var t=e.color,a=e.disableElevation,o=e.fullWidth,n=e.size,i=e.variant,c=e.classes,s={root:["root",i,"".concat(i).concat(Object(v.a)(t)),"size".concat(Object(v.a)(n)),"".concat(i,"Size").concat(Object(v.a)(n)),"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(v.a)(n))],endIcon:["endIcon","iconSize".concat(Object(v.a)(n))]},d=Object(l.a)(s,h,c);return Object(r.a)({},c,d)}(U),_=$.root,q=Object(n.a)($,S),G=A&&Object(x.jsx)(C,{className:q.startIcon,ownerState:U,children:A}),K=W&&Object(x.jsx)(w,{className:q.endIcon,ownerState:U,children:W});return Object(x.jsxs)(z,Object(r.a)({ownerState:U,className:Object(c.a)(a.className,_,y),component:g,disabled:R,focusRipple:!E,focusVisibleClassName:Object(c.a)(q.focusVisible,L),ref:t,type:F},J,{classes:q,children:[G,b,K]}))}));t.a=I},248:function(e,t,a){"use strict";var o=a(5),n=a(2),r=a(1),i=a(6),c=a(86),s=a(9),l=a(4),d=a(68),b=a(87);function u(e){return Object(d.a)("MuiCardMedia",e)}Object(b.a)("MuiCardMedia",["root","media","img"]);var p=a(0),v=["children","className","component","image","src","style"],m=Object(l.a)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,o=a.isMediaComponent,n=a.isImageComponent;return[t.root,o&&t.media,n&&t.img]}})((function(e){var t=e.ownerState;return Object(n.a)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),j=["video","audio","picture","iframe","img"],h=["picture","img"],g=r.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiCardMedia"}),r=a.children,l=a.className,d=a.component,b=void 0===d?"div":d,g=a.image,O=a.src,x=a.style,f=Object(o.a)(a,v),S=-1!==j.indexOf(b),y=!S&&g?Object(n.a)({backgroundImage:'url("'.concat(g,'")')},x):x,z=Object(n.a)({},a,{component:b,isMediaComponent:S,isImageComponent:-1!==h.indexOf(b)}),C=function(e){var t=e.classes,a={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return Object(c.a)(a,u,t)}(z);return Object(p.jsx)(m,Object(n.a)({className:Object(i.a)(C.root,l),as:b,role:!S&&g?"img":void 0,ref:t,style:y,ownerState:z,src:S?g||O:void 0},f,{children:r}))}));t.a=g},249:function(e,t,a){"use strict";var o=a(2),n=a(5),r=a(1),i=a(6),c=a(86),s=a(4),l=a(9),d=a(68),b=a(87);function u(e){return Object(d.a)("MuiCardContent",e)}Object(b.a)("MuiCardContent",["root"]);var p=a(0),v=["className","component"],m=Object(s.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),j=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCardContent"}),r=a.className,s=a.component,d=void 0===s?"div":s,b=Object(n.a)(a,v),j=Object(o.a)({},a,{component:d}),h=function(e){var t=e.classes;return Object(c.a)({root:["root"]},u,t)}(j);return Object(p.jsx)(m,Object(o.a)({as:d,className:Object(i.a)(h.root,r),ownerState:j,ref:t},b))}));t.a=j},250:function(e,t,a){"use strict";var o=a(5),n=a(2),r=a(1),i=a(6),c=a(86),s=a(4),l=a(9),d=a(68),b=a(87);function u(e){return Object(d.a)("MuiCardActions",e)}Object(b.a)("MuiCardActions",["root","spacing"]);var p=a(0),v=["disableSpacing","className"],m=Object(s.a)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,!a.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(n.a)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),j=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCardActions"}),r=a.disableSpacing,s=void 0!==r&&r,d=a.className,b=Object(o.a)(a,v),j=Object(n.a)({},a,{disableSpacing:s}),h=function(e){var t=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return Object(c.a)(a,u,t)}(j);return Object(p.jsx)(m,Object(n.a)({className:Object(i.a)(h.root,d),ownerState:j,ref:t},b))}));t.a=j},257:function(e,t,a){"use strict";a.r(t);var o=a(11),n=a.n(o),r=a(16),i=a(8),c=a(1),s=a(25),l=a(36),d=a(241),b=a(56),u=a(0);t.default=function(){var e=Object(s.c)((function(e){return e.storeId.id})),t=Object(c.useState)(),a=Object(i.a)(t,2),o=a[0],p=a[1],v=Object(c.useState)("idle"),m=Object(i.a)(v,2),j=m[0],h=m[1];return Object(c.useEffect)(Object(r.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h("loading"),4,"https://ancient-plateau-36518.herokuapp.com",t.prev=3,t.next=6,Object(l.c)(4,e);case 6:a=t.sent,p(a),h("success"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),h(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[3,11]])}))),[]),"loading"===j||"idle"===j?Object(u.jsx)(b.a,{}):"success"!==j?Object(u.jsx)("div",{children:j}):(console.log(o),Object(u.jsx)("div",{className:"product py-5 bg-light",id:"products",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"section_title text-center mb-5",children:Object(u.jsx)("h1",{className:"text-capitalize",children:"Categories"})}),Object(u.jsx)("div",{className:"row mb-5",children:o?o.map((function(t){return Object(u.jsx)("div",{className:"col-md-4 mb-4 col-12",children:Object(u.jsx)(d.a,{cardImage:t.image,cardTitle:t.category,cardDesc:t.description,cardType:"Category",itemLink:"/".concat(e,"/product/category/").concat(t.category),baseURL:"".concat(e,"/product/category/").concat(t.category)},t.id)},t.id)})):Object(u.jsx)("h2",{className:"w-100 text text-center mt-5",children:"No data found"})})]})}))}}}]);
//# sourceMappingURL=5.98a18a78.chunk.js.map