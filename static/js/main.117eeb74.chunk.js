(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),i=a.n(r),s=a(6),c=a(4),l=a(5),m=a(8),d=a(7),u=a(1),h=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]);function p(e){return h.find((function(t){return t.id===e}))}var b=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(u.a)(Object(u.a)({},e),{},{user:p(e.userId)})})),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todosWithUser:b,todoName:"",userName:"",countId:b.length,noTitle:!1,noSelect:!1,maxLength:30},e.addOneId=function(){e.setState((function(e){return{countId:e.countId+1}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.todosWithUser,n=t.todoName,r=t.userName,i=t.countId,c=t.noTitle,l=t.noSelect,m=t.maxLength;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Add todo form"),o.a.createElement("form",{action:"/api/todos",method:"POST",onSubmit:function(t){t.preventDefault(),n||r?n?r?e.setState((function(e){var t={id:i,userId:e.userName,title:e.todoName.split("").slice(0,m).join("").replace(/[^\w\-_]+$/i,""),completed:!1,user:p(e.userName)};return{todosWithUser:[].concat(Object(s.a)(e.todosWithUser),[t]),todoName:"",userName:""}})):e.setState({noSelect:!0}):e.setState({noTitle:!0}):e.setState({noTitle:!0,noSelect:!0})}},o.a.createElement("div",{className:"form__filed"},o.a.createElement("label",{htmlFor:"todo__name-new"},"Todo name"),o.a.createElement("input",{type:"text",name:"todoName",value:n,id:"todo__name-new",onChange:function(t){e.setState({todoName:t.target.value,noTitle:!1})},placeholder:"Todo name"}),o.a.createElement("span",{className:"form__error"},c&&"Please add a todo"),o.a.createElement("br",null)),o.a.createElement("div",{className:"form__filed"},o.a.createElement("label",{htmlFor:"user__name-new"},"User name"),o.a.createElement("select",{name:"userName",id:"user__name-new",value:r,onChange:function(t){e.setState({userName:+t.target.value,noSelect:!1})}},o.a.createElement("option",null,"Choose User"),h.map((function(e){return o.a.createElement("option",{value:e.id,key:e.id},e.name)}))),o.a.createElement("span",{className:"form__error"},l&&"Please choose a user"),o.a.createElement("br",null)),o.a.createElement("button",{type:"submit",className:"buttonAdd",onClick:this.addOneId},"Add")),o.a.createElement(y,{todosWithUser:a}))}}]),a}(o.a.Component),y=function(e){var t=e.todosWithUser;return o.a.createElement("ul",{className:"todo"},t.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("div",{className:"todo__user"},o.a.createElement("div",{className:"todo__user-task"},"Task:"," ",e.title),o.a.createElement("div",{className:"todo__user-name"},"Name:"," ",e.user.name),o.a.createElement("div",{className:e.completed?"todo__user-completed":"todo__user-uncompleted"},e.completed?"done":"in process")))})))},f=g;i.a.render(o.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.117eeb74.chunk.js.map