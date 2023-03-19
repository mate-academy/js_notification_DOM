'use strict';

const pushNotification = (posTop, posRight, title, description, type = '') => {
  const blockElement = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const paragraph = document.createElement('p');

  blockElement.classList.value = `notification ${type}`;
  blockElement.style.top = `${posTop}px`;
  blockElement.style.right = `${posRight}px`;

  messageTitle.classList.add('title');
  messageTitle.innerText = title;
  messageTitle.style.fontSize = '18px';

  paragraph.innerText = description;

  blockElement.append(messageTitle, paragraph);
  document.body.append(blockElement);
  setTimeout(() => blockElement.remove(), 2000);
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
