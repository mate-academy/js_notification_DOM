'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationElement = document.createElement('div');

  Object.assign(notificationElement, {
    className: `notification ${type}`,
    style: `top: ${posTop}px; right: ${posRight}px;`,
    innerHTML: `
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    `,
  });

  document.body.appendChild(notificationElement);

  setTimeout(() => {
    notificationElement.remove();
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.<br> ' +
    'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.<br> ' +
    'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.<br> ' +
    'Notification should contain title and description.',
  'warning',
);
