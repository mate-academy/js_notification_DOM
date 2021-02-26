'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const titleNotification = document.createElement('h2');
  const descriptionNotification = document.createElement('p');

  notification.classList.add('notification', `${type}`);
  titleNotification.classList.add('title');
  descriptionNotification.classList.add('description');

  titleNotification.innerText = title;
  descriptionNotification.innerText = description;

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  notification.append(titleNotification, descriptionNotification);
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
