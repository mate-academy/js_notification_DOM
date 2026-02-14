'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const container = document.createElement('div');

  if (container) {
    container.className = `notification notification ${type}`;
  }

  container.style.top = posTop + 'px';
  container.style.right = posRight + 'px';

  const titleEl = document.createElement('h2');

  titleEl.className = `title`;
  titleEl.textContent = title;

  const descriptionEl = document.createElement('p');

  descriptionEl.className = 'description';
  descriptionEl.textContent = description;

  container.append(titleEl, descriptionEl);

  document.body.append(container);

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
