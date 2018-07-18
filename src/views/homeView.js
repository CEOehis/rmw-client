import userIsLoggedIn from '../utils/userIsLoggedIn';
import router from '../utils/router'; // eslint-disable-line
import navbar from '../components/navbar';

const showHomeView = () => {
  if (!userIsLoggedIn()) {
    window.location.hash = '/login';
    router('/login');
    return;
  }
  // fetch user information from localstorage
  const user = JSON.parse(localStorage.getItem('user'));
  document.getElementById('app').innerHTML = `
    ${navbar(user)}
    `;
};

export default showHomeView;
