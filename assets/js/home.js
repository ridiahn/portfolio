window.onload = function(){
  //주요작업 이미지 여러개일 경우 별도 class 부여
  const mainWorksImgs = document.querySelectorAll('ul.mainWorks li figure')
  mainWorksImgs.forEach(el => {
    if(el.children.length > 1) el.classList.add('gallery')
  })

  const movingObjs = document.querySelectorAll('.movingImg');
  movingObjs.forEach(el =>{
    const adjustmentX = el.offsetWidth / 2;
    const adjustmentY = el.offsetHeight;
    addMousemoveEvent(el, adjustmentX, adjustmentY)
  })
}

function addMousemoveEvent(item, adjX, adjY){
  item.parentElement.addEventListener("mousemove", (e)=>{
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    item.style.left = mouseX - adjX + 'px';
    item.style.top = mouseY - adjY + 'px';
  })
}


