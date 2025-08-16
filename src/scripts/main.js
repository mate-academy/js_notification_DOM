'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const nosiContainer = document.createElement('div');
  const titleType = document.createElement('h2');

  titleType.textContent = title;

  const text = document.createElement('p');

  text.textContent = description;
  nosiContainer.className = 'notification';
  nosiContainer.classList.add(type);
  titleType.className = 'title';

  nosiContainer.style.top = `${posTop}px`;
  nosiContainer.style.right = `${posRight}px`;
  nosiContainer.style.position = 'absolute';

  document.body.appendChild(nosiContainer);
  nosiContainer.appendChild(titleType);
  nosiContainer.appendChild(text);

  setTimeout(() => {
    document.body.removeChild(nosiContainer);
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
