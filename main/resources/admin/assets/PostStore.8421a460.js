import{S as V}from"./SelectCategory.ab460937.js";import{i as b,j as i,k as g,p as y,v as o,m as l,$ as r,y as d,z as u,F as $}from"./@vue.0987707a.js";import"./vue-request.6886b8d7.js";import"./index.15bdf724.js";import"./vue-router.0ed66d6f.js";import"./vue-i18n.e3137642.js";import"./@intlify.bed9fa1a.js";import"./source-map.205bdfab.js";import"./vue.5c5bb0aa.js";import"./@arco-design.370b0a2d.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.17358474.js";import"./b-tween.87ffe365.js";import"./dayjs.396bdce9.js";import"./b-validate.ee581f7d.js";import"./number-precision.6dad9ff9.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./@vueuse.d5398ce4.js";import"./pinia.2e07300c.js";import"./vue-demi.b3a9cad9.js";import"./naive-ui.506a45a0.js";import"./date-fns.a06005bd.js";import"./seemly.d0f7d7a4.js";import"./evtd.9eee5233.js";import"./@css-render.6ced7bf3.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./vooks.3f61458b.js";import"./vueuc.5f5811a3.js";import"./vdirs.ab69c576.js";import"./@juggle.32c34d6c.js";import"./lodash-es.33d1f95f.js";import"./date-fns-tz.c3c7eb03.js";import"./axios.b9f958b0.js";/* empty css                    */const to={__name:"PostStore",setup(c){const e=b("options");return(a,t)=>{const s=i("a-input-number"),p=i("a-form-item"),n=i("a-radio"),_=i("a-radio-group"),f=i("a-switch");return g(),y($,null,[o(p,{label:a.$t("limit")},{default:l(()=>[o(s,{modelValue:r(e).limit,"onUpdate:modelValue":t[0]||(t[0]=m=>r(e).limit=m),style:{width:"200px"},min:0},null,8,["modelValue"])]),_:1},8,["label"]),o(p,{label:a.$t("order")},{default:l(()=>[o(_,{modelValue:r(e).order,"onUpdate:modelValue":t[1]||(t[1]=m=>r(e).order=m)},{default:l(()=>[o(n,{value:0},{default:l(()=>[d(u(a.$t("new")),1)]),_:1}),o(n,{value:1},{default:l(()=>[d(u(a.$t("old")),1)]),_:1}),o(n,{value:2},{default:l(()=>[d(u(a.$t("random")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(p,{label:a.$t("category")},{default:l(()=>[o(V,{modelValue:r(e).category_ids,"onUpdate:modelValue":t[2]||(t[2]=m=>r(e).category_ids=m),multiple:""},null,8,["modelValue"])]),_:1},8,["label"]),o(p,{label:a.$t("delete"),help:"delete on failure"},{default:l(()=>[o(f,{modelValue:r(e).delete_on_failure,"onUpdate:modelValue":t[3]||(t[3]=m=>r(e).delete_on_failure=m),type:"round"},null,8,["modelValue"])]),_:1},8,["label"])],64)}}};export{to as default};
