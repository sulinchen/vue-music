webpackJsonp([2],{NO5Y:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("YOyO"),a=s("CR9a"),c=s("bh5B"),o=s("9cIF"),i=s("woOf"),r=s.n(i),h=s("Gak4"),u=s("T452");function l(){var t=r()({},u.a,{uin:0,needNewCode:1,platform:"h5"});return Object(h.a)("https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",t,u.c)}n.a,a.a,c.a;var d={data:function(){return{songList:[],hotKey:"",txt:""}},components:{search:n.a,searchResult:a.a,scroll:c.a},methods:{searchMusic:function(t){var e=this;t&&(Object(o.b)(t).then(function(t){200===t.code&&(e.songList=t.data)}),this.txt=t)},clearSearch:function(){this.songList=[]},addSearch:function(t){this.songList=t}},computed:{},created:function(){var t=this;l().then(function(e){0===e.code?t.hotKey=e.data.hotkey:t.$toast("获取热门搜索失败~~")})},mounted:function(){}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-songs"},[s("search",{ref:"search",attrs:{placeholder:"搜索歌曲、歌手",txt:t.txt},on:{query:t.searchMusic,clearSearch:t.clearSearch}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.songList.length,expression:"!songList.length"}],staticClass:"hot-key"},[s("h1",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),s("ul",t._l(t.hotKey,function(e){return s("li",{key:e.id,staticClass:"item",on:{click:function(s){t.searchMusic(e.k)}}},[s("span",[t._v(t._s(e.k))])])}))]),t._v(" "),s("search-result",{directives:[{name:"show",rawName:"v-show",value:t.songList.length,expression:"songList.length"}],attrs:{songList:t.songList}})],1)},staticRenderFns:[]};var v=s("VU/8")(d,f,!1,function(t){s("q9HS")},"data-v-bc34e29e",null);e.default=v.exports},q9HS:function(t,e){}});
//# sourceMappingURL=2.472e2604cec13d814bda.js.map