import showLoginView from '../views/loginView'; // eslint-disable-line
import showSignupView from '../views/signupView'; // eslint-disable-line
import showHomeView from '../views/homeView'; // eslint-disable-line
import logUserOut from '../views/logoutView'; // eslint-disable-line

const routes = {
  '/': showHomeView,
  '/login': showLoginView,
  '/register': showSignupView,
  '/logout': logUserOut,
};

window.routes = routes;

export default function router(route) {
  const currentRoute = route || window.location.hash.slice(1) || '/';

  window.location.hash = currentRoute;

  return routes[currentRoute]();
}
