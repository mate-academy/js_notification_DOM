'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const logo = document.querySelector('.logo');

  const notification = document.createElement('div');

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notification.className = `notification ${type}`;

  notification.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;
  logo.insertAdjacentElement('afterend', notification);

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
