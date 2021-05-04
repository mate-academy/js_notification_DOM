'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const newNotification = document.createElement('div');
  const newTitle = document.createElement('h2');
  const newDescription = document.createElement('p');

  newNotification.className = `notification ${type}`;
  newTitle.className = 'title';

  newDescription.textContent = `${description}`;
  newTitle.textContent = `${title}`;

  newNotification.style.top = `${posTop}px`;
  newNotification.style.right = `${posRight}px`;

  newNotification.append(newTitle);
  newNotification.append(newDescription);
  body.append(newNotification);

  setTimeout(() => newNotification.remove(), 2000);
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
