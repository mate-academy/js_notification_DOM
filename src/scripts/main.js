'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const logoEl = document.querySelector('.logo');
  const notificationComponent = document.createElement('div');

  notificationComponent.classList.add('notification', type);

  notificationComponent.style.top = `${posTop}px`;
  notificationComponent.style.right = `${posRight}px`;

  const titleEl = document.createElement('h2');

  titleEl.classList.add('title');
  titleEl.textContent = title;

  const descriptionEl = document.createElement('p');

  descriptionEl.classList.add('description');
  descriptionEl.textContent = description;

  notificationComponent.append(titleEl, descriptionEl);

  logoEl.after(notificationComponent);

  setTimeout(() => {
    notificationComponent.style.visibility = 'hidden';
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
