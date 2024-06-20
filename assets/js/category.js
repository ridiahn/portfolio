
window.onload = function(){
  categoryfilter();
}

function categoryfilter(){
  let tagitems = document.querySelectorAll(".filter li")

  tagitems.forEach((el, index) =>{
    el.onclick = function(){
      let prevActive = document.querySelector(".filter li.active") || null;
      if(prevActive) prevActive.classList.remove('active');
      el.classList.add('active')
      filterWord = this.innerText.replace(/\d+$/gi,'').replace(/(\n|\s*)/g, ''); 
      reset_list(filterWord, index)
    };
  })
}

function reset_list(key, index){
  let lists = document.querySelectorAll(".list .areas")

  lists.forEach( el =>{
    let tag = el.textContent.replace(/\n|\s*/g, ''); 
    let match = ( index !== 0 && !tag.includes(key)) ? 'none' : '';
    el.closest('li').style.display = match;
  });
}

function ImgflowMouse(item){
  const eventArea = item.parentElement;
  eventArea.addEventListener("mousemove", (e)=>{
    const x = e.offsetX;
    const y = e.offsetY;
    item.style.cssText = "left:"+x+"px;"+"top:"+y+"px;";
  })
}

// const imgs = document.querySelectorAll('.list li .teaser');
// Array.from(imgs).forEach( el => ImgflowMouse(el) );