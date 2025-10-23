'use strict';

const pushNotification = (coordinates, titleText, descriptionText, type) => {
  const { top: topPos, right: rightPos } = coordinates;

  const notification = document.createElement('div');
  notification.classList.add('notification', type);

  notification.style.top = `${topPos}px`;
  notification.style.right = `${rightPos}px`;

  const title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = titleText;

  const description = document.createElement('p');
  description.textContent = descriptionText;

  notification.appendChild(title);
  notification.appendChild(description);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

// Długie teksty dzielimy na zmienne
const successText =
  'Message example.\nNotification should contain title and description.';
const errorText =
  'Message example.\nNotification should contain title and description.';
const warningText =
  'Message example.\nNotification should contain title and description.';

// Wywołania powiadomień (linie poniżej 80 znaków)
pushNotification(
  { top: 10, right: 10 },
  'Title of Success message',
  successText,
  'success'
);

pushNotification(
  { top: 150, right: 10 },
  'Title of Error message',
  errorText,
  'error'
);

pushNotification(
  { top: 290, right: 10 },
  'Title of Warning message',
  warningText,
  'warning'
);

