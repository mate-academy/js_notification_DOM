'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', `${type}`);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  const fragment = document.createDocumentFragment();

  const titleNot = document.createElement('h2');

  titleNot.classList.add('title');
  titleNot.textContent = title;

  const descriptionNot = document.createElement('p');

  descriptionNot.textContent = description;

  fragment.append(titleNot);
  fragment.append(descriptionNot);
  notification.append(fragment);

  document.body.append(notification);

  setTimeout(() => {
    notification.hidden = true;
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
