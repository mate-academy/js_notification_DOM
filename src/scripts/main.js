'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationElement = document.createElement('div');

  // Create a base class and class depends of input parameter
  notificationElement.classList.add('notification');
  notificationElement.classList.add(type);

  // Title
  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;
  notificationElement.append(titleElement);

  // Description
  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;
  notificationElement.append(descriptionElement);

  // Style
  notificationElement.style.top = posTop + 'px';
  notificationElement.style.right = posRight + 'px';

  // Add
  document.body.append(notificationElement);

  // Set timeout
  setTimeout(() => {
    notificationElement.style.display = 'none';
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
