'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');
  const h = document.createElement('h2');
  const p = document.createElement('p');

  container.classList.add('notification');
  container.classList.add(`${type}`);
  h.classList.add('title');
  h.textContent = title;
  p.innerHTML = description;
  document.body.append(container);
  container.append(h);
  container.append(p);
  container.style.right = posRight + 'px';
  container.style.top = posTop + 'px';

  setTimeout(() => {
    container.remove();
  }, 1800);
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
