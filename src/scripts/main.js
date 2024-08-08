'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');

  container.className = `notification ${type}`;
  container.style.top = posTop + 'px';
  container.style.right = posRight + 'px';
  document.querySelector('body').append(container);

  const h2 = document.createElement('h2');

  h2.setAttribute('class', 'title');
  h2.textContent = title;

  const p = document.createElement('p');

  p.textContent = description;

  container.append(h2);
  container.append(p);

  setTimeout(() => {
    container.style.visibility = 'hidden';
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
