'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const divMessage = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  document.body.append(divMessage);
  divMessage.style.top = posTop + 'px';
  divMessage.style.right = posRight + 'px';
  divMessage.classList.add('notification');
  divMessage.classList.add(type);

  divMessage.append(h2);
  h2.classList.add('title');
  h2.textContent = title;

  divMessage.append(p);
  p.textContent = description;

  setTimeout(() => {
    divMessage.style.display = 'none';
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
