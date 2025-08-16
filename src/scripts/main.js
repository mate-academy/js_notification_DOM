'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const popNotification = document.createElement('div');
  const popTitle = document.createElement('h2');
  const popDescription = document.createElement('p');

  popNotification.classList.add('notification', type);
  popTitle.classList.add('title');
  popDescription.classList.add('description');

  document.body.append(popNotification);
  popNotification.append(popTitle);
  popNotification.append(popDescription);

  popNotification.style.position = 'fixed';
  popNotification.style.top = posTop + 'px';
  popNotification.style.right = posRight + 'px';

  popTitle.innerText = title;
  popDescription.innerText = description;

  setTimeout(() => {
    popNotification.remove();
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
