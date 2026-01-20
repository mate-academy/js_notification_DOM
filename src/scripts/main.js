'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  const elementTitle = document.createElement('h2');
  elementTitle.textContent = title;
  elementTitle.classList.add('title');
  notification.append(elementTitle);

  const elementDescription = document.createElement('p');
  elementDescription.textContent = description;
  notification.append(elementDescription);

  if (type === 'success') {
    notification.classList.add('success');
    }

  if (type === 'error') {
    notification.classList.add('error');
  }

  if (type === 'warning') {
    notification.classList.add('warning');
  }

  setTimeout(() => notification.style.display = 'none', 2000);
  document.body.appendChild(notification);
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
