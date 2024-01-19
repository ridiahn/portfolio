window.onload = function(){
  //slide();
}

function slide(){
  let list = document.getElementsByClassName("slide")[0];
  let items = list.getElementsByTagName("article");
  let bar = document.createElement("span");  
  bar.className = "slidebar"
  list.appendChild(bar);
  let i = 0;
  const reset = function(){
    for( n = 0; n < items.length; n++){
      items[n].classList.remove("show");
    }
  }
  function sliding(){
    reset();
    items[i].classList.add("show");
    i++;
    if( i == items.length){
      i = 0;
    }
  }

  setInterval(function(){
    sliding();
  }, 3000);
}