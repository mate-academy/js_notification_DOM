'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const titleText = document.createElement('h2');
  const descriptionText = document.createElement('p');
  const box = document.createElement('div');
  const startTop = posTop;

  titleText.textContent = title;
  descriptionText.textContent = description;

  box.appendChild(titleText);
  box.appendChild(descriptionText);
  box.classList.add('notification', type);
  titleText.classList.add('title');
  document.body.appendChild(box);

  box.style.top = `${startTop}px`;
  box.style.right = `${posRight}px`;

  setTimeout(() => {
    box.style.display = 'none';
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
