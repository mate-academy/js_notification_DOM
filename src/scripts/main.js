'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');

  div.className = 'notification';

  div.classList.add(type);
  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';

  const h2 = document.createElement('h2');

  h2.className = 'title';
  h2.textContent = title;
  div.appendChild(h2);

  const p = document.createElement('p');

  p.className = 'description';
  p.textContent = description;
  div.appendChild(p);

  document.body.appendChild(div);

  setTimeout(() => (div.style.visibility = 'hidden'), 2000);
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
