'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notificationBlock = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationText = document.createElement('p');

  notificationBlock.classList.add(`notification`, type);
  notificationBlock.style.cssText = `top: ${top}; right: ${right}`;

  document.body.append(notificationBlock);
  notificationBlock.append(notificationTitle, notificationText);

  notificationTitle.textContent = title;
  notificationText.textContent = description;

  setTimeout(() => notificationBlock.remove(), 2000);
};

pushNotification(
  30,
  30,
  'Notification Title',
  'This is example of notification.',
  'warning'
);
