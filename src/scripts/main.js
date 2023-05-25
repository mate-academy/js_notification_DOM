'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const block = document.createElement('div');
  const titleMessage = document.createElement('h2');
  const message = document.createElement('p');

  block.classList = `notification ${type}`;
  titleMessage.className = 'title';

  titleMessage.textContent = title;
  message.textContent = description;

  body.append(block);
  block.append(titleMessage);
  block.append(message);

  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;
  titleMessage.style.fontSize = `16px`;

  setTimeout(() => {
    block.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n'
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n'
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n'
  + 'Notification should contain title and description.', 'warning');
