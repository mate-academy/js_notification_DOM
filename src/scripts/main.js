'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const heading = document.createElement('h2');
  const text = document.createElement('p');

  div.className = `notification ${type}`;
  div.style.cssText = `
    top: ${posTop}px;
    right: ${posRight}px;
  `;

  heading.textContent = title;
  heading.className = 'title';

  text.textContent = description;

  div.append(heading);
  div.append(text);
  document.body.append(div);

  setTimeout(() => div.remove(), 2000);
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
