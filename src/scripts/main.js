'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const windowNotification = document.createElement('section');

  windowNotification.className = `notification ${type}`;
  windowNotification.style.top = `${posTop}px`;
  windowNotification.style.right = `${posRight}px`;

  windowNotification.insertAdjacentHTML('afterbegin', `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `);

  document.body.append(windowNotification);

  setTimeout(() => windowNotification.remove(), 2000);
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
