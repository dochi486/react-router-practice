(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{49:function(e,t,c){e.exports={comments:"Comments_comments__1cjvT"}},50:function(e,t,c){e.exports={form:"NewCommentForm_form__34ZRV",loading:"NewCommentForm_loading__2-AhD",control:"NewCommentForm_control__3GbFW",actions:"NewCommentForm_actions__3chUZ"}},51:function(e,t,c){e.exports={item:"CommentItem_item__2RTk4"}},52:function(e,t,c){e.exports={comments:"CommentsList_comments__xcDTR"}},53:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__2EYHS"}},55:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),o=c(8),a=c(20),r=c(19),m=c(21),j=c(49),i=c.n(j),d=c(14),u=c(50),l=c.n(u),b=c(0),x=function(e){var t=Object(n.useRef)(),c=Object(r.a)(a.a),s=c.sendRequest,o=c.status,m=c.error,j=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||m||j()}),[o,m,j]);var i=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:l.a.form,onSubmit:i,children:["pending"===o&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}),Object(b.jsxs)("div",{className:l.a.control,onSubmit:i,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:l.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(51),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(52),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},v=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),c=t[0],o=t[1],j=Object(s.j)().quoteId,u=Object(r.a)(a.c),l=u.sendRequest,O=u.status,h=u.data;Object(n.useEffect)((function(){l(j)}),[l,j]);var f,p=Object(n.useCallback)((function(){l(j)}),[l,j]);return"pending"===O&&(f=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})})),"completed"===O&&h&&h.length>0&&(f=Object(b.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(f=Object(b.jsx)("p",{className:"centered",children:"\ub4f1\ub85d\ub41c \ub313\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})),Object(b.jsxs)("section",{className:i.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{quoteId:j,onAddedComment:p}),f]})},C=c(53),g=c.n(C),q=function(e){return Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(s.k)(),t=Object(s.j)().quoteId,c=Object(r.a)(a.e,!0),m=c.sendRequest,j=c.status,i=c.data,u=c.error;return Object(n.useEffect)((function(){m(t)}),[m,t]),"pending"===j?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}):u?Object(b.jsx)("p",{className:"centered focused",children:u}):i.text?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(q,{text:i.text,author:i.author}),Object(b.jsx)(s.c,{path:e.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"\ub313\uae00 \ubd88\ub7ec\uc624\uae30"})})}),Object(b.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=3.ed54b3e4.chunk.js.map