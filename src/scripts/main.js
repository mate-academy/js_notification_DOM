'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notif = document.createElement('div');
  const titleEl = document.createElement('h2');
  const descriptionEl = document.createElement('p');

  titleEl.textContent = title;
  descriptionEl.textContent = description;
  notif.style.top = `${posTop}px`;
  notif.style.right = `${posRight}px`;
  titleEl.className = 'title';
  notif.className = 'notification';

  if (type === 'success') {
    notif.className += ' success';
  }

  if (type === 'error') {
    notif.className += ' error';
  }

  if (type === 'warning') {
    notif.className += ' warning';
  }

  notif.append(titleEl);
  notif.append(descriptionEl);
  document.body.append(notif);

  setTimeout(() => {
    notif.remove();
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
