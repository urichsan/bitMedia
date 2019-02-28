(function(t){function e(e){for(var n,l,o=e[0],s=e[1],c=e[2],u=0,f=[];u<o.length;u++)l=o[u],i[l]&&f.push(i[l][0]),i[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},r=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=a("bb71");a("da64");n["a"].use(i["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("MyCrud")],1)],1)},l=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("My CRUD")]),a("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("New Item")]),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Value"},model:{value:t.editedItem.value,callback:function(e){t.$set(t.editedItem,"value",e)},expression:"editedItem.value"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.myValues},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.value))]),a("td",{staticClass:"justify-center layout px-0"},[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.editItem(e.item)}}},[t._v("\n          edit\n        ")]),a("v-icon",{attrs:{small:""},on:{click:function(a){return t.deleteItem(e.item)}}},[t._v("\n          delete\n        ")])],1)]}}])},[a("template",{slot:"no-data"},[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])],1)],2)],1)},s=[],c=a("5176"),d=a.n(c),u=a("bc3a"),f=a.n(u),v={data:function(){return{dialog:!1,headers:[{text:"Values",align:"left",sortable:!1,value:"name"},{text:"Actions",align:"center",value:"name",sortable:!1}],myValues:[],editedIndex:-1,editedItem:{value:""},defaultItem:{value:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;f.a.get("./api/values").then(function(e){t.myValues=e})},editItem:function(t){this.editedIndex=this.myValues.indexOf(t),this.editedItem=d()({},t),this.dialog=!0},deleteItem:function(t){var e=this.myValues.indexOf(t);confirm("Are you sure you want to delete this item?")&&this.myValues.splice(e,1)},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editedItem=d()({},t.defaultItem),t.editedIndex=-1},300)},save:function(){this.editedIndex>-1?d()(this.myValues[this.editedIndex],this.editedItem):this.myValues.push(this.editedItem),this.close()}}},m=v,p=a("2877"),h=a("6544"),b=a.n(h),y=a("8336"),x=a("b0af"),V=a("99d9"),g=a("12b2"),I=a("a523"),_=a("8fea"),w=a("169a"),C=a("ce7e"),k=a("0e8f"),O=a("132d"),T=a("a722"),j=a("9910"),S=a("2677"),M=a("71d9"),P=a("2a7f"),A=Object(p["a"])(m,o,s,!1,null,null,null),D=A.exports;b()(A,{VBtn:y["a"],VCard:x["a"],VCardActions:V["a"],VCardText:V["b"],VCardTitle:g["a"],VContainer:I["a"],VDataTable:_["a"],VDialog:w["a"],VDivider:C["a"],VFlex:k["a"],VIcon:O["a"],VLayout:T["a"],VSpacer:j["a"],VTextField:S["a"],VToolbar:M["a"],VToolbarTitle:P["a"]});var $={name:"App",components:{MyCrud:D},data:function(){return{}}},z=$,E=a("7496"),F=a("549c"),J=Object(p["a"])(z,r,l,!1,null,null,null),N=J.exports;b()(J,{VApp:E["a"],VContent:F["a"]}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(N)}}).$mount("#app")}});
//# sourceMappingURL=app.ef2ef99d.js.map