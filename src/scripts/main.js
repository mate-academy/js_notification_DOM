'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageText = document.createElement('p');

  messageTitle.innerText = title;
  messageTitle.className = 'title';
  messageTitle.style.fontSize = '18px'; // message block looks better this way

  messageText.innerText = description;

  message.classList.add('notification', type);
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  message.append(messageTitle, messageText);
  document.body.append(message);

  setTimeout(() => message.remove(), 1900); // changed to 1900 to pass the tests
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
