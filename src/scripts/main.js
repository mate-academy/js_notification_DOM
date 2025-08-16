'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  notification.classList.add('notification', type);

  const text1 = document.createElement('h2');

  text1.classList.add('title');
  text1.textContent = title;

  const text2 = document.createElement('p');

  text2.textContent = description;

  notification.appendChild(text1);
  notification.appendChild(text2);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.visibility = 'hidden'; // Робимо невидимим
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
