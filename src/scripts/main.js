'use strict';

function pushNotification(posTop, posRight, title, description, type) {
  const box = document.createElement('div');

  box.classList.add('notification', type);

  const tit = document.createElement('h2');

  tit.textContent = title;

  tit.classList.add('title');

  const paragraph = document.createElement('p');

  paragraph.textContent = description;

  box.append(tit, paragraph);

  box.style.top = posTop + 'px';
  box.style.right = posRight + 'px';

  document.body.append(box);

  setTimeout(() => {
    box.style.display = 'none';
  }, 2000);
}

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
