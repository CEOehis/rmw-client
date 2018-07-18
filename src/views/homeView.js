import userIsLoggedIn from '../utils/userIsLoggedIn';
import router from '../utils/router'; // eslint-disable-line

const showHomeView = () => {
  if (!userIsLoggedIn()) {
    window.location.hash = '/login';
    router('/login');
    return;
  }
  document.getElementById('app').innerHTML = '<h1>This is the app</h1>';
};

export default showHomeView;
