webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(e){n("gsu9")},null,null).exports,s=n("/ocq"),c=n("ZnLv"),o=n.n(c),u=["C4","D4","E4","F4","G4","A4","B4","C5"],l={name:"Grid",data:function(){return{length:0,scale:u.reverse(),chk_tone:[]}},methods:{play:function(e){(new o.a.Synth).toMaster().triggerAttackRelease(e,"8n")}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid"},[n("table",{staticClass:"note-list"},e._l(e.scale,function(t){return n("tr",{key:t.id,class:t.note},e._l(8,function(r){return n("td",{key:r.id},[n("input",{attrs:{type:"checkbox",name:r+"-"+t,id:r+"-"+t},on:{click:function(n){e.play(t)}}}),e._v(" "),n("label",{attrs:{for:r+"-"+t}},[e._v(e._s(r)+" - "+e._s(t))])])}))}))])},staticRenderFns:[]};var d=n("VU/8")(l,p,!1,function(e){n("ei1w")},"data-v-62f08b77",null).exports;r.a.use(s.a);var f=new s.a({routes:[{path:"/",name:"Grid",component:d}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:f,components:{App:i},template:"<App/>"})},ei1w:function(e,t){},gsu9:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d6d8a01d4289bc7b4ead.js.map