(function(){
  var shell=document.querySelector('.shell');
  if(shell){
    try{ if(localStorage.getItem('navClosed')==='1') shell.classList.add('collapsed'); }catch(e){}
    document.querySelectorAll('[data-nav-toggle]').forEach(function(b){
      b.addEventListener('click',function(){
        var c=shell.classList.toggle('collapsed');
        try{ localStorage.setItem('navClosed', c?'1':'0'); }catch(e){}
      });
    });
  }
  var seg=document.querySelectorAll('.seg button');
  seg.forEach(function(b){
    b.addEventListener('click',function(){
      seg.forEach(function(x){ x.setAttribute('aria-pressed', x===b?'true':'false'); });
      document.querySelectorAll('.view').forEach(function(v){ v.hidden = v.id!==b.dataset.view; });
    });
  });
})();
(function(){
  var c=document.querySelector('.proj.crystal'); if(!c) return;
  var h=new Date().getHours();
  var S={
    morning:['#FBD3B0','#F7E7B8','#CDE9D4','#7FB06A','#6FA050','#537E3E','#FFE7A8','#FBC77F','24%','26%','#2E2416','#6B5B44'],
    day:['#BFE8DA','#F4E3A6','#F0C978','#6FA050','#5C8C48','#4F7A3D','#FFF0B8','#F4D06A','80%','20%','#2E2416','#6B5B44'],
    dusk:['#6E5C99','#C77E86','#EFB65A','#4A5A46','#39472F','#293722','#FFD98A','#E98A5A','76%','30%','#FBEFD9','#E7D6C0'],
    night:['#1E2A50','#354067','#5A5686','#25321F','#1E2A1A','#161F14','#F3F1E6','#AEB6E0','78%','22%','#F5ECDA','#C9BBD4']
  };
  var k=h>=5&&h<11?'morning':h>=11&&h<17?'day':h>=17&&h<21?'dusk':'night';
  var names=['--s1','--s2','--s3','--h1','--h2','--h3','--orb','--glow','--ox','--oy','--sink','--ssub'];
  S[k].forEach(function(v,i){ c.style.setProperty(names[i],v); });
})();
