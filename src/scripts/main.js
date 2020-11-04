'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);
  notification.style.right = `${right}px`;
  notification.style.top = `${top}px`;

  notification.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 2000);
};

pushNotification(80, 100, 'Notification', 'Error error error',
  'error');

setTimeout(() =>
  pushNotification(80, 100, 'Notification', 'Success succes succes',
    'success'), 3000);

setTimeout(() =>
  pushNotification(80, 100, 'Notification', 'Warning warning warning',
    'warning'), 7000);

setTimeout(() =>
  pushNotification(80, 100, 'Notification', 'Info info info'),
11000);
