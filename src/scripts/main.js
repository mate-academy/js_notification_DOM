'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');

  block.classList.add('notification', `${type}`);
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  const titleText = document.createElement('h2');

  titleText.textContent = title;

  block.append(titleText);

  const content = document.createElement('p');

  content.textContent = description;

  block.append(content);

  document.body.append(block);

  setTimeout(() => {
    block.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(170, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(305, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
