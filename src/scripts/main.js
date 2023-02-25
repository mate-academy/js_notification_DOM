'use strict';

const body = document.body;

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  message.append(h2);
  message.append(p);

  message.className = 'notification';
  message.style.width = '320px';
  message.classList.add(type);

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  h2.innerText = title;
  h2.className = 'title';
  p.innerText = description;

  body.append(message);
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
