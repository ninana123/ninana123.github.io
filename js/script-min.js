window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header__hamburger"),t=document.querySelector(".header__menu"),d=document.querySelectorAll("[data-submenu]"),o=document.querySelector(".modal"),r=document.querySelector("[data-modal]");function a(){let e=document.createElement("div");e.classList.add("overlay"),document.body.append(e),document.body.style.overflow="hidden"}e.addEventListener("click",d=>{e.classList.toggle("header__hamburger_active"),t.classList.toggle("header__menu_active"),document.querySelector(".overlay")?(document.querySelector(".overlay").remove(),document.body.style.overflow=""):a()}),d.forEach(e=>{e.addEventListener("click",e=>{e.target.querySelector(".header__submenu").classList.toggle("header__submenu_active")})}),r.addEventListener("click",e=>{o.classList.add("modal_active"),a()})});