'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const createNotification = document.createElement('div');

  createNotification.classList.add('notification', type);
  createNotification.style.top = `${posTop}px`;
  createNotification.style.right = `${posRight}px`;

  const createTitle = document.createElement('h2');

  createTitle.textContent = title;
  createTitle.classList.add('title');
  createNotification.append(createTitle);

  const createDescription = document.createElement('p');

  createDescription.textContent = description;
  createNotification.append(createDescription);

  document.body.append(createNotification);

  setTimeout(() => {
    createNotification.style.display = 'none';
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
