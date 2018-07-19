import userIsLoggedIn from '../utils/userIsLoggedIn';
import router from '../utils/router'; // eslint-disable-line
import navbar from '../components/navbar';

const showOfferRideView = () => {
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
      <div class="layout-grid ride-offer">
        <div class="">
          <h2>Post a Ride Offer</h2>
          <p>Add details of your ride offer and we'll find you paying passengers.</p>
        </div>
        <div class="">
          <form id="offer-ride">
            <h3>Route information</h3>
            <div class="form-group">
              <label for="from">From</label>
              <input type="text" id="from" placeholder="Where from?" required />
            </div>
            <div class="form-group">
              <label for="to">To</label>
              <input type="text" id="to" placeholder="Where to?" required />
              <div class="report"></div>
            </div>
            <h3>Departure information</h3>
            <div class="form-group">
              <label for="date">Date</label>
              <input type="date" id="date" required />
              <div class="report"></div>
            </div>
            <div class="form-group">
              <label for="time">Time</label>
              <input type="time" id="time" required />
              <div class="report"></div>
            </div>
            <h3>Vehicle information</h3>
            <div class="form-group">
              <label for="seats">Available seats</label>
              <input id="seats" type="number" name="seats" min="1" max="3" placeholder="eg 3">
              <div class="report"></div>
            </div>
            <div class="form-group">
              <div class="report"></div>
            </div>
            <input class="btn btn-lg btn-submit btn-orange-inverse" type="submit" value="Post Ride" />
          </form>
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
  // after component mounts. fetch ride offers and append to dom
  const form = document.getElementById('offer-ride');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const origin = document.getElementById('from').value;
    const destination = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const seats = document.getElementById('seats').value;
    fetch(`${__API__}/api/v1/rides`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        origin,
        destination,
        date,
        time,
        seats,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.status === 'success') {
          router('/user/rides');
        }
      })
      .catch((error) => {
        console.log(error);
      });
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

export default showOfferRideView;
