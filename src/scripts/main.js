'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageNotification = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  messageNotification.classList.add('notification');
  messageNotification.classList.add(type);
  messageNotification.style.top = posTop + 'px';
  messageNotification.style.right = posRight + 'px';

  messageTitle.className = 'title';
  messageTitle.textContent = title;

  messageDescription.textContent = description;

  messageNotification.append(messageTitle);
  messageNotification.append(messageDescription);
  document.body.append(messageNotification);

  setTimeout(() => {
    messageNotification.remove();
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
