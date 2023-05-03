'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageNotification = document.createElement('div');
  const heading = document.createElement('h2');
  const message = document.createElement('p');

  heading.innerText = title;
  heading.classList.add('title');
  message.innerText = description;

  messageNotification.style.top = posTop + 'px';
  messageNotification.style.Right = posRight + 'px';
  messageNotification.classList.add('notification', type);
  messageNotification.append(heading, message);

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
