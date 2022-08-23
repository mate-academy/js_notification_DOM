'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notifyEl = document.createElement('div');

  notifyEl.className = `notification ${type}`;

  notifyEl.style.top = `${posTop}px`;
  notifyEl.style.right = `${posRight}px`;

  notifyEl.insertAdjacentHTML('afterbegin', `
    <h2>${title}</h2>
    <p>${description}</p>
  `);

  body.append(notifyEl);

  setTimeout(() => {
    notifyEl.remove();
  },
  2000);
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
