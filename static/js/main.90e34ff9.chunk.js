(this["webpackJsonpjutsu-example"]=this["webpackJsonpjutsu-example"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=(n(11),n(2)),l=n(1),c=n.n(l),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(l){r=!0,o=l}finally{try{!a&&s.return&&s.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"meet.jit.si",n=Object(a.useState)(null),r=d(n,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){return window.JitsiMeetExternalAPI?(e.parentNode=document.getElementById(e.parentNode),i(new JitsiMeetExternalAPI(t,e))):i({error:"JitsiMeetExternalAPI is not available, check if https://meet.jit.si/external_api.js was loaded"}),function(){return o&&o.dispose()}}),[]),o};m.propTypes={options:c.a.shape({roomName:c.a.string.isRequired,width:c.a.string,height:c.a.string,parentNode:c.a.string,configOverwrite:c.a.string,interfaceConfigOverwrite:c.a.object,noSSL:c.a.bool,jwt:c.a.string,onload:c.a.func,invitees:c.a.array,devices:c.a.object,userInfo:c.a.object}),domain:c.a.string};var p=function(e){var t=e.domain,n=e.roomName,o=e.displayName,i=e.password,s=e.jwt,l=void 0===s?null:s,c=e.subject,p=e.loadingComponent,f=e.containerStyles,h=e.jitsiContainerStyles,g=e.onMeetingEnd,b=Object(a.useState)(!0),j=d(b,2),E=j[0],v=j[1],y=m({roomName:n,parentNode:"jitsi-container",jwt:l},t),w={display:E?"none":"block",width:"100%",height:"100%"};return Object(a.useEffect)((function(){return y&&(v(!1),y.executeCommand("subject",c),y.addEventListener("videoConferenceJoined",(function(){i&&y.executeCommand("password",i),y.executeCommand("displayName",o)})),y.addEventListener("passwordRequired",(function(){i&&y.executeCommand("password",i)})),g&&y.addEventListener("readyToClose",g)),function(){return y&&y.dispose()}}),[y]),r.a.createElement("div",{style:u({},{width:"800px",height:"400px"},f)},E&&(p||r.a.createElement("p",null,"Loading ...")),r.a.createElement("div",{id:"jitsi-container",style:u({},w,h)}))};p.propTypes={jwt:c.a.string,domain:c.a.string,subject:c.a.string,password:c.a.string,roomName:c.a.string.isRequired,displayName:c.a.string,onMeetingEnd:c.a.func,loadingComponent:c.a.object,containerStyles:c.a.object,jitsiContainerStyles:c.a.object};var f=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),c=l[0],u=l[1],d=Object(a.useState)(!1),m=Object(s.a)(d,2),f=m[0],h=m[1],g=Object(a.useState)(""),b=Object(s.a)(g,2),j=b[0],E=b[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"<Jutsu /> Demo !"),r.a.createElement("blockquote",null,"View the ",r.a.createElement("a",{href:"https://github.com/this-fifo/jutsu"},"source")," for Jutsu and check ",r.a.createElement("a",{href:"https://github.com/jitsi/jitsi-meet/blob/master/doc/api.md"},"jitsi-meet")," for the Jitsi Meet API"),f?r.a.createElement(p,{roomName:n,password:j,displayName:c,onMeetingEnd:function(){return console.log("Meeting has ended")},loadingComponent:r.a.createElement("p",null,"\u0295 \u2022\u1d25\u2022\u0294 jitsi is loading ...")}):r.a.createElement("form",null,r.a.createElement("input",{id:"room",type:"text",placeholder:"Room",value:n,onChange:function(e){return o(e.target.value)}}),r.a.createElement("input",{id:"name",type:"text",placeholder:"Name",value:c,onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{id:"password",type:"text",placeholder:"Password (optional)",value:j,onChange:function(e){return E(e.target.value)}}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),n&&c&&h(!0)},type:"submit"},"Start / Join")),r.a.createElement("p",null,"Made with ",r.a.createElement("span",{role:"img","aria-label":"coffee"},"\u2615")," by ",r.a.createElement("a",{href:"https://github.com/this-fifo"},"Filipe Herculano")),r.a.createElement("small",null,r.a.createElement("i",null,"Note: works only on a desktop browser for now, checkout ",r.a.createElement("a",{href:"https://github.com/jitsi/jitsi-meet/pull/3518"},"this PR")," for more information")))};i.a.render(r.a.createElement(f,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.90e34ff9.chunk.js.map