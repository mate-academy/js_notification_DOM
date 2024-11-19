'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;
  notification.style.position = 'relative';

  const titleElement = document.createElement('h2');

  titleElement.className = 'title';
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  notification.append(titleElement, descriptionElement);

  let container = document.querySelector('.notification-container');

  if (!container) {
    container = document.createElement('div');
    container.className = 'notification-container';
    container.style.position = 'fixed';
    container.style.top = `${posTop}px`;
    container.style.right = `${posRight}px`;
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '10px';
    document.body.append(container);
  }

  container.append(notification);

  setTimeout(() => {
    notification.remove();

    if (container.children.length === 0) {
      container.remove();
    }
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
