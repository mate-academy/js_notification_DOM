/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationPosition = `top: ${posTop}px; right: ${posRight}px;`;
  const notification =
    `<div class='notification ${type}' style='${notificationPosition}'>` +
    `<h3>${title}</h3>` +
    `<p>${description}</p>` +
    `</div>`;

  document.body.innerHTML += notification;
};

const removeNotification = () => {
  const notifications = document.querySelectorAll(`.notification`);
  let time = null;

  clearTimeout(time);
  time = setTimeout(() => notifications.forEach((item) => item.remove()), 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success'
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error'
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning'
);

removeNotification();
