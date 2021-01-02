'use strict';

const pushNotification = (
  posTop,
  posRight,
  title,
  description,
  type,
  delay) => {
  const message = document.createElement('div');

  message.classList.add('notification', `${type}`);
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  message.innerHTML
  = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  document.body.append(message);

  setTimeout(() => message.remove(), delay);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success', 1000);

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error', 2000);

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning', 3000);
