const ridesOffered = (ride) => {
  const {
    origin,
    destination,
  } = ride;
  return `
    <tr>
      <td>${origin}</td>
      <td>${destination}</td>
    </tr>
  `;
};

export default ridesOffered;
