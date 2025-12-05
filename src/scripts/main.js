'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');

  container.classList.add('notification');
  container.classList.add(type);

  const h2 = document.createElement('h2');

  const text = document.createElement('p');

  h2.classList.add('title');
  h2.textContent = title;
  container.append(h2);
  text.textContent = description;
  container.append(text);
  document.body.append(container);
  container.style.position = 'absolute';
  container.style.top = posTop + 'px';
  container.style.right = posRight + 'px';

  setTimeout(() => {
    container.style.display = 'none';
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
