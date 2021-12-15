!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var a="object"==typeof exports?t(require("react")):t(e.React);for(var l in a)("object"==typeof exports?exports:e)[l]=a[l]}}(this,(function(e){return(()=>{"use strict";var t={686:(e,t,a)=>{a.r(t)},530:function(e,t,a){var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const s=n(a(359)),d=a(555);a(686);let i="",c="";function u(e){let t=e.selDay?.from.Format("yyyy-M-d"),a=e.selDay?.to.Format("yyyy-M-d");const[l,r]=(0,s.useState)(),[n,u]=(0,s.useState)();(0,s.useEffect)((()=>{r(t),u(a)}),[t,a]);const{calendarRef:o}=e,[f,m]=(0,s.useState)(e.showCalendar);(0,s.useEffect)((()=>{m(e.showCalendar)}),[e.showCalendar]);const[y,g]=(0,s.useState)([]);(0,s.useEffect)((()=>{const e=new Date;let t=[];for(let a=0;a<12;a++){let a=e.getMonth()+1,l=e.getFullYear();e.setMonth(a,1);let r=`${l}-${a}`;t.push(r)}g(t)}),[]);const[p,b]=(0,s.useState)(0);let h=document.documentElement||document.body;(0,s.useEffect)((()=>{b(h.clientHeight-72)}),[h.clientHeight]);const[D,E]=(0,s.useState)("");(0,s.useEffect)((()=>{e.selDay||e.curDay&&E(e.curDay.Format("yyyy-M-d"))}),[e.curDay,e.selDay]),(0,s.useImperativeHandle)(o,(()=>({getSelDateArr:()=>({startDay:l,endDay:n,fromWeek:i,toWeek:c})})));const v=e=>{if(e.currentTarget.classList.contains("disable-day"))return;let t=document.querySelectorAll(".calendar-slide-in .range");if(t.length>0&&t[0].getAttribute("data-day")===e.currentTarget.getAttribute("data-day"))return;const a=t.length;w(a,e.currentTarget)},w=(t,a)=>{let l=document.querySelectorAll(".calendar-slide-in .range");switch(t){case 0:a.classList.add("range"),r(a.getAttribute("data-day")),i=a.getAttribute("data-week");break;case 1:if(a.classList.add("range"),new Date(l[0].getAttribute("data-day")).getTime()>new Date(a.getAttribute("data-day")).getTime()){A(a);break}setTimeout((()=>{u(a.getAttribute("data-day")),console.log(a.getAttribute("data-day")),c=a.getAttribute("data-week");let t=document.querySelectorAll("li[data-day]");for(let e=Array.from(t).findIndex((e=>e.getAttribute("data-day")===l[0].getAttribute("data-day")))+1;e<t.length&&!t[e].classList.contains("range");e++)t[e].classList.add("selected");e.closeCalendar()}),0);break;case 2:A(a);break;default:console.log(`日历逻辑出现了问题，当前的选中dom节点为：${t}`)}},A=e=>{document.querySelectorAll(".calendar-slide-in .range").forEach((e=>{e.classList.remove("range")})),document.querySelectorAll(".selected").forEach((e=>{e.classList.remove("selected")})),r(""),u(""),r(e.getAttribute("data-day")),i=e.getAttribute("data-week"),e.classList.add("range")};let S=!1,$=!1;const _=l=>e.selDay?t===l?($=!0,"range"):a===l?(S=!0,"range"):$?S?"":"selected":"":e.curDay?D===l?"range":"":void 0,k=t=>{if(e.disableDay?.from&&!e.disableDay?.to){let a=e.disableDay?.from.getTime();if(a<=new Date(t).getTime())return!0}else if(!e.disableDay?.from&&e.disableDay?.to){let a=e.disableDay?.to.getTime();if(a>=new Date(t).getTime())return!0}else if(e.disableDay?.from&&e.disableDay?.to){let a=e.disableDay?.from.getTime(),l=e.disableDay?.to.getTime(),r=new Date(t).getTime();if(l>=r&&a<=r)return!0}return!1};return"firstLoad"===f?s.default.createElement("span",null):s.default.createElement("div",{className:f?"calendar-slide-in":"calendar-slide-out"},s.default.createElement("div",{className:"cal-header"},s.default.createElement("div",{className:"bar"},s.default.createElement("span",{className:"cancel",onClick:()=>{e.closeCalendar()}},"取消"),s.default.createElement("span",{className:"title"},"选择日历")),s.default.createElement("ul",{className:"week"},s.default.createElement("li",null,"一"),s.default.createElement("li",null,"二"),s.default.createElement("li",null,"三"),s.default.createElement("li",null,"四"),s.default.createElement("li",null,"五"),s.default.createElement("li",null,"六"),s.default.createElement("li",null,"日"))),s.default.createElement("div",{className:"cal"},s.default.createElement("div",{style:{height:p,paddingTop:72}},s.default.createElement("section",{className:"cal-body"},y.map(((e,t)=>{let a=parseInt(e.split("-")[0]),r=parseInt(e.split("-")[1]),i=new Date(a,r,0).getDate(),c=[],u=new Date(a,r-1,1).getDay()||7;i+=u;let o=!1;for(let e=1;e<i;e++)u===e||o?(o=!0,c.push(e-u+1)):c.push(-1);return s.default.createElement("div",{key:t},s.default.createElement("h4",{className:"cal-body-month"},`${e.replace("-","年")}月`),s.default.createElement("ul",{className:"cal-body-grid"},c.map(((t,a)=>-1===t?s.default.createElement("li",{key:a}):s.default.createElement("li",{className:`${_(`${e}-${t}`)} ${k(`${e}-${t}`)?"disable-day":""}`,"data-day":`${e}-${t}`,"data-week":(0,d.getWeek)(`${e}-${t}`),onClick:v,key:a},s.default.createElement("span",null,t),s.default.createElement("span",null,(e=>e===D?"今天":l===e?"入住":n===e?"离店":void 0)(`${e}-${t}`)))))))}))))))}const o=s.default.forwardRef(((e,t)=>s.default.createElement(u,{...e,calendarRef:t})));t.default=s.default.memo(o)},607:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Calendar=void 0;const r=l(a(530));t.Calendar=r.default},555:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.duplicateRemovalByObjArr=t.duplicateRemoval=t.swapArray=t.getDayByNum=t.getWeek=void 0,Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var a in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?t[a]:("00"+t[a]).substr((""+t[a]).length)));return e},t.getWeek=e=>["周日","周一","周二","周三","周四","周五","周六"][new Date(e).getDay()],t.getDayByNum=(e,t)=>new Date(e.getTime()+24*t*60*60*1e3),t.swapArray=(e,t,a)=>(e[t]=e.splice(a,1,e[t])[0],e),t.duplicateRemoval=e=>e.reduce(((e,t)=>e.includes(t)?e:e.concat(t)),[]),t.duplicateRemovalByObjArr=(e,t)=>e.reduce(((e,a)=>(e.length>0&&e.filter((e=>e[t]===a[t])).length>0||e.push(a),e)),[]),t.default={Date}},359:t=>{t.exports=e}},a={};function l(e){var r=a[e];if(void 0!==r)return r.exports;var n=a[e]={exports:{}};return t[e].call(n.exports,n,n.exports,l),n.exports}return l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(607)})()}));