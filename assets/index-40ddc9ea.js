import{d as _,a as k,h as x,e as i,w as o,u as r,i as u,F as C,r as c,o as w,f as p,g,E as d}from"./index-4845ed14.js";const q=g("div",{style:{"font-size":"12px",color:"#ccc"}}," jpg/png files with a size less than 500KB. ",-1),B={class:"dialog-footer"},F=_({__name:"index",setup(D){let a=k(!1),m=()=>{a.value=!0},b=[{type:"input",value:"",label:"用户名",prop:"username",rules:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:6,message:"用户名在2-6位之间",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",value:"",label:"密码",prop:"password",rules:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:16,message:"密码在6-15位之间",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",placholder:"请选择职位",prop:"role",label:"职位",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"职位不能为空",trigger:"change"}],children:[{type:"option",label:"经理",value:"1"},{type:"option",label:"主管",value:"2"},{type:"option",label:"员工",value:"3"}]},{type:"checkbox-group",value:[],prop:"like",label:"爱好",rules:[{required:!0,message:"爱好不能为空",trigger:"change"}],children:[{type:"checkbox",label:"足球",value:"1"},{type:"checkbox",label:"篮球",value:"2"},{type:"checkbox",label:"排球",value:"3"}]},{type:"radio-group",value:"",prop:"gender",label:"性别",rules:[{required:!0,message:"性别不能为空",trigger:"change"}],children:[{type:"radio",label:"男",value:"male"},{type:"radio",label:"女",value:"female"},{type:"radio",label:"保密",value:"not"}]},{type:"upload",label:"上传",prop:"pic",rules:[],uploadAttrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:!0,limit:3}},{type:"editor",label:"描述",prop:"desc",rules:[{required:!0,message:"描述不能为空",trigger:"blur"}]}],f=t=>{let{file:e,fileList:l}=t;console.log("handleChange",e,l)},h=t=>{let{response:e,file:l,fileList:s}=t;console.log("val: ",t),console.log("handleSuccess",e,l,s)},v=t=>{console.log("form: ",t);let e=t.validate(),l=t.getFormData();e(s=>{s?(d.success("校验成功"),console.log("formData: ",l)):d.error("校验失败")})};return(t,e)=>{const l=c("el-button"),s=c("m-model-form");return w(),x(C,null,[i(l,{type:"primary",onClick:r(m)},{default:o(()=>[p("打开")]),_:1},8,["onClick"]),i(s,{isScroll:"",title:"编辑用户",visible:r(a),"onUpdate:visible":e[1]||(e[1]=n=>u(a)?a.value=n:a=n),options:r(b),width:700,"on-change":r(f),"on-success":r(h)},{uploadArea:o(()=>[i(l,{type:"primary"},{default:o(()=>[p("点击")]),_:1})]),uploadTip:o(()=>[q]),footer:o(({form:n})=>[g("span",B,[i(l,{onClick:e[0]||(e[0]=y=>u(a)?a.value=!1:a=!1)},{default:o(()=>[p("取消")]),_:1}),i(l,{type:"primary",onClick:y=>r(v)(n)},{default:o(()=>[p(" 确定 ")]),_:2},1032,["onClick"])])]),_:1},8,["visible","options","on-change","on-success"])],64)}}});export{F as default};
