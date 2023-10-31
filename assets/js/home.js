window.onload = function(){
  bigContactInfo()
}

function bigContactInfo(){
  const infoContact = document.querySelector('ul.contact')
  //const changePoint = window.innerHeight - 100;
  infoContact.classList.add('big')
  // document.addEventListener('wheel', function(){
  //   (window.scrollY || window.pageYOffset > changePoint) ? infoContact.classList.remove('big') : infoContact.classList.add('big')
  // })
} 