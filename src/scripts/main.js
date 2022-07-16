'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.className = `notification ${type}`;
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  const newTitle = document.createElement('h2');

  newTitle.className = 'title';
  newTitle.textContent = title;
  newTitle.style.margin = '5px';

  const newDescription = document.createElement('p');

  newTitle.textContent = description;

  message.append(newTitle, newDescription);

  document.body.append(message);

  // setTimeout(() => {
  //   message.remove();
  // }, 3000);
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
