'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  block.classList.add('notification', type);
  block.style.top = posTop + 'px';
  block.style.right = posRight + 'px';

  h2.textContent = title;
  h2.classList.add('title');

  p.innerHTML = description.replace(/\n/g, '<br>');

  block.append(h2);
  block.append(p);

  document.querySelector('body').append(block);

  setTimeout(() => {
    block.style.opacity = '0';
    setTimeout(() => block.remove(), 500);
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
