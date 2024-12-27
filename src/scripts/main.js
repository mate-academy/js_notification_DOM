'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.className = 'notification';
  message.classList.add(type);

  const messageTitle = document.createElement('h2');

  messageTitle.className = 'title';
  messageTitle.textContent = title;

  const messageDescription = document.createElement('p');

  messageDescription.textContent = description;

  message.append(messageTitle, messageDescription);
  document.body.append(message);

  // Встановлення стилів для позиціонування
  message.style.position = 'absolute';

  message.style.left =
    document.documentElement.clientWidth -
    posRight -
    message.offsetWidth +
    'px';
  message.style.top = posTop + 'px';

  // Автоматичне видалення повідомлення через 2 секунди
  setTimeout(() => {
    message.remove();
  }, 2000);
};

// Виклик функції з різними повідомленнями
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
