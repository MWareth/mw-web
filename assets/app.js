
(function(){
  var site=document.getElementById('site');
  // logo swap (dark logo on light skins)
  var lg=document.getElementById('mwLogo');
  if(lg) lg.src = (site&&site.dataset.skin==='noir') ? 'img/logo-light.png' : 'img/logo-dark.png';
  // header solid on scroll
  var hdr=document.getElementById('hdr');
  if(hdr) addEventListener('scroll',function(){hdr.classList.toggle('solid',scrollY>40);},{passive:true});
  // mobile: (nav simple) — role rotator if present
  var rots=document.querySelectorAll('.hero .rot span');
  if(rots.length){var ri=0;setInterval(function(){rots[ri].classList.remove('on');ri=(ri+1)%rots.length;rots[ri].classList.add('on');},2100);}
  // marquee if present
  var marq=document.getElementById('marq');
  if(marq){var w=['Photography','Direction','Film','Colour','Story','Editing'];var one=w.map(function(x){return '<b>'+x+'<span class="s"> ✦ </span></b>';}).join('');marq.innerHTML=one+one+one;}
  // render a masonry from window.GALLERY = [[file,tag],...]
  var m=document.getElementById('masonry');
  if(m && window.GALLERY){
    m.innerHTML=window.GALLERY.map(function(p){return '<figure class="mitem" data-h data-full="img/'+p[0]+'.jpg"><img src="img/'+p[0]+'.jpg" loading="lazy" decoding="async" alt="'+(p[1]||'Marwan Wareth')+'"><span class="mtag">'+(p[1]||'')+'</span></figure>';}).join('');
    // lightbox
    var lb=document.getElementById('lb'), lbi=lb?lb.querySelector('img'):null;
    if(lb){
      m.addEventListener('click',function(e){var f=e.target.closest('.mitem');if(f){lbi.src=f.getAttribute('data-full');lb.classList.add('on');}});
      lb.addEventListener('click',function(){lb.classList.remove('on');lbi.src='';});
      addEventListener('keydown',function(e){if(e.key==='Escape'){lb.classList.remove('on');}});
    }
  }
  // custom cursor (desktop)
  var cur=document.getElementById('cursor');
  var fine=matchMedia('(hover:hover) and (pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(cur&&fine){
    var mx=0,my=0,cx=0,cy=0;
    addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;});
    (function loop(){cx+=(mx-cx)*.2;cy+=(my-cy)*.2;cur.style.transform='translate('+cx+'px,'+cy+'px) translate(-50%,-50%)';requestAnimationFrame(loop);})();
    document.addEventListener('mouseover',function(e){if(e.target.closest('[data-h],a,button,.mitem,.cat'))cur.classList.add('big');});
    document.addEventListener('mouseout',function(e){if(e.target.closest('[data-h],a,button,.mitem,.cat'))cur.classList.remove('big');});
  } else if(cur){cur.style.display='none';}
  // reveal
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.08,rootMargin:'0px 0px -50px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
})();
