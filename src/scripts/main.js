'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationMessage = document.createElement('div');
  const titleOfNotification = document.createElement('h2');
  const descriptionOfNotification = document.createElement('p');

  notificationMessage.classList.add('notification', type);
  titleOfNotification.className = 'title';

  titleOfNotification.innerText = title;
  descriptionOfNotification.innerText = description;

  notificationMessage.style.top = posTop + 'px';
  notificationMessage.style.right = posRight + 'px';

  titleOfNotification.style.fontSize = '17px';
  descriptionOfNotification.style.fontSize = '15px';

  document.body.append(notificationMessage);
  notificationMessage.append(titleOfNotification, descriptionOfNotification);

  setTimeout(() => {
    notificationMessage.remove();
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
