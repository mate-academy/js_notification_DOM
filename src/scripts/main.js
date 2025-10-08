'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');
  const titleMessage = document.createElement('h2');
  const descriptionMessage = document.createElement('p');

  container.classList.add('notification');

  if (type) {
    container.classList.add(type);
  }
  container.style.top = `${posTop}px`;
  container.style.right = `${posRight}px`;

  titleMessage.textContent = title;
  titleMessage.classList.add('title');
  descriptionMessage.textContent = description;

  container.appendChild(titleMessage);
  container.appendChild(descriptionMessage);
  document.body.appendChild(container);

  setTimeout(() => {
    container.style.display = 'none';
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
