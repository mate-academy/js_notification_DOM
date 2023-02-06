'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');

  const notification = document.createElement('div');
  const text = document.createElement('h2');

  notification.append(text);
  text.textContent = title;
  text.className = 'title';

  const descriptionText = document.createElement('p');

  descriptionText.textContent = description;

  notification.append(descriptionText);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  notification.className = `notification + ${type}`;

  body.append(notification);

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
