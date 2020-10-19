'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');

  notification.insertAdjacentHTML('afterbegin', `
    <h2>${title}</h2>
    <p>${description}</p>
  `);

  document.body.append(notification);
  notification.classList.add('notification', type);
  notification.style.top = top;
  notification.style.right = right;

  window.setTimeout(() => notification.remove(), 2000);
};

pushNotification(
  '100px',
  '150px',
  'That okay',
  'You are ok, dear user',
  'success');
