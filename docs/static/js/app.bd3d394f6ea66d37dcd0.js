webpackJsonp([1],{"8dXE":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("h1",{staticClass:"app__title"},[this._v("Web Sound Sequencer")]),this._v(" "),t("p",{staticClass:"app__desc"},[this._v("ピアノロールに指定したとおりに音を鳴らします(Cスケール)")]),this._v(" "),this._m(0),this._v(" "),t("router-view")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app__text"},[t("p",[this._v("クリックで選択 / 再度クリックで消去")]),this._v(" "),t("p",[this._v("[Set]ボタンで音符を消去してSettingを反映します")])])}]};var i=n("VU/8")({name:"App"},a,!1,function(e){n("b9RT")},null,null).exports,l=n("rc1w"),o=n.n(l),c=n("/ocq"),r=n("ZnLv"),u=n.n(r),h={lengthList:[4,8,12,16,20,24,28,32],baseList:[1,2,3,4,5,6,7,8,9],octaveList:[1,2,3,4,5,6,8],tempoList:[80,90,100,110,120,130,140,150,160],scales:{All:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],"Major(Ionian)":["C","D","E","F","G","A","B"],"Minor(Aeolian)":["C","D","Eb","F","G","Ab","Bb"],Lydian:["C","D","E","F#","G","A","B"],Mixolydian:["C","D","E","F","G","A","Bb"],Dorian:["C","D","Eb","F","G","A","Bb"],Phrigian:["C","Db","Eb","F","G","Ab","Bb"],Locrian:["C","Db","Eb","F","Gb","Ab","Bb"],"Maj-Penta":["C","D","E","G","A"],"Min-Penta":["C","Eb","F","G","Bb"]}},v={data:function(){return{config:h}}},p={name:"Grid",props:{length:Number,scale:Array,playNotes:Array},data:function(){return{viewBox:"0 0 640 400",viewWidth:640,viewHeight:400,noteMargin:1}},methods:{testPlay:function(e){this.$emit("testPlay",e)},check:function(e,t){this.$emit("check",e,t)},getNoteWidth:function(e){return this.viewWidth/e-this.noteMargin},getNoteHeight:function(e){return this.viewHeight/e-this.noteMargin},getNoteX:function(e,t){var n=t-1;return this.noteMargin+(this.viewWidth-this.noteMargin)/e*n},getNoteY:function(e,t){return this.noteMargin+(this.viewHeight-this.noteMargin)/e*t},paintNote:function(e,t){var n=e-1;return this.playNotes[n]===t?(console.log(),{active:!0}):null===this.playNotes[n]?{active:!1}:void 0}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid"},[n("div",{staticClass:"contents"},[n("div",{staticClass:"svg-wrapper"},[n("svg",{attrs:{viewbox:e.viewBox,width:e.viewWidth,height:e.viewHeight}},e._l(e.scale,function(t,s){return n("g",{key:t.id,class:t},e._l(e.length,function(a){return n("rect",{key:a.id,staticClass:"note",class:e.paintNote(a,t),attrs:{width:e.getNoteWidth(e.length),height:e.getNoteHeight(e.scale.length),x:e.getNoteX(e.length,a),y:e.getNoteY(e.scale.length,s)},on:{click:function(n){e.testPlay(t),e.check(a,t)}}})}))}))])])])},staticRenderFns:[]};var m=n("VU/8")(p,d,!1,function(e){n("OkOd")},"data-v-8b13b50c",null).exports,f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"player"},[t("h1",[this._v("Player")]),this._v(" "),t("button",{on:{click:this.play}},[this._v("Play")]),this._v(" "),t("button",{on:{click:this.stop}},[this._v("Stop")])])},staticRenderFns:[]},g=n("VU/8")({name:"Player",methods:{play:function(){this.$emit("play")},stop:function(){this.$emit("stop")}}},f,!1,null,null,null).exports,_={name:"Setting",mixins:[v],data:function(){return{selectedScaleName:"Major(Ionian)",selectedLength:8,selectedBase:4,selectedOctave:1,selectedTempo:120}},methods:{setting:function(){this.$emit("setting",this.selectedScaleName,this.selectedLength,this.selectedBase,this.selectedOctave,this.selectedTempo)}},mounted:function(){this.$nextTick(function(){this.setting()})}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setting"},[n("h1",[e._v("Setting")]),e._v(" "),n("p",[n("label",{attrs:{for:"scaleName"}},[e._v("Scale: ")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedScaleName,expression:"selectedScaleName"}],attrs:{name:"scaleName"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedScaleName=t.target.multiple?n:n[0]}}},e._l(Object.keys(e.config.scales),function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t))])})),e._v(" "),n("label",{attrs:{for:"length"}},[e._v("Length: ")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedLength,expression:"selectedLength"}],attrs:{name:"length"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedLength=t.target.multiple?n:n[0]}}},e._l(e.config.lengthList,function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t))])})),e._v(" "),n("label",{attrs:{for:"base"}},[e._v("Base: ")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedBase,expression:"selectedBase"}],attrs:{name:"base"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedBase=t.target.multiple?n:n[0]}}},e._l(e.config.baseList,function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t))])})),e._v(" "),n("label",{attrs:{for:"octave"}},[e._v("Octave: ")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedOctave,expression:"selectedOctave"}],attrs:{name:"octave"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedOctave=t.target.multiple?n:n[0]}}},e._l(e.config.octaveList,function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t))])})),e._v(" "),n("label",{attrs:{for:"tempo"}},[e._v("Tempo: ")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedTempo,expression:"selectedTempo"}],attrs:{name:"tempo"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedTempo=t.target.multiple?n:n[0]}}},e._l(e.config.tempoList,function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t))])}))]),e._v(" "),n("button",{on:{click:e.setting}},[e._v("Set")])])},staticRenderFns:[]},N=n("VU/8")(_,y,!1,null,null,null).exports,b=(new u.a.Synth).toMaster(),w={name:"Sequencer",mixins:[v],components:{Grid:m,Player:g,Setting:N},data:function(){return{selectedScaleName:"",selectedLength:0,selectedBase:0,selectedOctave:0,selectedTempo:0,scaleNotes:[],scaleNotesShow:[],playNotes:[]}},methods:{testPlay:function(e){b.triggerAttackRelease(e,"8n")},check:function(e,t){var n=e-1;if(0===this.playNotes.length)for(var s=0;s<this.selectedLength;s++)this.playNotes.push(null);this.playNotes[n]!==t?this.playNotes.splice(n,1,t):this.playNotes.splice(n,1,null),console.log(this.playNotes)},play:function(){u.a.Transport.cancel();new u.a.Sequence(function(e,t){b.triggerAttackRelease(t,"8n")},this.playNotes,"8n").start();u.a.Transport.bpm.value=this.selectedTempo,u.a.Transport.start()},stop:function(){u.a.Transport.stop()},setting:function(e,t,n,s,a){var i=this;this.selectedScaleName=e,this.selectedLength=t,this.selectedBase=n,this.selectedOctave=s,this.selectedTempo=a,this.playNotes=[],this.scaleNotes=[];for(var l=this.config.scales[e],o=function(e){if(e>9)return"break";l.forEach(function(t){i.scaleNotes.push(t+e)})},c=this.selectedBase;c<this.selectedBase+this.selectedOctave;c++){if("break"===o(c))break}this.scaleNotesShow=this.scaleNotes.reverse()}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sequencer"},[n("Grid",{attrs:{scale:e.scaleNotesShow,length:e.selectedLength,playNotes:e.playNotes},on:{testPlay:e.testPlay,check:e.check}}),e._v(" "),n("Player",{on:{play:e.play,stop:e.stop}}),e._v(" "),n("Setting",{on:{setting:e.setting}})],1)},staticRenderFns:[]};var S=n("VU/8")(w,k,!1,function(e){n("8dXE")},"data-v-7f016b47",null).exports;s.a.use(c.a),s.a.use(o.a);var A=new c.a({routes:[{path:"/",name:"Sequencer",component:S}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:A,components:{App:i},template:"<App/>"})},OkOd:function(e,t){},b9RT:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.bd3d394f6ea66d37dcd0.js.map