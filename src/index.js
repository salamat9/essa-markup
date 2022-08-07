import './styles/styles.scss';

const sidebarToggler = document.querySelector('.header__button');
const sidebar = document.querySelector('.sidebar');

sidebarToggler.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
