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
