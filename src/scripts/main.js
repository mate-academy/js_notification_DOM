/* eslint-disable padding-line-between-statements */
'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  notification.className = `notification + ${type}`;

  const nTitle = document.createElement('h2');
  nTitle.className = 'title';
  nTitle.textContent = title;

  const nDescription = document.createElement('p');
  const descriptionLines = description.split('\n');

  descriptionLines.forEach(line => {
    nDescription.appendChild(document.createTextNode(line));
    nDescription.appendChild(document.createElement('br'));
  });

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notification.append(nTitle);
  notification.append(nDescription);
  body.append(notification);

  setTimeout(() => {
    notification.remove();
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
