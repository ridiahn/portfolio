window.onload = function(){
  expenditem();
  online_title();
  //pagnavEvent();
  horizontalThumb();

  //공유하기 버튼 클릭시 나타내기
  // let btnShare = document.getElementsByClassName("page__share")[0];
  // btnShare.addEventListener('click', function(){
  //   this.children[1].classList.toggle("show");
  // });

  let firstActiveItem = document.querySelector(".gallery_onebig").children[0];
  firstActiveItem.classList.add('active')
}



// const toFitScroll = (callback) => {
//   let tick = false

//   return function trigger () {
//     if (tick) {
//       return
//     }
//     tick = true
//     return requestAnimationFrame(function task() {
//         tick = false
//         return callback()
//     })
//   }
// }

// const onScroll = () => {


// }

// window.addEventListener('scroll', toFitScroll(onScroll), { passive : true })

//페이지 네비게이션 두줄 제목 한줄 처리하기 
function online_title(){
  let navTtitle = document.querySelectorAll(".page__nav .pagination a > span");
  Array.from(navTtitle).forEach( e =>{
    let newTxt = editTxt(e.innerHTML);
    e.innerHTML = newTxt;
  });
}

function editTxt(txt){
  txt = txt.replace(/(<br>|<br\/>)/ig, "");
  return txt;
} 

//pop클래스를 가진 요소에게 팝업이벤트가 일어나는 버튼추가
function expenditem(){
  let seletpop = document.getElementsByClassName("pop");
  Array.from(seletpop).forEach( e =>{
    e.append(create_btn("<i class='fas fa-expand-alt'></i> 여기를 클릭하여 크게보기", pop_up));
  });
}

function create_btn(txt, fx){
  let btn = document.createElement("button");
  btn.innerHTML = txt; 
  btn.addEventListener('click', fx);
  return btn
}

let ck_popup = 0;

function pop_up(){
  let poplayer = document.createElement("div");
  poplayer.className= "poplayer";
  poplayer.append(create_btn("닫기", pop_close));
  poplayer.prepend(this.parentNode.children[0].cloneNode());
  document.body.appendChild(poplayer);
  document.body.classList.add("block_scroll");
}

function pop_close(){
  this.parentNode.remove();
  document.body.classList.remove("block_scroll");
}

function horizontalThumb(){
  let hgallery = document.querySelectorAll(".h_th");

  //아이템을 wrap으로 감싸 리턴
  function wrapItems(items, wrapSize){
    let wrap = document.createElement("div");
    wrap.style.width = wrapSize + "px";
    Array.from(items).forEach( e =>{
      wrap.appendChild(e);
    });
    return wrap;
  }
  
  Array.from(hgallery).forEach( e =>{
    let hgalleryItems = e.children;
    let scrollX_width = ( hgalleryItems[0].offsetWidth + 16 )* hgalleryItems.length;
    e.appendChild(wrapItems(hgalleryItems, scrollX_width));
  })
}

