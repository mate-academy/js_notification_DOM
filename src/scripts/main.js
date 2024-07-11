'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');
  const head = document.createElement('h2');
  const descr = document.createElement('p');

  notification.className = 'notification';
  head.className = 'title';
  descr.className = 'description';

  notification.classList.add(type);

  descr.innerHTML = description;
  head.innerHTML = title;

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  document.body.append(notification);
  notification.append(head);
  notification.prepend(descr);

  setTimeout(() => {

  })
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
