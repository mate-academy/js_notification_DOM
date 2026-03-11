'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationBlock = document.createElement('div');
  const titleElement = document.createElement('h2');
  const notificationMassage = document.createElement('p');

  if (type === 'success') {
    notificationBlock.classList.add('success');
  } else if (type === 'error') {
    notificationBlock.classList.add('error');
  } else if (type === 'warning') {
    notificationBlock.classList.add('warning');
  }

  notificationBlock.classList.add('notification');
  titleElement.classList.add('title');
  titleElement.textContent = title;
  notificationMassage.textContent = description;
  notificationBlock.style.top = `${posTop}px`;
  notificationBlock.style.right = `${posRight}px`;

  notificationBlock.append(titleElement, notificationMassage);
  document.body.append(notificationBlock);

  setTimeout(() => {
    notificationBlock.style.display = `none`;
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
