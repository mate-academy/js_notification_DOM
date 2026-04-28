'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  const titleEl = document.createElement('h2');

  titleEl.className = 'title';
  titleEl.textContent = title;

  const descEl = document.createElement('p');

  descEl.textContent = description;

  notification.append(titleEl, descEl);
  // notification.style.position = 'absolute';
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.display = 'none';
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

pushNotification(10, 10, 'Success', 'Everything worked!', 'success');
pushNotification(10, 60, 'Error', 'Something went wrong!', 'error');
pushNotification(10, 110, 'Warning', 'Be careful!', 'warning');
