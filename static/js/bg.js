let bg = document.getElementById("bg");
window.addEventListener('scroll', function () {
  var height = window.scrollY;
  bg.style.top = height * 0.5 + 'px';
})