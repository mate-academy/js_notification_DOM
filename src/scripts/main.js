'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const blockElement = document.createElement('div');

  document.body.append(blockElement);

  blockElement.className = 'notification ' + type;
  blockElement.style.top = `${posTop}px`;
  blockElement.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');

  blockElement.append(titleElement);

  titleElement.className = 'title';
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');

  blockElement.append(descriptionElement);

  descriptionElement.textContent = description;

  setTimeout(() => {
    blockElement.style.display = 'none';
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
