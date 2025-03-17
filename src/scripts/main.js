'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const message = document.createElement('div');
  const titleText = document.createElement('h2');
  const descriptionText = document.createElement('p');

  titleText.textContent = title;
  title.classList.add('title');

  descriptionText.textContent = description;

  message.style.position = 'absolute';
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';
  message.classList.add('notification', type);
  message.appendChild(titleText);
  message.appendChild(descriptionText);

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
