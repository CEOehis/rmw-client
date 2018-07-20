import userIsLoggedIn from '../utils/userIsLoggedIn';
import router from '../utils/router'; // eslint-disable-line
import navbar from '../components/navbar';

const showProfileView = () => {
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
        <div class="">
          <h2>My Profile</h2>
        </div>
        <div class="profile-details">
          <h3>Personal Information</h3>
          <div class="user-profile">
            <div class="user-profile-summary">
              <img src="https://placehold.it/100/100" />
              <div class="user-profile-info">
                <h2 class="user-name">Michael</h2>
                <p>+234 9091234567</p>
                <p>mich.ael@mail.com</p>
              </div>
            </div>
            <!-- <button class="btn btn-orange">Edit Profile</button> -->
          </div>
          <h3>My Rides</h3>
          <div class="ride-history">
            <!-- tab links -->
            <div class="tab">
              <button class="tablink" onclick="openTab(event, 'rides-taken')" id="defaultTab">Rides Taken (3)</button>
              <button class="tablink" onclick="openTab(event, 'rides-offered')" >Rides Offered (6)</button>
            </div>
            <!-- tab content -->
            <div id="rides-taken" class="tab-content">
              <table>
                <thead>
                  <tr>
                    <th>From</th>
                    <th>To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ikeja</td>
                    <td>Obalende</td>
                  </tr>
                  <tr>
                    <td>Maryland</td>
                    <td>Mushin</td>
                  </tr>
                  <tr>
                    <td>Lekki</td>
                    <td>Oshodi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="rides-offered" class="tab-content">
              <table>
                <thead>
                  <tr>
                    <th>From</th>
                    <th>To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ikeja</td>
                    <td>Obalende</td>
                  </tr>
                  <tr>
                    <td>Maryland</td>
                    <td>Mushin</td>
                  </tr>
                  <tr>
                    <td>Ikeja</td>
                    <td>Obalende</td>
                  </tr>
                  <tr>
                    <td>Maryland</td>
                    <td>Mushin</td>
                  </tr>
                  <tr>
                    <td>Ikeja</td>
                    <td>Obalende</td>
                  </tr>
                  <tr>
                    <td>Maryland</td>
                    <td>Mushin</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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

  function openTab(event, tab) {
    const tabContents = document.querySelectorAll('.tab-content');
    for (let i = 0; i < tabContents.length; i++) { // eslint-disable-line
      tabContents[i].style.display = 'none';
    }

    const tablinks = document.querySelectorAll('.tablink');
    for (let i = 0; i < tablinks.length; i++) { // eslint-disable-line
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(tab).style.display = 'block';
    event.currentTarget.className += ' active'; // eslint-disable-line
  }
  // expose openTab() to global window object since webpack obfuscates
  // code
  window.openTab = openTab;
  document.getElementById('defaultTab').click();
};

export default showProfileView;
