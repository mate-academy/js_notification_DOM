'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const header = document.createElement('h2');
  const message = document.createElement('p');

  if (type === 'success') {
    notification.className = 'notification success';

    header.className = 'title';
    header.textContent = title;

    notification.style.top = posTop + 'px';
    notification.style.right = posRight + 'px';

    message.textContent = description;

    notification.appendChild(header);
    notification.appendChild(message);
  }

  if (type === 'error') {
    notification.className = 'notification error';

    header.className = 'title';
    header.textContent = title;

    notification.style.top = posTop + 'px';
    notification.style.right = posRight + 'px';

    message.textContent = description;

    notification.appendChild(header);
    notification.appendChild(message);
  }

  if (type === 'warning') {
    notification.className = 'notification warning';

    notification.style.top = posTop + 'px';
    notification.style.right = posRight + 'px';

    header.className = 'title';
    header.textContent = title;

    message.textContent = description;

    notification.appendChild(header);
    notification.appendChild(message);
  }

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = 0;
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
