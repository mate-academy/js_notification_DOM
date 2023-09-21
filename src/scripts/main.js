'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const header = document.createElement('h2');
  const paragraph = document.createElement('p');

  header.textContent = title;
  header.className = 'title';
  paragraph.textContent = description;

  message.classList.add('notification', type);
  

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  header.style.fontSize = '16px';

  message.append(header, paragraph);
  document.body.append(message);

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
