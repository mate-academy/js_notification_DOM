'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const message = document.createElement('div');

  message.style.top = `${posTop}px`;
  message.style.rigth = `${posRight}px`;
  message.className = `notification ${type}`;

  const messageTitle = document.createElement('h2');

  messageTitle.className = 'title';
  messageTitle.textContent = title;
  messageTitle.style.whiteSpace = 'nowrap';
  message.append(messageTitle);

  const messageDescription = document.createElement('p');

  messageDescription.innerHTML = description.replace(/\n/g, '<br>');
  message.append(messageDescription);

  body.append(message);

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
