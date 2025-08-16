'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');

  container.className = `notification ${type}`;
  container.style.top = `${posTop}px`;
  container.style.right = `${posRight}px`;

  const newTitle = document.createElement('h2');

  newTitle.className = 'title';
  newTitle.textContent = title;

  container.append(newTitle);

  const text = document.createElement('p');

  text.textContent = description;
  container.append(text);
  document.body.append(container);

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
