'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const element = document.createElement('div');
  const heading = document.createElement('h2');
  const message = document.createElement('p');

  body.append(element);

  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  element.className = `notification + ${type}`;

  heading.className = 'title';
  heading.textContent = title;

  message.textContent = description;

  element.append(heading, message);

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
