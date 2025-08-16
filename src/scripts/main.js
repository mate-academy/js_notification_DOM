'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');
  const body = document.querySelector('body');
  const p = document.createElement('p');
  const h2 = document.createElement('h2');

  element.classList.add('notification', type);
  h2.classList.add('title');

  body.prepend(element);

  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';
  p.textContent = description;
  h2.textContent = title;

  element.append(h2);
  element.append(p);

  const remove = () => {
    element.style.display = 'none';
  };

  window.setTimeout(remove, 2000);
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
