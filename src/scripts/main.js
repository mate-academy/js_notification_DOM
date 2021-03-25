'use strict';

const pageTitle = document.querySelector('.logo');
const body = document.body;
const notificationsWrapper = document.createElement('div');

body.insertBefore(notificationsWrapper, pageTitle);

const pushNotification = (posTop, posRight, title, description, type) => {
  notificationsWrapper.insertAdjacentHTML('beforeend', `
  <div class = 'notification ${type}'>
    <h2 class = 'title'>${title}</h2>
    <p>${description}</p>
  </div>`);

  const notification = notificationsWrapper.querySelector(`.${type}`);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
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

setTimeout(() => notificationsWrapper.remove(), 2000);
