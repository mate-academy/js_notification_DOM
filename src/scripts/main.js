'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // Створення елементів
  const body = document.querySelector('body');
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const text = document.createElement('p');

  // Додавання класів
  message.classList.add('notification', type);
  messageTitle.classList.add('title');

  // Позиціонування
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  // Додавання контенту
  messageTitle.textContent = title;
  text.innerHTML = description.replace(/\n/g, '<br>');

  // Додвання в DOM
  body.prepend(message);
  message.append(messageTitle, text);

  // Таймер
  setTimeout(() => {
    message.style.display = 'none';
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
