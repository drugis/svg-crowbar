!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>u,downloadPng:()=>c,downloadSvg:()=>d});const n="http://www.w3.org/2000/xmlns/",o="http://www.w3.org/2000/svg",i=function(e,{css:t="inline"}={}){if(!(e instanceof SVGElement))throw new Error("SVG element is required");e.setAttribute("version","1.1"),e.removeAttribute("xmlns"),e.removeAttribute("xlink"),e.hasAttributeNS(n,"xmlns")||e.setAttributeNS(n,"xmlns",o),e.hasAttributeNS(n,"xmlns:xlink")||e.setAttributeNS(n,"xmlns:xlink","http://www.w3.org/1999/xlink"),"inline"===t?function(e,t){function n(e){const n=getComputedStyle(e);let o,i,r="";for(let e=0,l=n.length;e<l;e++)o=n[e],i=n.getPropertyValue(o),i!==t.getPropertyValue(o)&&(r+=`${o}:${i};`);e.setAttribute("style",r)}const o=function(e){const t=[];return t.push(e),function e(n){if(n&&n.hasChildNodes()){let o=n.firstChild;for(;o;)1===o.nodeType&&"SCRIPT"!==o.nodeName&&(t.push(o),e(o)),o=o.nextSibling}}(e),t}(e);let i=o.length;for(;i--;)n(o[i])}(e,function(){let e=document.createElementNS(o,"svg");document.body.appendChild(e),e.style.all="initial";const t=getComputedStyle(e);return document.body.removeChild(e),e=null,t}()):"internal"===t&&function(e){const t=document.createElement("style");t.innerHTML=Array.from(document.styleSheets).filter((e=>!e.href||e.href.startsWith(document.location.origin))).map((e=>Array.from(e.cssRules).map((e=>e.cssText)).join(" "))).join(" "),e.prepend(t)}(e);const i=(new XMLSerializer).serializeToString(e),r=e.getBoundingClientRect();return{top:r.top,left:r.left,width:r.width,height:r.height,class:e.getAttribute("class"),id:e.getAttribute("id"),name:e.getAttribute("name"),childElementCount:e.childElementCount,source:'<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'+i}};function r(e){if(!(e instanceof SVGElement))throw new Error("SVG Element is required");return e.getAttribute("id")||e.getAttribute("class")||document.title.replace(/[^a-z0-9]/gi,"-").toLowerCase()||"untitled"}function l(e,t,n){const o=document.createElement("a");document.body.appendChild(o),o.setAttribute("class","svg-crowbar"),o.setAttribute("download",e),o.setAttribute("href",t),o.style.display="none",o.click(),setTimeout((()=>{n&&n(),document.body.removeChild(o)}),10)}const s={debug:!1,fixSource:function(e){return btoa(unescape(encodeURIComponent(e.replace(/[\u00A0-\u2666]/g,(e=>`&#${e.charCodeAt(0)};`)))))},scale:1},d=(e,t,n)=>function(e,t="untitled"){const n=URL.createObjectURL(new Blob([e.source],{type:"text/xml"}));l(`${t}.svg`,n,(()=>URL.revokeObjectURL(n)))}(i(e,n),t||r(e)),u=d,c=(e,t,n)=>function(e,t="untitled",{debug:n=s.debug,fixSource:o=s.fixSource,scale:i=s.scale}=s){const r=document.createElement("canvas"),d=window.devicePixelRatio||1;document.body.appendChild(r),r.setAttribute("id","svg-image"),r.setAttribute("width",e.width*d*i),r.setAttribute("height",e.height*d*i),!1===n&&(r.style.display="none");const u=r.getContext("2d"),c=`data:image/svg+xml;base64,${o(e.source)}`,a=new Image;a.onload=function(){u.scale(d*i,d*i),u.drawImage(a,0,0);const e=r.toDataURL("image/png");!1===n&&l(`${t}.png`,e,(()=>document.body.removeChild(r)))},a.src=c,!0===n&&document.body.appendChild(a)}(i(e,n),t||r(e),n?.downloadPNGOptions);return t})()}));