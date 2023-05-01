'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const elementTitle = document.createElement('h2');
  const elementDescript = document.createElement('p');

  notification.className = `notification ${type}`;
  elementTitle.className = 'title';

  elementTitle.innerText = title;
  elementDescript.innerText = description;

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notification.append(elementTitle);
  notification.append(elementDescript);

  document.body.append(notification);

  setTimeout(() => notification.remove(), 2000);
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
