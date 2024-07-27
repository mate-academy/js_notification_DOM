'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationEl = document.createElement('div');

  notificationEl.classList.add('notification');

  const titleEl = document.createElement('h2');

  titleEl.innerText = title;
  titleEl.classList.add('title');

  const messageEl = document.createElement('p');

  messageEl.innerText = description;

  if (type === 'success') {
    notificationEl.classList.add('success');
  }

  if (type === 'error') {
    notificationEl.classList.add('error');
  }

  if (type === 'warning') {
    notificationEl.classList.add('warning');
  }

  notificationEl.style.top = posTop + 'px';
  notificationEl.style.right = posRight + 'px';

  document.body.append(notificationEl);
  notificationEl.append(titleEl);
  notificationEl.append(messageEl);

  setTimeout(() => (notificationEl.style.display = 'none'), 2000);
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
