import{M as r}from"./index.15bdf724.js";import{j as s,k as c,l}from"./@vue.0987707a.js";const d={__name:"MakeRandString",props:{modelValue:String,title:{type:String,default:""},length:{type:Number,default:10},chars:{type:String,default:"ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz"}},emits:["update:modelValue"],setup(t,{emit:o}){const e=t,n=()=>{o("update:modelValue",r(e.length,e.chars))};return(p,i)=>{const a=s("icon-loop");return c(),l(a,{onClick:n,class:"cursor-pointer"})}}};export{d as _};
