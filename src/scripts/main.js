'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const titleText = document.createElement('h2');
  const pText = document.createElement('p');

  titleText.textContent = title;
  titleText.className = 'title';
  pText.textContent = description;

  div.className = 'notification ' + type;
  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';

  body.append(div);
  div.appendChild(titleText);
  div.appendChild(pText);

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
