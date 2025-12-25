'use strict';

const NOTIFICATION_DISPLAY_DURATION = 2000;

const pushNotification = (posTop, posRight, title, description, type) => {
  const alertBox = document.createElement('div');

  alertBox.classList.add('notification', `${type}`);
  alertBox.style = `top: ${posTop}px; right: ${posRight}px;`;

  const alertTitle = document.createElement('h2');

  alertTitle.classList.add('title');
  alertTitle.textContent = title;

  const alertDescription = document.createElement('p');

  alertDescription.textContent = description;

  alertBox.appendChild(alertTitle);
  alertBox.appendChild(alertDescription);

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.style.visibility = 'hidden';
  }, NOTIFICATION_DISPLAY_DURATION);
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
