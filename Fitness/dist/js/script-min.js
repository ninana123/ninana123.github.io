window.addEventListener("DOMContentLoaded",()=>{function t(t){document.querySelector(t).classList.add("modal_active"),function(){let t=document.createElement("div");t.classList.add("overlay"),document.body.append(t)}(),document.body.style.overflow="hidden"}function e(t){t.classList.remove("modal_active"),document.querySelector(".overlay").remove(),document.body.style.overflow=""}document.addEventListener("click",o=>{if(o.target.closest("[data-modal=advice]"))o.preventDefault(),t("#advice");else if(o.target.closest("[data-modal=order]")){t("#order"),document.querySelector("#order").querySelector(".modal__subtitle").innerHTML=o.target.closest(".product__block").querySelector(".product__name").innerHTML}else!o.target.closest(".modal__content")&&document.querySelector(".modal_active")?e(document.querySelector(".modal_active")):o.target.closest(".modal__close")&&document.querySelector(".modal_active")&&e(document.querySelector(".modal_active"))}),document.querySelectorAll(".modal").forEach(t=>{document.addEventListener("keydown",o=>{"Escape"===o.code&&t.classList.contains("modal_active")&&e(t)})}),document.addEventListener("submit",e=>{e.preventDefault(),function(e){let o=document.querySelector(".modal_active");o?(o.classList.remove("modal_active"),document.querySelector(e).classList.add("modal_active")):t(e)}(".modal_mini")});const o=new class{constructor(t,...e){this.parent=document.querySelector(t),this.classes=e}addProduct(t,e,o,c,a){let r=document.createElement("div");this.classes.forEach(t=>r.classList.add(t)),r.innerHTML=`\n\t\t\t\t\t<div class="product__inner">\n\t\t\t\t\t\t<div class="product__content">\n\t\t\t\t\t\t\t\t<img class="product__img" src=${t} alt="pulsometer">\n\t\t\t\t\t\t\t\t<div class="product__name">${e}</div>\n\t\t\t\t\t\t\t\t<div class="product__descr">${o}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="product__info product__info_hidden">\n\t\t\t\t\t\t\t\t<ul class="product__info-list">\n\t\t\t\t\t\t\t\t\t<li class="product__info-item">Вы услышите звуковое оповещение о нужном пульсе во время тренировки;</li>\n\t\t\t\t\t\t\t\t\t<li class="product__info-item">Вы увидите информативный графический индикатор целевых тренировочных зон\n\t\t\t\t\t\t\t\t\t\tпульса;</li>\n\t\t\t\t\t\t\t\t\t<li class="product__info-item">Также Вы увидите информацию о расходе калорий за тренировку;</li>\n\t\t\t\t\t\t\t\t\t<li class="product__info-item">Вы сможете посмотреть данные по 10 тренировкам.</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="product__link">Подробнее</a>\n\t\t\t\t\t<div class="product__footer">\n\t\t\t\t\t\t<div class="product__price">\n\t\t\t\t\t\t\t<div class="product__old-price">${c}\n\t\t\t\t\t\t\t\t&#8381;</div>\n\t\t\t\t\t\t\t<div class="product__discount-price">${a}\n\t\t\t\t\t\t\t\t&#8381;</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class="btn product__btn" data-modal="order">купить</button>\n\t\t\t\t\t</div>\n\t\t\t`,this.parent.append(r)}clearCatalog(){this.parent.innerHTML=""}}(".product","product__block"),c=[["images/catalog/img/pulsometer.png","Пульсометр Polar FT1","Для первых шагов в тренировках, основанных на сердечном ритме","4 750","4 500","fitness"],["images/catalog/img/pulsometer.png","Пульсометр Polar FT3","Для первых шагов в тренировках, основанных на сердечном ритме","4 750","4 500","run"],["images/catalog/img/pulsometer.png","Пульсометр Polar FT2","Для первых шагов в тренировках, основанных на сердечном ритме","4 750","4 500","triathlon"],["images/catalog/img/pulsometer.png","Пульсометр Polar FT4","Для первых шагов в тренировках, основанных на сердечном ритме","4 750","4 500","fitness"],["images/catalog/img/pulsometer.png","Пульсометр Polar FT5","Для первых шагов в тренировках, основанных на сердечном ритме","4 750","4 500","fitness"],["images/catalog/img/pulsometer.png","Пульсометр Polar FT6","Для первых шагов в тренировках, основанных на сердечном ритме","4 750","4 500","run"],["images/catalog/img/pulsometer.png","Пульсометр Polar FT8","Для первых шагов в тренировках, основанных на сердечном ритме","4 750","4 500","triathlon"],["images/catalog/img/pulsometer.png","Пульсометр Polar FT7","Для первых шагов в тренировках, основанных на сердечном ритме","4 750","4 500","fitness"],["images/catalog/img/pulsometer.png","Пульсометр Polar FT9","Для первых шагов в тренировках, основанных на сердечном ритме","4 750","4 500","run"]];r(c,document.querySelector(".tab__item_active").getAttribute("data-category"));const a=document.querySelector(".tab");function r(t,e){t.forEach(t=>{e==t[t.length-1]&&o.addProduct(...t)})}a.addEventListener("click",t=>{t.target.closest(".tab__item")&&!t.target.closest(".tab__item_active")&&t.target.closest(".tab__item")&&(a.querySelector(".tab__item_active").classList.remove("tab__item_active"),t.target.classList.add("tab__item_active"),o.clearCatalog(),r(c,t.target.getAttribute("data-category")))}),document.querySelector(".product").addEventListener("click",t=>{if(t.target.closest(".product__link")){t.preventDefault();let e=t.target.closest(".product__block");e.querySelector(".product__content").classList.toggle("product__content_hidden"),e.querySelector(".product__info").classList.toggle("product__info_hidden")}})});