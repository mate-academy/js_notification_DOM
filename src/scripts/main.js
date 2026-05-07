'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notificationEl = document.createElement('div');

  notificationEl.setAttribute('class', `notification ${type}`);

  const titleEl = document.createElement('h2');

  titleEl.setAttribute('class', 'title');

  titleEl.textContent = title;

  const descriptionEl = document.createElement('p');

  descriptionEl.textContent = description;

  notificationEl.appendChild(titleEl);
  notificationEl.appendChild(descriptionEl);
  document.body.appendChild(notificationEl);

  notificationEl.style.top = posTop + 'px';
  notificationEl.style.right = posRight + 'px';

  setTimeout(() => {
    notificationEl.style.visibility = 'hidden';
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
