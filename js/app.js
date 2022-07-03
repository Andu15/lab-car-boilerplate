// La funcionalidad de tu proyecto
const btnMenu = document.querySelector('#btn-menu');
const headerNav = document.querySelector('#header-nav');
const btnJob = document.querySelector('#btn-job');
const sectionForm = document.querySelector('#section-form');
const btnClose = document.querySelector('#btn-close');
const form = document.querySelector('#form');
const btnSubmit = document.querySelector('#btn-submit');
const formLogin = document.querySelector('#form-login');
const btnLogin = document.querySelector('#btn-login');
const sectionLogin = document.querySelector('#section-login');
const loginReference = document.querySelector('#login-reference');



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

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
});

btnLogin.addEventListener('click', () => {
  toggleElement(sectionLogin, 'none');
});

loginReference.addEventListener('click', () => {
  toggleElement(sectionLogin, 'none');
});