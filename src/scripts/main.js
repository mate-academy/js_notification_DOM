'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');

  container.classList.add('notification');
  container.classList.add(type);

  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;
  container.append(titleElement);

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;
  container.append(notificationDescription);

  container.style.position = 'absolute';
  container.style.top = typeof posTop === 'number' ? posTop + 'px' : posTop;
  // eslint-disable-next-line
  container.style.right = typeof posRight === 'number' ? posRight + 'px' : posRight;
  document.body.append(container);

  setTimeout(() => {
    container.style.display = 'none';
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
