'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');

  block.className = `notification ${type}`;
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  const heading = document.createElement('h2');

  heading.className = 'title';
  heading.textContent = title;

  const text = document.createElement('p');

  text.textContent = description;

  block.append(heading, text);
  document.body.append(block);

  setTimeout(() => {
    block.remove();
  }, 5000);
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
