const e=document.getElementById("mobileToggle"),t=document.getElementById("mobile-menu");e.addEventListener("click",(n=>{const l=e.querySelectorAll("svg");t.classList.toggle("hidden"),l.forEach((e=>{e.classList.contains("block")?e.classList.replace("block","hidden"):e.classList.replace("hidden","block")}))}));const n=document.getElementById("quote__components");n&&n.addEventListener("click",(e=>{const t=e.target.closest("H2");if(!t)return;t.nextElementSibling.toggleAttribute("hidden")}));const l=document.getElementById("form__quote-add");l.getElementsByTagName("button")[1].addEventListener("click",(e=>{e.preventDefault(),o(l.elements)}));const o=e=>{const t={};for(let n=0;n<e.length;n++){const l=e[n];l.name&&(t[l.name]=l.value.trim())}return console.log("quoteObject",t),!1};l.addEventListener("submit",(e=>{e.preventDefault(),o()}));
