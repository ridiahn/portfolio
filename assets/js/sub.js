makeSection();
// remakegalleryCaptions();

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
  const contentWapper = document.querySelector(".page__content");
  let title = document.querySelectorAll(".page__content h3[id]");
  let countSection = title.length - 1;
  
  for( i = 0; i <= countSection; i++ ){
    const section = document.createElement('section'); 
    section.append(title[i]);
    let contentElement = contentWapper.children;
    Array.from(contentElement).some( el => {
      if( el.tagName === 'H3' || el.tagName === 'SECTION' ) return true;
      section.append(el);
    })
    //i === 0 ? section.classList.add('intro') : 0;
    contentWapper.append(section);
  }
}


//gallery extend effect
function extendImg(obj){
  let prevImg = obj.closest('ul').querySelector('li.active');
  let prevCaption = obj.closest('figure').querySelector('figcaption p.active');
  let curIndex = [...obj.parentElement.children].indexOf(obj);
  let curCaption = obj.closest('figure').querySelectorAll('figcaption p')[curIndex];
  prevImg.classList.remove('active');
  prevCaption.classList.remove('active');
  obj.classList.add('active');
  curCaption.classList.add('active');
}

//.gallery img title > fig안으로 caption 위치 변경
function remakegalleryCaptions(){
  let imgCaptions = document.querySelectorAll("figure.gallery p");
  
  if(imgCaptions){
    Array.from(imgCaptions).forEach( (item, index) =>{
      item.closest('figure').querySelector('figcaption').append(item);
    })
  }
  return;
}

//section 확장 효과
const sections = document.querySelectorAll(".page__content section");
const gap = window.innerHeight / 3;
let extendSection = 0;

function extendPoint(index){
  return Math.floor(sections[index].offsetTop + sections[index].offsetHeight - gap)
}

//function scrollEvents(y){
  // if( y > extendPoint(extendSection) && extendSection < sections.length-1){
  //   sections[extendSection + 1].classList.remove('fold')
  //   extendSection ++;
  // }
//}

// let tick = false;
// window.addEventListener('scroll', function(){
//   let y = Math.floor(this.scrollY)

//   if(!tick){
//     requestAnimationFrame(() => {
//       scrollEvents(y)
//       return tick = false
//     })
//   }
// },{passive: true})


