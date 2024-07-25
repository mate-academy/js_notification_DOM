'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const message = document.createElement('div');
  const body = document.body;

  message.classList.add('notification');
  message.classList.add(type);

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  const titleText = document.createElement('h2');

  titleText.textContent = title;
  titleText.classList.add('title');

  const descriptionText = document.createElement('p');

  descriptionText.textContent = description;

  message.append(titleText, descriptionText);
  body.append(message);

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
