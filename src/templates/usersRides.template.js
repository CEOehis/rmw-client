const usersRides = (ride) => {
  const {
    origin,
    destination,
    rideId,
  } = ride;
  return `
    <tr>
      <td><i class="fa fa-cab" aria-hidden="true"></i></td>
      <td>
        <h3>${origin} <span><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span> ${destination}</h3>
      </td>
      <td><a href="#/user/rides/${rideId}/requests" class="btn btn-orange">View requests</a></td>
    </tr>
  `;
};

export default usersRides;
