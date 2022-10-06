'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here

  const h2 = document.createElement('h2');
  const text = document.createElement('p');
  const wrap = document.createElement('div');

  h2.classList.add('title');
  h2.textContent = title;

  text.textContent = description;

  wrap.classList.add('notification', type);

  wrap.append(h2, text);

  wrap.style.top = `${posTop}px`;

  wrap.style.right = `${posRight}px`;

  wrap.style.boxSizing = 'content-box';

  document.body.append(wrap);

  setTimeout(() => {
    wrap.remove();
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
