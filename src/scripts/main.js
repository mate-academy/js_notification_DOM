'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.querySelector('body');

  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notification.classList.add(type, 'notification');
  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  notificationTitle.className = 'title';
  notificationTitle.textContent = title;

  notificationDescription.textContent = description;

  notification.append(notificationTitle);
  notification.append(notificationDescription);

  body.append(notification);

  setTimeout(() => notification.remove(), 2000);
};

pushNotification(10, 10, 'Title', 'Description', 'success');
