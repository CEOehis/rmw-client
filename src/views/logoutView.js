import router from '../utils/router'; // eslint-disable-line

const logUserOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  router('/login');
};

export default logUserOut;
