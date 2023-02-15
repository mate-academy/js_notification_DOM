'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div')
  notification.classList.add('notification', type);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const titleOfNotification = document.createElement('h2');
  titleOfNotification.classList.add('title');
  titleOfNotification.textContent = title;

  const message = document.createElement('p');
  message.textContent = description;

  notification.append(titleOfNotification,message);

  document.body.append(notification);

  // setTimeout(() => {
  //   document.body.remove(notification)
  // }, 2000);
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
