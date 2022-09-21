'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const page = document.querySelector('body');

  const notification = document.createElement('div');

  notification.style.top = posTop + 'px';

  notification.style.right = posRight + 'px';

  notification.classList.add('notification');

  switch (type) {
    case 'success':
      notification.classList.add('success');
      break;

    case 'error':
      notification.classList.add('error');
      break;

    case 'warning':
      notification.classList.add('warning');
      break;
  }

  const notificationTitle = document.createElement('h2');

  notificationTitle.innerText = title;

  notificationTitle.classList.add('title');

  notificationTitle.style.fontSize = '18px';

  notification.append(notificationTitle);

  const notificationDescription = document.createElement('p');

  notificationDescription.innerText = description;

  notification.append(notificationDescription);

  page.append(notification);

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
