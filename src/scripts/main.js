'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const inTitle = document.createElement('h2');
  const inDescription = document.createElement('p');

  document.body.append(notification);

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';
  notification.classList.add('notification', type);
  notification.style.boxSizing = 'content-box';

  notification.append(inTitle);
  inTitle.classList.add('title');
  inTitle.append(title);

  notification.append(inDescription);
  inDescription.append(description);

  setTimeout(() => {
    notification.remove();
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
