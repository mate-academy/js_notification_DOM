'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const blockEl = document.createElement('div');
  const titleEl = document.createElement('h2');
  const textEl = document.createElement('p');

  blockEl.classList = `notification ${type}`;
  titleEl.classList = 'title';

  titleEl.innerText = title;
  textEl.innerText = description;

  blockEl.appendChild(titleEl);
  blockEl.appendChild(textEl);

  blockEl.style.top = posTop + 'px';
  blockEl.style.right = posRight + 'px';
  // blockEl.style.display = 'none';

  document.body.appendChild(blockEl);
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
