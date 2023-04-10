import{d,a as v,c as p,u as n,r as m,o as u}from"./index-4845ed14.js";const k=d({__name:"index",setup(C){let l=v([{title:"购物",start:"2023-4-11 08:00",end:"2023-4-11 09:00",editTable:!0},{title:"敲代码",start:"2023-4-4 08:00",end:"2023-4-4 09:00"}]),o=e=>{l.value.push({start:e.dateStr+" 12:00",end:e.dateStr+" 18:00",title:"学习"}),console.log("events.value: ",l.value)},r=e=>{console.log("EventClickArginfo: ",e)},c=e=>{console.log("arg: ",e);let a=document.createElement("div"),t=e.timeText.split("-"),i=t[0].replace("上午","").replace("下午","").replace("时",""),s=t[1].replace("上午","").replace("下午","").replace("时","");return a.innerHTML=`
          <div>开始时间:${i}</div>
          <div>结束时间:${s}</div>
          <div>标题:${e.event._def.title}</div>
          `,{domNodes:[a]}};return(e,a)=>{const t=m("m-calendar");return u(),p(t,{events:n(l),eventContent:n(c),displayEventEnd:"",onDateClick:n(o),onEventClick:n(r)},null,8,["events","eventContent","onDateClick","onEventClick"])}}});export{k as default};
