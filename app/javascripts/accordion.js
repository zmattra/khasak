Accordion=function(e){function n(){s.addEventListener("click",t),o(),a&&c(a)}function t(e){-1!==e.target.className.indexOf(y)&&(r&&o(),l(e.target.nextElementSibling))}function o(){[].forEach.call(s.querySelectorAll("."+d),function(e){e.style.display="none"})}function l(e){e.style.display="none"!==e.style.display?"none":""}function c(e){r&&o(),s.querySelectorAll("."+d)[e-1].style.display=""}function i(e){s.querySelectorAll("."+d)[e-1].style.display="none"}var s=document.getElementById(e.elem),a=e.open||void 0,r=e.oneOpen||!1,y="o-accordion__title",d="o-accordion__content";n(),this.open=c,this.close=i};