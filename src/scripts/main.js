'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageBlock = document.createElement('div');

  messageBlock.style.top = `${posTop}px`;
  messageBlock.style.right = `${posRight}px`;
  // messageBlock.style.boxSizing = 'content-box';
  messageBlock.classList.add('notification', type);

  const titleMessage = document.createElement('h2');

  titleMessage.classList.add('title');
  titleMessage.innerText = title;

  const messageText = document.createElement('p');

  messageText.innerText = description;

  messageBlock.append(titleMessage, messageText);
  document.body.lastChild.before(messageBlock);

  setTimeout(() => {
    messageBlock.remove();
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
