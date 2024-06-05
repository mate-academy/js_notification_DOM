'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');

  div.classList.add(type, 'notification');
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.classList.add('title');
  h2.innerText = title;
  p.innerText = description;
  div.append(h2);
  div.append(p);

  document.body.prepend(div);

  setTimeout(() => {
    div.remove();
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
