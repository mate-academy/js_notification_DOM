'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.classList.toggle('notification');
  div.classList.toggle(type);
  div.scrollTop = posTop;
  div.scrollLeft = posRight;
  h2.classList.toggle('title');
  h2.textContent = title;

  p.textContent = description;

  document.body.appendChild(div);
  div.prepend(h2);
  div.append(p);

  setTimeout(() => {
    div.style.visibility = 'hidden';
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
