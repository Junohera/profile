(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/profile.ed7f47bf.JPG"},18:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),i=(a(24),a(5)),o=a(6),m=a(8),u=a(7),s=a(9),d=a(36),E=a(38),f=a(35),p=a(12),v={CONFIG:{GH_PAGES:!0},APP:{PATH:{root_ghPages:"/profile",root:"",home:"/",expearience:"/expearience"}},HOME:{numberMap:["1994-11-10","2018-01-05","2018-08-15"]}},b=v,h=function(e){var t,a;t=v.CONFIG.GH_PAGES?"root_ghPages":"root",a=e.toLocaleLowerCase();var n=Object(p.a)({},v.APP.PATH),r=n[t]+n[a];return console.log("path => ",r),r},y=a(15),j=a.n(y),O=(a(26),{numberAnimation:function(e,t,a){!function n(){setTimeout(function(){if(t-e===0)return!1;100<t-e&&(e+=100),10<t-e&&(e+=10),1<=t-e&&e++,e<=t&&(document.getElementById(a).innerHTML=e,n())},10)}()}});function g(e){var t=e.name,a=e.day,n=e.index,c="numberAni".concat(n);return r.a.createElement("li",null,r.a.createElement("p",{id:c},O.numberAnimation(0,a,c)),r.a.createElement("p",null,t))}var w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={dayList:[{id:0,name:"age",day:0},{id:1,name:"devAge",day:0},{id:2,name:"tooth",day:0}]},a._renderDayList=function(){return a.state.dayList.map(function(e,t){return r.a.createElement(g,{key:t,index:e.id,name:e.name,day:e.day})})},a.computeAge=function(e){var t=e.numberMap,n=a.state.dayList;a.setState({dayList:n.map(function(e){return Object(p.a)({},e,{day:function(){var a=(new Date).getTime()-new Date(t[e.id]).getTime();return Math.ceil(a/864e5)}()})})})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.computeAge(b.HOME)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"Profile_triangle"},r.a.createElement("div",{className:"shape"})),r.a.createElement("div",{className:"Profile"},r.a.createElement("div",{className:"Profile_left"},r.a.createElement("div",null),r.a.createElement("img",{src:j.a})),r.a.createElement("div",{className:"Profile_center"},r.a.createElement("h1",null,r.a.createElement("span",null,"Juno"),"'s profile")),r.a.createElement("div",{className:"Profile_right"},r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,this._renderDayList()),r.a.createElement("p",null,"ABOUT"),r.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694 26\uc0b4 \uac1c\ubc1c\uc790 \uc8fc\ub178\uc785\ub2c8\ub2e4.",r.a.createElement("br",null),"\uc774 \ud398\uc774\uc9c0\ub294 \uac1c\ubc1c\uc790\uc778 \uc800\ub97c \uc18c\uac1c\ud558\ub294 \ub3d9\uc2dc\uc5d0 \uc800\uc758 \uac1c\uc778 \ud504\ub85c\ud544\ud398\uc774\uc9c0\uc785\ub2c8\ub2e4.",r.a.createElement("br",null),"\uac15\uc758, \ucee4\ubba4\ub2c8\ud2f0, \ucee8\ud37c\ub7f0\uc2a4 \ub4f1\uacfc \uac19\uc774, \ucc44\uc6a9 \ubaa9\uc801\uc774 \uc544\ub2c8\ub354\ub77c\ub3c4",r.a.createElement("br",null),"\uc790\uc720\ub86d\uac8c \ub458\ub7ec\ubcf4\uc2dc\uace0, \uacf5\uac1c\ub41c \uc815\ubcf4\ub85c \uc5f0\ub77d\uc744 \ucde8\ud558\uc154\ub3c4 \ubb34\ubc29\ud569\ub2c8\ub2e4.",r.a.createElement("br",null),"\uc5b4\ucc28\ud53c \ub2f5\uc7a5\uc740 \uc800\uc758 \ubaab\uc774\ub2c8\uae4c\uc694 ^-^...;;",r.a.createElement("br",null))),r.a.createElement("div",{className:"dim"}),r.a.createElement("div",{className:"border"}))))}}]),t}(r.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Expeariencedslfjldsjfljdkfljflsjkl")}}]),t}(n.Component),P=function(){return r.a.createElement("div",null,"404 - not Found")},A=a(37),x=(a(29),function(){return r.a.createElement("div",{className:"header"},r.a.createElement(A.a,{exact:!0,to:h("Home"),className:"item",activeClassName:"active"},"\ud648"),r.a.createElement(A.a,{to:h("Expearience"),className:"item",activeClassName:"active"},"expearience"))}),k=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(f.a,{exact:!0,path:h("Home"),component:w}),r.a.createElement(f.a,{path:h("Expearience"),component:N}),r.a.createElement(f.a,{component:P})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.12da3fc4.chunk.js.map