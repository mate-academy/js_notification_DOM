'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.style.cssText = `top: ${posTop}px; right: ${posRight}px`;
  div.classList.add('notification', type);

  h2.classList.add('title');
  h2.innerText = title;

  p.innerText = description;

  div.append(h2, p);

  body.insertBefore(div, body.childNodes[2]);

  setTimeout(() => {
    body.removeChild(div);
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
