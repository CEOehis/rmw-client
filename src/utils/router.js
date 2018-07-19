import showLoginView from '../views/loginView'; // eslint-disable-line
import showSignupView from '../views/signupView'; // eslint-disable-line
import showHomeView from '../views/homeView'; // eslint-disable-line
import logUserOut from '../views/logoutView'; // eslint-disable-line
import showSingleRideView from '../views/singleRideView'; // eslint-disable-line

const routes = {
  '/': showHomeView,
  '/login': showLoginView,
  '/register': showSignupView,
  '/logout': logUserOut,
  '/ride:id': showSingleRideView,
};

window.routes = routes;

export default function router(route) {
  const currentRoute = route || window.location.hash.slice(1) || '/';

  window.location.hash = currentRoute;

  // handle specific ride view routing
  const singleRideRegex = /^\/(ride)\/\d+$/;
  if (singleRideRegex.test(currentRoute)) {
    const rideId = /\d+/.exec(currentRoute);
    return showSingleRideView(rideId);
  }

  return routes[currentRoute]();
}
