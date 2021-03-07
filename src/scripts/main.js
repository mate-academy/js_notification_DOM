'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationMessage = document.createElement('div');
  const titleOfNotification = document.createElement('h2');
  const textOfNotification = document.createElement('p');

  notificationMessage.classList.add('notification', type);
  titleOfNotification.classList.add('title');

  titleOfNotification.innerText = title;
  textOfNotification.innerText = description;

  notificationMessage.append(titleOfNotification, textOfNotification);

  document.querySelector('body').append(notificationMessage);
  notificationMessage.style.top = posTop + 'px';
  notificationMessage.style.right = posRight + 'px';

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
