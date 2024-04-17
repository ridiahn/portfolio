window.onload = function(){
  const movingObj = document.querySelector('.movingImg');
  addMousemoveEvent(movingObj)
}

function addMousemoveEvent(item){
  const movingArea = item.parentElement;

  movingArea.addEventListener("mousemove", (e)=>{
    const x = e.offsetX;
    const y = e.offsetY;
    item.style.cssText = "left:"+x+"px;"+"top:"+y+"px;";
  })
}


