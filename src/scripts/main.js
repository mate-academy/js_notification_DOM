'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationDiv = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationParagraph = document.createElement('p');

  notificationDiv.classList.add('notification', type);
  notificationDiv.style.top = posTop + 'px';
  notificationDiv.style.right = posRight + 'px';

  notificationTitle.classList.add('title');
  notificationTitle.innerHTML = title;

  notificationParagraph.innerHTML = description;

  notificationDiv.append(notificationTitle, notificationParagraph);
  document.body.append(notificationDiv);

  setTimeout(() => (notificationDiv.style.display = 'none'), 2000);
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
