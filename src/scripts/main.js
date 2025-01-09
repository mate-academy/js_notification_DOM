'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification', type);
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  const heading = document.createElement('h2');

  heading.classList.add('title');
  heading.textContent = title;
  message.appendChild(heading);

  const text = document.createElement('p');

  text.textContent = description;
  message.appendChild(text);

  document.body.appendChild(message);
  setTimeout(() => message.remove(), 2000);
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
