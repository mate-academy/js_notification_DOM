'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const div = document.createElement('div');

  div.classList.add('notification');
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  const h2 = document.createElement('h2');

  h2.textContent = title;
  h2.classList.add('title');

  const p = document.createElement('p');

  p.textContent = description;

  switch (type) {
    case 'success':
      div.classList.add('success');
      break;

    case 'warning':
      div.classList.add('warning');
      break;

    case 'error':
      div.classList.add('error');
      break;

    default:
      break;
  }

  div.appendChild(h2);
  div.appendChild(p);
  body.appendChild(div);

  setTimeout(() => {
    body.removeChild(div);
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
