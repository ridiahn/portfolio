
window.onload = function(){
  categoryfilter();
  addHoverModal();
}

function categoryfilter(){
  let tagitems = document.querySelectorAll(".filter li")
  let tag_all = tagitems[0]

  tagitems.forEach( el =>{
    el.onclick = function(){
      let prevActive = document.querySelector(".filter li.active");
      prevActive.classList.remove('active');
      el.classList.add('active')
      filterWord = this.innerText.replace(/\d+$/gi,'')
      reset_list(filterWord)
    };
  })
}

function reset_list(key){
  let lists = document.querySelectorAll(".tags")

  lists.forEach( (el, i) =>{
    let tags = el.textContent; 
    console.log(key)
    let match = ( key != '전체' && tags.indexOf(key) == -1) ? 'none' : '';
    el.closest('.grid__item').style.display = match;
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
        imgGrid.splice(thisGrid, 1)
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