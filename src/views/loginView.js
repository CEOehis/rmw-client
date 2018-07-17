// login view. Renders login page


// generate navbar
// generate login
// generate footer

// render login view by replacing #app html with login view
import loginTemplate from '../templates/login.template';

const showLoginView = () => {
  document.getElementById('app').innerHTML = loginTemplate;
  // ===================
  const menu = document.querySelector('.menu');
  const navLinks = document.querySelector('.nav-links');
  menu.addEventListener('click', () => {
    const navClasses = [...navLinks.classList];
    if (navClasses.includes('expanded')) {
      navLinks.classList.remove('expanded');
      return;
    }
    navLinks.classList.add('expanded');
  });
};

export default showLoginView;
