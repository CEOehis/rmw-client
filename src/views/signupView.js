import signupTemplate from '../templates/signup.template';
import userIsLoggedIn from '../utils/userIsLoggedIn';
import router from '../utils/router'; // eslint-disable-line

const showSignupView = () => {
  if (userIsLoggedIn()) {
    router('/');
    return;
  }
  document.getElementById('app').innerHTML = signupTemplate;
  // handle form submit event
  const form = document.getElementById('register');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('name').value;
    const passwordConfirm = document.getElementById('password2').value;
    fetch(`${__API__}/api/v1/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
        passwordConfirm,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        window.localStorage.setItem('token', response.token);
        window.localStorage.setItem('user', JSON.stringify(response.user));
        router('/');
      })
      .catch((error) => {
        console.log(error);
      });
  });
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
