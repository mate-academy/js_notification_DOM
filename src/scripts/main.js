'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notificationBlock = `
      <h2>${title}</h2>
      <p>${description}</p>
      </br>
  `;

  const notificationElement = document.createElement('div');

  notificationElement.classList.add(`notification`);
  notificationElement.classList.add(`${type}`);

  notificationElement.style.position = 'absolute';
  notificationElement.style.top = `${posTop}px`;
  notificationElement.style.right = `${posRight}px`;

  notificationElement.innerHTML = notificationBlock;

  body.append(notificationElement);

  setTimeout(() => document.querySelector('.notification').remove(), 2000);
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
