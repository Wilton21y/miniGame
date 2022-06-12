var play=document.getElementById('p1');
var obj=document.getElementById('obj');
   
  function pular(){
    play.classList.add('jumpUp');
    
    setTimeout( ()=>{
      play.classList.remove('jumpUp');
    },500);
  }
  const loop=setInterval( ()=>{
    const objPosition=obj.offsetLeft;
    const playPostio= +window.getComputedStyle(play).bottom.replace('px','');
    
    if(objPosition <=99 && objPosition > 0 && playPostio < 75){
      
      obj.style.animation='none';
      obj.style.left=objPosition+'px';
      
      play.style.animation='none';
      play.style.bottom=playPostio+'px'
      
     play.src='img_game/matio_game_over.png';
     play.style.width='80px';
     play.style.height='80px';
     play.style.margin='5px';
      clearTimeout(loop);
      window.removeEventListener(pular)
    }
  });
window.addEventListener('touchstart', pular);
