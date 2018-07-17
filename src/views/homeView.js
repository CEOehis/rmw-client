import userIsLoggedIn from '../utils/userIsLoggedIn';
import router from '../utils/router'; // eslint-disable-line

const showHomeView = () => {
  if (!userIsLoggedIn()) {
    window.location.hash = '/login';
    router('/login');
  }
};

export default showHomeView;
