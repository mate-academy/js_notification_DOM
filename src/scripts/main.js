'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');

  container.className = `notification ${type}`;
  container.style.top = `${posTop}px`;
  container.style.right = `${posRight}px`;

  const titleH = document.createElement('h2');

  titleH.className = 'title';
  titleH.textContent = title;
  container.appendChild(titleH);

  const paragraph = document.createElement('p');

  paragraph.textContent = description;
  container.appendChild(paragraph);
  document.body.appendChild(container);

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
