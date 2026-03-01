'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const elementMessage = document.createElement('div');
  const titleMessage = document.createElement('h2');
  const descriptionMessage = document.createElement('p');

  elementMessage.className = 'notification';
  elementMessage.classList.add(type);
  titleMessage.className = 'title';

  elementMessage.style.top = `${posTop}px`;
  elementMessage.style.right = `${posRight}px`;

  titleMessage.textContent = title;
  descriptionMessage.textContent = description;

  elementMessage.appendChild(titleMessage);
  elementMessage.appendChild(descriptionMessage);
  body.appendChild(elementMessage);

  setTimeout(() => {
    elementMessage.style.display = 'none';
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
