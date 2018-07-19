const showNotFoundView = () => {
  document.getElementById('app').innerHTML = `
    <div class="app-grid site-content not-found">
      <div class="layout-grid">
        <h1>The page you are looking for is missing</h1>
        <a href="#/">Go back to the home page</a>
      </div>
    </div>
    `;
};

export default showNotFoundView;
