'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notif = document.createElement('div');
  const elTitle = document.createElement('h2');
  const elDescript = document.createElement('p');

  notif.className = `notification ${type}`;
  elTitle.className = 'title';

  elTitle.innerText = title;
  elDescript.innerText = description;

  notif.style.top = `${posTop}px`;
  notif.style.right = `${posRight}px`;

  notif.append(elTitle);
  notif.append(elDescript);

  document.body.append(notif);

  setTimeout(() => notif.remove(), 2000);
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
