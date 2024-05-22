'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newNotification = document.createElement('div');
  const newTitle = document.createElement('h2');
  const newDescription = document.createElement('p');

  newNotification.classList.add('notification', type);
  newTitle.classList.add('title');

  newTitle.textContent = title;
  newDescription.textContent = description;

  newNotification.append(newTitle, newDescription);

  newNotification.style.top = `${posTop}px`;
  newNotification.style.right = `${posRight}px`;

  document.body.append(newNotification);

  setTimeout(() => {
    newNotification.style.display = 'none';
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
