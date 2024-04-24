'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationEl = document.body.appendChild(
    document.createElement('div'),
  );
  const titleEl = notificationEl.appendChild(document.createElement('h2'));
  const descriptionEl = notificationEl.appendChild(document.createElement('p'));

  const timerId = setTimeout(() => {
    notificationEl.style.display = 'none';
    clearTimeout(timerId);
  }, 2000);

  notificationEl.className = 'notification';
  notificationEl.style.top = `${posTop}px`;
  notificationEl.style.right = `${posRight}px`;
  notificationEl.classList.add(type);

  titleEl.classList.add('title');
  titleEl.textContent = title;

  descriptionEl.textContent = description;
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
