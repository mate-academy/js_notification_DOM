'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const allowedTypes = ['success', 'error', 'warning'];
  const notificationType = allowedTypes.includes(type) ? type : 'warning';

  const topPosition = typeof posTop === 'number' && posTop >= 0 ? posTop : 0;
  const rightPosition =
    typeof posRight === 'number' && posRight >= 0 ? posRight : 0;

  const notificationTitle =
    title && typeof title === 'string' ? title : 'No title';
  const notificationDesc =
    description && typeof description === 'string'
      ? description
      : 'No description';

  const div = document.createElement('div');

  div.classList.add('notification', notificationType);
  div.setAttribute('role', 'status');
  div.setAttribute('aria-live', 'polite');

  div.setAttribute(
    'style',
    `position: fixed; top: ${topPosition}px; right: ${rightPosition}px;`,
  );

  const h2 = document.createElement('h2');

  h2.classList.add('title');
  h2.textContent = notificationTitle;

  const p = document.createElement('p');

  p.textContent = notificationDesc;

  div.append(h2, p);
  document.body.appendChild(div);

  setTimeout(() => (div.style.display = 'none'), 2000);
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
