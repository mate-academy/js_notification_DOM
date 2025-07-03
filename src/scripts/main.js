'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;
  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const titleEl = document.createElement('h2');

  titleEl.className = 'title';
  titleEl.textContent = title;
  notification.appendChild(titleEl);

  const descriptionEl = document.createElement('p');

  descriptionEl.innerHTML = description.replace(/\n/g, '<br>');
  notification.appendChild(descriptionEl);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\nNotification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\nNotification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\nNotification should contain title and description.',
  'warning',
);
