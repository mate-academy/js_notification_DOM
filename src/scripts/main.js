'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notificationBlock = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationMessage = document.createElement('p');

  notificationBlock.classList.add('notification', type);
  notificationTitle.classList.add('title');

  notificationTitle.textContent = title;
  notificationMessage.textContent = description;

  notificationBlock.append(notificationTitle, notificationMessage);

  notificationBlock.style.top = `${top}px`;
  notificationBlock.style.right = `${right}px`;

  document.body.append(notificationBlock);

  setTimeout(() => {
    notificationBlock.style.display = 'none';
  },
  2000);
};

pushNotification(
  20,
  10,
  'Title',
  `This is example  of result.
  Notification should contain title and description.`,
  'error');
