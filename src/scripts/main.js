'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;

  const notifElem = document.createElement('div');
  const notifTitle = document.createElement('h2');
  const notifDescription = document.createElement('p');

  notifElem.classList.add('notification', type);
  notifElem.style.top = `${posTop}px`;
  notifElem.style.right = `${posRight}px`;

  notifTitle.className = 'title';
  notifTitle.innerText = title;
  notifDescription.innerText = description;

  notifElem.append(notifTitle, notifDescription);

  body.appendChild(notifElem);

  setTimeout(() => notifElem.remove(), 2000);
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
