'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const container = document.createElement('div');

  container.classList.add('notification');

  let normalizedType;

  if (['success', 'error', 'warning'].includes(type)) {
    normalizedType = type;
  } else {
    normalizedType = 'success';
  }

  container.classList.add(normalizedType);

  container.style.top = `${Number(posTop)}px`;
  container.style.right = `${Number(posRight)}px`;

  const heading = document.createElement('h2');

  heading.classList.add('title');

  heading.textContent =
    title !== undefined && title !== null ? String(title) : '';

  const desc = document.createElement('p');

  desc.textContent =
    description !== undefined && description !== null
      ? String(description)
      : '';

  container.append(heading, desc);
  document.body.appendChild(container);

  setTimeout(() => {
    container.style.display = 'none';
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
