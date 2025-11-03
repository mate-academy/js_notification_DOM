'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const el = document.createElement('div');

  el.classList.add('notification');
  el.classList.add(type);

  const titleEl = document.createElement('h2');

  titleEl.classList.add('title');
  titleEl.textContent = title;

  const p = document.createElement('p');

  p.textContent = description;

  el.style.top = posTop + 'px';
  el.style.right = posRight + 'px';
  el.appendChild(titleEl);
  el.appendChild(p);
  document.body.appendChild(el);

  setTimeout(() => {
    el.style.display = 'none';
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
