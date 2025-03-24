'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const newNotification = document.createElement('div');
  const descriptionNotification = document.createElement('p');

  descriptionNotification.textContent = description;

  const titleNotification = document.createElement('h2');

  titleNotification.textContent = title;
  titleNotification.classList.add('title');

  newNotification.append(titleNotification, descriptionNotification);

  newNotification.classList.add('notification', type);

  newNotification.style.top = posTop + 'px';
  newNotification.style.right = posRight + 'px';

  document.body.appendChild(newNotification);

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
