'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  block.classList.add('notification');
  h2.classList.add('title');

  h2.textContent = title;
  p.textContent = description;

  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  block.append(h2);
  block.append(p);
  document.body.append(block);

  const removeNotification = () => {
    block.style.display = 'none';
  };

  switch (type) {
    case 'success':
      block.classList.add('success');
      break;
    case 'warning':
      block.classList.add('warning');
      break;
    case 'error':
      block.classList.add('error');
      break;
  }

  setTimeout(removeNotification, 2000);
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
