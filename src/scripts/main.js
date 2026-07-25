'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = Object.assign(document.createElement('div'), {
    className: `notification ${type}`,
  });

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  const notificationTitle = Object.assign(document.createElement('h2'), {
    textContent: title,
    className: 'title',
  });
  const notificationDescription = Object.assign(document.createElement('p'), {
    textContent: description,
  });

  notification.append(notificationTitle, notificationDescription);
  document.body.append(notification);

  setTimeout(() => (notification.style.display = 'none'), 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
