'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const elements = {
    container: document.createElement('div'),
    title: document.createElement('h2'),
    description: document.createElement('p'),
  };

  // build DOM
  document.body.appendChild(elements.container);
  elements.container.appendChild(elements.title);
  elements.container.appendChild(elements.description);

  // apply styles
  elements.container.className = 'notification';
  elements.container.classList.add(type);
  elements.title.className = 'title';

  // fill content
  elements.title.textContent = title;
  elements.description.textContent = description;

  // apply coordinates
  elements.container.style.top = `${posTop}px`;
  elements.container.style.right = `${posRight}px`;

  // desappire after delay 2sec
  setTimeout(() => {
    elements.container.style.display = 'none';
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
