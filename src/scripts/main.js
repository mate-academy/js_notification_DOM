'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newDiv = document.createElement('div');

  newDiv.className = `notification ${type}`;
  newDiv.style.top = `${posTop}px`;
  newDiv.style.right = `${posRight}px`;

  const newH = document.createElement('h2');

  newH.className = 'title';
  newH.textContent = title;
  newDiv.appendChild(newH);

  const newP = document.createElement('p');

  newP.textContent = description;
  newDiv.appendChild(newP);
  document.body.appendChild(newDiv);

  setTimeout(() => {
    newDiv.style.visibility = 'hidden';
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
