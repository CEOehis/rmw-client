import signupTemplate from '../templates/signup.template';
import userIsLoggedIn from '../utils/userIsLoggedIn';
import router from '../utils/router'; // eslint-disable-line

const showSignupView = () => {
  if (userIsLoggedIn()) {
    router('/home');
    return;
  }
  document.getElementById('app').innerHTML = signupTemplate;

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
    const fullName = document.getElementById('name').value;
    const passwordConfirm = document.getElementById('password2').value;

    // check if fullName supplied is less than 2 chars long
    if (fullName.length < 2) {
      validationMessageDiv.classList.add('error');
      validationMessageDiv.innerHTML = '<p>Full Name can\'t be less than <br /> 2 characters.</p>';
      return ;
    }

    // check if password is less than 6 chars long
    if (password.length < 6) {
      validationMessageDiv.classList.add('error');
      validationMessageDiv.innerHTML = '<p>Password can\'t be less than <br /> 6 characters.</p>';
      // exit early
      return;
    }

    // if confirmation password is not empty
    // check if password and confirmation password are equal
    if (passwordConfirm !== '') {
      if (password !== passwordConfirm) {
        validationMessageDiv.classList.add('error');
        validationMessageDiv.innerHTML = '<p>passwords do not match</p>';
        return;
      }
    }
    // all clear here, attempt api call with input data
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
        if (response.status === 'success') {
          window.localStorage.setItem('token', response.token);
          window.localStorage.setItem('user', JSON.stringify(response.user));
          router('/');
        }
        validationMessageDiv.classList.add('error');
        validationMessageDiv.innerHTML = `<p>${response.message}</p>`;
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
