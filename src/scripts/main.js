'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;
  const message = document.createElement('div');

  body.append(message);

  message.classList = 'notification';
  message.classList.add(type);
  message.style.marginTop = posTop + 'px';
  message.style.marginRight = posRight + 'px';

  const messageTitle = document.createElement('h3');

  message.append(messageTitle);
  messageTitle.innerText = title;

  const messageText = document.createElement('p');

  message.append(messageText);
  messageText.innerText = description;

  setTimeout(() => {
    message.remove();
  }, '2000');
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
