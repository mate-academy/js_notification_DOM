'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');
  const blockTitle = document.createElement('h2');
  const desc = document.createElement('p');

  container.classList.add('notification', type);
  document.body.append(container);

  blockTitle.classList.add('title');
  blockTitle.textContent = title;
  desc.textContent = description;

  container.append(blockTitle);
  container.append(desc);

  container.style.top = posTop + 'px';
  container.style.right = posRight + 'px';

  setTimeout(() => container.remove(), 2000);
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
