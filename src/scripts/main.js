'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.innerText = title;
  h2.classList.add('title');
  p.innerText = description;

  notification.classList.add('notification', `${type}`);
  notification.appendChild(h2);
  notification.appendChild(p);

  const page = document.body;

  page.insertAdjacentElement('afterbegin', notification);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  setTimeout(() => {
    notification.hidden = true;
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  `Message example.\n ` + 'Notification should contain title and description.',
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
