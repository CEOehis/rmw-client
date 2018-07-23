import userIsLoggedIn from '../utils/userIsLoggedIn';
import router from '../utils/router'; // eslint-disable-line
import navbar from '../components/navbar';

const requestSuccessView = () => {
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
      <div class="layout-grid">
        <h1></h1>
        <div class="ride-details">
          <div class="trip">
            <div class="success-message">
              <i class="fa fa-check-circle-o fa-5x" aria-hidden="true"></i>
              <p>Your request to join the ride has been received! You should get a notification when the Ride owner accepts your request.</p>
            </div>
            <a class="btn btn-orange btn-lg" href="#/home">Back to Rides</a>
          </div>
        </div>
      </div>
    </main>
    <footer class="app-grid orange-bg">
      <div class="layout-grid">
        <p>&copy; 2018. Hand crafted by Celestine Ekoh-Ordan</p>
      </div>

    </footer>
    `;
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

export default requestSuccessView;
