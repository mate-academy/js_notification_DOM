'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  const notificationContainer = document.createElement('div');
  const notificationBody = document.createElement('div');

  notificationContainer.style.position = 'fixed';
  notificationContainer.style.top = posTop + 'px';
  notificationContainer.style.right = posRight + 'px';
  notificationBody.type = type;

  switch (notificationBody.type) {
    case 'success':
      notificationBody.style.backgroundColor = 'green';
      break;
    case 'error':
      notificationBody.style.backgroundColor = 'red';
      break;
    case 'warning':
      notificationBody.style.backgroundColor = 'yellow';
      break;
  }

  const notificationTitle = document.createElement('div');

  notificationTitle.textContent = title;
  notificationTitle.style.fontWeight = 'bold';

  const notificationDescription = document.createElement('div');

  notificationDescription.textContent = description;

  notificationContainer.append(notificationBody);

  notificationBody.append(notificationTitle);
  notificationBody.append(notificationDescription);
  body.append(notificationContainer);
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
