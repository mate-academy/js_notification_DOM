'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const box = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  box.classList.add('notification');
  box.style.top = `${posTop}px`;
  box.style.right = `${posRight}px`;
  h2.classList.add('title');
  h2.textContent = title;
  p.textContent = description;

  if (type === 'success') {
    box.classList.add('success');
  } else if (type === 'error') {
    box.classList.add('error');
  } else {
    box.classList.add('warning');
  }

  body.append(box);
  box.append(h2);
  box.append(p);

  window.setTimeout(() => {
    box.style.visibility = 'hidden';
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
  'Message example.\n' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
