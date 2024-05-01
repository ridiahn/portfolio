online_title();
makeSection();
//remakegalleryCaptions();

//페이지 네비게이션 두줄 제목 한줄 처리하기 
const editTxt = (txt) => {txt = txt.replace(/(<br>|<br\/>)/ig, "")}
function online_title(){
  let navTtitle = document.querySelectorAll(".page__nav .pagination a > span");
  Array.from(navTtitle).forEach( e =>{
    let newTxt = editTxt(e.innerHTML);
    e.innerHTML = newTxt;
  });
}

//markdown > html로 렌더링된 요소들 section 그룹핑 
function makeSection(){
  const contentWapper = document.querySelector("main.page__content");
  let title = document.querySelectorAll("main.page__content  h3[id]");
  let countSection = title.length - 1;
  
  for( i = 0; i <= countSection; i++ ){
    let section = document.createElement('section'); 
    section.append(title[i]);
    let contentElement = contentWapper.children;
    Array.from(contentElement).some( el => {
      if( el.tagName === 'H3' || el.tagName === 'SECTION' ) return true;
      section.append(el);
    })

    contentWapper.append(section);
  }
}

//.gallery img title > fig안으로 caption 위치 변경
function remakegalleryCaptions(){
  let imgCaptions = document.querySelectorAll("figure.gallery img ~ div");
  
  if(imgCaptions){
    Array.from(imgCaptions).forEach( (item, index) =>{
      item.closest('figure').querySelector('figcaption').append(item);
    })
  }
  return;
}

//scroll gallery
const pageAbsoluteY = (el) => {
  return window.pageYOffset + el.getBoundingClientRect().top
} 
function SetPoints(Objs){
  this.itemStartPoints =  Array.from(Objs).map(el => Math.floor( pageAbsoluteY(el) + (el.offsetHeight / 2)))
  this.areaStart = Math.floor(Objs[0].getBoundingClientRect().top - window.innerHeight / 4)
  this.areaEnd = this.itemStartPoints[this.itemStartPoints.length - 1]
}
const extendObjs = document.querySelectorAll('figure.zigzag div');
const extendPoint = extendObjs.length > 0 ? new SetPoints(extendObjs) : null;

//scroll gallery extend effect
let lastIndex;
function effetExtend(y){
  let extendIndex = extendPoint.itemStartPoints.findIndex(el => el >= y );
  if(lastIndex !== extendIndex){
    extendObjs[extendIndex].classList.add('extend');
    return lastIndex = extendIndex;
  }
}

//서브페이지 목차 fixed 토글
const vh100 = window.innerHeight;
const toc = document.getElementsByClassName("toc")[0];
const footerPoint = pageAbsoluteY(document.querySelector("#main footer")) - window.innerHeight / 4;
function classOnOff (condition, el, _class){
  return condition ? el.classList.add(_class) : el.classList.remove(_class)
}
function scrollEvents(y){
  if(extendObjs.length > 0 && y >=  extendPoint.areaStart && y < extendPoint.areaEnd) effetExtend(y)
  classOnOff( y > vh100 && y < footerPoint, toc, 'fixed')
}

//window scroll event
let tick = false;
window.addEventListener('scroll', function(){
  let y = Math.floor(window.scrollY)

  if(!tick){
    requestAnimationFrame(() => {
      scrollEvents(y)
      return tick = false
    })
  }
  tick = true;
},{passive: true})


// window.addEventListener('wheel', function(e){
//   e.preventDefault();
//   const dir = e.deltaY > 0 ? 1 : -1; 
//   window.scrollBy({left: 0, top:Math.floor(window.innerHeight * dir), behavior:"smooth"});
// }, {passive: false});