online_title();
makeSection();
remakegalleryCaptions();
//extendGalleryimg();


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

//Math.floor(window.innerHeight / 4);
const extendObjs = document.querySelectorAll('figure.zigzag div');
const extendStartPoint = Array.from(extendObjs).map(e => Math.floor(window.pageYOffset + e.getBoundingClientRect().top));
const growthRate = 0.15;
const getScale = window.getComputedStyle(extendObjs[0]).transform.replace(/(matrix\(|\))/g, '');
const setScale = parseInt(getScale.split(',')[0])
let curScale = setScale;
let lastIndex;

const toFitScroll = (callback) => {
  let tick = false
  return function trigger () {
    if (tick) {
      return
    }
    tick = true
    return requestAnimationFrame(function task() {
        tick = false
        return callback()
    }) 
  }
}

function effetExtend(y){
  let extendIndex = extendStartPoint.findIndex(el => el >= y && y > (extendStartPoint[0] / 2));
  if(extendIndex != -1){
    curScale = lastIndex != extendIndex ? setScale : curScale;
    extendObjs[extendIndex].style.transform = `scale(${curScale})`;
    return curScale > 1 ? 1 : Math.floor(curScale += growthRate), lastIndex = extendIndex;;
  }
}

window.addEventListener('scroll', function(){
  toFitScroll(effetExtend(Math.floor(window.scrollY))); 
}, { passive : true })

//.gallery 동적 스타일링
function remakegalleryCaptions(){
  let imgCaptions = document.querySelectorAll("figure.gallery img ~ p");
  if (imgCaptions == null || undefined){
    return;
  }else{
    Array.from(imgCaptions).forEach( (item, index) =>{
      item.closest('figure').querySelector('figcaption').append(item);
    })
  } 
}

// function setActiveImg(url, area){
//   area.style.backgroundImage = `url(${url})`;
// }

// function extendGalleryimg(){
//   const gallery = document.querySelector('figure.gallery')
//   const navItems = gallery.querySelectorAll('li')
  
//   // set active area
//   const activeImgArea = document.createElement('div')
//   activeImgArea.classList.add('active');
//   setActiveImg(navItems[0].children[0].getAttribute('src'), activeImgArea)
//   gallery.prepend(activeImgArea)

//   Array.from(navItems).forEach( el => {
//       el.addEventListener('click', function(){
//         setActiveImg(el.children[0].getAttribute('src'), activeImgArea)
//       })
//     }
//   )
// }

const movingUnit = Math.floor(window.innerHeight / 2);
let pointLast = 0;

const fixToc = document.getElementsByClassName("toc")[0];
function removeFixed(){
  fixToc.classList.remove('fixed');
} 

function ctrlfixed(index){
  return index > 0 && index < pointsIndexs ? addFixed() : removeFixed();
}

// window.addEventListener('wheel', function(e){
//   e.preventDefault();
//   const pointCur = pointLast;
//   const pointCalc = e.deltaY > 0 ? pointCur + 1 : pointCur - 1;
//   const pointNext = pointCalc >= 0 && pointCalc < pointsIndexs ? pointCalc : (pointCalc < 0 ? 0 : pointsIndexs);
//   ctrlfixed(pointNext);
//   //console.log(points, pointsIndexs);
//   window.scrollTo({ left: 0, top: points[pointNext], behavior:"smooth"});
//   pointLast = pointNext;
// }, {passive: false});