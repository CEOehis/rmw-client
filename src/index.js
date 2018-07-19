import router from './utils/router';

router();

window.onload = () => {
  window.apiUrl = __API__;
  window.addEventListener(
    'hashchange',
    () => {
      router();
    },
  );
};
