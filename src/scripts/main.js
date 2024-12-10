'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');

  const message = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  titleElement.textContent = title;
  descriptionElement.textContent = description;

  message.classList.add('notification');
  message.classList.add(`${type}`);
  titleElement.classList.add('title');

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  setTimeout(() => {
    body.removeChild(message);
  }, 2000);

  body.insertBefore(message, body.lastElementChild);
  message.appendChild(titleElement);
  message.appendChild(descriptionElement);
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
