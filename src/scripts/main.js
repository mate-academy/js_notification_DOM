'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const div = document.createElement('div');
  const h2 = document.createElement('h1');
  const p = document.createElement('p');

  h2.textContent = title;
  p.textContent = description;

  h2.className = 'title';
  div.classList.add('notification', type);
  div.style.top = ${posTop}px;
  div.style.right = ${posRight}px;

  div.append(h2);
  div.append(p);

  document.body.append(div);

  setTimeout(function() {
    const messages = document.body.querySelector('div');

    messages.remove();
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
