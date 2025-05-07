'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notification = document.createElement('div');
  const elTitle = document.createElement('h2');
  const elDescription = document.createElement('p');

  elTitle.innerText = title;
  elTitle.className = 'title';
  elDescription.innerText = description;
  notification.className = `notification ${type}`;
  notification.insertAdjacentElement('beforeend', elTitle);
  notification.insertAdjacentElement('beforeend', elDescription);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';
  body.insertAdjacentElement('afterbegin', notification);

  setTimeout(() => {
    notification.style.visibility = `hidden`;
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
