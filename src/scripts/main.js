'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const heading = document.createElement('h2');
  const body = document.createElement('p');

  heading.textContent = title;
  heading.classList = 'title';
  body.textContent = description;

  message.appendChild(heading);
  message.appendChild(body);
  message.classList = `notification ${type}`;

  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  document.body.appendChild(message);

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
