window.onload = function(){
  expenditem();
  online_title();
  pagnavEvent();

  //공유하기 버튼 클릭시 나타내기
  let btnShare = document.getElementsByClassName("page__share")[0];
  btnShare.addEventListener('click', function(){
    this.children[1].classList.toggle("show");
  });
}

//특정 위치에서 페이지 네비게이션 나타내고, 작업목록으로 가는 메뉴추가
function pagnavEvent(){
  let gnb = document.querySelector("#site-nav > ul");
  let menuWorklist = gnb.children[0];
  let pageNav = document.getElementsByClassName("page__nav")[0];
  let chpoint = document.getElementsByClassName("initial-content")[0].getElementsByTagName("header")[0].offsetHeight; 

  var _on = function(){
    pageNav.classList.add("on");
    pageNav.querySelector(".pagination ul").append(menuWorklist);
  }

  var _off = function(){
    pageNav.classList.remove("on");
    gnb.prepend(menuWorklist);
  }

  window.addEventListener('scroll', function(){
    let y =  Math.floor(window.scrollY || document.documentElement.scrollTop);
    if(y > chpoint / 2){
      _on();
    }else{
      _off();
    }
  });
}

//페이지 네비게이션 두줄 제목 한줄 처리하기 
function online_title(){
  let navTtitle = document.querySelector(".page__nav .pagination a > span");
  let newTxt = editTxt(navTtitle.innerHTML);
  navTtitle.innerHTML = newTxt;
}

function editTxt(txt){
  txt = txt.replace(/<br>/ig, "");
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
