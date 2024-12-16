'use strict';
// document.createElement('div');

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

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
    default:
      break;
  }

  notification.getBoundingClientRect();
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  const notTitle = document.createElement('h2');

  notTitle.textContent = title;
  notTitle.classList.add('title');

  const notDescription = document.createElement('p');

  notDescription.textContent = description;

  notification.append(notTitle);
  notification.append(notDescription);

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
