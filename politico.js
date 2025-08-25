const content=document.getElementById('content');const tocList=document.getElementById('toc-list');
if(content&&tocList){const heads=[...content.querySelectorAll('h2, h3')];
heads.forEach(h=>{if(!h.id){h.id=h.textContent.trim().toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9\-]/g,'')}
const li=document.createElement('li');li.className=h.tagName==='H3'?'toc-sub':'toc-main';
const a=document.createElement('a');a.href=`#${h.id}`;a.textContent=h.textContent;li.appendChild(a);tocList.appendChild(li);});
const links=[...tocList.querySelectorAll('a')];
const io=new IntersectionObserver(es=>{es.forEach(e=>{const link=links.find(a=>a.getAttribute('href')===`#${e.target.id}`);if(link)link.classList.toggle('active',e.isIntersecting&&e.intersectionRatio>0.5);});},{rootMargin:'-40% 0 -55% 0',threshold:[0,1]});
heads.forEach(h=>io.observe(h));}
const bar=document.getElementById('progress-bar');
if(bar&&content){document.addEventListener('scroll',()=>{const top=content.offsetTop;const total=Math.max(1,content.scrollHeight-window.innerHeight);
const scrolled=Math.min(1,Math.max(0,(window.scrollY-top)/total));bar.style.width=(scrolled*100)+'%';});}
document.getElementById('copy-link')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);alert('Link copied');}catch{}});