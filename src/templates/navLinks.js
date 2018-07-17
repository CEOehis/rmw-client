const navLinks = (user) => {
  if (user) {
    return `
      <li><a class="brand" href="./index.html">RideMyWay</a></li>
      <li><a href="./offer-ride.html">Offer a Ride</a></li>
      <li><a href="./app.html">View Rides</a></li>
      <li class="dropdown">
        <a>Hi, ${user.name} <i class="fa fa-chevron-down"></i></a>
        <ul class="dropdown-content">
          <li><a href="./profile.html">Profile</a></li>
          <li><a href="./my-ride-offers.html">My Ride Offers</a></li>
          <li><a href="./index.html">Sign out</a></li>
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
