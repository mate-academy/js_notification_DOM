'use strict';

const pushNotification = (
  posTop,
  posRight,
  title,
  description,
  type,
  duration = 1000,
) => {
  const validTypes = ['success', 'error', 'warning'];

  if (!validTypes.includes(type)) {
    throw new Error(
      `Invalid notification type: "${type}". Expected one of the following types: ${validTypes.join(', ')}.`,
    );
  }

  const notification = document.createElement('div');

  notification.classList.add('notification', type);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');

  titleElement.className = 'title';
  titleElement.textContent = title;
  notification.appendChild(titleElement);

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;
  notification.appendChild(descriptionElement);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, duration);
};

const showNotifications = (notifications) => {
  notifications.forEach(
    ({ posTop, posRight, title, description, type, duration }) => {
      try {
        pushNotification(posTop, posRight, title, description, type, duration);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error.message);
      }
    },
  );
};

showNotifications([
  {
    posTop: 10,
    posRight: 10,
    title: 'Title of Success message',
    description: `Message example. Notification should contain title and description.`,
    type: 'success',
    duration: 3000,
  },
  {
    posTop: 150,
    posRight: 10,
    title: 'Title of Error message',
    description: `Message example. Notification should contain title and description.`,
    type: 'error',
    duration: 3000,
  },
  {
    posTop: 290,
    posRight: 10,
    title: 'Title of Warning message',
    description: `Message example. Notification should contain title and description.`,
    type: 'warning',
    duration: 3000,
  },
]);
