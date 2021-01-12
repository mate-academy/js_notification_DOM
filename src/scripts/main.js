'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const root = document.querySelector('body');

  const element = document.createElement('div');

  element.className = 'notification ' + type;

  const elTitle = document.createElement('h2');

  elTitle.className = 'title';
  elTitle.textContent = title;
  element.append(elTitle);

  const elDescription = document.createElement('p');

  elDescription.textContent = description;
  elDescription.className = 'description';
  element.append(elDescription);
  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';
  root.append(element);
  setTimeout(() => element.remove(), 2000);
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
