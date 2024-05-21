'use strict';

const createNotificationDiv = (posTop, posRight, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  return notification;
};

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationDiv = createNotificationDiv(posTop, posRight, type);

  const newLineIndex = description.indexOf('\n');

  const markup = `
    <h2 class='title' >${title}</h2>
    <p>
      ${description.slice(0, newLineIndex)}
      <br>
      ${description.slice(newLineIndex)}
    </p>
  `;

  notificationDiv.insertAdjacentHTML('afterbegin', markup);
  document.body.append(notificationDiv);

  setTimeout(() => notificationDiv.remove(), 2000);
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
