'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  const block = document.createElement('div');
  const h2 = document.createElement('h2');
  const paragraph = document.createElement('p');

  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  h2.innerHTML = `${title}`;
  paragraph.innerHTML = `${description}`;
  paragraph.style.whiteSpace = 'pre-line';

  block.classList.add('notification');
  block.classList.add(`${type}`);
  h2.classList.add('title');
  block.style.boxSizing = 'content-box';

  body.append(block);
  block.append(h2);
  block.append(paragraph);

  setTimeout(function() {
    block.style.display = 'none';
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
