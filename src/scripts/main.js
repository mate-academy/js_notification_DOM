'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  const el = document.createElement('div');

  el.classList.add('notification', type);
  el.style.top = `${posTop}px`;
  el.style.right = `${posRight}px`;

  const header = document.createElement('h2');

  header.classList.add('title');
  header.innerText = title;

  const text = document.createElement('p');

  text.innerText = description;

  el.append(header);
  el.append(text);

  body.append(el);
};

const notifications = document.querySelectorAll('.notification');

setTimeout(notifications.forEach(message => message.remove()), 2000);

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
