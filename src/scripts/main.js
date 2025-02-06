'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationDiv = document.createElement('div');

  notificationDiv.classList.add('notification');

  const titleOfDiv = document.createElement('h2');

  titleOfDiv.classList.add('title');
  titleOfDiv.textContent = title;

  const parOfDiv = document.createElement('p');

  parOfDiv.textContent = description;

  notificationDiv.append(titleOfDiv);
  notificationDiv.append(parOfDiv);

  document.body.append(notificationDiv);

  if (type === 'success') {
    notificationDiv.classList.add('success');
  } else if (type === 'error') {
    notificationDiv.classList.add('error');
  } else {
    notificationDiv.classList.add('warning');
  }

  notificationDiv.style.position = 'fixed';
  notificationDiv.style.top = `${posTop}px`;
  notificationDiv.style.right = `${posRight}px`;

  // notificationDiv.style.transition = 'opacity 0.5s ease';
  // notificationDiv.style.opacity = '1';

  // setTimeout(() => {
  //   notificationDiv.style.opacity = '0';

  //   setTimeout(() => {
  //     notificationDiv.remove();
  //   }, 500);
  // }, 2000);

  setTimeout(() => {
    notificationDiv.remove();
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
  160,
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
