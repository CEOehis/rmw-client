import signupTemplate from '../templates/signup.template';

const showSignupView = () => {
  document.getElementById('app').innerHTML = signupTemplate;
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

export default showSignupView;
