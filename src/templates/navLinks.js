const navLinks = (user) => {
  if (user) {
    return `
      <li><a class="brand" href="#/">RideMyWay</a></li>
      <li><a href="#/offer-ride">Offer a Ride</a></li>
      <li><a href="#/">View Rides</a></li>
      <li class="dropdown">
        <a>Hi, ${user.fullName.split(' ')[0]} <i class="fa fa-chevron-down"></i></a>
        <ul class="dropdown-content">
          <li><a href="#/profile">Profile</a></li>
          <li><a href="#/user/rides">My Ride Offers</a></li>
          <li><a href="#/logout">Sign out</a></li>
        </ul>
      </li>
    `;
  }
  return `
    <li><a class="brand" href="./index.html">RideMyWay</a></li>
    <li><a href="#how">How it works</a></li>
    <li><a href="./register.html">Register</a></li>
    <li><a href="./login.html">Login</a></li>
  `;
};

export default navLinks;
