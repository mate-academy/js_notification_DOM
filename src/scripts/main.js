'use strict';

let notifications = [];

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  notification.appendChild(titleElement);
  notification.appendChild(descriptionElement);

  document.body.appendChild(notification);

  notifications.forEach((notif) => {
    const currentTop = parseInt(notification.style.top);
    const existingTop = parseInt(notif.style.top);

    if (
      currentTop >= existingTop &&
      currentTop <= existingTop + notif.clientHeight + 20
    ) {
      notification.style.top = `${existingTop + notif.clientHeight + 20}px`;
    }
  });

  notifications.push(notification);

  setTimeout(() => {
    notification.remove();
    notifications = notifications.filter((notif) => notif !== notification);

    notifications.forEach((notif, index) => {
      notif.style.top = `${posTop + index * (notif.clientHeight + 20)}px`;
    });
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
