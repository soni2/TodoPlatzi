(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(38)},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(6),c=a.n(l),r=(a(15),a(17),a(1)),i=a(2);var u=o.a.createContext();function s(e){var t,a=function(e,t){var a=o.a.useState(!1),n=Object(r.a)(a,2),l=n[0],c=n[1],i=o.a.useState(!0),u=Object(r.a)(i,2),s=u[0],m=u[1],d=o.a.useState(t),p=Object(r.a)(d,2),E=p[0],f=p[1];o.a.useEffect(function(){setTimeout(function(){try{var a;localStorage.getItem(e)?a=JSON.parse(localStorage.getItem(e)):(localStorage.setItem(e,JSON.stringify(t)),a=t),v(a),m(!1)}catch(l){c(l)}},2e3)},t);var v=function(t){try{var a=JSON.stringify(t);localStorage.setItem(e,a),f(t)}catch(l){c(l)}};return{item:E,saveItem:v,loading:s,error:l}}("TODO_V1",[]),l=a.item,c=a.saveItem,s=a.loading,m=a.error,d=function(e){var t=l.findIndex(function(t){return t.text===e}),a=Object(i.a)(l);a[t].completed=!a[t].completed,c(a)},p=Object(n.useState)(""),E=Object(r.a)(p,2),f=E[0],v=E[1],h=Object(n.useState)(""),T=Object(r.a)(h,2),g=T[0],b=T[1],C=o.a.useState(""),O=Object(r.a)(C,2),N=O[0],x=O[1];t=!N.length>=1?l:l.filter(function(e){var t=e.title.toLowerCase(),a=N.toLowerCase();return t.includes(a)});var S=l.filter(function(e){return!!e.completed}).length,k=l.length,M=o.a.useState(!1),y=Object(r.a)(M,2),j=y[0],F=y[1],I=o.a.useState(!1),V=Object(r.a)(I,2),w=V[0],B=V[1],D=o.a.useState(!1),J=Object(r.a)(D,2),A=J[0],L=J[1],q=o.a.useState(!1),W=Object(r.a)(q,2),_=W[0],z=W[1];document.addEventListener("keydown",function(e){e.key});var H=JSON.parse(localStorage.getItem("color")),P=o.a.useState(H),R=Object(r.a)(P,2),G=R[0],K=R[1];return G||K({color:"Morado",mode:"light"}),o.a.createElement(u.Provider,{value:{error:m,loading:s,setSearchValue:x,searchValue:N,listOfCompleted:d,totalTodos:k,searchedTodo:t,deletedTodo:function(e){var t=l.findIndex(function(t){return t.text===e}),a=Object(i.a)(l);a.splice(t,1),c(a)},addTodo:function(e){var t=e.title,a=e.text,n=Object(i.a)(l);n.push({completed:!1,title:t,text:a}),c(n)},completed:S,completedTodo:d,openModal:j,setOpenModal:F,colorTheme:G,openTodoForm:w,setOpenTodoForm:B,openThemeModal:A,setOpenThemeModal:L,colorChange:function(e){var t=JSON.stringify(e);localStorage.setItem("color",t),K(e)},closeAllModals:function(){F(!1),B(!1),L(!1),z(!1)},openEditModal:_,setOpenEditModal:z,editTextValue:f,setEditTextValue:v,editTitleValue:g,setEditTitleValue:b,editTodo:function(e){var t=e.title,a=e.text,n=l.findIndex(function(e){return e.text===f&&e.title===g}),o=Object(i.a)(l);o[n].text=a,o[n].title=t,c(o)}}},e.children)}a(19);function m(){var e=o.a.useContext(u),t=e.setOpenModal,a=e.setOpenTodoForm,n=e.openTodoForm,l=e.setOpenThemeModal,c=e.colorTheme,r=e.setOpenEditModal;return o.a.createElement("button",{className:"createTodoButton button_".concat(c.color," ").concat(c.mode),onClick:function(){t(!n),a(!n),l(!1),r(!1)}},"+")}a(21);function d(){var e=o.a.useContext(u),t=e.searchValue,a=e.setSearchValue;return o.a.createElement("input",{placeholder:"Buscar tarea",className:"todoInput",id:"searchTodo",onChange:function(e){console.log(e.target.value),a(e.target.value)},value:t})}a(23);function p(e){var t=e.text,a=e.completed,n=e.onComplete,l=e.onDelete,c=e.title,r=o.a.useContext(u),i=r.setEditTextValue,s=r.setEditTitleValue,m=r.setOpenModal,d=r.setOpenEditModal;return o.a.createElement("li",{className:"itemContainer ".concat(a&&"itemContainer--active"),key:t},o.a.createElement("div",{className:"textContainer",onClick:function(e){2===e.detail&&(d(!0),m(!0),i(t),s(c))}},o.a.createElement("h2",{className:"titulo ".concat(a&&"titulo--active")},"".concat(c)),o.a.createElement("p",{className:"texto"},t)),o.a.createElement("div",{className:"iconsContainer"},o.a.createElement("span",{className:"icon icon-check ".concat(a&&"icon-check--active"),onClick:n}),o.a.createElement("span",{className:"icon icon-delete",onClick:l})))}a(25);function E(e){return o.a.createElement("section",null,o.a.createElement("ul",null,e.children))}var f=function(){var e=o.a.useContext(u),t=e.completed,a=e.totalTodos,n=e.error,l=e.loading,c="";return c=0!==a?o.a.createElement("h1",null,"Tienes ",o.a.createElement("span",{style:{fontWeight:"bold"}},t)," de ",o.a.createElement("span",{style:{fontWeight:"bold"}},a)," tareas completadas"):o.a.createElement("h1",null,"No tienes tareas por hacer, ",o.a.createElement("span",{style:{fontWeight:"bold"}},"\xa1Crea tu primera tarea!")),o.a.createElement("div",{style:{width:"80%",textAlign:"center"}},n&&o.a.createElement("h1",null,"Hubo un error cargando las tareas"),l&&o.a.createElement("h1",null,"Estamos cargando, no desesperes..."),!l&&c)},v=a(3),h=a.n(v);a(27);var T=function(e){var t=e.children;return h.a.createPortal(o.a.createElement("div",{className:"addTodoModal"},t),document.getElementById("modal"))};a(5);function g(){var e=o.a.useState(""),t=Object(r.a)(e,2),a=t[0],n=t[1],l=o.a.useState(""),c=Object(r.a)(l,2),i=c[0],s=c[1],m=o.a.useState(""),d=Object(r.a)(m,2),p=d[0],E=d[1],f=o.a.useContext(u),v=f.setOpenModal,h=f.setOpenTodoForm,T=f.addTodo,g=f.colorTheme;function b(){v(!1),h(!1)}return o.a.createElement("div",{className:"formContainer",onSubmit:function(e){e.preventDefault(),a.length<=3||i.length<=5?E("Tienes que agregar un titulo o descripci\xf3n con mas caract\xe9res"):T({title:a,text:i})}},o.a.createElement("form",null,o.a.createElement("div",{className:"closeContainer"},o.a.createElement("label",{className:"formTitle"},"Crea una tarea"),o.a.createElement("p",{className:"closeButton",onClick:b},"x")),o.a.createElement("input",{className:"todoTitle inputs".concat(g.color),placeholder:"T\xedtulo",onChange:function(e){n(e.target.value)}}),o.a.createElement("textarea",{className:"todoDescript inputs".concat(g.color),placeholder:"Descripci\xf3n",onChange:function(e){s(e.target.value)}}),o.a.createElement("div",{className:"TodoForm-buttonContainer "},o.a.createElement("button",{type:"button",className:"TodoForm-button cancel".concat(g.color),onClick:b},"Cancelar"),o.a.createElement("button",{type:"submit",className:"TodoForm-button add".concat(g.color)},"Crear")),o.a.createElement("p",{className:"emptyTodo"},p)))}a(30);var b=function(){return[o.a.createElement("div",{className:"loadingSkeleton",key:"1"}),o.a.createElement("div",{className:"loadingSkeleton",key:"2"}),o.a.createElement("div",{className:"loadingSkeleton",key:"3"})]};a(32);function C(){var e=o.a.useContext(u),t=e.setOpenModal,a=e.setOpenTodoForm,n=e.openTodoForm;return o.a.createElement("div",{className:"createTodoBackground"},o.a.createElement("div",{className:"plusSign",onClick:function(){t(!n),a(!n)}},o.a.createElement("div",{className:"addIcon"}),o.a.createElement("p",{className:"addTodoText"},'Haz clic aqu\xed o al bot\xf3n de "+" para crear nueva tarea.')))}a(34);function O(){var e=o.a.useContext(u),t=e.openThemeModal,a=e.setOpenThemeModal,n=e.setOpenTodoForm,l=e.setOpenEditModal;return o.a.createElement("button",{className:"ThemeButton",onClick:function(){a(!t),n(!1),l(!1)}},o.a.createElement("span",{className:"icon-theme"}))}a(36);var N=["Azul","Rojo","Morado","Verde","Blanco"];var x=function(){var e=o.a.useContext(u).colorChange;return o.a.createElement("div",{className:"themeContainer"},o.a.createElement("ul",null,N.map(function(t){return o.a.createElement("li",{className:"themeList light".concat(t),key:t,onClick:function(){return e({color:t,mode:"light"})}})})))};function S(){var e=o.a.useContext(u),t=e.setOpenModal,a=e.setOpenTodoForm,n=e.colorTheme,l=e.editTitleValue,c=e.editTextValue,i=e.setOpenEditModal,s=e.editTodo,m=o.a.useState(l),d=Object(r.a)(m,2),p=d[0],E=d[1],f=o.a.useState(c),v=Object(r.a)(f,2),h=v[0],T=v[1],g=o.a.useState(""),b=Object(r.a)(g,2),C=b[0],O=b[1];function N(){t(!1),a(!1),i(!1)}return o.a.createElement("div",{className:"formContainer",onSubmit:function(e){e.preventDefault(),p.length<=3||h.length<=5?O("Tienes que agregar un titulo o descripci\xf3n con mas caract\xe9res"):(s({title:p,text:h}),i(!1))}},o.a.createElement("form",null,o.a.createElement("div",{className:"closeContainer"},o.a.createElement("label",{className:"formTitle"},"Editar tarea"),o.a.createElement("p",{className:"closeButton",onClick:N},"x")),o.a.createElement("input",{className:"todoTitle inputs".concat(n.color),placeholder:"T\xedtulo",value:p,onChange:function(e){E(e.target.value)}}),o.a.createElement("textarea",{className:"todoDescript inputs".concat(n.color),placeholder:"Descripci\xf3n",value:h,onChange:function(e){T(e.target.value)}}),o.a.createElement("div",{className:"TodoForm-buttonContainer "},o.a.createElement("button",{type:"button",className:"TodoForm-button cancel".concat(n.color),onClick:N},"Cancelar"),o.a.createElement("button",{type:"submit",className:"TodoForm-button add".concat(n.color)},"Editar")),o.a.createElement("p",{className:"emptyTodo"},C)))}var k=function(){var e=o.a.useContext(u),t=e.searchedTodo,a=e.deletedTodo,n=e.completedTodo,l=e.openModal,c=e.loading,r=e.colorTheme,i=e.openTodoForm,s=e.openThemeModal,v=e.closeAllModals,h=e.openEditModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"header_".concat(r.color," ").concat(r.mode)},o.a.createElement(d,null),o.a.createElement(f,null)),o.a.createElement(E,null,c&&o.a.createElement(b,null),!c&&!t.length&&o.a.createElement(C,null),t.map(function(e){return o.a.createElement(p,{key:"".concat(parseInt(1e3*Math.random())).concat(e.text).concat(e.title),title:e.title,text:e.text,completed:e.completed,onComplete:function(){return n(e.text)},onDelete:function(){return a(e.text)}})})),l&&i&&o.a.createElement(T,null,o.a.createElement(g,null)),l&&h&&o.a.createElement(T,null,o.a.createElement(S,null)),s&&[o.a.createElement(x,null),o.a.createElement("div",{className:"closeModals",onClick:function(){return v()}})],o.a.createElement(O,null),o.a.createElement(m,null))};var M=function(){return o.a.createElement(s,null,o.a.createElement(k,null))};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(M,null))}],[[7,2,1]]]);
//# sourceMappingURL=main.c846713c.chunk.js.map