'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newDiv = document.createElement('div');
  const paragraph = document.createElement('h2');
  const descr = document.createElement('p');

  paragraph.textContent = title;
  descr.textContent = description;

  newDiv.style.top = `${posTop}px`;
  newDiv.style.right = `${posRight}px`;
  newDiv.classList.add('notification', type);
  paragraph.classList.add('title');

  newDiv.appendChild(paragraph);
  newDiv.appendChild(descr);
  document.body.appendChild(newDiv);

  setTimeout(() => {
    newDiv.parentNode.removeChild(newDiv);
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
