!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="kVj6")}({kVj6:function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}o.r(t);var a,l,s,c,d,u=(a=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],l=function(){function e(t){var o=t.targetModal,n=t.triggers,r=void 0===n?[]:n,a=t.onShow,l=void 0===a?function(){}:a,s=t.onClose,c=void 0===s?function(){}:s,d=t.openTrigger,u=void 0===d?"data-micromodal-trigger":d,f=t.closeTrigger,h=void 0===f?"data-micromodal-close":f,v=t.openClass,g=void 0===v?"is-open":v,m=t.disableScroll,b=void 0!==m&&m,p=t.disableFocus,y=void 0!==p&&p,w=t.awaitCloseAnimation,k=void 0!==w&&w,E=t.awaitOpenAnimation,A=void 0!==E&&E,M=t.debugMode,S=void 0!==M&&M;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modal=document.getElementById(o),this.config={debugMode:S,disableScroll:b,openTrigger:u,closeTrigger:h,openClass:g,onShow:l,onClose:c,awaitCloseAnimation:k,awaitOpenAnimation:A,disableFocus:y},r.length>0&&this.registerTriggers.apply(this,i(r)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var t,o;return t=e,(o=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var o=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",o,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(a);return Array.apply(void 0,i(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&n(t.prototype,o),e}(),s=null,c=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},d=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var o in t)c(o);return!0},{init:function(e){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),o=i(document.querySelectorAll("[".concat(t.openTrigger,"]"))),n=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(o,t.openTrigger);if(!0!==t.debugMode||!1!==d(o,n))for(var r in n){var a=n[r];t.targetModal=r,t.triggers=i(a),s=new l(t)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===c(e)||(s&&s.removeEventListeners(),(s=new l(o)).showModal())},close:function(e){e?s.closeModalById(e):s.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=u);var f=u;function h(e){const t=e.querySelector(".wp-block-navigation__responsive-dialog"),o="true"===e.getAttribute("aria-hidden");e.classList.toggle("has-modal-open",!o),t.toggleAttribute("aria-modal",!o),o?(t.removeAttribute("role"),t.removeAttribute("aria-modal")):(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"));document.documentElement.classList.toggle("has-modal-open")}function v(e){e.querySelectorAll('[aria-expanded="true"]').forEach((function(e){e.setAttribute("aria-expanded","false")}))}function g(e){const t=e.target.closest("[aria-expanded]");if("true"===t.getAttribute("aria-expanded"))v(t.closest(".wp-block-navigation-item"));else{const e=t.closest(".wp-block-navigation-item");t.closest(".wp-block-navigation__submenu-container, .wp-block-navigation__container, .wp-block-page-list").querySelectorAll(".wp-block-navigation-item").forEach((function(t){t!==e&&v(t)})),t.setAttribute("aria-expanded","true")}}window.addEventListener("load",()=>{f.init({onShow:h,onClose:h,openClass:"is-menu-open"});document.querySelectorAll(".wp-block-navigation-submenu__toggle").forEach((function(e){e.addEventListener("click",g)})),document.addEventListener("click",(function(e){document.querySelectorAll(".wp-block-navigation").forEach((function(t){t.contains(e.target)||v(t)}))})),document.addEventListener("keyup",(function(e){document.querySelectorAll(".wp-block-navigation-item.has-child").forEach((function(t){t.contains(e.target)||v(t)}))}))})}});
window.qm_twig_profile=window.qm_twig_profile||{}
window.qm_twig_profile.save=function(filename,data){var blob=new Blob([data],{type:'text/csv'});if(window.navigator.msSaveOrOpenBlob){window.navigator.msSaveBlob(blob,filename);}
else{var elem=window.document.createElement('a');elem.href=window.URL.createObjectURL(blob);elem.download=filename;document.body.appendChild(elem);elem.click();document.body.removeChild(elem);}};
(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="5a74");})
({"1be2":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("c8dc");var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__)if(["default"].indexOf(__WEBPACK_IMPORT_KEY__)<0)(function(key){__webpack_require__.d(__webpack_exports__,key,function(){return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];})}(__WEBPACK_IMPORT_KEY__));__webpack_exports__["default"]=(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a);}),"2083":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("f457");var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__)if(["default"].indexOf(__WEBPACK_IMPORT_KEY__)<0)(function(key){__webpack_require__.d(__webpack_exports__,key,function(){return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key];})}(__WEBPACK_IMPORT_KEY__));__webpack_exports__["default"]=(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default.a);}),"24fb":(function(module,exports,__webpack_require__){"use strict";module.exports=function(useSourceMap){var list=[];list.toString=function toString(){return this.map(function(item){var content=cssWithMappingToString(item,useSourceMap);if(item[2]){return"@media ".concat(item[2]," {").concat(content,"}");}
return content;}).join('');};list.i=function(modules,mediaQuery,dedupe){if(typeof modules==='string'){modules=[[null,modules,'']];}
var alreadyImportedModules={};if(dedupe){for(var i=0;i<this.length;i++){var id=this[i][0];if(id!=null){alreadyImportedModules[id]=true;}}}
for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);if(dedupe&&alreadyImportedModules[item[0]]){continue;}
if(mediaQuery){if(!item[2]){item[2]=mediaQuery;}else{item[2]="".concat(mediaQuery," and ").concat(item[2]);}}
list.push(item);}};return list;};function cssWithMappingToString(item,useSourceMap){var content=item[1]||'';var cssMapping=item[3];if(!cssMapping){return content;}
if(useSourceMap&&typeof btoa==='function'){var sourceMapping=toComment(cssMapping);var sourceURLs=cssMapping.sources.map(function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||'').concat(source," */");});return[content].concat(sourceURLs).concat([sourceMapping]).join('\n');}
return[content].join('\n');}
function toComment(sourceMap){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));var data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);return"/*# ".concat(data," */");}}),"2b0e":(function(module,__webpack_exports__,__webpack_require__){"use strict";(function(global){
/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
var emptyObject=Object.freeze({});function isUndef(v){return v===undefined||v===null}
function isDef(v){return v!==undefined&&v!==null}
function isTrue(v){return v===true}
function isFalse(v){return v===false}
function isPrimitive(value){return(typeof value==='string'||typeof value==='number'||typeof value==='symbol'||typeof value==='boolean')}
function isObject(obj){return obj!==null&&typeof obj==='object'}
var _toString=Object.prototype.toString;function toRawType(value){return _toString.call(value).slice(8,-1)}
function isPlainObject(obj){return _toString.call(obj)==='[object Object]'}
function isRegExp(v){return _toString.call(v)==='[object RegExp]'}
function isValidArrayIndex(val){var n=parseFloat(String(val));return n>=0&&Math.floor(n)===n&&isFinite(val)}
function isPromise(val){return(isDef(val)&&typeof val.then==='function'&&typeof val.catch==='function')}
function toString(val){return val==null?'':Array.isArray(val)||(isPlainObject(val)&&val.toString===_toString)?JSON.stringify(val,null,2):String(val)}
function toNumber(val){var n=parseFloat(val);return isNaN(n)?val:n}
function makeMap(str,expectsLowerCase){var map=Object.create(null);var list=str.split(',');for(var i=0;i<list.length;i++){map[list[i]]=true;}
return expectsLowerCase?function(val){return map[val.toLowerCase()];}:function(val){return map[val];}}
var isBuiltInTag=makeMap('slot,component',true);var isReservedAttribute=makeMap('key,ref,slot,slot-scope,is');function remove(arr,item){if(arr.length){var index=arr.indexOf(item);if(index>-1){return arr.splice(index,1)}}}
var hasOwnProperty=Object.prototype.hasOwnProperty;function hasOwn(obj,key){return hasOwnProperty.call(obj,key)}
function cached(fn){var cache=Object.create(null);return(function cachedFn(str){var hit=cache[str];return hit||(cache[str]=fn(str))})}
var camelizeRE=/-(\w)/g;var camelize=cached(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';})});var capitalize=cached(function(str){return str.charAt(0).toUpperCase()+str.slice(1)});var hyphenateRE=/\B([A-Z])/g;var hyphenate=cached(function(str){return str.replace(hyphenateRE,'-$1').toLowerCase()});function polyfillBind(fn,ctx){function boundFn(a){var l=arguments.length;return l?l>1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx)}
boundFn._length=fn.length;return boundFn}
function nativeBind(fn,ctx){return fn.bind(ctx)}
var bind=Function.prototype.bind?nativeBind:polyfillBind;function toArray(list,start){start=start||0;var i=list.length-start;var ret=new Array(i);while(i--){ret[i]=list[i+start];}
return ret}
function extend(to,_from){for(var key in _from){to[key]=_from[key];}
return to}
function toObject(arr){var res={};for(var i=0;i<arr.length;i++){if(arr[i]){extend(res,arr[i]);}}
return res}
function noop(a,b,c){}
var no=function(a,b,c){return false;};var identity=function(_){return _;};function looseEqual(a,b){if(a===b){return true}
var isObjectA=isObject(a);var isObjectB=isObject(b);if(isObjectA&&isObjectB){try{var isArrayA=Array.isArray(a);var isArrayB=Array.isArray(b);if(isArrayA&&isArrayB){return a.length===b.length&&a.every(function(e,i){return looseEqual(e,b[i])})}else if(a instanceof Date&&b instanceof Date){return a.getTime()===b.getTime()}else if(!isArrayA&&!isArrayB){var keysA=Object.keys(a);var keysB=Object.keys(b);return keysA.length===keysB.length&&keysA.every(function(key){return looseEqual(a[key],b[key])})}else{return false}}catch(e){return false}}else if(!isObjectA&&!isObjectB){return String(a)===String(b)}else{return false}}
function looseIndexOf(arr,val){for(var i=0;i<arr.length;i++){if(looseEqual(arr[i],val)){return i}}
return-1}
function once(fn){var called=false;return function(){if(!called){called=true;fn.apply(this,arguments);}}}
var SSR_ATTR='data-server-rendered';var ASSET_TYPES=['component','directive','filter'];var LIFECYCLE_HOOKS=['beforeCreate','created','beforeMount','mounted','beforeUpdate','updated','beforeDestroy','destroyed','activated','deactivated','errorCaptured','serverPrefetch'];var config=({optionMergeStrategies:Object.create(null),silent:false,productionTip:"production"!=='production',devtools:"production"!=='production',performance:false,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:no,isReservedAttr:no,isUnknownElement:no,getTagNamespace:noop,parsePlatformTagName:identity,mustUseProp:no,async:true,_lifecycleHooks:LIFECYCLE_HOOKS});var unicodeRegExp=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function isReserved(str){var c=(str+'').charCodeAt(0);return c===0x24||c===0x5F}
function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});}
var bailRE=new RegExp(("[^"+(unicodeRegExp.source)+".$_\\d]"));function parsePath(path){if(bailRE.test(path)){return}
var segments=path.split('.');return function(obj){for(var i=0;i<segments.length;i++){if(!obj){return}
obj=obj[segments[i]];}
return obj}}
var hasProto='__proto__'in{};var inBrowser=typeof window!=='undefined';var inWeex=typeof WXEnvironment!=='undefined'&&!!WXEnvironment.platform;var weexPlatform=inWeex&&WXEnvironment.platform.toLowerCase();var UA=inBrowser&&window.navigator.userAgent.toLowerCase();var isIE=UA&&/msie|trident/.test(UA);var isIE9=UA&&UA.indexOf('msie 9.0')>0;var isEdge=UA&&UA.indexOf('edge/')>0;var isAndroid=(UA&&UA.indexOf('android')>0)||(weexPlatform==='android');var isIOS=(UA&&/iphone|ipad|ipod|ios/.test(UA))||(weexPlatform==='ios');var isChrome=UA&&/chrome\/\d+/.test(UA)&&!isEdge;var isPhantomJS=UA&&/phantomjs/.test(UA);var isFF=UA&&UA.match(/firefox\/(\d+)/);var nativeWatch=({}).watch;var supportsPassive=false;if(inBrowser){try{var opts={};Object.defineProperty(opts,'passive',({get:function get(){supportsPassive=true;}}));window.addEventListener('test-passive',null,opts);}catch(e){}}
var _isServer;var isServerRendering=function(){if(_isServer===undefined){if(!inBrowser&&!inWeex&&typeof global!=='undefined'){_isServer=global['process']&&global['process'].env.VUE_ENV==='server';}else{_isServer=false;}}
return _isServer};var devtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function isNative(Ctor){return typeof Ctor==='function'&&/native code/.test(Ctor.toString())}
var hasSymbol=typeof Symbol!=='undefined'&&isNative(Symbol)&&typeof Reflect!=='undefined'&&isNative(Reflect.ownKeys);var _Set;if(typeof Set!=='undefined'&&isNative(Set)){_Set=Set;}else{_Set=(function(){function Set(){this.set=Object.create(null);}
Set.prototype.has=function has(key){return this.set[key]===true};Set.prototype.add=function add(key){this.set[key]=true;};Set.prototype.clear=function clear(){this.set=Object.create(null);};return Set;}());}
var warn=noop;var tip=noop;var generateComponentTrace=(noop);var formatComponentName=(noop);if(false){var repeat,classify,classifyRE,hasConsole;}
var uid=0;var Dep=function Dep(){this.id=uid++;this.subs=[];};Dep.prototype.addSub=function addSub(sub){this.subs.push(sub);};Dep.prototype.removeSub=function removeSub(sub){remove(this.subs,sub);};Dep.prototype.depend=function depend(){if(Dep.target){Dep.target.addDep(this);}};Dep.prototype.notify=function notify(){var subs=this.subs.slice();if(false){}
for(var i=0,l=subs.length;i<l;i++){subs[i].update();}};Dep.target=null;var targetStack=[];function pushTarget(target){targetStack.push(target);Dep.target=target;}
function popTarget(){targetStack.pop();Dep.target=targetStack[targetStack.length-1];}
var VNode=function VNode(tag,data,children,text,elm,context,componentOptions,asyncFactory){this.tag=tag;this.data=data;this.children=children;this.text=text;this.elm=elm;this.ns=undefined;this.context=context;this.fnContext=undefined;this.fnOptions=undefined;this.fnScopeId=undefined;this.key=data&&data.key;this.componentOptions=componentOptions;this.componentInstance=undefined;this.parent=undefined;this.raw=false;this.isStatic=false;this.isRootInsert=true;this.isComment=false;this.isCloned=false;this.isOnce=false;this.asyncFactory=asyncFactory;this.asyncMeta=undefined;this.isAsyncPlaceholder=false;};var prototypeAccessors={child:{configurable:true}};prototypeAccessors.child.get=function(){return this.componentInstance};Object.defineProperties(VNode.prototype,prototypeAccessors);var createEmptyVNode=function(text){if(text===void 0)text='';var node=new VNode();node.text=text;node.isComment=true;return node};function createTextVNode(val){return new VNode(undefined,undefined,undefined,String(val))}
function cloneVNode(vnode){var cloned=new VNode(vnode.tag,vnode.data,vnode.children&&vnode.children.slice(),vnode.text,vnode.elm,vnode.context,vnode.componentOptions,vnode.asyncFactory);cloned.ns=vnode.ns;cloned.isStatic=vnode.isStatic;cloned.key=vnode.key;cloned.isComment=vnode.isComment;cloned.fnContext=vnode.fnContext;cloned.fnOptions=vnode.fnOptions;cloned.fnScopeId=vnode.fnScopeId;cloned.asyncMeta=vnode.asyncMeta;cloned.isCloned=true;return cloned}
var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto);var methodsToPatch=['push','pop','shift','unshift','splice','sort','reverse'];methodsToPatch.forEach(function(method){var original=arrayProto[method];def(arrayMethods,method,function mutator(){var args=[],len=arguments.length;while(len--)args[len]=arguments[len];var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case'push':case'unshift':inserted=args;break
case'splice':inserted=args.slice(2);break}
if(inserted){ob.observeArray(inserted);}
ob.dep.notify();return result});});var arrayKeys=Object.getOwnPropertyNames(arrayMethods);var shouldObserve=true;function toggleObserving(value){shouldObserve=value;}
var Observer=function Observer(value){this.value=value;this.dep=new Dep();this.vmCount=0;def(value,'__ob__',this);if(Array.isArray(value)){if(hasProto){protoAugment(value,arrayMethods);}else{copyAugment(value,arrayMethods,arrayKeys);}
this.observeArray(value);}else{this.walk(value);}};Observer.prototype.walk=function walk(obj){var keys=Object.keys(obj);for(var i=0;i<keys.length;i++){defineReactive$$1(obj,keys[i]);}};Observer.prototype.observeArray=function observeArray(items){for(var i=0,l=items.length;i<l;i++){observe(items[i]);}};function protoAugment(target,src){target.__proto__=src;}
function copyAugment(target,src,keys){for(var i=0,l=keys.length;i<l;i++){var key=keys[i];def(target,key,src[key]);}}
function observe(value,asRootData){if(!isObject(value)||value instanceof VNode){return}
var ob;if(hasOwn(value,'__ob__')&&value.__ob__ instanceof Observer){ob=value.__ob__;}else if(shouldObserve&&!isServerRendering()&&(Array.isArray(value)||isPlainObject(value))&&Object.isExtensible(value)&&!value._isVue){ob=new Observer(value);}
if(asRootData&&ob){ob.vmCount++;}
return ob}
function defineReactive$$1(obj,key,val,customSetter,shallow){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property&&property.configurable===false){return}
var getter=property&&property.get;var setter=property&&property.set;if((!getter||setter)&&arguments.length===2){val=obj[key];}
var childOb=!shallow&&observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();if(Array.isArray(value)){dependArray(value);}}}
return value},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;if(newVal===value||(newVal!==newVal&&value!==value)){return}
if(false){}
if(getter&&!setter){return}
if(setter){setter.call(obj,newVal);}else{val=newVal;}
childOb=!shallow&&observe(newVal);dep.notify();}});}
function set(target,key,val){if(false){}
if(Array.isArray(target)&&isValidArrayIndex(key)){target.length=Math.max(target.length,key);target.splice(key,1,val);return val}
if(key in target&&!(key in Object.prototype)){target[key]=val;return val}
var ob=(target).__ob__;if(target._isVue||(ob&&ob.vmCount)){false&&false;return val}
if(!ob){target[key]=val;return val}
defineReactive$$1(ob.value,key,val);ob.dep.notify();return val}
function del(target,key){if(false){}
if(Array.isArray(target)&&isValidArrayIndex(key)){target.splice(key,1);return}
var ob=(target).__ob__;if(target._isVue||(ob&&ob.vmCount)){false&&false;return}
if(!hasOwn(target,key)){return}
delete target[key];if(!ob){return}
ob.dep.notify();}
function dependArray(value){for(var e=(void 0),i=0,l=value.length;i<l;i++){e=value[i];e&&e.__ob__&&e.__ob__.dep.depend();if(Array.isArray(e)){dependArray(e);}}}
var strats=config.optionMergeStrategies;if(false){}
function mergeData(to,from){if(!from){return to}
var key,toVal,fromVal;var keys=hasSymbol?Reflect.ownKeys(from):Object.keys(from);for(var i=0;i<keys.length;i++){key=keys[i];if(key==='__ob__'){continue}
toVal=to[key];fromVal=from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(toVal!==fromVal&&isPlainObject(toVal)&&isPlainObject(fromVal)){mergeData(toVal,fromVal);}}
return to}
function mergeDataOrFn(parentVal,childVal,vm){if(!vm){if(!childVal){return parentVal}
if(!parentVal){return childVal}
return function mergedDataFn(){return mergeData(typeof childVal==='function'?childVal.call(this,this):childVal,typeof parentVal==='function'?parentVal.call(this,this):parentVal)}}else{return function mergedInstanceDataFn(){var instanceData=typeof childVal==='function'?childVal.call(vm,vm):childVal;var defaultData=typeof parentVal==='function'?parentVal.call(vm,vm):parentVal;if(instanceData){return mergeData(instanceData,defaultData)}else{return defaultData}}}}
strats.data=function(parentVal,childVal,vm){if(!vm){if(childVal&&typeof childVal!=='function'){false&&false;return parentVal}
return mergeDataOrFn(parentVal,childVal)}
return mergeDataOrFn(parentVal,childVal,vm)};function mergeHook(parentVal,childVal){var res=childVal?parentVal?parentVal.concat(childVal):Array.isArray(childVal)?childVal:[childVal]:parentVal;return res?dedupeHooks(res):res}
function dedupeHooks(hooks){var res=[];for(var i=0;i<hooks.length;i++){if(res.indexOf(hooks[i])===-1){res.push(hooks[i]);}}
return res}
LIFECYCLE_HOOKS.forEach(function(hook){strats[hook]=mergeHook;});function mergeAssets(parentVal,childVal,vm,key){var res=Object.create(parentVal||null);if(childVal){false&&false;return extend(res,childVal)}else{return res}}
ASSET_TYPES.forEach(function(type){strats[type+'s']=mergeAssets;});strats.watch=function(parentVal,childVal,vm,key){if(parentVal===nativeWatch){parentVal=undefined;}
if(childVal===nativeWatch){childVal=undefined;}
if(!childVal){return Object.create(parentVal||null)}
if(false){}
if(!parentVal){return childVal}
var ret={};extend(ret,parentVal);for(var key$1 in childVal){var parent=ret[key$1];var child=childVal[key$1];if(parent&&!Array.isArray(parent)){parent=[parent];}
ret[key$1]=parent?parent.concat(child):Array.isArray(child)?child:[child];}
return ret};strats.props=strats.methods=strats.inject=strats.computed=function(parentVal,childVal,vm,key){if(childVal&&"production"!=='production'){assertObjectType(key,childVal,vm);}
if(!parentVal){return childVal}
var ret=Object.create(null);extend(ret,parentVal);if(childVal){extend(ret,childVal);}
return ret};strats.provide=mergeDataOrFn;var defaultStrat=function(parentVal,childVal){return childVal===undefined?parentVal:childVal};function checkComponents(options){for(var key in options.components){validateComponentName(key);}}
function validateComponentName(name){if(!new RegExp(("^[a-zA-Z][\\-\\.0-9_"+(unicodeRegExp.source)+"]*$")).test(name)){warn('Invalid component name: "'+name+'". Component names '+'should conform to valid custom element name in html5 specification.');}
if(isBuiltInTag(name)||config.isReservedTag(name)){warn('Do not use built-in or reserved HTML elements as component '+'id: '+name);}}
function normalizeProps(options,vm){var props=options.props;if(!props){return}
var res={};var i,val,name;if(Array.isArray(props)){i=props.length;while(i--){val=props[i];if(typeof val==='string'){name=camelize(val);res[name]={type:null};}else if(false){}}}else if(isPlainObject(props)){for(var key in props){val=props[key];name=camelize(key);res[name]=isPlainObject(val)?val:{type:val};}}else if(false){}
options.props=res;}
function normalizeInject(options,vm){var inject=options.inject;if(!inject){return}
var normalized=options.inject={};if(Array.isArray(inject)){for(var i=0;i<inject.length;i++){normalized[inject[i]]={from:inject[i]};}}else if(isPlainObject(inject)){for(var key in inject){var val=inject[key];normalized[key]=isPlainObject(val)?extend({from:key},val):{from:val};}}else if(false){}}
function normalizeDirectives(options){var dirs=options.directives;if(dirs){for(var key in dirs){var def$$1=dirs[key];if(typeof def$$1==='function'){dirs[key]={bind:def$$1,update:def$$1};}}}}
function assertObjectType(name,value,vm){if(!isPlainObject(value)){warn("Invalid value for option \""+name+"\": expected an Object, "+"but got "+(toRawType(value))+".",vm);}}
function mergeOptions(parent,child,vm){if(false){}
if(typeof child==='function'){child=child.options;}
normalizeProps(child,vm);normalizeInject(child,vm);normalizeDirectives(child);if(!child._base){if(child.extends){parent=mergeOptions(parent,child.extends,vm);}
if(child.mixins){for(var i=0,l=child.mixins.length;i<l;i++){parent=mergeOptions(parent,child.mixins[i],vm);}}}
var options={};var key;for(key in parent){mergeField(key);}
for(key in child){if(!hasOwn(parent,key)){mergeField(key);}}
function mergeField(key){var strat=strats[key]||defaultStrat;options[key]=strat(parent[key],child[key],vm,key);}
return options}
function resolveAsset(options,type,id,warnMissing){if(typeof id!=='string'){return}
var assets=options[type];if(hasOwn(assets,id)){return assets[id]}
var camelizedId=camelize(id);if(hasOwn(assets,camelizedId)){return assets[camelizedId]}
var PascalCaseId=capitalize(camelizedId);if(hasOwn(assets,PascalCaseId)){return assets[PascalCaseId]}
var res=assets[id]||assets[camelizedId]||assets[PascalCaseId];if(false){}
return res}
function validateProp(key,propOptions,propsData,vm){var prop=propOptions[key];var absent=!hasOwn(propsData,key);var value=propsData[key];var booleanIndex=getTypeIndex(Boolean,prop.type);if(booleanIndex>-1){if(absent&&!hasOwn(prop,'default')){value=false;}else if(value===''||value===hyphenate(key)){var stringIndex=getTypeIndex(String,prop.type);if(stringIndex<0||booleanIndex<stringIndex){value=true;}}}
if(value===undefined){value=getPropDefaultValue(vm,prop,key);var prevShouldObserve=shouldObserve;toggleObserving(true);observe(value);toggleObserving(prevShouldObserve);}
if(false){}
return value}
function getPropDefaultValue(vm,prop,key){if(!hasOwn(prop,'default')){return undefined}
var def=prop.default;if(false){}
if(vm&&vm.$options.propsData&&vm.$options.propsData[key]===undefined&&vm._props[key]!==undefined){return vm._props[key]}
return typeof def==='function'&&getType(prop.type)!=='Function'?def.call(vm):def}
function assertProp(prop,name,value,vm,absent){if(prop.required&&absent){warn('Missing required prop: "'+name+'"',vm);return}
if(value==null&&!prop.required){return}
var type=prop.type;var valid=!type||type===true;var expectedTypes=[];if(type){if(!Array.isArray(type)){type=[type];}
for(var i=0;i<type.length&&!valid;i++){var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType||'');valid=assertedType.valid;}}
if(!valid){warn(getInvalidTypeMessage(name,value,expectedTypes),vm);return}
var validator=prop.validator;if(validator){if(!validator(value)){warn('Invalid prop: custom validator check failed for prop "'+name+'".',vm);}}}
var simpleCheckRE=/^(String|Number|Boolean|Function|Symbol)$/;function assertType(value,type){var valid;var expectedType=getType(type);if(simpleCheckRE.test(expectedType)){var t=typeof value;valid=t===expectedType.toLowerCase();if(!valid&&t==='object'){valid=value instanceof type;}}else if(expectedType==='Object'){valid=isPlainObject(value);}else if(expectedType==='Array'){valid=Array.isArray(value);}else{valid=value instanceof type;}
return{valid:valid,expectedType:expectedType}}
function getType(fn){var match=fn&&fn.toString().match(/^\s*function (\w+)/);return match?match[1]:''}
function isSameType(a,b){return getType(a)===getType(b)}
function getTypeIndex(type,expectedTypes){if(!Array.isArray(expectedTypes)){return isSameType(expectedTypes,type)?0:-1}
for(var i=0,len=expectedTypes.length;i<len;i++){if(isSameType(expectedTypes[i],type)){return i}}
return-1}
function getInvalidTypeMessage(name,value,expectedTypes){var message="Invalid prop: type check failed for prop \""+name+"\"."+" Expected "+(expectedTypes.map(capitalize).join(', '));var expectedType=expectedTypes[0];var receivedType=toRawType(value);var expectedValue=styleValue(value,expectedType);var receivedValue=styleValue(value,receivedType);if(expectedTypes.length===1&&isExplicable(expectedType)&&!isBoolean(expectedType,receivedType)){message+=" with value "+expectedValue;}
message+=", got "+receivedType+" ";if(isExplicable(receivedType)){message+="with value "+receivedValue+".";}
return message}
function styleValue(value,type){if(type==='String'){return("\""+value+"\"")}else if(type==='Number'){return(""+(Number(value)))}else{return(""+value)}}
function isExplicable(value){var explicitTypes=['string','number','boolean'];return explicitTypes.some(function(elem){return value.toLowerCase()===elem;})}
function isBoolean(){var args=[],len=arguments.length;while(len--)args[len]=arguments[len];return args.some(function(elem){return elem.toLowerCase()==='boolean';})}
function handleError(err,vm,info){pushTarget();try{if(vm){var cur=vm;while((cur=cur.$parent)){var hooks=cur.$options.errorCaptured;if(hooks){for(var i=0;i<hooks.length;i++){try{var capture=hooks[i].call(cur,err,vm,info)===false;if(capture){return}}catch(e){globalHandleError(e,cur,'errorCaptured hook');}}}}}
globalHandleError(err,vm,info);}finally{popTarget();}}
function invokeWithErrorHandling(handler,context,args,vm,info){var res;try{res=args?handler.apply(context,args):handler.call(context);if(res&&!res._isVue&&isPromise(res)&&!res._handled){res.catch(function(e){return handleError(e,vm,info+" (Promise/async)");});res._handled=true;}}catch(e){handleError(e,vm,info);}
return res}
function globalHandleError(err,vm,info){if(config.errorHandler){try{return config.errorHandler.call(null,err,vm,info)}catch(e){if(e!==err){logError(e,null,'config.errorHandler');}}}
logError(err,vm,info);}
function logError(err,vm,info){if(false){}
if((inBrowser||inWeex)&&typeof console!=='undefined'){console.error(err);}else{throw err}}
var isUsingMicroTask=false;var callbacks=[];var pending=false;function flushCallbacks(){pending=false;var copies=callbacks.slice(0);callbacks.length=0;for(var i=0;i<copies.length;i++){copies[i]();}}
var timerFunc;if(typeof Promise!=='undefined'&&isNative(Promise)){var p=Promise.resolve();timerFunc=function(){p.then(flushCallbacks);if(isIOS){setTimeout(noop);}};isUsingMicroTask=true;}else if(!isIE&&typeof MutationObserver!=='undefined'&&(isNative(MutationObserver)||MutationObserver.toString()==='[object MutationObserverConstructor]')){var counter=1;var observer=new MutationObserver(flushCallbacks);var textNode=document.createTextNode(String(counter));observer.observe(textNode,{characterData:true});timerFunc=function(){counter=(counter+1)%2;textNode.data=String(counter);};isUsingMicroTask=true;}else if(typeof setImmediate!=='undefined'&&isNative(setImmediate)){timerFunc=function(){setImmediate(flushCallbacks);};}else{timerFunc=function(){setTimeout(flushCallbacks,0);};}
function nextTick(cb,ctx){var _resolve;callbacks.push(function(){if(cb){try{cb.call(ctx);}catch(e){handleError(e,ctx,'nextTick');}}else if(_resolve){_resolve(ctx);}});if(!pending){pending=true;timerFunc();}
if(!cb&&typeof Promise!=='undefined'){return new Promise(function(resolve){_resolve=resolve;})}}
var initProxy;if(false){var getHandler,hasHandler,isBuiltInModifier,hasProxy,warnReservedPrefix,warnNonPresent,allowedGlobals;}
var seenObjects=new _Set();function traverse(val){_traverse(val,seenObjects);seenObjects.clear();}
function _traverse(val,seen){var i,keys;var isA=Array.isArray(val);if((!isA&&!isObject(val))||Object.isFrozen(val)||val instanceof VNode){return}
if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId)){return}
seen.add(depId);}
if(isA){i=val.length;while(i--){_traverse(val[i],seen);}}else{keys=Object.keys(val);i=keys.length;while(i--){_traverse(val[keys[i]],seen);}}}
var mark;var measure;if(false){var perf;}
var normalizeEvent=cached(function(name){var passive=name.charAt(0)==='&';name=passive?name.slice(1):name;var once$$1=name.charAt(0)==='~';name=once$$1?name.slice(1):name;var capture=name.charAt(0)==='!';name=capture?name.slice(1):name;return{name:name,once:once$$1,capture:capture,passive:passive}});function createFnInvoker(fns,vm){function invoker(){var arguments$1=arguments;var fns=invoker.fns;if(Array.isArray(fns)){var cloned=fns.slice();for(var i=0;i<cloned.length;i++){invokeWithErrorHandling(cloned[i],null,arguments$1,vm,"v-on handler");}}else{return invokeWithErrorHandling(fns,null,arguments,vm,"v-on handler")}}
invoker.fns=fns;return invoker}
function updateListeners(on,oldOn,add,remove$$1,createOnceHandler,vm){var name,def$$1,cur,old,event;for(name in on){def$$1=cur=on[name];old=oldOn[name];event=normalizeEvent(name);if(isUndef(cur)){false&&false;}else if(isUndef(old)){if(isUndef(cur.fns)){cur=on[name]=createFnInvoker(cur,vm);}
if(isTrue(event.once)){cur=on[name]=createOnceHandler(event.name,cur,event.capture);}
add(event.name,cur,event.capture,event.passive,event.params);}else if(cur!==old){old.fns=cur;on[name]=old;}}
for(name in oldOn){if(isUndef(on[name])){event=normalizeEvent(name);remove$$1(event.name,oldOn[name],event.capture);}}}
function mergeVNodeHook(def,hookKey,hook){if(def instanceof VNode){def=def.data.hook||(def.data.hook={});}
var invoker;var oldHook=def[hookKey];function wrappedHook(){hook.apply(this,arguments);remove(invoker.fns,wrappedHook);}
if(isUndef(oldHook)){invoker=createFnInvoker([wrappedHook]);}else{if(isDef(oldHook.fns)&&isTrue(oldHook.merged)){invoker=oldHook;invoker.fns.push(wrappedHook);}else{invoker=createFnInvoker([oldHook,wrappedHook]);}}
invoker.merged=true;def[hookKey]=invoker;}
function extractPropsFromVNodeData(data,Ctor,tag){var propOptions=Ctor.options.props;if(isUndef(propOptions)){return}
var res={};var attrs=data.attrs;var props=data.props;if(isDef(attrs)||isDef(props)){for(var key in propOptions){var altKey=hyphenate(key);if(false){var keyInLowerCase;}
checkProp(res,props,key,altKey,true)||checkProp(res,attrs,key,altKey,false);}}
return res}
function checkProp(res,hash,key,altKey,preserve){if(isDef(hash)){if(hasOwn(hash,key)){res[key]=hash[key];if(!preserve){delete hash[key];}
return true}else if(hasOwn(hash,altKey)){res[key]=hash[altKey];if(!preserve){delete hash[altKey];}
return true}}
return false}
function simpleNormalizeChildren(children){for(var i=0;i<children.length;i++){if(Array.isArray(children[i])){return Array.prototype.concat.apply([],children)}}
return children}
function normalizeChildren(children){return isPrimitive(children)?[createTextVNode(children)]:Array.isArray(children)?normalizeArrayChildren(children):undefined}
function isTextNode(node){return isDef(node)&&isDef(node.text)&&isFalse(node.isComment)}
function normalizeArrayChildren(children,nestedIndex){var res=[];var i,c,lastIndex,last;for(i=0;i<children.length;i++){c=children[i];if(isUndef(c)||typeof c==='boolean'){continue}
lastIndex=res.length-1;last=res[lastIndex];if(Array.isArray(c)){if(c.length>0){c=normalizeArrayChildren(c,((nestedIndex||'')+"_"+i));if(isTextNode(c[0])&&isTextNode(last)){res[lastIndex]=createTextVNode(last.text+(c[0]).text);c.shift();}
res.push.apply(res,c);}}else if(isPrimitive(c)){if(isTextNode(last)){res[lastIndex]=createTextVNode(last.text+c);}else if(c!==''){res.push(createTextVNode(c));}}else{if(isTextNode(c)&&isTextNode(last)){res[lastIndex]=createTextVNode(last.text+c.text);}else{if(isTrue(children._isVList)&&isDef(c.tag)&&isUndef(c.key)&&isDef(nestedIndex)){c.key="__vlist"+nestedIndex+"_"+i+"__";}
res.push(c);}}}
return res}
function initProvide(vm){var provide=vm.$options.provide;if(provide){vm._provided=typeof provide==='function'?provide.call(vm):provide;}}
function initInjections(vm){var result=resolveInject(vm.$options.inject,vm);if(result){toggleObserving(false);Object.keys(result).forEach(function(key){if(false){}else{defineReactive$$1(vm,key,result[key]);}});toggleObserving(true);}}
function resolveInject(inject,vm){if(inject){var result=Object.create(null);var keys=hasSymbol?Reflect.ownKeys(inject):Object.keys(inject);for(var i=0;i<keys.length;i++){var key=keys[i];if(key==='__ob__'){continue}
var provideKey=inject[key].from;var source=vm;while(source){if(source._provided&&hasOwn(source._provided,provideKey)){result[key]=source._provided[provideKey];break}
source=source.$parent;}
if(!source){if('default'in inject[key]){var provideDefault=inject[key].default;result[key]=typeof provideDefault==='function'?provideDefault.call(vm):provideDefault;}else if(false){}}}
return result}}
function resolveSlots(children,context){if(!children||!children.length){return{}}
var slots={};for(var i=0,l=children.length;i<l;i++){var child=children[i];var data=child.data;if(data&&data.attrs&&data.attrs.slot){delete data.attrs.slot;}
if((child.context===context||child.fnContext===context)&&data&&data.slot!=null){var name=data.slot;var slot=(slots[name]||(slots[name]=[]));if(child.tag==='template'){slot.push.apply(slot,child.children||[]);}else{slot.push(child);}}else{(slots.default||(slots.default=[])).push(child);}}
for(var name$1 in slots){if(slots[name$1].every(isWhitespace)){delete slots[name$1];}}
return slots}
function isWhitespace(node){return(node.isComment&&!node.asyncFactory)||node.text===' '}
function normalizeScopedSlots(slots,normalSlots,prevSlots){var res;var hasNormalSlots=Object.keys(normalSlots).length>0;var isStable=slots?!!slots.$stable:!hasNormalSlots;var key=slots&&slots.$key;if(!slots){res={};}else if(slots._normalized){return slots._normalized}else if(isStable&&prevSlots&&prevSlots!==emptyObject&&key===prevSlots.$key&&!hasNormalSlots&&!prevSlots.$hasNormal){return prevSlots}else{res={};for(var key$1 in slots){if(slots[key$1]&&key$1[0]!=='$'){res[key$1]=normalizeScopedSlot(normalSlots,key$1,slots[key$1]);}}}
for(var key$2 in normalSlots){if(!(key$2 in res)){res[key$2]=proxyNormalSlot(normalSlots,key$2);}}
if(slots&&Object.isExtensible(slots)){(slots)._normalized=res;}
def(res,'$stable',isStable);def(res,'$key',key);def(res,'$hasNormal',hasNormalSlots);return res}
function normalizeScopedSlot(normalSlots,key,fn){var normalized=function(){var res=arguments.length?fn.apply(null,arguments):fn({});res=res&&typeof res==='object'&&!Array.isArray(res)?[res]:normalizeChildren(res);return res&&(res.length===0||(res.length===1&&res[0].isComment))?undefined:res};if(fn.proxy){Object.defineProperty(normalSlots,key,{get:normalized,enumerable:true,configurable:true});}
return normalized}
function proxyNormalSlot(slots,key){return function(){return slots[key];}}
function renderList(val,render){var ret,i,l,keys,key;if(Array.isArray(val)||typeof val==='string'){ret=new Array(val.length);for(i=0,l=val.length;i<l;i++){ret[i]=render(val[i],i);}}else if(typeof val==='number'){ret=new Array(val);for(i=0;i<val;i++){ret[i]=render(i+1,i);}}else if(isObject(val)){if(hasSymbol&&val[Symbol.iterator]){ret=[];var iterator=val[Symbol.iterator]();var result=iterator.next();while(!result.done){ret.push(render(result.value,ret.length));result=iterator.next();}}else{keys=Object.keys(val);ret=new Array(keys.length);for(i=0,l=keys.length;i<l;i++){key=keys[i];ret[i]=render(val[key],key,i);}}}
if(!isDef(ret)){ret=[];}
(ret)._isVList=true;return ret}
function renderSlot(name,fallback,props,bindObject){var scopedSlotFn=this.$scopedSlots[name];var nodes;if(scopedSlotFn){props=props||{};if(bindObject){if(false){}
props=extend(extend({},bindObject),props);}
nodes=scopedSlotFn(props)||fallback;}else{nodes=this.$slots[name]||fallback;}
var target=props&&props.slot;if(target){return this.$createElement('template',{slot:target},nodes)}else{return nodes}}
function resolveFilter(id){return resolveAsset(this.$options,'filters',id,true)||identity}
function isKeyNotMatch(expect,actual){if(Array.isArray(expect)){return expect.indexOf(actual)===-1}else{return expect!==actual}}
function checkKeyCodes(eventKeyCode,key,builtInKeyCode,eventKeyName,builtInKeyName){var mappedKeyCode=config.keyCodes[key]||builtInKeyCode;if(builtInKeyName&&eventKeyName&&!config.keyCodes[key]){return isKeyNotMatch(builtInKeyName,eventKeyName)}else if(mappedKeyCode){return isKeyNotMatch(mappedKeyCode,eventKeyCode)}else if(eventKeyName){return hyphenate(eventKeyName)!==key}}
function bindObjectProps(data,tag,value,asProp,isSync){if(value){if(!isObject(value)){false&&false;}else{if(Array.isArray(value)){value=toObject(value);}
var hash;var loop=function(key){if(key==='class'||key==='style'||isReservedAttribute(key)){hash=data;}else{var type=data.attrs&&data.attrs.type;hash=asProp||config.mustUseProp(tag,type,key)?data.domProps||(data.domProps={}):data.attrs||(data.attrs={});}
var camelizedKey=camelize(key);var hyphenatedKey=hyphenate(key);if(!(camelizedKey in hash)&&!(hyphenatedKey in hash)){hash[key]=value[key];if(isSync){var on=data.on||(data.on={});on[("update:"+key)]=function($event){value[key]=$event;};}}};for(var key in value)loop(key);}}
return data}
function renderStatic(index,isInFor){var cached=this._staticTrees||(this._staticTrees=[]);var tree=cached[index];if(tree&&!isInFor){return tree}
tree=cached[index]=this.$options.staticRenderFns[index].call(this._renderProxy,null,this);markStatic(tree,("__static__"+index),false);return tree}
function markOnce(tree,index,key){markStatic(tree,("__once__"+index+(key?("_"+key):"")),true);return tree}
function markStatic(tree,key,isOnce){if(Array.isArray(tree)){for(var i=0;i<tree.length;i++){if(tree[i]&&typeof tree[i]!=='string'){markStaticNode(tree[i],(key+"_"+i),isOnce);}}}else{markStaticNode(tree,key,isOnce);}}
function markStaticNode(node,key,isOnce){node.isStatic=true;node.key=key;node.isOnce=isOnce;}
function bindObjectListeners(data,value){if(value){if(!isPlainObject(value)){false&&false;}else{var on=data.on=data.on?extend({},data.on):{};for(var key in value){var existing=on[key];var ours=value[key];on[key]=existing?[].concat(existing,ours):ours;}}}
return data}
function resolveScopedSlots(fns,res,hasDynamicKeys,contentHashKey){res=res||{$stable:!hasDynamicKeys};for(var i=0;i<fns.length;i++){var slot=fns[i];if(Array.isArray(slot)){resolveScopedSlots(slot,res,hasDynamicKeys);}else if(slot){if(slot.proxy){slot.fn.proxy=true;}
res[slot.key]=slot.fn;}}
if(contentHashKey){(res).$key=contentHashKey;}
return res}
function bindDynamicKeys(baseObj,values){for(var i=0;i<values.length;i+=2){var key=values[i];if(typeof key==='string'&&key){baseObj[values[i]]=values[i+1];}else if(false){}}
return baseObj}
function prependModifier(value,symbol){return typeof value==='string'?symbol+value:value}
function installRenderHelpers(target){target._o=markOnce;target._n=toNumber;target._s=toString;target._l=renderList;target._t=renderSlot;target._q=looseEqual;target._i=looseIndexOf;target._m=renderStatic;target._f=resolveFilter;target._k=checkKeyCodes;target._b=bindObjectProps;target._v=createTextVNode;target._e=createEmptyVNode;target._u=resolveScopedSlots;target._g=bindObjectListeners;target._d=bindDynamicKeys;target._p=prependModifier;}
function FunctionalRenderContext(data,props,children,parent,Ctor){var this$1=this;var options=Ctor.options;var contextVm;if(hasOwn(parent,'_uid')){contextVm=Object.create(parent);contextVm._original=parent;}else{contextVm=parent;parent=parent._original;}
var isCompiled=isTrue(options._compiled);var needNormalization=!isCompiled;this.data=data;this.props=props;this.children=children;this.parent=parent;this.listeners=data.on||emptyObject;this.injections=resolveInject(options.inject,parent);this.slots=function(){if(!this$1.$slots){normalizeScopedSlots(data.scopedSlots,this$1.$slots=resolveSlots(children,parent));}
return this$1.$slots};Object.defineProperty(this,'scopedSlots',({enumerable:true,get:function get(){return normalizeScopedSlots(data.scopedSlots,this.slots())}}));if(isCompiled){this.$options=options;this.$slots=this.slots();this.$scopedSlots=normalizeScopedSlots(data.scopedSlots,this.$slots);}
if(options._scopeId){this._c=function(a,b,c,d){var vnode=createElement(contextVm,a,b,c,d,needNormalization);if(vnode&&!Array.isArray(vnode)){vnode.fnScopeId=options._scopeId;vnode.fnContext=parent;}
return vnode};}else{this._c=function(a,b,c,d){return createElement(contextVm,a,b,c,d,needNormalization);};}}
installRenderHelpers(FunctionalRenderContext.prototype);function createFunctionalComponent(Ctor,propsData,data,contextVm,children){var options=Ctor.options;var props={};var propOptions=options.props;if(isDef(propOptions)){for(var key in propOptions){props[key]=validateProp(key,propOptions,propsData||emptyObject);}}else{if(isDef(data.attrs)){mergeProps(props,data.attrs);}
if(isDef(data.props)){mergeProps(props,data.props);}}
var renderContext=new FunctionalRenderContext(data,props,children,contextVm,Ctor);var vnode=options.render.call(null,renderContext._c,renderContext);if(vnode instanceof VNode){return cloneAndMarkFunctionalResult(vnode,data,renderContext.parent,options,renderContext)}else if(Array.isArray(vnode)){var vnodes=normalizeChildren(vnode)||[];var res=new Array(vnodes.length);for(var i=0;i<vnodes.length;i++){res[i]=cloneAndMarkFunctionalResult(vnodes[i],data,renderContext.parent,options,renderContext);}
return res}}
function cloneAndMarkFunctionalResult(vnode,data,contextVm,options,renderContext){var clone=cloneVNode(vnode);clone.fnContext=contextVm;clone.fnOptions=options;if(false){}
if(data.slot){(clone.data||(clone.data={})).slot=data.slot;}
return clone}
function mergeProps(to,from){for(var key in from){to[camelize(key)]=from[key];}}
var componentVNodeHooks={init:function init(vnode,hydrating){if(vnode.componentInstance&&!vnode.componentInstance._isDestroyed&&vnode.data.keepAlive){var mountedNode=vnode;componentVNodeHooks.prepatch(mountedNode,mountedNode);}else{var child=vnode.componentInstance=createComponentInstanceForVnode(vnode,activeInstance);child.$mount(hydrating?vnode.elm:undefined,hydrating);}},prepatch:function prepatch(oldVnode,vnode){var options=vnode.componentOptions;var child=vnode.componentInstance=oldVnode.componentInstance;updateChildComponent(child,options.propsData,options.listeners,vnode,options.children);},insert:function insert(vnode){var context=vnode.context;var componentInstance=vnode.componentInstance;if(!componentInstance._isMounted){componentInstance._isMounted=true;callHook(componentInstance,'mounted');}
if(vnode.data.keepAlive){if(context._isMounted){queueActivatedComponent(componentInstance);}else{activateChildComponent(componentInstance,true);}}},destroy:function destroy(vnode){var componentInstance=vnode.componentInstance;if(!componentInstance._isDestroyed){if(!vnode.data.keepAlive){componentInstance.$destroy();}else{deactivateChildComponent(componentInstance,true);}}}};var hooksToMerge=Object.keys(componentVNodeHooks);function createComponent(Ctor,data,context,children,tag){if(isUndef(Ctor)){return}
var baseCtor=context.$options._base;if(isObject(Ctor)){Ctor=baseCtor.extend(Ctor);}
if(typeof Ctor!=='function'){if(false){}
return}
var asyncFactory;if(isUndef(Ctor.cid)){asyncFactory=Ctor;Ctor=resolveAsyncComponent(asyncFactory,baseCtor);if(Ctor===undefined){return createAsyncPlaceholder(asyncFactory,data,context,children,tag)}}
data=data||{};resolveConstructorOptions(Ctor);if(isDef(data.model)){transformModel(Ctor.options,data);}
var propsData=extractPropsFromVNodeData(data,Ctor,tag);if(isTrue(Ctor.options.functional)){return createFunctionalComponent(Ctor,propsData,data,context,children)}
var listeners=data.on;data.on=data.nativeOn;if(isTrue(Ctor.options.abstract)){var slot=data.slot;data={};if(slot){data.slot=slot;}}
installComponentHooks(data);var name=Ctor.options.name||tag;var vnode=new VNode(("vue-component-"+(Ctor.cid)+(name?("-"+name):'')),data,undefined,undefined,undefined,context,{Ctor:Ctor,propsData:propsData,listeners:listeners,tag:tag,children:children},asyncFactory);return vnode}
function createComponentInstanceForVnode(vnode,parent){var options={_isComponent:true,_parentVnode:vnode,parent:parent};var inlineTemplate=vnode.data.inlineTemplate;if(isDef(inlineTemplate)){options.render=inlineTemplate.render;options.staticRenderFns=inlineTemplate.staticRenderFns;}
return new vnode.componentOptions.Ctor(options)}
function installComponentHooks(data){var hooks=data.hook||(data.hook={});for(var i=0;i<hooksToMerge.length;i++){var key=hooksToMerge[i];var existing=hooks[key];var toMerge=componentVNodeHooks[key];if(existing!==toMerge&&!(existing&&existing._merged)){hooks[key]=existing?mergeHook$1(toMerge,existing):toMerge;}}}
function mergeHook$1(f1,f2){var merged=function(a,b){f1(a,b);f2(a,b);};merged._merged=true;return merged}
function transformModel(options,data){var prop=(options.model&&options.model.prop)||'value';var event=(options.model&&options.model.event)||'input';(data.attrs||(data.attrs={}))[prop]=data.model.value;var on=data.on||(data.on={});var existing=on[event];var callback=data.model.callback;if(isDef(existing)){if(Array.isArray(existing)?existing.indexOf(callback)===-1:existing!==callback){on[event]=[callback].concat(existing);}}else{on[event]=callback;}}
var SIMPLE_NORMALIZE=1;var ALWAYS_NORMALIZE=2;function createElement(context,tag,data,children,normalizationType,alwaysNormalize){if(Array.isArray(data)||isPrimitive(data)){normalizationType=children;children=data;data=undefined;}
if(isTrue(alwaysNormalize)){normalizationType=ALWAYS_NORMALIZE;}
return _createElement(context,tag,data,children,normalizationType)}
function _createElement(context,tag,data,children,normalizationType){if(isDef(data)&&isDef((data).__ob__)){false&&false;return createEmptyVNode()}
if(isDef(data)&&isDef(data.is)){tag=data.is;}
if(!tag){return createEmptyVNode()}
if(false){}
if(Array.isArray(children)&&typeof children[0]==='function'){data=data||{};data.scopedSlots={default:children[0]};children.length=0;}
if(normalizationType===ALWAYS_NORMALIZE){children=normalizeChildren(children);}else if(normalizationType===SIMPLE_NORMALIZE){children=simpleNormalizeChildren(children);}
var vnode,ns;if(typeof tag==='string'){var Ctor;ns=(context.$vnode&&context.$vnode.ns)||config.getTagNamespace(tag);if(config.isReservedTag(tag)){if(false){}
vnode=new VNode(config.parsePlatformTagName(tag),data,children,undefined,undefined,context);}else if((!data||!data.pre)&&isDef(Ctor=resolveAsset(context.$options,'components',tag))){vnode=createComponent(Ctor,data,context,children,tag);}else{vnode=new VNode(tag,data,children,undefined,undefined,context);}}else{vnode=createComponent(tag,data,context,children);}
if(Array.isArray(vnode)){return vnode}else if(isDef(vnode)){if(isDef(ns)){applyNS(vnode,ns);}
if(isDef(data)){registerDeepBindings(data);}
return vnode}else{return createEmptyVNode()}}
function applyNS(vnode,ns,force){vnode.ns=ns;if(vnode.tag==='foreignObject'){ns=undefined;force=true;}
if(isDef(vnode.children)){for(var i=0,l=vnode.children.length;i<l;i++){var child=vnode.children[i];if(isDef(child.tag)&&(isUndef(child.ns)||(isTrue(force)&&child.tag!=='svg'))){applyNS(child,ns,force);}}}}
function registerDeepBindings(data){if(isObject(data.style)){traverse(data.style);}
if(isObject(data.class)){traverse(data.class);}}
function initRender(vm){vm._vnode=null;vm._staticTrees=null;var options=vm.$options;var parentVnode=vm.$vnode=options._parentVnode;var renderContext=parentVnode&&parentVnode.context;vm.$slots=resolveSlots(options._renderChildren,renderContext);vm.$scopedSlots=emptyObject;vm._c=function(a,b,c,d){return createElement(vm,a,b,c,d,false);};vm.$createElement=function(a,b,c,d){return createElement(vm,a,b,c,d,true);};var parentData=parentVnode&&parentVnode.data;if(false){}else{defineReactive$$1(vm,'$attrs',parentData&&parentData.attrs||emptyObject,null,true);defineReactive$$1(vm,'$listeners',options._parentListeners||emptyObject,null,true);}}
var currentRenderingInstance=null;function renderMixin(Vue){installRenderHelpers(Vue.prototype);Vue.prototype.$nextTick=function(fn){return nextTick(fn,this)};Vue.prototype._render=function(){var vm=this;var ref=vm.$options;var render=ref.render;var _parentVnode=ref._parentVnode;if(_parentVnode){vm.$scopedSlots=normalizeScopedSlots(_parentVnode.data.scopedSlots,vm.$slots,vm.$scopedSlots);}
vm.$vnode=_parentVnode;var vnode;try{currentRenderingInstance=vm;vnode=render.call(vm._renderProxy,vm.$createElement);}catch(e){handleError(e,vm,"render");if(false){}else{vnode=vm._vnode;}}finally{currentRenderingInstance=null;}
if(Array.isArray(vnode)&&vnode.length===1){vnode=vnode[0];}
if(!(vnode instanceof VNode)){if(false){}
vnode=createEmptyVNode();}
vnode.parent=_parentVnode;return vnode};}
function ensureCtor(comp,base){if(comp.__esModule||(hasSymbol&&comp[Symbol.toStringTag]==='Module')){comp=comp.default;}
return isObject(comp)?base.extend(comp):comp}
function createAsyncPlaceholder(factory,data,context,children,tag){var node=createEmptyVNode();node.asyncFactory=factory;node.asyncMeta={data:data,context:context,children:children,tag:tag};return node}
function resolveAsyncComponent(factory,baseCtor){if(isTrue(factory.error)&&isDef(factory.errorComp)){return factory.errorComp}
if(isDef(factory.resolved)){return factory.resolved}
var owner=currentRenderingInstance;if(owner&&isDef(factory.owners)&&factory.owners.indexOf(owner)===-1){factory.owners.push(owner);}
if(isTrue(factory.loading)&&isDef(factory.loadingComp)){return factory.loadingComp}
if(owner&&!isDef(factory.owners)){var owners=factory.owners=[owner];var sync=true;var timerLoading=null;var timerTimeout=null;(owner).$on('hook:destroyed',function(){return remove(owners,owner);});var forceRender=function(renderCompleted){for(var i=0,l=owners.length;i<l;i++){(owners[i]).$forceUpdate();}
if(renderCompleted){owners.length=0;if(timerLoading!==null){clearTimeout(timerLoading);timerLoading=null;}
if(timerTimeout!==null){clearTimeout(timerTimeout);timerTimeout=null;}}};var resolve=once(function(res){factory.resolved=ensureCtor(res,baseCtor);if(!sync){forceRender(true);}else{owners.length=0;}});var reject=once(function(reason){false&&false;if(isDef(factory.errorComp)){factory.error=true;forceRender(true);}});var res=factory(resolve,reject);if(isObject(res)){if(isPromise(res)){if(isUndef(factory.resolved)){res.then(resolve,reject);}}else if(isPromise(res.component)){res.component.then(resolve,reject);if(isDef(res.error)){factory.errorComp=ensureCtor(res.error,baseCtor);}
if(isDef(res.loading)){factory.loadingComp=ensureCtor(res.loading,baseCtor);if(res.delay===0){factory.loading=true;}else{timerLoading=setTimeout(function(){timerLoading=null;if(isUndef(factory.resolved)&&isUndef(factory.error)){factory.loading=true;forceRender(false);}},res.delay||200);}}
if(isDef(res.timeout)){timerTimeout=setTimeout(function(){timerTimeout=null;if(isUndef(factory.resolved)){reject(false?(undefined):null);}},res.timeout);}}}
sync=false;return factory.loading?factory.loadingComp:factory.resolved}}
function isAsyncPlaceholder(node){return node.isComment&&node.asyncFactory}
function getFirstComponentChild(children){if(Array.isArray(children)){for(var i=0;i<children.length;i++){var c=children[i];if(isDef(c)&&(isDef(c.componentOptions)||isAsyncPlaceholder(c))){return c}}}}
function initEvents(vm){vm._events=Object.create(null);vm._hasHookEvent=false;var listeners=vm.$options._parentListeners;if(listeners){updateComponentListeners(vm,listeners);}}
var target;function add(event,fn){target.$on(event,fn);}
function remove$1(event,fn){target.$off(event,fn);}
function createOnceHandler(event,fn){var _target=target;return function onceHandler(){var res=fn.apply(null,arguments);if(res!==null){_target.$off(event,onceHandler);}}}
function updateComponentListeners(vm,listeners,oldListeners){target=vm;updateListeners(listeners,oldListeners||{},add,remove$1,createOnceHandler,vm);target=undefined;}
function eventsMixin(Vue){var hookRE=/^hook:/;Vue.prototype.$on=function(event,fn){var vm=this;if(Array.isArray(event)){for(var i=0,l=event.length;i<l;i++){vm.$on(event[i],fn);}}else{(vm._events[event]||(vm._events[event]=[])).push(fn);if(hookRE.test(event)){vm._hasHookEvent=true;}}
return vm};Vue.prototype.$once=function(event,fn){var vm=this;function on(){vm.$off(event,on);fn.apply(vm,arguments);}
on.fn=fn;vm.$on(event,on);return vm};Vue.prototype.$off=function(event,fn){var vm=this;if(!arguments.length){vm._events=Object.create(null);return vm}
if(Array.isArray(event)){for(var i$1=0,l=event.length;i$1<l;i$1++){vm.$off(event[i$1],fn);}
return vm}
var cbs=vm._events[event];if(!cbs){return vm}
if(!fn){vm._events[event]=null;return vm}
var cb;var i=cbs.length;while(i--){cb=cbs[i];if(cb===fn||cb.fn===fn){cbs.splice(i,1);break}}
return vm};Vue.prototype.$emit=function(event){var vm=this;if(false){var lowerCaseEvent;}
var cbs=vm._events[event];if(cbs){cbs=cbs.length>1?toArray(cbs):cbs;var args=toArray(arguments,1);var info="event handler for \""+event+"\"";for(var i=0,l=cbs.length;i<l;i++){invokeWithErrorHandling(cbs[i],vm,args,vm,info);}}
return vm};}
var activeInstance=null;var isUpdatingChildComponent=false;function setActiveInstance(vm){var prevActiveInstance=activeInstance;activeInstance=vm;return function(){activeInstance=prevActiveInstance;}}
function initLifecycle(vm){var options=vm.$options;var parent=options.parent;if(parent&&!options.abstract){while(parent.$options.abstract&&parent.$parent){parent=parent.$parent;}
parent.$children.push(vm);}
vm.$parent=parent;vm.$root=parent?parent.$root:vm;vm.$children=[];vm.$refs={};vm._watcher=null;vm._inactive=null;vm._directInactive=false;vm._isMounted=false;vm._isDestroyed=false;vm._isBeingDestroyed=false;}
function lifecycleMixin(Vue){Vue.prototype._update=function(vnode,hydrating){var vm=this;var prevEl=vm.$el;var prevVnode=vm._vnode;var restoreActiveInstance=setActiveInstance(vm);vm._vnode=vnode;if(!prevVnode){vm.$el=vm.__patch__(vm.$el,vnode,hydrating,false);}else{vm.$el=vm.__patch__(prevVnode,vnode);}
restoreActiveInstance();if(prevEl){prevEl.__vue__=null;}
if(vm.$el){vm.$el.__vue__=vm;}
if(vm.$vnode&&vm.$parent&&vm.$vnode===vm.$parent._vnode){vm.$parent.$el=vm.$el;}};Vue.prototype.$forceUpdate=function(){var vm=this;if(vm._watcher){vm._watcher.update();}};Vue.prototype.$destroy=function(){var vm=this;if(vm._isBeingDestroyed){return}
callHook(vm,'beforeDestroy');vm._isBeingDestroyed=true;var parent=vm.$parent;if(parent&&!parent._isBeingDestroyed&&!vm.$options.abstract){remove(parent.$children,vm);}
if(vm._watcher){vm._watcher.teardown();}
var i=vm._watchers.length;while(i--){vm._watchers[i].teardown();}
if(vm._data.__ob__){vm._data.__ob__.vmCount--;}
vm._isDestroyed=true;vm.__patch__(vm._vnode,null);callHook(vm,'destroyed');vm.$off();if(vm.$el){vm.$el.__vue__=null;}
if(vm.$vnode){vm.$vnode.parent=null;}};}
function mountComponent(vm,el,hydrating){vm.$el=el;if(!vm.$options.render){vm.$options.render=createEmptyVNode;if(false){}}
callHook(vm,'beforeMount');var updateComponent;if(false){}else{updateComponent=function(){vm._update(vm._render(),hydrating);};}
new Watcher(vm,updateComponent,noop,{before:function before(){if(vm._isMounted&&!vm._isDestroyed){callHook(vm,'beforeUpdate');}}},true);hydrating=false;if(vm.$vnode==null){vm._isMounted=true;callHook(vm,'mounted');}
return vm}
function updateChildComponent(vm,propsData,listeners,parentVnode,renderChildren){if(false){}
var newScopedSlots=parentVnode.data.scopedSlots;var oldScopedSlots=vm.$scopedSlots;var hasDynamicScopedSlot=!!((newScopedSlots&&!newScopedSlots.$stable)||(oldScopedSlots!==emptyObject&&!oldScopedSlots.$stable)||(newScopedSlots&&vm.$scopedSlots.$key!==newScopedSlots.$key));var needsForceUpdate=!!(renderChildren||vm.$options._renderChildren||hasDynamicScopedSlot);vm.$options._parentVnode=parentVnode;vm.$vnode=parentVnode;if(vm._vnode){vm._vnode.parent=parentVnode;}
vm.$options._renderChildren=renderChildren;vm.$attrs=parentVnode.data.attrs||emptyObject;vm.$listeners=listeners||emptyObject;if(propsData&&vm.$options.props){toggleObserving(false);var props=vm._props;var propKeys=vm.$options._propKeys||[];for(var i=0;i<propKeys.length;i++){var key=propKeys[i];var propOptions=vm.$options.props;props[key]=validateProp(key,propOptions,propsData,vm);}
toggleObserving(true);vm.$options.propsData=propsData;}
listeners=listeners||emptyObject;var oldListeners=vm.$options._parentListeners;vm.$options._parentListeners=listeners;updateComponentListeners(vm,listeners,oldListeners);if(needsForceUpdate){vm.$slots=resolveSlots(renderChildren,parentVnode.context);vm.$forceUpdate();}
if(false){}}
function isInInactiveTree(vm){while(vm&&(vm=vm.$parent)){if(vm._inactive){return true}}
return false}
function activateChildComponent(vm,direct){if(direct){vm._directInactive=false;if(isInInactiveTree(vm)){return}}else if(vm._directInactive){return}
if(vm._inactive||vm._inactive===null){vm._inactive=false;for(var i=0;i<vm.$children.length;i++){activateChildComponent(vm.$children[i]);}
callHook(vm,'activated');}}
function deactivateChildComponent(vm,direct){if(direct){vm._directInactive=true;if(isInInactiveTree(vm)){return}}
if(!vm._inactive){vm._inactive=true;for(var i=0;i<vm.$children.length;i++){deactivateChildComponent(vm.$children[i]);}
callHook(vm,'deactivated');}}
function callHook(vm,hook){pushTarget();var handlers=vm.$options[hook];var info=hook+" hook";if(handlers){for(var i=0,j=handlers.length;i<j;i++){invokeWithErrorHandling(handlers[i],vm,null,vm,info);}}
if(vm._hasHookEvent){vm.$emit('hook:'+hook);}
popTarget();}
var MAX_UPDATE_COUNT=100;var queue=[];var activatedChildren=[];var has={};var circular={};var waiting=false;var flushing=false;var index=0;function resetSchedulerState(){index=queue.length=activatedChildren.length=0;has={};if(false){}
waiting=flushing=false;}
var currentFlushTimestamp=0;var getNow=Date.now;if(inBrowser&&!isIE){var performance=window.performance;if(performance&&typeof performance.now==='function'&&getNow()>document.createEvent('Event').timeStamp){getNow=function(){return performance.now();};}}
function flushSchedulerQueue(){currentFlushTimestamp=getNow();flushing=true;var watcher,id;queue.sort(function(a,b){return a.id-b.id;});for(index=0;index<queue.length;index++){watcher=queue[index];if(watcher.before){watcher.before();}
id=watcher.id;has[id]=null;watcher.run();if(false){}}
var activatedQueue=activatedChildren.slice();var updatedQueue=queue.slice();resetSchedulerState();callActivatedHooks(activatedQueue);callUpdatedHooks(updatedQueue);if(devtools&&config.devtools){devtools.emit('flush');}}
function callUpdatedHooks(queue){var i=queue.length;while(i--){var watcher=queue[i];var vm=watcher.vm;if(vm._watcher===watcher&&vm._isMounted&&!vm._isDestroyed){callHook(vm,'updated');}}}
function queueActivatedComponent(vm){vm._inactive=false;activatedChildren.push(vm);}
function callActivatedHooks(queue){for(var i=0;i<queue.length;i++){queue[i]._inactive=true;activateChildComponent(queue[i],true);}}
function queueWatcher(watcher){var id=watcher.id;if(has[id]==null){has[id]=true;if(!flushing){queue.push(watcher);}else{var i=queue.length-1;while(i>index&&queue[i].id>watcher.id){i--;}
queue.splice(i+1,0,watcher);}
if(!waiting){waiting=true;if(false){}
nextTick(flushSchedulerQueue);}}}
var uid$2=0;var Watcher=function Watcher(vm,expOrFn,cb,options,isRenderWatcher){this.vm=vm;if(isRenderWatcher){vm._watcher=this;}
vm._watchers.push(this);if(options){this.deep=!!options.deep;this.user=!!options.user;this.lazy=!!options.lazy;this.sync=!!options.sync;this.before=options.before;}else{this.deep=this.user=this.lazy=this.sync=false;}
this.cb=cb;this.id=++uid$2;this.active=true;this.dirty=this.lazy;this.deps=[];this.newDeps=[];this.depIds=new _Set();this.newDepIds=new _Set();this.expression=false?undefined:'';if(typeof expOrFn==='function'){this.getter=expOrFn;}else{this.getter=parsePath(expOrFn);if(!this.getter){this.getter=noop;false&&false;}}
this.value=this.lazy?undefined:this.get();};Watcher.prototype.get=function get(){pushTarget(this);var value;var vm=this.vm;try{value=this.getter.call(vm,vm);}catch(e){if(this.user){handleError(e,vm,("getter for watcher \""+(this.expression)+"\""));}else{throw e}}finally{if(this.deep){traverse(value);}
popTarget();this.cleanupDeps();}
return value};Watcher.prototype.addDep=function addDep(dep){var id=dep.id;if(!this.newDepIds.has(id)){this.newDepIds.add(id);this.newDeps.push(dep);if(!this.depIds.has(id)){dep.addSub(this);}}};Watcher.prototype.cleanupDeps=function cleanupDeps(){var i=this.deps.length;while(i--){var dep=this.deps[i];if(!this.newDepIds.has(dep.id)){dep.removeSub(this);}}
var tmp=this.depIds;this.depIds=this.newDepIds;this.newDepIds=tmp;this.newDepIds.clear();tmp=this.deps;this.deps=this.newDeps;this.newDeps=tmp;this.newDeps.length=0;};Watcher.prototype.update=function update(){if(this.lazy){this.dirty=true;}else if(this.sync){this.run();}else{queueWatcher(this);}};Watcher.prototype.run=function run(){if(this.active){var value=this.get();if(value!==this.value||isObject(value)||this.deep){var oldValue=this.value;this.value=value;if(this.user){try{this.cb.call(this.vm,value,oldValue);}catch(e){handleError(e,this.vm,("callback for watcher \""+(this.expression)+"\""));}}else{this.cb.call(this.vm,value,oldValue);}}}};Watcher.prototype.evaluate=function evaluate(){this.value=this.get();this.dirty=false;};Watcher.prototype.depend=function depend(){var i=this.deps.length;while(i--){this.deps[i].depend();}};Watcher.prototype.teardown=function teardown(){if(this.active){if(!this.vm._isBeingDestroyed){remove(this.vm._watchers,this);}
var i=this.deps.length;while(i--){this.deps[i].removeSub(this);}
this.active=false;}};var sharedPropertyDefinition={enumerable:true,configurable:true,get:noop,set:noop};function proxy(target,sourceKey,key){sharedPropertyDefinition.get=function proxyGetter(){return this[sourceKey][key]};sharedPropertyDefinition.set=function proxySetter(val){this[sourceKey][key]=val;};Object.defineProperty(target,key,sharedPropertyDefinition);}
function initState(vm){vm._watchers=[];var opts=vm.$options;if(opts.props){initProps(vm,opts.props);}
if(opts.methods){initMethods(vm,opts.methods);}
if(opts.data){initData(vm);}else{observe(vm._data={},true);}
if(opts.computed){initComputed(vm,opts.computed);}
if(opts.watch&&opts.watch!==nativeWatch){initWatch(vm,opts.watch);}}
function initProps(vm,propsOptions){var propsData=vm.$options.propsData||{};var props=vm._props={};var keys=vm.$options._propKeys=[];var isRoot=!vm.$parent;if(!isRoot){toggleObserving(false);}
var loop=function(key){keys.push(key);var value=validateProp(key,propsOptions,propsData,vm);if(false){var hyphenatedKey;}else{defineReactive$$1(props,key,value);}
if(!(key in vm)){proxy(vm,"_props",key);}};for(var key in propsOptions)loop(key);toggleObserving(true);}
function initData(vm){var data=vm.$options.data;data=vm._data=typeof data==='function'?getData(data,vm):data||{};if(!isPlainObject(data)){data={};false&&false;}
var keys=Object.keys(data);var props=vm.$options.props;var methods=vm.$options.methods;var i=keys.length;while(i--){var key=keys[i];if(false){}
if(props&&hasOwn(props,key)){false&&false;}else if(!isReserved(key)){proxy(vm,"_data",key);}}
observe(data,true);}
function getData(data,vm){pushTarget();try{return data.call(vm,vm)}catch(e){handleError(e,vm,"data()");return{}}finally{popTarget();}}
var computedWatcherOptions={lazy:true};function initComputed(vm,computed){var watchers=vm._computedWatchers=Object.create(null);var isSSR=isServerRendering();for(var key in computed){var userDef=computed[key];var getter=typeof userDef==='function'?userDef:userDef.get;if(false){}
if(!isSSR){watchers[key]=new Watcher(vm,getter||noop,noop,computedWatcherOptions);}
if(!(key in vm)){defineComputed(vm,key,userDef);}else if(false){}}}
function defineComputed(target,key,userDef){var shouldCache=!isServerRendering();if(typeof userDef==='function'){sharedPropertyDefinition.get=shouldCache?createComputedGetter(key):createGetterInvoker(userDef);sharedPropertyDefinition.set=noop;}else{sharedPropertyDefinition.get=userDef.get?shouldCache&&userDef.cache!==false?createComputedGetter(key):createGetterInvoker(userDef.get):noop;sharedPropertyDefinition.set=userDef.set||noop;}
if(false){}
Object.defineProperty(target,key,sharedPropertyDefinition);}
function createComputedGetter(key){return function computedGetter(){var watcher=this._computedWatchers&&this._computedWatchers[key];if(watcher){if(watcher.dirty){watcher.evaluate();}
if(Dep.target){watcher.depend();}
return watcher.value}}}
function createGetterInvoker(fn){return function computedGetter(){return fn.call(this,this)}}
function initMethods(vm,methods){var props=vm.$options.props;for(var key in methods){if(false){}
vm[key]=typeof methods[key]!=='function'?noop:bind(methods[key],vm);}}
function initWatch(vm,watch){for(var key in watch){var handler=watch[key];if(Array.isArray(handler)){for(var i=0;i<handler.length;i++){createWatcher(vm,key,handler[i]);}}else{createWatcher(vm,key,handler);}}}
function createWatcher(vm,expOrFn,handler,options){if(isPlainObject(handler)){options=handler;handler=handler.handler;}
if(typeof handler==='string'){handler=vm[handler];}
return vm.$watch(expOrFn,handler,options)}
function stateMixin(Vue){var dataDef={};dataDef.get=function(){return this._data};var propsDef={};propsDef.get=function(){return this._props};if(false){}
Object.defineProperty(Vue.prototype,'$data',dataDef);Object.defineProperty(Vue.prototype,'$props',propsDef);Vue.prototype.$set=set;Vue.prototype.$delete=del;Vue.prototype.$watch=function(expOrFn,cb,options){var vm=this;if(isPlainObject(cb)){return createWatcher(vm,expOrFn,cb,options)}
options=options||{};options.user=true;var watcher=new Watcher(vm,expOrFn,cb,options);if(options.immediate){try{cb.call(vm,watcher.value);}catch(error){handleError(error,vm,("callback for immediate watcher \""+(watcher.expression)+"\""));}}
return function unwatchFn(){watcher.teardown();}};}
var uid$3=0;function initMixin(Vue){Vue.prototype._init=function(options){var vm=this;vm._uid=uid$3++;var startTag,endTag;if(false){}
vm._isVue=true;if(options&&options._isComponent){initInternalComponent(vm,options);}else{vm.$options=mergeOptions(resolveConstructorOptions(vm.constructor),options||{},vm);}
if(false){}else{vm._renderProxy=vm;}
vm._self=vm;initLifecycle(vm);initEvents(vm);initRender(vm);callHook(vm,'beforeCreate');initInjections(vm);initState(vm);initProvide(vm);callHook(vm,'created');if(false){}
if(vm.$options.el){vm.$mount(vm.$options.el);}};}
function initInternalComponent(vm,options){var opts=vm.$options=Object.create(vm.constructor.options);var parentVnode=options._parentVnode;opts.parent=options.parent;opts._parentVnode=parentVnode;var vnodeComponentOptions=parentVnode.componentOptions;opts.propsData=vnodeComponentOptions.propsData;opts._parentListeners=vnodeComponentOptions.listeners;opts._renderChildren=vnodeComponentOptions.children;opts._componentTag=vnodeComponentOptions.tag;if(options.render){opts.render=options.render;opts.staticRenderFns=options.staticRenderFns;}}
function resolveConstructorOptions(Ctor){var options=Ctor.options;if(Ctor.super){var superOptions=resolveConstructorOptions(Ctor.super);var cachedSuperOptions=Ctor.superOptions;if(superOptions!==cachedSuperOptions){Ctor.superOptions=superOptions;var modifiedOptions=resolveModifiedOptions(Ctor);if(modifiedOptions){extend(Ctor.extendOptions,modifiedOptions);}
options=Ctor.options=mergeOptions(superOptions,Ctor.extendOptions);if(options.name){options.components[options.name]=Ctor;}}}
return options}
function resolveModifiedOptions(Ctor){var modified;var latest=Ctor.options;var sealed=Ctor.sealedOptions;for(var key in latest){if(latest[key]!==sealed[key]){if(!modified){modified={};}
modified[key]=latest[key];}}
return modified}
function Vue(options){if(false){}
this._init(options);}
initMixin(Vue);stateMixin(Vue);eventsMixin(Vue);lifecycleMixin(Vue);renderMixin(Vue);function initUse(Vue){Vue.use=function(plugin){var installedPlugins=(this._installedPlugins||(this._installedPlugins=[]));if(installedPlugins.indexOf(plugin)>-1){return this}
var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install==='function'){plugin.install.apply(plugin,args);}else if(typeof plugin==='function'){plugin.apply(null,args);}
installedPlugins.push(plugin);return this};}
function initMixin$1(Vue){Vue.mixin=function(mixin){this.options=mergeOptions(this.options,mixin);return this};}
function initExtend(Vue){Vue.cid=0;var cid=1;Vue.extend=function(extendOptions){extendOptions=extendOptions||{};var Super=this;var SuperId=Super.cid;var cachedCtors=extendOptions._Ctor||(extendOptions._Ctor={});if(cachedCtors[SuperId]){return cachedCtors[SuperId]}
var name=extendOptions.name||Super.options.name;if(false){}
var Sub=function VueComponent(options){this._init(options);};Sub.prototype=Object.create(Super.prototype);Sub.prototype.constructor=Sub;Sub.cid=cid++;Sub.options=mergeOptions(Super.options,extendOptions);Sub['super']=Super;if(Sub.options.props){initProps$1(Sub);}
if(Sub.options.computed){initComputed$1(Sub);}
Sub.extend=Super.extend;Sub.mixin=Super.mixin;Sub.use=Super.use;ASSET_TYPES.forEach(function(type){Sub[type]=Super[type];});if(name){Sub.options.components[name]=Sub;}
Sub.superOptions=Super.options;Sub.extendOptions=extendOptions;Sub.sealedOptions=extend({},Sub.options);cachedCtors[SuperId]=Sub;return Sub};}
function initProps$1(Comp){var props=Comp.options.props;for(var key in props){proxy(Comp.prototype,"_props",key);}}
function initComputed$1(Comp){var computed=Comp.options.computed;for(var key in computed){defineComputed(Comp.prototype,key,computed[key]);}}
function initAssetRegisters(Vue){ASSET_TYPES.forEach(function(type){Vue[type]=function(id,definition){if(!definition){return this.options[type+'s'][id]}else{if(false){}
if(type==='component'&&isPlainObject(definition)){definition.name=definition.name||id;definition=this.options._base.extend(definition);}
if(type==='directive'&&typeof definition==='function'){definition={bind:definition,update:definition};}
this.options[type+'s'][id]=definition;return definition}};});}
function getComponentName(opts){return opts&&(opts.Ctor.options.name||opts.tag)}
function matches(pattern,name){if(Array.isArray(pattern)){return pattern.indexOf(name)>-1}else if(typeof pattern==='string'){return pattern.split(',').indexOf(name)>-1}else if(isRegExp(pattern)){return pattern.test(name)}
return false}
function pruneCache(keepAliveInstance,filter){var cache=keepAliveInstance.cache;var keys=keepAliveInstance.keys;var _vnode=keepAliveInstance._vnode;for(var key in cache){var cachedNode=cache[key];if(cachedNode){var name=getComponentName(cachedNode.componentOptions);if(name&&!filter(name)){pruneCacheEntry(cache,key,keys,_vnode);}}}}
function pruneCacheEntry(cache,key,keys,current){var cached$$1=cache[key];if(cached$$1&&(!current||cached$$1.tag!==current.tag)){cached$$1.componentInstance.$destroy();}
cache[key]=null;remove(keys,key);}
var patternTypes=[String,RegExp,Array];var KeepAlive={name:'keep-alive',abstract:true,props:{include:patternTypes,exclude:patternTypes,max:[String,Number]},created:function created(){this.cache=Object.create(null);this.keys=[];},destroyed:function destroyed(){for(var key in this.cache){pruneCacheEntry(this.cache,key,this.keys);}},mounted:function mounted(){var this$1=this;this.$watch('include',function(val){pruneCache(this$1,function(name){return matches(val,name);});});this.$watch('exclude',function(val){pruneCache(this$1,function(name){return!matches(val,name);});});},render:function render(){var slot=this.$slots.default;var vnode=getFirstComponentChild(slot);var componentOptions=vnode&&vnode.componentOptions;if(componentOptions){var name=getComponentName(componentOptions);var ref=this;var include=ref.include;var exclude=ref.exclude;if((include&&(!name||!matches(include,name)))||(exclude&&name&&matches(exclude,name))){return vnode}
var ref$1=this;var cache=ref$1.cache;var keys=ref$1.keys;var key=vnode.key==null?componentOptions.Ctor.cid+(componentOptions.tag?("::"+(componentOptions.tag)):''):vnode.key;if(cache[key]){vnode.componentInstance=cache[key].componentInstance;remove(keys,key);keys.push(key);}else{cache[key]=vnode;keys.push(key);if(this.max&&keys.length>parseInt(this.max)){pruneCacheEntry(cache,keys[0],keys,this._vnode);}}
vnode.data.keepAlive=true;}
return vnode||(slot&&slot[0])}};var builtInComponents={KeepAlive:KeepAlive};function initGlobalAPI(Vue){var configDef={};configDef.get=function(){return config;};if(false){}
Object.defineProperty(Vue,'config',configDef);Vue.util={warn:warn,extend:extend,mergeOptions:mergeOptions,defineReactive:defineReactive$$1};Vue.set=set;Vue.delete=del;Vue.nextTick=nextTick;Vue.observable=function(obj){observe(obj);return obj};Vue.options=Object.create(null);ASSET_TYPES.forEach(function(type){Vue.options[type+'s']=Object.create(null);});Vue.options._base=Vue;extend(Vue.options.components,builtInComponents);initUse(Vue);initMixin$1(Vue);initExtend(Vue);initAssetRegisters(Vue);}
initGlobalAPI(Vue);Object.defineProperty(Vue.prototype,'$isServer',{get:isServerRendering});Object.defineProperty(Vue.prototype,'$ssrContext',{get:function get(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(Vue,'FunctionalRenderContext',{value:FunctionalRenderContext});Vue.version='2.6.12';var isReservedAttr=makeMap('style,class');var acceptValue=makeMap('input,textarea,option,select,progress');var mustUseProp=function(tag,type,attr){return((attr==='value'&&acceptValue(tag))&&type!=='button'||(attr==='selected'&&tag==='option')||(attr==='checked'&&tag==='input')||(attr==='muted'&&tag==='video'))};var isEnumeratedAttr=makeMap('contenteditable,draggable,spellcheck');var isValidContentEditableValue=makeMap('events,caret,typing,plaintext-only');var convertEnumeratedValue=function(key,value){return isFalsyAttrValue(value)||value==='false'?'false':key==='contenteditable'&&isValidContentEditableValue(value)?value:'true'};var isBooleanAttr=makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,'+'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,'+'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,'+'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,'+'required,reversed,scoped,seamless,selected,sortable,translate,'+'truespeed,typemustmatch,visible');var xlinkNS='http://www.w3.org/1999/xlink';var isXlink=function(name){return name.charAt(5)===':'&&name.slice(0,5)==='xlink'};var getXlinkProp=function(name){return isXlink(name)?name.slice(6,name.length):''};var isFalsyAttrValue=function(val){return val==null||val===false};function genClassForVnode(vnode){var data=vnode.data;var parentNode=vnode;var childNode=vnode;while(isDef(childNode.componentInstance)){childNode=childNode.componentInstance._vnode;if(childNode&&childNode.data){data=mergeClassData(childNode.data,data);}}
while(isDef(parentNode=parentNode.parent)){if(parentNode&&parentNode.data){data=mergeClassData(data,parentNode.data);}}
return renderClass(data.staticClass,data.class)}
function mergeClassData(child,parent){return{staticClass:concat(child.staticClass,parent.staticClass),class:isDef(child.class)?[child.class,parent.class]:parent.class}}
function renderClass(staticClass,dynamicClass){if(isDef(staticClass)||isDef(dynamicClass)){return concat(staticClass,stringifyClass(dynamicClass))}
return''}
function concat(a,b){return a?b?(a+' '+b):a:(b||'')}
function stringifyClass(value){if(Array.isArray(value)){return stringifyArray(value)}
if(isObject(value)){return stringifyObject(value)}
if(typeof value==='string'){return value}
return''}
function stringifyArray(value){var res='';var stringified;for(var i=0,l=value.length;i<l;i++){if(isDef(stringified=stringifyClass(value[i]))&&stringified!==''){if(res){res+=' ';}
res+=stringified;}}
return res}
function stringifyObject(value){var res='';for(var key in value){if(value[key]){if(res){res+=' ';}
res+=key;}}
return res}
var namespaceMap={svg:'http://www.w3.org/2000/svg',math:'http://www.w3.org/1998/Math/MathML'};var isHTMLTag=makeMap('html,body,base,head,link,meta,style,title,'+'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,'+'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,'+'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,'+'s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,'+'embed,object,param,source,canvas,script,noscript,del,ins,'+'caption,col,colgroup,table,thead,tbody,td,th,tr,'+'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,'+'output,progress,select,textarea,'+'details,dialog,menu,menuitem,summary,'+'content,element,shadow,template,blockquote,iframe,tfoot');var isSVG=makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,'+'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,'+'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',true);var isReservedTag=function(tag){return isHTMLTag(tag)||isSVG(tag)};function getTagNamespace(tag){if(isSVG(tag)){return'svg'}
if(tag==='math'){return'math'}}
var unknownElementCache=Object.create(null);function isUnknownElement(tag){if(!inBrowser){return true}
if(isReservedTag(tag)){return false}
tag=tag.toLowerCase();if(unknownElementCache[tag]!=null){return unknownElementCache[tag]}
var el=document.createElement(tag);if(tag.indexOf('-')>-1){return(unknownElementCache[tag]=(el.constructor===window.HTMLUnknownElement||el.constructor===window.HTMLElement))}else{return(unknownElementCache[tag]=/HTMLUnknownElement/.test(el.toString()))}}
var isTextInputType=makeMap('text,number,password,search,email,tel,url');function query(el){if(typeof el==='string'){var selected=document.querySelector(el);if(!selected){false&&false;return document.createElement('div')}
return selected}else{return el}}
function createElement$1(tagName,vnode){var elm=document.createElement(tagName);if(tagName!=='select'){return elm}
if(vnode.data&&vnode.data.attrs&&vnode.data.attrs.multiple!==undefined){elm.setAttribute('multiple','multiple');}
return elm}
function createElementNS(namespace,tagName){return document.createElementNS(namespaceMap[namespace],tagName)}
function createTextNode(text){return document.createTextNode(text)}
function createComment(text){return document.createComment(text)}
function insertBefore(parentNode,newNode,referenceNode){parentNode.insertBefore(newNode,referenceNode);}
function removeChild(node,child){node.removeChild(child);}
function appendChild(node,child){node.appendChild(child);}
function parentNode(node){return node.parentNode}
function nextSibling(node){return node.nextSibling}
function tagName(node){return node.tagName}
function setTextContent(node,text){node.textContent=text;}
function setStyleScope(node,scopeId){node.setAttribute(scopeId,'');}
var nodeOps=Object.freeze({createElement:createElement$1,createElementNS:createElementNS,createTextNode:createTextNode,createComment:createComment,insertBefore:insertBefore,removeChild:removeChild,appendChild:appendChild,parentNode:parentNode,nextSibling:nextSibling,tagName:tagName,setTextContent:setTextContent,setStyleScope:setStyleScope});var ref={create:function create(_,vnode){registerRef(vnode);},update:function update(oldVnode,vnode){if(oldVnode.data.ref!==vnode.data.ref){registerRef(oldVnode,true);registerRef(vnode);}},destroy:function destroy(vnode){registerRef(vnode,true);}};function registerRef(vnode,isRemoval){var key=vnode.data.ref;if(!isDef(key)){return}
var vm=vnode.context;var ref=vnode.componentInstance||vnode.elm;var refs=vm.$refs;if(isRemoval){if(Array.isArray(refs[key])){remove(refs[key],ref);}else if(refs[key]===ref){refs[key]=undefined;}}else{if(vnode.data.refInFor){if(!Array.isArray(refs[key])){refs[key]=[ref];}else if(refs[key].indexOf(ref)<0){refs[key].push(ref);}}else{refs[key]=ref;}}}
var emptyNode=new VNode('',{},[]);var hooks=['create','activate','update','remove','destroy'];function sameVnode(a,b){return(a.key===b.key&&((a.tag===b.tag&&a.isComment===b.isComment&&isDef(a.data)===isDef(b.data)&&sameInputType(a,b))||(isTrue(a.isAsyncPlaceholder)&&a.asyncFactory===b.asyncFactory&&isUndef(b.asyncFactory.error))))}
function sameInputType(a,b){if(a.tag!=='input'){return true}
var i;var typeA=isDef(i=a.data)&&isDef(i=i.attrs)&&i.type;var typeB=isDef(i=b.data)&&isDef(i=i.attrs)&&i.type;return typeA===typeB||isTextInputType(typeA)&&isTextInputType(typeB)}
function createKeyToOldIdx(children,beginIdx,endIdx){var i,key;var map={};for(i=beginIdx;i<=endIdx;++i){key=children[i].key;if(isDef(key)){map[key]=i;}}
return map}
function createPatchFunction(backend){var i,j;var cbs={};var modules=backend.modules;var nodeOps=backend.nodeOps;for(i=0;i<hooks.length;++i){cbs[hooks[i]]=[];for(j=0;j<modules.length;++j){if(isDef(modules[j][hooks[i]])){cbs[hooks[i]].push(modules[j][hooks[i]]);}}}
function emptyNodeAt(elm){return new VNode(nodeOps.tagName(elm).toLowerCase(),{},[],undefined,elm)}
function createRmCb(childElm,listeners){function remove$$1(){if(--remove$$1.listeners===0){removeNode(childElm);}}
remove$$1.listeners=listeners;return remove$$1}
function removeNode(el){var parent=nodeOps.parentNode(el);if(isDef(parent)){nodeOps.removeChild(parent,el);}}
function isUnknownElement$$1(vnode,inVPre){return(!inVPre&&!vnode.ns&&!(config.ignoredElements.length&&config.ignoredElements.some(function(ignore){return isRegExp(ignore)?ignore.test(vnode.tag):ignore===vnode.tag}))&&config.isUnknownElement(vnode.tag))}
var creatingElmInVPre=0;function createElm(vnode,insertedVnodeQueue,parentElm,refElm,nested,ownerArray,index){if(isDef(vnode.elm)&&isDef(ownerArray)){vnode=ownerArray[index]=cloneVNode(vnode);}
vnode.isRootInsert=!nested;if(createComponent(vnode,insertedVnodeQueue,parentElm,refElm)){return}
var data=vnode.data;var children=vnode.children;var tag=vnode.tag;if(isDef(tag)){if(false){}
vnode.elm=vnode.ns?nodeOps.createElementNS(vnode.ns,tag):nodeOps.createElement(tag,vnode);setScope(vnode);{createChildren(vnode,children,insertedVnodeQueue);if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}
insert(parentElm,vnode.elm,refElm);}
if(false){}}else if(isTrue(vnode.isComment)){vnode.elm=nodeOps.createComment(vnode.text);insert(parentElm,vnode.elm,refElm);}else{vnode.elm=nodeOps.createTextNode(vnode.text);insert(parentElm,vnode.elm,refElm);}}
function createComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i=vnode.data;if(isDef(i)){var isReactivated=isDef(vnode.componentInstance)&&i.keepAlive;if(isDef(i=i.hook)&&isDef(i=i.init)){i(vnode,false);}
if(isDef(vnode.componentInstance)){initComponent(vnode,insertedVnodeQueue);insert(parentElm,vnode.elm,refElm);if(isTrue(isReactivated)){reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm);}
return true}}}
function initComponent(vnode,insertedVnodeQueue){if(isDef(vnode.data.pendingInsert)){insertedVnodeQueue.push.apply(insertedVnodeQueue,vnode.data.pendingInsert);vnode.data.pendingInsert=null;}
vnode.elm=vnode.componentInstance.$el;if(isPatchable(vnode)){invokeCreateHooks(vnode,insertedVnodeQueue);setScope(vnode);}else{registerRef(vnode);insertedVnodeQueue.push(vnode);}}
function reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i;var innerNode=vnode;while(innerNode.componentInstance){innerNode=innerNode.componentInstance._vnode;if(isDef(i=innerNode.data)&&isDef(i=i.transition)){for(i=0;i<cbs.activate.length;++i){cbs.activate[i](emptyNode,innerNode);}
insertedVnodeQueue.push(innerNode);break}}
insert(parentElm,vnode.elm,refElm);}
function insert(parent,elm,ref$$1){if(isDef(parent)){if(isDef(ref$$1)){if(nodeOps.parentNode(ref$$1)===parent){nodeOps.insertBefore(parent,elm,ref$$1);}}else{nodeOps.appendChild(parent,elm);}}}
function createChildren(vnode,children,insertedVnodeQueue){if(Array.isArray(children)){if(false){}
for(var i=0;i<children.length;++i){createElm(children[i],insertedVnodeQueue,vnode.elm,null,true,children,i);}}else if(isPrimitive(vnode.text)){nodeOps.appendChild(vnode.elm,nodeOps.createTextNode(String(vnode.text)));}}
function isPatchable(vnode){while(vnode.componentInstance){vnode=vnode.componentInstance._vnode;}
return isDef(vnode.tag)}
function invokeCreateHooks(vnode,insertedVnodeQueue){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,vnode);}
i=vnode.data.hook;if(isDef(i)){if(isDef(i.create)){i.create(emptyNode,vnode);}
if(isDef(i.insert)){insertedVnodeQueue.push(vnode);}}}
function setScope(vnode){var i;if(isDef(i=vnode.fnScopeId)){nodeOps.setStyleScope(vnode.elm,i);}else{var ancestor=vnode;while(ancestor){if(isDef(i=ancestor.context)&&isDef(i=i.$options._scopeId)){nodeOps.setStyleScope(vnode.elm,i);}
ancestor=ancestor.parent;}}
if(isDef(i=activeInstance)&&i!==vnode.context&&i!==vnode.fnContext&&isDef(i=i.$options._scopeId)){nodeOps.setStyleScope(vnode.elm,i);}}
function addVnodes(parentElm,refElm,vnodes,startIdx,endIdx,insertedVnodeQueue){for(;startIdx<=endIdx;++startIdx){createElm(vnodes[startIdx],insertedVnodeQueue,parentElm,refElm,false,vnodes,startIdx);}}
function invokeDestroyHook(vnode){var i,j;var data=vnode.data;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.destroy)){i(vnode);}
for(i=0;i<cbs.destroy.length;++i){cbs.destroy[i](vnode);}}
if(isDef(i=vnode.children)){for(j=0;j<vnode.children.length;++j){invokeDestroyHook(vnode.children[j]);}}}
function removeVnodes(vnodes,startIdx,endIdx){for(;startIdx<=endIdx;++startIdx){var ch=vnodes[startIdx];if(isDef(ch)){if(isDef(ch.tag)){removeAndInvokeRemoveHook(ch);invokeDestroyHook(ch);}else{removeNode(ch.elm);}}}}
function removeAndInvokeRemoveHook(vnode,rm){if(isDef(rm)||isDef(vnode.data)){var i;var listeners=cbs.remove.length+1;if(isDef(rm)){rm.listeners+=listeners;}else{rm=createRmCb(vnode.elm,listeners);}
if(isDef(i=vnode.componentInstance)&&isDef(i=i._vnode)&&isDef(i.data)){removeAndInvokeRemoveHook(i,rm);}
for(i=0;i<cbs.remove.length;++i){cbs.remove[i](vnode,rm);}
if(isDef(i=vnode.data.hook)&&isDef(i=i.remove)){i(vnode,rm);}else{rm();}}else{removeNode(vnode.elm);}}
function updateChildren(parentElm,oldCh,newCh,insertedVnodeQueue,removeOnly){var oldStartIdx=0;var newStartIdx=0;var oldEndIdx=oldCh.length-1;var oldStartVnode=oldCh[0];var oldEndVnode=oldCh[oldEndIdx];var newEndIdx=newCh.length-1;var newStartVnode=newCh[0];var newEndVnode=newCh[newEndIdx];var oldKeyToIdx,idxInOld,vnodeToMove,refElm;var canMove=!removeOnly;if(false){}
while(oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx){if(isUndef(oldStartVnode)){oldStartVnode=oldCh[++oldStartIdx];}else if(isUndef(oldEndVnode)){oldEndVnode=oldCh[--oldEndIdx];}else if(sameVnode(oldStartVnode,newStartVnode)){patchVnode(oldStartVnode,newStartVnode,insertedVnodeQueue,newCh,newStartIdx);oldStartVnode=oldCh[++oldStartIdx];newStartVnode=newCh[++newStartIdx];}else if(sameVnode(oldEndVnode,newEndVnode)){patchVnode(oldEndVnode,newEndVnode,insertedVnodeQueue,newCh,newEndIdx);oldEndVnode=oldCh[--oldEndIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldStartVnode,newEndVnode)){patchVnode(oldStartVnode,newEndVnode,insertedVnodeQueue,newCh,newEndIdx);canMove&&nodeOps.insertBefore(parentElm,oldStartVnode.elm,nodeOps.nextSibling(oldEndVnode.elm));oldStartVnode=oldCh[++oldStartIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldEndVnode,newStartVnode)){patchVnode(oldEndVnode,newStartVnode,insertedVnodeQueue,newCh,newStartIdx);canMove&&nodeOps.insertBefore(parentElm,oldEndVnode.elm,oldStartVnode.elm);oldEndVnode=oldCh[--oldEndIdx];newStartVnode=newCh[++newStartIdx];}else{if(isUndef(oldKeyToIdx)){oldKeyToIdx=createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx);}
idxInOld=isDef(newStartVnode.key)?oldKeyToIdx[newStartVnode.key]:findIdxInOld(newStartVnode,oldCh,oldStartIdx,oldEndIdx);if(isUndef(idxInOld)){createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm,false,newCh,newStartIdx);}else{vnodeToMove=oldCh[idxInOld];if(sameVnode(vnodeToMove,newStartVnode)){patchVnode(vnodeToMove,newStartVnode,insertedVnodeQueue,newCh,newStartIdx);oldCh[idxInOld]=undefined;canMove&&nodeOps.insertBefore(parentElm,vnodeToMove.elm,oldStartVnode.elm);}else{createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm,false,newCh,newStartIdx);}}
newStartVnode=newCh[++newStartIdx];}}
if(oldStartIdx>oldEndIdx){refElm=isUndef(newCh[newEndIdx+1])?null:newCh[newEndIdx+1].elm;addVnodes(parentElm,refElm,newCh,newStartIdx,newEndIdx,insertedVnodeQueue);}else if(newStartIdx>newEndIdx){removeVnodes(oldCh,oldStartIdx,oldEndIdx);}}
function checkDuplicateKeys(children){var seenKeys={};for(var i=0;i<children.length;i++){var vnode=children[i];var key=vnode.key;if(isDef(key)){if(seenKeys[key]){warn(("Duplicate keys detected: '"+key+"'. This may cause an update error."),vnode.context);}else{seenKeys[key]=true;}}}}
function findIdxInOld(node,oldCh,start,end){for(var i=start;i<end;i++){var c=oldCh[i];if(isDef(c)&&sameVnode(node,c)){return i}}}
function patchVnode(oldVnode,vnode,insertedVnodeQueue,ownerArray,index,removeOnly){if(oldVnode===vnode){return}
if(isDef(vnode.elm)&&isDef(ownerArray)){vnode=ownerArray[index]=cloneVNode(vnode);}
var elm=vnode.elm=oldVnode.elm;if(isTrue(oldVnode.isAsyncPlaceholder)){if(isDef(vnode.asyncFactory.resolved)){hydrate(oldVnode.elm,vnode,insertedVnodeQueue);}else{vnode.isAsyncPlaceholder=true;}
return}
if(isTrue(vnode.isStatic)&&isTrue(oldVnode.isStatic)&&vnode.key===oldVnode.key&&(isTrue(vnode.isCloned)||isTrue(vnode.isOnce))){vnode.componentInstance=oldVnode.componentInstance;return}
var i;var data=vnode.data;if(isDef(data)&&isDef(i=data.hook)&&isDef(i=i.prepatch)){i(oldVnode,vnode);}
var oldCh=oldVnode.children;var ch=vnode.children;if(isDef(data)&&isPatchable(vnode)){for(i=0;i<cbs.update.length;++i){cbs.update[i](oldVnode,vnode);}
if(isDef(i=data.hook)&&isDef(i=i.update)){i(oldVnode,vnode);}}
if(isUndef(vnode.text)){if(isDef(oldCh)&&isDef(ch)){if(oldCh!==ch){updateChildren(elm,oldCh,ch,insertedVnodeQueue,removeOnly);}}else if(isDef(ch)){if(false){}
if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}
addVnodes(elm,null,ch,0,ch.length-1,insertedVnodeQueue);}else if(isDef(oldCh)){removeVnodes(oldCh,0,oldCh.length-1);}else if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}}else if(oldVnode.text!==vnode.text){nodeOps.setTextContent(elm,vnode.text);}
if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.postpatch)){i(oldVnode,vnode);}}}
function invokeInsertHook(vnode,queue,initial){if(isTrue(initial)&&isDef(vnode.parent)){vnode.parent.data.pendingInsert=queue;}else{for(var i=0;i<queue.length;++i){queue[i].data.hook.insert(queue[i]);}}}
var hydrationBailed=false;var isRenderedModule=makeMap('attrs,class,staticClass,staticStyle,key');function hydrate(elm,vnode,insertedVnodeQueue,inVPre){var i;var tag=vnode.tag;var data=vnode.data;var children=vnode.children;inVPre=inVPre||(data&&data.pre);vnode.elm=elm;if(isTrue(vnode.isComment)&&isDef(vnode.asyncFactory)){vnode.isAsyncPlaceholder=true;return true}
if(false){}
if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init)){i(vnode,true);}
if(isDef(i=vnode.componentInstance)){initComponent(vnode,insertedVnodeQueue);return true}}
if(isDef(tag)){if(isDef(children)){if(!elm.hasChildNodes()){createChildren(vnode,children,insertedVnodeQueue);}else{if(isDef(i=data)&&isDef(i=i.domProps)&&isDef(i=i.innerHTML)){if(i!==elm.innerHTML){if(false){}
return false}}else{var childrenMatch=true;var childNode=elm.firstChild;for(var i$1=0;i$1<children.length;i$1++){if(!childNode||!hydrate(childNode,children[i$1],insertedVnodeQueue,inVPre)){childrenMatch=false;break}
childNode=childNode.nextSibling;}
if(!childrenMatch||childNode){if(false){}
return false}}}}
if(isDef(data)){var fullInvoke=false;for(var key in data){if(!isRenderedModule(key)){fullInvoke=true;invokeCreateHooks(vnode,insertedVnodeQueue);break}}
if(!fullInvoke&&data['class']){traverse(data['class']);}}}else if(elm.data!==vnode.text){elm.data=vnode.text;}
return true}
function assertNodeMatch(node,vnode,inVPre){if(isDef(vnode.tag)){return vnode.tag.indexOf('vue-component')===0||(!isUnknownElement$$1(vnode,inVPre)&&vnode.tag.toLowerCase()===(node.tagName&&node.tagName.toLowerCase()))}else{return node.nodeType===(vnode.isComment?8:3)}}
return function patch(oldVnode,vnode,hydrating,removeOnly){if(isUndef(vnode)){if(isDef(oldVnode)){invokeDestroyHook(oldVnode);}
return}
var isInitialPatch=false;var insertedVnodeQueue=[];if(isUndef(oldVnode)){isInitialPatch=true;createElm(vnode,insertedVnodeQueue);}else{var isRealElement=isDef(oldVnode.nodeType);if(!isRealElement&&sameVnode(oldVnode,vnode)){patchVnode(oldVnode,vnode,insertedVnodeQueue,null,null,removeOnly);}else{if(isRealElement){if(oldVnode.nodeType===1&&oldVnode.hasAttribute(SSR_ATTR)){oldVnode.removeAttribute(SSR_ATTR);hydrating=true;}
if(isTrue(hydrating)){if(hydrate(oldVnode,vnode,insertedVnodeQueue)){invokeInsertHook(vnode,insertedVnodeQueue,true);return oldVnode}else if(false){}}
oldVnode=emptyNodeAt(oldVnode);}
var oldElm=oldVnode.elm;var parentElm=nodeOps.parentNode(oldElm);createElm(vnode,insertedVnodeQueue,oldElm._leaveCb?null:parentElm,nodeOps.nextSibling(oldElm));if(isDef(vnode.parent)){var ancestor=vnode.parent;var patchable=isPatchable(vnode);while(ancestor){for(var i=0;i<cbs.destroy.length;++i){cbs.destroy[i](ancestor);}
ancestor.elm=vnode.elm;if(patchable){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,ancestor);}
var insert=ancestor.data.hook.insert;if(insert.merged){for(var i$2=1;i$2<insert.fns.length;i$2++){insert.fns[i$2]();}}}else{registerRef(ancestor);}
ancestor=ancestor.parent;}}
if(isDef(parentElm)){removeVnodes([oldVnode],0,0);}else if(isDef(oldVnode.tag)){invokeDestroyHook(oldVnode);}}}
invokeInsertHook(vnode,insertedVnodeQueue,isInitialPatch);return vnode.elm}}
var directives={create:updateDirectives,update:updateDirectives,destroy:function unbindDirectives(vnode){updateDirectives(vnode,emptyNode);}};function updateDirectives(oldVnode,vnode){if(oldVnode.data.directives||vnode.data.directives){_update(oldVnode,vnode);}}
function _update(oldVnode,vnode){var isCreate=oldVnode===emptyNode;var isDestroy=vnode===emptyNode;var oldDirs=normalizeDirectives$1(oldVnode.data.directives,oldVnode.context);var newDirs=normalizeDirectives$1(vnode.data.directives,vnode.context);var dirsWithInsert=[];var dirsWithPostpatch=[];var key,oldDir,dir;for(key in newDirs){oldDir=oldDirs[key];dir=newDirs[key];if(!oldDir){callHook$1(dir,'bind',vnode,oldVnode);if(dir.def&&dir.def.inserted){dirsWithInsert.push(dir);}}else{dir.oldValue=oldDir.value;dir.oldArg=oldDir.arg;callHook$1(dir,'update',vnode,oldVnode);if(dir.def&&dir.def.componentUpdated){dirsWithPostpatch.push(dir);}}}
if(dirsWithInsert.length){var callInsert=function(){for(var i=0;i<dirsWithInsert.length;i++){callHook$1(dirsWithInsert[i],'inserted',vnode,oldVnode);}};if(isCreate){mergeVNodeHook(vnode,'insert',callInsert);}else{callInsert();}}
if(dirsWithPostpatch.length){mergeVNodeHook(vnode,'postpatch',function(){for(var i=0;i<dirsWithPostpatch.length;i++){callHook$1(dirsWithPostpatch[i],'componentUpdated',vnode,oldVnode);}});}
if(!isCreate){for(key in oldDirs){if(!newDirs[key]){callHook$1(oldDirs[key],'unbind',oldVnode,oldVnode,isDestroy);}}}}
var emptyModifiers=Object.create(null);function normalizeDirectives$1(dirs,vm){var res=Object.create(null);if(!dirs){return res}
var i,dir;for(i=0;i<dirs.length;i++){dir=dirs[i];if(!dir.modifiers){dir.modifiers=emptyModifiers;}
res[getRawDirName(dir)]=dir;dir.def=resolveAsset(vm.$options,'directives',dir.name,true);}
return res}
function getRawDirName(dir){return dir.rawName||((dir.name)+"."+(Object.keys(dir.modifiers||{}).join('.')))}
function callHook$1(dir,hook,vnode,oldVnode,isDestroy){var fn=dir.def&&dir.def[hook];if(fn){try{fn(vnode.elm,dir,vnode,oldVnode,isDestroy);}catch(e){handleError(e,vnode.context,("directive "+(dir.name)+" "+hook+" hook"));}}}
var baseModules=[ref,directives];function updateAttrs(oldVnode,vnode){var opts=vnode.componentOptions;if(isDef(opts)&&opts.Ctor.options.inheritAttrs===false){return}
if(isUndef(oldVnode.data.attrs)&&isUndef(vnode.data.attrs)){return}
var key,cur,old;var elm=vnode.elm;var oldAttrs=oldVnode.data.attrs||{};var attrs=vnode.data.attrs||{};if(isDef(attrs.__ob__)){attrs=vnode.data.attrs=extend({},attrs);}
for(key in attrs){cur=attrs[key];old=oldAttrs[key];if(old!==cur){setAttr(elm,key,cur);}}
if((isIE||isEdge)&&attrs.value!==oldAttrs.value){setAttr(elm,'value',attrs.value);}
for(key in oldAttrs){if(isUndef(attrs[key])){if(isXlink(key)){elm.removeAttributeNS(xlinkNS,getXlinkProp(key));}else if(!isEnumeratedAttr(key)){elm.removeAttribute(key);}}}}
function setAttr(el,key,value){if(el.tagName.indexOf('-')>-1){baseSetAttr(el,key,value);}else if(isBooleanAttr(key)){if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{value=key==='allowfullscreen'&&el.tagName==='EMBED'?'true':key;el.setAttribute(key,value);}}else if(isEnumeratedAttr(key)){el.setAttribute(key,convertEnumeratedValue(key,value));}else if(isXlink(key)){if(isFalsyAttrValue(value)){el.removeAttributeNS(xlinkNS,getXlinkProp(key));}else{el.setAttributeNS(xlinkNS,key,value);}}else{baseSetAttr(el,key,value);}}
function baseSetAttr(el,key,value){if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{if(isIE&&!isIE9&&el.tagName==='TEXTAREA'&&key==='placeholder'&&value!==''&&!el.__ieph){var blocker=function(e){e.stopImmediatePropagation();el.removeEventListener('input',blocker);};el.addEventListener('input',blocker);el.__ieph=true;}
el.setAttribute(key,value);}}
var attrs={create:updateAttrs,update:updateAttrs};function updateClass(oldVnode,vnode){var el=vnode.elm;var data=vnode.data;var oldData=oldVnode.data;if(isUndef(data.staticClass)&&isUndef(data.class)&&(isUndef(oldData)||(isUndef(oldData.staticClass)&&isUndef(oldData.class)))){return}
var cls=genClassForVnode(vnode);var transitionClass=el._transitionClasses;if(isDef(transitionClass)){cls=concat(cls,stringifyClass(transitionClass));}
if(cls!==el._prevClass){el.setAttribute('class',cls);el._prevClass=cls;}}
var klass={create:updateClass,update:updateClass};var RANGE_TOKEN='__r';var CHECKBOX_RADIO_TOKEN='__c';function normalizeEvents(on){if(isDef(on[RANGE_TOKEN])){var event=isIE?'change':'input';on[event]=[].concat(on[RANGE_TOKEN],on[event]||[]);delete on[RANGE_TOKEN];}
if(isDef(on[CHECKBOX_RADIO_TOKEN])){on.change=[].concat(on[CHECKBOX_RADIO_TOKEN],on.change||[]);delete on[CHECKBOX_RADIO_TOKEN];}}
var target$1;function createOnceHandler$1(event,handler,capture){var _target=target$1;return function onceHandler(){var res=handler.apply(null,arguments);if(res!==null){remove$2(event,onceHandler,capture,_target);}}}
var useMicrotaskFix=isUsingMicroTask&&!(isFF&&Number(isFF[1])<=53);function add$1(name,handler,capture,passive){if(useMicrotaskFix){var attachedTimestamp=currentFlushTimestamp;var original=handler;handler=original._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=attachedTimestamp||e.timeStamp<=0||e.target.ownerDocument!==document){return original.apply(this,arguments)}};}
target$1.addEventListener(name,handler,supportsPassive?{capture:capture,passive:passive}:capture);}
function remove$2(name,handler,capture,_target){(_target||target$1).removeEventListener(name,handler._wrapper||handler,capture);}
function updateDOMListeners(oldVnode,vnode){if(isUndef(oldVnode.data.on)&&isUndef(vnode.data.on)){return}
var on=vnode.data.on||{};var oldOn=oldVnode.data.on||{};target$1=vnode.elm;normalizeEvents(on);updateListeners(on,oldOn,add$1,remove$2,createOnceHandler$1,vnode.context);target$1=undefined;}
var events={create:updateDOMListeners,update:updateDOMListeners};var svgContainer;function updateDOMProps(oldVnode,vnode){if(isUndef(oldVnode.data.domProps)&&isUndef(vnode.data.domProps)){return}
var key,cur;var elm=vnode.elm;var oldProps=oldVnode.data.domProps||{};var props=vnode.data.domProps||{};if(isDef(props.__ob__)){props=vnode.data.domProps=extend({},props);}
for(key in oldProps){if(!(key in props)){elm[key]='';}}
for(key in props){cur=props[key];if(key==='textContent'||key==='innerHTML'){if(vnode.children){vnode.children.length=0;}
if(cur===oldProps[key]){continue}
if(elm.childNodes.length===1){elm.removeChild(elm.childNodes[0]);}}
if(key==='value'&&elm.tagName!=='PROGRESS'){elm._value=cur;var strCur=isUndef(cur)?'':String(cur);if(shouldUpdateValue(elm,strCur)){elm.value=strCur;}}else if(key==='innerHTML'&&isSVG(elm.tagName)&&isUndef(elm.innerHTML)){svgContainer=svgContainer||document.createElement('div');svgContainer.innerHTML="<svg>"+cur+"</svg>";var svg=svgContainer.firstChild;while(elm.firstChild){elm.removeChild(elm.firstChild);}
while(svg.firstChild){elm.appendChild(svg.firstChild);}}else if(cur!==oldProps[key]){try{elm[key]=cur;}catch(e){}}}}
function shouldUpdateValue(elm,checkVal){return(!elm.composing&&(elm.tagName==='OPTION'||isNotInFocusAndDirty(elm,checkVal)||isDirtyWithModifiers(elm,checkVal)))}
function isNotInFocusAndDirty(elm,checkVal){var notInFocus=true;try{notInFocus=document.activeElement!==elm;}catch(e){}
return notInFocus&&elm.value!==checkVal}
function isDirtyWithModifiers(elm,newVal){var value=elm.value;var modifiers=elm._vModifiers;if(isDef(modifiers)){if(modifiers.number){return toNumber(value)!==toNumber(newVal)}
if(modifiers.trim){return value.trim()!==newVal.trim()}}
return value!==newVal}
var domProps={create:updateDOMProps,update:updateDOMProps};var parseStyleText=cached(function(cssText){var res={};var listDelimiter=/;(?![^(]*\))/g;var propertyDelimiter=/:(.+)/;cssText.split(listDelimiter).forEach(function(item){if(item){var tmp=item.split(propertyDelimiter);tmp.length>1&&(res[tmp[0].trim()]=tmp[1].trim());}});return res});function normalizeStyleData(data){var style=normalizeStyleBinding(data.style);return data.staticStyle?extend(data.staticStyle,style):style}
function normalizeStyleBinding(bindingStyle){if(Array.isArray(bindingStyle)){return toObject(bindingStyle)}
if(typeof bindingStyle==='string'){return parseStyleText(bindingStyle)}
return bindingStyle}
function getStyle(vnode,checkChild){var res={};var styleData;if(checkChild){var childNode=vnode;while(childNode.componentInstance){childNode=childNode.componentInstance._vnode;if(childNode&&childNode.data&&(styleData=normalizeStyleData(childNode.data))){extend(res,styleData);}}}
if((styleData=normalizeStyleData(vnode.data))){extend(res,styleData);}
var parentNode=vnode;while((parentNode=parentNode.parent)){if(parentNode.data&&(styleData=normalizeStyleData(parentNode.data))){extend(res,styleData);}}
return res}
var cssVarRE=/^--/;var importantRE=/\s*!important$/;var setProp=function(el,name,val){if(cssVarRE.test(name)){el.style.setProperty(name,val);}else if(importantRE.test(val)){el.style.setProperty(hyphenate(name),val.replace(importantRE,''),'important');}else{var normalizedName=normalize(name);if(Array.isArray(val)){for(var i=0,len=val.length;i<len;i++){el.style[normalizedName]=val[i];}}else{el.style[normalizedName]=val;}}};var vendorNames=['Webkit','Moz','ms'];var emptyStyle;var normalize=cached(function(prop){emptyStyle=emptyStyle||document.createElement('div').style;prop=camelize(prop);if(prop!=='filter'&&(prop in emptyStyle)){return prop}
var capName=prop.charAt(0).toUpperCase()+prop.slice(1);for(var i=0;i<vendorNames.length;i++){var name=vendorNames[i]+capName;if(name in emptyStyle){return name}}});function updateStyle(oldVnode,vnode){var data=vnode.data;var oldData=oldVnode.data;if(isUndef(data.staticStyle)&&isUndef(data.style)&&isUndef(oldData.staticStyle)&&isUndef(oldData.style)){return}
var cur,name;var el=vnode.elm;var oldStaticStyle=oldData.staticStyle;var oldStyleBinding=oldData.normalizedStyle||oldData.style||{};var oldStyle=oldStaticStyle||oldStyleBinding;var style=normalizeStyleBinding(vnode.data.style)||{};vnode.data.normalizedStyle=isDef(style.__ob__)?extend({},style):style;var newStyle=getStyle(vnode,true);for(name in oldStyle){if(isUndef(newStyle[name])){setProp(el,name,'');}}
for(name in newStyle){cur=newStyle[name];if(cur!==oldStyle[name]){setProp(el,name,cur==null?'':cur);}}}
var style={create:updateStyle,update:updateStyle};var whitespaceRE=/\s+/;function addClass(el,cls){if(!cls||!(cls=cls.trim())){return}
if(el.classList){if(cls.indexOf(' ')>-1){cls.split(whitespaceRE).forEach(function(c){return el.classList.add(c);});}else{el.classList.add(cls);}}else{var cur=" "+(el.getAttribute('class')||'')+" ";if(cur.indexOf(' '+cls+' ')<0){el.setAttribute('class',(cur+cls).trim());}}}
function removeClass(el,cls){if(!cls||!(cls=cls.trim())){return}
if(el.classList){if(cls.indexOf(' ')>-1){cls.split(whitespaceRE).forEach(function(c){return el.classList.remove(c);});}else{el.classList.remove(cls);}
if(!el.classList.length){el.removeAttribute('class');}}else{var cur=" "+(el.getAttribute('class')||'')+" ";var tar=' '+cls+' ';while(cur.indexOf(tar)>=0){cur=cur.replace(tar,' ');}
cur=cur.trim();if(cur){el.setAttribute('class',cur);}else{el.removeAttribute('class');}}}
function resolveTransition(def$$1){if(!def$$1){return}
if(typeof def$$1==='object'){var res={};if(def$$1.css!==false){extend(res,autoCssTransition(def$$1.name||'v'));}
extend(res,def$$1);return res}else if(typeof def$$1==='string'){return autoCssTransition(def$$1)}}
var autoCssTransition=cached(function(name){return{enterClass:(name+"-enter"),enterToClass:(name+"-enter-to"),enterActiveClass:(name+"-enter-active"),leaveClass:(name+"-leave"),leaveToClass:(name+"-leave-to"),leaveActiveClass:(name+"-leave-active")}});var hasTransition=inBrowser&&!isIE9;var TRANSITION='transition';var ANIMATION='animation';var transitionProp='transition';var transitionEndEvent='transitionend';var animationProp='animation';var animationEndEvent='animationend';if(hasTransition){if(window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined){transitionProp='WebkitTransition';transitionEndEvent='webkitTransitionEnd';}
if(window.onanimationend===undefined&&window.onwebkitanimationend!==undefined){animationProp='WebkitAnimation';animationEndEvent='webkitAnimationEnd';}}
var raf=inBrowser?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(fn){return fn();};function nextFrame(fn){raf(function(){raf(fn);});}
function addTransitionClass(el,cls){var transitionClasses=el._transitionClasses||(el._transitionClasses=[]);if(transitionClasses.indexOf(cls)<0){transitionClasses.push(cls);addClass(el,cls);}}
function removeTransitionClass(el,cls){if(el._transitionClasses){remove(el._transitionClasses,cls);}
removeClass(el,cls);}
function whenTransitionEnds(el,expectedType,cb){var ref=getTransitionInfo(el,expectedType);var type=ref.type;var timeout=ref.timeout;var propCount=ref.propCount;if(!type){return cb()}
var event=type===TRANSITION?transitionEndEvent:animationEndEvent;var ended=0;var end=function(){el.removeEventListener(event,onEnd);cb();};var onEnd=function(e){if(e.target===el){if(++ended>=propCount){end();}}};setTimeout(function(){if(ended<propCount){end();}},timeout+1);el.addEventListener(event,onEnd);}
var transformRE=/\b(transform|all)(,|$)/;function getTransitionInfo(el,expectedType){var styles=window.getComputedStyle(el);var transitionDelays=(styles[transitionProp+'Delay']||'').split(', ');var transitionDurations=(styles[transitionProp+'Duration']||'').split(', ');var transitionTimeout=getTimeout(transitionDelays,transitionDurations);var animationDelays=(styles[animationProp+'Delay']||'').split(', ');var animationDurations=(styles[animationProp+'Duration']||'').split(', ');var animationTimeout=getTimeout(animationDelays,animationDurations);var type;var timeout=0;var propCount=0;if(expectedType===TRANSITION){if(transitionTimeout>0){type=TRANSITION;timeout=transitionTimeout;propCount=transitionDurations.length;}}else if(expectedType===ANIMATION){if(animationTimeout>0){type=ANIMATION;timeout=animationTimeout;propCount=animationDurations.length;}}else{timeout=Math.max(transitionTimeout,animationTimeout);type=timeout>0?transitionTimeout>animationTimeout?TRANSITION:ANIMATION:null;propCount=type?type===TRANSITION?transitionDurations.length:animationDurations.length:0;}
var hasTransform=type===TRANSITION&&transformRE.test(styles[transitionProp+'Property']);return{type:type,timeout:timeout,propCount:propCount,hasTransform:hasTransform}}
function getTimeout(delays,durations){while(delays.length<durations.length){delays=delays.concat(delays);}
return Math.max.apply(null,durations.map(function(d,i){return toMs(d)+toMs(delays[i])}))}
function toMs(s){return Number(s.slice(0,-1).replace(',','.'))*1000}
function enter(vnode,toggleDisplay){var el=vnode.elm;if(isDef(el._leaveCb)){el._leaveCb.cancelled=true;el._leaveCb();}
var data=resolveTransition(vnode.data.transition);if(isUndef(data)){return}
if(isDef(el._enterCb)||el.nodeType!==1){return}
var css=data.css;var type=data.type;var enterClass=data.enterClass;var enterToClass=data.enterToClass;var enterActiveClass=data.enterActiveClass;var appearClass=data.appearClass;var appearToClass=data.appearToClass;var appearActiveClass=data.appearActiveClass;var beforeEnter=data.beforeEnter;var enter=data.enter;var afterEnter=data.afterEnter;var enterCancelled=data.enterCancelled;var beforeAppear=data.beforeAppear;var appear=data.appear;var afterAppear=data.afterAppear;var appearCancelled=data.appearCancelled;var duration=data.duration;var context=activeInstance;var transitionNode=activeInstance.$vnode;while(transitionNode&&transitionNode.parent){context=transitionNode.context;transitionNode=transitionNode.parent;}
var isAppear=!context._isMounted||!vnode.isRootInsert;if(isAppear&&!appear&&appear!==''){return}
var startClass=isAppear&&appearClass?appearClass:enterClass;var activeClass=isAppear&&appearActiveClass?appearActiveClass:enterActiveClass;var toClass=isAppear&&appearToClass?appearToClass:enterToClass;var beforeEnterHook=isAppear?(beforeAppear||beforeEnter):beforeEnter;var enterHook=isAppear?(typeof appear==='function'?appear:enter):enter;var afterEnterHook=isAppear?(afterAppear||afterEnter):afterEnter;var enterCancelledHook=isAppear?(appearCancelled||enterCancelled):enterCancelled;var explicitEnterDuration=toNumber(isObject(duration)?duration.enter:duration);if(false){}
var expectsCSS=css!==false&&!isIE9;var userWantsControl=getHookArgumentsLength(enterHook);var cb=el._enterCb=once(function(){if(expectsCSS){removeTransitionClass(el,toClass);removeTransitionClass(el,activeClass);}
if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,startClass);}
enterCancelledHook&&enterCancelledHook(el);}else{afterEnterHook&&afterEnterHook(el);}
el._enterCb=null;});if(!vnode.data.show){mergeVNodeHook(vnode,'insert',function(){var parent=el.parentNode;var pendingNode=parent&&parent._pending&&parent._pending[vnode.key];if(pendingNode&&pendingNode.tag===vnode.tag&&pendingNode.elm._leaveCb){pendingNode.elm._leaveCb();}
enterHook&&enterHook(el,cb);});}
beforeEnterHook&&beforeEnterHook(el);if(expectsCSS){addTransitionClass(el,startClass);addTransitionClass(el,activeClass);nextFrame(function(){removeTransitionClass(el,startClass);if(!cb.cancelled){addTransitionClass(el,toClass);if(!userWantsControl){if(isValidDuration(explicitEnterDuration)){setTimeout(cb,explicitEnterDuration);}else{whenTransitionEnds(el,type,cb);}}}});}
if(vnode.data.show){toggleDisplay&&toggleDisplay();enterHook&&enterHook(el,cb);}
if(!expectsCSS&&!userWantsControl){cb();}}
function leave(vnode,rm){var el=vnode.elm;if(isDef(el._enterCb)){el._enterCb.cancelled=true;el._enterCb();}
var data=resolveTransition(vnode.data.transition);if(isUndef(data)||el.nodeType!==1){return rm()}
if(isDef(el._leaveCb)){return}
var css=data.css;var type=data.type;var leaveClass=data.leaveClass;var leaveToClass=data.leaveToClass;var leaveActiveClass=data.leaveActiveClass;var beforeLeave=data.beforeLeave;var leave=data.leave;var afterLeave=data.afterLeave;var leaveCancelled=data.leaveCancelled;var delayLeave=data.delayLeave;var duration=data.duration;var expectsCSS=css!==false&&!isIE9;var userWantsControl=getHookArgumentsLength(leave);var explicitLeaveDuration=toNumber(isObject(duration)?duration.leave:duration);if(false){}
var cb=el._leaveCb=once(function(){if(el.parentNode&&el.parentNode._pending){el.parentNode._pending[vnode.key]=null;}
if(expectsCSS){removeTransitionClass(el,leaveToClass);removeTransitionClass(el,leaveActiveClass);}
if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,leaveClass);}
leaveCancelled&&leaveCancelled(el);}else{rm();afterLeave&&afterLeave(el);}
el._leaveCb=null;});if(delayLeave){delayLeave(performLeave);}else{performLeave();}
function performLeave(){if(cb.cancelled){return}
if(!vnode.data.show&&el.parentNode){(el.parentNode._pending||(el.parentNode._pending={}))[(vnode.key)]=vnode;}
beforeLeave&&beforeLeave(el);if(expectsCSS){addTransitionClass(el,leaveClass);addTransitionClass(el,leaveActiveClass);nextFrame(function(){removeTransitionClass(el,leaveClass);if(!cb.cancelled){addTransitionClass(el,leaveToClass);if(!userWantsControl){if(isValidDuration(explicitLeaveDuration)){setTimeout(cb,explicitLeaveDuration);}else{whenTransitionEnds(el,type,cb);}}}});}
leave&&leave(el,cb);if(!expectsCSS&&!userWantsControl){cb();}}}
function checkDuration(val,name,vnode){if(typeof val!=='number'){warn("<transition> explicit "+name+" duration is not a valid number - "+"got "+(JSON.stringify(val))+".",vnode.context);}else if(isNaN(val)){warn("<transition> explicit "+name+" duration is NaN - "+'the duration expression might be incorrect.',vnode.context);}}
function isValidDuration(val){return typeof val==='number'&&!isNaN(val)}
function getHookArgumentsLength(fn){if(isUndef(fn)){return false}
var invokerFns=fn.fns;if(isDef(invokerFns)){return getHookArgumentsLength(Array.isArray(invokerFns)?invokerFns[0]:invokerFns)}else{return(fn._length||fn.length)>1}}
function _enter(_,vnode){if(vnode.data.show!==true){enter(vnode);}}
var transition=inBrowser?{create:_enter,activate:_enter,remove:function remove$$1(vnode,rm){if(vnode.data.show!==true){leave(vnode,rm);}else{rm();}}}:{};var platformModules=[attrs,klass,events,domProps,style,transition];var modules=platformModules.concat(baseModules);var patch=createPatchFunction({nodeOps:nodeOps,modules:modules});if(isIE9){document.addEventListener('selectionchange',function(){var el=document.activeElement;if(el&&el.vmodel){trigger(el,'input');}});}
var directive={inserted:function inserted(el,binding,vnode,oldVnode){if(vnode.tag==='select'){if(oldVnode.elm&&!oldVnode.elm._vOptions){mergeVNodeHook(vnode,'postpatch',function(){directive.componentUpdated(el,binding,vnode);});}else{setSelected(el,binding,vnode.context);}
el._vOptions=[].map.call(el.options,getValue);}else if(vnode.tag==='textarea'||isTextInputType(el.type)){el._vModifiers=binding.modifiers;if(!binding.modifiers.lazy){el.addEventListener('compositionstart',onCompositionStart);el.addEventListener('compositionend',onCompositionEnd);el.addEventListener('change',onCompositionEnd);if(isIE9){el.vmodel=true;}}}},componentUpdated:function componentUpdated(el,binding,vnode){if(vnode.tag==='select'){setSelected(el,binding,vnode.context);var prevOptions=el._vOptions;var curOptions=el._vOptions=[].map.call(el.options,getValue);if(curOptions.some(function(o,i){return!looseEqual(o,prevOptions[i]);})){var needReset=el.multiple?binding.value.some(function(v){return hasNoMatchingOption(v,curOptions);}):binding.value!==binding.oldValue&&hasNoMatchingOption(binding.value,curOptions);if(needReset){trigger(el,'change');}}}}};function setSelected(el,binding,vm){actuallySetSelected(el,binding,vm);if(isIE||isEdge){setTimeout(function(){actuallySetSelected(el,binding,vm);},0);}}
function actuallySetSelected(el,binding,vm){var value=binding.value;var isMultiple=el.multiple;if(isMultiple&&!Array.isArray(value)){false&&false;return}
var selected,option;for(var i=0,l=el.options.length;i<l;i++){option=el.options[i];if(isMultiple){selected=looseIndexOf(value,getValue(option))>-1;if(option.selected!==selected){option.selected=selected;}}else{if(looseEqual(getValue(option),value)){if(el.selectedIndex!==i){el.selectedIndex=i;}
return}}}
if(!isMultiple){el.selectedIndex=-1;}}
function hasNoMatchingOption(value,options){return options.every(function(o){return!looseEqual(o,value);})}
function getValue(option){return'_value'in option?option._value:option.value}
function onCompositionStart(e){e.target.composing=true;}
function onCompositionEnd(e){if(!e.target.composing){return}
e.target.composing=false;trigger(e.target,'input');}
function trigger(el,type){var e=document.createEvent('HTMLEvents');e.initEvent(type,true,true);el.dispatchEvent(e);}
function locateNode(vnode){return vnode.componentInstance&&(!vnode.data||!vnode.data.transition)?locateNode(vnode.componentInstance._vnode):vnode}
var show={bind:function bind(el,ref,vnode){var value=ref.value;vnode=locateNode(vnode);var transition$$1=vnode.data&&vnode.data.transition;var originalDisplay=el.__vOriginalDisplay=el.style.display==='none'?'':el.style.display;if(value&&transition$$1){vnode.data.show=true;enter(vnode,function(){el.style.display=originalDisplay;});}else{el.style.display=value?originalDisplay:'none';}},update:function update(el,ref,vnode){var value=ref.value;var oldValue=ref.oldValue;if(!value===!oldValue){return}
vnode=locateNode(vnode);var transition$$1=vnode.data&&vnode.data.transition;if(transition$$1){vnode.data.show=true;if(value){enter(vnode,function(){el.style.display=el.__vOriginalDisplay;});}else{leave(vnode,function(){el.style.display='none';});}}else{el.style.display=value?el.__vOriginalDisplay:'none';}},unbind:function unbind(el,binding,vnode,oldVnode,isDestroy){if(!isDestroy){el.style.display=el.__vOriginalDisplay;}}};var platformDirectives={model:directive,show:show};var transitionProps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function getRealChild(vnode){var compOptions=vnode&&vnode.componentOptions;if(compOptions&&compOptions.Ctor.options.abstract){return getRealChild(getFirstComponentChild(compOptions.children))}else{return vnode}}
function extractTransitionData(comp){var data={};var options=comp.$options;for(var key in options.propsData){data[key]=comp[key];}
var listeners=options._parentListeners;for(var key$1 in listeners){data[camelize(key$1)]=listeners[key$1];}
return data}
function placeholder(h,rawChild){if(/\d-keep-alive$/.test(rawChild.tag)){return h('keep-alive',{props:rawChild.componentOptions.propsData})}}
function hasParentTransition(vnode){while((vnode=vnode.parent)){if(vnode.data.transition){return true}}}
function isSameChild(child,oldChild){return oldChild.key===child.key&&oldChild.tag===child.tag}
var isNotTextNode=function(c){return c.tag||isAsyncPlaceholder(c);};var isVShowDirective=function(d){return d.name==='show';};var Transition={name:'transition',props:transitionProps,abstract:true,render:function render(h){var this$1=this;var children=this.$slots.default;if(!children){return}
children=children.filter(isNotTextNode);if(!children.length){return}
if(false){}
var mode=this.mode;if(false){}
var rawChild=children[0];if(hasParentTransition(this.$vnode)){return rawChild}
var child=getRealChild(rawChild);if(!child){return rawChild}
if(this._leaving){return placeholder(h,rawChild)}
var id="__transition-"+(this._uid)+"-";child.key=child.key==null?child.isComment?id+'comment':id+child.tag:isPrimitive(child.key)?(String(child.key).indexOf(id)===0?child.key:id+child.key):child.key;var data=(child.data||(child.data={})).transition=extractTransitionData(this);var oldRawChild=this._vnode;var oldChild=getRealChild(oldRawChild);if(child.data.directives&&child.data.directives.some(isVShowDirective)){child.data.show=true;}
if(oldChild&&oldChild.data&&!isSameChild(child,oldChild)&&!isAsyncPlaceholder(oldChild)&&!(oldChild.componentInstance&&oldChild.componentInstance._vnode.isComment)){var oldData=oldChild.data.transition=extend({},data);if(mode==='out-in'){this._leaving=true;mergeVNodeHook(oldData,'afterLeave',function(){this$1._leaving=false;this$1.$forceUpdate();});return placeholder(h,rawChild)}else if(mode==='in-out'){if(isAsyncPlaceholder(child)){return oldRawChild}
var delayedLeave;var performLeave=function(){delayedLeave();};mergeVNodeHook(data,'afterEnter',performLeave);mergeVNodeHook(data,'enterCancelled',performLeave);mergeVNodeHook(oldData,'delayLeave',function(leave){delayedLeave=leave;});}}
return rawChild}};var props=extend({tag:String,moveClass:String},transitionProps);delete props.mode;var TransitionGroup={props:props,beforeMount:function beforeMount(){var this$1=this;var update=this._update;this._update=function(vnode,hydrating){var restoreActiveInstance=setActiveInstance(this$1);this$1.__patch__(this$1._vnode,this$1.kept,false,true);this$1._vnode=this$1.kept;restoreActiveInstance();update.call(this$1,vnode,hydrating);};},render:function render(h){var tag=this.tag||this.$vnode.data.tag||'span';var map=Object.create(null);var prevChildren=this.prevChildren=this.children;var rawChildren=this.$slots.default||[];var children=this.children=[];var transitionData=extractTransitionData(this);for(var i=0;i<rawChildren.length;i++){var c=rawChildren[i];if(c.tag){if(c.key!=null&&String(c.key).indexOf('__vlist')!==0){children.push(c);map[c.key]=c;(c.data||(c.data={})).transition=transitionData;}else if(false){var name,opts;}}}
if(prevChildren){var kept=[];var removed=[];for(var i$1=0;i$1<prevChildren.length;i$1++){var c$1=prevChildren[i$1];c$1.data.transition=transitionData;c$1.data.pos=c$1.elm.getBoundingClientRect();if(map[c$1.key]){kept.push(c$1);}else{removed.push(c$1);}}
this.kept=h(tag,null,kept);this.removed=removed;}
return h(tag,null,children)},updated:function updated(){var children=this.prevChildren;var moveClass=this.moveClass||((this.name||'v')+'-move');if(!children.length||!this.hasMove(children[0].elm,moveClass)){return}
children.forEach(callPendingCbs);children.forEach(recordPosition);children.forEach(applyTranslation);this._reflow=document.body.offsetHeight;children.forEach(function(c){if(c.data.moved){var el=c.elm;var s=el.style;addTransitionClass(el,moveClass);s.transform=s.WebkitTransform=s.transitionDuration='';el.addEventListener(transitionEndEvent,el._moveCb=function cb(e){if(e&&e.target!==el){return}
if(!e||/transform$/.test(e.propertyName)){el.removeEventListener(transitionEndEvent,cb);el._moveCb=null;removeTransitionClass(el,moveClass);}});}});},methods:{hasMove:function hasMove(el,moveClass){if(!hasTransition){return false}
if(this._hasMove){return this._hasMove}
var clone=el.cloneNode();if(el._transitionClasses){el._transitionClasses.forEach(function(cls){removeClass(clone,cls);});}
addClass(clone,moveClass);clone.style.display='none';this.$el.appendChild(clone);var info=getTransitionInfo(clone);this.$el.removeChild(clone);return(this._hasMove=info.hasTransform)}}};function callPendingCbs(c){if(c.elm._moveCb){c.elm._moveCb();}
if(c.elm._enterCb){c.elm._enterCb();}}
function recordPosition(c){c.data.newPos=c.elm.getBoundingClientRect();}
function applyTranslation(c){var oldPos=c.data.pos;var newPos=c.data.newPos;var dx=oldPos.left-newPos.left;var dy=oldPos.top-newPos.top;if(dx||dy){c.data.moved=true;var s=c.elm.style;s.transform=s.WebkitTransform="translate("+dx+"px,"+dy+"px)";s.transitionDuration='0s';}}
var platformComponents={Transition:Transition,TransitionGroup:TransitionGroup};Vue.config.mustUseProp=mustUseProp;Vue.config.isReservedTag=isReservedTag;Vue.config.isReservedAttr=isReservedAttr;Vue.config.getTagNamespace=getTagNamespace;Vue.config.isUnknownElement=isUnknownElement;extend(Vue.options.directives,platformDirectives);extend(Vue.options.components,platformComponents);Vue.prototype.__patch__=inBrowser?patch:noop;Vue.prototype.$mount=function(el,hydrating){el=el&&inBrowser?query(el):undefined;return mountComponent(this,el,hydrating)};if(inBrowser){setTimeout(function(){if(config.devtools){if(devtools){devtools.emit('init',Vue);}else if(false){}}
if(false){}},0);}
__webpack_exports__["a"]=(Vue);}.call(this,__webpack_require__("c8ba")))}),"35d6":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"default",function(){return addStylesToShadowDOM;});function listToStyles(parentId,list){var styles=[]
var newStyles={}
for(var i=0;i<list.length;i++){var item=list[i]
var id=item[0]
var css=item[1]
var media=item[2]
var sourceMap=item[3]
var part={id:parentId+':'+i,css:css,media:media,sourceMap:sourceMap}
if(!newStyles[id]){styles.push(newStyles[id]={id:id,parts:[part]})}else{newStyles[id].parts.push(part)}}
return styles}
function addStylesToShadowDOM(parentId,list,shadowRoot){var styles=listToStyles(parentId,list)
addStyles(styles,shadowRoot)}
function addStyles(styles,shadowRoot){const injectedStyles=shadowRoot._injectedStyles||(shadowRoot._injectedStyles={})
for(var i=0;i<styles.length;i++){var item=styles[i]
var style=injectedStyles[item.id]
if(!style){for(var j=0;j<item.parts.length;j++){addStyle(item.parts[j],shadowRoot)}
injectedStyles[item.id]=true}}}
function createStyleElement(shadowRoot){var styleElement=document.createElement('style')
styleElement.type='text/css'
shadowRoot.appendChild(styleElement)
return styleElement}
function addStyle(obj,shadowRoot){var styleElement=createStyleElement(shadowRoot)
var css=obj.css
var media=obj.media
var sourceMap=obj.sourceMap
if(media){styleElement.setAttribute('media',media)}
if(sourceMap){css+='\n/*# sourceURL='+sourceMap.sources[0]+' */'
css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */'}
if(styleElement.styleSheet){styleElement.styleSheet.cssText=css}else{while(styleElement.firstChild){styleElement.removeChild(styleElement.firstChild)}
styleElement.appendChild(document.createTextNode(css))}}}),"5a74":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);if(typeof window!=='undefined'){var currentScript=window.document.currentScript
if(Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL){var getCurrentScript=__webpack_require__("8875")
currentScript=getCurrentScript()
if(!('currentScript'in document)){Object.defineProperty(document,'currentScript',{get:getCurrentScript})}}
var src=currentScript&&currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
if(src){__webpack_require__.p=src[1]}}
var setPublicPath=(null);var vue_runtime_esm=__webpack_require__("2b0e");const camelizeRE=/-(\w)/g;const camelize=str=>{return str.replace(camelizeRE,(_,c)=>c?c.toUpperCase():'')};const hyphenateRE=/\B([A-Z])/g;const hyphenate=str=>{return str.replace(hyphenateRE,'-$1').toLowerCase()};function getInitialProps(propsList){const res={};propsList.forEach(key=>{res[key]=undefined;});return res}
function injectHook(options,key,hook){options[key]=[].concat(options[key]||[]);options[key].unshift(hook);}
function callHooks(vm,hook){if(vm){const hooks=vm.$options[hook]||[];hooks.forEach(hook=>{hook.call(vm);});}}
function createCustomEvent(name,args){return new CustomEvent(name,{bubbles:false,cancelable:false,detail:args})}
const isBoolean=val=>/function Boolean/.test(String(val));const isNumber=val=>/function Number/.test(String(val));function convertAttributeValue(value,name,{type}={}){if(isBoolean(type)){if(value==='true'||value==='false'){return value==='true'}
if(value===''||value===name){return true}
return value!=null}else if(isNumber(type)){const parsed=parseFloat(value,10);return isNaN(parsed)?value:parsed}else{return value}}
function toVNodes(h,children){const res=[];for(let i=0,l=children.length;i<l;i++){res.push(toVNode(h,children[i]));}
return res}
function toVNode(h,node){if(node.nodeType===3){return node.data.trim()?node.data:null}else if(node.nodeType===1){const data={attrs:getAttributes(node),domProps:{innerHTML:node.innerHTML}};if(data.attrs.slot){data.slot=data.attrs.slot;delete data.attrs.slot;}
return h(node.tagName,data)}else{return null}}
function getAttributes(node){const res={};for(let i=0,l=node.attributes.length;i<l;i++){const attr=node.attributes[i];res[attr.nodeName]=attr.nodeValue;}
return res}
function wrap(Vue,Component){const isAsync=typeof Component==='function'&&!Component.cid;let isInitialized=false;let hyphenatedPropsList;let camelizedPropsList;let camelizedPropsMap;function initialize(Component){if(isInitialized)return
const options=typeof Component==='function'?Component.options:Component;const propsList=Array.isArray(options.props)?options.props:Object.keys(options.props||{});hyphenatedPropsList=propsList.map(hyphenate);camelizedPropsList=propsList.map(camelize);const originalPropsAsObject=Array.isArray(options.props)?{}:options.props||{};camelizedPropsMap=camelizedPropsList.reduce((map,key,i)=>{map[key]=originalPropsAsObject[propsList[i]];return map},{});injectHook(options,'beforeCreate',function(){const emit=this.$emit;this.$emit=(name,...args)=>{this.$root.$options.customElement.dispatchEvent(createCustomEvent(name,args));return emit.call(this,name,...args)};});injectHook(options,'created',function(){camelizedPropsList.forEach(key=>{this.$root.props[key]=this[key];});});camelizedPropsList.forEach(key=>{Object.defineProperty(CustomElement.prototype,key,{get(){return this._wrapper.props[key]},set(newVal){this._wrapper.props[key]=newVal;},enumerable:false,configurable:true});});isInitialized=true;}
function syncAttribute(el,key){const camelized=camelize(key);const value=el.hasAttribute(key)?el.getAttribute(key):undefined;el._wrapper.props[camelized]=convertAttributeValue(value,key,camelizedPropsMap[camelized]);}
class CustomElement extends HTMLElement{constructor(){super();this.attachShadow({mode:'open'});const wrapper=this._wrapper=new Vue({name:'shadow-root',customElement:this,shadowRoot:this.shadowRoot,data(){return{props:{},slotChildren:[]}},render(h){return h(Component,{ref:'inner',props:this.props},this.slotChildren)}});const observer=new MutationObserver(mutations=>{let hasChildrenChange=false;for(let i=0;i<mutations.length;i++){const m=mutations[i];if(isInitialized&&m.type==='attributes'&&m.target===this){syncAttribute(this,m.attributeName);}else{hasChildrenChange=true;}}
if(hasChildrenChange){wrapper.slotChildren=Object.freeze(toVNodes(wrapper.$createElement,this.childNodes));}});observer.observe(this,{childList:true,subtree:true,characterData:true,attributes:true});}
get vueComponent(){return this._wrapper.$refs.inner}
connectedCallback(){const wrapper=this._wrapper;if(!wrapper._isMounted){const syncInitialAttributes=()=>{wrapper.props=getInitialProps(camelizedPropsList);hyphenatedPropsList.forEach(key=>{syncAttribute(this,key);});};if(isInitialized){syncInitialAttributes();}else{Component().then(resolved=>{if(resolved.__esModule||resolved[Symbol.toStringTag]==='Module'){resolved=resolved.default;}
initialize(resolved);syncInitialAttributes();});}
wrapper.slotChildren=Object.freeze(toVNodes(wrapper.$createElement,this.childNodes));wrapper.$mount();this.shadowRoot.appendChild(wrapper.$el);}else{callHooks(this.vueComponent,'activated');}}
disconnectedCallback(){callHooks(this.vueComponent,'deactivated');}}
if(!isAsync){initialize(Component);}
return CustomElement}
var vue_wc_wrapper=(wrap);var api=__webpack_require__("24fb");var addStylesShadow=__webpack_require__("35d6");function normalizeComponent(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var options=typeof scriptExports==='function'?scriptExports.options:scriptExports
if(render){options.render=render
options.staticRenderFns=staticRenderFns
options._compiled=true}
if(functionalTemplate){options.functional=true}
if(scopeId){options._scopeId='data-v-'+scopeId}
var hook
if(moduleIdentifier){hook=function(context){context=context||(this.$vnode&&this.$vnode.ssrContext)||(this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)
if(!context&&typeof __VUE_SSR_CONTEXT__!=='undefined'){context=__VUE_SSR_CONTEXT__}
if(injectStyles){injectStyles.call(this,context)}
if(context&&context._registeredComponents){context._registeredComponents.add(moduleIdentifier)}}
options._ssrRegister=hook}else if(injectStyles){hook=shadowMode?function(){injectStyles.call(this,(options.functional?this.parent:this).$root.$options.shadowRoot)}:injectStyles}
if(hook){if(options.functional){options._injectStyles=hook
var originalRender=options.render
options.render=function renderWithStyleInjection(h,context){hook.call(context)
return originalRender(h,context)}}else{var existing=options.beforeCreate
options.beforeCreate=existing?[].concat(existing,hook):[hook]}}
return{exports:scriptExports,options:options}}
var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"twig-profile",class:'twig-profile--'+_vm.qm_dark_mode},[_c('h3',[_vm._v(_vm._s(_vm.i18n.viewing_profile)+" "+_vm._s(_vm.profileName))]),_c('Profile',{attrs:{"profile":_vm.currentProfile,"parentProfile":_vm.currentProfile,"rootProfile":_vm.currentProfile}}),_c('h3',[_vm._v(_vm._s(_vm.i18n.controls))]),_c('div',{staticClass:"twig-profile__form-part"},[_c('label',{attrs:{"for":"qm-twig-profile-name"}},[_vm._v(_vm._s(_vm.i18n.profile_name))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.profileName),expression:"profileName"}],staticClass:"profileName",attrs:{"id":"qm-twig-profile-name","type":"text"},domProps:{"value":(_vm.profileName)},on:{"input":function($event){if($event.target.composing){return;}_vm.profileName=$event.target.value}}}),(_vm.baseProfile.saved)?_c('button',{attrs:{"disabled":""}},[_vm._v(_vm._s(_vm.i18n.saved))]):_c('button',{on:{"click":_vm.saveProfile}},[_vm._v(_vm._s(_vm.i18n.save_current))])]),_c('div',{staticClass:"twig-profile__form-part"},[_c('label',{attrs:{"for":"qm-twig-profile-selector"}},[_vm._v(_vm._s(_vm.i18n.select_profile))]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedProfile),expression:"selectedProfile"}],attrs:{"id":"qm-twig-profile-selector"},on:{"change":function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val="_value"in o?o._value:o.value;return val});_vm.selectedProfile=$event.target.multiple?$$selectedVal:$$selectedVal[0]}}},[_c('option',{attrs:{"value":"-1"}},[_vm._v(_vm._s(_vm.i18n.current_request))]),_vm._l((_vm.savedProfiles),function(savedProfile,index){return _c('option',{key:index,domProps:{"value":index}},[_vm._v(" "+_vm._s(savedProfile.profileName)+" ")])})],2),_c('button',{on:{"click":_vm.viewProfile}},[_vm._v(_vm._s(_vm.i18n.view))]),_c('button',{attrs:{"disabled":_vm.selectedProfile==='-1'},on:{"click":_vm.removeProfile}},[_vm._v(_vm._s(_vm.i18n.remove))])]),_c('div',{staticClass:"twig-profile__form-part"},[_c('button',{on:{"click":_vm.clearProfiles}},[_vm._v(_vm._s(_vm.i18n.clear_all))])])],1)}
var staticRenderFns=[]
var Profilevue_type_template_id_84e8fb04_render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return(_vm.profile)?_c('div',{staticClass:"profile",class:'profile--'+_vm.profile.type},[_c('span',{staticClass:"profile__name",domProps:{"innerHTML":_vm._s(_vm.profile.file)}}),(_vm.profile.type=='block')?_c('abbr',{attrs:{"title":"block"}},[_vm._v("::"+_vm._s(_vm.profile.name))]):_vm._e(),_c('span',{staticClass:"profile__duration"},[_vm._v("- "+_vm._s((_vm.profile.duration*1000).toFixed(1))+"ms -")]),_c('span',{staticClass:"profile__duration",class:{'profile__duration--high':_vm.getDurationPercentageParent()>33,'profile__duration--medium':_vm.getDurationPercentageParent()>20,'profile__duration--low':_vm.getDurationPercentageParent()<10}},[_vm._v(_vm._s(_vm.getDurationPercentageParent())+"% of parent")]),_c('span',{staticClass:"profile__duration",class:{'profile__duration--high':_vm.getDurationPercentageRoot()>33,'profile__duration--medium':_vm.getDurationPercentageRoot()>20,'profile__duration--low':_vm.getDurationPercentageRoot()<10}},[_vm._v("("+_vm._s(_vm.getDurationPercentageRoot())+"% of total)")]),_vm._l((_vm.profile.profiles),function(childProfile,index){return _c('div',{key:index,staticClass:"profile__children"},[_c('Profile',{attrs:{"profile":childProfile,"parentProfile":_vm.profile,"rootProfile":_vm.rootProfile}})],1)})],2):_vm._e()}
var Profilevue_type_template_id_84e8fb04_staticRenderFns=[]
var Profilevue_type_script_lang_js_=({name:'Profile',props:['profile','parentProfile','rootProfile'],methods:{getDurationPercentageParent(){return(this.profile.duration/this.parentProfile.duration*100).toFixed(1);},getDurationPercentageRoot(){return(this.profile.duration/this.rootProfile.duration*100).toFixed(1);}}});var components_Profilevue_type_script_lang_js_=(Profilevue_type_script_lang_js_);function injectStyles(context){var style0=__webpack_require__("1be2")
if(style0.__inject__)style0.__inject__(context)}
var component=normalizeComponent(components_Profilevue_type_script_lang_js_,Profilevue_type_template_id_84e8fb04_render,Profilevue_type_template_id_84e8fb04_staticRenderFns,false,injectStyles,null,null,true)
var Profile=(component.exports);var Appvue_type_script_lang_js_shadow=({name:'App',props:['profile','qm_dark_mode'],data:()=>{return{i18n:window.qm_twig_profile_l10n.strings,currentProfile:null,savedProfiles:[],profileName:window.qm_twig_profile_l10n.strings.current_request,selectedProfile:'-1'};},methods:{saveProfile(){this.baseProfile.saved=true;this.currentProfile=this.baseProfile;this.currentProfile.profileName=this.profileName;this.savedProfiles.unshift(this.currentProfile);window.localStorage.setItem('qm-twig-profiles',JSON.stringify(this.savedProfiles));},removeProfile(){if(this.selectedProfile==='-1'){return;}
this.savedProfiles.splice(this.selectedProfile,1);window.localStorage.setItem('qm-twig-profiles',JSON.stringify(this.savedProfiles));this.resetProfile();},clearProfiles(){this.savedProfiles=[];window.localStorage.removeItem('qm-twig-profiles');this.resetProfile();},viewProfile(){if(this.selectedProfile==='-1'){this.resetProfile();return;}
this.currentProfile=this.savedProfiles[this.selectedProfile];this.profileName=this.currentProfile.profileName;},resetProfile(){this.currentProfile=this.baseProfile;this.profileName=window.qm_twig_profile_l10n.strings.current_request;this.selectedProfile='-1';}},components:{Profile:Profile},created(){this.baseProfile=JSON.parse(this.profile);this.currentProfile=this.baseProfile;this.savedProfiles=JSON.parse(window.localStorage.getItem('qm-twig-profiles'));if(!this.savedProfiles){this.savedProfiles=[];}}});var src_Appvue_type_script_lang_js_shadow=(Appvue_type_script_lang_js_shadow);function Appshadow_injectStyles(context){var style0=__webpack_require__("2083")
if(style0.__inject__)style0.__inject__(context)}
var Appshadow_component=normalizeComponent(src_Appvue_type_script_lang_js_shadow,render,staticRenderFns,false,Appshadow_injectStyles,null,null,true)
var Appshadow=(Appshadow_component.exports);window.customElements.define('twig-profile',vue_wc_wrapper(vue_runtime_esm["a"],Appshadow))}),"5dee":(function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__("24fb");exports=___CSS_LOADER_API_IMPORT___(false);exports.push([module.i,".twig-profile{font-size:16px;line-height:25px}.twig-profile input,.twig-profile label,.twig-profile select{display:block}.twig-profile__form-part{padding:10px 0}h3+.twig-profile__form-part{padding:0 0 10px}.twig-profile--light{--text-color:#000;--link-color:#00f;--alert-color:#a00;--warning-color:#b33000;--muted-color:#666}.twig-profile--dark{--text-color:#fff;--link-color:#0ff;--alert-color:#f88;--warning-color:#ff4;--muted-color:#bbb}",""]);module.exports=exports;}),"8875":(function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(root,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_FACTORY__=(factory),__WEBPACK_AMD_DEFINE_RESULT__=(typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__)):__WEBPACK_AMD_DEFINE_FACTORY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else{}}(typeof self!=='undefined'?self:this,function(){function getCurrentScript(){var descriptor=Object.getOwnPropertyDescriptor(document,'currentScript')
if(!descriptor&&'currentScript'in document&&document.currentScript){return document.currentScript}
if(descriptor&&descriptor.get!==getCurrentScript&&document.currentScript){return document.currentScript}
try{throw new Error();}
catch(err){var ieStackRegExp=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,ffStackRegExp=/@([^@]*):(\d+):(\d+)\s*$/ig,stackDetails=ieStackRegExp.exec(err.stack)||ffStackRegExp.exec(err.stack),scriptLocation=(stackDetails&&stackDetails[1])||false,line=(stackDetails&&stackDetails[2])||false,currentLocation=document.location.href.replace(document.location.hash,''),pageSource,inlineScriptSourceRegExp,inlineScriptSource,scripts=document.getElementsByTagName('script');if(scriptLocation===currentLocation){pageSource=document.documentElement.outerHTML;inlineScriptSourceRegExp=new RegExp('(?:[^\\n]+?\\n){0,'+(line-2)+'}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*','i');inlineScriptSource=pageSource.replace(inlineScriptSourceRegExp,'$1').trim();}
for(var i=0;i<scripts.length;i++){if(scripts[i].readyState==='interactive'){return scripts[i];}
if(scripts[i].src===scriptLocation){return scripts[i];}
if(scriptLocation===currentLocation&&scripts[i].innerHTML&&scripts[i].innerHTML.trim()===inlineScriptSource){return scripts[i];}}
return null;}};return getCurrentScript}));}),"9017":(function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__("24fb");exports=___CSS_LOADER_API_IMPORT___(false);exports.push([module.i,".profile{color:var(--text-color)}.profile__name a{color:var(--link-color)}.profile__duration{margin-left:.2em}.profile__duration--medium{color:var(--warning-color);font-style:italic}.profile__duration--high{color:var(--alert-color);font-weight:700}.profile__duration--low{color:var(--muted-color)}.profile__children{margin-left:1em;border-left:1px solid var(--text-color);padding-left:1em;position:relative}.profile__children:before{position:absolute;content:\"\";left:0;height:1px;background-color:var(--text-color);width:.8em;display:block;top:.8rem}",""]);module.exports=exports;}),"c8ba":(function(module,exports){var g;g=(function(){return this;})();try{g=g||new Function("return this")();}catch(e){if(typeof window==="object")g=window;}
module.exports=g;}),"c8dc":(function(module,exports,__webpack_require__){var content=__webpack_require__("9017");if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;var add=__webpack_require__("35d6").default
module.exports.__inject__=function(shadowRoot){add("26d0ed18",content,shadowRoot)};}),"f457":(function(module,exports,__webpack_require__){var content=__webpack_require__("5dee");if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;var add=__webpack_require__("35d6").default
module.exports.__inject__=function(shadowRoot){add("fc0952da",content,shadowRoot)};})});
const searchResults=[];var current_url=window.location.origin;var static_url=document.querySelector("meta[name='ssp-url']").getAttribute("content");if(static_url.includes(current_url)){var baseurl=document.querySelector("meta[name='ssp-config-url']").getAttribute("content");var host_name=window.location.hostname;let index_url=baseurl+host_name.split('.').join('-')+'-index.json';let index;function loadIndex(callback){var xobj=new XMLHttpRequest();xobj.overrideMimeType("application/json");xobj.open('GET',index_url,false);xobj.onreadystatechange=function(){if(xobj.readyState==4&&xobj.status=="200"){callback(xobj.responseText);}};xobj.send(null);}
loadIndex(function(response){var json=JSON.parse(response);const index=Object.values(json);for(const value of index){var result={url:value.url,title:value.title,excerpt:value.excerpt,content:value.content,};searchResults.push(result);}});const searchFormNode=document.querySelector('.search-form');const searchInputNode=document.querySelector('.search-input');const autoCompleteNode=document.querySelector('.search-auto-complete');const resultNode=document.querySelector('.result');let input='';let results=[];let selected=-1;let showAutoComplete=false;const fuse=new Fuse(searchResults,{keys:['title','content'],shouldSort:true,threshold:0.5,maxPatternLength:50});function renderAutoComplete(){if(!showAutoComplete||input.length<3||results.length===0){autoCompleteNode.classList.remove('show');return'';}else{autoCompleteNode.classList.add('show');}
return`
    <ul>
      ${results.map((result, index) => `<a href="${result.item.url}"style="text-decoration:none;color:#000000"><li class='auto-complete-item${index === selected ? 'selected' : ''}'><p><b>${result.item.title}</b></br><small>${result.item.excerpt}</small></p></li></a>`).join('')}
    </ul>
  `;}
function handleSearchInput(event){input=event.target.value;results=[];if(input.length>=3){results=fuse.search(input).slice(0,7);}
showAutoComplete=true;autoCompleteNode.innerHTML=renderAutoComplete();}
function updateSearchInput(){if(selected===-1){searchInputNode.value=input;}else{searchInputNode.value=results[selected].title;}
autoCompleteNode.innerHTML=renderAutoComplete();}
function handleSearchKeyDown(event){switch(event.which){case 38:selected=Math.max(--selected,-1);updateSearchInput();break;case 40:selected=Math.min(++selected,results.length-1);showAutoComplete=true;updateSearchInput();break;case 9:showAutoComplete=false;updateSearchInput();break;case 27:selected=-1;showAutoComplete=false;updateSearchInput();break;}}
function handleWindowClick(event){showAutoComplete=false;autoCompleteNode.innerHTML=renderAutoComplete();}
if(document.getElementsByClassName('search-input-container').length>0){document.querySelector('.search-input-container').addEventListener('keydown',handleSearchKeyDown);searchInputNode.addEventListener('input',handleSearchInput);window.addEventListener('click',handleWindowClick);}};