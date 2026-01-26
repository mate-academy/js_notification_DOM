'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here

  const notification = document.createElement('div');

  notification.classList.add(type, 'notification');

  notification.style.position = 'absolute';
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  const titleTwo = document.createElement('h2');

  titleTwo.className = 'title';

  titleTwo.textContent = title;

  const p = document.createElement('p');

  p.textContent = description;

  notification.append(titleTwo, p);

  document.body.append(notification);

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
