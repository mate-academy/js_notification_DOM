'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.className = 'notification';
  div.style.top = posTop + `px`;
  div.style.right = posRight + `px`;

  if (type === 'success') {
    div.className = div.className + ' success';
  } else if (type === 'error') {
    div.className = div.className + ' error';
  } else if (type === 'warning') {
    div.className = div.className + ' warning';
  }

  h2.innerText = title;
  h2.className = 'title';
  p.innerText = description;

  div.appendChild(h2);
  div.appendChild(p);
  document.querySelector('body').append(div);

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
