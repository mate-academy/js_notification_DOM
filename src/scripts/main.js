'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  message.classList.add('notification');
  message.classList.add(type);
  titleElement.classList.add('title');

  titleElement.innerText = title;
  descriptionElement.innerText = description;

  message.style.position = 'absolute';
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  titleElement.style.whiteSpace = 'nowrap';

  message.append(titleElement, descriptionElement);
  document.body.append(message);

  setTimeout(() => {
    message.remove();
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
