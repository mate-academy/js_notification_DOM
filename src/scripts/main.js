'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const message = document.createElement('div');

  message.classList.add('notification', type);

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  const titelElement = document.createElement('h2');

  titelElement.classList.add('title');
  titelElement.textContent = title;

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  message.appendChild(titelElement);
  message.appendChild(descriptionElement);
  document.body.appendChild(message);

  setTimeout(() => {
    message.style.display = 'none';
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
