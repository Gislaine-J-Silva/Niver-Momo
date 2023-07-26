let menu = document.querySelector ('.menu');

document.querySelector('#menu-botao').onclick = () => {
    menu.classList.toggle('active')
}

document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector(".menu");
    var links = menu.querySelectorAll("a");
  
    links.forEach(function(link) {
      link.addEventListener("click", function() {
        menu.classList.remove("active");
      });
    });
  });