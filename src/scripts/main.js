'use strict';

const pushNotification = (
  posTop,
  posRight,
  title,
  description,
  type,
  duration,
) => {
  const newNotification = document.createElement('div');
  const newTitle = document.createElement('h2');
  const newDescription = document.createElement('p');

  newNotification.classList.add('notification', type);
  newTitle.classList.add('title');

  newTitle.textContent = title;
  newDescription.textContent = description;

  newNotification.append(newTitle, newDescription);

  newNotification.style.top = `${posTop}px`;
  newNotification.style.right = `${posRight}px`;

  document.body.append(newNotification);

  setTimeout(() => {
    newNotification.style.display = 'none';
  }, duration);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  `Message example.
  Notification should contain title and description.`,
  'success',
  2000,
);

pushNotification(
  150,
  10,
  'Title of Error message',
  `Message example.
  Notification should contain title and description.`,
  'error',
  2000,
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  `Message example.
  Notification should contain title and description.`,
  'warning',
  2000,
);
