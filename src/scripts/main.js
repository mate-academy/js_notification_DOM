'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.className = 'notification';
  message.classList.add(type);

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  const titleText = document.createElement('h2');

  titleText.className = 'title';
  titleText.textContent = title;
  message.appendChild(titleText);

  const paragraphText = document.createElement('p');

  paragraphText.textContent = description;
  message.appendChild(paragraphText);
  document.body.appendChild(message);

  setTimeout(() => {
    document.body.removeChild(message);
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
