'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const logoEl = document.querySelector('h1.logo');

  const notificationWrapper = document.createElement('div');

  notificationWrapper.classList.add('notification', `${type}`);
  logoEl.after(notificationWrapper);
  notificationWrapper.style.top = `${posTop}px`;
  notificationWrapper.style.right = `${posRight}px`;

  const titleEl = document.createElement('h2');

  titleEl.classList.add('title');
  titleEl.innerText = title;

  const descriptionEl = document.createElement('p');

  descriptionEl.innerText = description;

  notificationWrapper.append(titleEl, descriptionEl);

  setTimeout(() => {
    notificationWrapper.style.display = 'none';
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
