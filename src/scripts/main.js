'use strict';

function pushNotification(top, right, title, description, type) {
  const notification = document.createElement('div');

  notification.innerHTML = `
      <h2>${title}</h2>
      <p>${description}</p>
  `;

  document.body.append(notification);
  notification.classList.add('notification');
  notification.classList.add(`${type}`);

  window.setTimeout(() => notification.remove(), 2000);
}

pushNotification(
  '200px',
  '200px',
  'Yeeey success!',
  'You are checking it',
  'success'
);
