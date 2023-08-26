"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_=self.webpackChunkgoit_react_hw_08_phonebook_||[]).push([[842],{3842:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(2791),a=n(9434),c="ContactForm_formEditor__PNLhK",o="ContactForm_inputArea__vN+up",s="ContactForm_contactButton__jSKp4",i=function(e){return e.contacts.contacts.items},l=function(e){return e.contacts.filter},u=function(e){return e.contacts.contacts.isLoading},d=function(e){return e.contacts.contacts.error},m=n(8899),f=n(184);var h=function(){var e=(0,a.v9)(i),t=(0,r.useRef)(),n=(0,r.useRef)(),l=(0,a.I0)();return(0,r.useEffect)((function(){l((0,m.yF)())}),[l]),(0,f.jsxs)("form",{className:c,children:[(0,f.jsxs)("label",{children:["Name",(0,f.jsx)("input",{className:o,ref:t,type:"text",placeholder:"Name of contact",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{children:["Phone",(0,f.jsx)("input",{className:o,ref:n,type:"tel",placeholder:"Number of contact",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{type:"button",onClick:function(){var r=t.current.value.trim(),a=n.current.value.trim();if(""===r)return console.log("contactName is empty",r),alert("Enter name, please");if(0===e.length)console.log("Contacts in line 30 are...",e),l((0,m.tz)({name:r,number:a}));else{console.log("Contacts in line 39 are...",e);!function(t){var n=t.toLowerCase().trim();return console.log("lowerCaseNewName is ...",n),e.some((function(e){return e.name.toLowerCase()===n}))}(r)?l((0,m.tz)({name:r,number:a}),t.current.value="",n.current.value=""):alert("".concat(r," is already in contacts")),l((0,m.yF)())}},className:s,children:"Add contact"})]})},p=n(9053),_="Filter_findZone__aitbz";var v=function(){var e=(0,a.v9)(l);console.log("Filter search is...",e);var t=(0,r.useRef)(),n=(0,a.I0)();return(0,f.jsxs)("label",{className:_,children:["Find contacts by name",(0,f.jsx)("input",{ref:t,type:"text",onChange:function(e){n((0,p.a8)(t.current.value.trim().toLowerCase()))}})]})},x="ContactList_contactList__UFVCg";function j(e){var t=e.children;return(0,f.jsx)("ul",{className:x,children:t})}var C=n(643);var b=function(){return(0,f.jsx)(C.VF,{height:"100",width:"100",color:"#305ad9",secondaryColor:"#d9cd30",radius:"12.5",ariaLabel:"mutating-dots-loading",wrapperStyle:{display:"flex",justifyContent:"start",alignItems:"center"},wrapperClass:"",visible:!0})},g="Contact_contactRow__6hlqb",y="Contact_deleteButton__G9qkX";var N=function(){var e=(0,a.v9)(i),t=(0,a.v9)(l),n=(0,a.v9)(u),r=(0,a.v9)(d),c=(0,a.I0)(),o=function(){if(e)return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return n?(0,f.jsx)(b,{}):r?"Error"+r:(0,f.jsx)(f.Fragment,{children:o?o.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,f.jsxs)("li",{className:g,children:[(0,f.jsx)("span",{children:n}),(0,f.jsx)("span",{children:r}),(0,f.jsx)("button",{type:"button",className:y,onClick:function(){return function(e){c((0,m.fK)(e)),console.log("Deleting contact with id",e),c((0,p.GK)(e))}(t)},children:"Delete"})]},t)})):(0,f.jsx)("p",{children:"No contacts to display."})})};function w(){var e=(0,a.I0)();return(0,r.useEffect)((function(){e(m.yF)}),[e]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{}),";",(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)(v,{}),(0,f.jsx)(j,{children:(0,f.jsx)(N,{})})]})]})}}}]);
//# sourceMappingURL=842.e71a4909.chunk.js.map