'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  notification.classList.add('notification', type);

  h2.setAttribute('class', 'title');

  h2.innerHTML = title;
  p.innerHTML = description.replace(/\n/g, '<br>');

  const script = document.querySelector('script');

  script.before(notification);

  notification.appendChild(h2);
  notification.appendChild(p);

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

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
