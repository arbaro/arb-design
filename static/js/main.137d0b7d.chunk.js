(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{279:function(e,t,n){e.exports=n(510)},284:function(e,t,n){},463:function(e,t,n){},472:function(e,t,n){},481:function(e,t){},486:function(e,t){},488:function(e,t){},510:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),o=n.n(c),i=(n(284),n(12)),l=n(16),u=n(14),s=n(13),m=n(15),p=n(5),f=n.n(p),h=n(11),d=n(26),b=n(27),g=n(35),v=n(2),E=n(92),y=n.n(E),w=n(97),k=n.n(w),O=n(30);function j(){var e=Object(d.a)(["\n  border-radius: 50%;\n  width: 45px;\n"]);return j=function(){return e},e}function x(){var e=Object(d.a)(["\n  justify-self: center;\n  align-self: center;\n"]);return x=function(){return e},e}function S(){var e=Object(d.a)(["\n  align-self: center;\n  justify-self; center;\n  grid-area: p;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n"]);return S=function(){return e},e}function C(){var e=Object(d.a)(["\n  justify-self: center;\n  align-self: center;\n  grid-area: s;\n"]);return C=function(){return e},e}function A(){var e=Object(d.a)(["\n  justify-self: center;\n  align-self: center;\n  grid-area: b;\n"]);return A=function(){return e},e}function N(){var e=Object(d.a)(['\n  display: grid;\n  grid-template-columns: 2fr 2fr 8fr 2fr 2fr;\n  grid-template-areas: ". b s p .";\n']);return N=function(){return e},e}var _=Object(O.createStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20,color:"white"}}),T=(b.a.div(N()),b.a.div(A()),b.a.div(C()),b.a.div(S()),b.a.div(x()),b.a.img(j()),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={authed:!1,accountName:""},n.login=Object(h.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Tt.login();case 3:t=e.sent,n.setState({accountName:t.name,authed:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),n.logout=Object(h.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({accountName:"",authed:!1});case 1:case"end":return e.stop()}},e)})),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.login()},900)}},{key:"render",value:function(){var e=this.state,t=e.authed,n=e.accountName;return r.a.createElement(v.a,{position:"static"},r.a.createElement(v.p,null,r.a.createElement(g.b,{to:"/"},r.a.createElement(y.a,{style:_.menuButton,"aria-label":"Menu"},r.a.createElement(k.a,null))),r.a.createElement(v.r,{variant:"h6",color:"inherit",style:_.grow},"Arbaro"),r.a.createElement(v.b,{onClick:t?this.logout:this.login,color:"inherit"},t?"Log out ".concat(n):"Sign in Scatter")))}}]),t}(a.Component));function I(){var e=Object(d.a)(["\n  grid-area: f;\n  padding: 10px;\n"]);return I=function(){return e},e}function B(){var e=Object(d.a)(["\n  grid-area: i;\n  padding: 10px;\n"]);return B=function(){return e},e}function R(){var e=Object(d.a)(["\n  grid-area: c;\n  padding: 10px;\n"]);return R=function(){return e},e}function M(){var e=Object(d.a)(["\n  justify-self: center;\n  align-self: center;\n  margin-top: 10px;\n  grid-area: h;\n"]);return M=function(){return e},e}function D(){var e=Object(d.a)(['\n  display: grid;\n  grid-template-columns: 2fr 2fr 8fr 2fr 2fr;\n  grid-template-areas:\n    ". . h . ."\n    ". m c i ."\n    ". m c f .";\n']);return D=function(){return e},e}var F=b.a.div(D()),H=b.a.div(M()),W=b.a.div(R()),q=b.a.div(B()),J=b.a.div(I()),K=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null,e.content),r.a.createElement(q,null,e.info),r.a.createElement(J,null,e.form))},L=function(){return r.a.createElement(v.c,null,r.a.createElement(v.d,null,r.a.createElement(v.r,{color:"textSecondary",gutterBottom:!0},"Work"),r.a.createElement(v.r,{component:"p"},"This plugin allows one to enter time against thing.",r.a.createElement("br",null),"Engages the smart contract and mints tokens for team members.")))},P=n(44),V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={decHours:"",notes:""},n.onChange=function(e){console.log(e.target.name),n.setState(Object(P.a)({},e.target.name,e.target.value))},n.submit=function(){n.props.onSubmit(n.state),n.setState({decHours:"",notes:""})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.r,{variant:"h5",gutterBottom:!0},"Enter Time"),r.a.createElement(v.o,{id:"standard-name",label:"Decimal Hours",name:"decHours",value:this.state.decHours,required:!0,type:"number",onChange:this.onChange,margin:"normal"}),r.a.createElement(v.o,{id:"standard-name",label:"Work notes",name:"notes",value:this.state.notes,required:!0,onChange:this.onChange,margin:"normal",multiline:!0}),r.a.createElement(v.b,{variant:"contained",color:"primary",onClick:this.submit},"Submit"))}}]),t}(a.Component),G=n(98),z=n.n(G),U=function(e){var t=e.worker,n=e.decHours,a=e.rewardAmount,c=e.rewardSymbol,o=e.notes;return r.a.createElement(v.n,null,r.a.createElement(v.l,null,t),r.a.createElement(v.l,null,n),r.a.createElement(v.l,null,"".concat(z.a.formatNumber(a,{precision:0})," ").concat(c)),r.a.createElement(v.l,null,o))},Y=function(e){var t=e.workEntries;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.j,null,r.a.createElement(v.m,null,r.a.createElement(v.n,null,r.a.createElement(v.l,null,"Worker"),r.a.createElement(v.l,null,"Hours"),r.a.createElement(v.l,null,"Awarded"),r.a.createElement(v.l,null,"Notes"))),r.a.createElement(v.k,null,t.map(function(e,t){return r.a.createElement(U,Object.assign({key:t},e))}))))},$=n(215),Q=n(45),X=function(){var e=Object(h.a)(f.a.mark(function e(t,n){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Tt.transaction("claimtime",{role:t,dechours:n.decHours,notes:n.notes}));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),Z=function(e,t,n){return"".concat(t,".").concat("0".repeat(n)," ").concat(e)},ee=function(){var e=Object(h.a)(f.a.mark(function e(t,n,a,r){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Tt.transaction("create",{issuer:t,maximum_supply:Z(n,a,r)},"arbtoken"));case 1:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),te=function(){var e=Object(h.a)(f.a.mark(function e(t,n,a,r){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Tt.transaction("createorg",{owner:t,tokensym:n,tokencon:a,friendlyname:r}));case 1:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),ne=function(){var e=Object(h.a)(f.a.mark(function e(t,n){var a,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Tt.rpc.get_account(t);case 2:if(a=e.sent,!(r=a.permissions.find(function(e){return"active"===e.perm_name}).required_auth).accounts.find(function(e){return e.permission.actor===n})){e.next=7;break}return console.log("Permission already granted"),e.abrupt("return");case 7:return e.abrupt("return",Tt.transaction("updateauth",{account:t,permission:"active",auth:Object(Q.a)({},r,{accounts:[].concat(Object($.a)(r.accounts),[{permission:{actor:n,permission:"active"},weight:1}])}),parent:"owner"},"eosio"));case 8:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),ae=function(){var e=Object(h.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Tt.transaction("testreset",{}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(h.a)(f.a.mark(function e(t,n,a,r){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Tt.transaction("createrole",{org:t,worker:n,role:a,payrate:r}));case 1:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),ce=function(){var e=Object(h.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Tt.transaction("acceptrole",{role:t}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),oe=n(99),ie=n.n(oe),le=n(100),ue=n.n(le),se=n(65),me="".concat("https","://").concat("eos.greymass.com",":").concat("443"),pe=new se.JsonRpc(me),fe=ue.a.create({baseURL:"https://arbaro-api.herokuapp.com"}),he=function(e){return fe.get("/company/".concat(e,"/workEntries")).then(function(e){return e.data})},de=function(){return fe.get("/companies").then(function(e){return e.data})},be=function(){var e=Object(h.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.get_table_rows({json:!0,code:"labelaarbaro",scope:"labelaarbaro",table:"roles",lower_bound:0,upper_bound:-1,limit:9999,index_position:1});case 2:return n=e.sent,e.abrupt("return",n.rows.filter(function(e){return e.org===t}));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=Object(h.a)(f.a.mark(function e(t,n){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Tt.getTable("roles").then(function(e){return e.rows});case 2:return a=e.sent,e.abrupt("return",a.find(function(e){return e.worker===t&&e.org===n}).key);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),ve=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={workEntries:[]},n.fetchTimeEntries=Object(h.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he(n.props.orgname);case 2:t=e.sent,console.log(t),n.setState({workEntries:t.map(function(e){var t=e.dechours,n=e.notes,a=e.worker,r=e.reward;return{worker:a,decHours:ie.a.duration(t,"hours").humanize(),rewardAmount:r.amount,rewardSymbol:r.symbol,notes:n}})});case 5:case"end":return e.stop()}},e)})),n.onSubmit=function(){var e=Object(h.a)(f.a.mark(function e(t){var a,r,c,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Tt.account.name,r=n.props.orgname,e.next=5,ge(a,r);case 5:return c=e.sent,e.next=8,X(c,t);case 8:o=e.sent,console.log(o.transaction_id),setTimeout(function(){return n.fetchTimeEntries()},1e3),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("eeee",e.t0);case 16:case"end":return e.stop()}},e,null,[[0,13]])}));return function(t){return e.apply(this,arguments)}}(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchTimeEntries()}},{key:"render",value:function(){return console.log(this.props.orgname,"was received at work prop"),r.a.createElement(K,{content:r.a.createElement(Y,{workEntries:this.state.workEntries}),info:r.a.createElement(L,null),form:r.a.createElement(V,{onSubmit:this.onSubmit})})}}]),t}(a.Component),Ee={worker:"",role:"",payrate:0},ye=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state=Ee,n.onChange=function(e){n.setState(Object(P.a)({},e.target.name,e.target.value))},n.submit=function(){n.props.onSubmit(n.state),n.setState(Ee)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props,"on the form"),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.r,{variant:"h5",gutterBottom:!0},"Add Team Member"),r.a.createElement(v.o,{id:"standard-name",label:"EOS Account Name",placeholder:"Account of worker",name:"worker",value:this.state.worker,required:!0,onChange:this.onChange,margin:"normal"}),r.a.createElement(v.o,{id:"standard-name",label:"Role ID",name:"role",placeholder:"Dev3",value:this.state.role,required:!0,onChange:this.onChange,margin:"normal"}),r.a.createElement(v.o,{id:"standard-name",label:"Pay Rate",name:"payrate",helperText:"Tokens rewarded per hour worked",type:"number",placeholder:"Dev3",value:this.state.payrate,required:!0,onChange:this.onChange,margin:"normal"}),r.a.createElement(v.b,{variant:"contained",color:"primary",onClick:this.submit},"Submit"))}}]),t}(a.Component),we=function(e){var t=e.worker,n=e.payrate,a=e.shares,c=e.key,o=e.roleId,i=e.roleaccepted;return r.a.createElement(v.n,{key:c},r.a.createElement(v.l,{component:"th",scope:"row"},t),r.a.createElement(v.l,null,o),r.a.createElement(v.l,{align:"right"},n),r.a.createElement(v.l,{align:"right"},z.a.formatNumber(a,{precision:0})),r.a.createElement(v.l,{align:"right"},i?r.a.createElement("span",null,"Accepted"):r.a.createElement(v.b,{variant:"contained",color:"primary",onClick:function(){return ce(o)}},"Accept")))},ke=function(e){var t=e.teamMembers;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.j,null,r.a.createElement(v.m,null,r.a.createElement(v.n,null,r.a.createElement(v.l,null,"Worker"),r.a.createElement(v.l,null,"Role ID"),r.a.createElement(v.l,{align:"right"},"Pay Rate"),r.a.createElement(v.l,{align:"right"},"Shares"),r.a.createElement(v.l,{align:"right"},"Role Accepted"))),r.a.createElement(v.k,null,t.map(function(e){return r.a.createElement(we,Object.assign({},e,{roleId:e.key}))}))))},Oe=function(e){var t=e.title,n=e.paragraphs;return r.a.createElement(v.c,null,r.a.createElement(v.d,null,r.a.createElement(v.r,{color:"textSecondary",gutterBottom:!0},t),r.a.createElement(v.r,{component:"p"},n.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e),r.a.createElement("br",null))}),r.a.createElement("br",null))))},je=function(){return r.a.createElement(Oe,{title:"Team",paragraphs:["Shows off team members of the organisation and what they do.","Only organisation account may add new team members."]})},xe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={teamMembers:[]},n.fetchWorkers=Object(h.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be(n.props.orgname);case 2:t=e.sent,console.log(t,"received on team"),n.setState({teamMembers:t});case 5:case"end":return e.stop()}},e)})),n.onSubmit=function(){var e=Object(h.a)(f.a.mark(function e(t){var a,r,c,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.worker,r=t.role,c=t.payrate,e.next=3,re(n.props.orgname,a,r,c);case 3:o=e.sent,console.log(o.transaction_id);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchWorkers()}},{key:"render",value:function(){this.props.orgname;return r.a.createElement(K,{content:r.a.createElement(ke,{teamMembers:this.state.teamMembers}),info:r.a.createElement(je,null),form:r.a.createElement(ye,{onSubmit:this.onSubmit})})}}]),t}(a.Component),Se=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(K,{content:"hello",info:"fwehufew",form:"fwefew"})}}]),t}(a.Component),Ce=(n(463),n(49)),Ae=n(217),Ne=n(76),_e=n.n(Ne),Te=n(62),Ie=n.n(Te),Be=n(64),Re=n.n(Be),Me=n(63),De=n.n(Me),Fe=n(212),He=n.n(Fe),We=n(211),qe=n.n(We),Je=function(e){var t=e.to,n=e.exact,a=e.strict,c=e.location,o=e.activeClassName,i=e.className,l=e.activeStyle,u=e.inactiveClassName,s=e.style,m=e.isActive,p=e.children,f=Object(Ae.a)(e,["to","exact","strict","location","activeClassName","className","activeStyle","inactiveClassName","style","isActive","children"]);return r.a.createElement(Ce.a,{path:"object"===typeof t?t.pathname:t,exact:n,strict:a,location:c},function(e){var n=e.location,a=e.match,c=!!(m?m(a,n):a),h="".concat(i||""," ").concat(c?o:u);return r.a.createElement(g.b,Object.assign({to:t,className:h,style:c?Object(Q.a)({},s,l):s},f),"function"===typeof p?p({isActive:c}):p)})},Ke=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={selectedIndex:1},n.handleListItemClick=function(e,t){n.setState({selectedIndex:t})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.match;return r.a.createElement("div",{className:t.root},r.a.createElement(_e.a,{component:"nav"},r.a.createElement(Je,{exact:!0,to:n.url},function(e){var t=e.isActive;return r.a.createElement(Ie.a,{button:!0,selected:t},r.a.createElement(Re.a,null,r.a.createElement(k.a,null)),r.a.createElement(De.a,{primary:"Home"}))}),r.a.createElement(Je,{exact:!0,to:"".concat(n.url,"/work-commits")},function(e){var t=e.isActive;return r.a.createElement(Ie.a,{button:!0,selected:t},r.a.createElement(Re.a,null,r.a.createElement(qe.a,null)),r.a.createElement(De.a,{primary:"Work Entries"}))}),r.a.createElement(Je,{exact:!0,to:"".concat(n.url,"/team")},function(e){var t=e.isActive;return r.a.createElement(Ie.a,{button:!0,selected:t},r.a.createElement(Re.a,null,r.a.createElement(He.a,null)),r.a.createElement(De.a,{primary:"Team"}))})))}}]),t}(r.a.Component),Le=Object(O.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}})(Ke);function Pe(){var e=Object(d.a)(["\n  grid-area: m;\n  line-height: 1.5;\n"]);return Pe=function(){return e},e}function Ve(){var e=Object(d.a)(["\n  justify-self: center;\n  align-self: center;\n  grid-area: h;\n  margin-top: 10px;\n"]);return Ve=function(){return e},e}function Ge(){var e=Object(d.a)(['\n  display: grid;\n  grid-template-columns: 2fr 2fr 8fr 2fr 2fr;\n  grid-template-areas:\n    ". . h . ."\n    ". m c i ."\n    ". m c f .";\n']);return Ge=function(){return e},e}var ze=b.a.div(Ge()),Ue=b.a.div(Ve()),Ye=b.a.div(Pe()),$e=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={friendlyName:n.props.match.params.orgname},n.fetchOrg=Object(h.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.a.get("http://localhost:3001/company/".concat(n.props.match.params.orgname)).then(function(e){return e.data});case 3:t=e.sent,a=t.friendlyname,n.setState({friendlyName:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])})),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchOrg()}},{key:"render",value:function(){var e=this.props.match.params.orgname,t=this.props.match;return r.a.createElement(ze,null,r.a.createElement(Ue,null,r.a.createElement(v.r,{variant:"h3"},this.state.friendlyName)),r.a.createElement(Ye,null,r.a.createElement(Le,{match:t})),r.a.createElement(Ce.a,{exact:!0,path:"".concat(t.url),component:Se}),r.a.createElement(Ce.a,{exact:!0,path:"".concat(t.url,"/work-commits"),render:function(t){return r.a.createElement(ve,{orgname:e})}}),r.a.createElement(Ce.a,{exact:!0,path:"".concat(t.url,"/team"),render:function(t){return r.a.createElement(xe,{orgname:e})}}))}}]),t}(a.Component),Qe=function(){return r.a.createElement(Oe,{title:"Organisation",paragraphs:["Displays a list of organisations based on Arbaro"]})},Xe=n(213),Ze=n.n(Xe),et=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.q,{title:"Create Organisation","aria-label":"Add"},r.a.createElement(v.e,{color:"primary"},r.a.createElement(Ze.a,{onClick:function(){return console.log("huifew")}}))),r.a.createElement(g.b,{to:"/new"},"New"))}}]),t}(a.Component),tt=function(e){var t=e.owner,n=e.friendlyname;return r.a.createElement("div",{style:{marginBottom:10}},r.a.createElement(g.b,{to:"/organisation/".concat(t)},r.a.createElement(v.h,{button:!0},r.a.createElement(v.i,{primary:n}))))},nt=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).triggerReset=Object(h.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:case"end":return e.stop()}},e)})),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.g,{component:"nav"},this.props.organisations.map(function(e){return r.a.createElement(tt,e)})))}}]),t}(a.Component),at=n(93),rt=n.n(at),ct=n(94),ot=n.n(ct),it=n(95),lt=n.n(it),ut=n(48),st=n.n(ut),mt=n(43),pt=n.n(mt),ft=function(e){var t=e.issuer,n=e.symbol,a=e.maxSupply,c=e.precision,o=e.handleChange;return r.a.createElement(v.f,null,r.a.createElement(v.o,{id:"standard-name",label:"Issuer",value:t,name:"issuer",onChange:o,margin:"normal"}),r.a.createElement(v.o,{id:"standard-name",label:"Symbol",placeholder:"CONT",value:n,name:"symbol",onChange:o,margin:"normal"}),r.a.createElement(v.o,{id:"standard-name",label:"Precision",value:c,name:"precision",onChange:o,margin:"normal"}),r.a.createElement(v.o,{id:"standard-name",label:"Max supply",value:a,name:"maxSupply",placeholder:"1000000",onChange:o,margin:"normal"}))},ht=function(e){var t=e.issuer,n=e.symbol,a=e.friendlyname,c=e.tokenCon,o=e.tokenVariablesKnown,i=e.handleChange;return r.a.createElement(v.f,null,!o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.o,{id:"standard-name",label:"Issuer",value:t,name:"issuer",onChange:i,margin:"normal"}),r.a.createElement(v.o,{id:"standard-name",label:"Symbol",value:n,name:"symbol",onChange:i,margin:"normal"}),r.a.createElement(v.o,{id:"standard-name",label:"Token Contract",value:c,name:"tokenContract",onChange:i,margin:"normal"})),r.a.createElement(v.o,{id:"standard-name",label:"Friendly Organisation Name",value:a,name:"friendlyName",onChange:i,margin:"normal"}))},dt=function(e){e.issuer,e.symbol,e.maxSupply,e.precision,e.handleChange;return r.a.createElement("p",null,"I will now grant @active permission to the Arbaro contract in order to grant minting rights.")};var bt=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={activeStep:0,skipped:new Set,issuer:"",symbol:"",maxSupply:"",precision:4,tokenCon:"arbtoken",friendlyName:"",tokenVariablesKnown:!1},n.getStepContent=function(e){switch(e){case 0:return r.a.createElement(ft,{issuer:n.state.issuer,symbol:n.state.symbol,maxSupply:n.state.maxSupply,precision:n.state.precision,handleChange:n.handleChange});case 1:return r.a.createElement(ht,{tokenCon:n.state.tokenCon,friendlyName:n.state.friendlyName,issuer:n.state.issuer,symbol:n.state.symbol,maxSupply:n.state.maxSupply,tokenVariablesKnown:n.state.tokenVariablesKnown,handleChange:n.handleChange});case 2:return r.a.createElement(dt,null);default:return"Unknown step"}},n.handleChange=function(e){n.setState(Object(P.a)({},e.target.name,e.target.value))},n.isStepOptional=function(e){return 0===e},n.handleNext=Object(h.a)(f.a.mark(function e(){var t,a,r,c,o,i,l,u,s,m,p;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.state,a=t.activeStep,r=t.issuer,c=t.maxSupply,o=t.symbol,i=t.tokenCon,l=t.friendlyName,u=t.precision,0!=a){e.next=8;break}return e.next=4,ee(r,o,c,u);case 4:e.sent,n.setState({tokenVariablesKnown:!0}),e.next=20;break;case 8:if(1!=a){e.next=15;break}return e.next=11,te(r,"".concat(u,",").concat(o),i,l);case 11:s=e.sent,console.log("made organisation",s.transaction_id),e.next=20;break;case 15:if(2!=a){e.next=20;break}return e.next=18,ne(r,"arbaro");case 18:m=e.sent,console.log("ressa",m);case 20:p=n.state.skipped,n.isStepSkipped(a)&&(p=new Set(p.values())).delete(a),n.setState({activeStep:a+1,skipped:p});case 23:case"end":return e.stop()}},e)})),n.createToken=Object(h.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)})),n.handleBack=function(){n.setState(function(e){return{activeStep:e.activeStep-1}})},n.handleSkip=function(){var e=n.state.activeStep;if(!n.isStepOptional(e))throw new Error("You can't skip a step that isn't optional.");n.setState(function(t){var n=new Set(t.skipped.values());return n.add(e),{activeStep:t.activeStep+1,skipped:n}})},n.handleReset=function(){n.setState({activeStep:0})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"isStepSkipped",value:function(e){return this.state.skipped.has(e)}},{key:"render",value:function(){var e=this,t=this.props.classes,n=["Create Token","Create Organisation","Grant Permission"],a=this.state.activeStep;return r.a.createElement("div",{className:t.root},r.a.createElement(rt.a,{activeStep:a},n.map(function(t,n){var a={},c={};return e.isStepOptional(n)&&(c.optional=r.a.createElement(pt.a,{variant:"caption"},"Optional")),e.isStepSkipped(n)&&(a.completed=!1),r.a.createElement(ot.a,Object.assign({key:t},a),r.a.createElement(lt.a,c,t))})),r.a.createElement("div",null,a===n.length?r.a.createElement("div",null,r.a.createElement(pt.a,{className:t.instructions},"All steps completed - you're finished"),r.a.createElement(st.a,{onClick:this.handleReset,className:t.button},"Reset")):r.a.createElement("div",null,r.a.createElement(pt.a,{className:t.instructions},this.getStepContent(a)),r.a.createElement("div",null,r.a.createElement(st.a,{disabled:0===a,onClick:this.handleBack,className:t.button},"Back"),this.isStepOptional(a)&&r.a.createElement(st.a,{variant:"contained",color:"primary",onClick:this.handleSkip,className:t.button},"Skip"),r.a.createElement(st.a,{variant:"contained",color:"primary",onClick:this.handleNext,className:t.button},a===n.length-1?"Finish":"Next")))))}}]),t}(r.a.Component),gt=Object(O.withStyles)(function(e){return{root:{width:"90%",marginLeft:"auto",marginRight:"auto"},button:{marginRight:e.spacing.unit},instructions:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit}}})(bt),vt=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={orgs:[]},n.fetchOrgs=Object(h.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de().then(function(e){return e.map(function(e){console.log(e);var t=ie.a.utc(e.blockTime).local();return Object(Q.a)({},e,{blockTime:t.fromNow()})})});case 2:t=e.sent,console.log("received",t),n.setState({orgs:t});case 5:case"end":return e.stop()}},e)})),n.formSubmit=function(){var e=Object(h.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t,"received");case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchOrgs()}},{key:"render",value:function(){var e=this.props.match;return console.log(this.props,"was props"),console.log("".concat(e.url,"/new")),r.a.createElement(F,null,r.a.createElement(H,null,r.a.createElement(v.r,{variant:"h3"},"Organisation Browser")),r.a.createElement(K,{content:r.a.createElement(nt,{organisations:this.state.orgs}),info:r.a.createElement(Qe,null),form:r.a.createElement(et,{onSubmit:this.formSubmit})}),r.a.createElement(Ce.a,{path:"/new",render:function(e){return r.a.createElement(gt,null)}}))}}]),t}(a.Component),Et=(n(472),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(T,null),r.a.createElement(Ce.a,{exact:!0,path:"/",component:vt}),r.a.createElement(Ce.a,{exact:!0,path:"/new",component:gt}),r.a.createElement(Ce.a,{path:"/organisation/:orgname",component:$e}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var yt=n(41),wt=n.n(yt),kt=n(214),Ot=n.n(kt),jt="https",xt="eos.greymass.com",St="443",Ct="aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",At="".concat(jt,"://").concat(xt,":").concat(St),Nt={blockchain:"eos",protocol:jt,host:xt,port:St,chainId:Ct},_t=function(e){function t(){var e;Object(i.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).login=Object(h.a)(f.a.mark(function t(){var n,a=arguments;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:{accounts:[Nt]},t.prev=1,t.next=4,wt.a.scatter.getIdentity(n);case 4:return e.account=wt.a.scatter.identity.accounts.find(function(e){return"eos"===e.blockchain}),e.eos=wt.a.scatter.eos(Nt,se.Api,{rpc:new se.JsonRpc(At),beta3:!0}),t.abrupt("return",e.account);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}},t,null,[[1,9]])})),e.getTable=function(){var t=Object(h.a)(f.a.mark(function t(n){var a,r=arguments;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:e.contractAccount,t.abrupt("return",e.rpc.get_table_rows({json:!0,code:e.contractAccount,scope:a,table:n,lower_bound:0,upper_bound:-1,limit:9999,index_position:1}));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.logout=function(){return wt.a.scatter.logout()},e.sign=Object(h.a)(f.a.mark(function t(){var n,a,r,c,o,i,l,u,s,m;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.account,"was account"),t.next=3,e.rpc.get_info();case 3:return n=t.sent,a=n.last_irreversible_block_id,r=n.last_irreversible_block_num,c=a.slice(-12),o=e.account,i=o.publicKey,l=o.name,u=o.authority,s="".concat(l," would like to login using the ").concat(u," permission. Block ID: ").concat(r," ").concat(c),t.next=11,wt.a.scatter.getArbitrarySignature(i,s);case 11:return m=t.sent,t.abrupt("return",{message:s,signature:m});case 13:case"end":return t.stop()}},t)})),e.getInfo=Object(h.a)(f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.rpc),t.abrupt("return",e.rpc.get_info());case 2:case"end":return t.stop()}},t)})),e.transaction=function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.contractAccount;return console.log({action:t,data:n,account:e.contractAccount,actor:{actor:e.account.name,permission:e.account.authority}}),e.eos.transact({actions:[{account:a,name:t,authorization:[{actor:e.account.name,permission:e.account.authority}],data:Object(Q.a)({},n)}]},{blocksBehind:3,expireSeconds:30})};e.contractAccount="labelaarbaro",e.rpc=new se.JsonRpc(At),console.log({protocol:jt,host:xt,port:St,chainId:Ct,endpoint:At}),wt.a.plugins(new Ot.a);try{wt.a.scatter.connect("Arbaro").then(function(t){return t?(window.ScatterJS=null,e.login()):console.log("Issue Connecting")})}catch(n){console.log(n)}return e}return Object(m.a)(t,e),t}(r.a.Component);n.d(t,"eos",function(){return Tt});var Tt=new _t;o.a.render(r.a.createElement(Et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[279,1,2]]]);
//# sourceMappingURL=main.137d0b7d.chunk.js.map