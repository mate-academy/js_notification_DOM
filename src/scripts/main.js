'use strict';

const body = document.body;

const pushNotification = (posTop, posRight, title, description, type) => {
  const newDiv = document.createElement('div');
  const newHeading = document.createElement('h2');
  const newParagraph = document.createElement('p');

  newDiv.style.top = `${posTop}px`;
  newDiv.style.right = `${posRight}px`;

  newDiv.classList.add('notification');
  newDiv.classList.add(type);
  newHeading.classList.add('title');
  newParagraph.classList.add('description');

  newHeading.textContent = title;
  newParagraph.textContent = description;

  newDiv.appendChild(newHeading);
  newDiv.appendChild(newParagraph);
  body.appendChild(newDiv);

  setTimeout(() => {
    newDiv.style.display = 'none';
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
