'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const divElement = document.createElement('div');
  const messageElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  divElement.classList.add(`${type}`);

  divElement.classList.add('notification');
  divElement.style.top = `${posTop}px`;
  divElement.style.right = `${posRight}px`;

  messageElement.classList.add('title');
  messageElement.textContent = title;

  descriptionElement.textContent = description;

  divElement.appendChild(messageElement);
  divElement.appendChild(descriptionElement);
  body.appendChild(divElement);

  window.setTimeout(() => {
    divElement.style.display = 'none';
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
