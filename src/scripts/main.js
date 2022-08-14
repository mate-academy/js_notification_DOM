'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageContainer = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  messageContainer.className = `notification ${type}`;

  titleElement.className = 'title';
  titleElement.textContent = title;

  descriptionElement.textContent = description;

  messageContainer.appendChild(titleElement);
  messageContainer.appendChild(descriptionElement);
  document.body.appendChild(messageContainer);

  messageContainer.style.top = `${posTop}px`;
  messageContainer.style.right = `${posRight}px`;

  setTimeout(() => {
    messageContainer.remove();
  }, 2000);
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
