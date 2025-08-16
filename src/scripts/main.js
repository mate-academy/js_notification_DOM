'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newNotification = document.createElement('div');
  const titleNotification = document.createElement('h2');

  titleNotification.textContent = title;
  titleNotification.classList.add('title');

  const descriptionNotification = document.createElement('p');

  descriptionNotification.textContent = description;

  newNotification.append(titleNotification, descriptionNotification);

  newNotification.classList.add('notification', type);

  newNotification.style.top = posTop + 'px';
  newNotification.style.right = posRight + 'px';

  document.body.appendChild(newNotification);

  setTimeout(() => {
    newNotification.style.opacity = '0';
    newNotification.style.transition = 'opacity 0.5s ease-in-out';

    setTimeout(() => {
      newNotification.remove();
    }, 500);
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
