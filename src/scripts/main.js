'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const createdElement = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationMessage = document.createElement('p');

  notificationTitle.textContent = title;
  notificationMessage.textContent = description;

  createdElement.style.top = posTop + 'px';
  createdElement.style.right = posRight + 'px';

  notificationTitle.setAttribute('class', 'title');
  createdElement.setAttribute('class', `notification ${type}`);

  createdElement.append(notificationTitle);
  createdElement.append(notificationMessage);
  document.body.append(createdElement);

  setTimeout(() => {
    createdElement.remove();
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
