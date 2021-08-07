'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageModal = document.createElement('div');

  messageModal.style.cssText = `top:${posTop}px; right:${posRight}px;`;
  messageModal.className = 'notification ' + type;

  const mesageTitle = document.createElement('h2');

  mesageTitle.className = 'title';

  mesageTitle.textContent = title;

  const messageText = document.createElement('p');

  messageText.textContent = description;

  messageModal.append(mesageTitle, messageText);
  document.body.append(messageModal);

  setTimeout(() => {
    messageModal.remove();
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
