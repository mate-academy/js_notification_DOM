'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const paragraph = document.createElement('p');
  const header = document.createElement('h2');

  message.className = `notification ${type}`;
  header.setAttribute('class', 'title');
  header.innerHTML = `${title}`;
  paragraph.innerHTML = `${description}`;

  message.append(header);
  message.append(paragraph);

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
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
