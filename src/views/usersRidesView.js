import userIsLoggedIn from '../utils/userIsLoggedIn';
import router from '../utils/router'; // eslint-disable-line
import navbar from '../components/navbar';
import usersRides from '../templates/usersRides.template';

const showUsersRidesView = () => {
  if (!userIsLoggedIn()) {
    window.location.hash = '/login';
    router('/login');
    return;
  }
  // fetch user information from localstorage
  const user = JSON.parse(localStorage.getItem('user'));
  document.getElementById('app').innerHTML = `
    ${navbar(user)}
    <section class="app-grid site-content">
      <div class="layout-grid">
        <div class="instructions">
          <h2>Ride Offers </h2>
          <p>View the requests for your ride offers and decide if you want them on a trip with you or not.</p>
        </div>
        <div class="upcoming-trips">
          <table>
            <tbody>
              <i style="text-align: center; display: block;" class="fa fa-spinner fa-spin fa-pulse fa-5x" aria-hidden="true"></i>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <footer class="app-grid orange-bg">
      <div class="layout-grid">
        <p>&copy; 2018. Hand crafted by Celestine Ekoh-Ordan</p>
      </div>
    </footer>
    `;

  const token = localStorage.getItem('token');
  // after component mounts. fetch users ride offers and append to dom
  fetch(`${__API__}/api/v1/rides/user`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const { rides } = response;
      const ridesDiv = document.querySelector('.upcoming-trips table tbody');
      document.querySelector('.fa-spinner').remove();
      ridesDiv.innerHTML = '';
      rides.forEach((ride) => {
        ridesDiv.insertAdjacentHTML('beforeend', usersRides(ride));
      });
    })
    .catch((error) => {
      console.log(error);
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

export default showUsersRidesView;
