'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const paragraph = document.createElement('p');

  message.className = `notification ${type}`;
  message.style.boxSizing = 'content-box';
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';
  document.body.append(message);

  messageTitle.className = 'title';
  messageTitle.textContent = title;
  message.append(messageTitle);

  paragraph.className = 'description';
  paragraph.textContent = description;
  message.append(paragraph);

  setTimeout(() => message.remove(), 2000);
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
