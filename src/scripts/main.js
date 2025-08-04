'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');

  div.classList.add('notification');
  div.style.position = 'absolute';

  if (type === 'success') {
    div.classList.add('success');
  }

  if (type === 'error') {
    div.classList.add('error');
  }

  if (type === 'warning') {
    div.classList.add('warning');
  }

  const h = document.createElement('h2');

  h.classList.add('title');

  const p = document.createElement('p');

  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';

  h.textContent = title;
  p.textContent = description;
  div.append(h, p);
  document.body.appendChild(div);

  setTimeout(() => {
    div.style.display = 'none';
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
