import{Q as b,_}from"./QPage.027c53b3.js";import{c}from"./QCard.e554613e.js";import{i as g,r as x,m as k,o as I,w as n,s as w,t as B,u as F,x as s,v as q}from"./index.52000ac3.js";import"./vm.920e8b75.js";const A={class:"flex justify-between items-center"},C=s("h4",{class:"text-bold"},"All Sneakers",-1),Q={class:"flex q-gutter-md items-bottom"},S=s("option",{value:"name"},"\u041F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E",-1),T=s("option",{value:"price"},"\u043F\u043E \u0446\u0435\u043D\u0435 (\u0434\u0435\u0448\u0435\u0432\u044B\u0435)",-1),j=s("option",{value:"-price"},"\u043F\u043E \u0446\u0435\u043D\u0435 (\u0434\u043E\u0440\u043E\u0433\u0438\u0435)",-1),N=[S,T,j],P=s("img",{class:"absolute q-mt-sm q-ml-xs",src:"/search.svg",alt:"Search"},null,-1),z={__name:"IndexPage",setup(V){const{mycart:l,addToCart:i,removeFromCart:u}=g("mycart"),t=x([]),v=e=>{o.sortBy=e.target.value},p=e=>{o.searchQuery=e.target.value,console.log(o.searchQuery)},h=async e=>{try{e.isAdded?u(e):i(e)}catch(a){console.log(a)}},o=k({sortBy:"",searchQuery:""}),y=async e=>{try{if(e.isFav)await c.delete("https://6e5e12b4bb07b2b5.mokky.dev/favs/"+e.favId),e.isFav=!1,e.favId=null;else{const a={itemId:e.id,item:e},{data:r}=await c.post("https://6e5e12b4bb07b2b5.mokky.dev/favs",a);e.isFav=!0,e.favId=data.id,console.log(data)}}catch(a){console.log(a)}},f=async()=>{try{const{data:e}=await c.get("https://6e5e12b4bb07b2b5.mokky.dev/favs");t.value=t.value.map(a=>{const r=e.find(m=>m.itemId===a.id);return r?{...a,isFav:!0,favId:r.id}:a})}catch(e){console.log(e)}},d=async()=>{try{const e={sortBy:o.sortBy,searchQuery:o.searchQuery},{data:a}=await c.get("https://6e5e12b4bb07b2b5.mokky.dev/items?sortBy="+o.sortBy+"&title=*"+o.searchQuery+"*");t.value=a.map(r=>({...r,isFav:!1,isAdded:!1,favId:null,cartIteId:null}))}catch(e){console.log(e)}};return I(async()=>{const e=localStorage.getItem("mycart");l.value=e?JSON.parse(e):[],await d(),await f(),t.value=t.value.map(a=>({...a,isAdded:l.value.some(r=>r.id===a.id)}))}),n(l,()=>{t.value=t.value.map(e=>({...e,isAdded:!1}))}),n(o,d),(e,a)=>(w(),B(b,{class:"q-mx-xl"},{default:F(()=>[s("div",A,[C,s("div",Q,[s("select",{onChange:v,class:"q-py-4 q-px-6",style:{"min-width":"200px",border:"0.5px solid grey","border-radius":"5px"}},N,32),s("div",null,[P,s("input",{onChange:p,class:"border border-red q-py-xs q-pl-lg",placeholder:"\u041F\u043E\u0438\u0441\u043A",type:"text",style:{border:"0.5px solid grey","border-radius":"5px"}},null,32)])])]),q(_,{items:t.value,onAddToFav:y,onAddToCart:h},null,8,["items"])]),_:1}))}};export{z as default};
