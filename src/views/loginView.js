import loginTemplate from '../templates/login.template';
import userIsLoggedIn from '../utils/userIsLoggedIn';
import router from '../utils/router'; // eslint-disable-line

const showLoginView = () => {
  if (userIsLoggedIn()) {
    router('/home');
    return;
  }
  document.getElementById('app').innerHTML = loginTemplate;
  // after template is loaded to page, attach event listeners
  // to handle user signup

  const validationMessageDiv = document.querySelector('.report');
  // listen for keydown event on password inputs
  // so when user fixes validation errors, the previous message is cleared
  // get reference to both password inputs
  const formInputs = document.querySelectorAll('input');
  formInputs.forEach((input) => {
    input.addEventListener('keydown', () => {
      validationMessageDiv.classList.remove('error');
      validationMessageDiv.innerHTML = '';
    });
  });

  // handle form submit event
  const form = document.getElementById('register');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // check if password is less than 6 chars long
    if (password.length < 6) {
      validationMessageDiv.classList.add('error');
      validationMessageDiv.innerHTML = '<p>Password can\'t be less than <br /> 6 characters.</p>';
      // exit early
      return;
    }

    // get reference to form submit button
    const submitButton = form.querySelector('input[type="submit"]');
    // add visual cues and disable button to prevent firing multiple submit events
    submitButton.value = '...signing in';
    submitButton.classList.add('submitting');
    submitButton.disabled = true;
    // all clear here, attempt api call with input data
    fetch(`${__API__}/api/v1/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.status  === 'success') {
          window.localStorage.setItem('token', response.token);
          window.localStorage.setItem('user', JSON.stringify(response.user));
          router('/home');
        }
        validationMessageDiv.classList.add('error');
        validationMessageDiv.innerHTML = `<p>${response.message}</p>`;
        submitButton.value = 'submit';
        submitButton.classList.remove('submitting');
        submitButton.disabled = false;
      })
      .catch((error) => {
        console.log(error);
        submitButton.value = 'submit';
        submitButton.classList.remove('submitting');
        submitButton.disabled = false;
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

export default showLoginView;
