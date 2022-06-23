// La funcionalidad de tu proyecto
const btnMenu = document.querySelector('#btn-menu');
const headerNav = document.querySelector('#header-nav');

function toggleElement(element, classes) {
  element.classList.toggle(classes);
}

btnMenu.addEventListener('click', () => {
  toggleElement(headerNav, 'none');
});