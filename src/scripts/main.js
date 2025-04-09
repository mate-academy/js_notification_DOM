'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.setAttribute('style', `top: ${posTop}px; right: ${posRight}px;`);

  const titleElem = document.createElement('h2');

  titleElem.className = 'title';
  titleElem.textContent = title;

  const descriptionElem = document.createElement('p');

  descriptionElem.textContent = description;

  notification.appendChild(titleElem);
  notification.appendChild(descriptionElem);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.display = 'none';
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
