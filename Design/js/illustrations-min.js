window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".illustrations"),t=e.querySelector(".illustrations__wrapper"),i=e.querySelector(".illustrations__block-info"),s=(t.querySelector(".illustrations__arrows"),e.querySelector(".illustrations__cross"));t.addEventListener("click",t=>{"illustrations__block"!=t.target.className||t.target.closest(".illustrations__block_active")||(!function(e="overlay",...t){const i=document.createElement("div"),s=document.body;t.length?i.classList.add(e,...t):i.classList.add(e);s.append(i),s.style.overflow="hidden"}("overlay","overlay__blur"),t.target.classList.add("illustrations__block_active"),e.querySelector(".illustrations__arrows").classList.toggle("illustrations__arrows_hidden"),i.classList.toggle("illustrations__block-info_hidden"),s.classList.toggle("illustrations__cross_hidden"))}),s.addEventListener("click",i=>{!function(e=".overlay"){document.querySelector(e).remove(),document.body.style.overflow=""}(),t.querySelector(".illustrations__block_active").classList.remove("illustrations__block_active"),s.classList.toggle("illustrations__cross_hidden"),e.querySelector(".illustrations__arrows").classList.toggle("illustrations__arrows_hidden"),e.querySelector(".illustrations__block-info").classList.toggle("illustrations__block-info_hidden"),document.querySelector(".fadeIn")&&document.querySelector(".fadeIn").classList.remove("fadeIn")}),i.addEventListener("mouseover",e=>{document.querySelector(".illustrations__layer-info")&&document.querySelector(".illustrations__block_active").querySelector(".illustrations__layer-info").classList.toggle("illustrations__layer-info_show")}),i.addEventListener("mouseout",e=>{document.querySelector(".illustrations__block_active").querySelector(".illustrations__layer-info").classList.toggle("illustrations__layer-info_show")});const a=new class{constructor(e,t){this.designerIllustrations=e,this.parent=t,this.illustrationsLength=this.designerIllustrations.length,this.count=1}addIllustrations(){this.designerIllustrations.forEach((e,t)=>{if(e.length){let t=document.createElement("div");t.classList.add("illustrations__block"),t.innerHTML=`<img src="images/pages/illustrations/img/${e[0]}.jpg" alt="${e[1]}" class="illustrations__img">\n\t\t\t\t<div class="illustrations__layer-info">${e[1]}</div>`,this.parent.append(t)}})}swipeRight(){if(this.count<this.illustrationsLength){let e=document.querySelector(".illustrations__block_active"),t=e.nextElementSibling;t.classList.add("illustrations__block_active"),t.classList.add("fadeIn"),e.classList.remove("illustrations__block_active"),e.classList.contains("fadeIn")&&e.classList.remove("fadeIn"),this.count++}}swipeLeft(){if(1!=this.count){let e=document.querySelector(".illustrations__block_active"),t=e.previousElementSibling;t.classList.add("illustrations__block_active"),t.classList.add("fadeIn"),e.classList.remove("illustrations__block_active"),e.classList.contains("fadeIn")&&e.classList.remove("fadeIn"),this.count--}}}([["Eren Yeager","Eren Yeager"],["Zenitsu Agatsuma","Zenitsu Agatsuma"],["Photo art","Photo art"],["Kugisaki Nobara","Kugisaki Nobara"],["Giyu Tomioka(1)","Giyu Tomioka"],["Me in the Peaky Blinders","Me in the Peaky Blinders"],["Giyu Tomioka","Giyu Tomioka"],["War Hammer Titan","War Hammer Titan"],["Levi Ackerman","Levi Ackerman"],["Eren Sukuna","Eren Sukuna"],["Zero Two","Zero Two"],["Inosuke Hashibira","Inosuke Hashibira"],["Uchiha Sasuke","Uchiha Sasuke"],["Graze the Bad Librarian","Graze the Bad Librarian"],["Giyu Tomioka(2)","Giyu Tomioka"],["Hibou","Hibou"],["Satoru Gojo","Satoru Gojo"],["Shazam!","Shazam!"],["Killua Zoldyck","Killua Zoldyck"],["Tanjiro Kamado","Tanjiro Kamado"],["GRZ banner","GRZ banner"],["Zeke Yeager","Zeke Yeager"],["Chibi Samurai","Chibi Samurai"],["Kakashi Hatake","Kakashi Hatake"],["Genius","Genius"],["Sukuna Ryoumen","Sukuna Ryoumen"],["Killua Zoldyck(1)","Killua Zoldyck"]],t);a.addIllustrations(),document.querySelector("[data-swipe=left]").addEventListener("click",()=>{a.swipeLeft()}),document.querySelector("[data-swipe=right]").addEventListener("click",()=>{a.swipeRight()})});