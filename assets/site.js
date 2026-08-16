
document.querySelectorAll('[data-tabs]').forEach(w=>{
 const buttons=w.querySelectorAll('button[data-tab]');
 const panels=w.querySelectorAll('[data-panel]');
 buttons.forEach(b=>b.addEventListener('click',()=>{
   buttons.forEach(x=>x.classList.remove('active')); panels.forEach(x=>x.hidden=true);
   b.classList.add('active'); const p=w.querySelector(`[data-panel="${b.dataset.tab}"]`); if(p)p.hidden=false;
 }));
});
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
