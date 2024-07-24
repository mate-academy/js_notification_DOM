'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // const message = document.getElementsByClassName('.notification');
  const message = document.createElement('div');

  message.classList.add('notification');

  if (type === 'success' || type === 'error' || type === 'warning') {
    message.classList.add(type);
  }

  message.style.top = `${posTop}px`;
  message.style.right = posRight;

  const titleBox = document.createElement('div');

  titleBox.classList.add('title');
  titleBox.textContent = title;
  message.appendChild(titleBox);

  const descriptionBox = document.createElement('div');

  descriptionBox.classList.add('description');
  descriptionBox.textContent = description;
  message.appendChild(descriptionBox);

  document.body.appendChild(message);

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
