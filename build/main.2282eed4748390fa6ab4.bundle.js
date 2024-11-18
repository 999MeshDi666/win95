(()=>{"use strict";var e={};function t(e,t,o,n,s,r="mousemove"){const{clientX:c,clientY:d}="mousemove"===r?e:e.touches[0],l=d>window.innerHeight||d<0,i=c>window.innerWidth||c<0;(l||i)&&document.removeEventListener(r,o),t.style.top=d-s+"px",t.style.left=c-n+"px"}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var o=e.g.document;if(!t&&o&&(o.currentScript&&(t=o.currentScript.src),!t)){var n=o.getElementsByTagName("script");if(n.length)for(var s=n.length-1;s>-1&&(!t||!/^http(s?):/.test(t));)t=n[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.p,e.p,e.p,e.p,localStorage.setItem("lang","RU");const o=document.querySelectorAll(".desktop_label"),n=document.querySelectorAll("#desktop_window_header_btns"),s=document.querySelectorAll(".desktop_footer_tab"),r=document.querySelectorAll(".desktop_window_header");function c(e){document.querySelector(`#window_${e}`).style.display="block";const t=document.querySelector(`#footer_tab_${e}`);t.style.display="flex",t.classList.remove("desktop_border_inset")}o.forEach((e=>{let o=!1;const n=e.getAttribute("data-target");let s="";if(n){const r=o=>{t(o,e,r,50,25,s)},d=(t="mousemove")=>{s=t,e.style.zIndex=2,document.addEventListener(t,r)},l=(t="mousemove")=>{document.removeEventListener(t,r),e.style.zIndex=0};e.addEventListener("dblclick",(()=>c(n))),e.addEventListener("touchend",(()=>{if(!o)return o=!0,setTimeout((()=>o=!1),500),!1;c(n)})),e.addEventListener("mousedown",(()=>d("mousemove"))),e.addEventListener("mouseup",(()=>l("mousemove"))),e.addEventListener("touchstart",(e=>d("touchmove"))),e.addEventListener("touchend",(()=>l("touchmove")))}})),r.forEach((e=>{const o=e.getAttribute("data-target"),n=document.querySelector(`#window_${o}`);let s=0,r=0,c="";const d=e=>{t(e,n,d,s,r,c)},l=(e,t="mousemove")=>{const{clientX:o,clientY:l}="mousemove"===t?e:e.touches[0];s=o-n.offsetLeft,r=l-n.offsetTop,c=t,n.style.zIndex=2,document.addEventListener(t,d)},i=(e="mousemove")=>{document.removeEventListener(e,d),n.style.zIndex=0};e.addEventListener("mousedown",(e=>l(e))),e.addEventListener("mouseup",(()=>i("mousemove"))),e.addEventListener("touchstart",(e=>l(e,"touchmove"))),e.addEventListener("touchend",(()=>i("touchmove")))})),n.forEach((e=>{e.addEventListener("click",(t=>function(e,t){e.stopPropagation();const o=e.target.closest("button");if(!o||!t.contains(o))return;const n=o.getAttribute("data-action"),s=t.getAttribute("data-target"),r=document.querySelector(`#window_${s}`),c=document.querySelector(`#window_body_${s}`),d=document.querySelector(`#footer_tab_${s}`);switch(n){case"collapse":r.style.display="none",d.classList.toggle("desktop_border_inset");break;case"resize":r.classList.contains("desktop_window_resized")&&(r.style.top=0,r.style.left=0),r.classList.toggle("desktop_window_resized"),c.classList.toggle("window_body_content_resized");break;default:r.style.top=0,r.style.left=0,r.style.display="none",d.style.display="none",r.classList.remove("desktop_window_resized"),c.classList.remove("window_body_content_resized")}}(t,e)))})),s.forEach((e=>{const t=e.getAttribute("data-target"),o=document.querySelector(`#window_${t}`);e.addEventListener("click",(()=>{e.classList.toggle("desktop_border_inset");const t=e.classList.contains("desktop_border_inset");o.style.display=t?"none":"block"}))}));const d=document.querySelector(".desktop_footer_btn"),l=document.querySelector(".desktop_footer_panel");d.addEventListener("click",(()=>{l.classList.toggle("desktop_footer_panel_hidden")})),document.querySelectorAll(".desktop_footer_panel_content_label").forEach((e=>{const t=e.getAttribute("data-target");e.addEventListener("click",(()=>{c(t)}))}));const i=document.querySelector(".desktop_footer_toolbar_lang_panel"),a=document.querySelector(".desktop_footer_toolbar_lang");a.textContent=localStorage.getItem("lang"),a.addEventListener("click",(()=>{i.classList.toggle("desktop_footer_panel_hidden")})),document.querySelectorAll(".lang_panel_title").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-lang");localStorage.setItem("lang",t),a.textContent=t,i.classList.remove("desktop_footer_panel_hidden")}))}));const u=document.querySelector(".desktop_footer_toolbar_clock");!function e(){const t=(new Date).toLocaleDateString("ru-RU",{hour:"numeric",minute:"numeric",hour12:!1}),o=t.substring(t.indexOf(",")+1,t.length[-1]);u.textContent=o,console.log(o),setInterval(e,6e4)}()})();