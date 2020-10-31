const headerElement = document.getElementById('header'),
      heroElement = document.getElementById('hero');

document.addEventListener('scroll', function() {
  // const scrollY = window.pageYOffset;

  // if (scrollY > 0) {
  //   headerElement.classList.add('active');
  // } else {
  //   headerElement.classList.remove('active');
  // }

  if (heroElement.getBoundingClientRect().bottom < 0) {
    headerElement.classList.add('active');
  } else {
    headerElement.classList.remove('active');
  }
})