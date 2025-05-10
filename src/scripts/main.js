'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notif = document.createElement('div');
  const notifTitle = document.createElement('h2');
  const notifDescription = document.createElement('p');

  notif.setAttribute('class', `notification ${type}`);
  notifTitle.setAttribute('class', 'title');

  notifTitle.textContent = title;
  notifDescription.textContent = description;

  document.body.append(notif);
  notif.append(notifTitle, notifDescription);

  if (type === 'warning') {
    notif.style.top = '290px';
    notif.style.right = '10px';
  } else if (type === 'error') {
    notif.style.top = '150px';
    notif.style.right = '10px';
  } else {
    notif.style.top = '10px';
    notif.style.right = '10px';
  }

  setTimeout(() => {
    notif.style.visibility = 'hidden';
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
