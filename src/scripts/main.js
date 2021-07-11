'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const titleBlock = document.createElement('h2');
  const descriptionBlock = document.createElement('p');

  titleBlock.innerText = title;
  descriptionBlock.innerText = description;

  notification.classList.add('notification');
  notification.classList.add(type);

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  document.querySelector('body').append(notification);
  notification.append(titleBlock);
  notification.append(descriptionBlock);
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
