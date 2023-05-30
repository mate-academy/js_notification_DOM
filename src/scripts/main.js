'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const blockNotify = document.createElement('div');
  const notifyTitle = document.createElement('h2');
  const notifyDescr = document.createElement('p');

  blockNotify.style.top = `${posTop}px`;
  blockNotify.style.right = `${posRight}px`;

  notifyTitle.textContent = title;
  notifyDescr.textContent = description;

  blockNotify.classList = `notification ${type}`;
  notifyTitle.className = 'title';

  blockNotify.append(notifyTitle);
  blockNotify.append(notifyDescr);
  body.append(blockNotify);

  setTimeout(() => {
    document.body.removeChild(blockNotify);
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
