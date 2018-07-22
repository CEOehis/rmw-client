const rideOffer = (rideInfo) => {
  if (rideInfo.status !== 'success') {
    return `
      <h2>Ride information</h2>
      <h3>Unable to fetch ride information at this time</h3>
    `;
  }

  const { origin, destination } = rideInfo.ride;
  return `
    <h2>Ride information</h2>
    <h3>${origin} <span><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span> ${destination}</h3>
  `;
};

const requests = (requestInfo) => {
  if (requestInfo.status !== 'success') {
    return `
      <div class="request-summary">
        Unable to fetch requests information at this time
      </div>
    `;
  }
  let html = '';
  requestInfo.requests.forEach((request) => {
    html += `
      <div class="request-summary">
        <div class="profile">
          <img src="https://placehold.it/64/64" />
          <div class="driver">
            <h4>${request.requesterName.split(' ')[0]}</h4>
          </div>
        </div>
        <div class="actions">
          ${request.offerStatus === 'pending' ? `
            <a rel="js" data-req-id=${request.requestId} data-ride-id=${request.rideId} data-action="accept" class="btn btn-orange">Accept</a>
            <a rel="js" data-req-id=${request.requestId} data-ride-id=${request.rideId} data-action="reject" class="btn btn-orange-inverse">Reject</a>`
    : `Request ${request.offerStatus}`}
        </div>
      </div>
    `;
  });
  return html;
};

const rideRequests = (requestData) => {
  const requestInfo = requestData[0];
  const rideInfo = requestData[1];
  return `
    ${rideOffer(rideInfo)}
    <h2>Ride Requests</h2>
    ${requests(requestInfo)}
  `;
};

export default rideRequests;
