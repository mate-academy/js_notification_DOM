'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const titleMessage = document.createElement('h2');
  const descriptionMessage = document.createElement('p');

  message.classList.add('notification');
  message.classList.add(type);
  titleMessage.classList.add('title');

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  titleMessage.textContent = title;
  descriptionMessage.textContent = description;

  document.body.append(message);
  message.appendChild(titleMessage);
  message.appendChild(descriptionMessage);

  setTimeout(() => {
    message.style.visibility = 'hidden';
  }, '1000');
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
