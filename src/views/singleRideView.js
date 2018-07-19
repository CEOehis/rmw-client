import userIsLoggedIn from '../utils/userIsLoggedIn';
import router from '../utils/router'; // eslint-disable-line
import navbar from '../components/navbar';
import singleRide from '../templates/singleRide.template';

const showSingleRideView = (rideId) => {
  if (!userIsLoggedIn()) {
    window.location.hash = '/login';
    router('/login');
    return;
  }
  // fetch user information from localstorage
  const user = JSON.parse(localStorage.getItem('user'));
  document.getElementById('app').innerHTML = `
    ${navbar(user)}
    <main class="app-grid site-content">
      <div class="layout-grid" id="ride">
        <i style="text-align: center; display: block;" class="fa fa-spinner fa-spin fa-pulse fa-5x" aria-hidden="true"></i>
      </div>
    </main>
    <footer class="app-grid orange-bg">
      <div class="layout-grid">
        <p>&copy; 2018. Hand crafted by Celestine Ekoh-Ordan</p>
      </div>

    </footer>
    `;

  const token = localStorage.getItem('token');
  // after component mounts. fetch ride offer and append to dom
  fetch(`http://localhost:3000/api/v1/rides/${rideId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const { ride } = response;
      const rideDiv = document.querySelector('#ride');
      rideDiv.innerHTML = '';
      rideDiv.insertAdjacentHTML('beforeend', singleRide(ride));
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

export default showSingleRideView;
