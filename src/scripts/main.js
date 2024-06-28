'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const textContainer = document.createElement('div');

  textContainer.className = `notification ${type}`;

  Object.assign(textContainer.style, {
    top: `${posTop}px`,
    right: `${posRight}px`,
  });

  textContainer.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  document.body.append(textContainer);

  setTimeout(() => (textContainer.style.visibility = 'hidden'), 2000);
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
