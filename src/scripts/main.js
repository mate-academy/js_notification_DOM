'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.insertAdjacentHTML('afterBegin',
    `<h2 class = 'title'>${title}</h2><p>${description}</p>`);

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  document.body.append(notification);

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.<br> '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.<br> '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.<br> '
  + 'Notification should contain title and description.', 'warning');
