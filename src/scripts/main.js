'use strict';

const pushNotification = (coordinates, title, description, type) => {
  const container = document.createElement('div');

  container.classList.add('notification');

  switch (type) {
    case 'success':
      container.classList.add('success');
      break;
    case 'error':
      container.classList.add('error');
      break;
    case 'warning':
      container.classList.add('warning');
      break;
  }

  const h2Element = document.createElement('h2');

  h2Element.classList.add('title');
  h2Element.textContent = title;

  const pElement = document.createElement('p');

  pElement.textContent = description;
  container.appendChild(h2Element);
  container.appendChild(pElement);

  container.style.position = 'absolute';
  container.style.top = `${Number(coordinates.top)}px`;
  container.style.right = `${Number(coordinates.right)}px`;

  document.body.appendChild(container);

  setTimeout(() => {
    container.style.visibility = 'hidden';
  }, 2000);
};

pushNotification(
  {
    top: 10,
    right: 10,
  },
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  {
    top: 150,
    right: 10,
  },
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  {
    top: 290,
    right: 10,
  },
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
