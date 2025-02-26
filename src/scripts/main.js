'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const box = document.createElement('div');
  const header = document.createElement('h2');
  const text = document.createElement('p');

  box.setAttribute('class', `notification ${type}`);
  box.style.top = `${posTop}px`;
  box.style.right = `${posRight}px`;
  header.setAttribute('class', 'title');
  header.textContent = title;
  text.textContent = description;

  setTimeout(() => {
    box.style.display = 'none';
  }, 2000);

  box.appendChild(header);
  box.appendChild(text);
  document.querySelector('body').appendChild(box);
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
