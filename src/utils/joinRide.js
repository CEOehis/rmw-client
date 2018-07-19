/**
 * joinRide utility method. Handles ride offer requests
 *
 * @param {object} evt. link click event
 * @param {string} token authorization token for api call
 * @param {string | number} id ride offer id
 * @param {function} cb to handle response
 */
const joinRide = (evt, token, id, cb) => {
  evt.preventDefault();
  fetch(`http://localhost:3000/api/v1/rides/${id}/requests`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      cb(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default joinRide;
