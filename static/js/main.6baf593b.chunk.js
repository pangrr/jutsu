(this["webpackJsonpjutsu-example"]=this["webpackJsonpjutsu-example"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),o=n.n(i),s=(n(11),n(2)),l=n(1),c=n.n(l),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){r=!0,i=l}finally{try{!a&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"meet.jit.si",n=Object(a.useState)(null),r=m(n,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){return window.JitsiMeetExternalAPI?(e.parentNode=document.getElementById(e.parentNode),o(new JitsiMeetExternalAPI(t,e))):o({error:"JitsiMeetExternalAPI is not available, check if https://meet.jit.si/external_api.js was loaded"}),function(){return i&&i.dispose()}}),[]),i};p.propTypes={options:c.a.shape({roomName:c.a.string.isRequired,width:c.a.string,height:c.a.string,parentNode:c.a.string,configOverwrite:c.a.string,interfaceConfigOverwrite:c.a.object,noSSL:c.a.bool,jwt:c.a.string,onload:c.a.func,invitees:c.a.array,devices:c.a.object,userInfo:c.a.object}),domain:c.a.string};var d=function(e){var t=e.roomName,n=e.displayName,i=e.password,o=e.subject,s=e.loadingComponent,l=e.containerStyles,c=e.jitsiContainerStyles,d=Object(a.useState)(!0),f=m(d,2),h=f[0],b=f[1],j=p({roomName:t,parentNode:"jitsi-container"}),g={display:h?"none":"block",width:"100%",height:"100%"};return Object(a.useEffect)((function(){return j&&(j.addEventListener("videoConferenceJoined",(function(){i&&j.executeCommand("password",i),j.executeCommand("displayName",n),j.executeCommand("subject",o)})),b(!1)),function(){return j&&j.dispose()}}),[j]),r.a.createElement("div",{style:u({},{width:"800px",height:"400px"},l)},h&&(s||r.a.createElement("p",null,"Loading ...")),r.a.createElement("div",{id:"jitsi-container",style:u({},g,c)}))};d.propTypes={roomName:c.a.string.isRequired,displayName:c.a.string,password:c.a.string,subject:c.a.string,loadingComponent:c.a.object,containerStyles:c.a.object,jitsiContainerStyles:c.a.object};var f=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),c=l[0],u=l[1],m=Object(a.useState)(!1),p=Object(s.a)(m,2),f=p[0],h=p[1],b=Object(a.useState)(""),j=Object(s.a)(b,2),g=j[0],y=j[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"<Jutsu /> Demo !"),r.a.createElement("blockquote",null,"View the ",r.a.createElement("a",{href:"https://github.com/this-fifo/jutsu"},"source")," for Jutsu and check ",r.a.createElement("a",{href:"https://github.com/jitsi/jitsi-meet/blob/master/doc/api.md"},"jitsi-meet")," for the Jitsi Meet API"),f?r.a.createElement(d,{roomName:n,password:g,displayName:c,loadingComponent:r.a.createElement("p",null,"\u0295 \u2022\u1d25\u2022\u0294 jitsi is loading ...")}):r.a.createElement("form",null,r.a.createElement("input",{id:"room",type:"text",placeholder:"Room",value:n,onChange:function(e){return i(e.target.value)}}),r.a.createElement("input",{id:"name",type:"text",placeholder:"Name",value:c,onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{id:"password",type:"text",placeholder:"Password (optional)",value:g,onChange:function(e){return y(e.target.value)}}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),n&&c&&h(!0)},type:"submit"},"Start / Join")),r.a.createElement("p",null,"Made with ",r.a.createElement("span",{role:"img","aria-label":"coffee"},"\u2615")," by ",r.a.createElement("a",{href:"https://github.com/this-fifo"},"Filipe Herculano")),r.a.createElement("small",null,r.a.createElement("i",null,"Note: works only on a desktop browser for now, checkout ",r.a.createElement("a",{href:"https://github.com/jitsi/jitsi-meet/pull/3518"},"this PR")," for more information")))};o.a.render(r.a.createElement(f,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.6baf593b.chunk.js.map