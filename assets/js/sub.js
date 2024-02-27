online_title();
makeSection();
remakegalleryCaptions();
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

function remakegalleryCaptions(){
  let imgCaptions = document.querySelectorAll("figure img ~ p");
  if (imgCaptions == null || undefined){
    return;
  }else{
    Array.from(imgCaptions).forEach( (item, index) =>{
      item.closest('figure').querySelector('figcaption').append(item);
    })
  } 
}


const sections = document.querySelectorAll("main.page__content section");
const points = Array.from(sections).map(el => Math.floor(el.offsetTop));
const pointfotter = document.querySelector("footer.page__nav").offsetTop;
points.push(pointfotter);
const pointsIndexs = points.length - 1;
let pointLast = 0;

const fixTitle = document.getElementById("page-title");
const fixToc = document.getElementsByClassName("toc")[0];
function addFixed(){
  fixTitle.classList.add('fixed');
  fixToc.classList.add('fixed');
}
function removeFixed(){
  fixTitle.classList.remove('fixed');
  fixToc.classList.remove('fixed');
} 

function ctrlfixed(index){
//   const ActionFixed = {
//     0 : function() {
//       fixTitle.classList.remove('fixed');
//       fixToc.classList.remove('fixed');
//     },    
//     [pointsIndexs] : function (){
//       fixToc.classList.remove('fixed')
//     },
//     def : function() {
//       fixTitle.classList.add('fixed');
//       fixToc.classList.add('fixed');
//     }
//   }
//   return ActionFixed[index.toString()] ? ActionFixed[index.toString()]() : ActionFixed["def"]();
  return index > 0 && index < pointsIndexs ? addFixed() : removeFixed();
}

window.addEventListener('wheel', function(e){
  e.preventDefault();
  const pointCur = pointLast;
  const pointCalc = e.deltaY > 0 ? pointCur + 1 : pointCur - 1;
  const pointNext = pointCalc >= 0 && pointCalc < pointsIndexs ? pointCalc : (pointCalc < 0 ? 0 : pointsIndexs);
  ctrlfixed(pointNext);
  window.scrollTo({ left: 0, top: points[pointNext], behavior:"smooth"});
  pointLast = pointNext;
}, {passive: false});



