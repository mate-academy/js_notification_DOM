'use strict';

const container = document.createElement('div');

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const message = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.innerHTML = title;
  h2.className = 'title';

  p.innerHTML = description;

  message.className = 'notification';
  message.classList.add(type);
  message.append(h2);
  message.append(p);
  message.style.right = posRight + 'px';
  message.style.top = posTop + 'px';
  container.append(message);

  body.append(container);
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

setTimeout(() => {
  container.style.display = 'none';
}, 2000);

// Have a good day!
