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
  let title = document.querySelectorAll(".page__content  h3[id]");
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

//서브페이지 목차 fixed 토글
// const header = document.getElementsByClassName("page__header")[0];
// const toc = document.getElementsByClassName("toc")[0];
// const pageAbsoluteY = (el) => {
//   return window.pageYOffset + el.getBoundingClientRect().top
// } 
// const footerPoint = pageAbsoluteY(document.querySelector("#main footer")) - window.innerHeight / 4;
// function classOnOff (condition, el, _class){
//   return condition ? el.classList.add(_class) : el.classList.remove(_class)
// }

const wrapper = document.querySelector(".page__wrapper");
const pageHeight = document.body.scrollHeight;

function scrollEvents(y){
  if(y < (pageHeight - innerHeight - 5) / 2){
    //wrapper.style.transform = `translateY(-${y}px)`;
  }
  // classOnOff( y > endPoint_header && y < footerPoint, toc, 'fixed');
}


let tick = false;
window.addEventListener('scroll', function(){
  let y = Math.floor(this.scrollY)

  if(!tick){
    requestAnimationFrame(() => {
      scrollEvents(y)
      return tick = false
    })
  }
},{passive: true})


