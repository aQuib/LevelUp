const menu=document.querySelector('.menu'); const nav=document.querySelector('.navlinks');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.faq-q').forEach(b=>b.addEventListener('click',()=>b.parentElement.classList.toggle('open')));
document.querySelectorAll('[data-add]').forEach(b=>b.addEventListener('click',()=>{b.textContent='Added ✓';setTimeout(()=>b.textContent='Add to Cart',1400)}));
