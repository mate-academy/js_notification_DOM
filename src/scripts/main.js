'use strict';

function pushNotification (posTop, posRight, title, description, type) {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;
  titleElement.style.fontSize = '18px';

  const descriptionElement = document.createElement('p');
  const descriptionParts = description.split('\n');

  descriptionParts.forEach((part) => {
    const p = document.createElement('p');

    p.style.margin = '0';
    p.textContent = part.trim();
    descriptionElement.appendChild(p);
  });

  notification.appendChild(titleElement);
  notification.appendChild(descriptionElement);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.visibility = 'hidden';
  }, 2000);
}

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
