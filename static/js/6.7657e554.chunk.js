(this["webpackJsonpshop-gen"]=this["webpackJsonpshop-gen"]||[]).push([[6],{48:function(e,c,t){"use strict";var a=t(1),s=t(5),i=t(0);c.a=function(e){var c=e.cardImage,t=e.cardTitle,r=e.cardDesc,n=e.cardType,d=e.cardPrice,o=e.itemLink,j=e.baseURL;return Object(i.jsxs)("div",{className:"single_product shadow text-center ".concat("Latest"===n?"p-4":"p-3"),style:{height:"100%"},children:[Object(i.jsxs)("div",{className:"product_img",children:[Object(i.jsx)(s.b,{to:"/".concat(j),children:Object(i.jsx)("img",{src:c,alt:"Card Image",className:"img img-fluid rounded",style:"Latest"===n?{width:"100%",height:"400px",marginBottom:"10px"}:{height:"300px"}})}),"Latest"===n&&Object(i.jsx)("div",{className:"new_product",children:Object(i.jsx)("span",{className:"badge py-2 px-3 badge-pill badge-danger",children:"New"})})]}),Object(i.jsxs)("div",{className:"product_caption my-3",children:["Product"===n&&Object(i.jsx)("div",{className:"product-rating",children:Object(i.jsx)(a.Fragment,{})}),("Category"===n||"Latest"===n)&&Object(i.jsx)("h4",{children:Object(i.jsx)(s.b,{to:o,children:t})}),"Product"===n&&Object(i.jsx)("h5",{children:Object(i.jsx)(s.b,{to:o,children:t})})]}),("Product"===n||"Latest"===n)&&Object(i.jsx)("div",{className:"price",children:Object(i.jsxs)("b",{children:[Object(i.jsx)("span",{className:"mr-1",children:"$"}),Object(i.jsx)("span",{children:d})]})}),r&&Object(i.jsx)("div",{className:"mt-3",children:Object(i.jsx)("p",{children:r})})]})}},55:function(e,c,t){"use strict";t.r(c);var a=t(7),s=t(1),i=t(8),r=t(48),n=t(18),d=t(0);c.default=function(){var e=Object(i.c)((function(e){return e.storeId.id})),c=Object(s.useState)(),t=Object(a.a)(c,2),o=t[0],j=t[1],l=Object(s.useState)("idle"),b=Object(a.a)(l,2),h=b[0],m=b[1];return Object(s.useEffect)((function(){m("loading");fetch("".concat("https://ancient-plateau-36518.herokuapp.com","/getCategories/").concat(e,"/").concat(4)).then((function(e){if(!e.ok)throw Error("Categories not Found");return e.json()})).then((function(e){j(e.data),m("success")})).catch((function(e){m(e.message)}))}),[]),"loading"===h||"idle"===h?Object(d.jsx)(n.a,{}):"success"!==h?Object(d.jsx)("div",{children:h}):(console.log(o),Object(d.jsx)("div",{className:"product py-5 my-5 bg-light",id:"products",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"section_title text-center mb-5",children:Object(d.jsx)("h1",{className:"text-capitalize",children:"Categories"})}),Object(d.jsx)("div",{className:"row mb-5",children:o?o.map((function(c){return Object(d.jsx)("div",{className:"col-md-4 mb-4 col-12",children:Object(d.jsx)(r.a,{cardImage:c.image,cardTitle:c.category,cardDesc:c.description,cardType:"Category",itemLink:"/".concat(e,"/product/category/").concat(c.category),baseURL:"".concat(e,"/product/category/").concat(c.category)},c.id)},c.id)})):Object(d.jsx)("h2",{className:"w-100 text text-center mt-5",children:"No data found"})})]})}))}}}]);
//# sourceMappingURL=6.7657e554.chunk.js.map