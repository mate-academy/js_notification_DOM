'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const titleText = document.createElement('h2');
  const descriptionText = document.createElement('p');

  notification.className = 'notification';

  switch (type) {
    case 'success':
      notification.classList.add(type);
      break;
    case 'error':
      notification.classList.add(type);
      break;
    case 'warning':
      notification.classList.add(type);
      break;
  }

  titleText.textContent = title;
  titleText.className = 'title';
  descriptionText.textContent = description;
  notification.appendChild(titleText);
  notification.appendChild(descriptionText);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = 0;
  }, 1000);
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
