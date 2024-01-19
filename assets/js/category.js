
window.onload = function(){
  categoryfilter();
  addHoverModal();
}

function categoryfilter(){
  let tagitems = document.querySelectorAll(".filter li")

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
    let tag = el.textContent; 
    let match = ( key != '전체' && tag.indexOf(key) == -1) ? 'none' : '';
    el.closest('li').style.display = match;
    // activeListtitle(key)
  });
}

function activeListtitle(tag){
  let listTitle = document.querySelector('.list h2')
  listTitle.innerText = tag
};

function makeModal(item){
  const modal = document.createElement('div')
  const title = document.createElement('h3')
  const titleTxt = document.createElement('span')
  titleTxt.innerText = item.querySelector('h3 a').innerText
  const img = item.querySelector('figure')
  const teaser =item.querySelector('figure img.teaser')

  title.append(titleTxt)
  modal.append(title)
  modal.append(item.querySelector('.tags'))
  modal.append(item.querySelector('.categorize'))
  modal.append( item.querySelector('.archive__item-excerpt'))
  modal.append( item.querySelector('.work_date'))
  modal.append(img)
  teaser.naturalHeight - teaser.naturalWidth > 0 || img.children.length > 1 ? img.classList.add('col') : img.classList.add('row');
  modal.classList.add('item_info')

  item.appendChild(modal)
}

function addHoverModal(){
  const items = document.querySelectorAll('.bg_modal');
  Array.from(items).forEach( el => makeModal(el))
}