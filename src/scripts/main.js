'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newDiv = document.createElement('div');

  newDiv.classList.add('notification');

  newDiv.classList.add(type);
  newDiv.style.right = `${posRight}px`;
  newDiv.style.top = `${posTop}px`;

  const newH = document.createElement('h2');

  newH.classList.add('title');
  newH.textContent = title;
  newDiv.append(newH);

  const newP = document.createElement('p');

  newP.textContent = description;
  newDiv.append(newP);

  document.body.appendChild(newDiv);

  setTimeout(() => {
    newDiv.remove();
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
