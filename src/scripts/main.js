'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const heading = document.createElement('h2');
  const text = document.createElement('p');

  notification.classList.add('notification');
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  heading.classList.add('title');
  heading.innerText = title;
  text.innerText = description;
  notification.prepend(heading, text);

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
  }

  document.body.prepend(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
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
