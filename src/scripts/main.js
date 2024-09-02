'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  document.body.append(notification);

  notification.insertAdjacentHTML(
    'afterbegin',
    `
    <h2 class="title">${title}</h2>
    <p class="description">${description}</p>
    `,
  );

  notification.setAttribute('class', `notification ${type}`);
  notification.style.position = 'absolute';

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  setTimeout(() => {
    notification.remove();
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
