(()=>{var e={195:(e,t,n)=>{var r=n(981),i=n(332),a=n(799);e.exports=function(e){var t=!1,n=function(n,i){if(e.page<1)return e.listContainer.style.display="none",void(t=!0);t&&(e.listContainer.style.display="block");var a,s=e.matchingItems.length,l=e.i,c=e.page,u=Math.ceil(s/c),d=Math.ceil(l/c),f=i.innerWindow||2,p=i.left||i.outerWindow||0,m=i.right||i.outerWindow||0;m=u-m,n.clear();for(var h=1;h<=u;h++){var g=d===h?"active":"";o.number(h,p,m,d,f)?(a=n.add({page:h,dotted:!1})[0],g&&r(a.elm).add(g),a.elm.firstChild.setAttribute("data-i",h),a.elm.firstChild.setAttribute("data-page",c)):o.dotted(n,h,p,m,d,f,n.size())&&(a=n.add({page:"...",dotted:!0})[0],r(a.elm).add("disabled"))}},o={number:function(e,t,n,r,i){return this.left(e,t)||this.right(e,n)||this.innerWindow(e,r,i)},left:function(e,t){return e<=t},right:function(e,t){return e>t},innerWindow:function(e,t,n){return e>=t-n&&e<=t+n},dotted:function(e,t,n,r,i,a,o){return this.dottedLeft(e,t,n,r,i,a)||this.dottedRight(e,t,n,r,i,a,o)},dottedLeft:function(e,t,n,r,i,a){return t==n+1&&!this.innerWindow(t,i,a)&&!this.right(t,r)},dottedRight:function(e,t,n,r,i,a,o){return!e.items[o-1].values().dotted&&t==r&&!this.innerWindow(t,i,a)&&!this.right(t,r)}};return function(t){var r=new a(e.listContainer.id,{listClass:t.paginationClass||"pagination",item:t.item||"<li><a class='page' href='#'></a></li>",valueNames:["page","dotted"],searchClass:"pagination-search-that-is-not-supposed-to-exist",sortClass:"pagination-sort-that-is-not-supposed-to-exist"});i.bind(r.listContainer,"click",function(t){var n=t.target||t.srcElement,r=e.utils.getAttribute(n,"data-page"),i=e.utils.getAttribute(n,"data-i");i&&e.show((i-1)*r+1,r)}),e.on("updated",function(){n(r,t)}),n(r,t)}}},200:e=>{e.exports=function(e,t){var n=e.getAttribute&&e.getAttribute(t)||null;if(!n)for(var r=e.attributes,i=r.length,a=0;a<i;a++)void 0!==r[a]&&r[a].nodeName===t&&(n=r[a].nodeValue);return n}},212:e=>{e.exports=function(e){if(void 0===e)return[];if(null===e)return[null];if(e===window)return[window];if("string"==typeof e)return[e];if(function(e){return"[object Array]"===Object.prototype.toString.call(e)}(e))return e;if("number"!=typeof e.length)return[e];if("function"==typeof e&&e instanceof Function)return[e];for(var t=[],n=0,r=e.length;n<r;n++)(Object.prototype.hasOwnProperty.call(e,n)||n in e)&&t.push(e[n]);return t.length?t:[]}},249:e=>{e.exports=function(e){return e.handlers.filterStart=e.handlers.filterStart||[],e.handlers.filterComplete=e.handlers.filterComplete||[],function(t){if(e.trigger("filterStart"),e.i=1,e.reset.filter(),void 0===t)e.filtered=!1;else{e.filtered=!0;for(var n=e.items,r=0,i=n.length;r<i;r++){var a=n[r];t(a)?a.filtered=!0:a.filtered=!1}}return e.update(),e.trigger("filterComplete"),e.visibleItems}}},252:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(i of t.entries())if(!n.has(i[0]))return!1;for(i of t.entries())if(!e(i[1],n.get(i[0])))return!1;return!0}if(t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(i of t.entries())if(!n.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((r=t.length)!=n.length)return!1;for(i=r;0!==i--;)if(t[i]!==n[i])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;0!==i--;){var o=a[i];if(!e(t[o],n[o]))return!1}return!0}return t!=t&&n!=n}},332:(e,t,n)=>{var r=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",a="addEventListener"!==r?"on":"",o=n(212);t.bind=function(e,t,n,i){for(var s=0,l=(e=o(e)).length;s<l;s++)e[s][r](a+t,n,i||!1)},t.unbind=function(e,t,n,r){for(var s=0,l=(e=o(e)).length;s<l;s++)e[s][i](a+t,n,r||!1)},t.debounce=function(e,t,n){var r;return t?function(){var i=this,a=arguments,o=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(i,a)},t),o&&e.apply(i,a)}:e}},340:e=>{e.exports=function(e){return(e=null===(e=void 0===e?"":e)?"":e).toString()}},343:e=>{e.exports=function(e){var t={els:void 0,clear:function(){for(var n=0,r=t.els.length;n<r;n++)e.utils.classes(t.els[n]).remove("asc"),e.utils.classes(t.els[n]).remove("desc")},getOrder:function(t){var n=e.utils.getAttribute(t,"data-order");return"asc"==n||"desc"==n?n:e.utils.classes(t).has("desc")?"asc":e.utils.classes(t).has("asc")?"desc":"asc"},getInSensitive:function(t,n){var r=e.utils.getAttribute(t,"data-insensitive");n.insensitive="false"!==r},setOrder:function(n){for(var r=0,i=t.els.length;r<i;r++){var a=t.els[r];if(e.utils.getAttribute(a,"data-sort")===n.valueName){var o=e.utils.getAttribute(a,"data-order");"asc"==o||"desc"==o?o==n.order&&e.utils.classes(a).add(n.order):e.utils.classes(a).add(n.order)}}}},n=function(){e.trigger("sortStart");var n={},r=arguments[0].currentTarget||arguments[0].srcElement||void 0;r?(n.valueName=e.utils.getAttribute(r,"data-sort"),t.getInSensitive(r,n),n.order=t.getOrder(r)):((n=arguments[1]||n).valueName=arguments[0],n.order=n.order||"asc",n.insensitive=void 0===n.insensitive||n.insensitive),t.clear(),t.setOrder(n);var i,a=n.sortFunction||e.sortFunction||null,o="desc"===n.order?-1:1;i=a?function(e,t){return a(e,t,n)*o}:function(t,r){var i=e.utils.naturalSort;return i.alphabet=e.alphabet||n.alphabet||void 0,!i.alphabet&&n.insensitive&&(i=e.utils.naturalSort.caseInsensitive),i(t.values()[n.valueName],r.values()[n.valueName])*o},e.items.sort(i),e.update(),e.trigger("sortComplete")};return e.handlers.sortStart=e.handlers.sortStart||[],e.handlers.sortComplete=e.handlers.sortComplete||[],t.els=e.utils.getByClass(e.listContainer,e.sortClass),e.utils.events.bind(t.els,"click",n),e.on("searchStart",t.clear),e.on("filterStart",t.clear),n}},378:e=>{e.exports=function(e,t,n,r){return(r=r||{}).test&&r.getElementsByClassName||!r.test&&document.getElementsByClassName?function(e,t,n){return n?e.getElementsByClassName(t)[0]:e.getElementsByClassName(t)}(e,t,n):r.test&&r.querySelector||!r.test&&document.querySelector?function(e,t,n){return t="."+t,n?e.querySelector(t):e.querySelectorAll(t)}(e,t,n):function(e,t,n){for(var r=[],i=e.getElementsByTagName("*"),a=i.length,o=new RegExp("(^|\\s)"+t+"(\\s|$)"),s=0,l=0;s<a;s++)if(o.test(i[s].className)){if(n)return i[s];r[l]=i[s],l++}return r}(e,t,n)}},399:e=>{e.exports={aqua:/#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,azure:/#f0ffff(ff)?(?!\w)/gi,beige:/#f5f5dc(ff)?(?!\w)/gi,bisque:/#ffe4c4(ff)?(?!\w)/gi,black:/#000000(ff)?(?!\w)|#000(f)?(?!\w)/gi,blue:/#0000ff(ff)?(?!\w)|#00f(f)?(?!\w)/gi,brown:/#a52a2a(ff)?(?!\w)/gi,coral:/#ff7f50(ff)?(?!\w)/gi,cornsilk:/#fff8dc(ff)?(?!\w)/gi,crimson:/#dc143c(ff)?(?!\w)/gi,cyan:/#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,darkblue:/#00008b(ff)?(?!\w)/gi,darkcyan:/#008b8b(ff)?(?!\w)/gi,darkgrey:/#a9a9a9(ff)?(?!\w)/gi,darkred:/#8b0000(ff)?(?!\w)/gi,deeppink:/#ff1493(ff)?(?!\w)/gi,dimgrey:/#696969(ff)?(?!\w)/gi,gold:/#ffd700(ff)?(?!\w)/gi,green:/#008000(ff)?(?!\w)/gi,grey:/#808080(ff)?(?!\w)/gi,honeydew:/#f0fff0(ff)?(?!\w)/gi,hotpink:/#ff69b4(ff)?(?!\w)/gi,indigo:/#4b0082(ff)?(?!\w)/gi,ivory:/#fffff0(ff)?(?!\w)/gi,khaki:/#f0e68c(ff)?(?!\w)/gi,lavender:/#e6e6fa(ff)?(?!\w)/gi,lime:/#00ff00(ff)?(?!\w)|#0f0(f)?(?!\w)/gi,linen:/#faf0e6(ff)?(?!\w)/gi,maroon:/#800000(ff)?(?!\w)/gi,moccasin:/#ffe4b5(ff)?(?!\w)/gi,navy:/#000080(ff)?(?!\w)/gi,oldlace:/#fdf5e6(ff)?(?!\w)/gi,olive:/#808000(ff)?(?!\w)/gi,orange:/#ffa500(ff)?(?!\w)/gi,orchid:/#da70d6(ff)?(?!\w)/gi,peru:/#cd853f(ff)?(?!\w)/gi,pink:/#ffc0cb(ff)?(?!\w)/gi,plum:/#dda0dd(ff)?(?!\w)/gi,purple:/#800080(ff)?(?!\w)/gi,red:/#ff0000(ff)?(?!\w)|#f00(f)?(?!\w)/gi,salmon:/#fa8072(ff)?(?!\w)/gi,seagreen:/#2e8b57(ff)?(?!\w)/gi,seashell:/#fff5ee(ff)?(?!\w)/gi,sienna:/#a0522d(ff)?(?!\w)/gi,silver:/#c0c0c0(ff)?(?!\w)/gi,skyblue:/#87ceeb(ff)?(?!\w)/gi,snow:/#fffafa(ff)?(?!\w)/gi,tan:/#d2b48c(ff)?(?!\w)/gi,teal:/#008080(ff)?(?!\w)/gi,thistle:/#d8bfd8(ff)?(?!\w)/gi,tomato:/#ff6347(ff)?(?!\w)/gi,violet:/#ee82ee(ff)?(?!\w)/gi,wheat:/#f5deb3(ff)?(?!\w)/gi,white:/#ffffff(ff)?(?!\w)|#fff(f)?(?!\w)/gi}},433:e=>{e.exports=function(e){for(var t,n=Array.prototype.slice.call(arguments,1),r=0;t=n[r];r++)if(t)for(var i in t)e[i]=t[i];return e}},481:e=>{e.exports=function(e,t,n){var r=n.location||0,i=n.distance||100,a=n.threshold||.4;if(t===e)return!0;if(t.length>32)return!1;var o=r,s=function(){var e,n={};for(e=0;e<t.length;e++)n[t.charAt(e)]=0;for(e=0;e<t.length;e++)n[t.charAt(e)]|=1<<t.length-e-1;return n}();function l(e,n){var r=e/t.length,a=Math.abs(o-n);return i?r+a/i:a?1:r}var c=a,u=e.indexOf(t,o);-1!=u&&(c=Math.min(l(0,u),c),-1!=(u=e.lastIndexOf(t,o+t.length))&&(c=Math.min(l(0,u),c)));var d,f,p=1<<t.length-1;u=-1;for(var m,h=t.length+e.length,g=0;g<t.length;g++){for(d=0,f=h;d<f;)l(g,o+f)<=c?d=f:h=f,f=Math.floor((h-d)/2+d);h=f;var b=Math.max(1,o-f+1),v=Math.min(o+f,e.length)+t.length,y=Array(v+2);y[v+1]=(1<<g)-1;for(var w=v;w>=b;w--){var x=s[e.charAt(w-1)];if(y[w]=0===g?(y[w+1]<<1|1)&x:(y[w+1]<<1|1)&x|(m[w+1]|m[w])<<1|1|m[w+1],y[w]&p){var _=l(g,w-1);if(_<=c){if(c=_,!((u=w-1)>o))break;b=Math.max(1,2*o-u)}}}if(l(g+1,o)>c)break;m=y}return!(u<0)}},608:e=>{e.exports=function(e){return function(t,n,r){var i=this;this._values={},this.found=!1,this.filtered=!1,this.values=function(t,n){if(void 0===t)return i._values;for(var r in t)i._values[r]=t[r];!0!==n&&e.templater.set(i,i.values())},this.show=function(){e.templater.show(i)},this.hide=function(){e.templater.hide(i)},this.matching=function(){return e.filtered&&e.searched&&i.found&&i.filtered||e.filtered&&!e.searched&&i.filtered||!e.filtered&&e.searched&&i.found||!e.filtered&&!e.searched},this.visible=function(){return!(!i.elm||i.elm.parentNode!=e.list)},function(t,n,r){if(void 0===n)r?i.values(t,r):i.values(t);else{i.elm=n;var a=e.templater.get(i,t);i.values(a)}}(t,n,r)}}},647:e=>{e.exports=function(e){var t,n,r,i={resetList:function(){e.i=1,e.templater.clear(),r=void 0},setOptions:function(e){2==e.length&&e[1]instanceof Array?t=e[1]:2==e.length&&"function"==typeof e[1]?(t=void 0,r=e[1]):3==e.length?(t=e[1],r=e[2]):t=void 0},setColumns:function(){0!==e.items.length&&void 0===t&&(t=void 0===e.searchColumns?i.toArray(e.items[0].values()):e.searchColumns)},setSearchString:function(t){t=(t=e.utils.toString(t).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),n=t},toArray:function(e){var t=[];for(var n in e)t.push(n);return t}},a=function(a){return e.trigger("searchStart"),i.resetList(),i.setSearchString(a),i.setOptions(arguments),i.setColumns(),""===n?(e.reset.search(),e.searched=!1):(e.searched=!0,r?r(n,t):function(){for(var r,i=[],a=n;null!==(r=a.match(/"([^"]+)"/));)i.push(r[1]),a=a.substring(0,r.index)+a.substring(r.index+r[0].length);(a=a.trim()).length&&(i=i.concat(a.split(/\s+/)));for(var o=0,s=e.items.length;o<s;o++){var l=e.items[o];if(l.found=!1,i.length){for(var c=0,u=i.length;c<u;c++){for(var d=!1,f=0,p=t.length;f<p;f++){var m=l.values(),h=t[f];if(m.hasOwnProperty(h)&&void 0!==m[h]&&null!==m[h]&&-1!==("string"!=typeof m[h]?m[h].toString():m[h]).toLowerCase().indexOf(i[c])){d=!0;break}}if(!d)break}l.found=d}}}()),e.update(),e.trigger("searchComplete"),e.visibleItems};return e.handlers.searchStart=e.handlers.searchStart||[],e.handlers.searchComplete=e.handlers.searchComplete||[],e.utils.events.bind(e.utils.getByClass(e.listContainer,e.searchClass),"keyup",e.utils.events.debounce(function(t){var n=t.target||t.srcElement;""===n.value&&!e.searched||a(n.value)},e.searchDelay)),e.utils.events.bind(e.utils.getByClass(e.listContainer,e.searchClass),"input",function(e){""===(e.target||e.srcElement).value&&a("")}),a}},672:(e,t,n)=>{e.exports=function(e){var t=n(608)(e),r=function(n,r){for(var i=0,a=n.length;i<a;i++)e.items.push(new t(r,n[i]))},i=function(t,n){var a=t.splice(0,50);r(a,n),t.length>0?setTimeout(function(){i(t,n)},1):(e.update(),e.trigger("parseComplete"))};return e.handlers.parseComplete=e.handlers.parseComplete||[],function(){var t=function(e){for(var t=e.childNodes,n=[],r=0,i=t.length;r<i;r++)void 0===t[r].data&&n.push(t[r]);return n}(e.list),n=e.valueNames;e.indexAsync?i(t,n):r(t,n)}}},717:e=>{e.exports=function(e){var t=function(n,r,i){var a=n.splice(0,50);i=(i=i||[]).concat(e.add(a)),n.length>0?setTimeout(function(){t(n,r,i)},1):(e.update(),r(i))};return t}},774:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;0!==i--;){var o=a[i];if(!("_owner"===o&&t.$$typeof||e(t[o],n[o])))return!1}return!0}return t!=t&&n!=n}},799:(e,t,n)=>{var r=n(813),i=n(378),a=n(433),o=n(859),s=n(332),l=n(340),c=n(981),u=n(200),d=n(212);e.exports=function(e,t,f){var p,m=this,h=n(608)(m),g=n(717)(m),b=n(195)(m);p={start:function(){m.listClass="list",m.searchClass="search",m.sortClass="sort",m.page=1e4,m.i=1,m.items=[],m.visibleItems=[],m.matchingItems=[],m.searched=!1,m.filtered=!1,m.searchColumns=void 0,m.searchDelay=0,m.handlers={updated:[]},m.valueNames=[],m.utils={getByClass:i,extend:a,indexOf:o,events:s,toString:l,naturalSort:r,classes:c,getAttribute:u,toArray:d},m.utils.extend(m,t),m.listContainer="string"==typeof e?document.getElementById(e):e,m.listContainer&&(m.list=i(m.listContainer,m.listClass,!0),m.parse=n(672)(m),m.templater=n(939)(m),m.search=n(647)(m),m.filter=n(249)(m),m.sort=n(343)(m),m.fuzzySearch=n(844)(m,t.fuzzySearch),this.handlers(),this.items(),this.pagination(),m.update())},handlers:function(){for(var e in m.handlers)m[e]&&m.handlers.hasOwnProperty(e)&&m.on(e,m[e])},items:function(){m.parse(m.list),void 0!==f&&m.add(f)},pagination:function(){if(void 0!==t.pagination){!0===t.pagination&&(t.pagination=[{}]),void 0===t.pagination[0]&&(t.pagination=[t.pagination]);for(var e=0,n=t.pagination.length;e<n;e++)b(t.pagination[e])}}},this.reIndex=function(){m.items=[],m.visibleItems=[],m.matchingItems=[],m.searched=!1,m.filtered=!1,m.parse(m.list)},this.toJSON=function(){for(var e=[],t=0,n=m.items.length;t<n;t++)e.push(m.items[t].values());return e},this.add=function(e,t){if(0!==e.length){if(!t){var n=[],r=!1;void 0===e[0]&&(e=[e]);for(var i=0,a=e.length;i<a;i++){var o;r=m.items.length>m.page,o=new h(e[i],void 0,r),m.items.push(o),n.push(o)}return m.update(),n}g(e.slice(0),t)}},this.show=function(e,t){return this.i=e,this.page=t,m.update(),m},this.remove=function(e,t,n){for(var r=0,i=0,a=m.items.length;i<a;i++)m.items[i].values()[e]==t&&(m.templater.remove(m.items[i],n),m.items.splice(i,1),a--,i--,r++);return m.update(),r},this.get=function(e,t){for(var n=[],r=0,i=m.items.length;r<i;r++){var a=m.items[r];a.values()[e]==t&&n.push(a)}return n},this.size=function(){return m.items.length},this.clear=function(){return m.templater.clear(),m.items=[],m},this.on=function(e,t){return m.handlers[e].push(t),m},this.off=function(e,t){var n=m.handlers[e],r=o(n,t);return r>-1&&n.splice(r,1),m},this.trigger=function(e){for(var t=m.handlers[e].length;t--;)m.handlers[e][t](m);return m},this.reset={filter:function(){for(var e=m.items,t=e.length;t--;)e[t].filtered=!1;return m},search:function(){for(var e=m.items,t=e.length;t--;)e[t].found=!1;return m}},this.update=function(){var e=m.items,t=e.length;m.visibleItems=[],m.matchingItems=[],m.templater.clear();for(var n=0;n<t;n++)e[n].matching()&&m.matchingItems.length+1>=m.i&&m.visibleItems.length<m.page?(e[n].show(),m.visibleItems.push(e[n]),m.matchingItems.push(e[n])):e[n].matching()?(m.matchingItems.push(e[n]),e[n].hide()):e[n].hide();return m.trigger("updated"),m},p.start()}},813:e=>{"use strict";var t,n,r=0;function i(e){return e>=48&&e<=57}function a(e,t){for(var a=(e+="").length,o=(t+="").length,s=0,l=0;s<a&&l<o;){var c=e.charCodeAt(s),u=t.charCodeAt(l);if(i(c)){if(!i(u))return c-u;for(var d=s,f=l;48===c&&++d<a;)c=e.charCodeAt(d);for(;48===u&&++f<o;)u=t.charCodeAt(f);for(var p=d,m=f;p<a&&i(e.charCodeAt(p));)++p;for(;m<o&&i(t.charCodeAt(m));)++m;var h=p-d-m+f;if(h)return h;for(;d<p;)if(h=e.charCodeAt(d++)-t.charCodeAt(f++))return h;s=p,l=m}else{if(c!==u)return c<r&&u<r&&-1!==n[c]&&-1!==n[u]?n[c]-n[u]:c-u;++s,++l}}return s>=a&&l<o&&a>=o?-1:l>=o&&s<a&&o>=a?1:a-o}a.caseInsensitive=a.i=function(e,t){return a((""+e).toLowerCase(),(""+t).toLowerCase())},Object.defineProperties(a,{alphabet:{get:function(){return t},set:function(e){n=[];var i=0;if(t=e)for(;i<t.length;i++)n[t.charCodeAt(i)]=i;for(r=n.length,i=0;i<r;i++)void 0===n[i]&&(n[i]=-1)}}}),e.exports=a},844:(e,t,n)=>{n(981);var r=n(332),i=n(433),a=n(340),o=n(378),s=n(481);e.exports=function(e,t){t=i({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:"fuzzy-search"},t=t||{});var n={search:function(r,i){for(var a=t.multiSearch?r.replace(/ +$/,"").split(/ +/):[r],o=0,s=e.items.length;o<s;o++)n.item(e.items[o],i,a)},item:function(e,t,r){for(var i=!0,a=0;a<r.length;a++){for(var o=!1,s=0,l=t.length;s<l;s++)n.values(e.values(),t[s],r[a])&&(o=!0);o||(i=!1)}e.found=i},values:function(e,n,r){if(e.hasOwnProperty(n)){var i=a(e[n]).toLowerCase();if(s(i,r,t))return!0}return!1}};return r.bind(o(e.listContainer,t.searchClass),"keyup",e.utils.events.debounce(function(t){var r=t.target||t.srcElement;e.search(r.value,n.search)},e.searchDelay)),function(t,r){e.search(t,r,n.search)}}},859:e=>{var t=[].indexOf;e.exports=function(e,n){if(t)return e.indexOf(n);for(var r=0,i=e.length;r<i;++r)if(e[r]===n)return r;return-1}},895:(e,t,n)=>{var r=n(399),i=/\s+/g,a=/%[\dA-F]{2}/g,o=/"/g;function s(e){switch(e){case"%20":return" ";case"%3D":return"=";case"%3A":return":";case"%2F":return"/";default:return e.toLowerCase()}}function l(e){if("string"!=typeof e)throw new TypeError("Expected a string, but received "+typeof e);var t,n;return 65279===e.charCodeAt(0)&&(e=e.slice(1)),"data:image/svg+xml,"+function(e){return encodeURIComponent(e).replace(a,s)}((n=e,t=n.trim().replace(i," "),Object.keys(r).forEach(function(e){r[e].test(t)&&(t=t.replace(r[e],e))}),t).replace(o,"'"))}l.toSrcset=function(e){return l(e).replace(/ /g,"%20")},e.exports=l},939:e=>{var t=function(e){var t,n=this,r=function(e){if("string"==typeof e){if(/<tr[\s>]/g.exec(e)){var t=document.createElement("tbody");return t.innerHTML=e,t.firstElementChild}if(-1!==e.indexOf("<")){var n=document.createElement("div");return n.innerHTML=e,n.firstElementChild}}},i=function(t,n,r){var i=void 0,a=function(t){for(var n=0,r=e.valueNames.length;n<r;n++){var i=e.valueNames[n];if(i.data){for(var a=i.data,o=0,s=a.length;o<s;o++)if(a[o]===t)return{data:t}}else{if(i.attr&&i.name&&i.name==t)return i;if(i===t)return t}}}(n);a&&(a.data?t.elm.setAttribute("data-"+a.data,r):a.attr&&a.name?(i=e.utils.getByClass(t.elm,a.name,!0))&&i.setAttribute(a.attr,r):(i=e.utils.getByClass(t.elm,a,!0))&&(i.innerHTML=r))};this.get=function(t,r){n.create(t);for(var i={},a=0,o=r.length;a<o;a++){var s=void 0,l=r[a];if(l.data)for(var c=0,u=l.data.length;c<u;c++)i[l.data[c]]=e.utils.getAttribute(t.elm,"data-"+l.data[c]);else l.attr&&l.name?(s=e.utils.getByClass(t.elm,l.name,!0),i[l.name]=s?e.utils.getAttribute(s,l.attr):""):(s=e.utils.getByClass(t.elm,l,!0),i[l]=s?s.innerHTML:"")}return i},this.set=function(e,t){if(!n.create(e))for(var r in t)t.hasOwnProperty(r)&&i(e,r,t[r])},this.create=function(e){return void 0===e.elm&&(e.elm=t(e.values()),n.set(e,e.values()),!0)},this.remove=function(t){t.elm.parentNode===e.list&&e.list.removeChild(t.elm)},this.show=function(t){n.create(t),e.list.appendChild(t.elm)},this.hide=function(t){void 0!==t.elm&&t.elm.parentNode===e.list&&e.list.removeChild(t.elm)},this.clear=function(){if(e.list.hasChildNodes())for(;e.list.childNodes.length>=1;)e.list.removeChild(e.list.firstChild)},function(){var n;if("function"!=typeof e.item){if(!(n="string"==typeof e.item?-1===e.item.indexOf("<")?document.getElementById(e.item):r(e.item):function(){for(var t=e.list.childNodes,n=0,r=t.length;n<r;n++)if(void 0===t[n].data)return t[n].cloneNode(!0)}()))throw new Error("The list needs to have at least one item on init otherwise you'll have to add a template.");n=function(t,n){var r=t.cloneNode(!0);r.removeAttribute("id");for(var i=0,a=n.length;i<a;i++){var o=void 0,s=n[i];if(s.data)for(var l=0,c=s.data.length;l<c;l++)r.setAttribute("data-"+s.data[l],"");else s.attr&&s.name?(o=e.utils.getByClass(r,s.name,!0))&&o.setAttribute(s.attr,""):(o=e.utils.getByClass(r,s,!0))&&(o.innerHTML="")}return r}(n,e.valueNames),t=function(){return n.cloneNode(!0)}}else t=function(t){var n=e.item(t);return r(n)}}()};e.exports=function(e){return new t(e)}},981:(e,t,n)=>{var r=n(859),i=/\s+/;function a(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}Object.prototype.toString,e.exports=function(e){return new a(e)},a.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array();return~r(t,e)||t.push(e),this.el.className=t.join(" "),this},a.prototype.remove=function(e){if(this.list)return this.list.remove(e),this;var t=this.array(),n=r(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this},a.prototype.toggle=function(e,t){return this.list?(void 0!==t?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(void 0!==t?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)},a.prototype.array=function(){var e=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(i);return""===e[0]&&e.shift(),e},a.prototype.has=a.prototype.contains=function(e){return this.list?this.list.contains(e):!!~r(this.array(),e)}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.lodash,t=window.wp.i18n,r=window.wp.element,i=window.wp.domReady;var a=n.n(i);const o=window.wp.components,s=window.wp.blockLibrary,l=window.wp.data,c=window.wp.blockEditor;n(252);const u=window.wp.apiFetch;var d=n.n(u);const f={headers:{"Content-Type":"application/json"},method:"GET"},{entries:p,setPrototypeOf:m,isFrozen:h,getPrototypeOf:g,getOwnPropertyDescriptor:b}=Object;let{freeze:v,seal:y,create:w}=Object,{apply:x,construct:_}="undefined"!=typeof Reflect&&Reflect;v||(v=function(e){return e}),y||(y=function(e){return e}),x||(x=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return e.apply(t,r)}),_||(_=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new e(...n)});const k=W(Array.prototype.forEach),S=W(Array.prototype.lastIndexOf),T=W(Array.prototype.pop),A=W(Array.prototype.push),C=W(Array.prototype.splice),E=Array.isArray,N=W(String.prototype.toLowerCase),O=W(String.prototype.toString),R=W(String.prototype.match),L=W(String.prototype.replace),I=W(String.prototype.indexOf),j=W(String.prototype.trim),D=W(Number.prototype.toString),M=W(Boolean.prototype.toString),P="undefined"==typeof BigInt?null:W(BigInt.prototype.toString),z="undefined"==typeof Symbol?null:W(Symbol.prototype.toString),B=W(Object.prototype.hasOwnProperty),F=W(Object.prototype.toString),H=W(RegExp.prototype.test),U=($=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return _($,t)});var $;function W(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return x(e,t,r)}}function G(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:N;if(m&&m(e,null),!E(t))return e;let r=t.length;for(;r--;){let i=t[r];if("string"==typeof i){const e=n(i);e!==i&&(h(t)||(t[r]=e),i=e)}e[i]=!0}return e}function V(e){for(let t=0;t<e.length;t++)B(e,t)||(e[t]=null);return e}function q(e){const t=w(null);for(const[n,r]of p(e))B(e,n)&&(E(r)?t[n]=V(r):r&&"object"==typeof r&&r.constructor===Object?t[n]=q(r):t[n]=r);return t}function Y(e,t){for(;null!==e;){const n=b(e,t);if(n){if(n.get)return W(n.get);if("function"==typeof n.value)return W(n.value)}e=g(e)}return function(){return null}}const X=v(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),K=v(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Z=v(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),J=v(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Q=v(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ee=v(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),te=v(["#text"]),ne=v(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),re=v(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ie=v(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ae=v(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),oe=y(/\{\{[\w\W]*|[\w\W]*\}\}/gm),se=y(/<%[\w\W]*|[\w\W]*%>/gm),le=y(/\$\{[\w\W]*/gm),ce=y(/^data-[\-\w.\u00B7-\uFFFF]+$/),ue=y(/^aria-[\-\w]+$/),de=y(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),fe=y(/^(?:\w+script|data):/i),pe=y(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),me=y(/^html$/i),he=y(/^[a-z][.\w]*(-[.\w]+)+$/i);var ge=Object.freeze({__proto__:null,ARIA_ATTR:ue,ATTR_WHITESPACE:pe,CUSTOM_ELEMENT:he,DATA_ATTR:ce,DOCTYPE_NAME:me,ERB_EXPR:se,IS_ALLOWED_URI:de,IS_SCRIPT_OR_DATA:fe,MUSTACHE_EXPR:oe,TMPLIT_EXPR:le});const be=function(){return"undefined"==typeof window?null:window};!function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be();const n=t=>e(t);if(n.version="3.4.2",n.removed=[],!t||!t.document||9!==t.document.nodeType||!t.Element)return n.isSupported=!1,n;let{document:r}=t;const i=r,a=i.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:u,NamedNodeMap:d=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:f,DOMParser:m,trustedTypes:h}=t,g=c.prototype,b=Y(g,"cloneNode"),y=Y(g,"remove"),x=Y(g,"nextSibling"),_=Y(g,"childNodes"),$=Y(g,"parentNode");if("function"==typeof s){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let W,V="";const{implementation:oe,createNodeIterator:se,createDocumentFragment:le,getElementsByTagName:ce}=r,{importNode:ue}=i;let fe={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof p&&"function"==typeof $&&oe&&void 0!==oe.createHTMLDocument;const{MUSTACHE_EXPR:pe,ERB_EXPR:he,TMPLIT_EXPR:ve,DATA_ATTR:ye,ARIA_ATTR:we,IS_SCRIPT_OR_DATA:xe,ATTR_WHITESPACE:_e,CUSTOM_ELEMENT:ke}=ge;let{IS_ALLOWED_URI:Se}=ge,Te=null;const Ae=G({},[...X,...K,...Z,...Q,...te]);let Ce=null;const Ee=G({},[...ne,...re,...ie,...ae]);let Ne=Object.seal(w(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Oe=null,Re=null;const Le=Object.seal(w(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Ie=!0,je=!0,De=!1,Me=!0,Pe=!1,ze=!0,Be=!1,Fe=!1,He=!1,Ue=!1,$e=!1,We=!1,Ge=!0,Ve=!1;const qe="user-content-";let Ye=!0,Xe=!1,Ke={},Ze=null;const Je=G({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Qe=null;const et=G({},["audio","video","img","source","image","track"]);let tt=null;const nt=G({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),rt="http://www.w3.org/1998/Math/MathML",it="http://www.w3.org/2000/svg",at="http://www.w3.org/1999/xhtml";let ot=at,st=!1,lt=null;const ct=G({},[rt,it,at],O);let ut=G({},["mi","mo","mn","ms","mtext"]),dt=G({},["annotation-xml"]);const ft=G({},["title","style","font","a","script"]);let pt=null;const mt=["application/xhtml+xml","text/html"];let ht=null,gt=null;const bt=r.createElement("form"),vt=function(e){return e instanceof RegExp||e instanceof Function},yt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(gt&&gt===e)return;e&&"object"==typeof e||(e={}),e=q(e),pt=-1===mt.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,ht="application/xhtml+xml"===pt?O:N,Te=B(e,"ALLOWED_TAGS")&&E(e.ALLOWED_TAGS)?G({},e.ALLOWED_TAGS,ht):Ae,Ce=B(e,"ALLOWED_ATTR")&&E(e.ALLOWED_ATTR)?G({},e.ALLOWED_ATTR,ht):Ee,lt=B(e,"ALLOWED_NAMESPACES")&&E(e.ALLOWED_NAMESPACES)?G({},e.ALLOWED_NAMESPACES,O):ct,tt=B(e,"ADD_URI_SAFE_ATTR")&&E(e.ADD_URI_SAFE_ATTR)?G(q(nt),e.ADD_URI_SAFE_ATTR,ht):nt,Qe=B(e,"ADD_DATA_URI_TAGS")&&E(e.ADD_DATA_URI_TAGS)?G(q(et),e.ADD_DATA_URI_TAGS,ht):et,Ze=B(e,"FORBID_CONTENTS")&&E(e.FORBID_CONTENTS)?G({},e.FORBID_CONTENTS,ht):Je,Oe=B(e,"FORBID_TAGS")&&E(e.FORBID_TAGS)?G({},e.FORBID_TAGS,ht):q({}),Re=B(e,"FORBID_ATTR")&&E(e.FORBID_ATTR)?G({},e.FORBID_ATTR,ht):q({}),Ke=!!B(e,"USE_PROFILES")&&(e.USE_PROFILES&&"object"==typeof e.USE_PROFILES?q(e.USE_PROFILES):e.USE_PROFILES),Ie=!1!==e.ALLOW_ARIA_ATTR,je=!1!==e.ALLOW_DATA_ATTR,De=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Me=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Pe=e.SAFE_FOR_TEMPLATES||!1,ze=!1!==e.SAFE_FOR_XML,Be=e.WHOLE_DOCUMENT||!1,Ue=e.RETURN_DOM||!1,$e=e.RETURN_DOM_FRAGMENT||!1,We=e.RETURN_TRUSTED_TYPE||!1,He=e.FORCE_BODY||!1,Ge=!1!==e.SANITIZE_DOM,Ve=e.SANITIZE_NAMED_PROPS||!1,Ye=!1!==e.KEEP_CONTENT,Xe=e.IN_PLACE||!1,Se=function(e){try{return H(e,""),!0}catch(e){return!1}}(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:de,ot="string"==typeof e.NAMESPACE?e.NAMESPACE:at,ut=B(e,"MATHML_TEXT_INTEGRATION_POINTS")&&e.MATHML_TEXT_INTEGRATION_POINTS&&"object"==typeof e.MATHML_TEXT_INTEGRATION_POINTS?q(e.MATHML_TEXT_INTEGRATION_POINTS):G({},["mi","mo","mn","ms","mtext"]),dt=B(e,"HTML_INTEGRATION_POINTS")&&e.HTML_INTEGRATION_POINTS&&"object"==typeof e.HTML_INTEGRATION_POINTS?q(e.HTML_INTEGRATION_POINTS):G({},["annotation-xml"]);const t=B(e,"CUSTOM_ELEMENT_HANDLING")&&e.CUSTOM_ELEMENT_HANDLING&&"object"==typeof e.CUSTOM_ELEMENT_HANDLING?q(e.CUSTOM_ELEMENT_HANDLING):w(null);if(Ne=w(null),B(t,"tagNameCheck")&&vt(t.tagNameCheck)&&(Ne.tagNameCheck=t.tagNameCheck),B(t,"attributeNameCheck")&&vt(t.attributeNameCheck)&&(Ne.attributeNameCheck=t.attributeNameCheck),B(t,"allowCustomizedBuiltInElements")&&"boolean"==typeof t.allowCustomizedBuiltInElements&&(Ne.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),Pe&&(je=!1),$e&&(Ue=!0),Ke&&(Te=G({},te),Ce=w(null),!0===Ke.html&&(G(Te,X),G(Ce,ne)),!0===Ke.svg&&(G(Te,K),G(Ce,re),G(Ce,ae)),!0===Ke.svgFilters&&(G(Te,Z),G(Ce,re),G(Ce,ae)),!0===Ke.mathMl&&(G(Te,Q),G(Ce,ie),G(Ce,ae))),Le.tagCheck=null,Le.attributeCheck=null,B(e,"ADD_TAGS")&&("function"==typeof e.ADD_TAGS?Le.tagCheck=e.ADD_TAGS:E(e.ADD_TAGS)&&(Te===Ae&&(Te=q(Te)),G(Te,e.ADD_TAGS,ht))),B(e,"ADD_ATTR")&&("function"==typeof e.ADD_ATTR?Le.attributeCheck=e.ADD_ATTR:E(e.ADD_ATTR)&&(Ce===Ee&&(Ce=q(Ce)),G(Ce,e.ADD_ATTR,ht))),B(e,"ADD_URI_SAFE_ATTR")&&E(e.ADD_URI_SAFE_ATTR)&&G(tt,e.ADD_URI_SAFE_ATTR,ht),B(e,"FORBID_CONTENTS")&&E(e.FORBID_CONTENTS)&&(Ze===Je&&(Ze=q(Ze)),G(Ze,e.FORBID_CONTENTS,ht)),B(e,"ADD_FORBID_CONTENTS")&&E(e.ADD_FORBID_CONTENTS)&&(Ze===Je&&(Ze=q(Ze)),G(Ze,e.ADD_FORBID_CONTENTS,ht)),Ye&&(Te["#text"]=!0),Be&&G(Te,["html","head","body"]),Te.table&&(G(Te,["tbody"]),delete Oe.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw U('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw U('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');W=e.TRUSTED_TYPES_POLICY,V=W.createHTML("")}else void 0===W&&(W=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(h,a)),null!==W&&"string"==typeof V&&(V=W.createHTML(""));v&&v(e),gt=e},wt=G({},[...K,...Z,...J]),xt=G({},[...Q,...ee]),_t=function(e){A(n.removed,{element:e});try{$(e).removeChild(e)}catch(t){y(e)}},kt=function(e,t){try{A(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){A(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(Ue||$e)try{_t(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},St=function(e){let t=null,n=null;if(He)e="<remove></remove>"+e;else{const t=R(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===pt&&ot===at&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=W?W.createHTML(e):e;if(ot===at)try{t=(new m).parseFromString(i,pt)}catch(e){}if(!t||!t.documentElement){t=oe.createDocument(ot,"template",null);try{t.documentElement.innerHTML=st?V:i}catch(e){}}const a=t.body||t.documentElement;return e&&n&&a.insertBefore(r.createTextNode(n),a.childNodes[0]||null),ot===at?ce.call(t,Be?"html":"body")[0]:Be?t.documentElement:a},Tt=function(e){return se.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},At=function(e){return e instanceof f&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof d)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Ct=function(e){return"function"==typeof l&&e instanceof l};function Et(e,t,r){k(e,e=>{e.call(n,t,r,gt)})}const Nt=function(e){let t=null;if(Et(fe.beforeSanitizeElements,e,null),At(e))return _t(e),!0;const r=ht(e.nodeName);if(Et(fe.uponSanitizeElement,e,{tagName:r,allowedTags:Te}),ze&&e.hasChildNodes()&&!Ct(e.firstElementChild)&&H(/<[/\w!]/g,e.innerHTML)&&H(/<[/\w!]/g,e.textContent))return _t(e),!0;if(ze&&e.namespaceURI===at&&"style"===r&&Ct(e.firstElementChild))return _t(e),!0;if(7===e.nodeType)return _t(e),!0;if(ze&&8===e.nodeType&&H(/<[/\w]/g,e.data))return _t(e),!0;if(Oe[r]||!(Le.tagCheck instanceof Function&&Le.tagCheck(r))&&!Te[r]){if(!Oe[r]&&Lt(r)){if(Ne.tagNameCheck instanceof RegExp&&H(Ne.tagNameCheck,r))return!1;if(Ne.tagNameCheck instanceof Function&&Ne.tagNameCheck(r))return!1}if(Ye&&!Ze[r]){const t=$(e)||e.parentNode,n=_(e)||e.childNodes;if(n&&t)for(let r=n.length-1;r>=0;--r){const i=b(n[r],!0);t.insertBefore(i,x(e))}}return _t(e),!0}return e instanceof c&&!function(e){let t=$(e);t&&t.tagName||(t={namespaceURI:ot,tagName:"template"});const n=N(e.tagName),r=N(t.tagName);return!!lt[e.namespaceURI]&&(e.namespaceURI===it?t.namespaceURI===at?"svg"===n:t.namespaceURI===rt?"svg"===n&&("annotation-xml"===r||ut[r]):Boolean(wt[n]):e.namespaceURI===rt?t.namespaceURI===at?"math"===n:t.namespaceURI===it?"math"===n&&dt[r]:Boolean(xt[n]):e.namespaceURI===at?!(t.namespaceURI===it&&!dt[r])&&!(t.namespaceURI===rt&&!ut[r])&&!xt[n]&&(ft[n]||!wt[n]):!("application/xhtml+xml"!==pt||!lt[e.namespaceURI]))}(e)?(_t(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!H(/<\/no(script|embed|frames)/i,e.innerHTML)?(Pe&&3===e.nodeType&&(t=e.textContent,k([pe,he,ve],e=>{t=L(t,e," ")}),e.textContent!==t&&(A(n.removed,{element:e.cloneNode()}),e.textContent=t)),Et(fe.afterSanitizeElements,e,null),!1):(_t(e),!0)},Ot=function(e,t,n){if(Re[t])return!1;if(Ge&&("id"===t||"name"===t)&&(n in r||n in bt))return!1;const i=Ce[t]||Le.attributeCheck instanceof Function&&Le.attributeCheck(t,e);if(je&&!Re[t]&&H(ye,t));else if(Ie&&H(we,t));else if(!i||Re[t]){if(!(Lt(e)&&(Ne.tagNameCheck instanceof RegExp&&H(Ne.tagNameCheck,e)||Ne.tagNameCheck instanceof Function&&Ne.tagNameCheck(e))&&(Ne.attributeNameCheck instanceof RegExp&&H(Ne.attributeNameCheck,t)||Ne.attributeNameCheck instanceof Function&&Ne.attributeNameCheck(t,e))||"is"===t&&Ne.allowCustomizedBuiltInElements&&(Ne.tagNameCheck instanceof RegExp&&H(Ne.tagNameCheck,n)||Ne.tagNameCheck instanceof Function&&Ne.tagNameCheck(n))))return!1}else if(tt[t]);else if(H(Se,L(n,_e,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==I(n,"data:")||!Qe[e])if(De&&!H(xe,L(n,_e,"")));else if(n)return!1;return!0},Rt=G({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Lt=function(e){return!Rt[N(e)]&&H(ke,e)},It=function(e){Et(fe.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||At(e))return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ce,forceKeepAttr:void 0};let i=t.length;for(;i--;){const a=t[i],{name:o,namespaceURI:s,value:l}=a,c=ht(o),u=l;let d="value"===o?u:j(u);if(r.attrName=c,r.attrValue=d,r.keepAttr=!0,r.forceKeepAttr=void 0,Et(fe.uponSanitizeAttribute,e,r),d=r.attrValue,!Ve||"id"!==c&&"name"!==c||0===I(d,qe)||(kt(o,e),d=qe+d),ze&&H(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,d)){kt(o,e);continue}if("attributename"===c&&R(d,"href")){kt(o,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){kt(o,e);continue}if(!Me&&H(/\/>/i,d)){kt(o,e);continue}Pe&&k([pe,he,ve],e=>{d=L(d,e," ")});const f=ht(e.nodeName);if(Ot(f,c,d)){if(W&&"object"==typeof h&&"function"==typeof h.getAttributeType)if(s);else switch(h.getAttributeType(f,c)){case"TrustedHTML":d=W.createHTML(d);break;case"TrustedScriptURL":d=W.createScriptURL(d)}if(d!==u)try{s?e.setAttributeNS(s,o,d):e.setAttribute(o,d),At(e)?_t(e):T(n.removed)}catch(t){kt(o,e)}}else kt(o,e)}Et(fe.afterSanitizeAttributes,e,null)},jt=function(e){let t=null;const n=Tt(e);for(Et(fe.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)Et(fe.uponSanitizeShadowNode,t,null),Nt(t),It(t),t.content instanceof o&&jt(t.content);Et(fe.afterSanitizeShadowDOM,e,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null,a=null,s=null,c=null;if(st=!e,st&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Ct(e)&&"string"!=typeof(e=function(e){switch(typeof e){case"string":return e;case"number":return D(e);case"boolean":return M(e);case"bigint":return P?P(e):"0";case"symbol":return z?z(e):"Symbol()";case"undefined":default:return F(e);case"function":case"object":{if(null===e)return F(e);const t=e,n=Y(t,"toString");if("function"==typeof n){const e=n(t);return"string"==typeof e?e:F(e)}return F(e)}}}(e)))throw U("dirty is not a string, aborting");if(!n.isSupported)return e;if(Fe||yt(t),n.removed=[],"string"==typeof e&&(Xe=!1),Xe){const t=e.nodeName;if("string"==typeof t){const e=ht(t);if(!Te[e]||Oe[e])throw U("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)r=St("\x3c!----\x3e"),a=r.ownerDocument.importNode(e,!0),1===a.nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?r=a:r.appendChild(a);else{if(!Ue&&!Pe&&!Be&&-1===e.indexOf("<"))return W&&We?W.createHTML(e):e;if(r=St(e),!r)return Ue?null:We?V:""}r&&He&&_t(r.firstChild);const u=Tt(Xe?e:r);for(;s=u.nextNode();)Nt(s),It(s),s.content instanceof o&&jt(s.content);if(Xe)return e;if(Ue){if(Pe){r.normalize();let e=r.innerHTML;k([pe,he,ve],t=>{e=L(e,t," ")}),r.innerHTML=e}if($e)for(c=le.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return(Ce.shadowroot||Ce.shadowrootmode)&&(c=ue.call(i,c,!0)),c}let d=Be?r.outerHTML:r.innerHTML;return Be&&Te["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&H(me,r.ownerDocument.doctype.name)&&(d="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+d),Pe&&k([pe,he,ve],e=>{d=L(d,e," ")}),W&&We?W.createHTML(d):d},n.setConfig=function(){yt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Fe=!0},n.clearConfig=function(){gt=null,Fe=!1},n.isValidAttribute=function(e,t,n){gt||yt({});const r=ht(e),i=ht(t);return Ot(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&A(fe[e],t)},n.removeHook=function(e,t){if(void 0!==t){const n=S(fe[e],t);return-1===n?void 0:C(fe[e],n,1)[0]}return T(fe[e])},n.removeHooks=function(e){fe[e]=[]},n.removeAllHooks=function(){fe={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}();const ve=window.wp.url,ye=window.wp.primitives,we=window.ReactJSXRuntime;ye.SVG,ye.Path,ye.SVG,ye.Path,ye.SVG,ye.Path;window.wp.hooks;const xe="Mobile",_e="Tablet",ke="Desktop",Se={},Te=getComputedStyle(document.documentElement);Se[xe]=Te.getPropertyValue("--wp--custom--breakpoint--sm")||"576px",Se[_e]=Te.getPropertyValue("--wp--custom--breakpoint--md")||"768px",Se[ke]=Te.getPropertyValue("--wp--custom--breakpoint--lg")||"1024px";const Ae={};Object.keys(Se).map(e=>{Ae[e]=e===xe?"":`@media (min-width: ${Se[e]})`}),(0,t.__)("Mobile","block-enhancements"),Ae[xe],(0,t.__)("Tablet","block-enhancements"),Ae[_e],(0,t.__)("Desktop","block-enhancements"),Ae[ke];const Ce=(e,t="log")=>{e&&"development"===window?.BBLOG?.environmentType&&(["log","info","warn","error","debug","dir","table"].includes(t)?console[t](e):console.log(e))},Ee=window.React;const Ne={mouseState:"normal"},Oe=(0,l.createReduxStore)("block-enhancements/mousestate",{selectors:{getMouseState(e){var t;return null!==(t=e?.mouseState)&&void 0!==t?t:"normal"}},actions:{setMouseState:e=>({type:"SET_HOVER_STATE",payload:e})},reducer:(e=Ne,t)=>"SET_HOVER_STATE"===t.type?{...e,mouseState:t.payload}:e});(0,l.register)(Oe),(0,t.__)("Normal","block-enhancements"),(0,t.__)("Hover","block-enhancements"),n(895);class Re{constructor(e=""){e||(e=window.location.href),this.parsedURL=new URL(e)}get(e,t=null){return this.parsedURL.searchParams.get(e)||t}set(e,t,n=!0){this.parsedURL.searchParams.set(e,t),n&&history.pushState&&history.pushState({},null,this.parsedURL.href)}delete(e,t=!0){this.parsedURL.searchParams.delete(e),t&&history.pushState&&history.pushState({},null,this.parsedURL.href)}reload(){history?.go?history.go():window.location.reload()}getHref(){return this.parsedURL.href}}const Le=window.wp.coreData,Ie=window.wp.blocks,je=(e,t,n)=>{var i;const a=(null!==(i=t[e]?.availableBlocks)&&void 0!==i?i:[]).map(({name:e})=>e).join("|");return(0,r.useMemo)(()=>{if(!n?.length)return[];const e=new RegExp(a),t=n.filter(({name:t})=>{const n=t.match(e);return n&&(n[0]===t||!n[0])});return t.sort(({title:e},{title:t})=>e>t?1:e<t?-1:0),t},[a,n])},De=(0,r.createContext)();function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Me.apply(this,arguments)}var Pe=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),ze=Math.abs,Be=String.fromCharCode,Fe=Object.assign;function He(e){return e.trim()}function Ue(e,t,n){return e.replace(t,n)}function $e(e,t){return e.indexOf(t)}function We(e,t){return 0|e.charCodeAt(t)}function Ge(e,t,n){return e.slice(t,n)}function Ve(e){return e.length}function qe(e){return e.length}function Ye(e,t){return t.push(e),e}var Xe=1,Ke=1,Ze=0,Je=0,Qe=0,et="";function tt(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Xe,column:Ke,length:o,return:""}}function nt(e,t){return Fe(tt("",null,null,"",null,null,0),e,{length:-e.length},t)}function rt(){return Qe=Je>0?We(et,--Je):0,Ke--,10===Qe&&(Ke=1,Xe--),Qe}function it(){return Qe=Je<Ze?We(et,Je++):0,Ke++,10===Qe&&(Ke=1,Xe++),Qe}function at(){return We(et,Je)}function ot(){return Je}function st(e,t){return Ge(et,e,t)}function lt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ct(e){return Xe=Ke=1,Ze=Ve(et=e),Je=0,[]}function ut(e){return et="",e}function dt(e){return He(st(Je-1,mt(91===e?e+2:40===e?e+1:e)))}function ft(e){for(;(Qe=at())&&Qe<33;)it();return lt(e)>2||lt(Qe)>3?"":" "}function pt(e,t){for(;--t&&it()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return st(e,ot()+(t<6&&32==at()&&32==it()))}function mt(e){for(;it();)switch(Qe){case e:return Je;case 34:case 39:34!==e&&39!==e&&mt(Qe);break;case 40:41===e&&mt(e);break;case 92:it()}return Je}function ht(e,t){for(;it()&&e+Qe!==57&&(e+Qe!==84||47!==at()););return"/*"+st(t,Je-1)+"*"+Be(47===e?e:it())}function gt(e){for(;!lt(at());)it();return st(e,Je)}var bt="-ms-",vt="-moz-",yt="-webkit-",wt="comm",xt="rule",_t="decl",kt="@keyframes";function St(e,t){for(var n="",r=qe(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Tt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case _t:return e.return=e.return||e.value;case wt:return"";case kt:return e.return=e.value+"{"+St(e.children,r)+"}";case xt:e.value=e.props.join(",")}return Ve(n=St(e.children,r))?e.return=e.value+"{"+n+"}":""}function At(e){return ut(Ct("",null,null,null,[""],e=ct(e),0,[0],e))}function Ct(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,b=1,v=0,y="",w=i,x=a,_=r,k=y;g;)switch(m=v,v=it()){case 40:if(108!=m&&58==We(k,d-1)){-1!=$e(k+=Ue(dt(v),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:k+=dt(v);break;case 9:case 10:case 13:case 32:k+=ft(m);break;case 92:k+=pt(ot()-1,7);continue;case 47:switch(at()){case 42:case 47:Ye(Nt(ht(it(),ot()),t,n),l);break;default:k+="/"}break;case 123*h:s[c++]=Ve(k)*b;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==b&&(k=Ue(k,/\f/g,"")),p>0&&Ve(k)-d&&Ye(p>32?Ot(k+";",r,n,d-1):Ot(Ue(k," ","")+";",r,n,d-2),l);break;case 59:k+=";";default:if(Ye(_=Et(k,t,n,c,u,i,s,y,w=[],x=[],d),a),123===v)if(0===u)Ct(k,t,_,_,w,a,d,s,x);else switch(99===f&&110===We(k,3)?100:f){case 100:case 108:case 109:case 115:Ct(e,_,_,r&&Ye(Et(e,_,_,0,0,i,s,y,i,w=[],d),x),i,x,d,s,r?w:x);break;default:Ct(k,_,_,_,[""],x,0,s,x)}}c=u=p=0,h=b=1,y=k="",d=o;break;case 58:d=1+Ve(k),p=m;default:if(h<1)if(123==v)--h;else if(125==v&&0==h++&&125==rt())continue;switch(k+=Be(v),v*h){case 38:b=u>0?1:(k+="\f",-1);break;case 44:s[c++]=(Ve(k)-1)*b,b=1;break;case 64:45===at()&&(k+=dt(it())),f=at(),u=d=Ve(y=k+=gt(ot())),v++;break;case 45:45===m&&2==Ve(k)&&(h=0)}}return a}function Et(e,t,n,r,i,a,o,s,l,c,u){for(var d=i-1,f=0===i?a:[""],p=qe(f),m=0,h=0,g=0;m<r;++m)for(var b=0,v=Ge(e,d+1,d=ze(h=o[m])),y=e;b<p;++b)(y=He(h>0?f[b]+" "+v:Ue(v,/&\f/g,f[b])))&&(l[g++]=y);return tt(e,t,n,0===i?xt:s,l,c,u)}function Nt(e,t,n){return tt(e,t,n,wt,Be(Qe),Ge(e,2,-2),0)}function Ot(e,t,n,r){return tt(e,t,n,_t,Ge(e,0,r),Ge(e,r+1,-1),r)}var Rt=function(e,t,n){for(var r=0,i=0;r=i,i=at(),38===r&&12===i&&(t[n]=1),!lt(i);)it();return st(e,Je)},Lt=new WeakMap,It=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Lt.get(n))&&!r){Lt.set(e,!0);for(var i=[],a=function(e,t){return ut(function(e,t){var n=-1,r=44;do{switch(lt(r)){case 0:38===r&&12===at()&&(t[n]=1),e[n]+=Rt(Je-1,t,n);break;case 2:e[n]+=dt(r);break;case 4:if(44===r){e[++n]=58===at()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=Be(r)}}while(r=it());return e}(ct(e),t))}(t,i),o=n.props,s=0,l=0;s<a.length;s++)for(var c=0;c<o.length;c++,l++)e.props[l]=i[s]?a[s].replace(/&\f/g,o[c]):o[c]+" "+a[s]}}},jt=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function Dt(e,t){switch(function(e,t){return 45^We(e,0)?(((t<<2^We(e,0))<<2^We(e,1))<<2^We(e,2))<<2^We(e,3):0}(e,t)){case 5103:return yt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return yt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return yt+e+vt+e+bt+e+e;case 6828:case 4268:return yt+e+bt+e+e;case 6165:return yt+e+bt+"flex-"+e+e;case 5187:return yt+e+Ue(e,/(\w+).+(:[^]+)/,yt+"box-$1$2"+bt+"flex-$1$2")+e;case 5443:return yt+e+bt+"flex-item-"+Ue(e,/flex-|-self/,"")+e;case 4675:return yt+e+bt+"flex-line-pack"+Ue(e,/align-content|flex-|-self/,"")+e;case 5548:return yt+e+bt+Ue(e,"shrink","negative")+e;case 5292:return yt+e+bt+Ue(e,"basis","preferred-size")+e;case 6060:return yt+"box-"+Ue(e,"-grow","")+yt+e+bt+Ue(e,"grow","positive")+e;case 4554:return yt+Ue(e,/([^-])(transform)/g,"$1"+yt+"$2")+e;case 6187:return Ue(Ue(Ue(e,/(zoom-|grab)/,yt+"$1"),/(image-set)/,yt+"$1"),e,"")+e;case 5495:case 3959:return Ue(e,/(image-set\([^]*)/,yt+"$1$`$1");case 4968:return Ue(Ue(e,/(.+:)(flex-)?(.*)/,yt+"box-pack:$3"+bt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+yt+e+e;case 4095:case 3583:case 4068:case 2532:return Ue(e,/(.+)-inline(.+)/,yt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ve(e)-1-t>6)switch(We(e,t+1)){case 109:if(45!==We(e,t+4))break;case 102:return Ue(e,/(.+:)(.+)-([^]+)/,"$1"+yt+"$2-$3$1"+vt+(108==We(e,t+3)?"$3":"$2-$3"))+e;case 115:return~$e(e,"stretch")?Dt(Ue(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==We(e,t+1))break;case 6444:switch(We(e,Ve(e)-3-(~$e(e,"!important")&&10))){case 107:return Ue(e,":",":"+yt)+e;case 101:return Ue(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+yt+(45===We(e,14)?"inline-":"")+"box$3$1"+yt+"$2$3$1"+bt+"$2box$3")+e}break;case 5936:switch(We(e,t+11)){case 114:return yt+e+bt+Ue(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return yt+e+bt+Ue(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return yt+e+bt+Ue(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return yt+e+bt+e+e}return e}var Mt=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case _t:e.return=Dt(e.value,e.length);break;case kt:return St([nt(e,{value:Ue(e.value,"@","@"+yt)})],r);case xt:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,function(t){switch(function(e){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return St([nt(e,{props:[Ue(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return St([nt(e,{props:[Ue(t,/:(plac\w+)/,":"+yt+"input-$1")]}),nt(e,{props:[Ue(t,/:(plac\w+)/,":-moz-$1")]}),nt(e,{props:[Ue(t,/:(plac\w+)/,bt+"input-$1")]})],r)}return""})}}],Pt=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var r,i,a=e.stylisPlugins||Mt,o={},s=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)o[t[n]]=!0;s.push(e)});var l,c,u,d,f=[Tt,(d=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],p=(c=[It,jt].concat(a,f),u=qe(c),function(e,t,n,r){for(var i="",a=0;a<u;a++)i+=c[a](e,t,n,r)||"";return i});i=function(e,t,n,r){l=n,St(At(e?e+"{"+t.styles+"}":t.styles),p),r&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new Pe({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:i};return m.sheet.hydrate(s),m},zt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Bt(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var Ft=/[A-Z]|^ms/g,Ht=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ut=function(e){return 45===e.charCodeAt(1)},$t=function(e){return null!=e&&"boolean"!=typeof e},Wt=Bt(function(e){return Ut(e)?e:e.replace(Ft,"-$&").toLowerCase()}),Gt=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Ht,function(e,t,n){return qt={name:t,styles:n,next:qt},t})}return 1===zt[e]||Ut(e)||"number"!=typeof t||0===t?t:t+"px"};function Vt(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var i=n;if(1===i.anim)return qt={name:i.name,styles:i.styles,next:qt},i.name;var a=n;if(void 0!==a.styles){var o=a.next;if(void 0!==o)for(;void 0!==o;)qt={name:o.name,styles:o.styles,next:qt},o=o.next;return a.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Vt(e,t,n[i])+";";else for(var a in n){var o=n[a];if("object"!=typeof o){var s=o;null!=t&&void 0!==t[s]?r+=a+"{"+t[s]+"}":$t(s)&&(r+=Wt(a)+":"+Gt(a,s)+";")}else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var l=Vt(e,t,o);switch(a){case"animation":case"animationName":r+=Wt(a)+":"+l+";";break;default:r+=a+"{"+l+"}"}}else for(var c=0;c<o.length;c++)$t(o[c])&&(r+=Wt(a)+":"+Gt(a,o[c])+";")}return r}(e,t,n);case"function":if(void 0!==e){var s=qt,l=n(e);return qt=s,Vt(e,t,l)}}var c=n;if(null==t)return c;var u=t[c];return void 0!==u?u:c}var qt,Yt=/label:\s*([^\s;{]+)\s*(;|$)/g,Xt=!!Ee.useInsertionEffect&&Ee.useInsertionEffect,Kt=Xt||function(e){return e()},Zt=(Xt||Ee.useLayoutEffect,Ee.createContext("undefined"!=typeof HTMLElement?Pt({key:"css"}):null)),Jt=(Zt.Provider,function(e){return(0,Ee.forwardRef)(function(t,n){var r=(0,Ee.useContext)(Zt);return e(t,r,n)})}),Qt=Ee.createContext({}),en=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},tn=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,nn=Bt(function(e){return tn.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),rn=function(e){return"theme"!==e},an=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?nn:rn},on=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},sn=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return en(t,n,r),Kt(function(){return function(e,t,n){en(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do{e.insert(t===i?"."+r:"",i,e.sheet,!0),i=i.next}while(void 0!==i)}}(t,n,r)}),null},ln=function e(t,n){var r,i,a=t.__emotion_real===t,o=a&&t.__emotion_base||t;void 0!==n&&(r=n.label,i=n.target);var s=on(t,n,a),l=s||an(o),c=!l("as");return function(){var u=arguments,d=a&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&d.push("label:"+r+";"),null==u[0]||void 0===u[0].raw)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Jt(function(e,t,n){var r,a,u,f,p=c&&e.as||o,m="",h=[],g=e;if(null==e.theme){for(var b in g={},e)g[b]=e[b];g.theme=Ee.useContext(Qt)}"string"==typeof e.className?(r=t.registered,a=h,u=e.className,f="",u.split(" ").forEach(function(e){void 0!==r[e]?a.push(r[e]+";"):e&&(f+=e+" ")}),m=f):null!=e.className&&(m=e.className+" ");var v=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";qt=void 0;var a=e[0];null==a||void 0===a.raw?(r=!1,i+=Vt(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Vt(n,t,e[o]),r&&(i+=a[o]);Yt.lastIndex=0;for(var s,l="";null!==(s=Yt.exec(i));)l+="-"+s[1];var c=function(e){for(var t,n=0,r=0,i=e.length;i>=4;++r,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(i){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(i)+l;return{name:c,styles:i,next:qt}}(d.concat(h),t.registered,g);m+=t.key+"-"+v.name,void 0!==i&&(m+=" "+i);var y=c&&void 0===s?an(p):l,w={};for(var x in e)c&&"as"===x||y(x)&&(w[x]=e[x]);return w.className=m,n&&(w.ref=n),Ee.createElement(Ee.Fragment,null,Ee.createElement(sn,{cache:t,serialized:v,isStringTag:"string"==typeof p}),Ee.createElement(p,w))});return h.displayName=void 0!==r?r:"Styled("+("string"==typeof o?o:o.displayName||o.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=o,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,"toString",{value:function(){return"."+i}}),h.withComponent=function(t,r){return e(t,Me({},n,r,{shouldForwardProp:on(h,r,!0)})).apply(void 0,d)},h}}.bind(null);function cn(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=cn(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){ln[e]=ln(e)}),ln(o.BaseControl)`
  margin-bottom: 8px !important;

  &.is-bold {
    font-weight: 600;
  }

  &.h3 {
    font-size: 13px;
    font-weight: bold;
  }

  .components-base-control__field {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .components-base-control__label {
    margin-bottom: 0;
  }

  div.components-dropdown {
    min-height: 30px;
    margin-bottom: 0;
    border: 0;

    &:first-of-type {
      margin-left: 10px;
    }

    .components-button {
      min-width: 36px;
      height: 30px;

      &.has-icon {
        min-width: 48px;
      }
    }
  }
`,ln.div`
  padding-bottom: 4px;
  margin-bottom: 8px;
  border-bottom: 1px solid #ddd;

  > * {
    margin-bottom: 8px !important;
  }

  .repeater-group__item__actions {
    display: flex;
    align-items: center;
    gap: 0.2em;

    > *:first-of-type {
      margin-right: auto;
    }
  }
`;const un=function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=cn(e))&&(r&&(r+=" "),r+=t);return r},dn=ln.div`
  box-sizing: border-box;
  width: 100%;

  .group-control__body {
    gap: 4px;

    > * {
      max-width: 100%;
    }
  }

  &.is-2-columns,
  &.is-3-columns,
  &.is-4-columns {
    .group-control__body {
      > * {
        width: auto;
      }
    }
  }

  &.is-2-columns {
    .group-control__body {
      > * {
        flex-basis: calc(50% - 4px);

        &:nth-of-type(n + 3) {
          margin-top: 8px !important;
        }
      }
    }
  }

  &.is-3-columns {
    .group-control__body {
      > * {
        flex-basis: calc(33.33333% - 4px);

        &:nth-of-type(n + 4) {
          margin-top: 8px !important;
        }
      }
    }
  }

  &.is-4-columns {
    .group-control__body {
      > * {
        flex-basis: calc(25% - 4px);

        &:nth-of-type(n + 5) {
          margin-top: 8px !important;
        }
      }
    }
  }
`,fn=ln(o.Flex)`
  margin-bottom: 8px;

  .label-control {
    margin-bottom: 0 !important;
  }
`,pn=ln(o.Flex)`
  flex-wrap: wrap;
  width: auto;
  gap: 4px;

  > * {
    flex: 1 0 auto;
    margin: 0 !important;
  }
`;var mn=(0,we.jsx)(ye.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,we.jsx)(ye.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),hn=(0,we.jsx)(ye.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,we.jsx)(ye.Path,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"})});function gn({isLinked:e,...n}){const r=e?(0,t.__)("Unlink Sides","block-enhancements"):(0,t.__)("Link Sides","block-enhancements");return(0,we.jsx)(o.Tooltip,{text:r,children:(0,we.jsx)(o.Button,{...n,className:"component-group-control__linked-button",size:"small",icon:e?mn:hn,iconSize:24,"aria-label":r})})}var bn=n(774),vn=n.n(bn);const yn=({values:t,fields:n})=>{const r=n.map(({name:e})=>{var n;return null!==(n=t[e])&&void 0!==n?n:void 0});return(i=r.filter(e=>e)).sort((t,n)=>(0,e.isObject)(t)?i.filter(e=>vn()(e,t)).length-i.filter(e=>vn()(e,n)).length:i.filter(e=>e===t).length-i.filter(e=>e===n).length).pop();var i},wn=({values:e,fields:t,renderControl:n,onChange:i,normalizeValue:a,...o})=>t.map(s=>{var l;const{name:c}=s;return(0,we.jsx)(r.Fragment,{children:n({value:null!==(l=e[c])&&void 0!==l?l:void 0,onChange:(u=c,t=>{t=a({side:u,value:t}),i({...e,[u]:t})}),fields:t,values:e,...s,...o})},`group-control-${c}`);var u}),xn=({values:e,fields:t,renderControl:n,renderAllControl:r=null,onChange:i,normalizeValue:a,...o})=>(r||(r=n),r({value:yn({values:e,fields:t}),fields:t,values:e,onChange:n=>{n=a({side:"all",value:n});let r={...e};t.forEach(({name:e})=>{r={...r,[e]:n}}),i(r)},...o})),kn=({label:t,fields:n=[],values:i={},renderLabel:a=e.noop,renderControl:o=e.noop,onChange:s=e.noop,normalizeValue:l=({side:e,value:t})=>t,isLinkedGroup:c=!0,getInitialLinkedState:u=e.noop,className:d,columns:f,hideHeader:p=!1,...m})=>{const h={fields:n,values:i,renderControl:o,onChange:s,normalizeValue:l,...m},[g,b]=c?function(e){const[t,n]=(0,r.useState)(e);return(0,r.useEffect)(()=>n(e),[e]),[t,n]}(u(i)):[!1,e.noop];return(0,we.jsxs)(dn,{className:un("group-control",d,{[`is-${f}-columns`]:f}),...m,children:[!p&&(0,we.jsxs)(fn,{className:"group-control__header",children:[a({label:t,isLinkedGroup:c,...m}),c&&(0,we.jsx)(gn,{onClick:()=>{b(!g)},isLinked:g})]}),(0,we.jsxs)(pn,{className:"group-control__body",children:[g&&(0,we.jsx)(xn,{...h}),!g&&(0,we.jsx)(wn,{...h})]})]})};ln(kn)`
  .components-input-control__label {
    white-space: nowrap;
  }
`,ln.div`
  .shadow-list__title {
    margin-bottom: 8px;
  }

  .shadow-list {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;

    margin-bottom: 16px;
  }

  .shadow-item {
    height: 30px;
    cursor: pointer;
    background: #fff;
    border: 1px solid #ddd;

    &.is-selected {
      background: #ddd;
    }
  }
`,ln(c.__experimentalPanelColorGradientSettings)`
  padding: 0 !important;
  margin-top: 0 !important;
  border-top: 0 !important;

  > .first {
    margin-top: 0 !important;
  }

  &.is-inner-control {
    .block-editor-panel-color-gradient-settings__dropdown {
      height: 32px;
      padding: 5px;
    }

    .block-editor-panel-color-gradient-settings__reset {
      margin-top: -4px;
    }

    .block-editor-panel-color-gradient-settings__color-name {
      overflow: visible;
    }
  }

  &.is-hidden-reset {
    .block-editor-panel-color-gradient-settings__reset {
      display: none;
    }
  }
`,ln(kn)`
  > .group-control__body {
    align-items: flex-end;
  }

  .components-input-control__label {
    white-space: nowrap;
  }

  .block-editor-panel-color-gradient-settings__item {
    padding: 4px !important;
  }

  .block-editor-panel-color-gradient-settings__dropdown > .components-flex {
    gap: 0;
  }

  .component-color-indicator {
    width: 14px;
    height: 14px;

    &,
    + * {
      margin-left: 2px;
    }
  }
`,ln(kn)`
  .components-base-control__field {
    margin-bottom: 0;
  }
`,window.wp.notices,ln.div`
  .svg-input-control {
    &__label {
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
    }

    &__actions {
      display: flex;
      gap: 8px;
      margin: 6px 0;
    }

    &__input {
      margin: 8px 0 4px;

      > * {
        margin-bottom: 0;
      }
    }
  }
`,ln.fieldset`
  .components-range-control > .components-base-control__field {
    margin-bottom: 0;
  }
`;const Sn="#1e1e1e",Tn="2px";ln.div`
  margin-top: 1px;
  margin-left: 1px;

  .components-button {
    margin: -1px 0 0 -1px;
    vertical-align: middle;
    border-radius: 0;
    display: inline-flex;
    box-shadow: inset 0 0 0 ${"1px"} ${Sn};

    &:first-of-type {
      border-radius: ${Tn} 0 0 ${Tn};
    }

    &:last-of-type {
      border-radius: 0 ${Tn} ${Tn} 0;
    }

    // The active button should look pressed.
    &.is-primary {
      box-shadow: inset 0 0 0 ${"1px"} ${Sn};
    }
  }
`,ln(o.BaseControl)`
  *:empty {
    display: none;
  }
`,n(799),window.wp.keycodes,ln(o.Modal)`
  // Modal content
  .components-modal__content {
    display: flex;
    flex-direction: column;
    padding: 0 20px 20px;
    margin-top: 50px;
    overflow: hidden;

    &::before {
      margin-bottom: 20px;
    }

    > :not(.components-modal__header, .icon-submit) {
      max-height: 100%;
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: auto;
    }
  }

  // Modal header
  .components-modal__header {
    height: 50px;
    padding: 0 20px;
  }

  .icon-library-wrapper {
    flex: 1;
    overflow: hidden;
    content-visibility: hidden;

    &.is-loading,
    &.show-library {
      content-visibility: visible;
    }
  }

  .icon-filter {
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 20px;

    &__search {
      min-width: 220px;
    }

    .keywords {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      font-size: 14px;

      > li {
        margin: 0;
      }

      .keyword-label {
        font-weight: 500;
      }

      span {
        display: block;
        padding: 3px 5px;
      }

      .keyword:not(.is-selected) {
        color: var(--wp-admin-theme-color, #007cba);
        cursor: pointer;
      }

      .is-selected {
        font-weight: 500;
        pointer-events: none;
      }
    }

    @media (max-width: 781px) {
      flex-wrap: wrap;

      &__search {
        width: 100%;
      }

      &__keywords {
        margin-top: 8px;
        margin-left: 0 !important;
      }
    }
  }

  .components-search-control > * {
    margin-bottom: 0;
  }

  // Icons list
  .icon-library {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9em, 1fr));
    gap: 0.5em;
    max-height: calc(100% - 110px);
    overflow: auto;

    /* box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.4); */

    svg {
      width: 4em;
      height: 4em;
    }

    .title {
      max-height: 1.7em;
      font-size: 0.85em;
      line-height: 1.5;
      text-align: center;
      word-break: break-word;
    }

    > * {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5em 1em;
      overflow: hidden;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
    }

    .selected {
      background-color: #ccc;
    }

    &:empty::before {
      display: block;
      width: 100%;
      padding: 2rem;
      text-align: center;
      content: attr(data-empty);
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }

  // Pagination
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
    font-size: 1.5em;

    > li {
      margin: 0 5px;

      &:only-child {
        display: none;
      }

      &.active {
        a {
          color: #3c434a;
        }
      }

      &:not(.active) {
        a {
          cursor: pointer;
        }
      }
    }

    a {
      display: block;
      padding: 5px 10px;
    }
  }
`;const An=ln.div`
  .settings-section__description {
    margin: 1em 0;
    font-size: 1.1em;
    font-weight: 500;
  }

  .settings-section__body {
    @media (min-width: 1080px) {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: start;
      gap: 1rem;

      .postbox {
        margin-bottom: 1rem;
      }
    }
  }
`,Cn=({title:e,description:t,children:n,className:r})=>(0,we.jsxs)(An,{className:un("settings-section meta-box-sortables",r),children:[e&&(0,we.jsx)("h3",{className:"settings-section__title",children:e}),t&&(0,we.jsx)("p",{className:"settings-section__description",children:t}),(0,we.jsx)("div",{className:"settings-section__body",children:n})]}),En=ln.div`
  &.is-full-row {
    grid-column: span 2;
  }

  &.is-header-hidden {
    .inside {
      padding: 12px;
    }

    @media (min-width: 1080px) {
      margin: 0;
    }
  }

  .postbox-header {
    .hndle {
      cursor: pointer;
    }
  }

  .inside {
    margin: 0;
  }

  .postbox-footer {
    padding: 12px;
    border-top: 1px solid #f0f0f1;
  }

  &.closed .postbox-footer {
    display: none;
  }

  .components-notice {
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 8px;
    margin-right: 0;
    margin-left: 0;
    box-sizing: border-box;
  }
`,Nn=ln.div`
  padding: 12px 16px;
  margin-top: 12px;
  background-color: #fafafa;
  border: 1px solid #ebebeb;
  border-radius: 2px;

  .fieldset__label {
    margin-bottom: 12px;
  }

  .fieldset__list {
    margin-bottom: 0;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    column-gap: 1rem;
  }

  .file-upload {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
  }

  .file-preview {
    display: flex;
    align-items: center;
    gap: 0.5em;

    .icon {
      width: 20px;
      height: 20px;
    }
  }
`,On=({title:t,settingsName:n="boldblocks-settings",children:i,renderFooter:a=null,isFullRow:o=!1,isHeaderHidden:s=!1,className:l,initialOpen:c=!0})=>{const u=`${n}-${(0,ve.cleanForSlug)(t)}`,[d,f]=((t,n=null)=>{const[i,a]=(0,r.useState)(()=>{try{const r=JSON.parse(localStorage.getItem(t));return(0,e.isNil)(r)?n:r}catch(e){return Ce(e,"error"),n}});return[i,e=>{a(e),localStorage.setItem(t,JSON.stringify(e))}]})(u,!c);return(0,we.jsxs)(En,{className:un("postbox",l,{closed:d,"is-full-row":o,"is-header-hidden":s}),children:[!s&&(0,we.jsxs)("div",{className:"postbox-header","aria-expanded":d?"false":"true",tabIndex:-1,onClick:e=>{e.preventDefault(),f(!d)},children:[(0,we.jsx)("h2",{className:"hndle",children:t}),(0,we.jsx)("div",{className:"handle-actions hide-if-no-js",children:(0,we.jsxs)("button",{type:"button",className:"handlediv","aria-expanded":d?"false":"true",onClick:e=>{e.preventDefault(),f(!d)},children:[(0,we.jsxs)("span",{className:"screen-reader-text",children:["Toggle panel: ",t]}),(0,we.jsx)("span",{className:"toggle-indicator","aria-hidden":d?"true":"false"})]})})]}),(0,we.jsx)("div",{className:"inside",children:i}),(0,e.isFunction)(a)&&(0,we.jsx)("div",{className:"postbox-footer",children:a()})]})};ln(o.__experimentalToolsPanelItem)`
  padding-top: 8px;
  padding-inline: 16px;
  margin-top: -1px;
  margin-inline: -16px;
  border-top: 1px solid #ddd;
`,ln(o.__experimentalVStack)`
  > * {
    margin-bottom: 0 !important;
  }

  > .label-control,
  > hr {
    margin: 0 !important;
  }

  .components-tools-panel-item {
    margin-top: 0 !important;
  }
`;const Rn=ln(On)`
  border-top: 0;

  h1 {
    padding: 0;
    margin: 10px 0;
    font-size: 2.5em;
  }

  h2 {
    margin-bottom: 0.75em !important;
  }

  .welcome {
    &__description {
      ul,
      p {
        font-size: 1.2em;
      }

      ul {
        padding-left: 20px;
        list-style: disc;
      }

      img {
        max-width: 100%;
        height: auto;
      }
    }

    &__guides {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 1.5em;

      h4 {
        margin: 0 0 1em;
      }
    }
  }

  .video-tutorials {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;

    @media (min-width: 782px) {
      // $break-medium
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
      // $break-wide
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    &__item {
      border: 1px solid #ddd;

      &__video {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        margin: 0;

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }

      &__desc {
        padding: 8px 10px 10px;
        font-size: 1.2em;
        font-weight: 500;
      }
    }
  }

  h2.view-playlists {
    margin-top: 1rem;
  }
`,Ln=()=>{const{loading:e,data:n}=(0,r.useContext)(De);return(0,we.jsxs)(Rn,{isHeaderHidden:!0,isFullRow:!0,className:"welcome-widget welcome",children:[(0,we.jsx)("h1",{children:(0,t.__)("Welcome to Block Enhancements","block-enhancements")}),(0,we.jsxs)("div",{className:"welcome__description",children:[(0,we.jsx)("p",{children:(0,t.__)("This plugin enhances your blocks with some usefull features. You can add responsive dimensions (padding, margin, gap), icons, responsive text alignment, colors, shadows, transforms, transitions with hover style to make your blocks stand out. It works well with both core and third-party blocks, you can choose which blocks should be supported for each feature from the 'Manage Features' section.","block-enhancements")}),(0,we.jsx)("p",{children:(0,t.__)("To get started, we suggest you check out these quick guides and watch these video tutorials below.","block-enhancements")}),(0,we.jsx)("h2",{children:(0,t.__)("Here are some quick guides on how to use them.","block-enhancements")}),(0,we.jsx)("div",{className:"welcome__guides",children:e?(0,we.jsx)(o.Spinner,{}):!!n?.guides&&n?.guides.map(({title:e,src:t})=>(0,we.jsxs)("div",{children:[(0,we.jsx)("h4",{children:e}),(0,we.jsx)("img",{src:t})]},t))}),(0,we.jsx)("h2",{children:(0,t.__)("Video tutorials","block-enhancements")}),(0,we.jsxs)("p",{children:[(0,t.__)("Below is a list of short video tutorials, you can use them as learning resources. We will upload more videos soon, so don’t miss out on the latest updates. To get notified when we release new videos, please subscribe to our youtube channel and turn on the notifications. ","block-enhancements"),(0,we.jsx)(o.ExternalLink,{href:"https://www.youtube.com/channel/UCB7Y3mlCEKHVM-RCZaTkR1g?sub_confirmation=1",children:"Subscribe"}),", ",(0,we.jsx)(o.ExternalLink,{href:"https://www.youtube.com/playlist?list=PLPuEwc7dZklcKwDc2AJLjLvH3QCQclmzh",children:(0,t.__)("View all playlist","block-enhancements")})]}),(0,we.jsx)("div",{className:"video-tutorials",children:e?(0,we.jsx)(o.Spinner,{}):!!n?.videoTutorials&&n?.videoTutorials.map(({title:e,id:t})=>(0,we.jsxs)("div",{className:"video-tutorials__item",children:[(0,we.jsx)("div",{className:"video-tutorials__item__video",children:(0,we.jsx)("iframe",{src:`https://www.youtube.com/embed/${t}`,srcDoc:`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img{position:absolute;width:100%;top:0;bottom:0;margin:auto}.btn-play{position: absolute;top: 50%;left: 50%;z-index: 1;display: block;width: 68px;height: 48px;margin:0;cursor: pointer;transform: translate3d(-50%, -50%, 0);background-color: transparent;background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');filter: grayscale(100%);transition: filter .1s cubic-bezier(0, 0, 0.2, 1);border: none;}body:hover .btn-play,.btn-play:focus{filter:none}.visually-hidden{clip: rect(0 0 0 0);clip-path: inset(50%);height: 1px;overflow: hidden;position: absolute;white-space: nowrap;width: 1px;}</style><a href="https://www.youtube.com/embed/${t}?autoplay=1&enablejsapi=1&playsinline=1"><img src="https://img.youtube.com/vi/${t}/hqdefault.jpg" alt="${e}"><button type="button" class="btn-play"><span class="visually-hidden">Play</span></button></a>`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),(0,we.jsx)("div",{className:"video-tutorials__item__desc",children:e})]},t))})]})]})},In=()=>(0,we.jsx)(Cn,{children:(0,we.jsx)(Ln,{})}),jn=e=>"withTextAlignment"!==e,Dn=ln(On)`
  fieldset {
    min-height: 60px;
    overflow: auto;
  }

  .blocktype-checkbox {
    > .components-base-control__field {
      display: flex;
      align-items: center;
    }
    .components-checkbox-control__label {
      display: inline-flex;
      align-items: center;

      svg {
        width: 18px;
        height: 18px;
        margin-right: 8px;
      }
    }

    .label {
      display: block;
      max-width: 170px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`,Mn=({blockTypes:e,featureName:t,selectedBlocks:n,setSelectedBlocks:r,title:i})=>(0,we.jsxs)(we.Fragment,{children:[!!i&&(0,we.jsx)("h4",{className:"list-title",children:i}),(0,we.jsx)("ul",{className:"fieldset__list",children:e.map(i=>(0,we.jsx)("li",{children:(0,we.jsx)(o.CheckboxControl,{label:(0,we.jsxs)(we.Fragment,{children:[(0,we.jsx)(o.Icon,{className:"block-icon",icon:i?.icon?.src}),(0,we.jsx)("span",{className:"label",title:i?.title,children:`${i?.title}`})]}),checked:!!n.find(({name:e})=>e===i?.name),onChange:a=>{let o=[];if(a){const t=e.find(({name:e})=>e===i?.name);o=[...n,{name:t.name}]}else o=n.filter(({name:e})=>e!==i?.name);r([...o],t)},className:"blocktype-checkbox"})},`${t}-${i?.name}`))})]}),Pn=(0,r.memo)(({featureName:e,availableBlockTypes:n,isLoading:i,selectedBlocks:a,title:s,description:l,updateSettings:c})=>{const u=(0,r.useMemo)(()=>n.reduce((e,t)=>{var n;if(["core/block","core/missing"].includes(t?.name))return e;const r=t?.category?t.category:"other";return null!==(n=e[r])&&void 0!==n&&n?e[r].push(t):e[r]=[t],e},{}),[n?.length]),[d,f]=(0,r.useState)(a),p=d.map(({name:e})=>e),m=(0,r.useMemo)(()=>n.filter(({name:e})=>p.includes(e)),[p]),h=d.filter(({isShownByDefault:e})=>!!e),[g,b]=(0,r.useState)({type:"success",message:""});return(0,we.jsxs)(Dn,{title:s,renderFooter:()=>{const[n,i]=(0,r.useState)(!1);return(0,we.jsxs)(we.Fragment,{children:[(0,we.jsx)(o.Button,{variant:"primary",disabled:n,onClick:n=>{n.preventDefault(),i(!0),c(d,e).then(()=>{b({type:"success",message:(0,t.__)("Setttings saved!","block-enhancements")})}).catch(e=>{Ce(e,"error"),b({type:"error",message:(0,t.__)("Something went wrong, please contact the author for support!","block-enhancements")})}).finally(()=>{i(!1)})},children:(0,t.__)("Update settings","block-enhancements")}),n&&(0,we.jsx)(o.Spinner,{})]})},isFullRow:!0,settingsName:"be-settings",initialOpen:!1,children:[(0,we.jsx)("p",{children:l}),(0,we.jsxs)(Nn,{className:"fieldset",children:[(0,we.jsx)("div",{className:"fieldset__label",children:(0,we.jsx)("strong",{children:(0,t.__)("Choose which blocks should be supported.","block-enhancements")})}),i?(0,we.jsx)(o.Spinner,{}):n?.length>0&&(0,we.jsxs)("fieldset",{children:[(0,we.jsx)(o.CheckboxControl,{label:(0,t.__)("Toggle All","block-enhancements"),checked:d.length===n.length,onChange:e=>{f(e?e=>[...n.filter(({name:e})=>!p.includes(e)).map(({name:e})=>({name:e})),...e]:[])}}),n.length<24?(0,we.jsx)(Mn,{blockTypes:n,featureName:e,selectedBlocks:d,setSelectedBlocks:f}):(0,we.jsx)(we.Fragment,{children:Object.keys(u).map(t=>(0,we.jsx)(Mn,{title:t.toUpperCase(),blockTypes:u[t],featureName:e,selectedBlocks:d,setSelectedBlocks:f},t))})]})]}),jn(e)&&d?.length>0&&(0,we.jsxs)(Nn,{className:"fieldset",children:[(0,we.jsx)("div",{className:"fieldset__label",children:(0,we.jsx)("strong",{children:(0,t.__)("Choose which blocks should display this feature by default in the Block Enhancements panel.","block-enhancements")})}),i?(0,we.jsx)(o.Spinner,{}):(0,we.jsxs)("fieldset",{children:[(0,we.jsx)(o.CheckboxControl,{label:(0,t.__)("Toggle All","block-enhancements"),checked:d.length===h.length,onChange:e=>{f(e?d.map(e=>({...e,isShownByDefault:!0})):[])}}),(0,we.jsx)(Mn,{blockTypes:m,featureName:e,selectedBlocks:h,setSelectedBlocks:e=>{const t=d.map(({name:t})=>({name:t,isShownByDefault:!!e.find(e=>e?.name===t)}));f(t)}})]})]}),g&&g?.message&&(0,we.jsx)(o.Notice,{status:g?.type,isDismissible:!1,children:g.message})]})}),zn=()=>{const{blocksByFeatures:e,isLoading:n,updateSettings:r}=(()=>{var e;const t=null!==(e=window?.BlockEnhancementsFeatures)&&void 0!==e?e:{},{saveEditedEntityRecord:n}=(0,l.useDispatch)(Le.store),[r,i]=(0,Le.useEntityProp)("root","site","be_allowed_blocks");let a=(0,Ie.getBlockTypes)();const o=Object.keys(t).reduce((e,n)=>{var i,o;let s=(null!=r?r:[]).find(e=>e?.featureName===n);return{...e,[n]:{allowedBlocks:s?null!==(i=s?.allowedBlocks)&&void 0!==i?i:[]:null!==(o=t[n]?.allowedBlocks)&&void 0!==o?o:[],availableBlocks:je(n,t,a)}}},{});return{blocksByFeatures:o,isLoading:!r,updateSettings:(e,t)=>{const a=r.find(e=>e.featureName===t)?r.map(n=>n?.featureName!==t?n:{...n,allowedBlocks:e}):[...r,{featureName:t,allowedBlocks:e}];return i(a),n("root","site")}}})(),i=Object.keys(e).map(i=>{var a,o;let s;switch(i){case"withIcon":s=(0,t.__)("With Icon","block-enhancements");break;case"withDimension":s=(0,t.__)("With Responsive Dimension","block-enhancements");break;case"withTextAlignment":s=(0,t.__)("With Responsive Text Alignment","block-enhancements");break;case"withColor":s=(0,t.__)("With Color","block-enhancements");break;case"withShadow":s=(0,t.__)("With Box Shadow","block-enhancements");break;case"withTextShadow":s=(0,t.__)("With Text Shadow","block-enhancements");break;case"withTransform":s=(0,t.__)("With Transform","block-enhancements");break;case"withTransition":s=(0,t.__)("With Transition","block-enhancements");break;case"withTypography":s=(0,t.__)("With Typography","block-enhancements");break;case"withPosition":s=(0,t.__)("With Position","block-enhancements")}return(0,we.jsx)(Pn,{featureName:i,title:s,isLoading:n,availableBlockTypes:null!==(a=e[i].availableBlocks)&&void 0!==a?a:[],updateSettings:r,selectedBlocks:null!==(o=e[i].allowedBlocks)&&void 0!==o?o:[]},i)});return(0,we.jsx)(Cn,{title:(0,t.__)("Manage allowed blocks for each feature","block-enhancements"),children:i})},Bn=({children:e})=>(0,we.jsx)("div",{className:"metabox-holder",children:e}),Fn=()=>{const n=[{name:"getting-started",title:(0,t.__)("Getting Started","block-enhancements"),className:"setting-tabs__getting-started"},{name:"manage-features",title:(0,t.__)("Manage Features","block-enhancements"),className:"setting-tabs__manage-features"}],i=new Re,a=i.get("tab"),s=(0,e.findKey)(n,["name",a])?a:"getting-started",l=(()=>{const{loading:e,error:t,data:{data:n}={}}=((e,t={},n=[])=>{const[i,a]=(0,r.useState)(!0),[o,s]=(0,r.useState)(),[l,c]=(0,r.useState)(),u=(0,r.useCallback)(()=>{a(!0),s(void 0),c(void 0),d()({path:e,...{...f,...t}}).then(c).catch(s).finally(()=>a(!1))},n);return(0,r.useEffect)(()=>{u()},[u]),{loading:i,error:o,data:l}})("blockenhancements/v1/getDocs");return{loading:e,error:t,data:n}})();return(0,we.jsx)(De.Provider,{value:l,children:(0,we.jsx)(o.TabPanel,{tabs:n,className:"settings-tabs",activeClass:"is-active",initialTabName:s,onSelect:e=>{i.set("tab",e)},children:e=>{switch(e.name){case"getting-started":return(0,we.jsx)(Bn,{children:(0,we.jsx)(In,{})});case"manage-features":return(0,we.jsx)(Bn,{children:(0,we.jsx)(zn,{})})}}})})};a()(()=>{(0,s.registerCoreBlocks)(),(0,r.render)((0,we.jsx)(Fn,{}),document.querySelector(".js-be-settings-root"))})})()})();