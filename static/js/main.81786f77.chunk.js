(this.webpackJsonpmy_network=this.webpackJsonpmy_network||[]).push([[0],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(25),r=n(26),o=n(28),c=n(27),u=n(0),i=n.n(u),s=n(10),l=n(12),m=function(e){return{isAuthed:e.auth.isAuthed}},f=function(e){var t=function(t){Object(o.a)(u,t);var n=Object(c.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return this.props.isAuthed?i.a.createElement(e,this.props):i.a.createElement(s.a,{to:"/login"})}}]),u}(i.a.Component);return Object(l.b)(m)(t)}},130:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c}));var a=n(38),r=n(4),o=function(){return{type:"SEND-MESSAGE"}},c=function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",newDiagText:e}},u={dialogsData:[{id:1,name:"Kolyan",src:"https://img.icons8.com/bubbles/2x/user-male.png"},{id:"Mariana",name:"Mariana",src:"https://www.pngkey.com/png/full/781-7813239_brown-pigtail-hair-lady-icon-icon.png"},{id:3,name:"Lesia",src:"https://cdn2.iconfinder.com/data/icons/school-flat-circle/512/Girl_lady_user_woman-512.png"},{id:4,name:"Andrew",src:"https://cdn.dribbble.com/users/79571/screenshots/2562782/user_-_illustration.png"},{id:6,name:"Iryna",src:"https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Woman-Lady-Girl-Female-Avatar-People-Happy-512.png"},{id:"Oksi",name:"Oksana",src:"https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/63-512.png"}],messagesData:[{id:1,message:"Hello!"},{id:2,message:"How are you?"},{id:3,message:"Do you like react?"},{id:4,message:"I'm just learning it now"},{id:5,message:"How is your IT-Kamasutra?"},{id:6,message:"It's very interesting now"}]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n={id:7,message:t.newMessageText};return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[n])});case"UPDATE-NEW-MESSAGE-TEXT":return Object(r.a)(Object(r.a)({},e),{},{newMessageText:t.newDiagText});default:return e}}},131:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"k",(function(){return m})),n.d(t,"h",(function(){return f})),n.d(t,"e",(function(){return d})),n.d(t,"g",(function(){return p})),n.d(t,"f",(function(){return E})),n.d(t,"i",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"b",(function(){return v})),n.d(t,"j",(function(){return _}));var a=n(38),r=n(4),o=n(9),c=n.n(o),u=n(20),i=n(15),s={users:[],pageSize:15,totalFriendsCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},l=function(e){return{type:"FOLLOW",userID:e}},m=function(e){return{type:"UNFOLLOW",userID:e}},f=function(e){return{type:"SET_USERS",users:e}},d=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},p=function(e){return{type:"SET_TOTAL_USERS_COUNT",count:e}},E=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},b=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userID:t}},g=function(e,t){return function(){var n=Object(u.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(E(!0)),a(d(e)),n.next=4,i.b.getFriends(e,t);case 4:r=n.sent,a(E(!1)),a(f(r.items)),a(p(r.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(){var e=Object(u.a)(c.a.mark((function e(t,n,a,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(b(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),v=function(e){return function(){var t=Object(u.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(b(!0,e)),h(n,e,i.b.follow.bind(e),l);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(u.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(b(!0,e)),h(n,e,i.b.unfollow.bind(e),m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAKE":return Object(r.a)(Object(r.a)({},e),{},{fake:e.fake+1});case"FOLLOW":return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(r.a)(Object(r.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(r.a)(Object(r.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(r.a)(Object(r.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(r.a)(Object(r.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(r.a)(Object(r.a)({},e),{},{totalFriendsCount:t.count});case"TOGGLE_IS_FETCHING":return Object(r.a)(Object(r.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(r.a)(Object(r.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(a.a)(e.followingInProgress),[t.userID]):Object(a.a)(e.followingInProgress.filter((function(e){return e!=t.userID})))});default:return e}}},137:function(e,t,n){e.exports={userPhoto:"Preloader_userPhoto__c8T2G",selectedPage:"Preloader_selectedPage__39pS-",lds_dual_ring:"Preloader_lds_dual_ring__3x-db","lds-dual-ring":"Preloader_lds-dual-ring__2uozZ"}},15:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u}));n(0);var a=n(57),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"1ee5a7d0-492f-4228-bc66-5a58b902c8a2"}}),o={getFriends:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},pageChange:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("\u0426\u0435 \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043b\u0438\u0439 \u043c\u0435\u0442\u043e\u0434. \u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0439\u0442\u0435 \u0430\u043d\u0430\u043b\u043e\u0433\u0456\u0447\u043d\u0438\u0439 \u043c\u0435\u0442\u043e\u0434, \u044f\u043a\u0438\u0439 \u043c\u0456\u0441\u0442\u0438\u0442\u044c\u0441\u044f \u0432 \u043e\u0431'\u0454\u043a\u0442\u0456 profileAPI"),c.getProfile(e)},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))}},c={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})}},u={getMe:function(){return r.get("auth/me")},logIn:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/logIn",{email:e,password:t,rememberMe:n})},logOut:function(){return r.delete("auth/logIn")}}},16:function(e,t,n){e.exports={nav:"Navbar_nav__1U6pH",item:"Navbar_item__1q64F",active:"Navbar_active__1fLOD"}},163:function(e,t,n){e.exports=n(293)},168:function(e,t,n){},169:function(e,t,n){},193:function(e,t,n){e.exports={content:"Profile_content__tOpBX"}},291:function(e,t,n){},292:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),c=n.n(o),u=n(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(168);var i=n(25),s=n(26),l=n(28),m=n(27),f=n(10),d=(n(169),n(91)),p=n.n(d),E=function(e){return r.a.createElement("header",{className:p.a.header},r.a.createElement("img",{src:"https://a.storyblok.com/f/47007/410x200/d1811e7e9b/joom-200x100.png",alt:""}),r.a.createElement("div",{className:p.a.loginBlock},e.isAuthed?r.a.createElement("div",null," ",e.login,r.a.createElement("button",{onClick:e.logoutThunk},"Log out")):r.a.createElement(u.b,{to:"/login"},"Login")))},b=(n(57),n(12)),g=n(9),h=n.n(g),v=n(20),_=n(4),O=n(15),j=n(39),S={userId:null,email:null,login:null,isAuthed:!1},w=function(e,t,n,a){return{type:"ADD-SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuthed:a}}},y=function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){var n,a,r,o,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.getMe();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.login,c=a.email,t(w(r,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-SET_USER_DATA":return Object(_.a)(Object(_.a)({},e),t.payload);default:return e}},T=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(E,this.props)}}]),n}(r.a.Component),P=Object(b.b)((function(e){return{isAuthed:e.auth.isAuthed,login:e.auth.login}}),{logoutThunk:function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.logOut();case 2:0===e.sent.data.resultCode&&t(w(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(T),N=n(16),I=n.n(N),C=function(){return r.a.createElement("nav",{className:I.a.nav},r.a.createElement("div",null,r.a.createElement(u.b,{to:"/profile",className:I.a.item,activeClassName:I.a.active},"Profile")),r.a.createElement("div",null,r.a.createElement(u.b,{to:"/dialogs",className:I.a.item,activeClassName:I.a.active},"Messages")),r.a.createElement("div",null,r.a.createElement(u.b,{to:"/feed",className:I.a.item,activeClassName:I.a.active},"Feed")),r.a.createElement("div",null,r.a.createElement(u.b,{to:"/music",className:I.a.item,activeClassName:I.a.active},"Music")),r.a.createElement("div",null,r.a.createElement(u.b,{to:"/settings",className:I.a.item,activeClassName:I.a.active},"Settings")),r.a.createElement("div",null,r.a.createElement(u.b,{to:"/friends",className:I.a.item,activeClassName:I.a.active},"Friends")))},A=(n(193),n(70)),D=n.n(A),x=n(95),F=n.n(x),L=function(e){return r.a.createElement("div",{className:F.a.item},r.a.createElement("img",{src:"https://www.mcicon.com/wp-content/uploads/2021/01/People_User_1-copy-4.jpg",alt:""}),r.a.createElement("div",null,e.message),r.a.createElement("div",{className:F.a.like},r.a.createElement("a",{href:"#"}," ",r.a.createElement("span",null,"Like ",e.likesCount," ")," ")))},U=n(132),M=n(133),R=n(37),G=n(48),B=Object(R.a)(15),W=Object(M.a)({form:"newPost"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:D.a.form},r.a.createElement("div",null,r.a.createElement(U.a,{component:G.b,name:"WriteNewPost",validate:[R.b,B]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))})),z=function(e){console.log("render MyPosts component"),console.log(e);var t=e.posts.map((function(e){return r.a.createElement(L,{message:e.message,likesCount:e.likesCount})}));return r.a.createElement("div",{className:D.a.postsBlock},r.a.createElement("h3",null,"My posts"),r.a.createElement(W,{onSubmit:function(t){e.addPost(t.WriteNewPost),t.WriteNewPost=""}}),r.a.createElement("div",{className:D.a.posts},t.reverse()))},H=n(38),J={posts:[{id:1,message:"Hello, how are you?",likesCount:10},{id:2,message:"It's my first post",likesCount:2},{id:3,message:"I'm trying React",likesCount:23},{id:4,message:"I know something",likesCount:12},{id:5,message:"Let's practice in React!",likesCount:55}]},V=function(e){return{type:"SET_USER_STATUS",status:e}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:6,message:t.newPostTextForm,likesCount:0};return Object(_.a)(Object(_.a)({},e),{},{posts:[].concat(Object(H.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(_.a)(Object(_.a)({},e),{},{profile:t.profile});case"SET_USER_STATUS":return Object(_.a)(Object(_.a)({},e),{},{status:t.status});default:return e}};var Z=Object(b.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e({type:"ADD-POST",newPostTextForm:t})}}}))(z),K=n(56),q=n.n(K),Y=n(51),$=n(90),Q=function(e){var t=Object(a.useState)(!1),n=Object($.a)(t,2),o=n[0],c=n[1],u=Object(a.useState)(e.status),i=Object($.a)(u,2),s=i[0],l=i[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{className:q.a.fullname},e.profile.fullName)),!o&&r.a.createElement("div",null,r.a.createElement("span",{className:q.a.status_content,onDoubleClick:function(){c(!0)}},e.status)),o&&r.a.createElement("div",null,r.a.createElement("input",{autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(s)},onChange:function(e){l(e.currentTarget.value)},value:s})))},ee=function(e){var t=e.profile,n=e.status,a=e.updateStatus;return t?r.a.createElement("div",null,r.a.createElement("div",{className:q.a.descriptionBlock},r.a.createElement("img",{src:t.photos.large,alt:""})),r.a.createElement(Q,{profile:t,status:n,updateStatus:a})):r.a.createElement(Y.a,null)},te=function(e){return r.a.createElement("div",null,r.a.createElement(ee,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(Z,null))},ne=n(89),ae=n(129),re=n(8),oe=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement(te,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(r.a.Component),ce=Object(re.d)(Object(b.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuthed:e.auth.isAuthed}}),{getUserProfile:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.b.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.c.getStatus(e);case 2:a=t.sent,n(V(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.c.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(V(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),f.f,ae.a)(oe),ue=n(98),ie=n.n(ue),se=[r.a.createElement("div",null,r.a.createElement("h2",null,"Hello, this is text ",r.a.createElement("strong",null,"inside")," ",r.a.createElement("i",null,"variable")),r.a.createElement("button",null,r.a.createElement("strong",null,"Just")," click"),r.a.createElement("ul",null,"Task list",r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"JS"),r.a.createElement("li",null,"REACT"))),r.a.createElement("h1",null,"It works!!!")],le=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={time:(new Date).toLocaleTimeString()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("component Feed DidMount"),this.testVar=setInterval((function(){return e.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentDidUpdate",value:function(){console.log("did update"),console.log(this.state)}},{key:"componentWillUnmount",value:function(){console.log("good by Feed"),clearInterval(this.testVar)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Feed"),r.a.createElement("h1",null,"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0438\u0440!"),r.a.createElement("div",{className:ie.a.timeBlock},r.a.createElement("h2",null,"\u0417\u0430\u0440\u0430\u0437 ",r.a.createElement("span",{className:ie.a.clock},this.state.time," "))),se)}}]),n}(r.a.Component),me=(n(291),function(e){return r.a.createElement("div",null,"Music")}),fe=n(33),de=n.n(fe),pe=Object(R.a)(20),Ee=Object(M.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t,className:de.a.form},r.a.createElement("div",null,r.a.createElement(U.a,{component:G.a,type:"text",name:"email",placeholder:"Email",validate:[R.b]})),r.a.createElement("div",null,r.a.createElement(U.a,{component:G.a,name:"password",type:"password",placeholder:"password",validate:[R.b,pe]}),"    "),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(U.a,{component:"input",id:"rememberMe",name:"rememberMe",type:"checkbox"}),r.a.createElement("label",{htmlFor:"rememberMe"}," Remember me "))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Login")),n&&r.a.createElement("div",{className:de.a.formSummaryError},n))})),be=Object(b.b)((function(e){return{isAuthed:e.auth.isAuthed}}),{loginThunk:function(e,t,n){return function(){var a=Object(v.a)(h.a.mark((function a(r){var o,c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.logIn(e,t,n,!0);case 2:o=a.sent,console.log(o.data),0===o.data.resultCode?r(y()):(c=o.data.messages,r(Object(j.a)("login",{_error:c})));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuthed?r.a.createElement(f.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"LOGIN"),r.a.createElement(Ee,{onSubmit:function(t){e.loginThunk(t.email,t.password,t.rememberMe)}}))})),ge=(n(292),function(e){return r.a.createElement("div",null,"Settings")}),he={initialized:!1},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}},_e=r.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),Oe=r.a.lazy((function(){return Promise.all([n.e(5),n.e(4)]).then(n.bind(null,300))})),je=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"componentDidUpdate",value:function(){console.log("App did update")}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(a.Suspense,{fallback:Y.a},r.a.createElement(P,null),r.a.createElement(C,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(f.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(f.b,{path:"/dialogs",render:function(){return r.a.createElement(Oe,null)}}),r.a.createElement(f.b,{path:"/friends",render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(f.b,{path:"/feed",component:le}),r.a.createElement(f.b,{path:"/music",component:me}),r.a.createElement(f.b,{path:"/settings",component:ge}),r.a.createElement(f.b,{path:"/login",render:function(){return r.a.createElement(be,null)}})))):r.a.createElement(Y.a,null)}}]),n}(r.a.Component),Se=Object(re.d)(f.f,Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(y());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(je),we=n(130),ye={sidebar:{}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye;return e},Te=n(131),Pe=n(134),Ne=Object(re.c)({profilePage:X,dialogsPage:we.a,sidebar:ke,friendsPage:Te.a,auth:k,form:Pe.a,app:ve}),Ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.d,Ce=Object(re.e)(Ne,Ie(Object(re.a)(ne.a)));window.store=Ce;var Ae=Ce,De=function(e){c.a.render(r.a.createElement(u.a,null,r.a.createElement(b.a,{store:Ae},r.a.createElement(Se,null))),document.getElementById("root"))};De(Ae.getState()),Ae.subscribe((function(){Ae.getState();De()})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,n){e.exports={form:"FormsControls_form__1xDbE",formControl:"FormsControls_formControl__m70zB",error:"FormsControls_error__WNGRJ",formSummaryError:"FormsControls_formSummaryError__3hsYH"}},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));n(0);var a=function(e){if(!e)return"The field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},48:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var a=n(72),r=n(0),o=n.n(r),c=n(33),u=n.n(c),i=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return o.a.createElement("div",{className:u.a.formControl+" "+(c?u.a.error:"")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,r))),c&&o.a.createElement("span",null,n.error))},s=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return o.a.createElement("div",{className:u.a.formControl+" "+(c?u.a.error:"")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,r))),c&&o.a.createElement("span",null,n.error))}},51:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(137),c=n.n(o);t.a=function(e){return r.a.createElement("div",{className:c.a.lds_dual_ring})}},56:function(e,t,n){e.exports={content:"ProfileInfo_content__2ek1n",descriptionBlock:"ProfileInfo_descriptionBlock__lT6Sq",fullname:"ProfileInfo_fullname__3fGsF",status_content:"ProfileInfo_status_content__3B9T0"}},70:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__26BOD",posts:"MyPosts_posts__WVjTz",form:"MyPosts_form__21L26"}},91:function(e,t,n){e.exports={header:"Header_header__3-E6Z",loginBlock:"Header_loginBlock__32psG"}},95:function(e,t,n){e.exports={item:"Post_item__ND1Bb"}},98:function(e,t,n){e.exports={timeBlock:"Feed_timeBlock__1vFVd",clock:"Feed_clock__1ZjR_"}}},[[163,1,2]]]);
//# sourceMappingURL=main.81786f77.chunk.js.map