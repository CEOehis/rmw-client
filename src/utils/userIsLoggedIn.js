import jwtDecode from 'jwt-decode';

const userIsLoggedIn = () => {
  const token = window.localStorage.getItem('token');

  let decoded;

  try {
    decoded = jwtDecode(token);
  } catch (error) {
    return false;
  }

  const { exp } = decoded;
  const currentDate = new Date();

  return (exp.getTime() - currentDate.getTime()) > 1;
};

export default userIsLoggedIn;
