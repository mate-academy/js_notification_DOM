'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const titleOfNotification = document.createElement('h2');
  const descriptionOfNotification = document.createElement('p');

  descriptionOfNotification.innerText = description;
  titleOfNotification.innerText = title;
  titleOfNotification.classList.add('title');
  notification.classList.add('notification', type);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';
  notification.append(titleOfNotification);
  notification.append(descriptionOfNotification);
  document.querySelector('body').appendChild(notification);

  setTimeout(
    () => notification.remove(), 2000);
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
