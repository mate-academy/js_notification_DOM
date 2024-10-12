'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const createNotificationElement = () => {
    const notification = document.createElement('div');

    notification.className = `notification ${type}`;
    notification.style.position = 'fixed';
    notification.style.top = `${posTop}px`;
    notification.style.right = `${posRight}px`;

    const titleElement = document.createElement('h2');

    titleElement.className = 'title';
    titleElement.textContent = title;
    notification.appendChild(titleElement);

    const descriptionElement = document.createElement('p');

    descriptionElement.textContent = description;
    notification.appendChild(descriptionElement);

    return notification;
  };

  const showNotification = (element) => {
    document.body.appendChild(element);

    setTimeout(() => {
      document.body.removeChild(element);
    }, 2000);
  };

  const notificationElement = createNotificationElement();

  showNotification(notificationElement);
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
