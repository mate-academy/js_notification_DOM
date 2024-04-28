'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
    <div class="notification ${type}">
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `,
  );

  const notification = document.querySelector('.notification:last-child');

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  setTimeout(() => {
    notification.style.visibility = 'hidden';
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
