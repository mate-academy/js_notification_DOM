'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageBox = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const body = document.querySelector('body');

  const arr = description.split('.');

  h2.innerHTML = `${title}`;
  p.innerHTML = `${arr[0]}.<br>${arr[1]}.`;
  messageBox.classList.add('notification');
  h2.classList.add('title');
  messageBox.classList.add(`${type}`);
  messageBox.style.top = `${posTop}px`;
  messageBox.style.right = `${posRight}px`;
  messageBox.style.padding = `0 0 0 ${16}px`;

  messageBox.append(h2, p);
  body.append(messageBox);

  setTimeout(() => messageBox.remove(), 2000);
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
