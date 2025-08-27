'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageContainer = document.createElement('div');

  messageContainer.classList.add('notification', type);
  messageContainer.style.top = posTop + 'px';
  messageContainer.style.right = posRight + 'px';

  const messageTitle = document.createElement('h2');

  messageTitle.classList.add('title');
  messageTitle.textContent = title;
  messageContainer.append(messageTitle);

  const messageP = document.createElement('p');

  messageP.innerHTML = description.replace(/\n/g, '<br>');
  messageContainer.append(messageP);

  document.body.append(messageContainer);

  setTimeout(() => {
    messageContainer.style.display = 'none';
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
