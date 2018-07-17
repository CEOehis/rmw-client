import showLoginView from '../views/loginView';
import showSignupView from '../views/signupView';
import showHomeView from '../views/homeView'; // eslint-disable-line

const routes = {
  '/': showHomeView,
  '/index': showHomeView,
  '/login': showLoginView,
  '/register': showSignupView,
};

window.routes = routes;

export default function router(route) {
  const currentRoute = route || window.location.hash.slice(1) || '/';

  return routes[currentRoute]();
}
