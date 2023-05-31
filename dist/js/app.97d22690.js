(function(){"use strict";var t={1129:function(t,e,n){var o=n(9963),r=n(6252);const i={id:"app",style:{padding:"20px"}};function a(t,e,n,o,a,c){const l=(0,r.up)("LocationSearch"),u=(0,r.up)("TimeZoneDisplay"),s=(0,r.up)("LocationMap"),p=(0,r.up)("LocationTable");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(l,{onSearch:o.searchLocation,onCurrentLocation:o.getCurrentLocation},null,8,["onSearch","onCurrentLocation"]),(0,r.Wm)(u,{location:o.currentLocation},null,8,["location"]),(0,r.Wm)(s,{location:o.currentLocation},null,8,["location"]),(0,r.Wm)(p,{locations:o.locations,onDelete:o.deleteLocations,onGoto:o.goto},null,8,["locations","onDelete","onGoto"])])}var c=n(2262);const l={style:{margin:"auto",width:"500px"}};function u(t,e,n,i,a,c){const u=(0,r.up)("n-input"),s=(0,r.up)("n-button"),p=(0,r.up)("n-input-group");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{type:"text",value:i.location,"onUpdate:value":e[0]||(e[0]=t=>i.location=t),onKeyup:(0,o.D2)(i.searchLocation,["enter"]),placeholder:"Enter a location",loading:i.loading},null,8,["value","onKeyup","loading"]),(0,r.Wm)(s,{onClick:i.searchLocation,"icon-placement":"left",disabled:i.loading||!i.location.length},{default:(0,r.w5)((()=>[(0,r.Uk)("Search")])),_:1},8,["onClick","disabled"]),(0,r.Wm)(s,{onClick:i.getCurrentLocation,"icon-placement":"left",disabled:i.loading},{default:(0,r.w5)((()=>[(0,r.Uk)("Get Current Location")])),_:1},8,["onClick","disabled"])])),_:1})])}var s=n(6201),p=n(1897),d=n(1109),f=n(6154),m={components:{NButton:s.ZP,NInput:p.Z,NInputGroup:d.Z},setup(t,e){const n=(0,c.iH)(""),o=(0,c.iH)(!1),r=async()=>{try{o.value=!0;const t=n.value.replace(" ","+"),r=await f.Z.get(`https://api.opencagedata.com/geocode/v1/json?q=${t}&key=6051ea151ae5434e9b13621e37a5ffea&language=en&pretty=1`),i=r.data?.results;if(!i.length)return;const a=i[0];e.emit("search",{name:n?.value??"",position:[a.geometry.lat,a.geometry.lng]})}finally{n.value="",setTimeout((()=>{o.value=!1}),2e3)}},i=()=>{o.value=!0,navigator.geolocation?navigator.geolocation.getCurrentPosition((t=>{e.emit("current-location",{lat:t.coords.latitude,lng:t.coords.longitude})}),(()=>{alert("Unable to retrieve your location")})):alert("Geolocation is not supported by your browser"),setTimeout((()=>{o.value=!1}),2e3)};return{loading:o,location:n,searchLocation:r,getCurrentLocation:i}}},g=n(3744);const v=(0,g.Z)(m,[["render",u]]);var y=v;const h={style:{height:"500px",margin:"20px auto"}};function b(t,e,n,o,i,a){const c=(0,r.up)("l-tile-layer"),l=(0,r.up)("l-marker"),u=(0,r.up)("l-map");return(0,r.wg)(),(0,r.iD)("div",h,[(0,r.Wm)(u,{style:{height:"100%",width:"80%",margin:"auto"},center:n.location,zoom:i.zoom},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{url:i.url,attribution:i.attribution},null,8,["url","attribution"]),(0,r.Wm)(l,{"lat-lng":n.location},null,8,["lat-lng"])])),_:1},8,["center","zoom"])])}var k=n(7713),w={components:{LMap:k.iA,LTileLayer:k.Hw,LMarker:k.$R},props:{location:{type:Array,required:!0}},data(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:10}}};const L=(0,g.Z)(w,[["render",b]]);var C=L;const O={style:{width:"1100px",margin:"auto"}};function j(t,e,n,o,i,a){const c=(0,r.up)("n-button"),l=(0,r.up)("n-data-table");return(0,r.wg)(),(0,r.iD)("div",O,[(0,r.Wm)(c,{strong:"",secondary:"",type:"error",style:{"margin-bottom":"5px"},onClick:o.deleteSelected,disabled:!o.checkedRowKeys.length},{default:(0,r.w5)((()=>[(0,r.Uk)("Delete")])),_:1},8,["onClick","disabled"]),(0,r.Wm)(l,{columns:o.columns,data:n.locations,pagination:o.pagination,"row-key":o.rowKey,"onUpdate:checkedRowKeys":o.handleCheck},null,8,["columns","data","pagination","row-key","onUpdate:checkedRowKeys"])])}var T=n(4355),Z={props:{locations:{type:Array,required:!0}},components:{NDataTable:T.Z,NButton:s.ZP},setup(t,e){const n=(0,c.iH)([]),o=[{type:"selection",key:"isChecked"},{title:"Location",key:"name"},{title:"Position",key:"position"},{title:"Action",key:"actions",render(t){return(0,r.h)(s.ZP,{size:"small",onClick:()=>i(t)},{default:()=>"Go"})}}],i=t=>{e.emit("goto",t.position)},a=()=>{e.emit("delete",n.value),n.value=[]};return{columns:o,checkedRowKeys:n,pagination:{pageSize:5},deleteSelected:a,rowKey:t=>t.name,handleCheck(t){n.value=t}}}};const _=(0,g.Z)(Z,[["render",j]]);var P=_,x=n(3577);const D={style:{"margin-top":"10px"}},S={key:0,style:{margin:"auto",width:"fit-content"}},W={key:1,style:{margin:"auto",width:"fit-content"}};function z(t,e,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",D,[o.timeZone?((0,r.wg)(),(0,r.iD)("div",S," Time Zone: "+(0,x.zw)(o.timeZone),1)):(0,r.kq)("",!0),o.localTime?((0,r.wg)(),(0,r.iD)("div",W," Local Time: "+(0,x.zw)(o.localTime),1)):(0,r.kq)("",!0)])}var N={props:{location:{type:Array,required:!0}},setup(t){const e=(0,c.iH)(null),n=(0,c.iH)(null),o=async()=>{try{console.log("hit");const o=await f.Z.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=P49NO524YW3A&format=json&by=position&lat=${t.location[0]}&lng=${t.location[1]}`);e.value=o.data.zoneName,n.value=o.data.formatted}catch(o){console.error(o)}};return(0,r.YP)(t.location,o,{immediate:!0}),{timeZone:e,localTime:n}}};const A=(0,g.Z)(N,[["render",z]]);var E=A,H={components:{LocationSearch:y,LocationMap:C,LocationTable:P,TimeZoneDisplay:E},setup(){const t=(0,c.iH)([]),e=(0,c.iH)([40,40]),n=n=>{e.value=n.position,t.value.unshift({name:n.name,position:n.position,isChecked:!1})},o=t=>{n({name:"Your Current Position",position:[t.lat,t.lng]})},r=e=>{t.value=t.value.filter((t=>!e.includes(t.name)))},i=t=>{e.value=t};return{locations:t,currentLocation:e,searchLocation:n,getCurrentLocation:o,deleteLocations:r,goto:i}}};const K=(0,g.Z)(H,[["render",a]]);var M=K;(0,o.ri)(M).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(s=0;s<t.length;s++){o=t[s][0],r=t[s][1],i=t[s][2];for(var c=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(c=!1,i<a&&(a=i));if(c){t.splice(s--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[o,r,i]}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var a={};t=t||[null,e({}),e([]),e(e)];for(var c=2&r&&o;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return o[t]}}));return a["default"]=function(){return o},n.d(i,a),i}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{93:"9f310703",243:"6550ec19",431:"cb8aa360",633:"fdf33463",858:"42dadfd1"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="my-map-vue:";n.l=function(o,r,i,a){if(t[o])t[o].push(r);else{var c,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var p=u[s];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==e+i){c=p;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+i),c.src=o),t[o]=[r];var d=function(e,n){c.onerror=c.onload=null,clearTimeout(f);var r=t[o];if(delete t[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/my-vue-map/"}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(e),c=new Error,l=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};n.l(a,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],c=o[1],l=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(l)var s=l(n)}for(e&&e(o);u<a.length;u++)i=a[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(s)},o=self["webpackChunkmy_map_vue"]=self["webpackChunkmy_map_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1129)}));o=n.O(o)})();
//# sourceMappingURL=app.97d22690.js.map