'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const createNotifcation = document.createElement('div');

  createNotifcation.classList.add('notification', type);
  createNotifcation.style.top = `${posTop}px`;
  createNotifcation.style.right = `${posRight}px`;

  const createTitle = document.createElement('h2');

  createTitle.textContent = title;
  createTitle.classList.add('title');
  createNotifcation.append(createTitle);

  const createDescription = document.createElement('p');

  createDescription.textContent = description;
  createNotifcation.append(createDescription);

  document.body.append(createNotifcation);

  setTimeout(() => {
    createNotifcation.style.display = 'none';
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
