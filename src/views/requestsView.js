import userIsLoggedIn from '../utils/userIsLoggedIn';
import router from '../utils/router'; // eslint-disable-line
import navbar from '../components/navbar';
import rideRequests from '../templates/rideRequests.template';

const showRequestsView = (rideId) => {
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
          <h2>Trip details </h2>
          <p>Respond to requests for this ride offer.</p>
        </div>
        <div class="ride-requests">
          <i style="text-align: center; display: block;" class="fa fa-spinner fa-spin fa-pulse fa-5x" aria-hidden="true"></i>
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
  // after component mounts. fetch ride requests and append to dom
  // use Promise.all() to wait on the result of the subsequent requests
  // rather than making and parsing the requests separately
  Promise.all([
    // get ride requests
    fetch(`http://localhost:3000/api/v1/rides/${rideId}/requests`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      }),
    // get ride offer information
    fetch(`http://localhost:3000/api/v1/rides/${rideId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      }),
  ])
    .then((res) => {
      const rideRequestsDiv = document.querySelector('.ride-requests');
      rideRequestsDiv.innerHTML = '';
      rideRequestsDiv.insertAdjacentHTML('beforeend', rideRequests(res));
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

export default showRequestsView;
