import userIsLoggedIn from '../utils/userIsLoggedIn';
import router from '../utils/router'; // eslint-disable-line
import navbar from '../components/navbar';
import ridesOffered from '../templates/ridesOffered.template';

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
                <h2 class="user-name">${user.fullName}</h2>
                <p>${user.phone === null ? '+234' : user.phone}</p>
                <p>${user.email}</p>
              </div>
            </div>
            <!-- <button class="btn btn-orange">Edit Profile</button> -->
          </div>
          <h3>My Rides</h3>
          <div class="ride-history">
            <!-- tab links -->
            <div class="tab">
              <button class="tablink" onclick="openTab(event, 'rides-taken')" id="takenTab">Rides Taken <span></span></button>
              <button id="offeredTab" class="tablink" onclick="openTab(event, 'rides-offered')" >Rides Offered <span></span></button>
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

  const token = localStorage.getItem('token');
  // after component mounts. fetch user history and append to dom
  // make separate fetch requests since the views are separate
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
      const ridesOfferedTable = document.getElementById('rides-offered');
      const ridesOfferdTableBody = ridesOfferedTable.firstElementChild.lastElementChild;
      document.getElementById('offeredTab').firstElementChild.textContent = `(${rides.length})`;
      rides.forEach((ride) => {
        ridesOfferdTableBody.insertAdjacentHTML('beforeend', ridesOffered(ride));
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
  document.getElementById('offeredTab').click();
};

export default showProfileView;
