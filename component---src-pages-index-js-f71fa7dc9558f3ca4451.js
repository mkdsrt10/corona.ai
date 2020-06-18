(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2hOx":function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=(a("ejaL"),a("qKIE"),a("Wbzz")),i=a("xpnF"),s=a.n(i),o=a("AL3R"),c=a("v4IS"),m=a("rzrB");o.default.configure(m.a);var p=a("H/qo"),u=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).onPassEnter=function(e){var t;a.setState(((t={})[e.target.id]=e.target.value,t)),console.log(e.target.value)},a.onEmailEnter=function(e){var t;a.setState(((t={})[e.target.id]=e.target.value.toLowerCase(),t)),console.log(e.target.value)},a.SignIn=function(){var e=a.state.email,t=a.state.pass;c.a.signIn({username:e,password:t}).then((function(e){a.setState({isSignedIn:!0}),Object(l.navigate)("/dashboard",{state:{clientId:e.pool.clientId,email:a.state.email}})})).catch((function(e){a.setState({error:e.message}),console.log(e)}))},a.CheckBox=function(){var e=a.state.remember;a.setState({remember:!e})},a.state={email:"",pass:"",error:"",isSignedIn:!1,remember:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){"undefined"!=typeof window&&(this.setState({email:windowGlobal.localStorage.getItem("email")}),this.setState({pass:windowGlobal.localStorage.getItem("pass")}))},i.render=function(){var e=this;this.state.remember&&"undefined"!=typeof window&&(windowGlobal.localStorage.setItem("email",this.state.email),windowGlobal.localStorage.setItem("pass",this.state.pass));return r.a.createElement("div",{className:"w-100 shadow-3 tc bg-white ba b--light-gray Avenir",style:{margin:"auto",height:"850px","min-width":"750px"}},r.a.createElement("h1",{className:"f1 mt5",style:{color:"rgb(127,90,179)"}},"CORONA.AI"),r.a.createElement("p",{className:"f3 gray mt4 mb5"},"Please Sign In or Create an Account"),r.a.createElement("div",{className:"tl",style:{fontSize:24,padding:"20px 20px","border-radius":"15px",width:"75%","margin-top":"20px",margin:"auto"}},r.a.createElement(s.a,{id:"email",label:"Email ID",placeholder:"",value:this.state.email,onChange:this.onEmailEnter})),r.a.createElement("div",{className:"tl",style:{fontSize:24,padding:"20px 20px","border-radius":"15px",width:"75%","margin-top":"20px",margin:"auto"}},r.a.createElement(s.a,{id:"pass",label:"Password",placeholder:"",value:this.state.pass,type:"password",onChange:this.onPassEnter})),r.a.createElement("p",{className:"f5 b red"},this.state.error),r.a.createElement("br",null),r.a.createElement("div",{className:"w-100 mb5 f4 Avenir"},r.a.createElement("input",{type:"checkbox",onClick:function(){return e.CheckBox()},name:"remember",className:"pointer dib"}),r.a.createElement("p",{className:"f4 dib ml2 mr5"},"Remember me "),r.a.createElement("p",{onClick:function(){return Object(l.navigate)("/forgot-password")},className:"f4 black underline-hover pointer dib ml5"},"Forgot password?")),r.a.createElement("p",{onClick:function(){"email"===e.state.email||""===e.state.email||""===e.state.pass||"pass"===e.state.pass?e.setState({error:"Please fill in all the details!"}):!0!==p.validate(e.state.email)?e.setState({error:"Email format incorrect."}):e.SignIn()},class:"f4 tc no-underline black bg-animate hover-bg-purple hover-white inline-flex pointer mb3 items-center pa3 ba border-box mr5",style:{"margin-left":"auto"}},r.a.createElement("span",{class:"pr1"}," Sign In ")),r.a.createElement("p",{onClick:function(){return Object(l.navigate)("/register")},class:"f4 tc no-underline black bg-animate hover-bg-purple hover-white inline-flex pointer mb3 items-center pa3 ba border-box ml5"},r.a.createElement("span",{class:"pr1"}," Sign Up ")),r.a.createElement("br",null),r.a.createElement("p",{class:"f4 tc no-underline bg-animate bg-light-purple light-gray inline-flex pointer mb3 items-center grow mt4 bg-white black pa3",style:{"margin-left":"auto"}},r.a.createElement("span",{class:"pr1"}," Invite Others ")))},n}(r.a.Component),d=function(e){e.isSignedIn;var t=e.signIn;return r.a.createElement("div",null,r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"tl",style:{"min-width":"600px","max-width":"800px","margin-left":"30px"}},r.a.createElement("h1",{className:"f1 purple Avenir"},"You can make a difference and help defeat Corona"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"f2 purple b"},"What do we do?"),r.a.createElement("p",{className:"f4 dark-gray"},"Corona.ai is a website that helps people around the world use their symptoms, geographical location and physical conditions to figure out their likelihood of having Coronavirus and how at risk they are"),r.a.createElement("br",null),r.a.createElement("p",{className:"f3 purple b"},"We use simple measures that you can provide from your home to provide you comprehensive measures "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"f2 purple b"},"Steps"),r.a.createElement("div",{class:"tl flex-box"},r.a.createElement("p",{className:"f4 mr0"},"1. Sign in and create an account"),r.a.createElement("p",{className:"f4 ml0"},"2. Enter your symptoms & medical details"),r.a.createElement("p",{className:"f4"},"3. Let our algorithm calculate and predict how at risk you are"),r.a.createElement("p",{className:"f4"},"4. Find out the next steps and continue to monitor your situation"))),r.a.createElement("div",{className:"fl tc",style:{"min-width":"600px",margin:"auto"}},r.a.createElement(u,{signIn:t}))))};a("2hOx");o.default.configure(m.a);var g=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).signIn=function(){t.setState({isSignedIn:!0})},t.state={isSignedIn:!1},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return this.state.isSignedIn&&Object(l.navigate)("/dashboard"),r.a.createElement(d,{isSignedIn:this.state.isSignedIn,signIn:this.signIn})},n}(r.a.Component);t.default=g},ejaL:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-f71fa7dc9558f3ca4451.js.map