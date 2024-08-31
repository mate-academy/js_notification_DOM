'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationBlock = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notificationBlock.classList.add('notification');
  notificationBlock.classList.add(type);

  notificationBlock.style.top = posTop + 'px';
  notificationBlock.style.right = posRight + 'px';

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;
  notificationDescription.innerText = description;

  notificationBlock.append(notificationTitle, notificationDescription);
  document.body.append(notificationBlock);

  setTimeout(() => {
    notificationBlock.style.visibility = 'hidden';
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
