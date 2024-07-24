const menulinks = document.querySelectorAll('.menu');

function colorLink() {
    menulinks.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
  }
  menulinks.forEach(l => l.addEventListener('click', colorLink))

let profilDropdownList = document.querySelector(".profil-dropdown-list");
let btn = document.querySelector(".link-profil");

const toggle = ()  => profilDropdownList.classList.toggle("active");