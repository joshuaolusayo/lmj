(this.webpackJsonplmj=this.webpackJsonplmj||[]).push([[15],{192:function(e,t,o){e.exports=function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=(n(o(1)),o(6)),r=n(a),s=n(o(7)),c=n(o(8)),l=n(o(9)),d=n(o(10)),u=n(o(11)),f=n(o(14)),m=[],h=!1,p={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},b=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(h=!0),h)return m=(0,u.default)(m,p),(0,d.default)(m,p.once),m},g=function(){m=(0,f.default)(),b()},v=function(){m.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},y=function(e){return!0===e||"mobile"===e&&l.default.mobile()||"phone"===e&&l.default.phone()||"tablet"===e&&l.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){p=i(p,e),m=(0,f.default)();var t=document.all&&!window.atob;return y(p.disable)||t?v():(p.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),p.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",p.easing),document.querySelector("body").setAttribute("data-aos-duration",p.duration),document.querySelector("body").setAttribute("data-aos-delay",p.delay),"DOMContentLoaded"===p.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?b(!0):"load"===p.startEvent?window.addEventListener(p.startEvent,(function(){b(!0)})):document.addEventListener(p.startEvent,(function(){b(!0)})),window.addEventListener("resize",(0,s.default)(b,p.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(b,p.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)((function(){(0,d.default)(m,p.once)}),p.throttleDelay)),p.disableMutationObserver||c.default.ready("[data-aos]",g),m)};e.exports={init:w,refresh:b,refreshHard:g}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e,t,o){function n(t){var o=p,n=b;return p=b=void 0,k=t,v=e.apply(n,o)}function a(e){return k=e,y=setTimeout(d,t),N?n(e):v}function r(e){var o=t-(e-w);return z?x(o,g-(e-k)):o}function c(e){var o=e-w;return void 0===w||o>=t||o<0||z&&e-k>=g}function d(){var e=O();return c(e)?u(e):void(y=setTimeout(d,r(e)))}function u(e){return y=void 0,M&&p?n(e):(p=b=void 0,v)}function f(){void 0!==y&&clearTimeout(y),k=0,p=w=b=y=void 0}function m(){return void 0===y?v:u(O())}function h(){var e=O(),o=c(e);if(p=arguments,b=this,w=e,o){if(void 0===y)return a(w);if(z)return y=setTimeout(d,t),n(w)}return void 0===y&&(y=setTimeout(d,t)),v}var p,b,g,v,y,w,k=0,N=!1,z=!1,M=!0;if("function"!=typeof e)throw new TypeError(l);return t=s(t)||0,i(o)&&(N=!!o.leading,g=(z="maxWait"in o)?j(s(o.maxWait)||0,t):g,M="trailing"in o?!!o.trailing:M),h.cancel=f,h.flush=m,h}function n(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(l);return i(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),o(e,t,{leading:a,maxWait:t,trailing:r})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||a(e)&&w.call(e)==u}function s(e){if("number"==typeof e)return e;if(r(e))return d;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=h.test(e);return o||p.test(e)?b(e.slice(2),o?2:8):m.test(e)?d:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",d=NaN,u="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,p=/^0o[0-7]+$/i,b=parseInt,g="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,y=g||v||Function("return this")(),w=Object.prototype.toString,j=Math.max,x=Math.min,O=function(){return y.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e,t,o){function i(t){var o=p,n=b;return p=b=void 0,k=t,v=e.apply(n,o)}function a(e){return k=e,y=setTimeout(d,t),N?i(e):v}function s(e){var o=t-(e-O);return z?j(o,g-(e-k)):o}function l(e){var o=e-O;return void 0===O||o>=t||o<0||z&&e-k>=g}function d(){var e=x();return l(e)?u(e):void(y=setTimeout(d,s(e)))}function u(e){return y=void 0,M&&p?i(e):(p=b=void 0,v)}function f(){void 0!==y&&clearTimeout(y),k=0,p=O=b=y=void 0}function m(){return void 0===y?v:u(x())}function h(){var e=x(),o=l(e);if(p=arguments,b=this,O=e,o){if(void 0===y)return a(O);if(z)return y=setTimeout(d,t),i(O)}return void 0===y&&(y=setTimeout(d,t)),v}var p,b,g,v,y,O,k=0,N=!1,z=!1,M=!0;if("function"!=typeof e)throw new TypeError(c);return t=r(t)||0,n(o)&&(N=!!o.leading,g=(z="maxWait"in o)?w(r(o.maxWait)||0,t):g,M="trailing"in o?!!o.trailing:M),h.cancel=f,h.flush=m,h}function n(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||i(e)&&y.call(e)==d}function r(e){if("number"==typeof e)return e;if(a(e))return l;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var o=m.test(e);return o||h.test(e)?p(e.slice(2),o?2:8):f.test(e)?l:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",l=NaN,d="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,h=/^0o[0-7]+$/i,p=parseInt,b="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,v=b||g||Function("return this")(),y=Object.prototype.toString,w=Math.max,j=Math.min,x=function(){return v.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){"use strict";function o(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1){if((n=e[t]).dataset&&n.dataset.aos)return!0;if(n.children&&o(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!n()}function a(e,t){var o=window.document,i=new(n())(r);s=t,i.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function r(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(o(t.concat(n)))return s()}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:i,ready:a}},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){o(this,e)}return i(e,[{key:"phone",value:function(){var e=n();return!(!a.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!s.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,i=window.innerHeight;e.forEach((function(e,a){o(e,i+n,t)}))};t.default=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(o(12)),a=function(e,t){return e.forEach((function(e,o){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)})),e};t.default=a},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(o(13)),a=function(e,t){var o=0,n=0,a=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),o=(0,i.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=a/2;break;case"bottom-center":o+=a/2+e.offsetHeight;break;case"center-center":o+=a/2+e.offsetHeight/2;break;case"top-top":o+=a;break;case"bottom-top":o+=e.offsetHeight+a;break;case"center-top":o+=e.offsetHeight/2+a}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),o+n};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=o}])},245:function(e,t,o){"use strict";o.r(t);var n=o(1),i=o(0),a=o(192),r=o.n(a);t.default=function(){return Object(i.useEffect)((function(){r.a.init({duration:500,once:!0})})),Object(n.jsxs)("div",{className:"container-fluid px-0 overflow-x-hidden",children:[Object(n.jsx)("div",{className:"bg-primary meet",children:Object(n.jsx)("h1",{className:"text-center font-weight-bold text-light mb-0 py-5",children:"Meet LMJ"})}),Object(n.jsxs)("div",{className:"container z-1",children:[Object(n.jsx)("img",{"data-aos":"zoom-in",className:"coverImg mb-3",src:"/images/lmj003.JPG",alt:"LMJ at office",loading:"lazy"}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"Olamijuwonlo is an astute business professional highly skilled in strategic planning, establishing priorities, delegating tasks, and motivating teams. He is a visionary leader with strong persuasive instincts and extensive knowledge of local and international politics. He is not only motivated, versatile, and organized with strong work ethics, but also a social influencer passionate about the plight of the common people of the society."}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"As a committed patriot, he has embarked on the mission of transforming lives by being a pacesetter and philanthropist who is conscious of the education of this generation. He believes education can be a strong leverage for anyone who desires to make a change and contribute meaningfully to the progress and development of their local community and the nation at large."}),Object(n.jsxs)("div",{className:"row align-items-center my-6",children:[Object(n.jsxs)("div",{className:"col-lg-8",children:[Object(n.jsx)("h2",{className:"font-weight-bold",children:"Background"}),Object(n.jsxs)("p",{"data-aos":"fade-right",children:[Object(n.jsx)("span",{className:"font-weight-bold",children:"Olamijuwonlo Alao-Akala"})," hails from Ogbomoso, a city in Oyo state. He was born on the 9th of September into the family of His Excellency, Otunba Christopher Adebayo Alao-Akala, the former executive governor of Oyo state."]}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"At a young age, he developed an interest in activities like reading, participation in seminars and developmental programs or workshops, Golf, Basketball, Swimming, and Research. He was able to manage all these activities while still in school. He was able to learn how to multitask efficiently from a young age."})]}),Object(n.jsx)("div",{className:"col-lg-4 d-flex justify-content-center align-items-center d-b4",children:Object(n.jsx)("img",{"data-aos":"zoom-in",className:"rounded-circle abtImg d-block mx-auto",src:"/images/lmj-with-siblings-1.jpeg",alt:"LMJ with siblings",loading:"lazy"})})]}),Object(n.jsxs)("div",{className:"row align-items-center my-6",children:[Object(n.jsxs)("div",{className:"col-lg-8",children:[Object(n.jsx)("h2",{className:"font-weight-bold",children:"Education"}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"He started his elementary education at the age of 4 at the St Mary Private School, Lagos Island. He proceeded to Federal Government College, Ogbomoso for his junior secondary school. He later proceeded to Rainbow College, Surulere, Lagos State for his secondary school leaving certificate in 2001. He enrolled in Covenant University where he studied Computer Engineering. Due to his curiosity to be a problem solver, he enrolled in Lead City University, Ibadan, Oyo state to study Computer & Information Sciences where he bagged his Bachelor of Science degree."}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"He later proceeded to the University of Buckingham, the United Kingdom for his master's degree where he studied Service Management. This helped to prepare him for Service Marketing, Operations, Leadership, Finances, and Project Management. He bagged his master's degree in 2011."}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"He emerged as the winner in the Automotive Sector Simulation at Buckingham Business School, London in 2010."})]}),Object(n.jsx)("div",{className:"col-lg-4 d-flex justify-content-center align-items-center",children:Object(n.jsx)("img",{"data-aos":"zoom-in",className:"rounded-circle abtImg d-block mx-auto",src:"/images/lmj005.JPG",alt:"LMJ",loading:"lazy"})})]}),Object(n.jsxs)("div",{className:"row align-items-center my-6",children:[Object(n.jsxs)("div",{className:"col-lg-8",children:[Object(n.jsx)("h2",{className:"font-weight-bold",children:"Marital life"}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"He was engaged to Hadiza Okoya, the daughter of the foremost industrialist Chief Rasaq Akanni Okoya who is also the Aare of Lagos and the founder and chaiman of Eleganza group of companies. The engagement culminated into marriage as Olamijuwonlo finally tied the knot with Mrs Hadiza Alao-Akala (nee Okoya) on April 20, 2014."})]}),Object(n.jsx)("div",{className:"col-lg-4 d-flex justify-content-center align-items-center d-b4",children:Object(n.jsx)("img",{"data-aos":"zoom-in",className:"rounded-circle abtImg d-block mx-auto",src:"/images/lmj-wife.jpg",alt:"LMJ with his wife",loading:"lazy"})})]}),Object(n.jsxs)("div",{className:"row align-items-center my-6",id:"business",children:[Object(n.jsxs)("div",{className:"col-lg-8",children:[Object(n.jsx)("h2",{className:"font-weight-bold",children:"Business Career"}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"He made his entry into the business world in 2011 when he was appointed as the Business Development Executive at Tulcan Energy Resources Limited, Victoria Island, Lagos state."}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"Due to his experiences and training, he is currently the Chairman of Parrot FM Radio Station, Ogbomoso, Oyo State. He is also the Chief Executive Officer of TDB Global Venture whose headquarters is located in Ikoyi, Lagos State."}),Object(n.jsxs)("p",{"data-aos":"fade-right",children:["He loves farming and investing in Agriculture generally. He has farmlands where he practices crop production, livestock rearing, and Agro real estate"," ",Object(n.jsx)("a",{className:"text-primary",href:"//umera.ng",target:"_blank",rel:"noreferrer",children:"Agro real estate"}),"."]})]}),Object(n.jsx)("div",{className:"col-lg-4 d-flex justify-content-center align-items-center",children:Object(n.jsx)("img",{"data-aos":"zoom-in",className:"rounded-circle abtImg d-block mx-auto",src:"/images/lmj004.JPG",alt:"LMJ at office",loading:"lazy"})})]}),Object(n.jsxs)("div",{className:"row align-items-center my-6",id:"politics",children:[Object(n.jsxs)("div",{className:"col-lg-8",children:[Object(n.jsx)("h2",{className:"font-weight-bold",children:"Political Career"}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"As a youth with a passion to see a change in the ways things are handled in the political sector, Olamijuwonlo dived into politics in order to take responsibility and bring about the desired change in the community. His topmost priority is to ensure that the economy of the community is boosted and the need of the citizens especially the workers, pupils, and students are well taken care of."}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"While serving as the Executive Chairman of the Ogbomoso North Local Government, his topmost priority was the interest of the citizens. This was made manifested through the various structures he put in place and different innovative and empowerment programs he organized where a lot of citizens were trained and empowered to be their own boss."}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"Some of his achievements include the procuring of tractors, fertilizers, among other farm machines and equipment so as to ensure the citizens engage in activities that feed the community. His investment in the Agricultural sector helped to boost the availability of agricultural produce in the community which in turn helps to keep the economy thriving."})]}),Object(n.jsx)("div",{className:"col-lg-4 d-flex justify-content-center align-items-center d-b4",children:Object(n.jsx)("img",{"data-aos":"zoom-in",className:"rounded-circle abtImg d-block mx-auto",src:"/images/lmj006.JPG",alt:"LMJ political career",loading:"lazy"})})]}),Object(n.jsxs)("div",{className:"row align-items-center my-6",id:"philanthropy",children:[Object(n.jsxs)("div",{className:"col-lg-8",children:[Object(n.jsx)("h2",{className:"font-weight-bold",children:"Philanthropic Service"}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"Hon. Olamijuwonlo Alao-Akala has committed himself to help people before, during, and after his service as the Executive Chairman of Ogbomoso North Local Government. He strongly believes in the need to give back to society and invest in the upcoming generation so as to raise more responsible and mature citizens who will work together to ensure the progress and the development of the community."}),Object(n.jsx)("p",{"data-aos":"fade-right",children:"Through his foundation, Olamijuwonlo Foundation, Hon Olamijuwonlo Alao-Akala has been able to reach out to the less privileged citizens, kids, and students in order to ensure they have quality education. He has also been able to help a few small-scale businesses with funds in order to keep their businesses growing."})]}),Object(n.jsx)("div",{className:"col-lg-4 d-flex justify-content-center align-items-center",children:Object(n.jsx)("img",{"data-aos":"zoom-in",className:"rounded-circle abtImg d-block mx-auto",src:"/images/lmj03.jpg",alt:"LMJ attending to people's needs",loading:"lazy"})})]})]})]})}}}]);