'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');

  div.classList.add('notification');
  div.classList.add(type);
  div.style.marginTop = `${posTop}px`;
  div.style.marginRight = `${posRight}px`;
  document.body.append(div);

  const h2 = document.createElement('h2');

  h2.classList.add('title');
  h2.textContent = title;
  div.append(h2);

  const p = document.createElement('p');

  p.textContent = description;
  div.append(p);
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

setTimeout(pushNotification, 2.0 * 1000);
