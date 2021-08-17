'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const descriptionElement = document.createElement('p');
  const titleElement = document.createElement('h2');

  message.classList.add('notification', type);
  titleElement.classList.add('title');
  message.style.cssText = `top: ${posTop}px; right: ${posRight}px;`;

  titleElement.textContent = title;
  descriptionElement.textContent = description;

  message.append(titleElement);
  message.append(descriptionElement);
  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
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
