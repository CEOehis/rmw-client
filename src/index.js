const heading = document.createElement('h1');
heading.innerHTML = 'This is webpack';
const app = document.getElementById('app');
app.innerHTML = '<h1>Start</h1>';
app.insertAdjacentElement('beforeend', heading);
