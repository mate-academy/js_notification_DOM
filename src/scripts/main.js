'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const loc = document.querySelector('body');

  const message = document.createElement('div');

  message.classList.add('notification', type);
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  const header = document.createElement('h2');

  header.classList.add('title');
  header.innerText = title;

  const text = document.createElement('p');

  text.innerText = description;

  loc.append(message);
  message.append(header);
  message.append(text);

  setTimeout(() => message.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
