// La funcionalidad de tu proyecto
const btnMenu = document.querySelector('#btn-menu');
const headerNav = document.querySelector('#header-nav');
const btnJob = document.querySelector('#btn-job');
const sectionForm = document.querySelector('#section-form');
const btnClose = document.querySelector('#btn-close');
const form = document.querySelector('#form');
const btnSubmit = document.querySelector('#btn-submit');

function toggleElement(element, classes) {
  element.classList.toggle(classes);
}

btnMenu.addEventListener('click', () => {
  toggleElement(headerNav, 'none');
});

btnJob.addEventListener('click', () => {
  toggleElement(sectionForm, 'none');
});

btnClose.addEventListener('click', () => {
  toggleElement(sectionForm, 'none');
});

btnSubmit.addEventListener('click', () => {
  toggleElement(sectionForm, 'none');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});