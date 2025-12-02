'use strict';

function pushNotification(x, y, title, description, type) {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.style.position = 'absolute';
  notification.style.left = `${x}px`;
  notification.style.top = `${y}px`;

  const titleEl = document.createElement('h2');

  titleEl.classList.add('title');
  titleEl.textContent = title;

  const descriptionEl = document.createElement('p');

  descriptionEl.textContent = description;

  notification.append(titleEl, descriptionEl);

  document.body.append(notification);

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
}
window.pushNotification = pushNotification;
