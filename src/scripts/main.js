'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification', `${type}`);

  message.innerHTML = `
    <h2 class = "title">${title}</h2>
    <p>${description}</p>
  `;

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  document.body.append(message);
};

setTimeout(() => pushNotification(10, 10, 'Title of Success message',
  'Message example.\n'
  + 'Notification should contain title and description.', 'success'), 2000);

setTimeout(() => pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
+ 'Notification should contain title and description.', 'error'), 2000);

setTimeout(() => pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
+ 'Notification should contain title and description.', 'warning'), 2000);
