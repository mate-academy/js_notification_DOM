'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const messageBody = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageText = document.createElement('p');

  messageBody.className = `notification ${type}`;
  messageTitle.className = 'title';
  messageBody.style.top = `${posTop}px`;
  messageBody.style.right = `${posRight}px`;
  messageTitle.style.letterSpacing = '-1px';
  messageTitle.innerText = title;
  messageText.innerText = description;
  messageBody.append(messageTitle, messageText);

  body.append(messageBody);

  setTimeout(() => {
    messageBody.remove();
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
