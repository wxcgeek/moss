import{u as I}from"./vue-request.6886b8d7.js";import{b as C,w as B}from"./index.15bdf724.js";import{t as D,r as N,w as _,j as o,k as u,p as U,v as s,$ as f,q as b,m as c,n as j,l as g}from"./@vue.0987707a.js";const q={class:"w-full flex"},E={__name:"SelectCategory",props:{modelValue:Number|Array,cascaderStyle:Object,disabledId:Number,multiple:Boolean},emits:["update:modelValue"],setup(n,{emit:i}){const r=n,{modelValue:d}=D(r),l=N(d.value);_(d,()=>{l.value=d.value}),_(l,e=>{i("update:modelValue",e)});function y(e){i("update:modelValue",e)}const{data:p,loading:v}=I(B,{onSuccess:()=>{r.disabledId&&m(p.value)}});function m(e){for(let a in e)e[a].id===r.disabledId?e[a].disabled=!0:m(e[a].children)}return(e,a)=>{const V=o("a-cascader"),w=o("icon-edit"),k=o("a-button"),x=o("a-input-tag"),h=o("a-input-number"),S=o("a-trigger");return u(),U("div",q,[s(V,{class:"flex-shrink w-full",options:f(p),modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=t=>l.value=t),loading:f(v),"field-names":{value:"id",label:"name"},"check-strictly":"","expand-child":"","allow-clear":"",placeholder:e.$t("select"),style:b(n.cascaderStyle),multiple:n.multiple},null,8,["options","modelValue","loading","placeholder","style","multiple"]),s(S,{class:"flex-grow",trigger:"click",position:"br","auto-fit-position":"","unmount-on-close":!1,"popup-offset":10},{content:c(()=>[j("div",{class:"w-full p-2 border border-gray-600 border-opacity-20",style:b({backgroundColor:"var(--color-bg-5)",maxWidth:"400px"})},[n.multiple?(u(),g(x,{key:0,modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=t=>l.value=t),placeholder:"Please Enter ID","allow-clear":""},null,8,["modelValue"])):(u(),g(h,{key:1,modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=t=>l.value=t),"hide-button":"","allow-clear":"",placeholder:"id",onInput:y},null,8,["modelValue"]))],4)]),default:c(()=>[s(k,{type:"primary"},{icon:c(()=>[s(w)]),_:1})]),_:1})])}}},z=C(E,[["__scopeId","data-v-ee9f0926"]]);export{z as S};
