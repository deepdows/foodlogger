"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[443],{8355:function(o,e,r){r.r(e),r.d(e,{default:function(){return R}});var t=r(3396);const a={class:"home"};function s(o,e,r,s,l,n){const i=(0,t.up)("FoodForm"),d=(0,t.up)("FoodLog"),c=(0,t.up)("FoodDayProgress");return(0,t.wg)(),(0,t.iD)("div",a,[(0,t.Wm)(i,{getProgressData:n.getProgressData,getFoodLog:n.getFoodLog},null,8,["getProgressData","getFoodLog"]),(0,t.Wm)(d,{foodlog:o.foodlog,getFoodLog:n.getFoodLog,getProgressData:n.getProgressData},null,8,["foodlog","getFoodLog","getProgressData"]),(0,t.Wm)(c,{progress:o.progress},null,8,["progress"])])}var l=r(9242),n=r(7139);const i=o=>((0,t.dD)("data-v-1f868e38"),o=o(),(0,t.Cn)(),o),d={class:"form-floating formName"},c=i((()=>(0,t._)("label",{for:"formName"},"Name",-1))),g={class:"form-floating formWeight"},m=i((()=>(0,t._)("label",{for:"formWeight"},"Weight (g)",-1))),u={class:"form-floating formCalories"},f=i((()=>(0,t._)("label",{for:"formCalories"},"Calories",-1))),p={class:"form-floating formFats"},h=i((()=>(0,t._)("label",{for:"formFats"},"Fats",-1))),_={class:"form-floating formCarbohydrates"},y=i((()=>(0,t._)("label",{for:"formCarbohydrates"},"Carbohydrates",-1))),b={class:"form-floating formProtein"},w=i((()=>(0,t._)("label",{for:"formProtein"},"Protein",-1))),F={class:"form-floating formSugar"},v=i((()=>(0,t._)("label",{for:"formSugar"},"Sugar",-1))),C={class:"form-floating formSalt"},D=i((()=>(0,t._)("label",{for:"formSalt"},"Salt",-1))),k=i((()=>(0,t._)("button",{class:"formSubmit",type:"submit"},"Submit",-1))),P={class:"warning-text"};function L(o,e,r,a,s,i){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("form",{id:"foodForm",onSubmit:e[9]||(e[9]=(0,l.iM)(((...o)=>i.createFoodLog&&i.createFoodLog(...o)),["prevent"]))},[(0,t._)("div",d,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"formName",placeholder:"Name","onUpdate:modelValue":e[0]||(e[0]=e=>o.form.name=e),required:""},null,512),[[l.nr,o.form.name]]),c]),(0,t._)("div",g,[(0,t.wy)((0,t._)("input",{type:"number",class:"form-control",id:"formWeight",placeholder:"Weight (g)","onUpdate:modelValue":e[1]||(e[1]=e=>o.form.weight=e),required:""},null,512),[[l.nr,o.form.weight]]),m]),(0,t._)("div",u,[(0,t.wy)((0,t._)("input",{type:"number",step:"0.1",class:"form-control",id:"formCalories",placeholder:"Calories","onUpdate:modelValue":e[2]||(e[2]=e=>o.form.calories=e),required:""},null,512),[[l.nr,o.form.calories]]),f]),(0,t._)("div",p,[(0,t.wy)((0,t._)("input",{type:"number",step:"0.1",class:"form-control",id:"formFats",placeholder:"Fats","onUpdate:modelValue":e[3]||(e[3]=e=>o.form.fats=e)},null,512),[[l.nr,o.form.fats]]),h]),(0,t._)("div",_,[(0,t.wy)((0,t._)("input",{type:"number",step:"0.1",class:"form-control",id:"formCarbohydrates",placeholder:"Carbohydrates","onUpdate:modelValue":e[4]||(e[4]=e=>o.form.carbohydrates=e)},null,512),[[l.nr,o.form.carbohydrates]]),y]),(0,t._)("div",b,[(0,t.wy)((0,t._)("input",{type:"number",step:"0.1",class:"form-control",id:"formProtein",placeholder:"Protein","onUpdate:modelValue":e[5]||(e[5]=e=>o.form.protein=e)},null,512),[[l.nr,o.form.protein]]),w]),(0,t._)("div",F,[(0,t.wy)((0,t._)("input",{type:"number",step:"0.1",class:"form-control",id:"formSugar",placeholder:"Sugar","onUpdate:modelValue":e[6]||(e[6]=e=>o.form.sugar=e)},null,512),[[l.nr,o.form.sugar]]),v]),(0,t._)("div",C,[(0,t.wy)((0,t._)("input",{type:"number",step:"0.01",class:"form-control",id:"formSalt",placeholder:"Salt","onUpdate:modelValue":e[7]||(e[7]=e=>o.form.salt=e)},null,512),[[l.nr,o.form.salt]]),D]),k,(0,t._)("button",{class:"formClear",type:"button",onClick:e[8]||(e[8]=(...o)=>i.clearAllFields&&i.clearAllFields(...o))}," Clear ")],32),(0,t._)("p",P,(0,n.zw)(o.errorMessage),1)])}var S={name:"FoodForm",data:function(){return{errorMessage:"",form:{name:"",weight:"",calories:"",fats:"",carbohydrates:"",protein:"",sugar:"",salt:""}}},props:{getProgressData:Function,getFoodLog:Function},methods:{removeEmptyFields(o){return Object.keys(o).forEach((e=>{""===o[e]&&delete o[e]})),o},clearAllFields(){var o=this.form;Object.keys(o).forEach((function(e){o[e]=""})),this.form=o},async createFoodLog(o){var e=this.removeEmptyFields(this.form),r=await fetch("http://localhost:8000/api/v1/calorie",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Cookies.get("token")},body:JSON.stringify(e)}),t=await r.json();r.ok?(await this.getFoodLog(),this.clearAllFields(),await this.getProgressData()):422==r.status?this.errorMessage=t.detail[0].msg:this.errorMessage=t.detail}}},z=r(89);const M=(0,z.Z)(S,[["render",L],["__scopeId","data-v-1f868e38"]]);var j=M;const A=o=>((0,t.dD)("data-v-77bcb186"),o=o(),(0,t.Cn)(),o),E={class:"table-responsive"},V={class:"table table-hover"},W=A((()=>(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",{scope:"col"},"Food"),(0,t._)("th",{scope:"col"},"Weight"),(0,t._)("th",{scope:"col"},"Calories"),(0,t._)("th",{scope:"col"},"Fats"),(0,t._)("th",{scope:"col"},"Carbohydrates"),(0,t._)("th",{scope:"col"},"Protein"),(0,t._)("th",{scope:"col"},"Sugar"),(0,t._)("th",{scope:"col"},"Salt"),(0,t._)("th",{scope:"col"},"Delete")])],-1))),B={scope:"row"},T=["onClick"];function U(o,e,r,a,s,l){return(0,t.wg)(),(0,t.iD)("div",E,[(0,t._)("table",V,[W,(0,t._)("tbody",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.foodlog,(o=>((0,t.wg)(),(0,t.iD)("tr",{key:o.id},[(0,t._)("th",B,(0,n.zw)(o.name),1),(0,t._)("td",null,(0,n.zw)(o.weight),1),(0,t._)("td",null,(0,n.zw)(o.calories),1),(0,t._)("td",null,(0,n.zw)(o.fats),1),(0,t._)("td",null,(0,n.zw)(o.carbohydrates),1),(0,t._)("td",null,(0,n.zw)(o.protein),1),(0,t._)("td",null,(0,n.zw)(o.sugar),1),(0,t._)("td",null,(0,n.zw)(o.salt),1),(0,t._)("td",{onClick:e=>l.deleteLogById(o.id),class:"del-btn"},"x",8,T)])))),128))])])])}var N={name:"FoodLog",props:{foodlog:Array,getFoodLog:Function,getProgressData:Function},data:function(){return{errorMessage:"",url:""}},methods:{async deleteLogById(o){var e=await fetch(`${this.url}/api/v1/calorie/${o}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Cookies.get("token")}});if(e.ok)await this.getFoodLog(),await this.getProgressData();else{var r=await e.json();this.errorMessage=r.detail}}}};const x=(0,z.Z)(N,[["render",U],["__scopeId","data-v-77bcb186"]]);var I=x;const H={class:"progress-graph"},O={class:"category"},Z={class:"bar"},$={class:"percent"};function q(o,e,r,a,s,l){return(0,t.wg)(),(0,t.iD)("div",H,[(0,t._)("ul",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.progress,(o=>((0,t.wg)(),(0,t.iD)("li",{key:o.category},[(0,t._)("div",O,(0,n.zw)(o.category),1),(0,t._)("div",Z,[(0,t._)("div",{class:"progress",style:(0,n.j5)({background:l.getColorByPercent(o.percent),width:l.maxHundred(o.percent)+"%"})},null,4),(0,t._)("span",$,(0,n.zw)(o.percent)+"%",1)])])))),128))])])}var G={name:"FoodDayProgress",data:function(){return{errorMessage:""}},props:{progress:Array},methods:{getColorByPercent(o){return o<80?"green":o<90?"orange":"red"},maxHundred(o){return o>100?100:o}}};const K=(0,z.Z)(G,[["render",q],["__scopeId","data-v-1ab043fb"]]);var Y=K,J={name:"MainView",components:{FoodForm:j,FoodLog:I,FoodDayProgress:Y},data:function(){return{foodlog:[],progress:[],errorMessage:"",url:""}},async mounted(){await this.getFoodLog(),await this.getProgressData()},methods:{async getFoodLog(){var o=await fetch(`${this.url}/api/v1/calorie`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Cookies.get("token")}}),e=await o.json();o.ok?this.foodlog=e:this.errorMessage=e.detail},async getProgressData(){var o=await fetch(`${this.url}/api/v1/calorie/progress`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Cookies.get("token")}}),e=await o.json();o.ok?this.progress=e:this.errorMessage=e.detail}}};const Q=(0,z.Z)(J,[["render",s]]);var R=Q}}]);
//# sourceMappingURL=about.4fc04286.js.map