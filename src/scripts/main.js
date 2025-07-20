'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');

  div.classList.add('notification', type);
  div.style.position = 'absolute';
  div.style.right = posRight + 'px';
  div.style.top = posTop + 'px';

  const heading = document.createElement('h2');

  heading.classList.add('title');
  heading.textContent = title;
  div.appendChild(heading);

  const text = document.createElement('p');

  text.textContent = description;
  div.appendChild(text);

  document.body.appendChild(div);

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
