webpackJsonp([1],{"1uuo":function(t,e){},FDBP:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n=s("BO1k"),a=s.n(n),_={name:"NGList",data:function(){return{table_list:[["A1","A2","A3","A4"],["B1","B2","B3","B4"],["C1","C2","C3","C4"],["D1","D2","D3","D4"],["E1","E2","E3","E4"]],table_list_flatten:["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4","D1","D2","D3","D4","E1","E2","E3","E4"],NG_list:{},num_dish:0,show_form:!1,show_apa:!1,show_soup:!1,show_fish:!1,show_meet:!1,show_gal:!1,show_des:!1,show_NG:!1}},created:function(){this.add_dish(),this.add_dish(),this.add_dish(),this.add_dish(),this.add_dish(),this.add_dish()},methods:{add_dish:function(t){this.num_dish++;var e={},s=!0,i=!1,n=void 0;try{for(var _,l=a()(this.table_list);!(s=(_=l.next()).done);s=!0){var r=_.value,o=!0,c=!1,u=void 0;try{for(var h,v=a()(r);!(o=(h=v.next()).done);o=!0){e[h.value]=!1}}catch(t){c=!0,u=t}finally{try{!o&&v.return&&v.return()}finally{if(c)throw u}}}}catch(t){i=!0,n=t}finally{try{!s&&l.return&&l.return()}finally{if(i)throw n}}this.NG_list[this.num_dish]=e},change_state:function(t,e){this.NG_list[Number(t)][e]=!this.NG_list[Number(t)][e]}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"NGList"}},[s("h1",[t._v("NG表")]),t._v(" "),s("div",{staticClass:"reg_NG"},[s("a",{on:{click:function(e){t.show_form=!t.show_form}}},[t._v("▼ NGを入力")]),t._v(" "),t.show_form?s("div",{staticClass:"dish"},[s("div",{staticClass:"inner_NG"},[s("p",[s("a",{on:{click:function(e){t.show_apa=!t.show_apa}}},[t._v("▼ 前菜")])]),t._v(" "),t.show_apa?s("table",{attrs:{align:"center"}},t._l(t.table_list,function(e){return s("tr",t._l(e,function(e){return s("th",[s("label",{staticClass:"checkbox"},[s("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:t.NG_list[1][e]},on:{click:function(s){t.change_state(1,e)}}}),t._v("\n                "+t._s(e)+"\n              ")])])}))})):t._e()]),t._v(" "),s("div",{staticClass:"inner_NG"},[s("p",[s("a",{on:{click:function(e){t.show_soup=!t.show_soup}}},[t._v("▼ スープ")])]),t._v(" "),t.show_soup?s("table",{attrs:{align:"center"}},t._l(t.table_list,function(e){return s("tr",t._l(e,function(e){return s("th",[s("label",{staticClass:"checkbox"},[s("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:t.NG_list[2][e]},on:{click:function(s){t.change_state(2,e)}}}),t._v("\n                "+t._s(e)+"\n              ")])])}))})):t._e()]),t._v(" "),s("div",{staticClass:"inner_NG"},[s("p",[s("a",{on:{click:function(e){t.show_fish=!t.show_fish}}},[t._v("▼ 魚")])]),t._v(" "),t.show_fish?s("table",{attrs:{align:"center"}},t._l(t.table_list,function(e){return s("tr",t._l(e,function(e){return s("th",[s("label",{staticClass:"checkbox"},[s("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:t.NG_list[3][e]},on:{click:function(s){t.change_state(3,e)}}}),t._v("\n                "+t._s(e)+"\n              ")])])}))})):t._e()]),t._v(" "),s("div",{staticClass:"inner_NG"},[s("p",[s("a",{on:{click:function(e){t.show_meet=!t.show_meet}}},[t._v("▼ 肉")])]),t._v(" "),t.show_meet?s("table",{attrs:{align:"center"}},t._l(t.table_list,function(e){return s("tr",t._l(e,function(e){return s("th",[s("label",{staticClass:"checkbox"},[s("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:t.NG_list[4][e]},on:{click:function(s){t.change_state(4,e)}}}),t._v("\n                "+t._s(e)+"\n              ")])])}))})):t._e()]),t._v(" "),s("div",{staticClass:"inner_NG"},[s("p",[s("a",{on:{click:function(e){t.show_gal=!t.show_gal}}},[t._v("▼ お茶漬け")])]),t._v(" "),t.show_gal?s("table",{attrs:{align:"center"}},t._l(t.table_list,function(e){return s("tr",t._l(e,function(e){return s("th",[s("label",{staticClass:"checkbox"},[s("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:t.NG_list[5][e]},on:{click:function(s){t.change_state(5,e)}}}),t._v("\n                "+t._s(e)+"\n              ")])])}))})):t._e()]),t._v(" "),s("div",{staticClass:"inner_NG"},[s("p",[s("a",{on:{click:function(e){t.show_des=!t.show_des}}},[t._v("▼ デザート")])]),t._v(" "),t.show_des?s("table",{attrs:{align:"center"}},t._l(t.table_list,function(e){return s("tr",t._l(e,function(e){return s("th",[s("label",{staticClass:"checkbox"},[s("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:t.NG_list[6][e]},on:{click:function(s){t.change_state(6,e)}}}),t._v("\n                "+t._s(e)+"\n              ")])])}))})):t._e()]),t._v(" "),s("a",{on:{click:function(e){t.show_form=!t.show_form}}},[t._v("▲ 折りたたむ")])]):t._e()]),t._v(" "),s("div",{staticClass:"show_NG"},[s("a",{on:{click:function(e){t.show_NG=!t.show_NG}}},[t._v("▼ NG表")]),t._v(" "),t.show_NG?s("div",{staticClass:"NG_list"},[s("ul",[s("li",{staticClass:"label"},[t._v("前菜NG")]),t._v(" "),s("li",{staticClass:"value"},t._l(t.table_list_flatten,function(e){return t.NG_list[1][e]?s("td",[t._v("  "+t._s(e)+",")]):t._e()})),t._v(" "),s("li",{staticClass:"label"},[t._v("スープNG")]),t._v(" "),s("li",{staticClass:"value"},t._l(t.table_list_flatten,function(e){return t.NG_list[2][e]?s("td",[t._v("  "+t._s(e)+",")]):t._e()})),t._v(" "),s("li",{staticClass:"label"},[t._v("魚料理NG")]),t._v(" "),s("li",{staticClass:"value"},t._l(t.table_list_flatten,function(e){return t.NG_list[3][e]?s("td",[t._v("  "+t._s(e)+",")]):t._e()})),t._v(" "),s("li",{staticClass:"label"},[t._v("肉料理NG")]),t._v(" "),s("li",{staticClass:"value"},t._l(t.table_list_flatten,function(e){return t.NG_list[4][e]?s("td",[t._v("  "+t._s(e)+",")]):t._e()})),t._v(" "),s("li",{staticClass:"label"},[t._v("お茶漬けNG")]),t._v(" "),s("li",{staticClass:"value"},t._l(t.table_list_flatten,function(e){return t.NG_list[5][e]?s("td",[t._v("  "+t._s(e)+",")]):t._e()})),t._v(" "),s("li",{staticClass:"label"},[t._v("デザートNG")]),t._v(" "),s("li",{staticClass:"value"},t._l(t.table_list_flatten,function(e){return t.NG_list[6][e]?s("td",[t._v("  "+t._s(e)+",")]):t._e()}))])]):t._e()])])},staticRenderFns:[]};var r={name:"App",components:{NGList:s("VU/8")(_,l,!1,function(t){s("wxV9")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"left"}},[e("router-view")],1),this._v(" "),e("div",{attrs:{id:"right"}},[e("NGList")],1)])},staticRenderFns:[]};var c=s("VU/8")(r,o,!1,function(t){s("rzR7")},null,null).exports,u=s("/ocq"),h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},h,!1,function(t){s("1uuo")},"data-v-d8ec41bc",null).exports;var v={name:"Timer",data:function(){return{message:"Hi",time:null,timerObj:null,target_time:null,target_hour:null,target_min:null}},created:function(){this.updateTimer(),this.initTarget()},methods:{toDoubleDigits:function(t){return 1===(t+="").length&&(t="0"+t),t},increment:function(){var t=this.target_min,e=this.target_hour;++t>=60&&(t-=60,e++),this.target_min=t,this.target_hour=e,this.target_time=this.toDoubleDigits(this.target_hour)+":"+this.toDoubleDigits(this.target_min)},decrement:function(){var t=this.target_min,e=this.target_hour;--t<0&&(t=60+t,e--),this.target_min=t,this.target_hour=e,this.target_time=this.toDoubleDigits(this.target_hour)+":"+this.toDoubleDigits(this.target_min)},calc_diff:function(){var t=new Date,e=60*this.target_hour*60+60*this.target_min-(60*t.getHours()*60+60*t.getMinutes()+t.getSeconds());if(e<0)return["0","0"];var s=Math.floor(e/60),i=e-60*s;return[s.toString(),i.toString()]},initTarget:function(){var t=new Date;this.target_hour=t.getHours(),this.target_min=t.getMinutes(),this.target_time=this.toDoubleDigits(this.target_hour)+":"+this.toDoubleDigits(this.target_min)},show_time:function(){new Date;var t=this.calc_diff().map(function(t){return t.length<2?"0"+t:t});this.time=t[0]+":"+t[1]},updateTimer:function(){var t=this;this.timerObj=setInterval(function(){t.show_time()},1e3)}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"Timer"}},[s("div",{attrs:{clsas:"show_time"}},[s("ul",[s("li",{staticClass:"time_label"},[t._v("次の料理まで")]),t._v(" "),s("li",{staticClass:"time"},[t._v(t._s(t.time))])])]),t._v(" "),s("br"),s("br"),t._v(" "),s("div",{staticClass:"set_time"},[s("ul",[s("li",{staticClass:"time_label2"},[t._v("次の料理時間")]),t._v(" "),s("li",{staticClass:"time2"},[t._v(t._s(t.target_time))]),t._v(" "),s("li",[s("button",{staticClass:"time_button",on:{click:t.increment}},[t._v(" ＋ ")]),t._v("\n         \n        "),s("button",{staticClass:"time_button",on:{click:t.decrement}},[t._v(" ー ")]),t._v("\n         \n        "),s("button",{staticClass:"time_button",on:{click:t.initTarget}},[t._v(" 現在時刻 ")])])])])])},staticRenderFns:[]};var d=s("VU/8")(v,f,!1,function(t){s("FDBP")},null,null).exports;i.a.use(u.a);var m=new u.a({routes:[{path:"/",name:"Timer",component:d}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:m,components:{App:c},template:"<App/>"})},rzR7:function(t,e){},wxV9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.29fccb7f7ebe41dfc25e.js.map