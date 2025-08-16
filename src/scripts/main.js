'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const divElement = document.createElement('div');
  const heading = document.createElement('h2');
  const paragraph = document.createElement('p');

  divElement.classList.add('notification', type);
  divElement.style.top = `${posTop}px`;
  divElement.style.right = `${posRight}px`;

  heading.classList.add('title');
  heading.textContent = title;
  paragraph.textContent = description;

  divElement.appendChild(heading);
  divElement.appendChild(paragraph);

  document.body.appendChild(divElement);

  setTimeout(() => {
    divElement.style.display = 'none';
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
  160,
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
