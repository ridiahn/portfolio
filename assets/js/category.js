
window.onload = function(){
  categoryfilter();
  addHoverModal();
}

function categoryfilter(){
  let tagitems = document.getElementsByClassName("labels")[0].children;
  let tag_all = tagitems[0];

  Array.from(tagitems).forEach( el =>{
    el.onclick = function(){
      filterWord = this.children[0].innerText;
      reset_list(filterWord);
    };
  })
}

function reset_list(key){
  let list = document.querySelectorAll(".archive table .list__item");

  Array.from(list).forEach( el =>{
    let compareWord = el.querySelector("span.tags").innerText;
    if( key == "전체" ){
      el.style.display = "";
    }else if( compareWord.indexOf(key) == -1){
      el.style.display = "none";
    }else{
      el.style.display = "";
    }
  });
}

function makeModal(item){
  const modal = document.createElement('div')
  // const title = document.createElement('h3')
  // title.innerText = item.querySelector('h3 a').innerText
  const description = item.querySelector('.archive__item-excerpt')
  const img = item.querySelector('figure')
 
  modal.append(description)
  if(img.children.length > 1){
    modal.append(img) 
    const imgGrid = Array.from({ length: 4 }, (v, i) => i + 1)
    Array.from(img.children).forEach( el => {
        const thisGrid = Math.floor(Math.random()*imgGrid.length)
        el.classList.add('img_position'+`${imgGrid[thisGrid]}`)
        imgGrid.splice(thisGrid, 1);
      } 
    )
  }else{
    img.children[0].classList.add('img_position1')
    modal.append(img)
  }
  
  modal.classList.add('item_info')

  item.appendChild(modal)
}

function addHoverModal(){
  const items = document.querySelectorAll('.bg_modal');
  Array.from(items).forEach( el => makeModal(el))
}