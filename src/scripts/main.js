'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notif = document.createElement('div');

  notif.classList.add('notification', type);

  const titl = document.createElement('h2');
  const text = document.createElement('p');

  titl.classList.add('title');
  titl.textContent = title;
  text.textContent = description;

  notif.setAttribute('style', `top: ${posTop}px; right: ${posRight}px;`);
  notif.append(titl, text);
  document.body.appendChild(notif);

  setTimeout(() => {
    notif.style.display = 'none';
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
