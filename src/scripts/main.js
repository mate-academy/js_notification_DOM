'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationCard = document.createElement('div');
  notificationCard.classList.add('notification');

  notificationCard.style.top = `${posTop}px`;
  notificationCard.style.right = `${posRight}px`;

  const notificationTitle = document.createElement('h2');
  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  const notificationInfo = document.createElement('p');
  notificationInfo.innerText = description;

  notificationCard.appendChild(notificationTitle);
  notificationCard.appendChild(notificationInfo);

  body.appendChild(notificationCard);

  if (type === 'success') {
    notificationCard.classList.add('success');
  } else if (type === 'error') {
    notificationCard.classList.add('error');
  } else if (type === 'warning') {
    notificationCard.classList.add('warning');
  }

  setTimeout(() => {
    notificationCard.remove();
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
