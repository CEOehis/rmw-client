import userIsLoggedIn from '../utils/userIsLoggedIn';
import navbar from '../components/navbar';


const showLandingView = () => {
  let user;
  if (userIsLoggedIn()) {
    user = JSON.parse(localStorage.getItem('user'));
  }
  document.getElementById('app').innerHTML = `
    <div class="splash">
      ${navbar(user)}
      <main class="app-grid ">
        <div class="layout-grid hero">
          <h1>Ridesharing made easy</h1>
          <p>Ride-my-way is a peer-to-peer ridesharing platform focusing on long-distance travel. Planning a road trip? You can use Ride-my-way to put those empty seats to good use and find paying passengers for your car, or to find yourself a ride to wherever you want to go.</p>
          <a class="btn btn-orange btn-lg" href="#/register">Get Started</a>
        </div>
      </main>

    </div>
    <section class="app-grid black-bg">
      <div class="layout-grid how">
        <h1>How it works</h1>
        <div class="steps">
          <div class="card">
            <h2>Offer/Find a Ride <i class="fa fa-cab" aria-hidden="true"></i></h2>
            <hr />
            <p>You can Offer a Ride as a driver or Join other Ride offers.</p>
          </div>
          <div class="card">
            <h2>Confirm Ride <i class="fa fa-thumbs-o-up" aria-hidden="true"></i></h2>
            <hr />
            <p>Confirm ride details if you are joining one. Otherwise confirm your passengers profile to make sure they are a right fit for you.</p>
          </div>
          <div class="card">
            <h2>Enjoy <i class="fa fa-smile-o" aria-hidden="true"></i></h2>
            <hr />
            <p>Seriously, that's all you need to do. Ride-my-way will take care of the nitty-gritty.</p>
          </div>
        </div>
        <a class="btn btn-orange btn-lg centered" href="#/create">Offer a Ride</a>
      </div>
    </section>
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

export default showLandingView;
