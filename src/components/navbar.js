import html from '../utils/html';
import navLinks from '../templates/navLinks';

const navbar = (user) => {
  return html`
  <header class="app-grid">
    <nav class="layout-grid navbar">
      <h1 class="brand"><a href="#/">RideMyWay</a></h1>
      <button class="menu btn"><i class="fa fa-navicon" aria-hidden="true"></i></button>
      <ul class="nav-links">
        ${navLinks(user)}
      </ul>
    </nav>
  </header>`;
};

export default navbar;
