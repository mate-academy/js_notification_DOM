'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const header = document.createElement('h2');
  const text = document.createElement('p');

  block.setAttribute('class', `nonfication ${type}`);
  header.setAttribute('class', title);
  text.textContent = description;

  document.body.append(block);
  block.append(header, text);

  block.style.position = 'fixed';
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;
  block.style.borderRadius = '16px';
  block.style.padding = '10px';

  if (type === 'success') {
    block.style.backgroundColor = 'green';
  } else if (type === 'error') {
    block.style.backgroundColor = 'yellow';
  } else if (type === 'warning') {
    block.style.backgroundColor = 'red';
  }

  setTimeout(() => {
    block.style.visibility = 'hidden';
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
