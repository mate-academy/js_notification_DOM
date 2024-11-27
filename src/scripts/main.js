'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.className = 'notification';
  div.classList.add(type);
  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';
  div.style.visibility = 'visible';
  h2.textContent = title;
  h2.className = 'title';
  p.textContent = description;
  div.append(h2, p);
  body.append(div);

  function hide(someDiv) {
    someDiv.style.visibility = 'hidden';
  }

  setTimeout(() => hide(div), 2000);
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
