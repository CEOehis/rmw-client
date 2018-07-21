import showLoginView from '../views/loginView'; // eslint-disable-line
import showSignupView from '../views/signupView'; // eslint-disable-line
import showHomeView from '../views/homeView'; // eslint-disable-line
import logUserOut from '../views/logoutView'; // eslint-disable-line
import showSingleRideView from '../views/singleRideView'; // eslint-disable-line
import requestSuccessView from '../views/requestSuccessView'; // eslint-disable-line
import showUsersRidesView from '../views/usersRidesView'; // eslint-disable-line
import showRequestsView from '../views/requestsView'; // eslint-disable-line
import showNotFoundView from '../views/notFoundView'; // eslint-disable-line
import showOfferRideView from '../views/offerRideView'; // eslint-disable-line
import showProfileView from '../views/profileView'; // eslint-disable-line
import showLandingView from '../views/landingView'; // eslint-disable-line

const routes = {
  '/': showLandingView,
  '/home': showHomeView,
  '/login': showLoginView,
  '/register': showSignupView,
  '/logout': logUserOut,
  '/ride:id': showSingleRideView,
  '/join': requestSuccessView,
  '/user/rides': showUsersRidesView,
  '/not-found': showNotFoundView,
  '/create': showOfferRideView,
  '/profile': showProfileView,
};

window.routes = routes;

export default function router(route) {
  const currentRoute = route || window.location.hash.slice(1) || '/';

  window.location.hash = currentRoute;

  // handle specific ride view routing
  const singleRideRegex = /^\/(ride)\/\d+$/;
  if (singleRideRegex.test(currentRoute)) {
    const rideId = /\d+/.exec(currentRoute)[0];
    return showSingleRideView(rideId);
  }

  const requestSuccessRegex = /^\/(ride)\/\d+\/(join)$/;
  if (requestSuccessRegex.test(currentRoute)) {
    return routes['/join']();
  }

  const viewRequestsRegex = /^\/(user)\/(rides)\/\d+\/(requests)$/;
  if (viewRequestsRegex.test(currentRoute)) {
    const rideId = /\d+/.exec(currentRoute)[0];
    return showRequestsView(rideId);
  }

  // handle 404's
  if (routes[currentRoute] === undefined) {
    return routes['/not-found']();
  }

  return routes[currentRoute]();
}
