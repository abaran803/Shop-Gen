(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[7],{48:function(e,c,t){"use strict";var s=t(1),n=t(5),a=t(0);c.a=function(e){var c=e.cardImage,t=e.cardTitle,r=e.cardDesc,i=e.cardType,d=e.cardPrice,l=e.itemLink,o=e.baseURL;return Object(a.jsxs)("div",{className:"single_product shadow text-center ".concat("Latest"===i?"p-4":"p-3"),style:{height:"100%"},children:[Object(a.jsxs)("div",{className:"product_img",children:[Object(a.jsx)(n.b,{to:"/".concat(o),children:Object(a.jsx)("img",{src:c,alt:"Card Image",className:"img img-fluid rounded",style:"Latest"===i?{width:"100%",height:"400px",marginBottom:"10px"}:{height:"300px"}})}),"Latest"===i&&Object(a.jsx)("div",{className:"new_product",children:Object(a.jsx)("span",{className:"badge py-2 px-3 badge-pill badge-danger",children:"New"})})]}),Object(a.jsxs)("div",{className:"product_caption my-3",children:["Product"===i&&Object(a.jsx)("div",{className:"product-rating",children:Object(a.jsx)(s.Fragment,{})}),("Category"===i||"Latest"===i)&&Object(a.jsx)("h4",{children:Object(a.jsx)(n.b,{to:l,children:t})}),"Product"===i&&Object(a.jsx)("h5",{children:Object(a.jsx)(n.b,{to:l,children:t})})]}),("Product"===i||"Latest"===i)&&Object(a.jsx)("div",{className:"price",children:Object(a.jsxs)("b",{children:[Object(a.jsx)("span",{className:"mr-1",children:"$"}),Object(a.jsx)("span",{children:d})]})}),r&&Object(a.jsx)("div",{className:"mt-3",children:Object(a.jsx)("p",{children:r})})]})}},57:function(e,c,t){"use strict";t.r(c);var s=t(2),n=t.n(s),a=t(4),r=t(7),i=t(1),d=t(6),l=t(16),o=t(5),j=t(20),b=t(8),u=t(48),h=t(0);c.default=function(){var e=Object(d.i)(),c=Object(i.useState)(),t=Object(r.a)(c,2),s=t[0],m=t[1],O=Object(i.useState)(),x=Object(r.a)(O,2),p=x[0],g=x[1],f=Object(i.useState)("idle"),v=Object(r.a)(f,2),N=v[0],y=v[1],w=Object(i.useState)("idle"),P=Object(r.a)(w,2),L=P[0],k=P[1],S=Object(i.useState)(500),C=Object(r.a)(S,2),_=C[0],E=C[1],I=Object(i.useState)(),T=Object(r.a)(I,2),F=T[0],$=T[1],z=Object(b.c)((function(e){return e.storeId.id}));Object(i.useEffect)((function(){y("loading");var c=e.category;fetch("".concat("https://ancient-plateau-36518.herokuapp.com","/").concat(c?"getProductsByCategory":"getProducts","/").concat(z,"/").concat(c||50)).then((function(e){if(!e.ok)throw Error("Products not Found");return e.json()})).then((function(e){m(e),y("success")})).catch((function(e){y(e.message)}))}),[e]),Object(i.useEffect)((function(){$(window.innerWidth>600)}),[window]),Object(i.useEffect)((function(){(function(){var e=Object(a.a)(n.a.mark((function e(c){var t,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k("loading"),e.next=3,Object(l.c)(c);case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,k("success"),g(s);case 9:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}})()(4)}),[]);var B=s?s.filter((function(e){return e.price<=_})):null;return"loading"===N&&"loading"===L?Object(h.jsx)(j.a,{}):"success"!==N&&"loading"!==N&&"idle"!==N?Object(h.jsx)("div",{children:N}):Object(h.jsx)("section",{className:"products py-5 my 5",id:"products",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"section_title text-center mb-5",children:Object(h.jsx)("h1",{className:"text-capitalize",children:e.category?e.category:"All Products"})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-3 border-right mb-small-5",children:[Object(h.jsxs)("h4",{className:"mb-5 border-bottom d-flex justify-content-between",children:[Object(h.jsx)("div",{children:"Filters"}),Object(h.jsx)("div",{className:"bg bg-secondary m-1 p-1 rounded text-white",onClick:function(){return $((function(e){return!e}))},style:{fontSize:"0.9rem",cursor:"pointer"},children:F?"Hide":"Show"})]}),Object(h.jsxs)("div",{className:"mb-5 ".concat(F?"":"d-none"),children:[Object(h.jsx)("label",{children:Object(h.jsx)("b",{children:"Category"})}),Object(h.jsx)("ul",{className:"list-group",children:p?p.map((function(e){return Object(h.jsx)("li",{className:"list-group-item",children:Object(h.jsx)(o.b,{to:"/".concat(z,"/product/category/").concat(e.category),children:e.category})},e.id)})):Object(h.jsx)(j.a,{})})]}),Object(h.jsxs)("div",{className:F?"":"d-none",children:[Object(h.jsx)("form",{children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:Object(h.jsx)("b",{children:"Price"})}),Object(h.jsx)("input",{onChange:function(e){E(e.target.value)},type:"range",min:"50",max:"1000",step:"50",className:"form-control-range",value:_})]})}),Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsxs)("label",{children:["$",_]}),Object(h.jsx)("label",{children:"$1000"})]})]})]}),Object(h.jsx)("div",{className:"col-md-9",children:Object(h.jsx)("div",{className:"row mb-5",children:"success"===N?B.map((function(e){return Object(h.jsx)("div",{className:"col-md-4 col-12 mb-4",children:Object(h.jsx)(u.a,{baseURL:"".concat(z,"/product/").concat(e.id),cardImage:e.image,itemLink:"/".concat(z,"/product/").concat(e.id),cardTitle:e.title,cardType:"Product",cardPrice:e.price},e.id)})})):Object(h.jsx)(j.a,{})})})]})]})})}}}]);
//# sourceMappingURL=7.228cbe5e.chunk.js.map