(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{47:function(e,t,c){e.exports={card:"Card_card__1FPuY"}},48:function(e,t,c){e.exports={form:"QuoteForm_form__39KAm",loading:"QuoteForm_loading__1L4H2",control:"QuoteForm_control__29hv2",actions:"QuoteForm_actions__32U3Y"}},56:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(2),r=c(21),s=c(47),a=c.n(s),i=c(0),u=function(e){return Object(i.jsx)("div",{className:a.a.card,children:e.children})},d=c(14),l=c(48),j=c.n(l),b=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),s=c[0],a=c[1],l=Object(n.useRef)(),b=Object(n.useRef)();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.a,{when:s,message:function(e){return"\ud398\uc774\uc9c0\ub97c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uc785\ub825\ud55c \uc815\ubcf4\uac00 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4."}}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){a(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=l.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(d.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:l})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=c(19),f=c(20);t.default=function(){var e=Object(h.a)(f.b),t=e.sendRequest,c=e.status,r=Object(o.h)();Object(n.useEffect)((function(){"completed"===c&&r.push("/quotes")}),[c,r]);return Object(i.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=4.3fb6b0e1.chunk.js.map