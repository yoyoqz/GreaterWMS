(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{5225:function(e,t,a){"use strict";var o=a("79f6"),n=a.n(o);t["default"]=n.a},"79f6":function(e,t){},e8ac:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("submit"),icon:"refresh"},on:{click:function(t){return e.downloadData()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n              "+e._s(e.$t("submit"))+"\n            ")])],1)],1),a("q-space")]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"bin_name",attrs:{props:t}},[e._v("\n            "+e._s(t.row.bin_name)+"\n          ")]),a("q-td",{key:"goods_code",attrs:{props:t}},[e._v("\n            "+e._s(t.row.goods_code)+"\n          ")]),a("q-td",{key:"goods_qty",attrs:{props:t}},[e._v("\n            "+e._s(t.row.goods_qty)+"\n          ")]),a("q-td",{key:"physical_inventory",attrs:{props:t}},[e._v("\n            "+e._s(t.row.physical_inventory)+"\n          ")]),a("q-td",{key:"action",staticStyle:{width:"50px"},attrs:{props:t}},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:"Inbound"!==e.$q.localStorage.getItem("staff_type")&&"Outbound"!==e.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Inbound' &&\n                            $q.localStorage.getItem('staff_type') !== 'Outbound'\n                           "}],attrs:{round:"",flat:"",push:"",color:"purple",icon:"repeat"},on:{click:function(a){return e.BinMove(t.row)}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("stock.view_stocklist.recyclecounttip"))+"\n              ")])],1)],1)],1)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("previous"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("next"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)],a("q-dialog",{model:{value:e.moveForm,callback:function(t){e.moveForm=t},expression:"moveForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.movedata.goods_code)+" "+e._s(e.$t("frombin"))+" "+e._s(e.movedata.bin_name))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[a("q-input",{staticStyle:{"margin-bottom":"5px"},attrs:{dense:"",outlined:"",square:"",debounce:"500",type:"number",label:e.$t("stock.view_stocklist.goods_qty"),rules:[function(t){return t&&t>0||e.error1}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.MoveToBinSubmit()}},scopedSlots:e._u([{key:"before",fn:function(){return[a("q-select",{attrs:{dense:"",outlined:"",square:"","use-input":"","hide-selected":"","fill-input":"",label:e.$t("warehouse.view_binset.bin_name"),options:e.options},on:{filter:e.filterFn,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.MoveToBinSubmit()}},scopedSlots:e._u([{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey"},[e._v("\n                    No results\n                  ")])],1)]},proxy:!0},e.movedata.move_to_bin?{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(t){t.stopPropagation(),e.movedata.move_to_bin=""}}})]},proxy:!0}:null],null,!0),model:{value:e.movedata.move_to_bin,callback:function(t){e.$set(e.movedata,"move_to_bin",t)},expression:"movedata.move_to_bin"}})]},proxy:!0}]),model:{value:e.movedata.move_qty,callback:function(t){e.$set(e.movedata,"move_qty",e._n(t))},expression:"movedata.move_qty"}})],1),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.MoveToBinCancel()}}},[e._v(e._s(e.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.MoveToBinSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1)],2)},n=[],s=a("bd4c"),i=a("a357"),r=a("18d6"),l=a("a639"),c=a("3004"),d={name:"cyclyecount",data(){return{openid:"",login_name:"",authin:"0",pathname:"cyclecount/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],bin_size_list:[],bin_property_list:[],warehouse_list:[],columns:[{name:"bin_name",required:!0,label:this.$t("warehouse.view_binset.bin_name"),align:"left",field:"bin_name"},{name:"goods_code",label:this.$t("stock.view_stocklist.goods_code"),field:"goods_code",align:"center"},{name:"goods_qty",label:this.$t("stock.view_stocklist.on_hand_inventory"),field:"goods_qty",align:"center"},{name:"physical_inventory",label:this.$t("stock.view_stocklist.physical_inventory"),field:"physical_inventory",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},options:[],moveForm:!1,movedata:{},error1:this.$t("inbound.view_sortstock.error1")}},methods:{getList(){var e=this;r["a"].has("auth")&&Object(c["e"])(e.pathname,{}).then((t=>{var a=[];t.results.forEach((e=>{console.log(e);var t={bin_name:e.bin_name,goods_code:e.goods_code,goods_qty:e.goods_qty,physical_inventory:0,difference:e.goods_qty};a.push(t)})),e.table_list=a,a=[],e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getSearchList(){var e=this;r["a"].has("auth")&&Object(c["e"])(e.pathname+"?bin_name__icontains="+e.filter,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;r["a"].has("auth")&&Object(c["e"])(e.pathname_previous,{}).then((t=>{var a=[];t.results.forEach((e=>{var t={bin_name:e.bin_name,goods_code:e.goods_code,goods_qty:e.goods_qty,physical_inventory:0,difference:e.goods_qty};a.push(t)})),e.table_list=a,a=[],e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;r["a"].has("auth")&&Object(c["e"])(e.pathname_next,{}).then((t=>{var a=[];t.results.forEach((e=>{var t={bin_name:e.bin_name,goods_code:e.goods_code,goods_qty:e.goods_qty,physical_inventory:0,difference:e.goods_qty};a.push(t)})),e.table_list=a,a=[],e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()},BinMove(e){var t=this;t.moveForm=!0,t.movedata=e},MoveToBinCancel(){var e=this;e.moveForm=!1,e.movedata={}},MoveToBinSubmit(){var e=this;Object(c["h"])(e.pathname+e.movedata.id+"/",e.movedata).then((t=>{e.getList(),e.MoveToBinCancel(),e.$q.notify({message:"Bin Moving Success",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},filterFn(e,t,a){var o=this;e.length<1?a():t((()=>{const t=e.toLowerCase();Object(c["e"])("binset/?bin_name__icontains="+t).then((e=>{var t=[];e.results.forEach((e=>{t.push(e.bin_name)})),l["a"].set("bin_name",t),o.options=l["a"].getItem("bin_name")})).catch((e=>{o.$q.notify({message:e.detail,icon:"close",color:"negative"})}))}))},downloadData(){var e=this;Object(c["f"])("stock/filebinlist/?lang="+r["a"].getItem("lang")).then((t=>{var a=Date.now(),o=s["b"].formatDate(a,"YYYYMMDDHHmmssSSS");const n=Object(i["a"])("stockbinlist_"+o+".csv","\ufeff"+t.data,"text/csv");!0!==n&&e.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))}},created(){var e=this;r["a"].has("openid")?e.openid=r["a"].getItem("openid"):(e.openid="",r["a"].set("openid","")),r["a"].has("login_name")?e.login_name=r["a"].getItem("login_name"):(e.login_name="",r["a"].set("login_name","")),r["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){var e=this;e.$q.platform.is.electron?e.height=String(e.$q.screen.height-195)+"px":e.height=e.$q.screen.height-195+"px"},updated(){},destroyed(){}},p=d,u=a("42e1"),_=a("5225"),m=a("eaac"),h=a("e7a9"),v=a("9c40"),b=a("05c0"),g=a("2c91"),f=a("bd08"),y=a("db86"),q=a("24e8"),x=a("f09f"),w=a("d847"),k=a("a370"),$=a("27f9"),S=a("ddd8"),C=a("66e5"),Q=a("4074"),I=a("0016"),B=a("7f67"),O=a("eebe"),M=a.n(O),T=Object(u["a"])(p,o,n,!1,null,null,null);"function"===typeof _["default"]&&Object(_["default"])(T);t["default"]=T.exports;M()(T,"components",{QTable:m["a"],QBtnGroup:h["a"],QBtn:v["a"],QTooltip:b["a"],QSpace:g["a"],QTr:f["a"],QTd:y["a"],QDialog:q["a"],QCard:x["a"],QBar:w["a"],QCardSection:k["a"],QInput:$["a"],QSelect:S["a"],QItem:C["a"],QItemSection:Q["a"],QIcon:I["a"]}),M()(T,"directives",{ClosePopup:B["a"]})}}]);