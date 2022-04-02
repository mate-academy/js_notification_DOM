'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const titleDescription = document.createElement('h2');
  const messageDescription = document.createElement('p');

  message.classList.add('notification', type);
  titleDescription.className = 'title';
  titleDescription.textContent = title;
  messageDescription.textContent = description;

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  message.append(titleDescription);
  message.append(messageDescription);
  document.body.append(message);

  setTimeout(() => {
    message.remove();
  }, 2000);
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
