'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.classList.add('notification');
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;
  h2.classList.add('title');
  h2.textContent = title;
  p.textContent = description;

  if (type === 'success') {
    div.classList.add('success');
  } else if (type === 'error') {
    div.classList.add('error');
  } else {
    div.classList.add('warning');
  }

  body.append(div);
  div.append(h2);
  div.append(p);

  window.setTimeout(() => {
    div.style.visibility = 'none';
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
