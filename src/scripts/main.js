'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const elNotification = document.createElement('div');
  const elTitle = document.createElement('h2');
  const elParagrath = document.createElement('p');

  elNotification.classList.add('notification');
  elNotification.classList.add(type);
  // elNotification.style.position = 'absolute';
  elNotification.style.top = posTop + 'px';
  elNotification.style.right = posRight + 'px';

  elTitle.textContent = title;
  elTitle.classList.add('title');

  elParagrath.textContent = description;

  elNotification.append(elTitle, elParagrath);
  document.querySelector('body').append(elNotification);
  setTimeout(() => (elNotification.style.display = 'none'), 2000);
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
