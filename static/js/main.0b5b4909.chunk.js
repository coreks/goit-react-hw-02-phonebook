(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={item:"ContactsItem_item__3IWol",item__button:"ContactsItem_item__button__LEiU_"}},14:function(t,e,n){t.exports={list:"ContactsList_list__3NRQ6"}},15:function(t,e,n){t.exports={filter__label:"ContactsFilter_filter__label__2DkrA"}},16:function(t,e,n){t.exports={app:"App_app__1Kd3Z"}},3:function(t,e,n){t.exports={form:"Form_form__3AtpA",input:"Form_input__2n_k0",button:"Form_button__2GSyj"}},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(12),c=n.n(r),i=n(13),o=n(17),s=n(6),u=n(7),l=n(9),m=n(8),b=n(2),d=n.n(b),h=n(5),j=n(3),p=n.n(j),f=n(0),C=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=d.a.generate(),t.numberInputId=d.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(h.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{children:["Name",Object(f.jsx)("input",{type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,id:this.nameInputId,className:p.a.input})]}),Object(f.jsxs)("label",{children:["Number",Object(f.jsx)("input",{type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,id:this.numberInputId,className:p.a.input})]}),Object(f.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=n(11),O=n.n(_),x=function(t){var e=t.name,n=t.number,a=t.id,r=t.onDeleteContact;return Object(f.jsxs)("li",{className:O.a.item,children:[Object(f.jsxs)("span",{children:[e,": "]}),Object(f.jsxs)("span",{children:[n," "]}),Object(f.jsx)("span",{children:Object(f.jsx)("button",{className:O.a.item__button,type:"button",onClick:function(){return r(a)},children:"Delete"})})]})},v=n(14),g=n.n(v),A=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{className:g.a.list,children:e.map((function(t){return Object(f.jsx)(x,{id:t.id,name:t.name,number:t.number,onDeleteContact:n},t.id)}))})},y=n(15),I=n.n(y),N=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:I.a.filter__label,children:["Find contacts by name",Object(f.jsx)("input",{type:"text",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:n})]})},S=n(16),k=n.n(S),w=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n={id:d.a.generate(),name:e.name,number:e.number};t.setState((function(t){return t.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?(alert("".concat(e.name," is already in contacts")),Object(i.a)({},t)):{contacts:[].concat(Object(o.a)(t.contacts),[n])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(f.jsxs)("div",{className:k.a.app,children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(C,{onSubmit:this.addContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(N,{value:t,onChange:this.onChangeFilter}),Object(f.jsx)(A,{contacts:this.getFilteredContacts(),onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(31);c.a.render(Object(f.jsx)(w,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.0b5b4909.chunk.js.map