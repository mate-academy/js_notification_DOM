'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationContainer = document.createElement('div');

  notificationContainer.classList.add('notification');

  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');

  notificationTitle.textContent = title;

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;

  notificationContainer.append(notificationTitle, notificationDescription);

  function createNotification(container, topPos, rightPos, notifType) {
    container.classList.add(notifType);
    container.style.position = 'fixed';
    container.style.top = `${topPos}px`;
    container.style.right = `${rightPos}px`;

    document.body.appendChild(container);

    setTimeout(() => {
      container.remove();
    }, 2000);
  }

  createNotification(notificationContainer, posTop, posRight, type);
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
