'use strict';

const body = document.querySelector('body');
const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  h1.innerHTML = title;
  p.innerHTML = description;
  div.append(h1);
  div.append(p);
  div.className = 'notification ' + type;
  div.style.cssText = `top: ${posTop}px; right: ${posRight}px;`;

  body.append(div);

  setTimeout(() => {
    div.remove();
  }, 2000

  );
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
