'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.innerHTML
    = `<h2 class='title'>${title}</h2><p>${description}</p>`;
  body.append(notification);

  const element = document.querySelector(`.${type}`);

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  setTimeout(() => {
    element.setAttribute('hidden', 'true');
  }, 2000);
};

const notificationTitle = 'Message example.\n ';
const notificationDescription
  = 'Notification should contain title and description.';

pushNotification(10, 10, 'Title of Success message',
  notificationTitle + notificationDescription, 'success');

pushNotification(150, 10, 'Title of Error message',
  notificationTitle + notificationDescription, 'error');

pushNotification(290, 10, 'Title of Warning message',
  notificationTitle + notificationDescription, 'warning');
