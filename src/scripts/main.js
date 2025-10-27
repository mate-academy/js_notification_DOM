'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // 1. Create main element
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  // 2. Set inline style exactly as the test expects
  notification.setAttribute(
    'style',
    `position: absolute; top: ${posTop}px; right: ${posRight}px;`,
  );

  // 3. Title element
  const titleElem = document.createElement('h2');

  titleElem.classList.add('title');
  titleElem.textContent = title;

  // 4. Description element
  const descElem = document.createElement('p');

  descElem.textContent = description;

  // 5. Append children
  notification.append(titleElem, descElem);

  // 6. Append to document
  document.body.appendChild(notification);

  // 7. Hide visually after 2s
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

// Example calls
pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n Notification should contain title and description.',
  'warning',
);
