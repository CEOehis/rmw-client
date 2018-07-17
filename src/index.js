import router from './utils/router';

router();

window.onload = () => {
  window.addEventListener(
    'hashchange',
    () => {
      router();
    },
  );
};
