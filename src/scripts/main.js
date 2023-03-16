'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const titleEl = document.createElement('h2');
  const descriptionEl = document.createElement('p');

  message.style.top = `${posTop}px`;
  message.style.rigth = `${posRight}px`;

  message.append(titleEl);
  message.append(descriptionEl);

  message.className = `notification`;
  message.className += ` ${type}`;
  titleEl.className = 'title';
  titleEl.textContent = title;

  descriptionEl.textContent = description;

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
