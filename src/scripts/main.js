'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');
  const titleElement = document.createElement('h2');
  const text = document.createElement('p');

  container.classList.add('notification', type);
  titleElement.classList.add('title');

  titleElement.textContent = title;
  text.textContent = description;

  container.style.top = `${posTop}px`;
  container.style.right = `${posRight}px`;

  container.append(titleElement, text);

  document.body.append(container);

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
