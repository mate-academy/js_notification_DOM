'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const messageBlock = document.createElement('div');
  const messageH2 = document.createElement('h2');
  const messageP = document.createElement('p');

  messageBlock.style.position = 'absolute';
  messageBlock.style.top = posTop + 'px';
  messageBlock.style.right = posRight + 'px';
  messageBlock.classList.add(type, 'notification');

  messageH2.textContent = title;
  messageH2.classList.add('title');
  messageP.textContent = description;

  messageBlock.appendChild(messageH2);
  messageBlock.appendChild(messageP);
  document.body.appendChild(messageBlock);

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
