'use strict';

let id = 1;
const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  body.insertAdjacentHTML(
    'beforeend',
    `
    <div id = "notification-${id}" class="notification ${type}"">
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
    `,
  );

  const notification = document.querySelector('#notification-' + id);

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  // notification.style.visibility = 'visible';
  id++;

  setTimeout(() => {
    // notification.style.visibility = 'hidden';
    notification.style.display = 'none';
    // notification.remove();
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
  160,
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
