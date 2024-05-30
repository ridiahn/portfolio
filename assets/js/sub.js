makeSection();
//remakegalleryCaptions();

//페이지 네비게이션 두줄 제목 한줄 처리하기 
const editTxt = (txt) => {txt = txt.replace(/(<br>|<br\/>)/ig, "")}
function online_title(){
  let navTtitle = document.querySelectorAll(".pagination a > span");
  Array.from(navTtitle).forEach( e =>{
    console.log(e)
    let newTxt = editTxt(e.innerHTML);
    e.innerHTML = newTxt;
  });
}
//online_title();

//markdown > html로 렌더링된 요소들 section 그룹핑 
function makeSection(){
  const contentWapper = document.querySelector("main.page__content");
  let title = document.querySelectorAll("main.page__content  h3[id]");
  let countSection = title.length - 1;
  
  for( i = 0; i <= countSection; i++ ){
    const section = document.createElement('section'); 
    section.append(title[i]);
    let contentElement = contentWapper.children;
    Array.from(contentElement).some( el => {
      if( el.tagName === 'H3' || el.tagName === 'SECTION' ) return true;
      section.append(el);
    })

    contentWapper.append(section);
  }
}


//gallery extend effect
function extendImg(obj){
  let prevActiveItem = obj.closest('figure').querySelector('li.active');
  let extendImg = obj.querySelector('img');
  let ImgUrl = extendImg.getAttribute('src');
  prevActiveItem.classList.remove('active')
  obj.classList.add('active')

  if(ImgUrl){
    obj.closest('figure').style.backgroundImage = `url(${ImgUrl})`;
  }
}

//.gallery img title > fig안으로 caption 위치 변경
function remakegalleryCaptions(){
  let imgCaptions = document.querySelectorAll("figure.gallery img ~ p");
  
  if(imgCaptions){
    Array.from(imgCaptions).forEach( (item, index) =>{
      item.closest('figure').querySelector('figcaption').append(item);
    })
  }
  return;
}

//서브페이지 목차 fixed 토글
const header = document.getElementsByClassName("page__header")[0];
const header_img = document.querySelector(".page__header figure");
const endPoint_header = header.offsetHeight * 0.9;
const toc = document.getElementsByClassName("toc")[0];
const pageAbsoluteY = (el) => {
  return window.pageYOffset + el.getBoundingClientRect().top
} 
const footerPoint = pageAbsoluteY(document.querySelector("#main footer")) - window.innerHeight / 4;
function classOnOff (condition, el, _class){
  return condition ? el.classList.add(_class) : el.classList.remove(_class)
}

function scrollEvents(y){
  classOnOff( y > endPoint_header && y < footerPoint, toc, 'fixed');
  classOnOff( y < endPoint_header, header_img, 'fixed')
}


let tick = false;
window.addEventListener('scroll', function(e){
  let y = Math.floor(this.scrollY)

  if(!tick){
    requestAnimationFrame(() => {
      scrollEvents(y)
      return tick = false
    })
  }
  tick = true;
},{passive: true})

// const scrollUnit = {
//   unit : Math.floor(window.innerHeight) / 2,
//   lastTimeStamp : 0,
//   curTimeStamp : 0,
//   time : function(){
//     let calc =  this.curTimeStamp - this.lastTimeStamp
//     return calc;
//   },
//   y : function(){
//     return this.time() * this.unit;
//   }
// }

// window.addEventListener('wheel', function(e){
//   e.preventDefault();
//   let dir = e.deltaY > 0 ? 1 : -1;
//   scrollUnit.lastTimeStamp = scrollUnit.curTimeStamp;
//   scrollUnit.curTimeStamp = e.timeStamp;
//   scrollEvents(e.pageY);
//   window.scrollBy({left: 0, top:(scrollUnit.unit * dir), behavior:"smooth"});
// }, {passive: false});