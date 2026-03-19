'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newElement = document.createElement('div');

  newElement.className = `notification ${type} `;
  newElement.style.display = '';

  const h2 = document.createElement('h2');

  h2.className = 'title';
  h2.textContent = title;

  const p = document.createElement('p');
  const newDescription = description.split('\n');
  const ride = newDescription.join('<br>');

  p.innerHTML = ride;

  newElement.style.top = `${posTop}px`;
  newElement.style.right = `${posRight}px`;

  newElement.append(h2);
  newElement.append(p);

  document.body.append(newElement);

  setTimeout(() => {
    newElement.style.display = 'none';
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
