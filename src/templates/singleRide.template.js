import moment from 'moment';
import parseTime from '../utils/parseTime';

const singleRide = (ride) => {
  const {
    origin,
    destination,
    seats,
    rideCreator,
    email,
    phone,
    departureDate,
    departureTime,
    rideId,
  } = ride;

  const user = JSON.parse(window.localStorage.getItem('user'));
  return `
    <h1>${origin} to ${destination}</h1>
    <div class="ride-details">
      <div class="trip">
        <h1>Trip information</h1>
        <table>
          <tr>
            <td>From: </td>
            <td>${origin}</td>
          </tr>
          <tr>
            <td>To: </td>
            <td>${destination}</td>
          </tr>
          <tr>
            <td>Departing: </td>
            <td>${moment(departureDate).format('MMM DD, YYYY')}, ${parseTime(departureTime)}</td>
          </tr>
          <tr>
            <td>Available seats: </td>
            <td>${seats}</td>
          </tr>
          <tr>
            <td>status: </td>
            <td>Available</td>
          </tr>
        </table>
        <div class="call-to-action">
${user.email !== email
    ? `<button class="btn btn-orange btn-lg" href="#/ride/${rideId}/join">Join this Ride</button>`
    : ''
}
          <a class="btn btn-orange-inverse btn-lg" href="#/home">More Rides</a>
        </div>
      </div>
      <div class="driver-profile">
        <h1>Driver Profile</h1>
        <img src="https://placehold.it/100/100" />
        <h2 class="driver-name">${rideCreator}</h2>
        <hr style="border:3px solid #f1f1f1">
        <p>email: ${email}</p>
        <p>phone: ${phone || 'unavailable'}</p>
        <hr style="border:3px solid #f1f1f1">
      </div>
    </div>
  `;
};

export default singleRide;
