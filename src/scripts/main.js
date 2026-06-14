'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.style.cssText = `top: ${posTop}px; right: ${posRight}px`;
  // create card
  //

  const heading = document.createElement('h2');

  heading.classList.add('title');

  heading.textContent = title;
  // create heading
  //

  const descr = document.createElement('p');

  descr.style.whiteSpace = 'pre-line';

  descr.textContent = description;
  // create description
  //

  notification.append(heading, descr);

  document.body.append(notification);

  setTimeout(() => (notification.style.display = 'none'), 2000);
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
