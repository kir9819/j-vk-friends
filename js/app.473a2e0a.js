(function(e){function n(n){for(var t,o,s=n[0],c=n[1],u=n[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);p&&p(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,n=0;n<a.length;n++){for(var r=a[n],t=!0,o=1;o<r.length;o++){var s=r[o];0!==i[s]&&(t=!1)}t&&(a.splice(n--,1),e=c(c.s=r[0]))}return e}var t={},o={app:0},i={app:0},a=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e502b":"11c18899","chunk-5910860f":"37816c42","chunk-737cd690":"378c66c5"}[e]+".js"}function c(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var n=[],r={"chunk-5910860f":1,"chunk-737cd690":1};o[e]?n.push(o[e]):0!==o[e]&&r[e]&&n.push(o[e]=new Promise((function(n,r){for(var t="css/"+({}[e]||e)+"."+{"chunk-2d0e502b":"31d6cfe0","chunk-5910860f":"016a8b76","chunk-737cd690":"8b918cc3"}[e]+".css",i=c.p+t,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===t||d===i))return n()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],d=u.getAttribute("data-href");if(d===t||d===i)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var t=n&&n.target&&n.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=t,delete o[e],p.parentNode.removeChild(p),r(a)},p.href=i;var l=document.getElementsByTagName("head")[0];l.appendChild(p)})).then((function(){o[e]=0})));var t=i[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,r){t=i[e]=[n,r]}));n.push(t[2]=a);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var f=new Error;u=function(n){d.onerror=d.onload=null,clearTimeout(p);var r=i[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",f.name="ChunkLoadError",f.type=t,f.request=o,r[1](f)}i[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(n)},c.m=e,c.c=t,c.d=function(e,n,r){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(r,t,function(n){return e[n]}.bind(null,t));return r},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/j-vk-friends/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=n,u=u.slice();for(var f=0;f<u.length;f++)n(u[f]);var p=d;a.push([0,"chunk-vendors"]),r()})({0:function(e,n,r){e.exports=r("56d7")},"56d7":function(e,n,r){"use strict";r.r(n);r("e260"),r("e6cf"),r("cca6"),r("a79d");var t=r("2b0e"),o=r("8c4f"),i=(r("d3b7"),[{name:"Home",path:"/",component:function(){return r.e("chunk-737cd690").then(r.bind(null,"bc13"))},meta:{title:"Home"}},{name:"Person",path:"/person/:id",component:function(){return r.e("chunk-2d0e502b").then(r.bind(null,"9350"))},meta:{title:"Person"},props:!0},{name:"Friend",path:"/friend/:id",component:function(){return r.e("chunk-5910860f").then(r.bind(null,"474d"))},meta:{title:"Friend"},props:!0}]);t["a"].use(o["a"]);var a=new o["a"]({mode:"history",base:"/j-vk-friends/",routes:i}),s=a,c=r("e3e2"),u=(r("99af"),r("96cf"),r("1da1")),d="5.89";function f(){if(!window.VK)throw Error;return window.VK}var p=f();function l(){var e="connected"===p._userStatus;return e||c["a"].commit(c["b"].SET_AUTH,!1),e}function h(){return m.apply(this,arguments)}function m(){return m=Object(u["a"])(regeneratorRuntime.mark((function e(){var n,r,t,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=o.length,r=new Array(n),t=0;t<n;t++)r[t]=o[t];if(r[1].v=d,l()){e.next=4;break}throw new Error("Требуется вход");case 4:return e.abrupt("return",new Promise((function(e,n){var t;(t=p.Api).call.apply(t,r.concat([function(r){r.response&&e(r.response),n(r.error)}]))})));case 5:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function E(e){return b.apply(this,arguments)}function b(){return b=Object(u["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h("users.get",{user_id:n,fields:"id,first_name,last_name,is_closed,sex,bdate,photo_100"});case 2:return r=e.sent,r[0].is_closed&&(r[0].error="Профиль закрыт, друзья недоступны"),e.abrupt("return",r[0]);case 5:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function v(e){return _.apply(this,arguments)}function _(){return _=Object(u["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h("friends.get",{user_id:n,fields:"nickname"});case 2:return e.abrupt("return",e.sent.items);case 3:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function O(e){return S.apply(this,arguments)}function S(){return S=Object(u["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h("wall.get",{owner_id:n});case 2:return e.abrupt("return",e.sent.items);case 3:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function g(){return R.apply(this,arguments)}function R(){return R=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){p.Auth.login((function(n){e(!!n.session)}))})));case 1:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}l()&&c["a"].commit(c["b"].SET_AUTH,!0);var w={getFriends:function(e){return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,E(e);case 2:if(r=n.sent,!r.error){n.next=5;break}return n.abrupt("return",{user:r,friends:[]});case 5:return n.next=7,v(e);case 7:return t=n.sent,n.abrupt("return",{user:r,friends:t});case 9:case"end":return n.stop()}}),n)})))()},getWall:O,getAuthStatus:l,login:g},P={install:function(e){e.prototype.$http=w}},y=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[e.error?r("div",{staticClass:"error-message"},[r("span",[e._v(e._s(e.error))]),r("div",{staticClass:"cancel-button white",on:{click:e.cancelError}})]):e._e(),r("div",{attrs:{id:"nav"}},[r("p",[r("router-link",{attrs:{to:{name:"Home"}}},[e._v("Home")])],1),e.isAuthorized?e._e():r("button",{on:{click:e.login}},[e._v("Войти через ВК")])]),e.isAuthorized?r("router-view"):e._e()],1)},T=[],j=r("5530"),k=r("2f62"),N={computed:Object(j["a"])({},Object(k["d"])(["error","isAuthorized"])),methods:Object(j["a"])({},Object(k["c"])([c["b"].SET_ERROR,c["b"].SET_AUTH]),{login:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.t0=e,n.t1=c["b"].SET_AUTH,n.next=4,e.$http.login();case 4:n.t2=n.sent,n.t0[n.t1].call(n.t0,n.t2);case 6:case"end":return n.stop()}}),n)})))()},cancelError:function(){this[c["b"].SET_ERROR]()}})},A=N,x=(r("5c0b"),r("2877")),I=Object(x["a"])(A,y,T,!1,null,null,null),H=I.exports;t["a"].use(P),t["a"].config.productionTip=!1,new t["a"]({router:s,store:c["a"],render:function(e){return e(H)}}).$mount("#app")},"5c0b":function(e,n,r){"use strict";var t=r("9c0c"),o=r.n(t);o.a},"9c0c":function(e,n,r){},e3e2:function(e,n,r){"use strict";r.d(n,"b",(function(){return f}));r("7db0"),r("4160"),r("c975"),r("d81d"),r("13d5"),r("a434"),r("159b");var t,o=r("53ca"),i=r("15fd"),a=r("a38e"),s=r("ade3"),c=r("5530"),u=r("2b0e"),d=r("2f62");u["a"].use(d["a"]);var f={SET_FRIENDS:"SET_FRIENDS",SET_FILTERED_FRIENDS:"SET_FILTERED_FRIENDS",SET_PERSON:"SET_PERSON",REMOVE_FRIENDS:"REMOVE_FRIENDS",REMOVE_PERSON:"REMOVE_PERSON",CHANGE_CHOSEN_PERSONS:"CHANGE_CHOSEN_PERSONS",SET_ERROR:"SET_ERROR",SET_AUTH:"SET_AUTH"},p={1:"Произошла неизвестная ошибка.",2:"Приложение выключено.",3:"Передан неизвестный метод.",4:"Неверная подпись.",5:"Авторизация пользователя не удалась.",6:"Слишком много запросов в секунду.",7:"Нет прав для выполнения этого действия.",8:"Неверный запрос.",9:"Слишком много однотипных действий.",10:"Произошла внутренняя ошибка сервера.",11:"В тестовом режиме приложение должно быть выключено или пользователь должен быть залогинен.",14:"Требуется ввод кода с картинки (Captcha).",15:"Доступ запрещён.",16:"Требуется выполнение запросов по протоколу HTTPS, т.к. пользователь включил настройку, требующую работу через безопасное соединение.",17:"Требуется валидация пользователя.",18:"Страница удалена или заблокирована.",20:"Данное действие запрещено для не Standalone приложений.",21:"Данное действие разрешено только для Standalone и Open API приложений.",23:"Метод был выключен.",24:"Требуется подтверждение со стороны пользователя.",27:"Ключ доступа сообщества недействителен.",28:"Ключ доступа приложения недействителен.",29:"Достигнут количественный лимит на вызов метода",30:"Профиль является приватным",33:"Not implemented yet",100:"Один из необходимых параметров был не передан или неверен.",101:"Неверный API ID приложения.",113:"Неверный идентификатор пользователя.",150:"Неверный timestamp.",200:"Доступ к альбому запрещён.",201:"Доступ к аудио запрещён.",203:"Доступ к группе запрещён.",300:"Альбом переполнен.",500:"Действие запрещено. Вы должны включить переводы голосов в настройках приложения.",600:"Нет прав на выполнение данных операций с рекламным кабинетом.",603:"Произошла ошибка при работе с рекламным кабинетом.",3300:"Recaptcha needed",3301:"Phone validation needed",3302:"Password validation needed",3303:"Otp app validation needed",3304:"Email confirmation needed",3305:"Assert votes"},l=new d["a"].Store({state:{persons:{},friends:{},friendsWithPersons:[],filteredPersons:[],chosenPersons:[],error:null,isAuthorized:!1},mutations:(t={},Object(s["a"])(t,f.SET_PERSON,(function(e,n){var r=n.person,t=n.friendIds;e.persons[r.id]||(r.friendIds=t,r.friendsCount=t.length,e.persons=Object(c["a"])({},e.persons,Object(s["a"])({},r.id,r)))})),Object(s["a"])(t,f.SET_FRIENDS,(function(e,n){var r=n.reduce((function(e,n){return e[n.id]=n,e}),{});e.friends=Object(c["a"])({},e.friends,{},r)})),Object(s["a"])(t,f.SET_FILTERED_FRIENDS,(function(e){var n=e.chosenPersons,r=e.persons;e.friendsWithPersons=[],n.forEach((function(n){r[n].friendIds.forEach((function(r){var t=e.friendsWithPersons.find((function(e){return e.id===r}));t?t.persons.push(n):e.friendsWithPersons.push({id:r,persons:[n]})}))})),e.filteredPersons=e.chosenPersons})),Object(s["a"])(t,f.REMOVE_FRIENDS,(function(e,n){var r=[];e.friendsWithPersons.forEach((function(e){var t=e.persons.indexOf(n);if(-1!==t){if(1===e.persons.length)return;e.persons.splice(t,1)}r.push(e)})),e.friendsWithPersons=r})),Object(s["a"])(t,f.REMOVE_PERSON,(function(e,n){var r=e.persons,t=(r[n],Object(i["a"])(r,[n].map(a["a"]))),o=e.chosenPersons.indexOf(n);-1!==o&&e.chosenPersons.splice(o,1),e.persons=t})),Object(s["a"])(t,f.CHANGE_CHOSEN_PERSONS,(function(e,n){e.chosenPersons=n})),Object(s["a"])(t,f.SET_ERROR,(function(e,n){n?n&&"object"!==Object(o["a"])(n)?e.error=n:n.message?e.error=n.message:n.error_code?e.error=p[n.error_code]:e.error=n:e.error=""})),Object(s["a"])(t,f.SET_AUTH,(function(e,n){e.isAuthorized=n})),t),actions:{removePerson:function(e,n){var r=e.commit;r(f.REMOVE_PERSON,n),r(f.REMOVE_FRIENDS,n)},addPerson:function(e,n){var r=e.state,t=e.commit,o=n.person,i=n.friends;if(r.persons[o.id])throw new Error("Пользователь уже добавлен");t(f.SET_PERSON,{person:o,friendIds:i.map((function(e){return e.id}))}),t(f.SET_FRIENDS,i)}}});n["a"]=l}});
//# sourceMappingURL=app.473a2e0a.js.map