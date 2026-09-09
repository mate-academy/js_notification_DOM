'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.setAttribute('role', 'status');
  notification.setAttribute('aria-live', 'polite');

  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  notification.appendChild(titleElement);
  notification.appendChild(descriptionElement);

  // Позиція повідомлення відносно вікна браузера
  notification.style.position = 'fixed';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  document.body.append(notification);

  setTimeout(() => {
    notification.style.display = 'none';

    setTimeout(() => {
      notification.remove();
    }, 500);
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
