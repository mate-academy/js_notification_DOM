'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.body;

  body.insertAdjacentHTML('afterbegin', `
  <div class='notification ${type}'>
  <h2 class='title'>${title}</h2>
  <p>${description}</p>
  </div>
  `);

  const notification = document.querySelector(`.notification`);

  notification.style.cssText = `top: ${top}px; right: ${right}px`;

  window.setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(100, 500, 'Title', 'Blablabla', 'warning');
