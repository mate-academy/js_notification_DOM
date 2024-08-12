'use strict';

const body = document.body;

const pushNotification = (posTop, posRight, title, description, type) => {
  const head = document.createElement('h2');
  const notification = document.createElement('div');

  notification.className = 'notification';
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  head.innerText = title;
  head.className = 'title';

  switch (type) {
    case 'warning':
      notification.className += ' warning';
      break;

    case 'success':
      notification.className += ' success';
      break;

    case 'error':
      notification.className += ' error';
      break;
  }

  const desc = document.createElement('p');

  desc.innerText = description;

  notification.appendChild(head);
  notification.appendChild(desc);
  body.appendChild(notification);

  setTimeout(() => {
    notification.style.visibility = 'hidden';
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
