'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const bodyElement = document.querySelector('body');
  const messageElement = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  messageElement.classList.add('notification');
  messageElement.classList.add(type);
  messageElement.style.top = `${posTop}px`;
  messageElement.style.right = `${posRight}px`;

  titleElement.innerText = title;
  titleElement.classList.add('title');
  titleElement.style.fontSize = '16px';

  descriptionElement.innerText = description;

  bodyElement.append(messageElement);
  messageElement.append(titleElement);
  messageElement.append(descriptionElement);

  setTimeout(() => {
    messageElement.style.visibility = 'hidden';
  }, 2 * 1000);
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
