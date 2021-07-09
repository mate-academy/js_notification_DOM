'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newNotif = document.createElement('div');

  newNotif.innerHTML = `
    <h2 class='title'>${title}</h2>
    <p>${description}</p>
  `;

  newNotif.className = (`notification ${type}`);
  newNotif.style.top = `${posTop}px`;
  newNotif.style.right = `${posRight}px`;
  document.body.append(newNotif);

  setTimeout(() => newNotif.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example. \n'
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
