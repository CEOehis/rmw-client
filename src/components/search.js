const search = `
  <div class="instructions">
    <h2>Available Ride Offers <i class="fa fa-search "></i> </h2>
      <form class="search">
        <div class="form-group">
          <label for="origin">Origin</label>
          <input type="text" id="origin" placeholder="Where from" required />
        </div>
        <div class="form-group">
          <label for="destination">Destination</label>
          <input type="text" id="destination" placeholder="Where to" required />
        </div>
        <input class="btn btn-submit btn-orange" type="submit" value="submit" />
      </form>
    <p>Find and select your route, then sit back and relax: we'll take care of the rest!</p>
  </div>
`;

export default search;
