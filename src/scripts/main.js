'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');

  document.body.prepend(notification);

  notification.className = `notification ${type}`;
  notification.style.position = 'absolute';
  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  const notificationTitle = document.createElement('h2');

  notificationTitle.textContent = title;
  notificationTitle.className = 'title';
  notification.append(notificationTitle);

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;
  notification.append(notificationDescription);
};

const removeNotification = () => {
  document.querySelector('.notification').remove();
};

pushNotification(100, 100, 'title', 'description', 'warning');
setTimeout(removeNotification, 2000);
