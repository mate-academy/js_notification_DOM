'use strict';

const container = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const errorBox = document.createElement('div');

  errorBox.classList.add('notification');
  errorBox.classList.add(`${type}`);

  errorBox.style.top = `${posTop}px`;
  errorBox.style.right = `${posRight}px`;
  // without changing the width everything breaks
  errorBox.style.width = `315px`;

  const h2 = document.createElement('h2');

  h2.classList.add('title');
  h2.innerText = title;
  errorBox.prepend(h2);

  const p = document.createElement('p');

  p.innerText = description;
  errorBox.append(p);

  container.append(errorBox);

  setTimeout(() => {
    errorBox.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
