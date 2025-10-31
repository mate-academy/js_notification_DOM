'use strict';

const pushNotification = (coordinates, title, description, type) => {
  const { top: topPosition, right } = coordinates;
  const container = document.createElement('div');
  const titleNotification = document.createElement('h2');
  const paragraph = document.createElement('p');
  const bodyEl = document.querySelector('body');

  container.classList.add('notification');
  container.classList.add(type);
  titleNotification.classList.add('title');
  titleNotification.textContent = title;
  paragraph.textContent = description;
  container.style.top = `${topPosition}px`;
  container.style.right = `${right}px`;

  container.insertAdjacentElement('beforeend', titleNotification);
  container.insertAdjacentElement('beforeend', paragraph);
  bodyEl.insertAdjacentElement('afterbegin', container);

  setTimeout(() => (container.style.display = 'none'), 2000);
};

pushNotification(
  { top: 10, right: 10 },
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  { top: 150, right: 10 },
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  { top: 290, right: 10 },
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
