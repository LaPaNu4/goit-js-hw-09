const e=document.querySelector(".form");function t(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.addEventListener("submit",(o=>{o.preventDefault();const n=parseInt(e.delay.value),l=parseInt(e.step.value),s=parseInt(e.amount.value);if(n<=0||l<=0||s<=0)alert("Please fill corect number");else for(let e=1;e<=s;e++){t(e,n+(e-1)*l).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.3114b4f1.js.map