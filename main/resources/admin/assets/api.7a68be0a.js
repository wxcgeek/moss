import{_ as D}from"./MakeRandString.7ddf4101.js";import{u as R,j,k as e,y as z}from"./index.15bdf724.js";import{c as u,j as a,k as p,p as P,F as N,Q as F,l as _,m as l,n as w,v as i,y as O,z as h,$ as r,s as I,i as U}from"./@vue.0987707a.js";import"./vue-router.0ed66d6f.js";import"./vue-i18n.e3137642.js";import"./@intlify.bed9fa1a.js";import"./source-map.205bdfab.js";import"./vue.5c5bb0aa.js";import"./@arco-design.370b0a2d.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.17358474.js";import"./b-tween.87ffe365.js";import"./dayjs.396bdce9.js";import"./b-validate.ee581f7d.js";import"./number-precision.6dad9ff9.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./@vueuse.d5398ce4.js";import"./pinia.2e07300c.js";import"./vue-demi.b3a9cad9.js";import"./naive-ui.506a45a0.js";import"./date-fns.a06005bd.js";import"./seemly.d0f7d7a4.js";import"./evtd.9eee5233.js";import"./@css-render.6ced7bf3.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./vooks.3f61458b.js";import"./vueuc.5f5811a3.js";import"./vdirs.ab69c576.js";import"./@juggle.32c34d6c.js";import"./lodash-es.33d1f95f.js";import"./date-fns-tz.c3c7eb03.js";import"./axios.b9f958b0.js";import"./vue-request.6886b8d7.js";/* empty css                    */const H={class:"pt-3"},A={class:"w-full mb-4"},Q={key:1},g={__name:"Item",props:{data:Object},setup(o){const t=R();let m=j(t,t.config.router.admin_path+"/api");const n=u(()=>[{title:e("fields"),dataIndex:"field",width:150},{title:e("type"),dataIndex:"type",width:150},{title:e("required"),dataIndex:"required",width:150,slotName:"required"},{title:e("description"),dataIndex:"description",width:300},{title:e("example"),dataIndex:"example",width:300}]);return(d,c)=>{const T=a("a-tag"),b=a("icon-copy"),q=a("icon-check-circle-fill"),S=a("a-table"),y=a("a-card");return p(),P("div",H,[(p(!0),P(N,null,F(o.data,s=>(p(),_(y,{title:s.title,class:"mb-5"},{default:l(()=>[w("div",A,[i(T,{size:"large",color:"arcoblue"},{default:l(()=>[O(h(s.method),1)]),_:2},1024),i(T,{size:"large",class:"mx-2"},{default:l(()=>[O(h(r(m)+s.url),1)]),_:2},1024),i(b,{onClick:x=>r(z)(r(m)+s.url),class:"cursor-pointer hover:text-blue-500"},null,8,["onClick"])]),s.payload?(p(),_(S,{key:0,size:"small",columns:r(n),data:s.payload,pagination:!1},{required:l(({record:x,rowIndex:L})=>[x.required?(p(),_(q,{key:0,style:{color:"rgb(var(--arcoblue-6))"}})):(p(),P("span",Q," - "))]),_:2},1032,["columns","data"])):I("",!0)]),_:2},1032,["title"]))),256))])}}},k=[{field:"select",type:"string",description:"Select Fields"},{field:"limit",type:"int",description:"Limit"},{field:"page",type:"int",description:"Page Number"},{field:"order",type:"string",description:"Order"}],W=u(()=>[{title:"Create",method:"POST",url:"/article/create",payload:V("create")},{title:"Update",method:"POST",url:"/article/update",payload:V("update")},{title:"Get",method:"GET",url:"/article/get/:id"},{title:"List",method:"POST",url:"/article/list",payload:k},{title:"Delete",method:"POST",url:"/article/delete/:id"},{title:"Exists Slug",method:"POST",url:"/article/existsSlug"},{title:"Exists Title",method:"POST",url:"/article/existsTitle"}]);function V(o){let t=[{field:"title",type:"string",required:!0,description:e("title")},{field:"content",type:"string",required:!0,description:e("content")},{field:"slug",type:"string",required:o==="update",description:e("slug")},{field:"category_id",type:"int",description:e("category_id")},{field:"create_time",type:"timestamp",description:e("createTime")},{field:"views",type:"int",description:e("views")},{field:"thumbnail",type:"string",description:e("thumbnail")},{field:"keywords",type:"string",description:e("keywords")},{field:"description",type:"string",description:e("description")},{field:"tags",type:"[]string",description:e("tags"),example:"['tag1','tag2','tag3']"},{field:"category_name",type:"string",description:e("category")+" (If the category id is undefined)"},{field:"extends",type:"json",description:e("extends"),example:"{'source':'google.com','author':'Lucy'}"}];return o==="update"&&t.unshift({field:"id",type:"int",required:!0,description:e("id")}),t}const J=u(()=>[{title:"Create",method:"POST",url:"/category/create",payload:$()},{title:"Update",method:"POST",url:"/category/update",payload:$("update")},{title:"Get",method:"GET",url:"/category/get/:id"},{title:"List",method:"POST",url:"/category/list",payload:k},{title:"Delete",method:"POST",url:"/category/delete/:id"},{title:"Exists Slug",method:"POST",url:"/category/existsSlug"},{title:"Exists Name",method:"POST",url:"/category/existsName"}]);function $(o){let t=[{field:"name",type:"string",required:!0,description:e("name")},{field:"slug",type:"string",required:o==="update",description:e("slug")},{field:"parent_id",type:"int",description:"parent id"},{field:"create_time",type:"timestamp",description:e("createTime")},{field:"title",type:"string",description:e("title")},{field:"keywords",type:"string",description:e("keywords")},{field:"description",type:"string",description:e("description")}];return o==="update"&&t.unshift({field:"id",type:"int",required:!0,description:e("id")}),t}const K=u(()=>[{title:"Create",method:"POST",url:"/tag/create",payload:v()},{title:"Update",method:"POST",url:"/tag/update",payload:v("update")},{title:"Get",method:"GET",url:"/tag/get/:id"},{title:"List",method:"POST",url:"/tag/list",payload:k},{title:"Delete",method:"POST",url:"/tag/delete/:id",examples:"POST /data/tag/delete/2"},{title:"Exists Slug",method:"POST",url:"/tag/existsSlug"},{title:"Exists Name",method:"POST",url:"/tag/existsName"}]);function v(o){let t=[{field:"name",type:"string",required:!0,description:e("name")},{field:"slug",type:"string",required:o==="update",description:e("slug")},{field:"create_time",type:"timestamp",description:e("createTime")},{field:"title",type:"string",description:e("title")},{field:"keywords",type:"string",description:e("keywords")},{field:"description",type:"string",description:e("description")}];return o==="update"&&t.unshift({field:"id",type:"int",required:!0,description:e("id")}),t}const M=u(()=>[{title:"Create",method:"POST",url:"/link/create",payload:C()},{title:"Update",method:"POST",url:"/link/update",payload:C("update")},{title:"Get",method:"GET",url:"/link/get/:id"},{title:"List",method:"POST",url:"/link/list",payload:k},{title:"Delete",method:"POST",url:"/link/delete/:id"},{title:"Exists URL",method:"POST",url:"/link/existsURL"}]);function C(o){let t=[{field:"name",type:"string",required:!0,description:e("name")},{field:"url",type:"string",required:!0,description:e("url")},{field:"status",type:"bool",description:e("status")},{field:"logo",type:"string",description:"logo"},{field:"note",type:"string",description:e("note")},{field:"create_time",type:"timestamp",description:e("createTime")},{field:"expire_time",type:"timestamp",description:e("expireTime")},{field:"detect",type:"bool",description:e("detect")},{field:"detect_delay",type:"int",description:e("detect")+" "+e("delay")+"("+e("minutes")+")"}];return o==="update"&&t.unshift({field:"id",type:"int",required:!0,description:e("id")}),t}const X=u(()=>[{title:"Create",method:"POST",url:"/store/create",payload:G()},{title:"Update",method:"POST",url:"/store/update",payload:G("update")},{title:"Get",method:"GET",url:"/store/get/:id"},{title:"List",method:"POST",url:"/store/list",payload:k},{title:"Delete",method:"POST",url:"/store/delete/:id"},{title:e("publish"),method:"POST",url:"/store/post/:id"}]);function G(o){let t=[{field:"title",type:"string",required:!0,description:e("title")},{field:"content",type:"string",required:!0,description:e("content")},{field:"category_id",type:"int",description:"category id"},{field:"category_name",type:"string",description:e("category")+" (If the category id is undefined)"},{field:"tags",type:"[]string",description:e("tags"),example:"['tag1','tag2','tag3']"},{field:"slug",type:"string",description:e("slug")},{field:"thumbnail",type:"string",description:e("thumbnail")},{field:"views",type:"int",description:e("views")},{field:"create_time",type:"timestamp",description:e("createTime")},{field:"description",type:"string",description:e("description")},{field:"keywords",type:"string",description:e("keywords")},{field:"extends",type:"json",description:e("extends"),example:"{'source':'google.com','author':'Lucy'}"}];return o==="update"&&t.unshift({field:"id",type:"int",required:!0,description:e("id")}),t}const Y={__name:"Documentation",setup(o){return(t,m)=>{const n=a("a-tab-pane"),d=a("a-tabs");return p(),_(d,{type:"rounded",animation:""},{default:l(()=>[i(n,{key:"article",title:t.$t("article")},{default:l(()=>[i(g,{data:r(W)},null,8,["data"])]),_:1},8,["title"]),i(n,{key:"category",title:t.$t("category")},{default:l(()=>[i(g,{data:r(J)},null,8,["data"])]),_:1},8,["title"]),i(n,{key:"tag",title:t.$t("tag")},{default:l(()=>[i(g,{data:r(K)},null,8,["data"])]),_:1},8,["title"]),i(n,{key:"link",title:t.$t("link")},{default:l(()=>[i(g,{data:r(M)},null,8,["data"])]),_:1},8,["title"]),i(n,{key:"storehouse",title:t.$t("storehouse")},{default:l(()=>[i(g,{data:r(X)},null,8,["data"])]),_:1},8,["title"])]),_:1})}}},Ce={__name:"api",setup(o){const t=U("data"),m=U("showBtn");function n(d){m.value=d!=="documentation"}return(d,c)=>{const T=a("a-switch"),b=a("a-form-item"),q=a("a-input"),S=a("a-alert"),y=a("a-tag"),s=a("a-descriptions-item"),x=a("icon-exclamation-circle-fill"),L=a("a-descriptions"),E=a("a-tab-pane"),B=a("a-tabs");return p(),_(B,{onChange:n},{default:l(()=>[i(E,{key:"options",title:d.$t("options")},{default:l(()=>[i(b,{label:d.$t("enable")},{default:l(()=>[i(T,{type:"round",modelValue:r(t).enable,"onUpdate:modelValue":c[0]||(c[0]=f=>r(t).enable=f)},null,8,["modelValue"])]),_:1},8,["label"]),r(t).enable?(p(),P(N,{key:0},[i(b,{label:"token"},{default:l(()=>[i(q,{modelValue:r(t).secret_key,"onUpdate:modelValue":c[2]||(c[2]=f=>r(t).secret_key=f),class:"w-64"},{suffix:l(()=>[i(D,{modelValue:r(t).secret_key,"onUpdate:modelValue":c[1]||(c[1]=f=>r(t).secret_key=f),length:20},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),i(S,{title:d.$t("warning"),type:"warning",class:"mb-5"},{default:l(()=>[O(h(d.$t("apiWarning")),1)]),_:1},8,["title"]),i(S,{title:d.$t("auth"),type:"info",class:"mb-5"},{default:l(()=>[i(L,{column:1},{default:l(()=>[i(s,{label:"By Request Header"},{default:l(()=>[i(y,{bordered:""},{default:l(()=>[w("code",null,"token: "+h(r(t).secret_key),1)]),_:1})]),_:1}),i(s,{label:"By Request URL"},{default:l(()=>[i(y,{bordered:""},{default:l(()=>[w("code",null,"/xxx/post?token="+h(r(t).secret_key),1)]),_:1}),i(y,{color:"red",class:"ml-1"},{icon:l(()=>[i(x)]),default:l(()=>[O("unsafe")]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])],64)):I("",!0)]),_:1},8,["title"]),i(E,{key:"documentation",title:d.$t("documentation")},{default:l(()=>[i(Y,{class:"mb-5"})]),_:1},8,["title"])]),_:1})}}};export{Ce as default};
