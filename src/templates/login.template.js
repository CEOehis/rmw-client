const login = `
  <header class="app-grid">
    <nav class="layout-grid navbar">
      <h1 class="brand">
        <a href="#/" rel="js">RideMyWay</a>
      </h1>
      <button class="menu btn"><i class="fa fa-navicon" aria-hidden="true"></i></button>
      <ul class="nav-links">
        <li><a class="brand" href="#/">RideMyWay</a></li>
        <li>
          <a href="#/register" rel="js">Register</a>
        </li>
        <li>
          <a href="#/login" rel="js">Login</a>
        </li>
      </ul>
    </nav>
  </header>
  <main class="app-grid site-content">
    <div class="layout-grid hero p-100">
      <h1>Login</h1>
      <form id="register">
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" placeholder="jamius@sample.com" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="enter your password" required />
          <div class="report"></div>
        </div>
        <input class="btn btn-lg btn-submit btn-orange" type="submit" value="submit" />
        <span class="member-status"><i>Not a member? <a href="#/register" rel="js">Sign up</a></i></span>
      </form>
    </div>
  </main>
  <footer class="app-grid orange-bg">
    <div class="layout-grid">
      <p>&copy; 2018. Hand crafted by Celestine Ekoh-Ordan</p>
    </div>

  </footer>
`;

export default login;
