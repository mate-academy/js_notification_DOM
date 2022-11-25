'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.querySelector('body');
  const notifications = document.createElement('div');

  notifications.className = `notification` + ` ${type}`;

  notifications.insertAdjacentHTML('afterbegin', `
    <h2 class='title'>${title}</h2>
    <p>${description}</p>
  `);
  notifications.style.top = `${posTop}px`;
  notifications.style.right = `${posRight}px`;

  element.append(notifications);

  setTimeout(() => {
    notifications.style.display = 'none';
  }, 1999);
};

pushNotification(10, 10, 'Title of \n Success message',
  'Message example.\n'
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
