'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here

  const messageBlock = document.createElement('div');

  messageBlock.className = 'notification ' + type;
  messageBlock.style.top = posTop + 'px';
  messageBlock.style.right = posRight + 'px';

  const messageBlockTitle = document.createElement('h2');

  messageBlockTitle.textContent = title;
  messageBlockTitle.className = 'title';
  messageBlock.append(messageBlockTitle);

  const messageBlockDescr = document.createElement('p');

  messageBlockDescr.textContent = description;
  messageBlock.append(messageBlockDescr);

  document.querySelector('body').append(messageBlock);

  setTimeout(function () {
    messageBlock.style.display = 'none';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
