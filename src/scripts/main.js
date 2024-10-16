'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const validTypes = ['success', 'error', 'warning'];

  if (!validTypes.includes(type)) {
    // eslint-disable-next-line no-console
    console.error(
      `Invalid notification type: "${type}". Expected one of ${validTypes.join(', ')}.`,
    );

    return;
  }

  const div = document.createElement('div');

  div.classList.add('notification', type);
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  const titles = document.createElement('h2');

  titles.className = 'title';
  titles.textContent = title;
  div.appendChild(titles);

  const descriptions = document.createElement('p');

  descriptions.textContent = description;
  div.appendChild(descriptions);

  document.body.appendChild(div);

  setTimeout(() => {
    div.style.display = 'none';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  `Message example. Notification should contain title and description.`,
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  `Message example. Notification should contain title and description.`,
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  `Message example. Notification should contain title and description.`,
  'warning',
);
