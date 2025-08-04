'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const nt = document.createElement('div');

  nt.className = 'notification';
  nt.classList.add(type);

  nt.style.top = `${posTop}px`;
  nt.style.right = `${posRight}px`;

  const tit = document.createElement('h2');

  tit.classList.add('title');
  tit.textContent = title;

  const des = document.createElement('p');

  des.textContent = description;

  document.body.appendChild(nt);
  nt.appendChild(tit);
  nt.appendChild(des);

  setTimeout(() => {
    nt.style.display = 'none';
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
