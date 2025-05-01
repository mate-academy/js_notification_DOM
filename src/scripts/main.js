'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const titles = document.createElement('h2');
  const text = document.createElement('p');

  div.classList.add('notification', type);
  titles.classList.add('title');

  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';
  titles.innerHTML = title;
  text.innerHTML = description;

  div.append(titles);
  div.append(text);

  document.body.append(div);

  setTimeout(() => div.hidden = true, 2000);
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
