(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{47:function(e,t,c){e.exports={card:"Card_card__1FPuY"}},48:function(e,t,c){e.exports={form:"QuoteForm_form__39KAm",loading:"QuoteForm_loading__1L4H2",control:"QuoteForm_control__29hv2",actions:"QuoteForm_actions__32U3Y"}},56:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(2),s=c(21),r=c(47),a=c.n(r),i=c(0),u=function(e){return Object(i.jsx)("div",{className:a.a.card,children:e.children})},l=c(14),j=c(48),d=c.n(j),b=function(e){var t=Object(n.useState)(!1),c=Object(s.a)(t,2),r=c[0],a=c[1],j=Object(n.useRef)(),b=Object(n.useRef)();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.a,{when:r,message:function(e){return"\ud398\uc774\uc9c0\ub97c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uc785\ub825\ud55c \uc815\ubcf4\uac00 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4."}}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){a(!0)},className:d.a.form,onSubmit:function(t){t.preventDefault();var c=j.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:d.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:d.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"\ucd9c\ucc98"}),Object(i.jsx)("input",{type:"text",id:"author",ref:j})]}),Object(i.jsxs)("div",{className:d.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"\ubb38\uad6c"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(i.jsx)("div",{className:d.a.actions,children:Object(i.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"\ubb38\uad6c \ucd94\uac00\ud558\uae30"})})]})})]})},f=c(19),h=c(20);t.default=function(){var e=Object(f.a)(h.b),t=e.sendRequest,c=e.status,s=Object(o.h)();Object(n.useEffect)((function(){"completed"===c&&s.push("/quotes")}),[c,s]);return Object(i.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=4.c1200de6.chunk.js.map