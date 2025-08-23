'use strict';

function pushNotification(topPoz, rightPaz, example, message, type) {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.append(h2, p);
  div.classList = `notification ${type}`;
  h2.classList = 'title';
  p.textContent = message;
  h2.textContent = example;

  div.style.position = 'absolute';
  div.style.right = `${rightPaz}px`;
  div.style.top = `${topPoz}px`;

  document.body.append(div);

  setTimeout(() => {
    div.style.visibility = 'hidden';
  }, 2000);
}

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
