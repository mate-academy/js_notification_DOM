'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.insertAdjacentHTML('afterbegin', `
    <h2 class='title'>${title}</h2>
    <p>${description}</p>
  `);

  notification.top = `${top}px`;
  notification.right = `${right}px`;

  document.body.append(notification);

  setTimeout(() => notification.remove(), 3000);
};

const customDescription = 'Notification will disappear in a few seconds';

pushNotification(50, 50, 'Don\'t touch anything', customDescription, 'warning');
