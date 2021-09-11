
window.onload = function(){
  addfilterEvent();
}

function addfilterEvent(){
  let tagitems = document.getElementsByClassName("taxonomy__index")[0].getElementsByTagName("ul")[0].children;
  let tag_all = tagitems[0];

  Array.from(tagitems).forEach( el =>{
    el.onclick = function(){
      filterWord = this.children[0].children[0].innerText;
      reset_list(filterWord);
    };
  })
}

function reset_list(key){
  let list = document.querySelectorAll(".archive > ul.list > li");

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

