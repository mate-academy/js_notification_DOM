'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const messageContainer = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageParagraph = document.createElement('p');

  messageContainer.classList.add('notification');
  messageContainer.classList.add(type);
  messageContainer.style.top = posTop + 'px';
  messageContainer.style.right = posRight + 'px';
  messageTitle.className = 'title';
  messageTitle.textContent = title;
  messageParagraph.textContent = description;

  messageContainer.append(messageTitle);
  messageContainer.append(messageParagraph);

  document.body.append(messageContainer);

  setTimeout(function() {
    messageContainer.remove();
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
