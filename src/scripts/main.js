'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newNotification = document.createElement('div');

  newNotification.setAttribute('class', `notification ${type}`);

  const titleElement = document.createElement('h2');

  titleElement.textContent = title;
  newNotification.appendChild(titleElement);

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;
  newNotification.appendChild(descriptionElement);

  newNotification.style.top = `${posTop}px`;
  newNotification.style.right = `${posRight}px`;

  document.body.appendChild(newNotification);

  setTimeout(() => {
    newNotification.remove();
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
