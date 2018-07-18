import moment from 'moment';
import parseTime from '../utils/parseTime';

const availableRide = (ride) => {
  const {
    origin,
    destination,
    rideCreator,
    departureDate,
    departureTime,
    seats,
    rideId,
  } = ride;
  return `
    <div class="available-ride">
      <div class="path">
        <h4>${origin} <span>&gt;&gt;</span> ${destination}</h4>
      </div>
      <div class="ride-summary">
        <div class="profile">
          <img src="https://placehold.it/100/100" />
          <div class="driver">
            <h4>${rideCreator}</h4>
            <p>${moment(departureDate).format('MMM DD, YYYY')}, ${parseTime(departureTime)}</p>
          </div>
        </div>
        <div class="ride-info">
          <p class="seats">Available seats: ${seats}</p>
        </div>
        <div class="actions">
          <a href="#/ride-details/${rideId}" class="btn btn-orange btn-lg">Details</a>
        </div>
      </div>
    </div>
  `;
};

export default availableRide;
