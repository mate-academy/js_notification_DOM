'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const message = document.createElement('div');
  const titleOfMessage = document.createElement('h2');
  const text = document.createElement('p');

  message.className = `notification + ${type}`;
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  titleOfMessage.className = 'title';
  titleOfMessage.textContent = title;
  text.textContent = description;

  body.append(message);
  message.append(titleOfMessage);
  message.append(text);

  setTimeout(() => {
    message.remove();
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
