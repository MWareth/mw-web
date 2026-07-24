
(function(){
  var hdr=document.getElementById('hdr');
  if(hdr) addEventListener('scroll',function(){hdr.classList.toggle('solid',scrollY>window.innerHeight*0.7||document.body.classList.contains('sub'));},{passive:true});
  if(hdr&&document.body.classList.contains('sub'))hdr.classList.add('solid');
  var m=document.getElementById('masonry');
  if(m&&window.GALLERY){
    m.innerHTML=window.GALLERY.map(function(f){return '<figure class="mitem" data-full="img/'+f+'.jpg"><img src="img/'+f+'.jpg" loading="lazy" alt="Marwan Wareth"></figure>';}).join('');
    var lb=document.getElementById('lb'),lbi=lb?lb.querySelector('img'):null;
    if(lb){m.addEventListener('click',function(e){var g=e.target.closest('.mitem');if(g){lbi.src=g.getAttribute('data-full');lb.classList.add('on');}});
      lb.addEventListener('click',function(){lb.classList.remove('on');lbi.src='';});addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on');});}
  }
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.06,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
})();
