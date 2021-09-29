(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__1YYXj",contact:"ContactList_contact__5ZWB2",delete_btn:"ContactList_delete_btn__ILIBZ"}},14:function(t,e,n){t.exports={filter_label:"Filter_filter_label__3Xodu",filter_wrapper:"Filter_filter_wrapper__3y_YR",filter_input:"Filter_filter_input__MWDpv"}},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),i=n(10),o=n.n(i),l=n(12),s=n(3),u=n(2),b=n(5),d=n(19),j=n.n(d),f=n(7),m=n(20),_=n(21),O=n.n(_),p={addContact:Object(s.b)("contacts/add",(function(t){return{payload:Object(m.a)({id:O.a.generate()},t)}})),deleteContact:Object(s.b)("contacts/delete"),changeFilter:Object(s.b)("contacts/changeFilter")},h=Object(s.c)([],(a={},Object(f.a)(a,p.addContact,(function(t,e){if(!t.find((function(t){return t.number===e.payload.number||t.name.toLowerCase()===e.payload.name.toLowerCase()})))return[e.payload].concat(Object(l.a)(t));alert("Contact already exist!")})),Object(f.a)(a,p.deleteContact,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),a)),x=Object(s.c)("",Object(f.a)({},p.changeFilter,(function(t,e){return e.payload}))),C=Object(u.b)({items:h,filter:x}),v=Object(l.a)(Object(s.d)({serializableCheck:{ignoredActions:[b.b,b.e,b.c,b.d,b.a]}})),g={key:"contacts",storage:j.a,blacklist:["filter"]},y=Object(u.b)({contacts:Object(b.f)(g,C)}),N=Object(s.a)({reducer:y,middleware:v,devTools:!1}),w=Object(b.g)(N),F=n(18),k=n(4),A=n(6),L=n.n(A),Z=n(1);var z=Object(k.b)(null,(function(t){return{submitHandler:function(e){return t(p.addContact(e))}}}))((function(t){var e=t.submitHandler,n=Object(c.useState)(""),a=Object(F.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),l=Object(F.a)(o,2),s=l[0],u=l[1],b=function(t){switch(t.currentTarget.name){case"name":i(t.currentTarget.value);break;case"number":u(t.currentTarget.value);break;default:return}};return Object(Z.jsx)("div",{children:Object(Z.jsxs)("form",{className:L.a.form,onSubmit:function(t){t.preventDefault(),e({name:r,number:s}),i(""),u("")},children:[Object(Z.jsxs)("label",{className:L.a.label,children:["Name",Object(Z.jsx)("input",{className:L.a.input,type:"text",onChange:b,name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(Z.jsxs)("label",{className:L.a.form,children:["Number",Object(Z.jsx)("input",{className:L.a.input,type:"tel",name:"number",value:s,onChange:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(Z.jsx)("button",{type:"submit",className:L.a.add_btn,children:"Add contact"})]})})})),D=n(13),T=n.n(D);var B=Object(k.b)((function(t){return{contacts:function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(t.contacts.items,t.contacts.filter)}}),(function(t){return{onDeleteContact:function(e){return t(p.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(Z.jsx)("ul",{className:T.a.contact_list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(Z.jsxs)("li",{className:T.a.contact,children:[Object(Z.jsxs)("p",{children:[a,": ",Object(Z.jsx)("span",{children:c})]}),Object(Z.jsx)("button",{type:"button",className:T.a.delete_btn,onClick:function(){n(e)},children:"Delete"})]},e)}))})})),S=n(14),Y=n.n(S);var I=Object(k.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(p.changeFilter(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(Z.jsx)("div",{className:Y.a.filter_wrapper,children:Object(Z.jsxs)("label",{className:Y.a.filter_label,children:["Find contact by name",Object(Z.jsx)("input",{type:"text",name:"filter",className:Y.a.filter_input,value:e,onChange:n})]})})}));n(42);function J(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(z,{}),Object(Z.jsx)(I,{}),Object(Z.jsx)(B,{})]})}var M=n(22);o.a.render(Object(Z.jsx)(r.a.StrictMode,{children:Object(Z.jsx)(k.a,{store:N,children:Object(Z.jsx)(M.a,{loading:null,persistor:w,children:Object(Z.jsx)(J,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"AddForm_form__ZPUci",add_btn:"AddForm_add_btn__1v2Zo",label:"AddForm_label__YO3or",input:"AddForm_input__27mbk"}}},[[43,1,2]]]);
//# sourceMappingURL=main.c8438501.chunk.js.map