'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageContainer = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  messageContainer.classList.add('notification', type);

  messageDescription.innerText = description;
  messageTitle.innerText = title;

  document.body.append(messageContainer);

  messageContainer.style.top = `${posTop}px`;
  messageContainer.style.right = `${posRight}px`;

  messageContainer.append(messageTitle);
  messageContainer.append(messageDescription);

  setTimeout(() => {
    messageContainer.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(180, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(325, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
